import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CalendarDays, Check, ChevronDown, Clock3, LocateFixed, Mic, Navigation, Sparkles, Wheat } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book a Slot — KisanSahayak" },
      { name: "description", content: "Choose a nearby procurement centre, crop, quantity, and time slot with live crowd guidance." },
      { property: "og:title", content: "Book a Slot — KisanSahayak" },
      { property: "og:description", content: "Find the least-crowded procurement slot for your crop." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BookingPage,
});

function BookingPage() {
  const [crop, setCrop] = useState("Wheat");
  const [quantity, setQuantity] = useState("4");
  const [selectedSlot, setSelectedSlot] = useState("Friday · 09:00 AM");
  const [confirmed, setConfirmed] = useState(false);

  if (confirmed) {
    return <Confirmation crop={crop} quantity={quantity} slot={selectedSlot} />;
  }

  return (
    <div className="mx-auto max-w-7xl px-5 pb-28 pt-7 lg:px-8 lg:pb-12 lg:pt-10">
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-leaf-deep"><ArrowLeft size={16} /> Back to dashboard</Link>
      <div className="mt-5 max-w-3xl"><p className="text-sm font-bold text-leaf-deep">Step 1 of 4 · Smart slot booking</p><h1 className="mt-1 font-display text-3xl font-extrabold sm:text-4xl">Book a procurement slot</h1><p className="mt-2 text-sm leading-6 text-muted-foreground sm:text-base">We’ll use your location and live centre load to suggest a calm, convenient time.</p></div>

      <div className="mt-7 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5">
          <section className="glass-panel rounded-[2rem] p-6 sm:p-7"><div className="flex items-start justify-between gap-4"><div><p className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">01 · Choose centre</p><h2 className="mt-2 font-display text-2xl font-extrabold">Nearest centres</h2></div><button className="inline-flex items-center gap-2 rounded-full bg-sky/15 px-3 py-2 text-xs font-extrabold text-sky-deep" type="button"><LocateFixed size={15} /> Use my location</button></div><div className="mt-5 space-y-3"><CentreCard name="Green Valley Centre" distance="2.4 km" density="Least crowded" detail="Next open slot · Fri 09:00 AM" selected /><CentreCard name="Gramin Mandi, Kheri" distance="4.1 km" density="Moderate" detail="Next open slot · Fri 11:30 AM" /><CentreCard name="Rajgarh Procurement Hub" distance="6.8 km" density="Busy" detail="Next open slot · Sat 09:00 AM" /></div></section>

          <section className="glass-panel rounded-[2rem] p-6 sm:p-7"><div className="flex items-start justify-between gap-4"><div><p className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">02 · Crop & quantity</p><h2 className="mt-2 font-display text-2xl font-extrabold">What are you bringing?</h2></div><button className="btn-primary inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-extrabold" type="button"><Mic size={14} /> Speak</button></div><div className="mt-5 grid gap-4 sm:grid-cols-2"><label className="block text-sm font-bold text-muted-foreground">Crop<select value={crop} onChange={(event) => setCrop(event.target.value)} className="mt-2 w-full appearance-none rounded-2xl border border-input bg-surface px-4 py-3.5 font-bold text-foreground outline-none ring-leaf/30 focus:ring-4"><option>Wheat</option><option>Barley</option><option>Mustard</option><option>Gram</option></select><ChevronDown size={16} className="pointer-events-none relative float-right -mt-9 mr-4 text-muted-foreground" /></label><label className="block text-sm font-bold text-muted-foreground">Quantity in quintals<div className="mt-2 flex items-center rounded-2xl border border-input bg-surface"><input value={quantity} onChange={(event) => setQuantity(event.target.value.replace(/\D/g, ""))} inputMode="numeric" className="min-w-0 flex-1 bg-transparent px-4 py-3.5 font-bold text-foreground outline-none" /><span className="pr-4 text-sm font-bold text-muted-foreground">QTL</span></div></label></div><div className="mt-5 flex gap-3 rounded-2xl bg-peach/15 p-4"><span className="grid size-9 shrink-0 place-items-center rounded-xl bg-peach/25 text-amber-ink"><Sparkles size={18} /></span><div><p className="text-sm font-extrabold">AI MSP forecast for {crop}</p><p className="mt-1 text-xs leading-5 text-muted-foreground">Predicted MSP this season: <span className="font-extrabold text-foreground">₹2,200 / quintal</span>. At your last grade, your estimated value is <span className="font-extrabold text-leaf-deep">₹{(Number(quantity || 0) * 2200).toLocaleString("en-IN")}</span>.</p></div></div></section>

          <section className="glass-panel rounded-[2rem] p-6 sm:p-7"><div><p className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">03 · Pick date & time</p><h2 className="mt-2 font-display text-2xl font-extrabold">Open slots this week</h2></div><div className="mt-5 grid gap-3 sm:grid-cols-3">{["Friday · 09:00 AM", "Friday · 11:30 AM", "Saturday · 09:00 AM"].map((slot, index) => <button key={slot} type="button" onClick={() => setSelectedSlot(slot)} className={`rounded-2xl border p-4 text-left transition ${selectedSlot === slot ? "border-leaf bg-mint/50 ring-4 ring-leaf/10" : "border-input bg-surface hover:border-leaf/50"}`}><span className="grid size-8 place-items-center rounded-xl bg-mint text-leaf-deep"><CalendarDays size={16} /></span><span className="mt-3 block text-sm font-extrabold">{slot}</span><span className={`mt-1 block text-xs font-bold ${index === 1 ? "text-amber-ink" : "text-leaf-deep"}`}>{index === 1 ? "Moderate crowd" : "Open · Best time"}</span></button>)}</div></section>
        </div>

        <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start"><div className="rounded-[2rem] bg-leaf-deep p-6 text-primary-foreground soft-shadow sm:p-7"><p className="text-xs font-extrabold uppercase tracking-widest text-primary-foreground/70">04 · Review booking</p><h2 className="mt-2 font-display text-2xl font-extrabold">You’re almost set</h2><div className="mt-5 space-y-3 text-sm"><SummaryRow label="Centre" value="Green Valley Centre" /><SummaryRow label="Crop" value={`${crop} · ${quantity || 0} QTL`} /><SummaryRow label="Slot" value={selectedSlot} /></div><div className="mt-6 border-t border-primary-foreground/20 pt-5"><p className="text-xs font-bold text-primary-foreground/70">Blockchain provenance</p><p className="mt-1 text-sm font-semibold">Your lot will receive a unique traceability ID after check-in.</p></div><button className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-primary-foreground px-5 py-3.5 text-sm font-extrabold text-leaf-deep transition hover:-translate-y-0.5" type="button" onClick={() => setConfirmed(true)}>Confirm slot <ArrowRight size={17} /></button></div><div className="glass-panel rounded-[2rem] p-6"><div className="flex items-center gap-2 text-sky-deep"><Navigation size={18} /><p className="text-sm font-extrabold">Centre guidance</p></div><p className="mt-2 text-xs leading-5 text-muted-foreground">Green Valley is currently 35% less crowded than the nearest alternative.</p><div className="mt-4 flex items-center gap-2 text-xs font-bold text-leaf-deep"><Clock3 size={15} /> Estimated check-in · 8 min</div></div></aside>
      </div>
    </div>
  );
}

