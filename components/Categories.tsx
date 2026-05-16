import {
  Ear,
  Wind,
  Mic2,
  Stethoscope,
  HeartPulse,
  Scissors,
  Activity,
  ClipboardList,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    icon: Ear,
    title: "Ear",
    desc: "Anatomy, physiology, diseases & surgical procedures of the ear.",
    chapters: 38,
    tone: "from-rose-500 to-pink-500",
  },
  {
    icon: Wind,
    title: "Nose & Sinuses",
    desc: "Rhinitis, sinusitis, rhinoplasty and complete nasal pathology.",
    chapters: 26,
    tone: "from-sky-500 to-cyan-500",
  },
  {
    icon: Mic2,
    title: "Larynx & Trachea",
    desc: "Voice disorders, airway management & laryngeal surgeries.",
    chapters: 22,
    tone: "from-violet-500 to-purple-500",
  },
  {
    icon: Stethoscope,
    title: "Pharynx & Oesophagus",
    desc: "Tonsillectomy, dysphagia, foreign bodies & malignancies.",
    chapters: 18,
    tone: "from-amber-500 to-orange-500",
  },
  {
    icon: HeartPulse,
    title: "Thyroid & Neck",
    desc: "Endocrine surgery, neck masses & lymph node dissection.",
    chapters: 14,
    tone: "from-emerald-500 to-teal-500",
  },
  {
    icon: Activity,
    title: "Oral Cavity & Salivary",
    desc: "Glandular disorders, oral lesions and reconstructive options.",
    chapters: 12,
    tone: "from-fuchsia-500 to-pink-500",
  },
  {
    icon: ClipboardList,
    title: "Clinical Methods",
    desc: "Bedside examination, history taking & instrument identification.",
    chapters: 10,
    tone: "from-indigo-500 to-blue-500",
  },
  {
    icon: Scissors,
    title: "Surgeries",
    desc: "Step-by-step techniques with operative photographs.",
    chapters: 20,
    tone: "from-slate-700 to-slate-900",
  },
];

export default function Categories() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container-narrow">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
            Explore by topic
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Every ENT subject, beautifully organized.
          </h2>
          <p className="mt-4 text-slate-600">
            From the smallest ossicle to advanced head &amp; neck oncology — find
            chapter-wise notes, illustrations, and exam-ready summaries in one
            place.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <a
                key={cat.title}
                href="#"
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-glow hover:border-brand-200"
              >
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${cat.tone} text-white shadow-soft`}
                >
                  <Icon className="h-6 w-6" strokeWidth={2.2} />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-slate-900">
                  {cat.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {cat.desc}
                </p>
                <div className="mt-5 flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-500">
                    {cat.chapters} chapters
                  </span>
                  <span className="inline-flex items-center gap-1 font-semibold text-brand-700 opacity-0 transition group-hover:opacity-100">
                    Explore
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
