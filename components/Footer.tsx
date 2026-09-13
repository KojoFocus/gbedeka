import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
