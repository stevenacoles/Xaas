export default function DiagnosticSection() {
  const outputs = [
    "Federal Readiness Score",
    "Capital risk analysis",
    "Opportunity cost exposure",
    "Critical failure points",
    "90-day action plan",
    "Executive readout",
  ];

  const steps = [
    {
      num: "01",
      title: "Executive Intake",
      desc: "Structured discovery with your leadership team",
    },
    {
      num: "02",
      title: "Rapid Assessment",
      desc: "10-day analysis of strategy, positioning, and readiness",
    },
    {
      num: "03",
      title: "Board-Ready Readout",
      desc: "Actionable findings, scoring, and 90-day plan",
    },
  ];

  return (
    <section id="diagnostic" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
            10-Day Federal Readiness Diagnostic
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Know if your federal strategy will work — in 10 days.
          </h2>
          <p className="mt-6 text-lg text-steel-300 leading-relaxed">
            A structured executive assessment designed to identify where your
            strategy will break before you deploy more capital.
          </p>
        </div>

        {/* Outputs */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {outputs.map((output, i) => (
            <div
              key={i}
              className="bg-navy-800/50 border border-white/5 rounded-xl px-6 py-5 flex items-center gap-3"
            >
              <svg
                className="w-5 h-5 text-accent flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-steel-200">{output}</span>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.num}>
              <span className="text-accent text-sm font-mono font-semibold">
                {step.num}
              </span>
              <h4 className="text-lg font-semibold mt-2">{step.title}</h4>
              <p className="text-steel-400 mt-2 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <a
            href="#access"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-light text-white font-medium px-8 py-4 rounded-lg text-base transition-colors duration-200"
          >
            Request Diagnostic Access
          </a>
          <p className="text-steel-400 text-sm">
            Typically less than the cost of a single senior mis-hire.
          </p>
        </div>
      </div>
    </section>
  );
}
