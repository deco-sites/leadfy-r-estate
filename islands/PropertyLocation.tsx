import { useEffect } from "preact/hooks";

export interface Props {
  propertiesList?: PropertiesList;
}

import type { PropertiesList } from "../loaders/propertiesData.ts";

const PropertyLocation = (  { propertiesList = [] }:Props) => {

  const property = propertiesList
  const lat: string = property[0]?.mapLocation?.lat || "0"
  const lng: string = property[0]?.mapLocation?.lng || "0"

  useEffect(() => {
    // Carregar Leaflet CSS
    if (!document.querySelector('link[href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      link.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=";
      link.crossOrigin = "";
      document.head.appendChild(link);
    }

    // Carregar Leaflet JS
    if (!document.querySelector('script[src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"]')) {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
      script.integrity = "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=";
      script.crossOrigin = "";
      script.onload = () => {
        const L = (window as any).L;

        const map = L.map("map").setView([lat, lng], 13);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([lat, lng]).addTo(map);
      };
      document.body.appendChild(script);
    }
  }, [lat, lng]);

  return <div id="map" style={{ width: "100%", height: "462px", margin: "5% auto" }} />;
};

export default PropertyLocation;