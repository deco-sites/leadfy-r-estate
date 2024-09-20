import { ImageWidget } from "apps/admin/widgets.ts";
import Slider from "apps/website/components/Slider.tsx";

interface BannerImage {
  desktop: ImageWidget;
  mobile: ImageWidget;
  alt: string;
  url: string;
}

interface Props {
  banners: BannerImage[];
}

function Banner({ desktop, mobile, alt, url }: BannerImage) {
  return (
    <a href={url} class="block w-full h-full">
      <picture class="w-full h-full">
        <source media="(min-width: 768px)" srcset={desktop} />
        <source media="(max-width: 767px)" srcset={mobile} />
        <img
          src={desktop}
          alt={alt}
          class="w-full h-full object-cover"
          width={1440}
          height={300}
        />
      </picture>
    </a>
  );
}

export default function BannerSection({ banners = [] }: Props) {
  return (
    <div class="w-full">
      <Slider class="carousel carousel-center w-full">
        {banners.map((banner, index) => (
          <Slider.Item index={index} class="carousel-item w-full">
            <Banner {...banner} />
          </Slider.Item>
        ))}
      </Slider>
    </div>
  );
}