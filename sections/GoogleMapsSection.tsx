Here's the code for the Google Maps section based on your requirements:

import { HTMLWidget } from "apps/admin/widgets.ts";

export interface Props {
  /** @format rich-text */
  title: string;
  /** @format textarea */
  description: string;
  /** @format code @language html */
  mapEmbedCode: string;
}

export default function GoogleMapsSection({ title = "Map Location", description = "Enter a description of the location here", mapEmbedCode = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6156632604927!2d-73.98731968505923!3d40.74844204332891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1685482253613!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>` }: Props) {
  return (
    <div class="container mx-auto px-4 py-8">
      <h2 class="text-2xl font-bold mb-4">{title}</h2>
      <p class="mb-6">{description}</p>
      <div class="aspect-w-16 aspect-h-9">
        <HTMLWidget html={mapEmbedCode} />
      </div>
    </div>
  );
}