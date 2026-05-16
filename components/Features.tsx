import {
  BookOpenCheck,
  FileText,
  HelpCircle,
  MonitorPlay,
  Award,
  Globe2,
} from "lucide-react";

const features = [
  {
    icon: BookOpenCheck,
    title: "Lucid, student-first writing",
    desc: "Complex pathology explained in clear, exam-friendly language without losing academic rigor.",
  },
  {
    icon: FileText,
    title: "Chapter-wise PDFs",
    desc: "Download polished PDFs and presentations for offline revision — perfect before exams.",
  },
  {
    icon: HelpCircle,
    title: "MCQs, quizzes & viva FAQs",
    desc: "Test yourself with curated questions modeled after NEET PG, USMLE and PLAB patterns.",
  },
  {
    icon: MonitorPlay,
    title: "Visual learning",
    desc: "850+ real clinical photos plus 300+ original diagrams that make concepts unforgettable.",
  },
  {
    icon: Award,
    title: "CBME-aligned curriculum",
    desc: "Every chapter mapped to NMC competencies so your study time directly powers your marks.",
  },
  {
    icon: Globe2,
    title: "Trusted globally",
    desc: "Used by students &amp; residents across 90+ countries preparing for international exams.",
  },
];

export default function Features() {
  return (
    <section className="relative py-20 md:py-28 bg-slate-50/60">
      <div className="container-narrow">
        <div className="grid items-end justify-between gap-6 md:flex">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-700">
              Why students choose us
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Built for the way medical students actually study.
            </h2>
          </div>
          <p className="max-w-md text-slate-600">
            We obsessed over every detail — from the typography you read for
            hours, to the clinical photos that make pathology stick.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="group relative rounded-2xl border border-slate-200 bg-white p-7 transition hover:border-brand-200 hover:shadow-soft"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition group-hover:bg-brand-600 group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={2.1} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-slate-900">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
