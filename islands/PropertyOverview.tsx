import type { PropertiesList } from "../loaders/propertiesData.ts";

export interface Props {
  propertiesList?: PropertiesList;
}

const PropertyOverview = ({ propertiesList = [] }: Props) => {

  const currentSlug = window?.location?.pathname?.split("/")[2];
  const property = propertiesList.filter(prop => {
    if (prop?.slug === currentSlug) {
      return prop
    }
  })

  return (
    <div class="container mx-auto px-4 flex flex-col gap-[5%] lg:px-[5%] lg:flex-row">
      <div>
        <h3 class="text-[26px] font-extrabold text-[#ff3f3f] mb-8">Overview</h3>
        <div class="grid grid-cols-2 gap-4 w-fit">
          <div class="font-medium text-gray-700">Property Type</div>
          <div class="text-gray-900">{property[0]?.type}</div>

          <div class="font-medium text-gray-700">Location</div>
          <div class="text-gray-900">{property[0]?.location}</div>

          <div class="font-medium text-gray-700">Status</div>
          <div class="text-gray-900">{property[0]?.status}</div>

          <div class="font-medium text-gray-700">Year Built</div>
          <div class="text-gray-900">{property[0]?.yearBuilt}</div>
        </div>
      </div>
      <div>
        <h3 class="text-[26px] font-extrabold text-[#ff3f3f] mb-8">Features</h3>
        <div class="grid grid-cols-2 gap-4 w-fit">
          <div class="text-gray-900">{property[0]?.features}</div>
        </div>
      </div>
    </div>
  );
}

export default PropertyOverview;