import { Activity, CheckCircle2, AlertCircle, Clock, User, FileText, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';

type ActivityType = 'success' | 'warning' | 'info' | 'update';

interface ActivityItem {
  id: string;
  type: ActivityType;
  title: string;
  description: string;
  timestamp: string;
  user?: string;
}

const activityConfig = {
  success: { icon: CheckCircle2, color: 'text-green-600', bg: 'bg-green-100', border: 'border-green-200' },
  warning: { icon: AlertCircle, color: 'text-yellow-600', bg: 'bg-yellow-100', border: 'border-yellow-200' },
  info: { icon: Clock, color: 'text-blue-600', bg: 'bg-blue-100', border: 'border-blue-200' },
  update: { icon: FileText, color: 'text-purple-600', bg: 'bg-purple-100', border: 'border-purple-200' },
};

const sampleActivities: ActivityItem[] = [
  {
    id: 'act-1',
    type: 'success',
    title: 'Cloud Migration Milestone Completed',
    description: 'Production cutover successfully completed for Northwind Health',
    timestamp: '5 minutes ago',
    user: 'E. Patel',
  },
  {
    id: 'act-2',
    type: 'warning',
    title: 'Budget Alert',
    description: 'Helios Manufacturing project approaching 85% budget utilization',
    timestamp: '1 hour ago',
    user: 'S. Adebayo',
  },
  {
    id: 'act-3',
    type: 'update',
    title: 'New Document Uploaded',
    description: 'Security audit report added to Zero Trust Security project',
    timestamp: '2 hours ago',
    user: 'J. Chen',
  },
  {
    id: 'act-4',
    type: 'info',
    title: 'Meeting Scheduled',
    description: 'Quarterly Reliability Council scheduled for Jun 12 at 09:00 EST',
    timestamp: '3 hours ago',
    user: 'L. Gomez',
  },
  {
    id: 'act-5',
    type: 'success',
    title: 'Client Onboarded',
    description: 'New client "Atlas BioTech" successfully onboarded',
    timestamp: '5 hours ago',
    user: 'M. Torres',
  },
];

export function ActivityFeed() {
  return (
    <Card className="p-6 border-2 h-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-black text-[hsl(var(--navy))] flex items-center gap-2">
          <Activity className="h-6 w-6 text-[hsl(var(--accent-blue))]" />
          Recent Activity
        </h3>
        <button className="text-sm font-bold text-[hsl(var(--accent-blue))] hover:text-[hsl(var(--navy))] transition-colors">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {sampleActivities.map((activity, index) => {
          const config = activityConfig[activity.type];
          const Icon = config.icon;

          return (
            <div
              key={activity.id}
              className="group relative flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Timeline Line */}
              {index !== sampleActivities.length - 1 && (
                <div className="absolute left-[22px] top-[52px] w-0.5 h-[calc(100%-12px)] bg-gradient-to-b from-slate-200 to-transparent" />
              )}

              {/* Icon */}
              <div className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${config.bg} border-2 ${config.border} group-hover:scale-110 transition-transform duration-300`}>
                <Icon className={`h-5 w-5 ${config.color}`} />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h4 className="font-bold text-[hsl(var(--navy))] group-hover:text-[hsl(var(--accent-blue))] transition-colors">
                    {activity.title}
                  </h4>
                  <span className="text-xs font-semibold text-slate-400 whitespace-nowrap">
                    {activity.timestamp}
                  </span>
                </div>
                <p className="text-sm text-slate-600 mb-2 line-clamp-2">
                  {activity.description}
                </p>
                {activity.user && (
                  <div className="flex items-center gap-2 text-xs">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[hsl(var(--accent-blue))]/10">
                      <User className="h-3 w-3 text-[hsl(var(--accent-blue))]" />
                    </div>
                    <span className="font-semibold text-slate-500">{activity.user}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
