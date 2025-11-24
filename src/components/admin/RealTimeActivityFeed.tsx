import { useEffect, useState } from 'react';
import { 
  CheckCircle2, 
  AlertTriangle, 
  Info, 
  Zap,
  Users,
  FileText,
  TrendingUp,
  Clock
} from 'lucide-react';

interface Activity {
  id: string;
  type: 'success' | 'warning' | 'info' | 'action';
  icon: any;
  title: string;
  description: string;
  timestamp: Date;
  user?: string;
}

export function RealTimeActivityFeed() {
  const [activities, setActivities] = useState<Activity[]>([
    {
      id: '1',
      type: 'success',
      icon: CheckCircle2,
      title: 'Deployment Completed',
      description: 'Production deployment finished successfully',
      timestamp: new Date(Date.now() - 2 * 60 * 1000),
      user: 'Alex Rivera',
    },
    {
      id: '2',
      type: 'action',
      icon: Users,
      title: 'New Client Onboarded',
      description: 'TechCorp Inc. added to portfolio',
      timestamp: new Date(Date.now() - 15 * 60 * 1000),
      user: 'Maya Ortiz',
    },
    {
      id: '3',
      type: 'info',
      icon: FileText,
      title: 'Report Generated',
      description: 'Monthly SLA report ready for review',
      timestamp: new Date(Date.now() - 45 * 60 * 1000),
    },
    {
      id: '4',
      type: 'warning',
      icon: AlertTriangle,
      title: 'High CPU Usage Detected',
      description: 'Server load at 85% - monitoring',
      timestamp: new Date(Date.now() - 90 * 60 * 1000),
    },
  ]);

  // Simulate new activities
  useEffect(() => {
    const interval = setInterval(() => {
      const newActivity: Activity = {
        id: Date.now().toString(),
        type: ['success', 'info', 'action'][Math.floor(Math.random() * 3)] as any,
        icon: [Zap, TrendingUp, CheckCircle2][Math.floor(Math.random() * 3)],
        title: [
          'Automation Triggered',
          'Performance Improved',
          'Task Completed',
          'Metric Updated',
        ][Math.floor(Math.random() * 4)],
        description: 'Real-time system update',
        timestamp: new Date(),
      };

      setActivities(prev => [newActivity, ...prev].slice(0, 10));
    }, 10000); // New activity every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const typeStyles = {
    success: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      icon: 'text-green-600',
      dot: 'bg-green-500',
    },
    warning: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      icon: 'text-yellow-600',
      dot: 'bg-yellow-500',
    },
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      icon: 'text-blue-600',
      dot: 'bg-blue-500',
    },
    action: {
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      icon: 'text-purple-600',
      dot: 'bg-purple-500',
    },
  };

  const getTimeAgo = (date: Date) => {
    const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
    
    if (seconds < 60) return 'Just now';
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
    return `${Math.floor(seconds / 86400)}d ago`;
  };

  return (
    <article className="rounded-3xl border-2 border-slate-100 bg-gradient-to-br from-white to-slate-50/30 p-6 shadow-xl hover:shadow-2xl transition-all duration-500 space-y-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse" />
      
      <div className="relative">
        <header className="flex items-center justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <p className="text-xs font-black uppercase tracking-[0.15em] text-slate-500">
                Live Feed
              </p>
            </div>
            <h2 className="text-2xl font-black text-[hsl(var(--navy))]">Real-Time Activity</h2>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/30">
            <Zap className="h-6 w-6 text-white animate-pulse" />
          </div>
        </header>

        <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            const styles = typeStyles[activity.type];
            
            return (
              <div
                key={activity.id}
                className={`group relative rounded-xl border-2 ${styles.border} ${styles.bg} p-4 hover:shadow-md transition-all duration-300 animate-fade-in-up`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start gap-3">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white border-2 ${styles.border} ${styles.icon} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <p className="text-sm font-bold text-[hsl(var(--navy))] group-hover:text-[hsl(var(--accent-blue))] transition-colors">
                        {activity.title}
                      </p>
                      <div className="flex items-center gap-1 text-xs text-slate-500 shrink-0">
                        <Clock className="h-3 w-3" />
                        <span>{getTimeAgo(activity.timestamp)}</span>
                      </div>
                    </div>
                    
                    <p className="text-xs text-slate-600 mb-2">
                      {activity.description}
                    </p>
                    
                    {activity.user && (
                      <div className="flex items-center gap-1 text-xs text-slate-500">
                        <div className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                        <span>{activity.user}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Animated border pulse for new items */}
                {index === 0 && (
                  <div className="absolute inset-0 rounded-xl border-2 border-blue-500 animate-ping opacity-75" />
                )}
              </div>
            );
          })}
        </div>

        {/* Live indicator at bottom */}
        <div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-center gap-2 text-xs text-slate-500">
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          <span className="font-semibold">Live updates every 10 seconds</span>
        </div>
      </div>
    </article>
  );
}
