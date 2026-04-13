export default function WhatWeDo() {
  const executiveServices = [
    "Federal Readiness Assessment",
    "Executive Federal Entry Strategy",
    "GTM Sequencing and Hiring Plan",
    "Product and Compliance Prioritization",
    "Partner and Channel Strategy",
    "Board and Leadership Advisory",
  ];

  const investorServices = [
    "Portfolio Federal Diagnostics",
    "Federal Readiness Scoring Across Companies",
    "Capital Allocation Guidance",
    "Expansion Risk Assessment",
    "Cross-portfolio Pattern Recognition",
    "Executive Team Advisory",
  ];

  return (
    <section id="advisory" className="py-24 lg:py-32 bg-navy-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Strategic advisory built for federal execution
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-navy-800/40 border border-white/5 rounded-2xl p-8 lg:p-10">
            <h3 className="text-xl font-semibold mb-6">Executive Advisory</h3>
            <ul className="space-y-4">
              {executiveServices.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-steel-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-navy-800/40 border border-white/5 rounded-2xl p-8 lg:p-10">
            <h3 className="text-xl font-semibold mb-6">
              Investor &amp; Portfolio Layer
            </h3>
            <ul className="space-y-4">
              {investorServices.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
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
