export default function FinalCTA() {
  return (
    <section className="py-24 lg:py-32 bg-navy-900 grid-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-navy-900 pointer-events-none" />
      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
          Federal can become a compounding advantage — or a{" "}
          <span className="text-accent">capital sink</span>.
        </h2>
        <p className="mt-6 text-lg text-steel-300">
          The difference is execution, sequencing, and alignment.
        </p>
        <div className="mt-10">
          <a
            href="#access"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-light text-white font-medium px-8 py-4 rounded-lg text-base transition-colors duration-200"
          >
            Request Access
          </a>
        </div>
      </div>
    </section>
  );
}
