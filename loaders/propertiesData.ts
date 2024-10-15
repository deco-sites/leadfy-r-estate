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

    const propertiesResult: string[] = posts.map((post: any) => {
        
        return (
            {
                areaSize: post?.area_size?._cdata,
                bathrooms: post?.bathrooms?._cdata,
                description: post?.Content?._cdata,
                features: post?.Feature?._text || post?.Feature?._cdata,
                id: post?.ID?._cdata,
                images: post?.ImageURL?._cdata?.split('|'),
                imageFeatured: post?.ImageFeatured?._cdata,
                label: post?.Label?._cdata,
                location: post?.Location?._cdata,
                mapLocation: {
                    lat: post?.lat?._cdata,
                    lng: post?.lng?._cdata,
                },
                postModifiedDate: post?.PostModifiedDate?._cdata, 
                price: formatPrice(Number(post?.Price?._cdata)),
                rooms: post?.rooms?._cdata,
                slug: post?.Slug?._cdata,
                status: post?.property_status?._cdata,
                title: post?.Title?._cdata,
                type: post?.Type?._cdata,                
                url: `/properties/${post?.Slug?._cdata}/${post?.ID?._cdata}`,
                yearBuilt: post?.year_built?._cdata
            }
        )
    })

    return propertiesResult || [];
}
