import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { Globe2, Mail, MessageCircle, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/SocialIcons";
import { site } from "@/lib/site";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return <>
    <PageIntro eyebrow="Contact" title="Let&apos;s build" accent="what&apos;s next." text="Whether you are looking to buy, partner, invest or learn more about Gbedeka Farms, we would be glad to hear from you." image="/images/contact-field.jpg" />
    <section className="section bg-[var(--paper)]"><div className="container grid gap-10 lg:grid-cols-[.75fr_1.25fr]"><Reveal><p className="eyebrow">Start a conversation</p><h2 className="display mt-4 text-5xl">Tell us what you&apos;re looking for.</h2><p className="mt-6 max-w-md text-base leading-7 text-[var(--muted)]">Reach us directly or use the form to send an enquiry.</p><div className="mt-10 space-y-5 border-t border-[var(--line)] pt-6 text-sm"><div><p className="font-medium">Operating regions</p><p className="mt-1 text-[var(--muted)]">Volta Region & Greater Accra Region, Ghana</p></div><div className="grid gap-3"><a href={`tel:${site.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 hover:text-[var(--green)]"><Phone size={16} />{site.phone}</a><a href={site.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-[var(--green)]"><MessageCircle size={16} />WhatsApp</a><a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 break-all hover:text-[var(--green)]"><Mail size={16} />{site.email}</a><a href={site.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-[var(--green)]"><InstagramIcon width={16} height={16} />Instagram</a><a href={site.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-[var(--green)]"><Globe2 size={16} />LinkedIn</a></div><div><p className="font-medium">What we can discuss</p><p className="mt-1 text-[var(--muted)]">Products · Partnerships · Expansion · Investment</p></div></div></Reveal><Reveal delay={.1}><ContactForm /></Reveal></div></section>
  </>;
}
