"use client";

import { useState, FormEvent } from "react";

const roles = [
  "CEO / Founder",
  "CRO / GTM Leader",
  "Board Member",
  "VC / Investor",
  "PE / Growth Equity",
  "Investment Bank",
  "Portfolio Operator",
  "Other",
];

export default function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = {
      first_name: (form.elements.namedItem("first_name") as HTMLInputElement).value,
      last_name: (form.elements.namedItem("last_name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      title: (form.elements.namedItem("title") as HTMLInputElement).value,
      website: (form.elements.namedItem("website") as HTMLInputElement).value,
      role: (form.elements.namedItem("role") as HTMLSelectElement).value,
      challenge: (form.elements.namedItem("challenge") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const result = await res.json();
        setError(result.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <section id="access" className="py-24 lg:py-32">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <div className="bg-navy-800/40 border border-white/5 rounded-2xl p-12">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-accent"
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
            </div>
            <h2 className="text-3xl font-bold">Request received.</h2>
            <p className="mt-4 text-steel-300 leading-relaxed">
              We review all submissions and prioritize executive teams and
              firms where we believe we can drive immediate impact.
            </p>
            <p className="mt-4 text-steel-400 text-sm">
              If selected, you will receive next steps.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="access" className="py-24 lg:py-32">
      <div className="max-w-2xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
            Limited Access
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Request Access
          </h2>
          <p className="mt-4 text-steel-300">
            We work with a limited number of executive teams and firms.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-navy-800/40 border border-white/5 rounded-2xl p-8 lg:p-10 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="first_name"
                className="block text-sm font-medium text-steel-300 mb-1.5"
              >
                First Name *
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                required
                className="w-full bg-navy-900 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-steel-400 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-colors text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block text-sm font-medium text-steel-300 mb-1.5"
              >
                Last Name *
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                required
                className="w-full bg-navy-900 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-steel-400 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-colors text-sm"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-steel-300 mb-1.5"
            >
              Work Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-navy-900 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-steel-400 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-colors text-sm"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-steel-300 mb-1.5"
              >
                Company / Firm
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full bg-navy-900 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-steel-400 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-colors text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-steel-300 mb-1.5"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="w-full bg-navy-900 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-steel-400 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-colors text-sm"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="website"
              className="block text-sm font-medium text-steel-300 mb-1.5"
            >
              Website
            </label>
            <input
              type="url"
              id="website"
              name="website"
              placeholder="https://"
              className="w-full bg-navy-900 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-steel-400 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-colors text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="role"
              className="block text-sm font-medium text-steel-300 mb-1.5"
            >
              I am a:
            </label>
            <select
              id="role"
              name="role"
              className="w-full bg-navy-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-colors text-sm appearance-none"
            >
              <option value="">Select one</option>
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="challenge"
              className="block text-sm font-medium text-steel-300 mb-1.5"
            >
              What is your biggest challenge with federal right now?
            </label>
            <textarea
              id="challenge"
              name="challenge"
              rows={4}
              className="w-full bg-navy-900 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-steel-400 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-colors text-sm resize-none"
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-accent hover:bg-accent-light disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium px-8 py-4 rounded-lg text-base transition-colors duration-200"
          >
            {loading ? "Submitting..." : "Request Access"}
          </button>

          <p className="text-center text-steel-400 text-xs">
            Applications reviewed. We prioritize where we can drive immediate
            impact.
          </p>
        </form>
      </div>
    </section>
  );
}
