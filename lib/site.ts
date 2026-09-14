export const site = {
  name: "Gbedeka Farms",
  shortName: "Gbedeka",
  description:
    "Gbedeka Farms grows maize and raises poultry and pigs while building a more sustainable food system for Ghana and beyond.",

  url:
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"),

  email: "gbedeka.farms@gmail.com",
  phone: "+233 244 847 523",
  whatsapp: "https://wa.me/233244847523",
  instagram: "https://instagram.com/Gbedekafarms",
  linkedin: "https://linkedin.com/in/perry-adoboe-135a00259",
  regions: ["Volta Region", "Greater Accra Region"],
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Farms", href: "/farms" },
  { label: "Our Products", href: "/products" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Impact", href: "/impact" },
  { label: "Contact", href: "/contact" },
] as const;

export const farms = [
  {
    title: "Maize",
    eyebrow: "CROP PRODUCTION",
    description:
      "We cultivate maize across two seasons, with 12 acres currently under production and land available for expansion to about 100 acres.",
    image: "/images/maize-field.jpg",
  },
  {
    title: "Poultry",
    eyebrow: "POULTRY PRODUCTION",
    description:
      "Our poultry operation includes 3,000 layer birds on a two-year cycle, with 500 broilers raised intermittently.",
    image: "/images/founder-poultry.jpg",
  },
  {
    title: "Pigs",
    eyebrow: "LIVESTOCK",
    description:
      "Pig production forms part of our integrated farm model and supports our goal of supplying quality pork to local communities.",
    image: "/images/pigs.jpg",
  },
] as const;

export const products = [
  {
    title: "Maize",
    description: "Maize produced through our crop farming operations.",
    image: "/images/maize-field.jpg",
  },
  {
    title: "Eggs & Poultry",
    description:
      "Eggs from our layer operation and poultry from our growing flock.",
    image: "/images/poultry-house.jpg",
  },
  {
    title: "Pork",
    description: "Pork from our pig production enterprise.",
    image: "/images/pigs.jpg",
  },
] as const;

export const stats = [
  { value: "2019", label: "Established" },
  { value: "12", label: "Acres currently in maize" },
  { value: "3,000", label: "Layer birds" },
  { value: "22", label: "People on our team" },
] as const;
