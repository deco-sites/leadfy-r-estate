import Icon from "../components/ui/Icon.tsx";
import Slider from "../components/ui/Slider.tsx";
import SliderJS from "./SliderJS.tsx";
import { useId } from "../sdk/useId.ts";
import ZoomImage from "./ZoomImage.tsx";
import FormProductPage from "site/islands/FormProductPage.tsx";
import Image from "apps/website/components/Image.tsx";
import type { PropertiesList } from "../loaders/propertiesData.ts";

export interface Props {
  propertiesList?: PropertiesList;
  showPriceText?: boolean;
  priceText?: string;
  storeId?: string;
}

const HeroProductPage = ({ showPriceText, priceText, storeId, propertiesList = [] }: Props) => {
  const currentSlug = window?.location?.pathname?.split("/")[2];
  const property = propertiesList.find((prop) => prop?.slug === currentSlug);
  const id = useId();

  return (
    <div className="container mx-auto px-4 md:py-16 py-8 lg:px-0 md:mt-28 mt-20">
      <div id={id} className="flex flex-col md:flex-row justify-between md:space-x-4 lg:px-[5%]">
        {/* Galeria com ajuste mobile */}
        <div className="w-full md:-mt-0 -mt-4">
          <GalleryProductPage images={property?.images || []} />
        </div>

        {/* Formulário desktop */}
        <div className="hidden md:block w-full md:w-1/3">
          <FormProductPage storeId={storeId} />
        </div>
      </div>

      {/* Formulário mobile */}
      <div className="md:hidden block mt-6">
        <FormProductPage storeId={storeId} />
      </div>

      {/* Detalhes do Produto */}
      <div className="container mt-6 lg:px-[5%]">
        <h2 className="text-[24px] md:text-[32px] font-extrabold text-privia-passion">{property?.title}</h2>
        {showPriceText && <span className="w-[150px] text-xs">{priceText}</span>}
        <p className="text-xl md:text-2xl mt-2 text-[#787878] font-extrabold">{property?.price}</p>
      </div>

      <div className="container flex flex-col md:flex-row gap-4 w-full mt-4 lg:px-[5%]">
        <ul className="flex flex-row items-center gap-4 text-xs text-[#787878]">
          <li>{property?.rooms} BEDROOMS</li>
          <li>&bull; {property?.bathrooms} FULL BATHS</li>
          <li>&bull; {property?.areaSize} Ft</li>
          {property?.label && (
            <li className="bg-privia-prestige text-privia-passion py-1 px-2 rounded">{property?.label}</li>
          )}
        </ul>
      </div>
    </div>
  );
};

function GalleryProductPage({ images }: { images: string[] }) {
  const id = useId();
  const aspectRatio = 764 / 1586;

  return (
    <div id={id} className="w-full relative flex justify-center">
      <Slider className="carousel carousel-center w-full overflow-hidden border-none">
        {images.map((image, index) => (
          <Slider.Item
            key={index}
            index={index}
            className="carousel-item flex items-center justify-center border-none w-full"
          >
            <ZoomImage>
              <div 
                className="w-full relative" 
                style={{
                  height: `calc(95vw * ${aspectRatio})`, // Ajuste mobile
                  maxHeight: '70vh' // Mantém desktop
                }}
              >
                <img
                  className="w-full h-full absolute top-0 left-0 object-contain border-none"
                  src={image}
                  alt={`Imagem ${index + 1}`}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              </div>
            </ZoomImage>
          </Slider.Item>
        ))}
      </Slider>

      {images.length > 1 && (
        <>
          <div className="flex items-center justify-center z-10 absolute left-2 md:left-0 top-[50%] transform -translate-y-1/2">
            <Slider.PrevButton className="p-2">
              <Icon
                className="text-white bg-black/30 rounded-full p-1"
                size={34}
                id="ChevronLeft"
                strokeWidth={3}
              />
            </Slider.PrevButton>
          </div>
          <div className="flex items-center justify-center z-10 absolute right-2 md:right-0 top-[50%] transform -translate-y-1/2">
            <Slider.NextButton className="p-2">
              <Icon
                className="text-white bg-black/30 rounded-full p-1"
                size={34}
                id="ChevronRight"
                strokeWidth={3}
              />
            </Slider.NextButton>
          </div>
        </>
      )}

      <SliderJS rootId={id} infinite />
    </div>
  );
}

export default HeroProductPage;
