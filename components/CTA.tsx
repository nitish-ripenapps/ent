import { ArrowRight, Check } from "lucide-react";

const perks = [
  "Free access to all 160+ chapters",
  "Downloadable PDFs & presentations",
  "MCQs, quizzes, and viva FAQs",
  "Updated regularly with new content",
];

export default function CTA() {
  return (
    <section id="cta" className="relative py-20 md:py-28">
      <div className="container-narrow">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-8 py-14 text-white md:px-16 md:py-20">
          <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-brand-600/30 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-accent-500/25 blur-3xl" />
          <div className="absolute inset-0 grid-bg opacity-20" />

          <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur">
                Start in seconds — no card needed
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                Ready to master ENT?
              </h2>
              <p className="mt-4 max-w-md text-white/70">
                Join the community of medical students who finally found a
                textbook they actually enjoy reading.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 hover:bg-brand-50 transition"
                >
                  Create free account
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition"
                >
                  Talk to the team
                </a>
              </div>
            </div>

            <ul className="space-y-3 md:pl-8">
              {perks.map((perk) => (
                <li
                  key={perk}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur"
                >
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent-500 text-white">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-sm text-white/90">{perk}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
