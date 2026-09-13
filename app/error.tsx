"use client";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <section className="min-h-[70vh] bg-white pt-40"><div className="container"><p className="eyebrow">Something went wrong</p><h1 className="display mt-5 text-5xl">Let&apos;s try that again.</h1><button onClick={() => reset()} className="mt-8 rounded-full bg-[var(--green)] px-6 py-3.5 text-sm font-medium text-white">Try again</button></div></section>;
}
