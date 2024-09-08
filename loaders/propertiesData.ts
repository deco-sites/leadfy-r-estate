import type { RequestURLParam } from "apps/website/functions/requestToParam.ts";
import { xml2js } from "https://deno.land/x/xml2js@1.0.0/mod.ts";
import { formatPrice } from "../sdk/format.ts";

export type PropertiesList = string[];

export interface Props {
    numberOfProperties?: number;
  }

export default async function propertiesData(
    {numberOfProperties = 1}: Props,
    _req: Request,
): Promise<PropertiesList> {
    // const { Parser } = xml2js
    // const { slug, idloja } = props;

    const response = await fetch(
        `https://darkgreen-sparrow-978409.hostingersite.com/wp-load.php?security_key=71970be4e06301b8&export_id=3&action=get_data`,
    );
    const text = await response.text();
    const obj = xml2js(text, {
        compact: true,
    });    
    const posts = obj.data.post
    
    const propertiesResult: string[] = posts.map(post => {
        return (
            {
                areaSize: post?.area_size?._text,
                bathrooms: post?.bathrooms?._text,
                description: post?.Content?._cdata,
                features: post?.Feature?._text,
                id: post?.ID?._text,
                images: post?.ImageURL?._text?.split('|'),
                imageFeatured: post?.ImageFeatured?._text,
                location: post?.Location?._text,
                mapLocation: {
                    lat: post?.lat?._text,
                    lng: post?.lng?._text,
                },
                postModifiedDate: post?.PostModifiedDate?._text, 
                price: formatPrice(Number(post?.price?._text))                ,
                rooms: post?.rooms?._text,
                slug: post?.Slug?._text,
                title: post?.Title?._text,
                type: post?.Type?._text,                
                url: `/properties/${post?.Slug?._text}`,
            }
        )
    })

    return propertiesResult || [];
}
