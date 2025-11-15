import { Calendar, Users, DollarSign, TrendingUp, AlertCircle, CheckCircle2, Clock, FolderOpen } from 'lucide-react';
import type { Project } from '@/data/admin';
import { Card } from '@/components/ui/card';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const statusConfig = {
  'planning': { label: 'Planning', color: 'bg-slate-100 text-slate-700 border-slate-200', icon: FolderOpen },
  'in-progress': { label: 'In Progress', color: 'bg-blue-100 text-blue-700 border-blue-200', icon: TrendingUp },
  'on-hold': { label: 'On Hold', color: 'bg-yellow-100 text-yellow-700 border-yellow-200', icon: Clock },
  'completed': { label: 'Completed', color: 'bg-green-100 text-green-700 border-green-200', icon: CheckCircle2 },
  'cancelled': { label: 'Cancelled', color: 'bg-red-100 text-red-700 border-red-200', icon: AlertCircle },
};

const priorityConfig = {
  'low': { label: 'Low', color: 'bg-slate-500' },
  'medium': { label: 'Medium', color: 'bg-blue-500' },
  'high': { label: 'High', color: 'bg-orange-500' },
  'critical': { label: 'Critical', color: 'bg-red-500' },
};

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const status = statusConfig[project.status];
  const priority = priorityConfig[project.priority];
  const StatusIcon = status.icon;

  const completedMilestones = project.milestones.filter(m => m.completed).length;
  const totalMilestones = project.milestones.length;

  // Calculate days until due date
  const daysUntilDue = Math.ceil((new Date(project.dueDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
  const isOverdue = daysUntilDue < 0;
  const isDueSoon = daysUntilDue >= 0 && daysUntilDue <= 7;

  return (
    <Card
      className="group relative p-6 hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 hover:border-[hsl(var(--accent-blue))]/40 overflow-hidden"
      onClick={onClick}
    >
      {/* Priority Indicator Bar */}
      <div className={`absolute top-0 left-0 right-0 h-1.5 ${priority.color}`} />

      {/* Background Gradient on Hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500`} />

      <div className="relative">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <div className={`w-2 h-2 rounded-full ${priority.color} animate-pulse`} />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                {priority.label} Priority
              </span>
            </div>
            <h3 className="text-xl font-black text-[hsl(var(--navy))] mb-2 group-hover:text-[hsl(var(--accent-blue))] transition-colors line-clamp-2">
              {project.title}
            </h3>
            <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>

        {/* Status Badge */}
        <div className="flex items-center gap-2 mb-4">
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold border ${status.color}`}>
            <StatusIcon className="h-3.5 w-3.5" />
            {status.label}
          </div>
          {(isOverdue || isDueSoon) && (
            <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold ${
              isOverdue ? 'bg-red-100 text-red-700 border border-red-200' : 'bg-yellow-100 text-yellow-700 border border-yellow-200'
            }`}>
              <AlertCircle className="h-3.5 w-3.5" />
              {isOverdue ? 'Overdue' : 'Due Soon'}
            </div>
          )}
        </div>

        {/* Client */}
        <div className="flex items-center gap-2 mb-4 p-3 rounded-xl bg-gradient-to-r from-slate-50 to-white border border-slate-100">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[hsl(var(--accent-blue))]/10">
            <span className="text-xs font-bold text-[hsl(var(--accent-blue))]">
              {project.clientName.substring(0, 2).toUpperCase()}
            </span>
          </div>
          <div>
            <div className="text-xs text-slate-500 font-medium">Client</div>
            <div className="text-sm font-bold text-[hsl(var(--navy))]">{project.clientName}</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Progress</span>
            <span className="text-sm font-black text-[hsl(var(--accent-blue))]">{project.progress}%</span>
          </div>
          <div className="h-2.5 rounded-full bg-slate-100 overflow-hidden">
            <div
              className={`h-full rounded-full bg-gradient-to-r ${project.color} transition-all duration-500 relative overflow-hidden`}
              style={{ width: `${project.progress}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="p-3 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-slate-100">
            <div className="flex items-center gap-2 mb-1">
              <Calendar className="h-4 w-4 text-slate-400" />
              <span className="text-xs font-semibold text-slate-500">Due Date</span>
            </div>
            <div className="text-sm font-bold text-[hsl(var(--navy))]">
              {new Date(project.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </div>
          </div>

          <div className="p-3 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-slate-100">
            <div className="flex items-center gap-2 mb-1">
              <DollarSign className="h-4 w-4 text-slate-400" />
              <span className="text-xs font-semibold text-slate-500">Budget</span>
            </div>
            <div className="text-sm font-bold text-[hsl(var(--navy))]">{project.budget}</div>
          </div>
        </div>

        {/* Milestones & Team */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <span className="text-sm font-bold text-slate-700">
              {completedMilestones}/{totalMilestones} Milestones
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4 text-slate-400" />
            <span className="text-sm font-bold text-slate-700">{project.team.length}</span>
          </div>
        </div>

        {/* Tags */}
        {project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-100">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[hsl(var(--accent-blue))]/10 text-[hsl(var(--accent-blue))] border border-[hsl(var(--accent-blue))]/20"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
        )}
      </div>
    </Card>
  );
}
