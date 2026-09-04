import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  Bot,
  Check,
  ChevronRight,
  CloudRain,
  FileCheck2,
  Landmark,
  MapPinned,
  Mic,
  ShieldCheck,
  Sparkles,
  Wheat,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Farmer Dashboard — KisanSahayak" },
      { name: "description", content: "Your voice-first command center for procurement slots, live queues, farm advice, and verified documents." },
      { property: "og:title", content: "Farmer Dashboard — KisanSahayak" },
      { property: "og:description", content: "Book smarter, wait less, and keep every procurement update in one place." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="mx-auto max-w-7xl px-5 pb-28 pt-7 lg:px-8 lg:pb-12 lg:pt-10">
      <section className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-muted-foreground">Thursday · 12 March 2026 · Rajgarh</p>
          <h1 className="mt-1 max-w-3xl font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl">Namaste, Ramesh Bhai <span className="text-leaf-deep">🙏</span></h1>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground sm:text-base">Everything you need for a smoother procurement day, in one place.</p>
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-leaf-deep">
          <span className="grid size-7 place-items-center rounded-full bg-mint"><ShieldCheck size={15} /></span>
          Offline-ready · Last synced 2 min ago
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-3">
        <div className="glass-panel relative overflow-hidden rounded-[2rem] p-6 sm:p-8 lg:col-span-2">
          <div className="absolute right-0 top-0 size-40 translate-x-1/3 -translate-y-1/3 rounded-full bg-peach/30 blur-3xl" aria-hidden="true" />
          <div className="relative grid gap-8 sm:grid-cols-[1fr_auto] sm:items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-rose/20 px-3 py-1 text-xs font-extrabold text-rose"><Mic size={13} /> Voice-first</span>
              <h2 className="mt-4 max-w-xl font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl">Ask Sahayak. Get things done without typing.</h2>
              <p className="mt-3 max-w-lg text-[15px] leading-6 text-muted-foreground">Say “Book a slot for wheat Friday morning” or “What’s today’s MSP?” and your farm companion will guide the next step.</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <button className="btn-primary inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-extrabold" type="button"><Mic size={17} /> Ask Sahayak</button>
                <span className="glass-panel rounded-full px-4 py-3 text-xs font-bold text-muted-foreground">“Book wheat Friday”</span>
                <span className="glass-panel rounded-full px-4 py-3 text-xs font-bold text-muted-foreground">“Today’s price?”</span>
              </div>
            </div>
            <div className="grid place-items-center">
              <div className="relative grid size-32 place-items-center rounded-full bg-leaf/15 text-leaf-deep ring-8 ring-leaf/10">
                <Mic size={49} strokeWidth={1.7} />
                <span className="absolute inset-3 rounded-full border border-leaf/25" />
              </div>
            </div>
          </div>
        </div>

        <ScoreCard />
      </section>

      <section className="mt-5 grid gap-5 lg:grid-cols-3">
        <DigitalKhasra />
        <FarmAdvisory />
      </section>

      <section className="mt-5 grid gap-5 lg:grid-cols-3">
        <div className="relative overflow-hidden rounded-[2rem] bg-leaf-deep p-6 text-primary-foreground soft-shadow sm:p-8 lg:col-span-2">
          <div className="absolute right-0 top-0 size-44 translate-x-1/4 -translate-y-1/4 rounded-full border-[24px] border-primary-foreground/10" aria-hidden="true" />
          <div className="relative">
            <p className="text-sm font-bold text-primary-foreground/75">Ready when you are, Ramesh Bhai</p>
            <h2 className="mt-1 max-w-xl font-display text-2xl font-extrabold sm:text-3xl">Book your procurement slot in seconds</h2>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="/booking" className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-5 py-3.5 text-base font-extrabold text-leaf-deep transition hover:-translate-y-0.5"><CalendarIcon /> Book a Slot Now <ArrowRight size={17} /></a>
              <span className="text-sm font-semibold text-primary-foreground/80">AI suggests the least-crowded centre</span>
            </div>
          </div>
        </div>
        <QueueCard />
      </section>

      <section className="mt-5 grid gap-5 md:grid-cols-3">
        <QuickMetric icon={<Banknote size={18} />} label="Expected payment" value="₹8,800" note="Within 4 hours after quality check" tone="mint" />
        <QuickMetric icon={<Sparkles size={18} />} label="Reward points" value="3,240" note="+240 from your last delivery" tone="peach" />
        <QuickMetric icon={<Landmark size={18} />} label="Nearby centres" value="3 open" note="Green Valley is least crowded" tone="sky" />
      </section>

      <p className="mt-8 text-center text-xs font-semibold text-muted-foreground">KisanSahayak · India’s Digital Kisan Ecosystem · Trusted procurement, less waiting</p>
    </div>
  );
}

function ScoreCard() {
  return (
    <div className="glass-panel relative overflow-hidden rounded-[2rem] p-6">
      <div className="absolute -bottom-10 -left-10 size-32 rounded-full bg-peach/30 blur-3xl" aria-hidden="true" />
      <div className="relative">
        <div className="flex items-center justify-between gap-2"><p className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">Kisan Score</p><span className="rounded-full bg-peach/25 px-2.5 py-1 text-xs font-extrabold text-amber-ink">Platinum</span></div>
        <p className="mt-3 font-display text-5xl font-extrabold text-ink">920 <span className="text-base text-muted-foreground">pts</span></p>
        <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-muted"><div className="h-full w-[72%] rounded-full bg-peach" /></div>
        <p className="mt-2 text-xs font-bold text-muted-foreground">180 pts to reach Diamond tier</p>
        <div className="mt-5 flex items-center justify-between rounded-2xl bg-surface-soft px-4 py-3"><span className="text-sm font-bold text-muted-foreground">Reward points</span><span className="text-sm font-extrabold text-leaf-deep">3,240</span></div>
      </div>
    </div>
  );
}

