export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium tracking-wide uppercase">
          API Monitoring
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Predict when you'll hit{" "}
          <span className="text-[#58a6ff]">API limits</span>{" "}
          before it happens
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Monitor API usage across all your services, analyze consumption trends, and get alerted before quota exhaustion disrupts your app.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Monitoring — $12/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for trial. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {["Real-time dashboards", "Burn rate predictions", "Multi-API support", "Configurable alerts", "Optimization tips"].map((f) => (
            <span key={f} className="px-4 py-2 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#c9d1d9]">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <p className="text-sm text-[#58a6ff] font-medium uppercase tracking-wide mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$12</p>
          <p className="text-[#6e7681] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited API endpoints",
              "Predictive burn-rate alerts",
              "7-day usage history",
              "Email & webhook notifications",
              "Optimization recommendations"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which APIs does it support?",
              a: "Any REST API with quota headers or usage endpoints — including OpenAI, Stripe, Twilio, SendGrid, and custom APIs via our SDK."
            },
            {
              q: "How does the burn-rate prediction work?",
              a: "We analyze your historical usage with time-series trend analysis to forecast when you'll hit your quota, giving you hours or days of advance warning."
            },
            {
              q: "What happens when I'm close to my limit?",
              a: "You receive configurable alerts via email or webhook, plus actionable suggestions to reduce consumption — like caching, batching, or request throttling."
            }
          ].map(({ q, a }) => (
            <div key={q} className="rounded-xl border border-[#30363d] bg-[#161b22] p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} API Quota Burn Predictor. All rights reserved.
      </footer>
    </main>
  );
}
