// HeroProductPage.tsx
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
    <div className="container mt-12 md:mt-28 mx-auto px-4 py-6 md:py-16 lg:px-0">
      {/* Header com Logo */}
      <div className="flex items-center gap-3 mb-8 md:mb-12 lg:px-[5%]">
        <Image
          src="/imgs/exp-logo.jpg" // Substituir pelo caminho correto
          width={80}
          height={40}
          alt="eXp Realty"
          className="w-20 h-auto"
        />
        <div className="flex flex-col">
          <h1 className="text-xl font-bold text-gray-800">TOWNHOMES AT MIRADA</h1>
          <p className="text-sm text-gray-600">Lagoon-Hampton</p>
        </div>
      </div>

      <div id={id} className="flex flex-col md:flex-row justify-between md:space-x-4 lg:px-[5%]">
        {/* Galeria de imagens */}
        <GalleryProductPage images={property?.images || []} />

        {/* Formulário desktop */}
        <div className="hidden md:block md:w-1/3 lg:pl-8">
          <div className="sticky top-24">
            <h2 className="text-2xl font-bold mb-6">Executive Townhome at Mirada Lagoon - Capri</h2>
            <FormProductPage storeId={storeId} />
          </div>
        </div>
      </div>

      {/* Detalhes do Produto Mobile */}
      <div className="md:hidden container mt-6">
        <h2 className="text-2xl font-bold text-privia-passion mb-4">
          Executive Townhome at Mirada Lagoon - Capri
        </h2>
        {showPriceText && (
          <span className="block text-sm text-gray-600 mb-2">{priceText}</span>
        )}
        <p className="text-xl text-[#787878] font-bold">{property?.price}</p>
        
        <div className="mt-6 w-full">
          <FormProductPage storeId={storeId} />
        </div>
      </div>

      {/* Detalhes do Produto Desktop */}
      <div className="hidden md:block container mt-8 lg:px-[5%]">
        <h2 className="text-[32px] font-extrabold text-privia-passion">{property?.title}</h2>
        {showPriceText && (
          <span className="block mt-2 text-sm">{priceText}</span>
        )}
        <p className="text-2xl mt-2 text-[#787878] font-extrabold">{property?.price}</p>
      </div>

      {/* Especificações */}
      <div className="container flex flex-col md:flex-row gap-4 w-full mt-6 lg:px-[5%]">
        <ul className="flex flex-wrap items-center gap-3 text-sm md:text-xs text-[#787878]">
          <li className="bg-gray-100 px-3 py-1 rounded">{property?.rooms} Bedrooms</li>
          <li className="bg-gray-100 px-3 py-1 rounded">{property?.bathrooms} Full Baths</li>
          <li className="bg-gray-100 px-3 py-1 rounded">{property?.areaSize} Ft²</li>
          {property?.label && (
            <li className="bg-privia-prestige text-privia-passion py-1 px-3 rounded">
              {property?.label}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

// GalleryProductPage.tsx
function GalleryProductPage({ images }: { images: string[] }) {
  const id = useId();

  return (
    <div id={id} className="w-full relative">
      <Slider className="carousel carousel-center w-full overflow-hidden rounded-xl">
        {images.map((image, index) => (
          <Slider.Item
            key={index}
            index={index}
            className="carousel-item relative w-full"
          >
            <ZoomImage>
              <div className="aspect-video w-full">
                <img
                  className="w-full h-full object-cover"
                  src={image}
                  alt={`Imagem ${index + 1}`}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding={index === 0 ? "auto" : "async"}
                />
              </div>
            </ZoomImage>
          </Slider.Item>
        ))}
      </Slider>

      {images.length > 1 && (
        <>
          <Buttons />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <Slider.Dot
                index={index}
                className="w-3 h-3 rounded-full bg-white/50 border-none transition-all"
              />
            ))}
          </div>
        </>
      )}

      <SliderJS rootId={id} infinite />
    </div>
  );
}

// Botões ajustados
function Buttons() {
  return (
    <>
      <div className="hidden md:flex items-center justify-center absolute left-4 top-1/2 -translate-y-1/2">
        <Slider.PrevButton className="bg-white/80 hover:bg-white rounded-full p-2 shadow-lg">
          <Icon size={24} id="ChevronLeft" strokeWidth={2} />
        </Slider.PrevButton>
      </div>
      <div className="hidden md:flex items-center justify-center absolute right-4 top-1/2 -translate-y-1/2">
        <Slider.NextButton className="bg-white/80 hover:bg-white rounded-full p-2 shadow-lg">
          <Icon size={24} id="ChevronRight" strokeWidth={2} />
        </Slider.NextButton>
      </div>
    </>
  );
}

export default HeroProductPage;
