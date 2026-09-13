import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = { title: "About" };

export default function AboutPage() {
  return <>
    <PageIntro eyebrow="About Gbedeka" title="Rooted in purpose." accent="Growing with Ghana." text="Established in 2019, Gbedeka Farms operates across the Volta and Greater Accra regions, combining maize, poultry and pig production in one integrated agricultural model." image="/images/founder-portrait.jpg" />
    <section className="section bg-white"><div className="container grid gap-14 lg:grid-cols-[.65fr_1.35fr]"><SectionHeading eyebrow="Our story" title="A farm built around what can grow." /><Reveal><div className="max-w-2xl space-y-5 text-base leading-8 text-[var(--muted)]"><p>Gbedeka Farms was established in 2019 with a focus on food production and sustainable agriculture. Today, our operations span the Volta and Greater Accra regions of Ghana.</p><p>Our model connects maize cultivation with poultry production: maize can support poultry feed, while poultry waste can supplement fertilisation of our maize fields.</p><p>This approach helps us think beyond individual farm enterprises and towards a more connected, resilient food system.</p></div></Reveal></div></section>
    <section className="section bg-[var(--paper)]"><div className="container grid gap-5 md:grid-cols-2"><Reveal className="rounded-[2rem] bg-white p-8 sm:p-10"><p className="eyebrow">Our mission</p><h2 className="display mt-5 text-4xl">Provide quality food while creating opportunity and promoting sustainable agriculture.</h2></Reveal><Reveal delay={.1} className="rounded-[2rem] bg-[var(--green)] p-8 text-white sm:p-10"><p className="text-xs font-bold tracking-[.18em] text-white/60">OUR VISION</p><h2 className="display mt-5 text-4xl">Grow from a Ghanaian agricultural enterprise into a business that creates value locally and reaches markets beyond Ghana.</h2></Reveal></div></section>
    <section className="section bg-white"><div className="container grid items-center gap-12 lg:grid-cols-2"><Reveal className="relative aspect-[4/5] overflow-hidden rounded-[2rem]"><Image src="/images/founder-field.jpg" alt="Gbedeka Farms founder in a maize field" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" /></Reveal><Reveal><p className="eyebrow">People behind the farm</p><h2 className="display mt-4 text-5xl">People are part of the harvest.</h2><p className="mt-6 max-w-lg text-base leading-7 text-[var(--muted)]">Our team is made up of 22 people — 7 women and 15 men — working across our growing operations.</p><Link href="/impact" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--green)]">See our impact <ArrowUpRight size={16} /></Link></Reveal></div></section>
  </>;
}
