import {
  Stethoscope,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";

const columns = [
  {
    title: "Learn",
    links: ["Ear", "Nose & Sinuses", "Larynx", "Pharynx", "Surgeries"],
  },
  {
    title: "Resources",
    links: ["Chapter PDFs", "MCQs & Quizzes", "Hearing Tests", "Clinical Methods"],
  },
  {
    title: "Company",
    links: ["About the author", "Testimonials", "CBME alignment", "Contact"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-narrow py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <a href="#" className="inline-flex items-center gap-2.5">
              <div className="relative h-10 w-10 grid place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-soft">
                <Stethoscope className="h-5 w-5" strokeWidth={2.3} />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-display text-lg font-bold text-slate-900">
                  ENT<span className="text-brand-600">Lecture</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-slate-500">
                  Dr. Rahul Bagla
                </span>
              </div>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-600">
              The most trusted ENT learning resource for medical students,
              residents, and clinicians — used in 90+ countries.
            </p>

            <a
              href="mailto:msrahulbagla@gmail.com"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700 hover:border-brand-300 hover:text-brand-700 transition"
            >
              <Mail className="h-4 w-4" />
              msrahulbagla@gmail.com
            </a>

            <div className="mt-6 flex items-center gap-2">
              {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social link"
                  className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 text-slate-600 hover:border-brand-300 hover:text-brand-700 transition"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h4 className="text-sm font-semibold text-slate-900">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-600 hover:text-brand-700 transition"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-1">
            <h4 className="text-sm font-semibold text-slate-900">Legal</h4>
            <ul className="mt-4 space-y-2.5">
              {["Privacy", "Terms"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-slate-600 hover:text-brand-700 transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-slate-200 pt-8 md:flex-row md:items-center">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} ENTLecture. Built with care for medical
            educators &amp; students.
          </p>
          <p className="text-xs text-slate-500">
            Made with Next.js · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
