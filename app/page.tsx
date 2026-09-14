"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { farms, stats } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[780px] overflow-hidden bg-white pt-[190px] sm:min-h-[820px] sm:pt-[205px]">
        <div className="container relative z-10 grid items-end gap-12 pb-12 lg:grid-cols-[0.9fr_1.1fr] lg:pb-20">

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow">
              Farming a brighter tomorrow
            </p>

            <h1 className="display mt-5 max-w-2xl text-6xl leading-[0.9] sm:text-7xl lg:text-[6.2rem]">
              Healthy Food.
              <br />
              <span className="text-[var(--green)]">
                Stronger Communities.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg">
              Gbedeka Farms grows maize, raises poultry and pigs, and builds
              a more sustainable food system for Ghana and beyond.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--green)] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[var(--green-dark)]"
              >
                Learn More
                <ArrowUpRight size={16} />
              </Link>

              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3.5 text-sm font-medium transition hover:border-[var(--green)] hover:text-[var(--green)]"
              >
                Our Products
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.12 }}
            className="relative h-[410px] overflow-hidden rounded-[2rem] sm:h-[500px] lg:h-[570px]"
          >
            <Image
              src="/images/hero-farm.jpg"
              alt="Maize farm at Gbedeka Farms"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />

            <div className="absolute inset-x-5 bottom-5 flex items-end justify-between text-white">
              <span className="text-xs tracking-[0.18em]">
                VOLTA REGION · GHANA
              </span>

              <span className="rounded-full bg-black/30 p-3 backdrop-blur">
                <ArrowDown size={17} />
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VALUES */}
      <section className="border-y border-[var(--line)] bg-white">
        <div className="container grid sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Sustainable Farming",
            "Stronger Communities",
            "Quality Produce",
            "A Growing Future",
          ].map((item, i) => (
            <Reveal
              key={item}
              delay={i * 0.05}
              className="border-b border-[var(--line)] px-1 py-7 text-sm font-medium sm:border-r sm:px-6 lg:border-b-0"
            >
              <span className="mr-3 text-xs text-[var(--green)]">
                0{i + 1}
              </span>

              {item}
            </Reveal>
          ))}
        </div>
      </section>

      {/* OUR FARMS */}
      <section className="section bg-[var(--paper)]">
        <div className="container">

          <SectionHeading
            eyebrow="Our farms"
            title="Rooted in production. Built to grow."
            text="Our integrated operation brings crop production, poultry and pig farming together as one growing agricultural system."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {farms.map((farm, i) => (
              <Reveal
                key={farm.title}
                delay={i * 0.08}
              >
                <Link
                  href="/farms"
                  className="group block"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem]">

                    <Image
                      src={farm.image}
                      alt={farm.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                    <div className="absolute inset-x-5 bottom-5 text-white">
                      <p className="text-[10px] font-bold tracking-[0.16em]">
                        {farm.eyebrow}
                      </p>

                      <h3 className="display mt-2 text-4xl">
                        {farm.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                    {farm.description}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="section bg-white">
        <div className="container grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">

          <Reveal>
            <p className="eyebrow">
              A brighter future
            </p>

            <h2 className="display mt-4 text-5xl leading-[0.95] sm:text-6xl">
              From our fields to a stronger Ghana.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-[var(--muted)]">
              Gbedeka Farms is growing today while preparing for a larger
              future — expanding production, creating more value from what
              we grow and reaching markets beyond Ghana.
            </p>

            <Link
              href="/sustainability"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--green)]"
            >
              Explore our approach
              <ArrowUpRight size={16} />
            </Link>
          </Reveal>

          <Reveal
            delay={0.1}
            className="relative aspect-[4/3] overflow-hidden rounded-[2rem]"
          >
            <Image
              src="/images/maize-husks.jpg"
              alt="Maize husks at Gbedeka Farms"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </Reveal>

        </div>
      </section>

      {/* FARM STATS */}
      <section className="border-y border-[var(--line)] bg-[var(--green)] text-white">
        <div className="container grid sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-b border-white/20 px-1 py-9 sm:border-r sm:px-6 lg:border-b-0"
            >
              <p className="display text-5xl">
                {stat.value}
              </p>

              <p className="mt-2 text-sm text-white/70">
                {stat.label}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section bg-[var(--paper)]">
        <div className="container flex flex-col items-start justify-between gap-8 rounded-[2rem] bg-white p-8 sm:p-12 lg:flex-row lg:items-end">

          <div>
            <p className="eyebrow">
              Let&apos;s grow together
            </p>

            <h2 className="display mt-4 max-w-2xl text-5xl leading-[0.95] sm:text-6xl">
              Good food. Good work. A growing future.
            </h2>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[var(--green)] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[var(--green-dark)]"
          >
            Get in Touch
            <ArrowUpRight size={16} />
          </Link>

        </div>
      </section>
    </>
  );
}