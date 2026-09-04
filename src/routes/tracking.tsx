import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, BadgeCheck, Banknote, Check, Clock3, CreditCard, FileCheck2, GitBranch, MapPinned, QrCode, Scale, ShieldCheck, Wheat } from "lucide-react";

export const Route = createFileRoute("/tracking")({
  head: () => ({
    meta: [
      { title: "Live Tracking — KisanSahayak" },
      { name: "description", content: "Follow your procurement queue, quality check, weighing, payment, and blockchain provenance in one live view." },
      { property: "og:title", content: "Live Tracking — KisanSahayak" },
      { property: "og:description", content: "See exactly where your crop is in the procurement journey." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TrackingPage,
});

function TrackingPage() {
  return <div className="mx-auto max-w-7xl px-5 pb-28 pt-7 lg:px-8 lg:pb-12 lg:pt-10"><Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-leaf-deep"><ArrowLeft size={16} /> Back to dashboard</Link><div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-sm font-bold text-leaf-deep">Live procurement journey</p><h1 className="mt-1 font-display text-3xl font-extrabold sm:text-4xl">Token #45 · Wheat batch</h1><p className="mt-2 text-sm leading-6 text-muted-foreground">Green Valley Centre · Check-in window today, 09:00 AM</p></div><span className="flex w-fit items-center gap-2 rounded-full bg-rose/15 px-3 py-2 text-xs font-extrabold text-rose"><span className="size-2 rounded-full bg-rose" /> Live position · 3 ahead</span></div><section className="glass-panel mt-7 rounded-[2rem] p-6 sm:p-8"><div className="flex items-center justify-between gap-4"><div><p className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">Current position</p><p className="mt-2 font-display text-5xl font-extrabold">#45</p></div><div className="rounded-2xl bg-mint/55 px-4 py-3 text-right"><p className="text-xs font-bold text-muted-foreground">Estimated wait</p><p className="mt-1 font-display text-2xl font-extrabold text-leaf-deep">22 min</p></div></div><div className="mt-7 grid gap-4 md:grid-cols-6">{steps.map((step, index) => <TimelineStep key={step.title} {...step} index={index} />)}</div></section><div className="mt-5 grid gap-5 lg:grid-cols-5"><section className="glass-panel rounded-[2rem] p-6 sm:p-7 lg:col-span-3"><div className="flex items-center justify-between gap-4"><div><p className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">Provenance</p><h2 className="mt-2 font-display text-2xl font-extrabold">Blockchain verified batch</h2></div><span className="flex items-center gap-1 rounded-full bg-mint px-2.5 py-1 text-xs font-extrabold text-leaf-deep"><ShieldCheck size={13} /> Verified</span></div><div className="mt-6 flex flex-col items-center gap-6 sm:flex-row sm:items-start"><QrVisual /><div className="max-w-sm"><p className="text-sm leading-6 text-muted-foreground">Scan this QR to see your grain’s journey — from your field to the warehouse. Consumer trust starts here.</p><div className="mt-5 space-y-3 text-sm"><InfoLine icon={<FileCheck2 size={16} />} label="Lot ID" value="WHT-RJG-260312-45" /><InfoLine icon={<GitBranch size={16} />} label="Origin" value="Khasra 112/4 · Rajgarh" /><InfoLine icon={<BadgeCheck size={16} />} label="Grade" value="Quality check pending" /></div></div></div></section><section className="rounded-[2rem] bg-leaf-deep p-6 text-primary-foreground soft-shadow sm:p-7 lg:col-span-2"><div className="flex items-center gap-2"><span className="grid size-9 place-items-center rounded-xl bg-primary-foreground/15"><Banknote size={19} /></span><p className="text-xs font-extrabold uppercase tracking-widest text-primary-foreground/70">Financial health check</p></div><p className="mt-6 font-display text-3xl font-extrabold">₹8,800 expected</p><p className="mt-2 text-sm leading-6 text-primary-foreground/80">Payment is expected in your linked bank account within 4 hours after weighing.</p><div className="mt-6 border-t border-primary-foreground/20 pt-5"><p className="text-sm font-extrabold">You’re pre-qualified</p><p className="mt-1 text-xs leading-5 text-primary-foreground/75">Based on this payment history, you may be eligible for a Kisan Credit Card upgrade.</p><button className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary-foreground px-4 py-2.5 text-xs font-extrabold text-leaf-deep" type="button">Check eligibility <CreditCard size={15} /></button></div></section></div></div>;
}

const steps = [
  { title: "Slot booked", detail: "08:45 AM", icon: <Check size={16} />, state: "done" },
  { title: "In queue", detail: "Position 12", icon: <Clock3 size={16} />, state: "active" },
  { title: "Quality check", detail: "Pending", icon: <BadgeCheck size={16} />, state: "next" },
  { title: "Weighing", detail: "Pending", icon: <Scale size={16} />, state: "next" },
  { title: "Payment", detail: "Pending", icon: <Banknote size={16} />, state: "next" },
  { title: "Completed", detail: "Pending", icon: <ShieldCheck size={16} />, state: "next" },
] as const;

function TimelineStep({ title, detail, icon, state, index }: (typeof steps)[number] & { index: number }) {
  return <div className="relative flex items-start gap-3 md:block md:text-center"><div className={`relative z-10 grid size-10 shrink-0 place-items-center rounded-full ${state === "done" ? "bg-leaf text-primary-foreground" : state === "active" ? "bg-peach text-amber-ink ring-4 ring-peach/20" : "bg-muted text-muted-foreground"}`}>{icon}</div><div className="pt-1 md:pt-3"><p className="text-sm font-extrabold">{title}</p><p className="mt-1 text-xs font-semibold text-muted-foreground">{detail}</p></div>{index < steps.length - 1 ? <span className="absolute left-5 top-10 h-7 w-px bg-border md:left-[calc(50%+20px)] md:top-5 md:h-px md:w-[calc(100%-40px)]" /> : null}</div>;
}

function QrVisual() {
  const cells = [1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1];
  return <div className="grid size-40 shrink-0 grid-cols-10 gap-1 rounded-2xl bg-surface p-3 shadow-inner" aria-label="QR code for batch WHT-RJG-260312-45">{cells.map((cell, index) => <span key={index} className={cell ? "bg-ink" : "bg-surface"} />)}</div>;
}

function InfoLine({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) { return <div className="flex items-center gap-3"><span className="text-leaf-deep">{icon}</span><span className="text-xs font-bold text-muted-foreground">{label}</span><span className="ml-auto text-right text-xs font-extrabold">{value}</span></div>; }