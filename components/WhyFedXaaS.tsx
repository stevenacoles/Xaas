export default function WhyFedXaaS() {
  const reasons = [
    {
      title: "Built for software and technology companies",
      desc: "Not generic government consulting. Designed for the specific challenges software companies face entering federal.",
    },
    {
      title: "Designed for executives and capital allocators",
      desc: "We work at the board and leadership level — where the decisions that determine success or failure are actually made.",
    },
    {
      title: "Focused on sequencing, not theory",
      desc: "What to do, in what order, and when. Practical guidance designed to prevent the most common and expensive mistakes.",
    },
    {
      title: "Built to prevent expensive mistakes before they happen",
      desc: "The diagnostic identifies failure points before capital is deployed — not after momentum is already lost.",
    },
    {
      title: "Aligned for the long term",
      desc: "Our model reflects conviction in the companies we advise. We believe in long-term alignment with company outcomes.",
    },
  ];

  return (
    <section id="why" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
            Why FedXaaS
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            A different model for federal advisory
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="bg-navy-800/40 border border-white/5 rounded-2xl p-7"
            >
              <h4 className="font-semibold text-white mb-3">{reason.title}</h4>
              <p className="text-steel-400 text-sm leading-relaxed">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
