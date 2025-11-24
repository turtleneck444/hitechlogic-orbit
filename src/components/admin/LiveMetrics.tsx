import { useEffect, useState } from 'react';
import { Activity, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';

interface LiveMetric {
  label: string;
  value: number;
  unit?: string;
  trend: 'up' | 'down' | 'neutral';
  change: string;
  status: 'healthy' | 'warning' | 'critical';
}

export function LiveMetrics() {
  const [metrics, setMetrics] = useState<LiveMetric[]>([
    {
      label: 'Active Sessions',
      value: 1247,
      trend: 'up',
      change: '+12%',
      status: 'healthy',
    },
    {
      label: 'Response Time',
      value: 145,
      unit: 'ms',
      trend: 'down',
      change: '-8%',
      status: 'healthy',
    },
    {
      label: 'Error Rate',
      value: 0.02,
      unit: '%',
      trend: 'neutral',
      change: '0%',
      status: 'healthy',
    },
    {
      label: 'Throughput',
      value: 8542,
      unit: '/min',
      trend: 'up',
      change: '+15%',
      status: 'healthy',
    },
  ]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => prev.map(metric => ({
        ...metric,
        value: metric.value + (Math.random() - 0.5) * (metric.value * 0.02),
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const statusColors = {
    healthy: 'bg-green-500',
    warning: 'bg-yellow-500',
    critical: 'bg-red-500',
  };

  const trendIcons = {
    up: TrendingUp,
    down: TrendingDown,
    neutral: Minus,
  };

  const trendColors = {
    up: 'text-green-600',
    down: 'text-red-600',
    neutral: 'text-slate-400',
  };

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric, index) => {
        const TrendIcon = trendIcons[metric.trend];
        
        return (
          <div
            key={metric.label}
            className="group relative overflow-hidden rounded-2xl border-2 border-slate-100 bg-gradient-to-br from-white to-slate-50/50 p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Pulse indicator */}
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <div className={`h-2 w-2 rounded-full ${statusColors[metric.status]} animate-pulse`} />
              <Activity className="h-4 w-4 text-slate-400 animate-pulse" />
            </div>

            <div className="relative space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                {metric.label}
              </p>
              
              <div className="flex items-baseline gap-2">
                <p className="text-3xl font-black text-[hsl(var(--navy))] tabular-nums">
                  <AnimatedCounter 
                    value={metric.value} 
                    decimals={metric.unit === '%' ? 2 : 0}
                    duration={1500}
                  />
                  {metric.unit && (
                    <span className="text-lg font-semibold text-slate-400 ml-1">
                      {metric.unit}
                    </span>
                  )}
                </p>
              </div>

              <div className={`flex items-center gap-1 text-sm font-semibold ${trendColors[metric.trend]}`}>
                <TrendIcon className="h-4 w-4" />
                <span>{metric.change}</span>
                <span className="text-xs text-slate-400 font-normal">vs last hour</span>
              </div>

              {/* Animated progress bar */}
              <div className="h-1 w-full rounded-full bg-slate-200 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                  style={{ 
                    width: `${Math.min(100, (metric.value / (metric.value * 1.2)) * 100)}%`,
                  }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
