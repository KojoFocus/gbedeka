import Image from "next/image";
import { Reveal } from "@/components/Reveal";

export function PageIntro({ eyebrow, title, accent, text, image }: { eyebrow: string; title: string; accent?: string; text: string; image: string }) {
  return (
    <section className="border-b border-[var(--line)] bg-white pt-36 pb-16 sm:pt-44 sm:pb-20">
      <div className="container grid items-end gap-12 lg:grid-cols-[1fr_.72fr]">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="display mt-5 max-w-3xl text-5xl leading-[.96] sm:text-6xl lg:text-7xl">{title} {accent && <span className="text-[var(--green)]">{accent}</span>}</h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg">{text}</p>
        </Reveal>
        <Reveal delay={0.1} className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
          <Image src={image} alt="" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </Reveal>
      </div>
    </section>
  );
}
