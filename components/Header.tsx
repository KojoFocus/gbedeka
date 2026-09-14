"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const active = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur-md">
      <div className="container flex min-h-[100px] items-center justify-between py-3 sm:min-h-[112px]">

        {/* LOGO */}
        <Link
          href="/"
          aria-label="Gbedeka Farms home"
          onClick={() => setOpen(false)}
          className="shrink-0"
        >
          <Image
            src="/images/logo.jpg"
            alt="Gbedeka Farms"
            width={400}
            height={150}
            priority
            className="h-[5.5rem] w-auto object-contain sm:h-[6.5rem]"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav
          className="hidden items-center gap-6 lg:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative py-2 text-[13px] transition ${
                active(item.href)
                  ? "text-[var(--green)]"
                  : "text-neutral-700 hover:text-[var(--green)]"
              }`}
            >
              {item.label}

              {active(item.href) && (
                <motion.span
                  layoutId="active-nav"
                  className="absolute inset-x-0 -bottom-0.5 h-px bg-[var(--green)]"
                />
              )}
            </Link>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 rounded-full bg-[var(--green)] px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[var(--green-dark)]"
          >
            Get in Touch
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="rounded-full border border-neutral-200 bg-white/90 p-2.5 backdrop-blur lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-4 mb-4 rounded-2xl border border-neutral-200 bg-white p-3 shadow-xl lg:hidden"
          >
            <nav
              className="flex flex-col"
              aria-label="Mobile navigation"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3.5 text-base ${
                    active(item.href)
                      ? "bg-[var(--green-soft)] font-medium text-[var(--green)]"
                      : "hover:bg-neutral-50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[var(--green)] px-4 py-3.5 text-sm font-medium text-white"
            >
              Get in Touch
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}