import { Airtable } from "site/types/airtable.ts";
import LeadForm from "site/islands/LeadForm.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";
import Slider from "site/components/ui/Slider.tsx";
import { useId } from "site/sdk/useId.ts";
import Icon from "site/components/ui/Icon.tsx";

export interface Placeholders {
  /** @description Texto do botão de envio */
  submitButtonText?: string;
  /** @description Campo de nome */
  nome: string;
  /** @description Campo de email */
  email: string;
  /** @description Campo de telefone */
  telefone: string;
  /** @description Campo de marca */
  marca: string;
  /** @description Campo de modelo */
  modelo: string;
  /** @description Campo de ano */
  ano: string;
  /** @description Campo de KM Atual */
  kmAtual: string;
}

export interface BannerMedia {
  image?: ImageWidget;
  /** @description Estilo de exibição da imagem */
  objectFit?: "cover" | "contain" | "fill";
}

export interface Banner {
  desktopImage?: BannerMedia;
  mobileImage?: BannerMedia;
  href?: string;
  alt?: string;
  /** @description Abrir o link em uma nova guia */
  openInNewTab?: boolean;
}
export interface Props {
  title?: string;
  description?: string;
  /** @description Dados do Airtable para integração do formulário */
  airtable?: Airtable;
  successMessage?: string;
  banners?: Banner[];
  /** @description Banners infinitos */
  infiniteBanners?: boolean;
  /**
   * @title Autoplay interval
   * @description tempo (em segundos) para iniciar o autoplay do carrossel
   */
  interval?: number;
  /** @description Largura dos banners no desktop */
  desktopBannersWidth?: number;
  /** @description Altura dos banners no desktop */
  desktopBannersHeight?: number;
  /** @description Largura dos banners no mobile */
  mobileBannersWidth?: number;
  /** @description Altura dos banners no mobile */
  mobileBannersHeight?: number;
  placeholders?: Placeholders;
}

function HeroLeadCapture({
  title = "",
  description = "",
  airtable,
  successMessage = "Sucesso! Nossa equipe entrará em contato.",
  banners = [],
  desktopBannersWidth = 1440,
  desktopBannersHeight = 300,
  mobileBannersWidth = 375,
  mobileBannersHeight = 400,
  placeholders = {
    submitButtonText: "Avançar",
    nome: "Nome",
    email: "E-mail",
    telefone: "Telefone",
    marca: "Marca",
    modelo: "Modelo",
    ano: "Ano",
    kmAtual: "KM Atual",
  },
  infiniteBanners = false,
  interval,
}: Props) {
  const id = useId();

  return (
    <div id={id} class="w-full relative">
      {banners.length > 0 && (
        <div class="relative">
          <Slider class="carousel carousel-center w-full gap-6">
            {banners?.map((banner, index) => (
              <Slider.Item
                index={index}
                class="carousel-item w-full flex justify-center items-center"
              >
                <a
                  class="block w-full"
                  href={banner.href}
                  target={banner.openInNewTab ? "_blank" : "_self"}
                >
                  <img
                    src={banner.desktopImage?.image!}
                    alt={banner.alt}
                    width={desktopBannersWidth}
                    height={desktopBannersHeight}
                    class="w-full hidden md:block"
                    style={{
                      objectFit: banner.desktopImage?.objectFit || "cover",
                      height: desktopBannersHeight
                        ? `${desktopBannersHeight}px`
                        : "",
                    }}
                  />
                  <img
                    src={banner.mobileImage?.image!}
                    alt={banner.alt}
                    width={mobileBannersWidth}
                    height={mobileBannersHeight}
                    class="w-full block md:hidden"
                    style={{
                      objectFit: banner.mobileImage?.objectFit || "cover",
                      height: mobileBannersHeight
                        ? `${mobileBannersHeight}px`
                        : "",
                    }}
                  />
                </a>
              </Slider.Item>
            ))}
          </Slider>

          {banners.length > 1 && (
            <div class="absolute flex justify-between top-1/2 -translate-y-1/2 left-0 w-full text-primary">
              <Slider.PrevButton
                class="flex justify-center items-center"
                disabled={false}
              >
                <Icon id="ChevronLeft" width={64} height={64} strokeWidth={1} />
              </Slider.PrevButton>

              <Slider.NextButton
                class="flex justify-center items-center"
                disabled={false}
              >
                <Icon
                  id="ChevronLeft"
                  width={64}
                  height={64}
                  strokeWidth={1}
                  class="rotate-180"
                />
              </Slider.NextButton>
            </div>
          )}

          <Slider.JS
            rootId={id}
            infinite={infiniteBanners}
            interval={interval && interval * 1e3}
          />
        </div>
      )}
      <div class="w-full mx-auto px-4 max-w-[1140px] flex flex-col md:flex-row mt-5 md:mt-20 gap-4 md:gap-32">
        <div class="flex flex-col w-full md:w-1/2">
          <h1
            class="text-4xl lg:text-[55px] leading-tight mb-7"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p
            class="text-xl"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
        <div class="w-full md:w-1/2">
          <LeadForm
            airtable={airtable}
            successMessage={successMessage}
            placeholders={placeholders}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroLeadCapture;
