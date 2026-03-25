export default function DiagnosticHook() {
  const mistakes = [
    "Hiring a federal leader before validating demand",
    "Investing in compliance before proving the motion",
    "Chasing deals without a repeatable strategy",
    "Misunderstanding how the government actually buys",
    "Overcommitting capital before the fundamentals exist",
  ];

  return (
    <section className="py-24 lg:py-32 bg-navy-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Are you about to waste{" "}
            <span className="text-accent">$5M</span> entering federal?
          </h2>
          <p className="mt-6 text-lg text-steel-300 leading-relaxed">
            Most companies don&apos;t realize they&apos;re making the wrong
            federal decisions until after capital is deployed, hires are made,
            and momentum is lost. By the time the pattern is visible, the
            damage is done.
          </p>
        </div>

        <div className="mt-12 grid gap-4">
          {mistakes.map((mistake, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-navy-800/50 border border-white/5 rounded-xl px-6 py-5"
            >
              <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-accent" />
              </span>
              <p className="text-steel-200 text-base">{mistake}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="#diagnostic"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-light text-white font-medium px-8 py-4 rounded-lg text-base transition-colors duration-200"
          >
            Run the Diagnostic
          </a>
        </div>
      </div>
    </section>
  );
}
