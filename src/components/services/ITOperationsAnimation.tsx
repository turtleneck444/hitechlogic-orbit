import { useEffect, useState } from "react";
import {
  Server,
  Shield,
  Database,
  Cloud,
  Cpu,
  Activity,
  Lock,
  Zap,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  GitBranch,
} from "lucide-react";

export function ITOperationsAnimation() {
  const [activeNodes, setActiveNodes] = useState<number[]>([]);
  const [pulseIndex, setPulseIndex] = useState(0);
  const [metrics, setMetrics] = useState({
    uptime: 99.99,
    threats: 0,
    automated: 127,
    response: 12,
  });

  useEffect(() => {
    // Animate nodes connecting
    const nodeInterval = setInterval(() => {
      setActiveNodes((prev) => {
        if (prev.length >= 8) return [0];
        return [...prev, prev.length];
      });
    }, 800);

    // Pulse animation
    const pulseInterval = setInterval(() => {
      setPulseIndex((prev) => (prev + 1) % 8);
    }, 1500);

    // Animate metrics
    const metricsInterval = setInterval(() => {
      setMetrics((prev) => ({
        uptime: Number((99.97 + Math.random() * 0.03).toFixed(2)),
        threats: Math.floor(Math.random() * 3),
        automated: 127 + Math.floor(Math.random() * 10),
        response: 10 + Math.floor(Math.random() * 8),
      }));
    }, 3000);

    return () => {
      clearInterval(nodeInterval);
      clearInterval(pulseInterval);
      clearInterval(metricsInterval);
    };
  }, []);

  const nodes = [
    { icon: Server, label: "Infrastructure", x: "20%", y: "30%", color: "from-blue-500 to-blue-600" },
    { icon: Cloud, label: "Cloud Services", x: "80%", y: "25%", color: "from-indigo-500 to-indigo-600" },
    { icon: Database, label: "Data Layer", x: "15%", y: "70%", color: "from-purple-500 to-purple-600" },
    { icon: Shield, label: "Security", x: "85%", y: "65%", color: "from-red-500 to-red-600" },
    { icon: Cpu, label: "Processing", x: "50%", y: "50%", color: "from-green-500 to-green-600" },
    { icon: Activity, label: "Monitoring", x: "35%", y: "15%", color: "from-orange-500 to-orange-600" },
    { icon: Lock, label: "Access Control", x: "65%", y: "85%", color: "from-pink-500 to-pink-600" },
    { icon: Zap, label: "Automation", x: "50%", y: "85%", color: "from-yellow-500 to-yellow-600" },
  ];

  const connections = [
    [0, 4], [1, 4], [2, 4], [3, 4], [4, 5], [4, 6], [4, 7], [0, 5], [1, 3], [2, 7]
  ];

  return (
    <div className="relative w-full h-[600px] bg-gradient-to-br from-[hsl(var(--navy))] via-slate-900 to-[hsl(var(--navy))]/90 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(46,107,255,0.1),transparent_70%)]" />

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2e6bff" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#2e6bff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#2e6bff" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        {connections.map(([start, end], idx) => {
          const isActive = activeNodes.includes(start) && activeNodes.includes(end);
          const startNode = nodes[start];
          const endNode = nodes[end];

          return (
            <line
              key={idx}
              x1={startNode.x}
              y1={startNode.y}
              x2={endNode.x}
              y2={endNode.y}
              stroke="url(#lineGradient)"
              strokeWidth={isActive ? "2" : "1"}
              className={`transition-all duration-500 ${isActive ? "opacity-100" : "opacity-20"}`}
              strokeDasharray={isActive ? "0" : "5,5"}
            >
              {isActive && (
                <animate
                  attributeName="stroke-dasharray"
                  from="0,10"
                  to="10,0"
                  dur="1s"
                  repeatCount="indefinite"
                />
              )}
            </line>
          );
        })}
      </svg>

      {/* Nodes */}
      {nodes.map((node, idx) => {
        const isActive = activeNodes.includes(idx);
        const isPulsing = pulseIndex === idx;
        const Icon = node.icon;

        return (
          <div
            key={idx}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: node.x, top: node.y }}
          >
            <div className={`relative transition-all duration-500 ${isActive ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}>
              {/* Pulse Ring */}
              {isPulsing && isActive && (
                <div className="absolute inset-0 rounded-full bg-[hsl(var(--accent-blue))]/30 animate-ping" />
              )}

              {/* Glow Effect */}
              <div className={`absolute -inset-4 rounded-full bg-gradient-to-br ${node.color} opacity-20 blur-xl transition-opacity duration-500 ${isPulsing ? "opacity-40" : ""}`} />

              {/* Node Circle */}
              <div className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${node.color} shadow-2xl flex items-center justify-center border-2 border-white/20 transition-transform duration-300 ${isPulsing ? "scale-110" : ""}`}>
                <Icon className="w-8 h-8 text-white" />
              </div>

              {/* Label */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 text-center">
                <div className="text-xs font-semibold text-white/90 whitespace-nowrap px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                  {node.label}
                </div>
              </div>

              {/* Status Indicator */}
              {isActive && (
                <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-[hsl(var(--navy))] animate-pulse" />
              )}
            </div>
          </div>
        );
      })}

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-[hsl(var(--accent-blue))]/60 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`,
          }}
        />
      ))}

      {/* Metrics Dashboard Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[hsl(var(--navy))] to-transparent">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <MetricCard
            icon={TrendingUp}
            label="System Uptime"
            value={`${metrics.uptime}%`}
            trend="up"
          />
          <MetricCard
            icon={Shield}
            label="Threats Blocked"
            value={metrics.threats.toString()}
            trend="down"
            isGreen={metrics.threats === 0}
          />
          <MetricCard
            icon={GitBranch}
            label="Tasks Automated"
            value={metrics.automated.toString()}
            trend="up"
          />
          <MetricCard
            icon={Activity}
            label="Avg Response (min)"
            value={metrics.response.toString()}
            trend="down"
          />
        </div>
      </div>
    </div>
  );
}

function MetricCard({
  icon: Icon,
  label,
  value,
  trend,
  isGreen = false,
}: {
  icon: any;
  label: string;
  value: string;
  trend: "up" | "down";
  isGreen?: boolean;
}) {
  return (
    <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
      <div className="flex items-center justify-between mb-2">
        <Icon className="w-5 h-5 text-[hsl(var(--accent-blue))] group-hover:scale-110 transition-transform" />
        {trend === "up" ? (
          <TrendingUp className="w-4 h-4 text-green-400" />
        ) : (
          <TrendingUp className="w-4 h-4 text-green-400 rotate-180" />
        )}
      </div>
      <div className={`text-2xl font-bold mb-1 transition-colors ${isGreen ? "text-green-400" : "text-white"}`}>
        {value}
      </div>
      <div className="text-xs text-white/60 font-medium">{label}</div>
    </div>
  );
}
