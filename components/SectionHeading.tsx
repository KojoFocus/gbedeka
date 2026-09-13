import { Reveal } from "@/components/Reveal";

export function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <Reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="display mt-4 max-w-3xl text-4xl leading-[1] sm:text-5xl">{title}</h2>
      {text && <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--muted)]">{text}</p>}
    </Reveal>
  );
}
