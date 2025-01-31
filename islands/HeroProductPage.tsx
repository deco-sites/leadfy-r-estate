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
      <div id={id} className="flex flex-col md:flex-row justify-between gap-4 lg:px-[5%]">
        {/* Galeria de imagens otimizada para mobile */}
        <GalleryProductPage images={property?.images || []} />

        {/* Formulário desktop */}
        <div className="hidden md:block w-full md:w-1/3">
          <FormProductPage storeId={storeId} />
        </div>
      </div>

      {/* Detalhes do Produto */}
      <div className="container mt-8 lg:px-[5%]">
        <h2 className="text-[32px] font-extrabold text-privia-passion">{property?.title}</h2>
        {showPriceText && (
          <span className="block mt-2 text-xs max-w-[90vw]">{priceText}</span>
        )}
        <p className="text-2xl mt-2 text-[#787878] font-extrabold">{property?.price}</p>
      </div>

      <div className="container flex flex-col md:flex-row gap-4 w-full mt-4 lg:px-[5%]">
        <ul className="flex flex-row flex-wrap items-center gap-2 md:gap-4 text-xs text-[#787878]">
          <li className="px-2 py-1 bg-base-100 rounded">{property?.rooms} BEDROOMS</li>
          <li className="hidden md:block">&bull;</li>
          <li className="px-2 py-1 bg-base-100 rounded">{property?.bathrooms} FULL BATHS</li>
          <li className="hidden md:block">&bull;</li>
          <li className="px-2 py-1 bg-base-100 rounded">{property?.areaSize} Ft²</li>
          {property?.label && (
            <li className="bg-privia-prestige text-privia-passion py-1 px-2 rounded">
              {property?.label}
            </li>
          )}
        </ul>

        {/* Formulário mobile */}
        <div className="md:hidden block mt-4">
          <FormProductPage storeId={storeId} />
        </div>
      </div>
    </div>
  );
};

function GalleryProductPage({ images }: { images: string[] }) {
  const id = useId();
  const aspectRatio = 1586 / 764;

  return (
    <div id={id} className="w-full relative flex justify-center">
      <Slider className="carousel carousel-center w-full overflow-hidden border-none gap-1 md:gap-4">
        {images.map((image, index) => (
          <Slider.Item
            key={index}
            index={index}
            className="carousel-item flex items-center justify-center border-none w-full"
          >
            <ZoomImage>
              <div 
                className="w-full relative"
                style={{ paddingTop: `${(1/aspectRatio)*100}%`}}
              >
                <img
                  className="w-full h-full absolute top-0 left-0 object-contain border-none"
                  src={image}
                  alt={`Imagem ${index + 1}`}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding={index === 0 ? "auto" : "async"}
                  sizes="(max-width: 640px) 100vw, 80vw"
                  srcSet={`
                    ${image}?w=400 400w,
                    ${image}?w=800 800w,
                    ${image}?w=1200 1200w
                  `}
                />
              </div>
            </ZoomImage>
          </Slider.Item>
        ))}
      </Slider>

      {images.length > 1 && (
        <>
          <Buttons />
          <Dots images={images} />
        </>
      )}

      <SliderJS rootId={id} infinite />
    </div>
  );
}

function Dots({ images }: { images: string[] }) {
  return (
    <ul className="carousel justify-start md:justify-center col-span-full gap-1 md:gap-2 z-10 pt-2 md:pt-5 overflow-x-auto pb-2 px-2 scrollbar-hide">
      {images.map((image, index) => (
        <li key={index} className="carousel-item">
          <Slider.Dot index={index}>
            <div className="w-14 h-14 md:w-20 md:h-20 p-1 flex justify-center items-center opacity-60 hover:opacity-100 transition-opacity group-disabled:opacity-100 bg-base-100 rounded-sm">
              <Image
                className="w-full h-full object-cover border-none rounded-sm"
                src={image}
                width={120}
                height={120}
                loading="lazy"
                alt={`Thumbnail ${index + 1}`}
                sizes="(max-width: 640px) 56px, 80px"
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
      <div className="flex items-center justify-center z-10 absolute left-2 md:left-4 top-[50%] transform -translate-y-1/2">
        <Slider.PrevButton className="btn btn-circle bg-base-100/80 hover:bg-base-100 shadow-md border-none min-h-12 h-12 w-12 min-w-12">
          <Icon
            className="text-neutral md:text-white"
            size={32}
            id="ChevronLeft"
            strokeWidth={3}
          />
        </Slider.PrevButton>
      </div>
      <div className="flex items-center justify-center z-10 absolute right-2 md:right-4 top-[50%] transform -translate-y-1/2">
        <Slider.NextButton className="btn btn-circle bg-base-100/80 hover:bg-base-100 shadow-md border-none min-h-12 h-12 w-12 min-w-12">
          <Icon
            className="text-neutral md:text-white"
            size={32}
            id="ChevronRight"
            strokeWidth={3}
          />
        </Slider.NextButton>
      </div>
    </>
  );
}

export default HeroProductPage;
