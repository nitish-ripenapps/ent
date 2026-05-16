import { ArrowRight, PlayCircle, Sparkles, BookOpen, ImageIcon } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 -z-10 grid-bg" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[640px] bg-gradient-to-b from-brand-50 via-white to-white" />
      <div className="absolute -top-32 left-1/2 -z-10 h-[480px] w-[840px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-brand-200/50 via-accent-200/40 to-transparent blur-3xl" />

      <div className="container-narrow pt-14 pb-24 md:pt-24 md:pb-32">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7 animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-brand-700 shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              #1 trusted ENT resource in 90+ countries
            </span>

            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
              The only{" "}
              <span className="gradient-text">ENT textbook</span>{" "}
              you'll ever need.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              Master Ear, Nose &amp; Throat from anatomy to advanced surgery —
              with{" "}
              <strong className="text-slate-900">160+ chapters</strong>, 850+
              clinical photographs, and structured study tools built for{" "}
              MBBS, NEET PG, USMLE, PLAB &amp; MRCS.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#cta"
                className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-soft hover:bg-brand-700 transition"
              >
                Start learning free
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 hover:border-brand-300 hover:text-brand-700 transition"
              >
                <PlayCircle className="h-5 w-5 text-brand-600" />
                Watch intro (2 min)
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[
                    "from-rose-400 to-rose-600",
                    "from-amber-400 to-amber-600",
                    "from-emerald-400 to-emerald-600",
                    "from-sky-400 to-sky-600",
                  ].map((g, i) => (
                    <div
                      key={i}
                      className={`h-8 w-8 rounded-full border-2 border-white bg-gradient-to-br ${g}`}
                    />
                  ))}
                </div>
                <span>
                  Trusted by{" "}
                  <strong className="text-slate-900">120,000+</strong> medical
                  students
                </span>
              </div>
              <div className="hidden sm:block h-5 w-px bg-slate-200" />
              <span>Aligned with CBME curriculum</span>
            </div>
          </div>

          {/* Visual card */}
          <div className="lg:col-span-5 animate-fade-up [animation-delay:120ms]">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-brand-400/30 via-accent-300/30 to-transparent blur-2xl" />
              <div className="relative rounded-[2rem] border border-slate-200 bg-white p-5 shadow-glow">
                <div className="rounded-2xl bg-gradient-to-br from-brand-600 to-accent-600 p-6 text-white">
                  <div className="flex items-center justify-between text-xs font-medium opacity-90">
                    <span className="inline-flex items-center gap-1.5">
                      <BookOpen className="h-3.5 w-3.5" /> Chapter 12
                    </span>
                    <span>Ear · Anatomy</span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-semibold leading-tight">
                    Tympanic Membrane &amp; Middle Ear Cleft
                  </h3>
                  <div className="mt-5 grid grid-cols-3 gap-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="aspect-square rounded-lg bg-white/15 backdrop-blur-sm border border-white/20 grid place-items-center"
                      >
                        <ImageIcon className="h-5 w-5 opacity-80" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {[
                    { label: "Clinical anatomy", pct: 100 },
                    { label: "Histology & embryology", pct: 80 },
                    { label: "Applied surgery", pct: 45 },
                  ].map((row) => (
                    <div key={row.label}>
                      <div className="flex items-center justify-between text-xs font-medium text-slate-600">
                        <span>{row.label}</span>
                        <span>{row.pct}%</span>
                      </div>
                      <div className="mt-1.5 h-2 rounded-full bg-slate-100 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500"
                          style={{ width: `${row.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-sm">
                  <span className="text-slate-600">Next: Otosclerosis</span>
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-white">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>

              {/* floating badge */}
              <div className="absolute -left-6 top-10 hidden md:flex animate-float items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-soft">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-emerald-100 text-emerald-700">
                  ✓
                </div>
                <div className="text-xs leading-tight">
                  <p className="font-semibold text-slate-900">CBME aligned</p>
                  <p className="text-slate-500">Updated 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
