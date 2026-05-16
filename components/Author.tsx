import Image from "next/image";
import { GraduationCap, Award, Users, BookMarked } from "lucide-react";

const highlights = [
  { icon: GraduationCap, label: "MS Otorhinolaryngology" },
  { icon: Award, label: "20+ years clinical experience" },
  { icon: Users, label: "Mentor to 10,000+ students" },
  { icon: BookMarked, label: "Author of the ENT textbook" },
];

export default function Author() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container-narrow">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand-200 via-accent-200 to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
                <div className="relative aspect-[4/5] bg-gradient-to-br from-brand-100 via-white to-accent-50">
                  <Image
                    src="https://www.entlecture.com/wp-content/uploads/2023/01/rahul-255x300-2.png"
                    alt="Dr. Rahul Bagla — ENT specialist and author"
                    fill
                    sizes="(max-width: 1024px) 80vw, 400px"
                    className="object-cover object-top"
                    priority
                  />
                </div>
                <div className="border-t border-slate-100 bg-white px-6 py-5 text-center">
                  <p className="font-display text-xl font-semibold text-slate-900">
                    Dr. Rahul Bagla
                  </p>
                  <p className="mt-0.5 text-sm text-slate-500">MS, DNB (ENT)</p>
                </div>
              </div>

              {/* floating quote */}
              <div className="absolute -top-5 -right-6 hidden md:block w-60 rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
                <p className="text-xs font-medium uppercase tracking-wider text-brand-700">
                  Author's note
                </p>
                <p className="mt-1 text-sm leading-relaxed text-slate-700">
                  "Every student deserves a textbook that respects their time."
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
              Meet the author
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Written by a teacher who's been in your seat.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Dr. Rahul Bagla brings two decades of clinical practice and a deep
              love for teaching into every chapter. The textbook references
              Scott-Brown's and Cummings, but is rewritten for clarity — so you
              learn faster and remember longer.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <div
                    key={h.label}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4"
                  >
                    <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-50 text-brand-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-medium text-slate-800">
                      {h.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800"
            >
              Read full bio
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
