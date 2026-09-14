"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Website enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={submit} className="rounded-[2rem] bg-white p-6 shadow-[0_20px_70px_rgba(20,40,20,.07)] sm:p-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="text-sm font-medium">Name<input required name="name" className="mt-2 w-full rounded-xl border border-[var(--line)] bg-[var(--paper)] px-4 py-3 outline-none focus:border-[var(--green)]" /></label>
        <label className="text-sm font-medium">Email<input required type="email" name="email" className="mt-2 w-full rounded-xl border border-[var(--line)] bg-[var(--paper)] px-4 py-3 outline-none focus:border-[var(--green)]" /></label>
      </div>
      <label className="mt-6 block text-sm font-medium">How can we help?<textarea required name="message" rows={6} className="mt-2 w-full resize-none rounded-xl border border-[var(--line)] bg-[var(--paper)] px-4 py-3 outline-none focus:border-[var(--green)]" /></label>
      <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--green)] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[var(--green-dark)]">Send Enquiry <ArrowUpRight size={16} /></button>
      {sent && <p className="mt-4 text-sm text-[var(--green)]">Your email app should open with the enquiry ready to send to Gbedeka Farms.</p>}
    </form>
  );
}
