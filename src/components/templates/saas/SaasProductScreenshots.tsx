"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/shared/ScrollReveal";

const tabs = [
  {
    id: "dashboard",
    label: "Dashboard",
    content: {
      title: "Real-time Overview",
      description: "Monitor all your key metrics in one place",
    },
  },
  {
    id: "workflows",
    label: "Workflows",
    content: {
      title: "Automated Pipelines",
      description: "Build powerful automation with drag and drop",
    },
  },
  {
    id: "analytics",
    label: "Analytics",
    content: {
      title: "Deep Insights",
      description: "Understand your data with powerful visualizations",
    },
  },
];

const statCards = [
  { label: "Total Users", value: "12,483", change: "+14.2%" },
  { label: "Revenue", value: "$48.2k", change: "+8.7%" },
  { label: "Conversion", value: "3.24%", change: "+2.1%" },
  { label: "Active Now", value: "2,156", change: "" },
];

const revenueData: Record<string, { values: number[]; labels: string[] }> = {
  "7D": {
    values: [32, 45, 38, 52, 48, 61, 55],
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  "30D": {
    values: [30, 45, 35, 60, 50, 70, 55, 80, 65, 75, 85, 90],
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  },
  "90D": {
    values: [20, 28, 35, 32, 45, 40, 55, 50, 68, 62, 78, 85, 92],
    labels: ["W1", "", "W3", "", "W5", "", "W7", "", "W9", "", "W11", "", "W13"],
  },
};

function smoothPath(points: { x: number; y: number }[]): string {
  if (points.length < 2) return "";
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const cpX = (points[i - 1].x + points[i].x) / 2;
    d += ` C ${cpX} ${points[i - 1].y}, ${cpX} ${points[i].y}, ${points[i].x} ${points[i].y}`;
  }
  return d;
}

const CHART_POINTS = 12;

function interpolateValues(values: number[], targetLen: number): number[] {
  if (values.length === targetLen) return values;
  const result: number[] = [];
  for (let i = 0; i < targetLen; i++) {
    const t = i / (targetLen - 1);
    const srcIdx = t * (values.length - 1);
    const low = Math.floor(srcIdx);
    const high = Math.min(Math.ceil(srcIdx), values.length - 1);
    const frac = srcIdx - low;
    result.push(values[low] + (values[high] - values[low]) * frac);
  }
  return result;
}

