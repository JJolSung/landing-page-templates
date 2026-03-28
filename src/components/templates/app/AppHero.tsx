import ScrollReveal from "@/components/shared/ScrollReveal";
import { Apple, Play } from "lucide-react";

export default function AppHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-12 overflow-hidden">
      {/* Gradient orb background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-app-indigo/30 to-app-purple/30 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-app-border text-sm text-slate-400 mb-8">
            <span className="w-2 h-2 bg-gradient-to-r from-app-indigo to-app-purple rounded-full animate-pulse" />
            Now available on iOS &amp; Android
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1 className="font-manrope text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6">
            Take Control of
            <br />
            <span className="bg-gradient-to-r from-app-indigo to-app-purple bg-clip-text text-transparent">
              Your Finances
            </span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            Finflow helps you track spending, build budgets, and grow your
            investments — all in one beautifully simple app.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="px-8 py-3.5 bg-gradient-to-r from-app-indigo to-app-purple text-white rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity flex items-center gap-2.5 shadow-lg shadow-app-indigo/25"
            >
              <Apple className="w-5 h-5" />
              App Store
            </a>
            <a
              href="#"
              className="px-8 py-3.5 bg-gradient-to-r from-app-indigo to-app-purple text-white rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity flex items-center gap-2.5 shadow-lg shadow-app-purple/25"
            >
              <Play className="w-5 h-5 fill-white" />
              Google Play
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Phone mockup */}
      <ScrollReveal delay={0.4} className="relative z-10 mt-16">
        <div className="relative mx-auto w-[280px] sm:w-[300px]">
          {/* Phone frame */}
          <div className="rounded-[40px] border-2 border-app-border bg-app-surface p-2 shadow-2xl shadow-app-indigo/10">
            <div className="rounded-[32px] bg-app-bg overflow-hidden relative">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-app-surface rounded-b-2xl z-10" />

              {/* Screen content */}
              <div className="pt-10 pb-6 px-4 min-h-[480px]">
                {/* Status bar */}
                <div className="flex items-center justify-between mb-6 text-[10px] text-slate-500">
                  <span>9:41</span>
                  <div className="flex gap-1">
                    <div className="w-3.5 h-1.5 bg-slate-500 rounded-sm" />
                    <div className="w-1.5 h-1.5 bg-slate-500 rounded-full" />
                  </div>
                </div>

                {/* Greeting */}
                <p className="text-slate-400 text-xs mb-1">Good morning,</p>
                <p className="text-white font-semibold text-sm mb-5">Alex</p>

                {/* Balance card */}
                <div className="rounded-2xl bg-gradient-to-br from-app-indigo to-app-purple p-4 mb-5 shadow-lg shadow-app-indigo/20">
                  <p className="text-white/70 text-[10px] mb-1">
                    Total Balance
                  </p>
                  <p className="text-white font-bold text-2xl mb-3">
                    $24,562.80
                  </p>
                  <div className="flex gap-3">
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center">
                        <div className="w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-b-[4px] border-b-emerald-400" />
                      </div>
                      <span className="text-[10px] text-emerald-300">
                        +12.5%
                      </span>
                    </div>
                    <span className="text-[10px] text-white/50">
                      vs last month
                    </span>
                  </div>
                </div>

                {/* Quick actions */}
                <div className="grid grid-cols-4 gap-2 mb-5">
                  {["Send", "Request", "Cards", "More"].map((action) => (
                    <div key={action} className="flex flex-col items-center gap-1.5">
                      <div className="w-10 h-10 rounded-xl bg-app-surface flex items-center justify-center">
                        <div className="w-4 h-4 rounded bg-gradient-to-br from-app-indigo/40 to-app-purple/40" />
                      </div>
                      <span className="text-[9px] text-slate-400">{action}</span>
                    </div>
                  ))}
                </div>

                {/* Transaction list */}
                <p className="text-white text-xs font-semibold mb-3">
                  Recent Transactions
                </p>
                {[
                  {
                    name: "Netflix",
                    amount: "-$15.99",
                    color: "from-red-500/20 to-red-600/20",
                  },
                  {
                    name: "Salary",
                    amount: "+$4,200",
                    color: "from-emerald-500/20 to-emerald-600/20",
                  },
                  {
                    name: "Uber",
                    amount: "-$24.50",
                    color: "from-slate-500/20 to-slate-600/20",
                  },
                ].map((tx) => (
                  <div
                    key={tx.name}
                    className="flex items-center justify-between py-2.5 border-b border-app-border/50 last:border-0"
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-8 h-8 rounded-lg bg-gradient-to-br ${tx.color} flex items-center justify-center`}
                      >
                        <div className="w-3 h-3 rounded bg-white/10" />
                      </div>
                      <span className="text-xs text-slate-300">{tx.name}</span>
                    </div>
                    <span
                      className={`text-xs font-medium ${
                        tx.amount.startsWith("+")
                          ? "text-emerald-400"
                          : "text-slate-300"
                      }`}
                    >
                      {tx.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Glow behind phone */}
          <div className="absolute -inset-4 bg-gradient-to-b from-app-indigo/10 to-app-purple/10 rounded-[48px] blur-2xl -z-10" />
        </div>
      </ScrollReveal>
    </section>
  );
}
