const stats = [
  { value: "160+", label: "Structured chapters" },
  { value: "850+", label: "Clinical photographs" },
  { value: "300+", label: "Diagrams & flowcharts" },
  { value: "90+", label: "Countries reached" },
];

export default function Stats() {
  return (
    <section className="relative py-14 md:py-20">
      <div className="container-narrow">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 px-6 py-10 md:px-12 md:py-14 shadow-soft">
          <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-4xl font-bold gradient-text md:text-5xl">
                  {s.value}
                </div>
                <p className="mt-2 text-sm font-medium text-slate-600">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
