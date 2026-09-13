import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { products } from "@/lib/site";

export const metadata = { title: "Our Products" };

export default function ProductsPage() {
  return <>
    <PageIntro eyebrow="Our products" title="Food that starts" accent="at the farm." text="We produce maize, eggs and poultry, and pork as part of our growing agricultural operation in Ghana." image="/images/harvest.jpg" />
    <section className="section bg-white"><div className="container grid gap-5 md:grid-cols-3">{products.map((product, i) => <Reveal key={product.title} delay={i*.07}><article className="group"><div className="relative aspect-[4/5] overflow-hidden rounded-[1.7rem]"><Image src={product.image} alt={product.title} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" /></div><h2 className="display mt-5 text-4xl">{product.title}</h2><p className="mt-3 text-sm leading-6 text-[var(--muted)]">{product.description}</p></article></Reveal>)}</div></section>
    <section className="section bg-[var(--paper)]"><div className="container grid gap-12 lg:grid-cols-2"><Reveal><p className="eyebrow">Local first. Future focused.</p><h2 className="display mt-4 text-5xl">Serving communities while preparing for wider markets.</h2></Reveal><Reveal delay={.1}><p className="max-w-xl text-base leading-8 text-[var(--muted)]">Our goal is to provide healthy food to local communities while building the production capacity, systems and value chains needed to grow beyond Ghana over time.</p><Link href="/contact" className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[var(--green)]">Discuss supply or partnership <ArrowUpRight size={16} /></Link></Reveal></div></section>
  </>;
}
