import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "The clarity of explanations is unreal. I scored in the top 1 % of NEET PG ENT questions after just three weeks of revision.",
    name: "Dr. Aisha Khan",
    role: "MBBS Intern · AIIMS Delhi",
    initials: "AK",
    tone: "from-rose-500 to-pink-500",
  },
  {
    quote:
      "Better than any printed textbook I've owned. The clinical photographs alone made temporal bone anatomy finally make sense.",
    name: "Arjun Mehta",
    role: "ENT PG Resident · KGMU",
    initials: "AM",
    tone: "from-violet-500 to-purple-500",
  },
  {
    quote:
      "I'm preparing for USMLE Step 2 in Karachi and ENTLecture is the resource I recommend to every junior at my college.",
    name: "Hassan Raza",
    role: "Final Year MBBS · Aga Khan University",
    initials: "HR",
    tone: "from-amber-500 to-orange-500",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-white to-brand-50/40">
      <div className="container-narrow">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-white border border-slate-200 px-3 py-1 text-xs font-semibold text-brand-700 shadow-sm">
            Loved by students worldwide
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            120,000+ students. 90+ countries. One textbook.
          </h2>
          <div className="mt-5 flex items-center justify-center gap-1 text-amber-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
            <span className="ml-2 text-sm font-semibold text-slate-700">
              4.9 / 5 average rating
            </span>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-soft"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-brand-100" />
              <div className="flex gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-slate-700 leading-relaxed">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div
                  className={`grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br ${t.tone} text-sm font-semibold text-white`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {t.name}
                  </p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
