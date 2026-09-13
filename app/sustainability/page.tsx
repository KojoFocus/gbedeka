import Image from "next/image";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = { title: "Sustainability" };

const principles = [
  ["01", "Integrated farming", "Maize and poultry are connected in our production model, helping us think about inputs and outputs as part of one system."],
  ["02", "Circular agriculture", "Poultry waste can supplement fertilisation of maize fields, turning a farm by-product into a useful resource."],
  ["03", "More value from what we grow", "We are exploring ways to process maize husk into brown paper bags and mushrooms, creating additional income streams."],
  ["04", "Growth with purpose", "Expansion is designed around stronger production, more livelihoods and a long-term ambition to reach markets beyond Ghana."],
];

export default function SustainabilityPage() {
  return <>
    <PageIntro eyebrow="Sustainability" title="Growing food." accent="Closing the loop." text="Sustainability at Gbedeka is practical: connect our enterprises, use resources thoughtfully and create more value from the farm." image="/images/maize-husks.jpg" />
    <section className="section bg-white"><div className="container"><SectionHeading eyebrow="Our approach" title="A farm is more than what leaves the field." text="We are building an agricultural model where production, people and resources work together rather than in isolation." /><div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">{principles.map(([num, title, text], i) => <Reveal key={num} delay={i*.05} className="bg-white p-7 sm:p-9"><p className="text-xs font-bold text-[var(--green)]">{num}</p><h3 className="display mt-7 text-3xl">{title}</h3><p className="mt-4 text-sm leading-7 text-[var(--muted)]">{text}</p></Reveal>)}</div></div></section>
    <section className="section bg-[var(--paper)]"><div className="container grid items-center gap-12 lg:grid-cols-2"><Reveal className="relative aspect-[4/3] overflow-hidden rounded-[2rem]"><Image src="/images/poultry-detail.jpg" alt="Poultry at Gbedeka Farms" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" /></Reveal><Reveal><p className="eyebrow">The next horizon</p><h2 className="display mt-4 text-5xl">Waste can become a resource. Crops can support livestock. Growth can create more value.</h2><p className="mt-6 text-base leading-7 text-[var(--muted)]">Our medium- and long-term plans include processing maize husk into brown paper bags and mushrooms, creating new revenue streams while making better use of materials from the farm.</p></Reveal></div></section>
  </>;
}
