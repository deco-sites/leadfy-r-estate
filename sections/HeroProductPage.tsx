import Icon from "../components/ui/Icon.tsx";
import Slider from "../components/ui/Slider.tsx";
import SliderJS from "../islands/SliderJS.tsx";
import { useId } from "../sdk/useId.ts";
import ZoomImage from "../islands/ZoomImage.tsx";
import FormProductPage from "site/islands/FormProductPage.tsx";
import Image from "apps/website/components/Image.tsx";
import type { PropertiesList } from "../loaders/propertiesData.ts";
import type { SectionProps } from "deco/types.ts";

export interface Props {
  propertiesList?: PropertiesList;
}

const HeroProductPage = ({url, properties}: SectionProps<typeof loader>) => {
  
  const currentSlug = url?.split("/")[2];
  const property = properties.filter

  console.log(property)
  console.log(currentSlug)

  const id = useId();

  return (
    <div className="container mt-28 mx-auto px-4 py-16 lg:px-0">
      <div id={id} className="flex justify-center space-x-4 lg:px-[5%]">
 
        <GalleryProductPage
                images={property[3]?.images}
              />
        
        {/* Form */}
        <div className="hidden md:block">
          <FormProductPage />
        </div>
      </div>

      {/* Product Details */}
      <div className="container mt-8 lg:px-[5%]">
        <h2 className="text-[32px] font-extrabold text-privia-passion">{property[0]?.title}</h2>
        <p className="text-2xl mt-2 text-[#787878] font-extrabold">{property[0]?.price}</p>
      </div>
      <div className="container flex flex-col md:flex-rowgap-4 w-full mt-4 lg:px-[5%]">
        <ul className="flex flex-row gap-4 text-xs text-[#787878]">
          <li>{property[0]?.rooms} BEDROOMS</li>
          <li>&bull; {property[0]?.bathrooms} FULL BATHS</li>
          <li>&bull; {property[0]?.areaSize} Ft</li>
        </ul>
      <div className="md:hidden block mt-9">
          <FormProductPage />
      </div>
      </div>
    </div>
  );
};

function GalleryProductPage({ images }: { images: string[] }) {
  const id = useId();
  const width = 650;
  const height = 650;
  const aspectRatio = `${width} / ${height}`;

  return (
    <div
      id={id}
      class="grid grid-cols-[48px_1fr_48px] sm:grid-cols-[120px_1fr_120px] grid-rows-[1fr_48px_1fr_64px]"
    >
      <Slider class="carousel carousel-center w-full col-span-full row-span-full gap-2 max-w-[650px] max-h-[650px]">
        {images?.map((image, index) => (
          <Slider.Item
            index={index}
            class="carousel-item w-full flex items-center"
          >
            <ZoomImage>
              <img
                class="w-full h-max"
                style={{aspectRatio}}
                src={image}
                width={650}
                />
            </ZoomImage>
          </Slider.Item>
        ))}
      </Slider>

      {/* {images?.length! > 1 ? <Buttons /> : null} */}

      <Dots images={images} />

      <SliderJS rootId={id} infinite />
    </div>
  );
}

function Dots({ images }: { images: string[] }) {
  return (
    <>
      <ul class="carousel justify-center col-span-full gap-2 z-10 pt-5">
        {images?.map((image, index) => (
          <li class="carousel-item">
            <Slider.Dot index={index}>
              <div class="w-20 h-20 py-5 border-[1px] border-none flex justify-center items-center opacity-40 group-disabled:opacity-100">
                <Image
                  class="w-full h-max"
                  src={image}
                  width={120}
                />
              </div>
            </Slider.Dot>
          </li>
        ))}
      </ul>
    </>
  );
}

function Buttons() {
  return (
    <>
      <div class="flex items-center justify-center z-10 col-start-1 row-start-2">
        <Slider.PrevButton>
          <Icon
            class="text-white"
            size={26}
            id="ChevronLeft"
            strokeWidth={5}
          />
        </Slider.PrevButton>
      </div>
      <div class="flex items-center justify-center z-10 col-start-3 row-start-2">
        <Slider.NextButton>
          <Icon
            class="text-white"
            size={26}
            id="ChevronRight"
            strokeWidth={5}
          />
        </Slider.NextButton>
      </div>
    </>
  );
}

export const loader = async (req: Request, { propertiesList = [] }:Props) => {

  const url = req.url
  console.log("loader", url)
  const properties = propertiesList
  console.log("loader", properties)
  return {
    url: url,
    properties: properties
  };
};

export default HeroProductPage;