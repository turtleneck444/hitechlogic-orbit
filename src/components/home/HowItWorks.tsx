import { Activity, ArrowRight, ShieldCheck, Workflow } from "lucide-react";
import {
  ComposedChart,
  Area,
  Line,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Bar,
} from "recharts";
import { Card } from "@/components/ui/card";
import { blogPosts, type BlogPost } from "@/data/blogPosts";
import { Link } from "react-router-dom";

const phases = [
  {
    title: "Assess & Align",
    summary: "Executive intake, SLA scorecard, modernization priorities documented.",
  },
  {
    title: "Stabilize Operations",
    summary: "Noise suppression, on-call discipline, and service ownership defined.",
  },
  {
    title: "Automate & Govern",
    summary: "Runbooks, identity guardrails, and telemetry dashboards deployed.",
  },
  {
    title: "Evolve & Scale",
    summary: "Capacity, FinOps, and modernization roadmaps executed with leadership.",
  },
];

const analyticsData = [
  { label: "May", automationCoverage: 38, mttr: 72, noiseFiltered: 24 },
  { label: "Jun", automationCoverage: 52, mttr: 64, noiseFiltered: 42 },
  { label: "Jul", automationCoverage: 61, mttr: 55, noiseFiltered: 58 },
  { label: "Aug", automationCoverage: 68, mttr: 46, noiseFiltered: 69 },
  { label: "Sep", automationCoverage: 74, mttr: 38, noiseFiltered: 78 },
  { label: "Oct", automationCoverage: 81, mttr: 32, noiseFiltered: 84 },
];

const featuredPosts = blogPosts.slice(0, 2);


export function HowItWorks() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-4 max-w-2xl">
              <span className="eyebrow text-electric-blue/70">How we work</span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-[2.6rem] leading-tight text-[hsl(var(--navy))]">
                A Disciplined Framework Guiding Every Deployment
              </h2>
              <p className="text-base text-slate-600">
                HiTechLogic blends telemetry, automation, and steady executive cadence so engagements remain visible and proactive.
                Each capability below shows how we keep MSP programs predictable, data-driven, and ready for scale.
              </p>
            </div>
            <div className="flex flex-col gap-3 text-base text-slate-600 max-w-md">
              <p>
                Engagements progress through four managed phases with executive gate reviews so automation, security, and financial
                controls evolve together while remaining fully transparent to leadership.
              </p>
              <p className="text-sm text-slate-500">
                Weekly scorecards summarize reliability posture, automation coverage, and FinOps impact before we progress to the next phase.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
            {phases.map((phase, index) => (
              <div
                key={phase.title}
                className="flex-1 min-w-[200px] rounded-xl bg-white p-4 shadow-sm"
              >
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-slate-400">
                  <span>Step {String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="mt-1 text-sm font-semibold text-[hsl(var(--navy))]">{phase.title}</div>
                <p className="text-xs text-slate-500 mt-1">{phase.summary}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-slate-200 bg-white p-6 shadow-[0_20px_60px_-40px_rgba(11,18,32,0.7)]">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Activity className="h-4 w-4 text-electric-blue" />
              Automation Telemetry
            </div>
            <h3 className="mt-3 text-xl font-semibold text-[hsl(var(--navy))]">
              Automation coverage vs MTTR: leadership’s weekly KPI snapshot.
            </h3>
            <p className="text-sm text-slate-600">
              HiTechLogic correlates automation adoption with MTTR reduction and noise volume so executives see the ROI of every runbook.
            </p>
            <div className="mt-6 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={analyticsData} margin={{ top: 10, right: 16, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="fillAutomation" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2563eb" stopOpacity={0.8} />
                      <stop offset="80%" stopColor="#2563eb" stopOpacity={0.05} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid vertical={false} horizontal stroke="#f1f5f9" />
                  <XAxis dataKey="label" axisLine={false} tickLine={false} tick={{ fill: "#94a3b8", fontSize: 12 }} />
                  <YAxis
                    yAxisId="left"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#94a3b8", fontSize: 12 }}
                    domain={[0, 100]}
                    label={{ value: "Percent", angle: -90, position: "insideLeft", fill: "#94a3b8", fontSize: 11 }}
                  />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#94a3b8", fontSize: 12 }}
                    domain={[20, 80]}
                    label={{ value: "MTTR (minutes)", angle: 90, position: "insideRight", fill: "#94a3b8", fontSize: 11 }}
                  />
                  <Tooltip content={<AutomationTooltip />} cursor={{ fill: "transparent" }} />
                  <Bar
                    yAxisId="left"
                    dataKey="noiseFiltered"
                    barSize={18}
                    radius={[6, 6, 0, 0]}
                    fill="#0EA5E9"
                    opacity={0.4}
                  />
                  <Area
                    yAxisId="left"
                    type="monotone"
                    dataKey="automationCoverage"
                    stroke="#2563eb"
                    fill="url(#fillAutomation)"
                    strokeWidth={2.2}
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="mttr"
                    stroke="#ec4899"
                    strokeWidth={2.2}
                    dot={{ r: 3 }}
                    activeDot={{ r: 5 }}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card className="border-slate-200 bg-white p-0 overflow-hidden shadow-[0_20px_60px_-40px_rgba(11,18,32,0.7)]">
            <div className="grid sm:grid-cols-2">
              {featuredPosts.map((post) => (
                <BlogFeatureCard key={post.slug} post={post} />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

function BlogFeatureCard({ post }: { post: BlogPost }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group relative flex flex-col border border-slate-200 bg-white p-5 transition hover:border-[hsl(var(--accent-blue))] hover:shadow-[0_18px_60px_-30px_rgba(2,6,23,0.5)]"
    >
      <div className="overflow-hidden rounded-xl">
        <img
          src={post.image}
          alt={post.title}
          className="h-32 w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-3 flex items-center gap-2 flex-wrap text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-blue-500">
        {post.tags.map((tag) => (
          <span key={`${post.slug}-${tag}`} className="rounded-full border border-current px-2 py-0.5">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="mt-3 text-lg font-semibold text-[hsl(var(--navy))]">{post.title}</h3>
      <p className="mt-2 text-sm text-slate-500 line-clamp-3">{post.excerpt}</p>
      <div className="mt-4 text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
        {post.date} · {post.readTime}
      </div>
      <div className="mt-4 inline-flex items-center gap-2 text-[hsl(var(--accent-blue))] font-semibold">
        Read article
        <ArrowRight className="h-3.5 w-3.5" />
      </div>
    </Link>
  );
}

const AutomationTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  const data: Record<string, number> = {};
  payload.forEach((item: any) => {
    data[item.dataKey] = item.value;
  });
  return (
    <div className="rounded-xl border border-slate-200 bg-white/95 p-3 text-xs text-slate-600 shadow-xl">
      <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">{label}</p>
      <div className="mt-2 space-y-1.5">
        <div className="flex items-center justify-between text-sm text-[hsl(var(--navy))]">
          <span>Automation coverage</span>
          <span className="font-semibold text-electric-blue">{data.automationCoverage}%</span>
        </div>
        <div className="flex items-center justify-between text-sm text-[hsl(var(--navy))]">
          <span>Mean time to resolve</span>
          <span className="font-semibold text-rose-500">{data.mttr}m</span>
        </div>
        <div className="flex items-center justify-between text-sm text-[hsl(var(--navy))]">
          <span>Noise filtered</span>
          <span className="font-semibold text-slate-500">{data.noiseFiltered}%</span>
        </div>
      </div>
    </div>
  );
};
