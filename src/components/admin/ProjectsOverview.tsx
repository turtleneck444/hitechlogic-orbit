import { Card } from '@/components/ui/card';
import { FolderKanban, TrendingUp, AlertCircle, CheckCircle2, Clock } from 'lucide-react';
import { useAdmin } from '@/contexts/AdminContext';

export function ProjectsOverview() {
  // In future, this will come from AdminContext
  const mockProjectStats = {
    total: 12,
    active: 7,
    completed: 3,
    onHold: 2,
    budget: '$2.4M',
    progress: 68,
  };

  const statCards = [
    {
      label: 'Active Projects',
      value: mockProjectStats.active,
      icon: TrendingUp,
      color: 'from-blue-500 to-blue-600',
      bg: 'bg-blue-50',
      text: 'text-blue-600',
    },
    {
      label: 'Completed',
      value: mockProjectStats.completed,
      icon: CheckCircle2,
      color: 'from-green-500 to-green-600',
      bg: 'bg-green-50',
      text: 'text-green-600',
    },
    {
      label: 'On Hold',
      value: mockProjectStats.onHold,
      icon: Clock,
      color: 'from-yellow-500 to-yellow-600',
      bg: 'bg-yellow-50',
      text: 'text-yellow-600',
    },
    {
      label: 'Total Budget',
      value: mockProjectStats.budget,
      icon: FolderKanban,
      color: 'from-purple-500 to-purple-600',
      bg: 'bg-purple-50',
      text: 'text-purple-600',
    },
  ];

  return (
    <Card className="p-6 border-2 hover:shadow-2xl transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-black text-[hsl(var(--navy))] flex items-center gap-2 mb-2">
            <FolderKanban className="h-6 w-6 text-[hsl(var(--accent-blue))]" />
            Projects Overview
          </h3>
          <p className="text-sm font-semibold text-slate-600">
            {mockProjectStats.total} total projects across all clients
          </p>
        </div>
        <button className="text-sm font-bold text-[hsl(var(--accent-blue))] hover:text-[hsl(var(--navy))] transition-colors">
          View All Projects →
        </button>
      </div>

      {/* Overall Progress */}
      <div className="mb-6 p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-white border-2 border-slate-100">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-bold text-slate-600 uppercase tracking-wider">
            Overall Progress
          </span>
          <span className="text-2xl font-black text-[hsl(var(--accent-blue))]">
            {mockProjectStats.progress}%
          </span>
        </div>
        <div className="h-3 rounded-full bg-slate-200 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[hsl(var(--accent-blue))] to-blue-600 relative overflow-hidden"
            style={{ width: `${mockProjectStats.progress}%` }}
          >
            <div className="absolute inset-0 bg-white/20 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {statCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className={`p-4 rounded-xl ${stat.bg} border-2 border-transparent hover:border-[hsl(var(--accent-blue))]/20 transition-all duration-300 group cursor-pointer`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-center justify-between mb-2">
                <Icon className={`h-5 w-5 ${stat.text}`} />
                <div className="text-2xl font-black text-[hsl(var(--navy))] group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
              </div>
              <div className="text-xs font-bold text-slate-600 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
