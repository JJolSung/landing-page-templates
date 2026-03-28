"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/shared/ScrollReveal";

const tabs = [
  { id: "dashboard", label: "Dashboard" },
  { id: "analytics", label: "Analytics" },
  { id: "goals", label: "Goals" },
];

function DashboardScreen() {
  return (
    <div className="pt-10 pb-6 px-4 min-h-[420px]">
      {/* Notch placeholder area */}
      <p className="text-slate-400 text-[10px] mb-4">Overview</p>
      <p className="text-white font-semibold text-sm mb-4">My Dashboard</p>

      {/* Mini cards */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        <div className="bg-app-surface rounded-xl p-3">
          <p className="text-[9px] text-slate-500 mb-1">Income</p>
          <p className="text-emerald-400 text-sm font-bold">$8,420</p>
        </div>
        <div className="bg-app-surface rounded-xl p-3">
          <p className="text-[9px] text-slate-500 mb-1">Expenses</p>
          <p className="text-rose-400 text-sm font-bold">$3,180</p>
        </div>
      </div>

      {/* Chart area */}
      <div className="bg-app-surface rounded-xl p-3 mb-4">
        <p className="text-[10px] text-slate-400 mb-3">Spending Trend</p>
        <div className="flex items-end gap-1 h-20">
          {[40, 55, 35, 70, 50, 80, 45, 65, 75, 60, 50, 70].map((h, i) => (
            <div key={i} className="flex-1 flex items-end">
              <div
                className="w-full rounded-t bg-gradient-to-t from-app-indigo to-app-purple"
                style={{ height: `${h}%`, opacity: 0.4 + (i / 12) * 0.6 }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Accounts */}
      <p className="text-[10px] text-slate-400 mb-2">Accounts</p>
      {[
        { name: "Checking", bal: "$12,340" },
        { name: "Savings", bal: "$8,200" },
        { name: "Investment", bal: "$4,022" },
      ].map((acc) => (
        <div
          key={acc.name}
          className="flex justify-between py-2 border-b border-app-border/50 last:border-0"
        >
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-app-indigo/30 to-app-purple/30" />
            <span className="text-[11px] text-slate-300">{acc.name}</span>
          </div>
          <span className="text-[11px] text-white font-medium">{acc.bal}</span>
        </div>
      ))}
    </div>
  );
}

function AnalyticsScreen() {
  return (
    <div className="pt-10 pb-6 px-4 min-h-[420px]">
      <p className="text-slate-400 text-[10px] mb-4">Insights</p>
      <p className="text-white font-semibold text-sm mb-4">Analytics</p>

      {/* Donut chart */}
      <div className="bg-app-surface rounded-xl p-4 mb-4 flex items-center gap-4">
        <div className="relative w-20 h-20 flex-shrink-0">
          <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
            <circle
              cx="18"
              cy="18"
              r="14"
              fill="none"
              stroke="#334155"
              strokeWidth="3"
            />
            <circle
              cx="18"
              cy="18"
              r="14"
              fill="none"
              stroke="#6366f1"
              strokeWidth="3"
              strokeDasharray="44 88"
              strokeLinecap="round"
            />
            <circle
              cx="18"
              cy="18"
              r="14"
              fill="none"
              stroke="#a855f7"
              strokeWidth="3"
              strokeDasharray="26 88"
              strokeDashoffset="-44"
              strokeLinecap="round"
            />
            <circle
              cx="18"
              cy="18"
              r="14"
              fill="none"
              stroke="#22d3ee"
              strokeWidth="3"
              strokeDasharray="18 88"
              strokeDashoffset="-70"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[10px] text-white font-semibold">100%</span>
          </div>
        </div>
        <div className="space-y-1.5">
          {[
            { label: "Food", pct: "50%", color: "bg-app-indigo" },
            { label: "Transport", pct: "30%", color: "bg-app-purple" },
            { label: "Shopping", pct: "20%", color: "bg-cyan-400" },
          ].map((cat) => (
            <div key={cat.label} className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${cat.color}`} />
              <span className="text-[10px] text-slate-300">{cat.label}</span>
              <span className="text-[10px] text-slate-500 ml-auto">
                {cat.pct}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Monthly comparison */}
      <div className="bg-app-surface rounded-xl p-3 mb-4">
        <p className="text-[10px] text-slate-400 mb-3">Monthly Comparison</p>
        {["Jan", "Feb", "Mar", "Apr"].map((m, i) => {
          const widths = [60, 75, 50, 85];
          return (
            <div key={m} className="flex items-center gap-2 mb-2 last:mb-0">
              <span className="text-[9px] text-slate-500 w-6">{m}</span>
              <div className="flex-1 h-3 bg-app-bg rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-app-indigo to-app-purple rounded-full"
                  style={{ width: `${widths[i]}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Tip */}
      <div className="rounded-xl bg-gradient-to-r from-app-indigo/10 to-app-purple/10 border border-app-indigo/20 p-3">
        <p className="text-[10px] text-app-indigo-light font-medium mb-1">
          AI Insight
        </p>
        <p className="text-[9px] text-slate-400 leading-relaxed">
          You spent 23% less on dining this month. Keep it up!
        </p>
      </div>
    </div>
  );
}

function GoalsScreen() {
  return (
    <div className="pt-10 pb-6 px-4 min-h-[420px]">
      <p className="text-slate-400 text-[10px] mb-4">Savings</p>
      <p className="text-white font-semibold text-sm mb-4">My Goals</p>

      {[
        { name: "Emergency Fund", target: "$10,000", current: 72, saved: "$7,200" },
        { name: "Vacation", target: "$3,000", current: 45, saved: "$1,350" },
        { name: "New Car", target: "$25,000", current: 28, saved: "$7,000" },
      ].map((goal) => (
        <div
          key={goal.name}
          className="bg-app-surface rounded-xl p-3.5 mb-3 last:mb-0"
        >
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="text-[11px] text-white font-medium">{goal.name}</p>
              <p className="text-[9px] text-slate-500">
                {goal.saved} of {goal.target}
              </p>
            </div>
            <span className="text-[11px] font-bold bg-gradient-to-r from-app-indigo to-app-purple bg-clip-text text-transparent">
              {goal.current}%
            </span>
          </div>
          <div className="h-2 bg-app-bg rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-app-indigo to-app-purple rounded-full transition-all"
              style={{ width: `${goal.current}%` }}
            />
          </div>
        </div>
      ))}

      {/* Add goal button */}
      <button className="w-full mt-3 py-2.5 rounded-xl border border-dashed border-app-border text-[10px] text-slate-500 hover:border-app-indigo/50 transition-colors">
        + Add New Goal
      </button>
    </div>
  );
}

const screens: Record<string, () => JSX.Element> = {
  dashboard: DashboardScreen,
  analytics: AnalyticsScreen,
  goals: GoalsScreen,
};

export default function AppShowcase() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const Screen = screens[activeTab];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-app-indigo to-app-purple bg-clip-text text-transparent mb-3">
              Showcase
            </p>
            <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-white mb-4">
              See Finflow in action
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto">
              Explore the key screens that make managing money a breeze.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          {/* Tab switcher */}
          <div className="flex justify-center gap-1 mb-10 bg-app-surface rounded-xl p-1.5 max-w-sm mx-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="app-showcase-tab"
                    className="absolute inset-0 bg-gradient-to-r from-app-indigo to-app-purple rounded-lg"
                    transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Phone mockup with tabs */}
        <ScrollReveal delay={0.2}>
          <div className="flex justify-center">
            <div className="relative mx-auto w-[280px] sm:w-[300px]">
              {/* Phone frame */}
              <div className="rounded-[40px] border-2 border-app-border bg-app-surface p-2 shadow-2xl shadow-app-indigo/10">
                <div className="rounded-[32px] bg-app-bg overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-app-surface rounded-b-2xl z-10" />

                  {/* Animated content */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                    >
                      {Screen && <Screen />}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Glow behind phone */}
              <div className="absolute -inset-4 bg-gradient-to-b from-app-indigo/10 to-app-purple/10 rounded-[48px] blur-2xl -z-10" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
