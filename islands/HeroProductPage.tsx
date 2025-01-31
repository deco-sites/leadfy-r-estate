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
    <div className="container mt-20 md:mt-28 mx-auto px-4 py-8 md:py-16">
      {/* Cabeçalho */}
      <div className="mb-8 md:mb-12 text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2">EXP</h1>
        <h2 className="text-xl md:text-3xl text-privia-passion font-semibold">
          Executive Townhome at Mirada Lagoon - Capri
        </h2>
      </div>

      <div id={id} className="flex flex-col md:flex-row gap-8 lg:px-[5%]">
        {/* Galeria */}
        <div className="w-full md:w-2/3">
          <GalleryProductPage images={property?.images || []} />
        </div>

        {/* Formulário */}
        <div className="w-full md:w-1/3">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
            <FormProductPage storeId={storeId} />
          </div>
        </div>
      </div>

      {/* Detalhes */}
      <div className="mt-8 md:mt-12 lg:px-[5%]">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-privia-passion mb-4">TOWNHOMES AT MIRADA</h3>
          <p className="text-lg text-gray-600 mb-4">Lagoon-Hampton | Ready</p>
          
          <div className="flex flex-wrap gap-4 text-sm md:text-base">
            <div className="bg-white px-4 py-2 rounded-md shadow-sm">
              {property?.rooms} Bedrooms
            </div>
            <div className="bg-white px-4 py-2 rounded-md shadow-sm">
              {property?.bathrooms} Full Baths
            </div>
            <div className="bg-white px-4 py-2 rounded-md shadow-sm">
              {property?.areaSize} Ft²
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function GalleryProductPage({ images }: { images: string[] }) {
  const id = useId();

  return (
    <div id={id} className="relative group">
      <Slider className="carousel carousel-center gap-6 w-full overflow-x-auto snap-x md:snap-none">
        {images.map((image, index) => (
          <Slider.Item
            key={index}
            index={index}
            className="carousel-item w-full snap-start"
          >
            <div className="relative aspect-video w-full">
              <ZoomImage>
                <img
                  className="w-full h-full object-cover rounded-xl"
                  src={image}
                  alt={`Property view ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                />
              </ZoomImage>
            </div>
          </Slider.Item>
        ))}
      </Slider>

      {/* Controles */}
      {images.length > 1 && (
        <>
          <div className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Slider.PrevButton className="btn btn-circle bg-white/90 hover:bg-white">
              <Icon size={24} id="ChevronLeft" />
            </Slider.PrevButton>
          </div>
          
          <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Slider.NextButton className="btn btn-circle bg-white/90 hover:bg-white">
              <Icon size={24} id="ChevronRight" />
            </Slider.NextButton>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
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

export default HeroProductPage;
