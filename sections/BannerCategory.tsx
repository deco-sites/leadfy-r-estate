import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
// import Icon from "../components/ui/Icon.tsx";


export interface Props {
    image?: {
        src?: ImageWidget;
        alt?: string;
    };
    imageMobile?: {
        src?: ImageWidget;
        alt?: string;
    };
    content?: {
        // title?: string;
        // description?: string;
        url?: string;
    };
}

export default function BannerCategory({ image, imageMobile, content }: Props) {
    
    return (
        <div class="w-full mt-[76px] lg:mt-[144px]">
            <a href={content?.url} class="w-full">
                <div class="w-full">
                    <Image
                        src={image?.src || ""}
                        width={1440}
                        height={400}
                        alt={image?.alt || ""}
                        class="hidden w-full lg:block"
                    />
                    <Image
                        src={imageMobile?.src || ""}
                        width={375}
                        height={300}
                        alt={imageMobile?.alt || ""}
                        class="w-full lg:hidden"
                    />
                </div>
                {/* <div class="w-full h-[537px] px-[10%] flex flex-col gap-4 absolute top-0 left-0 flex justify-center items-center lg:h-[572px] lg:px-[20%] lg:gap-8">
                    <h1 class="text-xl font-bold text-center text-white lg:text-5xl">{content?.title}</h1>
                    <p class="text-lg font-semibold	text-center text-white lg:text-5xl">{content?.description}</p>
                </div> */}
            </a>
        </div>
    );
}
