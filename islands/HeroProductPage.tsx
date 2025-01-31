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
  const property = propertiesList.find(prop => prop?.slug === currentSlug);
  const id = useId();

  return (
    <div className="container mt-16 md:mt-28 mx-auto px-4 py-8 md:py-16 lg:px-0">
      <div id={id} className="flex flex-col md:flex-row justify-between md:space-x-4 lg:px-[5%]">
        
        {/* Galeria de imagens */}
        <GalleryProductPage images={property?.images || []} />

        {/* Formulário ao lado da galeria */}
        <div className="hidden md:block md:w-1/3 lg:pl-8">
          <FormProductPage storeId={storeId} />
        </div>
      </div>

      {/* Detalhes do Produto */}
      <div className="container mt-6 md:mt-8 lg:px-[5%]">
        <h2 className="text-2xl md:text-[32px] font-extrabold text-privia-passion">
          {property?.title}
        </h2>
        {showPriceText && (
          <span className="block mt-2 md:mt-0 text-xs md:text-sm">{priceText}</span>
        )}
        <p className="text-xl md:text-2xl mt-2 text-[#787878] font-extrabold">
          {property?.price}
        </p>
      </div>

      <div className="container flex flex-col md:flex-row gap-4 w-full mt-4 lg:px-[5%]">
        <ul className="flex flex-wrap items-center gap-2 md:gap-4 text-sm md:text-xs text-[#787878]">
          <li>{property?.rooms} BEDROOMS</li>
          <li className="hidden md:block">&bull;</li>
          <li>{property?.bathrooms} FULL BATHS</li>
          <li className="hidden md:block">&bull;</li>
          <li>{property?.areaSize} Ft</li>
          {property?.label && (
            <li className="w-full md:w-auto mt-2 md:mt-0 bg-privia-prestige text-privia-passion py-1 px-2 rounded text-sm">
              {property?.label}
            </li>
          )}
        </ul>

        {/* Formulário abaixo da galeria em telas pequenas */}
        <div className="md:hidden block mt-6 w-full">
          <FormProductPage storeId={storeId} />
        </div>
      </div>
    </div>
  );
};

function GalleryProductPage({ images }: { images: string[] }) {
  const id = useId();
  const width = 1586;
  const height = 764;

  return (
    <div id={id} className="w-full relative flex justify-center">
      <Slider className="carousel carousel-center w-full overflow-hidden border-none">
        {images.map((image, index) => (
          <Slider.Item
            key={index}
            index={index}
            className="carousel-item flex items-center justify-center border-none"
          >
            <ZoomImage>
              <img
                className="w-full h-auto min-h-[350px] max-h-[70vh] md:max-h-[500px] object-contain border-none"
                src={image}
                width={width}
                height={height}
                alt={`Imagem ${index + 1}`}
                loading={index === 0 ? "eager" : "lazy"}
                decoding={index === 0 ? "auto" : "async"}
              />
            </ZoomImage>
          </Slider.Item>
        ))}
      </Slider>

      {/* Botões de Navegação */}
      {images.length > 1 && <Buttons />}

      {/* Controles do Slider */}
      <SliderJS rootId={id} infinite />
    </div>
  );
}

function Dots({ images }: { images: string[] }) {
  return (
    <ul className="carousel justify-center col-span-full gap-2 z-10 pt-5 overflow-x-auto">
      {images.map((image, index) => (
        <li key={index} className="carousel-item">
          <Slider.Dot index={index}>
            <div className="w-16 h-16 md:w-20 md:h-20 py-4 md:py-5 border-[1px] border-none flex justify-center items-center opacity-40 group-disabled:opacity-100">
              <Image
                className="w-full h-max border-none"
                src={image}
                width={120}
              />
            </div>
          </Slider.Dot>
        </li>
      ))}
    </ul>
  );
}

function Buttons() {
  return (
    <>
      <div className="flex items-center justify-center z-10 absolute left-2 md:left-0 top-[50%] transform -translate-y-1/2">
        <Slider.PrevButton className="bg-black/30 rounded-full p-2 md:p-3">
          <Icon className="text-white" size={24} id="ChevronLeft" strokeWidth={5} />
        </Slider.PrevButton>
      </div>
      <div className="flex items-center justify-center z-10 absolute right-2 md:right-0 top-[50%] transform -translate-y-1/2">
        <Slider.NextButton className="bg-black/30 rounded-full p-2 md:p-3">
          <Icon className="text-white" size={24} id="ChevronRight" strokeWidth={5} />
        </Slider.NextButton>
      </div>
    </>
  );
}

export default HeroProductPage;
