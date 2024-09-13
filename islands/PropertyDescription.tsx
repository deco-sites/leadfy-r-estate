import { useSignal } from '@preact/signals';
import type { PropertiesList } from "../loaders/propertiesData.ts";

export interface Props {
  propertiesList?: PropertiesList;
}

const PropertyDescription = ({ propertiesList = [] }: Props) => {

  const showFullDescription = useSignal(true);
  const currentSlug = window?.location?.pathname?.split("/")[2];
  const property = propertiesList.filter(prop => {
    if (prop?.slug === currentSlug) {
      return prop
    }
  })

  return (
    <div class="container mx-auto px-4 pb-8 lg:px-[5%]">
        <h3 class="text-[26px] font-extrabold text-[#ff3f3f] mb-8">Property Description</h3>
        <p class={`text-base text-black ${showFullDescription.value ? 'line-clamp-none' : 'line-clamp-3'}`}>
          {property[0]?.description}
        </p>
        {/* <button
              class="flex items-center text-[#ff3f3f] mt-4"
              onClick={() => showFullDescription.value = !showFullDescription.value}
            >
              {showFullDescription.value ? 'Read Less' : 'Read More'}
              <svg
                class={`w-4 h-4 ml-2 transition-transform transform ${showFullDescription.value ? 'rotate-180' : ''}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button> */}
      </div>
  );
}

export default PropertyDescription;