import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { farms } from "@/lib/site";

export const metadata = { title: "Our Farms" };

export default function FarmsPage() {
  return <>
    <PageIntro eyebrow="Our farms" title="Different farms." accent="One system." text="Maize, poultry and pigs form the foundation of Gbedeka Farms — connected through a practical, integrated approach to production." image="/images/hero-farm.jpg" />
    <section className="section bg-white"><div className="container space-y-20">{farms.map((farm, i) => <Reveal key={farm.title}><article className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}><div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]"><Image src={farm.image} alt={farm.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" /></div><div><p className="eyebrow">{farm.eyebrow}</p><h2 className="display mt-4 text-5xl">{farm.title}</h2><p className="mt-6 max-w-lg text-base leading-7 text-[var(--muted)]">{farm.description}</p>{farm.title === "Maize" && <div className="mt-8 flex gap-8 border-t border-[var(--line)] pt-6"><div><p className="display text-3xl">12</p><p className="text-xs text-[var(--muted)]">acres now</p></div><div><p className="display text-3xl">~100</p><p className="text-xs text-[var(--muted)]">acres potential</p></div></div>}{farm.title === "Poultry" && <div className="mt-8 flex gap-8 border-t border-[var(--line)] pt-6"><div><p className="display text-3xl">3,000</p><p className="text-xs text-[var(--muted)]">layers</p></div><div><p className="display text-3xl">500</p><p className="text-xs text-[var(--muted)]">intermittent broilers</p></div></div>}</div></article></Reveal>)}</div></section>
    <section className="section bg-[var(--paper)]"><div className="container grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]"><Reveal><p className="eyebrow">Built to scale</p><h2 className="display mt-4 text-5xl">The next chapter is bigger.</h2><p className="mt-6 max-w-xl text-base leading-7 text-[var(--muted)]">With land available for expansion and room to grow the poultry operation to more than 15,000 birds if funded, Gbedeka Farms is preparing for the next level of production.</p><Link href="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--green)]">Talk to us about growth <ArrowUpRight size={16} /></Link></Reveal><Reveal className="relative aspect-square overflow-hidden rounded-[2rem]"><Image src="/images/poultry-house.jpg" alt="Poultry operation" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw" /></Reveal></div></section>
  </>;
}
