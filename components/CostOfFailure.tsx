export default function CostOfFailure() {
  const operatorCosts = [
    { label: "Misaligned hires", detail: "Wrong leader, wrong timing" },
    { label: "Wasted GTM spend", detail: "Activity without a repeatable motion" },
    { label: "Delayed traction", detail: "12–24 months of lost momentum" },
    { label: "Stalled credibility", detail: "Leadership and board confidence erodes" },
  ];

  const investorCosts = [
    { label: "Poor capital efficiency", detail: "Burn without validated demand" },
    { label: "Portfolio drag", detail: "One failed expansion affects the fund" },
    { label: "Delayed revenue expansion", detail: "Missed growth compounding" },
    { label: "Lower multiple expansion", detail: "Federal TAM never captured" },
  ];

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            The cost of getting federal wrong is measured in{" "}
            <span className="text-accent">millions</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-steel-400 mb-6">
              For Operators
            </p>
            <div className="space-y-4">
              {operatorCosts.map((item, i) => (
                <div
                  key={i}
                  className="border-l-2 border-accent/30 pl-5 py-2"
                >
                  <p className="font-medium text-white">{item.label}</p>
                  <p className="text-sm text-steel-400 mt-1">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-steel-400 mb-6">
              For Investors
            </p>
            <div className="space-y-4">
              {investorCosts.map((item, i) => (
                <div
                  key={i}
                  className="border-l-2 border-accent/30 pl-5 py-2"
                >
                  <p className="font-medium text-white">{item.label}</p>
                  <p className="text-sm text-steel-400 mt-1">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-12 text-center text-steel-400 text-base">
          The total opportunity cost of a failed federal entry can reach{" "}
          <span className="text-white font-medium">
            tens of millions of dollars
          </span>
          .
        </p>
      </div>
    </section>
  );
}
