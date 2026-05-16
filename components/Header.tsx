"use client";

import { useEffect, useState } from "react";
import { Menu, X, Stethoscope, ChevronDown } from "lucide-react";

const navItems = [
  {
    label: "Anatomy",
    children: ["Ear", "Nose", "Pharynx", "Larynx", "Thyroid & Neck"],
  },
  {
    label: "Topics",
    children: ["Surgeries", "Hearing Tests", "Clinical Methods", "MCQs & Viva"],
  },
  { label: "About", children: null },
  { label: "Testimonials", children: null },
  { label: "Contact", children: null },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-lg border-b border-slate-200/70 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-narrow flex h-16 items-center justify-between md:h-20">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative h-10 w-10 grid place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-soft transition-transform group-hover:scale-105">
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

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              <button className="inline-flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-brand-700 hover:bg-brand-50 transition">
                {item.label}
                {item.children && (
                  <ChevronDown className="h-3.5 w-3.5 transition group-hover:rotate-180" />
                )}
              </button>
              {item.children && (
                <div className="invisible absolute left-1/2 top-full mt-2 w-56 -translate-x-1/2 rounded-xl border border-slate-200 bg-white p-2 opacity-0 shadow-soft transition-all group-hover:visible group-hover:opacity-100">
                  {item.children.map((child) => (
                    <a
                      key={child}
                      href="#"
                      className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-700"
                    >
                      {child}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#"
            className="text-sm font-medium text-slate-700 hover:text-brand-700"
          >
            Sign in
          </a>
          <a
            href="#cta"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-soft hover:bg-brand-700 transition"
          >
            Get the textbook
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white/70 text-slate-700"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="container-narrow py-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href="#"
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-700"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#cta"
              className="mt-3 block rounded-full bg-slate-900 px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Get the textbook
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
