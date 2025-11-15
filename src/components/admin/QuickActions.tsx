import { Plus, Users, FolderPlus, Calendar, FileText, AlertCircle, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface QuickAction {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  gradient: string;
  onClick: () => void;
}

export function QuickActions() {
  const actions: QuickAction[] = [
    {
      id: '1',
      title: 'Add Client',
      description: 'Onboard new client',
      icon: Users,
      color: 'text-blue-600',
      gradient: 'from-blue-500 to-blue-600',
      onClick: () => console.log('Add client'),
    },
    {
      id: '2',
      title: 'Create Project',
      description: 'Start new project',
      icon: FolderPlus,
      color: 'text-purple-600',
      gradient: 'from-purple-500 to-purple-600',
      onClick: () => console.log('Create project'),
    },
    {
      id: '3',
      title: 'Schedule Meeting',
      description: 'Book a meeting',
      icon: Calendar,
      color: 'text-green-600',
      gradient: 'from-green-500 to-green-600',
      onClick: () => console.log('Schedule meeting'),
    },
    {
      id: '4',
      title: 'Create Ticket',
      description: 'Open support ticket',
      icon: AlertCircle,
      color: 'text-red-600',
      gradient: 'from-red-500 to-red-600',
      onClick: () => console.log('Create ticket'),
    },
    {
      id: '5',
      title: 'Add Program',
      description: 'New service program',
      icon: Zap,
      color: 'text-orange-600',
      gradient: 'from-orange-500 to-orange-600',
      onClick: () => console.log('Add program'),
    },
    {
      id: '6',
      title: 'Generate Report',
      description: 'Create custom report',
      icon: FileText,
      color: 'text-indigo-600',
      gradient: 'from-indigo-500 to-indigo-600',
      onClick: () => console.log('Generate report'),
    },
  ];

  return (
    <Card className="p-6 border-2">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-black text-[hsl(var(--navy))] flex items-center gap-2">
          <Zap className="h-6 w-6 text-[hsl(var(--accent-blue))]" />
          Quick Actions
        </h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <button
              key={action.id}
              onClick={action.onClick}
              className="group relative p-5 rounded-2xl border-2 border-slate-100 hover:border-[hsl(var(--accent-blue))]/40 bg-gradient-to-br from-white to-slate-50/30 hover:shadow-xl transition-all duration-300 text-left overflow-hidden"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${action.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />

              <div className="relative">
                {/* Icon */}
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${action.gradient} shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 mb-4`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>

                {/* Content */}
                <h4 className="font-black text-[hsl(var(--navy))] group-hover:text-[hsl(var(--accent-blue))] transition-colors mb-1">
                  {action.title}
                </h4>
                <p className="text-xs font-semibold text-slate-500">
                  {action.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </Card>
  );
}
