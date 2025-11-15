import { LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  icon: LucideIcon;
  color: string;
  gradient: string;
}

export function StatsCard({ title, value, change, trend, icon: Icon, color, gradient }: StatsCardProps) {
  const trendColors = {
    up: 'text-green-600 bg-green-50',
    down: 'text-red-600 bg-red-50',
    neutral: 'text-slate-600 bg-slate-50',
  };

  return (
    <Card className="group relative overflow-hidden p-6 hover:shadow-2xl transition-all duration-500 border-2 hover:border-[hsl(var(--accent-blue))]/40">
      {/* Background Gradient Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
      <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${gradient} opacity-5 blur-2xl group-hover:opacity-10 transition-opacity duration-500`} />

      <div className="relative">
        {/* Icon */}
        <div className="flex items-center justify-between mb-4">
          <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
            <Icon className="h-7 w-7 text-white" />
          </div>
          {change && (
            <div className={`px-3 py-1.5 rounded-full text-xs font-bold ${trendColors[trend || 'neutral']}`}>
              {change}
            </div>
          )}
        </div>

        {/* Content */}
        <div>
          <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">
            {title}
          </p>
          <p className="text-4xl font-black bg-gradient-to-br from-[hsl(var(--navy))] to-[hsl(var(--accent-blue))] bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
            {value}
          </p>
        </div>
      </div>
    </Card>
  );
}
