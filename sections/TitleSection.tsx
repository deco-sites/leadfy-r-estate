import { HTMLWidget as HTML } from "apps/admin/widgets.ts";


interface TitleSectionProps {
 title?: string;
 description: HTML;   
}

const TitleSection = ( { title, description }: TitleSectionProps) => {
    return ( 
        <div className="container mx-auto flex flex-col gap-4 items-center py-6">
            <div className="text-3xl md:text-5xl font-bold">{title}</div>
            <div className="flex md:max-w-[80%] text-center mx-auto" dangerouslySetInnerHTML={{ __html: description }}></div>
        </div>
     );
}
 
export default TitleSection;