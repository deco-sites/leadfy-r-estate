Here's the code for a section that displays a Google Maps embed based on a provided link:

import { HTMLWidget } from 'apps/admin/widgets.ts';

interface Props {
  /**
   * @description Google Maps embed URL
   * @format textarea
   */
  mapUrl?: string;
  /**
   * @description Map width
   */
  width?: string;
  /**
   * @description Map height
   */
  height?: string;
  /**
   * @description Title above the map
   * @format rich-text
   */
  title?: string;
}

export default function GoogleMapsSection({
  mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.448598130898!2d-46.634653385542414!3d-23.588239368469686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a2b2ed7f3a1:0xab35da2f5ca62674!2sCopan Building!5e0!3m2!1sen!2sbr!4v1651784290193!5m2!1sen!2sbr",
  width
  height = "450",
  title = "Our Location"
}: Props) {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">{title}</h2>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src={mapUrl}
          width={width}
          height={height}
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full rounded-lg shadow-lg"
        ></iframe>
      </div>
    </section>
  );
}