function CentreCard({ name, distance, density, detail, selected = false }: { name: string; distance: string; density: string; detail: string; selected?: boolean }) {
  return <div className={`flex items-center gap-3 rounded-2xl border p-4 ${selected ? "border-leaf bg-mint/45 ring-4 ring-leaf/10" : "border-input bg-surface"}`}><span className="grid size-10 shrink-0 place-items-center rounded-xl bg-sky/15 text-sky-deep"><Navigation size={18} /></span><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><p className="text-sm font-extrabold">{name}</p><span className={`rounded-full px-2 py-1 text-[10px] font-extrabold ${density === "Busy" ? "bg-rose/15 text-rose" : "bg-mint text-leaf-deep"}`}>{density}</span></div><p className="mt-1 text-xs text-muted-foreground">{distance} · {detail}</p></div>{selected ? <span className="grid size-7 place-items-center rounded-full bg-leaf text-primary-foreground"><Check size={15} /></span> : null}</div>;
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return <div className="flex items-start justify-between gap-4"><span className="text-primary-foreground/70">{label}</span><span className="text-right font-extrabold">{value}</span></div>;
}

function Confirmation({ crop, quantity, slot }: { crop: string; quantity: string; slot: string }) {
  return <div className="mx-auto flex min-h-[calc(100vh-150px)] max-w-2xl items-center px-5 pb-28 pt-10 lg:pb-12"><div className="glass-panel w-full rounded-[2rem] p-7 text-center sm:p-10"><span className="mx-auto grid size-16 place-items-center rounded-full bg-mint text-leaf-deep"><Check size={32} /></span><p className="mt-5 text-sm font-extrabold text-leaf-deep">Slot confirmed · SMS sent</p><h1 className="mt-2 font-display text-3xl font-extrabold">Your procurement day is booked.</h1><p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted-foreground">Show this QR token when you arrive at Green Valley Centre. Your digital documents are already verified.</p><div className="mx-auto mt-6 max-w-sm rounded-2xl bg-surface-soft p-5 text-left"><SummaryRow label="Crop" value={`${crop} · ${quantity || 0} QTL`} /><div className="my-3 border-t border-border" /><SummaryRow label="Slot" value={slot} /><div className="mt-4 flex items-center gap-2 text-xs font-bold text-leaf-deep"><Wheat size={15} /> Token will be generated at check-in</div></div><Link to="/tracking" className="btn-primary mx-auto mt-7 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-extrabold">View my tracking <ArrowRight size={17} /></Link></div></div>;
}