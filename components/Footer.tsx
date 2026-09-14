import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Globe2, Mail, MessageCircle, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/SocialIcons";
import { navItems, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-white">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_.7fr_.7fr]">
          <div>
            <Image src="/images/logo.jpg" alt="Gbedeka Farms" width={210} height={80} className="h-14 w-auto object-contain" />
            <p className="mt-6 max-w-md text-[15px] leading-7 text-[var(--muted)]">Growing food, creating opportunity and building a more sustainable agricultural future for Ghana and beyond.</p>
          </div>
          <div>
            <p className="eyebrow">Explore</p>
            <div className="mt-5 grid gap-3 text-sm text-neutral-700">
              {navItems.slice(0, 6).map((item) => <Link key={item.href} href={item.href} className="transition hover:text-[var(--green)]">{item.label}</Link>)}
            </div>
          </div>
          <div>
            <p className="eyebrow">Connect</p>
            <div className="mt-5 space-y-3 text-sm text-neutral-700">
              <p>Volta & Greater Accra, Ghana</p>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 transition hover:text-[var(--green)]"><Phone size={15} />{site.phone}</a>
              <a href={site.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-2 transition hover:text-[var(--green)]"><MessageCircle size={15} />WhatsApp us</a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2 transition hover:text-[var(--green)]"><Mail size={15} />{site.email}</a>
              <a href={site.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-2 transition hover:text-[var(--green)]"><InstagramIcon width={15} height={15} />Instagram</a>
              <a href={site.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 transition hover:text-[var(--green)]"><Globe2 size={15} />LinkedIn</a>
              <Link href="/contact" className="inline-flex items-center gap-1 text-[var(--green)]">Start a conversation <ArrowUpRight size={15} /></Link>
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-[var(--line)] pt-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Built for a growing Ghana.</p>
        </div>
      </div>
    </footer>
  );
}
