import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
// import Icon from "../components/ui/Icon.tsx";

export interface BannerItem {
    image?: {
        src?: ImageWidget;
        alt?: string;
    };
    imageMobile?: {
        src?: ImageWidget;
        alt?: string;
    };
    content?: {
        url?: string;
    };
}

export interface Props {
    /**
     * @description Array de banners a serem exibidos. O máximo é 3 banners.
     */
    banners: BannerItem[];
    /**
     * @description Largura máxima dos banners no desktop (em pixels).
     * @default 1260
     */
    maxWidthDesktop?: number;
    /**
     * @description Altura máxima dos banners no desktop (em pixels).
     * @default 572
     */
    maxHeightDesktop?: number;
    /**
     * @description Largura máxima dos banners no mobile (em pixels).
     * @default 373
     */
    maxWidthMobile?: number;
    /**
     * @description Altura máxima dos banners no mobile (em pixels).
     * @default 537
     */
    maxHeightMobile?: number;
}

export default function BannerCategory({
    banners,
    maxWidthDesktop = 1260,
    maxHeightDesktop = 572,
    maxWidthMobile = 373,
    maxHeightMobile = 537,
}: Props) {
    // Limita o número de banners a 3
    const displayBanners = banners.slice(0, 3);

    return (
        <div class="w-full lg:mt-11 flex flex-col lg:flex-row justify-center gap-6">
            {displayBanners.map((banner, index) => (
                <a
                    href={banner.content?.url || "#"}
                    class="w-full lg:w-1/3"
                    key={index}
                >
                    <div class="w-full">
                        {/* Imagem para Desktop */}
                        <Image
                            src={banner.image?.src || ""}
                            width={maxWidthDesktop}
                            height={maxHeightDesktop}
                            alt={banner.image?.alt || ""}
                            class="hidden w-full lg:block"
                            style={{
                                maxWidth: `${maxWidthDesktop}px`,
                                maxHeight: `${maxHeightDesktop}px`,
                            }}
                        />
                        {/* Imagem para Mobile */}
                        <Image
                            src={banner.imageMobile?.src || ""}
                            width={maxWidthMobile}
                            height={maxHeightMobile}
                            alt={banner.imageMobile?.alt || ""}
                            class="w-full lg:hidden"
                            style={{
                                maxWidth: `${maxWidthMobile}px`,
                                maxHeight: `${maxHeightMobile}px`,
                            }}
                        />
                    </div>
                </a>
            ))}
        </div>
    );
}
