import { LucideIcon } from 'lucide-react';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export function EmptyState({ icon: Icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="relative mb-6">
        {/* Animated background circles */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-32 w-32 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 animate-pulse" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-24 w-24 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 animate-pulse" style={{ animationDelay: '150ms' }} />
        </div>

        {/* Icon */}
        <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-xl">
          <Icon className="h-10 w-10 text-white" />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-2xl font-black text-[hsl(var(--navy))] mb-2 text-center">
        {title}
      </h3>
      <p className="text-sm text-slate-600 text-center max-w-md mb-6">
        {description}
      </p>

      {/* Action Button */}
      {action && (
        <button
          onClick={action.onClick}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[hsl(var(--accent-blue))] to-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          {action.label}
        </button>
      )}
    </div>
  );
}

export function CompactEmptyState({ icon: Icon, message }: { icon: LucideIcon; message: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-8 px-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 mb-3">
        <Icon className="h-6 w-6 text-slate-400" />
      </div>
      <p className="text-sm font-semibold text-slate-500 text-center">
        {message}
      </p>
    </div>
  );
}