function RevenueChart({ values }: { values: number[] }) {
  const normalized = interpolateValues(values, CHART_POINTS);
  const max = Math.max(...normalized);
  const min = Math.min(...normalized);
  const range = max - min || 1;
  const svgW = 400;
  const svgH = 120;
  const padY = 8;

  const points = normalized.map((v, i) => ({
    x: (i / (normalized.length - 1)) * svgW,
    y: padY + ((max - v) / range) * (svgH - padY * 2),
  }));

  const line = smoothPath(points);
  const area = `${line} L ${svgW} ${svgH} L 0 ${svgH} Z`;

  return (
    <svg
      viewBox={`0 0 ${svgW} ${svgH}`}
      className="w-full h-28"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgb(139, 92, 246)" stopOpacity="0.3" />
          <stop offset="100%" stopColor="rgb(139, 92, 246)" stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <motion.path
        animate={{ d: area }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        fill="url(#revenueGrad)"
      />
      <motion.path
        animate={{ d: line }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        fill="none"
        stroke="rgb(139, 92, 246)"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function DashboardMockup() {
  const [period, setPeriod] = useState("30D");
  const data = revenueData[period];

  return (
    <div className="p-4 space-y-3">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {statCards.map((stat) => (
          <div key={stat.label} className="bg-saas-bg rounded-lg p-3">
            <p className="text-sm text-zinc-500 mb-1 truncate">{stat.label}</p>
            <p className="text-xl font-semibold text-white font-mono">{stat.value}</p>
            {stat.change && (
              <p className="text-sm text-emerald-400 mt-0.5">{stat.change}</p>
            )}
          </div>
        ))}
      </div>
      <div className="bg-saas-bg rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm text-zinc-500">Revenue Over Time</p>
          <div className="flex gap-1">
            {["7D", "30D", "90D"].map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={`text-sm px-2.5 py-1 rounded transition-colors ${
                  period === p
                    ? "bg-saas-accent/20 text-saas-accent"
                    : "text-zinc-600 hover:text-zinc-400"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
        <RevenueChart values={data.values} />
        <AnimatePresence mode="wait">
          <motion.div
            key={period}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex justify-between mt-2"
          >
            {data.labels.map((label, i) => (
              <span key={i} className="text-sm text-zinc-600 flex-1 text-center">
                {label}
              </span>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

const workflowSteps = [
  { type: "trigger", label: "New User Signup", desc: "When a user creates an account" },
  { type: "action", label: "Send Welcome Email", desc: "Personalized onboarding email" },
  { type: "action", label: "Add to CRM", desc: "Create contact in Salesforce" },
  { type: "condition", label: "Check Plan Type", desc: "Free vs. Pro vs. Enterprise" },
  { type: "action", label: "Assign to Team", desc: "Route to success manager" },
];

function WorkflowsMockup() {
  return (
    <div className="p-4 space-y-2">
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm text-zinc-500">Onboarding Pipeline</p>
        <span className="text-sm px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          Active
        </span>
      </div>
      {workflowSteps.map((step, i) => (
        <div key={i} className="flex items-center gap-3">
          <div className="flex flex-col items-center">
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-mono ${
                step.type === "trigger"
                  ? "bg-saas-accent/20 text-saas-accent ring-2 ring-saas-accent/30"
                  : step.type === "condition"
                  ? "bg-amber-500/20 text-amber-400"
                  : "bg-saas-bg text-zinc-500"
              }`}
            >
              {i + 1}
            </div>
            {i < workflowSteps.length - 1 && (
              <div className="w-px h-2 bg-saas-border" />
            )}
          </div>
          <div className="flex-1 bg-saas-bg rounded-lg px-4 py-2.5 border border-saas-border">
            <p className="text-base text-zinc-300">{step.label}</p>
            <p className="text-sm text-zinc-600">{step.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

const metricRows = [
  { label: "Page Views", value: "124,892", bar: 85 },
  { label: "Unique Visitors", value: "48,201", bar: 65 },
  { label: "Bounce Rate", value: "32.4%", bar: 32 },
];

function AnalyticsMockup() {
  return (
    <div className="p-4 space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-saas-bg rounded-lg p-3">
          <p className="text-sm text-zinc-500 mb-3">Sessions by Source</p>
          <div className="space-y-2.5">
            {[
              { name: "Direct", value: 35, color: "bg-saas-accent" },
              { name: "Organic", value: 28, color: "bg-emerald-500" },
              { name: "Referral", value: 18, color: "bg-amber-500" },
              { name: "Social", value: 12, color: "bg-rose-400" },
              { name: "Email", value: 7, color: "bg-sky-400" },
            ].map((source) => (
              <div key={source.name} className="flex items-center gap-2">
                <span className="text-sm text-zinc-400 w-14 shrink-0">{source.name}</span>
                <div className="flex-1 h-2 bg-saas-border rounded-full overflow-hidden">
                  <div
                    className={`h-full ${source.color} rounded-full`}
                    style={{ width: `${source.value * 2.5}%` }}
                  />
                </div>
                <span className="text-sm text-zinc-500 w-8 text-right">{source.value}%</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-saas-bg rounded-lg p-3">
          <p className="text-sm text-zinc-500 mb-2">Goal Completion</p>
          <div className="relative w-20 h-20 mx-auto">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
              <circle
                cx="18"
                cy="18"
                r="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="text-saas-border"
              />
              <circle
                cx="18"
                cy="18"
                r="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeDasharray="88"
                strokeDashoffset="24"
                strokeLinecap="round"
                className="text-saas-accent"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-mono text-saas-accent font-semibold">72%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-saas-bg rounded-lg p-3 space-y-3">
        <p className="text-sm text-zinc-500">Top Metrics</p>
        {metricRows.map((row) => (
          <div key={row.label} className="flex items-center gap-3">
            <span className="text-sm text-zinc-400 w-24 truncate">{row.label}</span>
            <div className="flex-1 h-1.5 bg-saas-border rounded-full overflow-hidden">
              <div
                className="h-full bg-saas-accent/50 rounded-full"
                style={{ width: `${row.bar}%` }}
              />
            </div>
            <span className="text-sm text-zinc-300 font-mono w-20 text-right">{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const mockups: Record<string, React.FC> = {
  dashboard: DashboardMockup,
  workflows: WorkflowsMockup,
  analytics: AnalyticsMockup,
};

export default function SaasProductScreenshots() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const Mockup = mockups[activeTab];

  return (
    <section id="product" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-12">
          <p className="text-saas-accent text-lg font-medium uppercase tracking-wider mb-3">
            Product
          </p>
          <h2 className="font-space-grotesk text-3xl sm:text-4xl font-bold text-white">
            Powerful tools, simple interface
          </h2>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="flex justify-center gap-1 mb-8 bg-saas-surface rounded-lg p-1 max-w-md mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-4 py-2.5 rounded-md text-lg font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-saas-accent text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="rounded-xl border border-saas-border bg-saas-surface overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {Mockup && <Mockup />}
            </motion.div>
          </AnimatePresence>
        </div>
      </ScrollReveal>
    </section>
  );
}
