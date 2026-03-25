export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center grid-bg overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-4xl">
          <div className="animate-fade-in-up">
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-6">
              Invite-Only Advisory
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight">
              Federal is where great companies either{" "}
              <span className="text-accent">compound</span> — or stall.
            </h1>
          </div>

          <p className="animate-fade-in-up-delay mt-8 text-lg sm:text-xl text-steel-300 max-w-2xl leading-relaxed">
            FedXaaS helps executives and investors build federal businesses that
            scale — without wasting millions in capital and years in lost
            opportunity.
          </p>

          <div className="animate-fade-in-up-delay-2 mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#access"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-light text-white font-medium px-8 py-4 rounded-lg text-base transition-colors duration-200"
            >
              Request Access
            </a>
            <a
              href="#diagnostic"
              className="inline-flex items-center justify-center border border-white/15 hover:border-white/30 text-white font-medium px-8 py-4 rounded-lg text-base transition-colors duration-200"
            >
              Run the Diagnostic
            </a>
          </div>

          <p className="animate-fade-in-up-delay-2 mt-12 text-sm text-steel-400">
            Built around long-term alignment, not just billable time.
          </p>
        </div>
      </div>
    </section>
  );
}
