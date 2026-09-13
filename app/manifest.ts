import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return { name: "Gbedeka Farms", short_name: "Gbedeka", description: "Healthy Food. Stronger Communities.", start_url: "/", display: "standalone", background_color: "#fbfcf9", theme_color: "#236b3d", icons: [{ src: "/images/logo.jpg", sizes: "any", type: "image/jpeg" }] };
}
