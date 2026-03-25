export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-lg font-semibold tracking-tight">
              Fed<span className="text-accent">XaaS</span>
            </p>
            <p className="text-sm text-steel-400 mt-1">
              Federal Execution-as-a-Service
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-steel-400">
            <a
              href="mailto:contact@fedxaas.com"
              className="hover:text-white transition-colors"
            >
              contact@fedxaas.com
            </a>
            <a
              href="https://linkedin.com/company/fedxaas"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-steel-400">
            &copy; {new Date().getFullYear()} FedXaaS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
