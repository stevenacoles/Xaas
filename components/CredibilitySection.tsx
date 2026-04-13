export default function CredibilitySection() {
  return (
    <section className="py-24 lg:py-32 bg-navy-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Built on real federal execution experience
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-navy-800/40 border border-white/5 rounded-2xl p-7">
            <p className="text-sm text-steel-400 uppercase tracking-widest mb-3">
              Founder Background
            </p>
            <div className="h-24 flex items-center justify-center border border-dashed border-white/10 rounded-xl">
              <p className="text-steel-400 text-sm italic">
                Operator bio placeholder
              </p>
            </div>
          </div>

          <div className="bg-navy-800/40 border border-white/5 rounded-2xl p-7">
            <p className="text-sm text-steel-400 uppercase tracking-widest mb-3">
              Federal GTM Experience
            </p>
            <div className="h-24 flex items-center justify-center border border-dashed border-white/10 rounded-xl">
              <p className="text-steel-400 text-sm italic">
                Experience details placeholder
              </p>
            </div>
          </div>

          <div className="bg-navy-800/40 border border-white/5 rounded-2xl p-7">
            <p className="text-sm text-steel-400 uppercase tracking-widest mb-3">
              Investor &amp; Portfolio Experience
            </p>
            <div className="h-24 flex items-center justify-center border border-dashed border-white/10 rounded-xl">
              <p className="text-steel-400 text-sm italic">
                Portfolio experience placeholder
              </p>
            </div>
          </div>

          <div className="sm:col-span-2 lg:col-span-3 bg-navy-800/40 border border-white/5 rounded-2xl p-7">
            <p className="text-sm text-steel-400 uppercase tracking-widest mb-4">
              Selected Logos &amp; Proof Points
            </p>
            <div className="h-20 flex items-center justify-center border border-dashed border-white/10 rounded-xl">
              <p className="text-steel-400 text-sm italic">
                Company logos and outcome proof points placeholder
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