function DigitalKhasra() {
  const checks = ["Aadhaar", "Bank account", "Land records", "Crop insurance"];
  return (
    <div className="glass-panel rounded-[2rem] p-6">
      <div className="flex items-center gap-2"><span className="grid size-9 place-items-center rounded-xl bg-mint text-leaf-deep"><FileCheck2 size={18} /></span><h2 className="font-display text-xl font-extrabold">My Digital Khasra</h2></div>
      <p className="mt-2 text-xs leading-5 text-muted-foreground">Synced with government databases — no physical documents at the centre.</p>
      <div className="mt-4 space-y-2.5">{checks.map((item) => <div key={item} className="flex items-center justify-between rounded-2xl bg-surface-soft/75 px-4 py-3"><span className="flex items-center gap-2 text-sm font-bold text-muted-foreground"><Check size={15} className="text-leaf-deep" />{item}</span><span className="flex items-center gap-1 rounded-full bg-mint px-2.5 py-1 text-[11px] font-extrabold text-leaf-deep"><BadgeCheck size={13} /> Verified</span></div>)}</div>
    </div>
  );
}

function FarmAdvisory() {
  return (
    <div className="glass-panel relative overflow-hidden rounded-[2rem] p-6 lg:col-span-2">
      <div className="absolute right-0 top-4 size-36 translate-x-1/4 rounded-full bg-sky/25 blur-3xl" aria-hidden="true" />
      <div className="relative flex items-center justify-between gap-3"><div className="flex items-center gap-2"><span className="grid size-9 place-items-center rounded-xl bg-sky/20 text-sky-deep"><Bot size={19} /></span><h2 className="font-display text-xl font-extrabold">Your Farm Advisory</h2></div><span className="rounded-full bg-sky/20 px-2.5 py-1 text-xs font-extrabold text-sky-deep">AI · Live</span></div>
      <div className="relative mt-4 grid gap-3 sm:grid-cols-2"><AdvisoryItem icon={<CloudRain size={20} />} title="Rain expected tomorrow" copy="Consider harvesting your wheat today to protect yield quality." tone="peach" /><AdvisoryItem icon={<Banknote size={20} />} title="Wheat MSP +2% next week" copy="Forecast ₹2,244/quintal at your last quality grade." tone="mint" /></div>
    </div>
  );
}

function AdvisoryItem({ icon, title, copy, tone }: { icon: ReactNode; title: string; copy: string; tone: "peach" | "mint" }) {
  return <div className={`rounded-2xl p-4 ${tone === "peach" ? "bg-peach/15" : "bg-mint/45"}`}><span className="grid size-9 place-items-center rounded-xl bg-surface/70 text-leaf-deep">{icon}</span><p className="mt-3 text-sm font-extrabold text-foreground">{title}</p><p className="mt-1 text-xs leading-5 text-muted-foreground">{copy}</p></div>;
}

function QueueCard() {
  return <div className="glass-panel rounded-[2rem] p-6"><div className="flex items-center justify-between"><h2 className="font-display text-xl font-extrabold">Today’s Queue</h2><span className="flex items-center gap-1.5 rounded-full bg-rose/20 px-2.5 py-1 text-xs font-extrabold text-rose"><span className="size-1.5 rounded-full bg-rose" /> Live</span></div><div className="mt-3 rounded-2xl bg-surface-soft/75 p-4"><div className="flex items-end gap-2"><span className="font-display text-4xl font-extrabold">#45</span><span className="pb-1 text-xs font-bold text-muted-foreground">Green Valley Centre</span></div><p className="mt-1 text-sm text-muted-foreground">3 farmers ahead · est. wait 22 min</p><div className="mt-4 h-2 overflow-hidden rounded-full bg-muted"><div className="h-full w-[35%] rounded-full bg-sky" /></div><a href="/tracking" className="btn-primary mt-4 flex w-full items-center justify-center gap-2 rounded-full py-2.5 text-sm font-extrabold">Track position <ChevronRight size={16} /></a></div></div>;
}

function QuickMetric({ icon, label, value, note, tone }: { icon: ReactNode; label: string; value: string; note: string; tone: "mint" | "peach" | "sky" }) {
  return <div className={`rounded-[1.75rem] p-5 ${tone === "mint" ? "bg-mint/50" : tone === "peach" ? "bg-peach/18" : "bg-sky/18"}`}><span className="grid size-9 place-items-center rounded-xl bg-surface/70 text-leaf-deep">{icon}</span><p className="mt-4 text-xs font-extrabold uppercase tracking-wider text-muted-foreground">{label}</p><p className="mt-1 font-display text-3xl font-extrabold">{value}</p><p className="mt-1 text-xs font-semibold text-muted-foreground">{note}</p></div>;
}

function CalendarIcon() {
  return <span className="grid size-5 place-items-center rounded-md bg-leaf/15"><Wheat size={14} /></span>;
}
