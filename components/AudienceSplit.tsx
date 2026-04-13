export default function AudienceSplit() {
  const executives = [
    "Build a real federal growth engine",
    "Sequence hiring and GTM correctly",
    "Reduce wasted spend",
    "Accelerate time to revenue",
  ];

  const investors = [
    "Protect portfolio capital",
    "Standardize federal readiness across companies",
    "Reduce failed expansion attempts",
    "Improve valuation outcomes",
  ];

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Executives */}
          <div className="bg-navy-800/40 border border-white/5 rounded-2xl p-8 lg:p-10">
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
              For Executives
            </p>
            <h3 className="text-2xl font-semibold mb-6">
              Build federal the right way
            </h3>
            <ul className="space-y-4">
              {executives.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-accent mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-steel-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Investors */}
          <div className="bg-navy-800/40 border border-white/5 rounded-2xl p-8 lg:p-10">
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
              For Investors
            </p>
            <h3 className="text-2xl font-semibold mb-6">
              Protect capital, improve outcomes
            </h3>
            <ul className="space-y-4">
              {investors.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-accent mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-steel-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
