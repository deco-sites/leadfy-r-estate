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
        `https://darkgreen-sparrow-978409.hostingersite.com/wp-content/uploads/wpallexport/exports/b7548f9ce4b89f6dd0c98409d2a6622e/current-Leadfy.xml?wpae_nocache=1088820710`,
    );
    const text = await response.text();
    const obj = xml2js(text, {
        compact: true,
    });    
    const posts = obj.data.post
    

    const propertiesResult: string[] = posts.map((post: any) => {
        
        return (
            {
                areaSize: post?.area_size?._text,
                bathrooms: post?.bathrooms?._text,
                description: post?.Content?._cdata,
                features: post?.Feature?._text || post?.Feature?._cdata,
                id: post?.ID?._text,
                images: post?.ImageURL?._text?.split('|'),
                imageFeatured: post?.ImageFeatured?._text,
                label: post?.Label?._text,
                location: post?.Location?._text,
                mapLocation: {
                    lat: post?.lat?._text,
                    lng: post?.lng?._text,
                },
                postModifiedDate: post?.PostModifiedDate?._text, 
                price: formatPrice(Number(post?.price?._text)),
                rooms: post?.rooms?._text,
                slug: post?.Slug?._text,
                status: post?.property_status?._text,
                title: post?.Title?._text,
                type: post?.Type?._text,                
                url: `/properties/${post?.Slug?._text}/${post?.ID?._text}`,
                yearBuilt: post?.year_built?._text
            }
        )
    })

    return propertiesResult || [];
}
