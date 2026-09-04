import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import {
  BadgeCheck,
  CalendarDays,
  CircleUserRound,
  Home,
  Languages,
  MapPinned,
  Mic,
  UsersRound,
  Wheat,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "KisanSahayak — Smart Procurement" },
      { name: "description", content: "A voice-first procurement companion for Indian farmers." },
      { name: "author", content: "KisanSahayak" },
      { property: "og:title", content: "KisanSahayak — Smart Procurement" },
      { property: "og:description", content: "Book procurement slots, follow your queue, and keep every farmer document verified." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@Lovable" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&family=Nunito:wght@600;700;800;900&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <AppShell>
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </AppShell>
    </QueryClientProvider>
  );
}

function AppShell({ children }: { children: ReactNode }) {
  const [isListening, setIsListening] = useState(false);

  return (
    <div className="page-grid min-h-screen overflow-x-hidden bg-cream text-ink">
      <header className="sticky top-0 z-40 border-b border-leaf/10 bg-cream/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
          <Link to="/" className="flex items-center gap-3" aria-label="KisanSahayak home">
            <span className="grid size-11 place-items-center rounded-2xl bg-leaf text-primary-foreground soft-shadow">
              <Wheat size={23} strokeWidth={2.4} />
            </span>
            <span>
              <span className="block font-display text-lg font-extrabold leading-none text-leaf-deep">KisanSahayak</span>
              <span className="mt-1 block text-xs font-medium text-muted-foreground">Smart Procurement · Zero Paperwork</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            <ShellLink to="/" label="Dashboard" icon={<Home size={15} />} />
            <ShellLink to="/booking" label="Book a slot" icon={<CalendarDays size={15} />} />
            <ShellLink to="/tracking" label="Track" icon={<MapPinned size={15} />} />
            <ShellLink to="/community" label="Community" icon={<UsersRound size={15} />} />
            <ShellLink to="/profile" label="Profile" icon={<CircleUserRound size={15} />} />
          </nav>

          <div className="flex items-center gap-2">
            <button className="glass-panel hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-foreground transition hover:bg-surface lg:flex" type="button" aria-label="Change language">
              <span className="grid size-6 place-items-center rounded-full bg-sky/25 text-xs font-extrabold text-sky-deep">हि</span>
              हिंदी / English
              <Languages size={15} className="text-muted-foreground" />
            </button>
            <button
              className={`btn-primary flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold ${isListening ? "ring-4 ring-leaf/20" : ""}`}
              type="button"
              aria-pressed={isListening}
              onClick={() => setIsListening((value) => !value)}
            >
              <Mic size={17} />
              <span className="hidden sm:inline">{isListening ? "Listening…" : "Ask Sahayak"}</span>
              <span className="sm:hidden">Ask</span>
            </button>
          </div>
        </div>
        {isListening ? (
          <div className="border-t border-leaf/10 bg-mint/55">
            <div className="mx-auto flex max-w-7xl items-center gap-3 px-5 py-2.5 text-sm font-semibold text-leaf-deep lg:px-8">
              <span className="grid size-6 place-items-center rounded-full bg-surface"><Mic size={14} /></span>
              बोलिए — “गेहूँ के लिए शुक्रवार की स्लॉट बुक करो”
              <button className="ml-auto text-xs font-bold text-leaf-deep underline-offset-4 hover:underline" type="button" onClick={() => setIsListening(false)}>Close</button>
            </div>
          </div>
        ) : null}
      </header>

      <main>{children}</main>

      <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-leaf/10 bg-surface/92 px-3 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl lg:hidden" aria-label="Mobile navigation">
        <div className="mx-auto grid max-w-lg grid-cols-5">
          <MobileLink to="/" label="Home" icon={<Home size={19} />} />
          <MobileLink to="/booking" label="Book" icon={<CalendarDays size={19} />} />
          <MobileLink to="/tracking" label="Track" icon={<MapPinned size={19} />} />
          <MobileLink to="/community" label="Network" icon={<UsersRound size={19} />} />
          <MobileLink to="/profile" label="Profile" icon={<CircleUserRound size={19} />} />
        </div>
      </nav>
    </div>
  );
}

function ShellLink({ to, label, icon }: { to: "/" | "/booking" | "/tracking" | "/community" | "/profile"; label: string; icon: ReactNode }) {
  return (
    <Link
      to={to}
      activeOptions={{ exact: to === "/" }}
      activeProps={{ className: "bg-ink text-primary-foreground" }}
      className="flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-semibold text-muted-foreground transition hover:bg-surface hover:text-foreground"
    >
      {icon}{label}
    </Link>
  );
}

function MobileLink({ to, label, icon }: { to: "/" | "/booking" | "/tracking" | "/community" | "/profile"; label: string; icon: ReactNode }) {
  return (
    <Link
      to={to}
      activeOptions={{ exact: to === "/" }}
      activeProps={{ className: "text-leaf-deep" }}
      className="flex min-h-16 flex-col items-center justify-center gap-1 text-[11px] font-bold text-muted-foreground transition"
    >
      {icon}{label}
    </Link>
  );
}
