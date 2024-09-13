import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../ui/Icon.tsx";
import type { PropertiesList } from "../loaders/propertiesData.ts";

export interface Props {
  property: PropertiesList;
  showPriceText?: boolean;
  priceText?: string;
}

export default function ShelfCard({ showPriceText, priceText, property }: Props) {
  return (
    <a href={property?.url} class="w-full flex flex-col gap-4 bg-zinc-100 rounded-md">
      <div class="w-full">
        <Image
          src={property?.imageFeatured || ""}
          width={424}
          height={240}
          alt={property?.slug || ""}
          class="w-full"
        />
      </div>
      <div class="w-full flex flex-col gap-2 mx-3 pb-4">
        <p class="font-semibold">{property?.title}</p>
        <div class="flex flex-col">
          {showPriceText && (
            <span class="w-[150px] text-xs">{priceText}</span>
          )}
          <span class="text-privia-passion font-semibold">{property?.price}</span>
        </div>
        <div class="w-full flex gap-4">
          {/* <div class="flex gap-1">
            <Icon id="Car" size={27} strokeWidth={0.1} />
            <span class="text-[#6D737A]">{property?.parkingSpaces
            }</span>
          </div> */}
          <div class="flex gap-1">
            <Icon id="BedIcon" size={27} strokeWidth={0.1} />
            <span class="text-[#6D737A]">{property?.rooms}</span>
          </div>
          <div class="flex gap-1">
            <Icon id="Bathtub" size={27} strokeWidth={0.1} />
            <span class="text-[#6D737A]">{property?.bathrooms}</span>
          </div>
          <div class="flex gap-1">
            <Icon id="ArrowsOut" size={27} strokeWidth={0.1} />
            <span class="text-[#6D737A]">{property?.areaSize} ft</span>
          </div>          
        </div>
      </div>
    </a>
  );
}
