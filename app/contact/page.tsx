import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return <>
    <PageIntro eyebrow="Contact" title="Let&apos;s build" accent="what&apos;s next." text="Whether you are looking to buy, partner, invest or learn more about Gbedeka Farms, we would be glad to hear from you." image="/images/contact-field.jpg" />
    <section className="section bg-[var(--paper)]"><div className="container grid gap-10 lg:grid-cols-[.75fr_1.25fr]"><Reveal><p className="eyebrow">Start a conversation</p><h2 className="display mt-4 text-5xl">Tell us what you&apos;re looking for.</h2><p className="mt-6 max-w-md text-base leading-7 text-[var(--muted)]">Use the form to prepare an enquiry. When Gbedeka&apos;s official email is added to the project, the form can be pointed directly to it.</p><div className="mt-10 space-y-5 border-t border-[var(--line)] pt-6 text-sm"><div><p className="font-medium">Operating regions</p><p className="mt-1 text-[var(--muted)]">Volta Region & Greater Accra Region, Ghana</p></div><div><p className="font-medium">What we can discuss</p><p className="mt-1 text-[var(--muted)]">Products · Partnerships · Expansion · Investment</p></div></div></Reveal><Reveal delay={.1}><ContactForm /></Reveal></div></section>
  </>;
}
