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
    <div className="container mt-28 mx-auto px-4 py-16 lg:px-0">
      <div id={id} className="flex flex-col md:flex-row justify-between space-x-4 lg:px-[5%]">
        
        {/* Galeria de imagens */}
        <GalleryProductPage images={property?.images || []} />

        {/* Formulário ao lado da galeria */}
        <div className="hidden md:block w-1/3">
          <FormProductPage storeId={storeId} />
        </div>
      </div>

      {/* Detalhes do Produto */}
      <div className="container mt-8 lg:px-[5%]">
        <h2 className="text-[32px] font-extrabold text-privia-passion">{property?.title}</h2>
        {showPriceText && (
          <span className="w-[150px] text-xs">{priceText}</span>
        )}
        <p className="text-2xl mt-2 text-[#787878] font-extrabold">{property?.price}</p>
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

        {/* Formulário abaixo da galeria em telas pequenas */}
        <div className="md:hidden block mt-9">
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
    <div id={id} className="w-full md:w-2/3 max-w-[1000px] relative flex justify-center">
      <Slider className="carousel carousel-center w-full overflow-hidden border-none">
        {images.map((image, index) => (
          <Slider.Item
            key={index}
            index={index}
            className="carousel-item flex items-center justify-center border-none"
          >
            <ZoomImage>
              <img
                className="w-full h-auto max-h-[90vh] md:max-h-[500px] object-contain border-none"
                src={image}
                width={width}
                height={height}
                alt={`Imagem ${index + 1}`}
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
    <ul className="carousel justify-center col-span-full gap-2 z-10 pt-5">
      {images.map((image, index) => (
        <li key={index} className="carousel-item">
          <Slider.Dot index={index}>
            <div className="w-20 h-20 py-5 border-[1px] border-none flex justify-center items-center opacity-40 group-disabled:opacity-100">
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
      <div className="flex items-center justify-center z-10 absolute left-0 top-[50%] transform -translate-y-1/2">
        <Slider.PrevButton>
          <Icon className="text-white" size={26} id="ChevronLeft" strokeWidth={5} />
        </Slider.PrevButton>
      </div>
      <div className="flex items-center justify-center z-10 absolute right-0 top-[50%] transform -translate-y-1/2">
        <Slider.NextButton>
          <Icon className="text-white" size={26} id="ChevronRight" strokeWidth={5} />
        </Slider.NextButton>
      </div>
    </>
  );
}

export default HeroProductPage;
