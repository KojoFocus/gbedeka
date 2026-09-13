import Link from "next/link";

export default function NotFound() {
  return <section className="min-h-[70vh] bg-white pt-40"><div className="container"><p className="eyebrow">404</p><h1 className="display mt-5 text-6xl">This page isn&apos;t in the field.</h1><p className="mt-5 max-w-lg text-base leading-7 text-[var(--muted)]">The page you are looking for may have moved or may not exist.</p><Link href="/" className="mt-8 inline-flex rounded-full bg-[var(--green)] px-6 py-3.5 text-sm font-medium text-white">Back home</Link></div></section>;
}
