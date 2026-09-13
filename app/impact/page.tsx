import Image from "next/image";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";

export const metadata = { title: "Impact" };

export default function ImpactPage() {
  return <>
    <PageIntro eyebrow="Our impact" title="Stronger people." accent="Brighter communities." text="Growth matters when it creates livelihoods, strengthens food production and gives communities more access to locally produced food." image="/images/founder-field.jpg" />
    <section className="section bg-white"><div className="container grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{[["22","team members"],["7","women"],["15","men"],["2","operating regions"]].map(([value,label],i)=><Reveal key={label} delay={i*.05} className="rounded-[1.5rem] border border-[var(--line)] p-7"><p className="display text-5xl">{value}</p><p className="mt-2 text-sm text-[var(--muted)]">{label}</p></Reveal>)}</div></section>
    <section className="section bg-[var(--paper)]"><div className="container grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]"><Reveal><p className="eyebrow">Investing in people</p><h2 className="display mt-4 text-5xl">A growing farm needs a growing team.</h2><p className="mt-6 max-w-lg text-base leading-7 text-[var(--muted)]">Our workforce includes 22 people, with women and men contributing across the operation. As production expands, so does the potential for more jobs, skills and local economic activity.</p></Reveal><Reveal className="relative aspect-[4/3] overflow-hidden rounded-[2rem]"><Image src="/images/harvest.jpg" alt="Harvest activity" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 55vw" /></Reveal></div></section>
    <section className="section bg-white"><div className="container rounded-[2rem] bg-[var(--green)] px-7 py-16 text-white sm:px-12 sm:py-20"><Reveal><p className="text-xs font-bold tracking-[.18em] text-white/60">LOOKING AHEAD</p><h2 className="display mt-5 max-w-3xl text-5xl leading-[.95] sm:text-6xl">From our farms to stronger Ghana.</h2><p className="mt-6 max-w-2xl text-base leading-7 text-white/70">The long-term ambition is clear: grow responsibly, create more opportunity and take Ghanaian agricultural products beyond Ghana.</p></Reveal></div></section>
  </>;
}
