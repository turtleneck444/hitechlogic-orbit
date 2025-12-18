import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X, Phone, MessageCircle, Calendar, Zap, Globe, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface QuickAction {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

export function QuickActionWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredAction, setHoveredAction] = useState<string | null>(null);

  const quickActions: QuickAction[] = [
    {
      id: 'services',
      title: 'Explore Services',
      description: 'Discover our enterprise solutions',
      icon: <Globe className="h-5 w-5" />,
      href: '/services',
    },
    {
      id: 'consultation',
      title: 'Book Consultation',
      description: 'Schedule a strategy session',
      icon: <Calendar className="h-5 w-5" />,
      href: '/contact',
    },
    {
      id: 'contact',
      title: 'Contact Us',
      description: 'Connect with our team',
      icon: <MessageCircle className="h-5 w-5" />,
      href: '/contact',
    },
    {
      id: 'call',
      title: 'Talk to Expert',
      description: 'Speak with architects',
      icon: <Phone className="h-5 w-5" />,
      onClick: () => window.open('tel:+18884483244', '_self'),
    },
    {
      id: 'xops',
      title: 'XOps 360',
      description: 'Our flagship platform',
      icon: <Zap className="h-5 w-5" />,
      href: 'https://xops.axiomio.com/',
    },
    {
      id: 'solutions',
      title: 'Cost Optimization',
      description: 'Unlock massive savings',
      icon: <TrendingUp className="h-5 w-5" />,
      href: '/services/cost-efficiency-capacity-strategy',
    },
  ];

  const handleActionClick = (action: QuickAction) => {
    if (action.onClick) {
      action.onClick();
    } else if (action.href) {
      if (action.href.startsWith('http')) {
        window.open(action.href, '_blank', 'noopener,noreferrer');
      }
    }
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] group">
        {/* Luxury floating button with glow */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#2E6BFF] to-[#1e4ed8] opacity-40 blur-lg group-hover:opacity-60 transition-opacity duration-300" />
          <Button
            onClick={() => setIsOpen(true)}
            className="relative h-14 w-14 rounded-full bg-gradient-to-br from-[#0B1220] via-[#1a2540] to-[#0B1220] hover:from-[#1a2540] hover:via-[#2a3550] hover:to-[#1a2540] border border-white/10 shadow-2xl hover:shadow-[0_20px_50px_rgba(46,107,255,0.3)] transition-all duration-300 hover:scale-110 active:scale-95"
          >
            <span className="text-white font-bold text-xl tracking-tight bg-gradient-to-br from-white to-gray-300 bg-clip-text">H</span>
          </Button>
        </div>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-y-1 group-hover:translate-y-0">
          <div className="px-4 py-2 bg-gradient-to-r from-[#0B1220] to-[#1a2540] text-white text-xs font-medium rounded-xl shadow-xl border border-white/10 whitespace-nowrap backdrop-blur-sm">
            Quick Actions
            <div className="absolute -bottom-1 right-4 w-2 h-2 bg-[#0B1220] rotate-45 border-r border-b border-white/10" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Backdrop with blur */}
      <div
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[9998] transition-opacity duration-300"
        onClick={() => setIsOpen(false)}
      />

      {/* Expansion ring animation */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9998]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-14 h-14 rounded-full bg-[#2E6BFF]/30 animate-ping" style={{ animationDuration: '0.5s' }} />
          <div className="absolute w-14 h-14 rounded-full bg-[#2E6BFF]/20 animate-pulse" />
        </div>
      </div>

      {/* Panel - responsive and contained */}
      <div
        className="fixed z-[9999] bottom-4 right-4 left-4 sm:left-auto sm:bottom-6 sm:right-6 sm:w-[380px] max-h-[calc(100vh-2rem)] sm:max-h-[calc(100vh-3rem)] origin-bottom-right"
        style={{
          animation: 'expandFromPoint 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
        }}
      >
        {/* Main Panel with luxury styling */}
        <div className="relative bg-gradient-to-br from-white via-gray-50/80 to-white rounded-2xl sm:rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.15)] border border-gray-200/80 overflow-hidden backdrop-blur-xl">
          {/* Subtle top accent line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2E6BFF]/40 to-transparent" />
          
          {/* Header */}
          <div className="px-5 py-4 sm:px-6 sm:py-5 border-b border-gray-100/80 bg-gradient-to-r from-gray-50/50 to-transparent">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#0B1220] tracking-tight">Quick Actions</h3>
                <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5 font-medium">Enterprise shortcuts</p>
              </div>

              <Button
                onClick={() => setIsOpen(false)}
                className="h-9 w-9 rounded-xl bg-gray-100/80 hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-all duration-200 hover:scale-105 border border-gray-200/50 shadow-sm"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Actions Grid */}
          <div className="p-4 sm:p-5 overflow-y-auto max-h-[50vh] sm:max-h-[60vh]">
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              {quickActions.map((action, index) => {
                const hasHref = !!action.href;
                const isExternal = action.href?.startsWith('http');

                const commonProps = {
                  key: action.id,
                  onClick: () => handleActionClick(action),
                  onMouseEnter: () => setHoveredAction(action.id),
                  onMouseLeave: () => setHoveredAction(null),
                  className: cn(
                    "group relative p-3 sm:p-4 rounded-xl sm:rounded-2xl border transition-all duration-300",
                    "hover:shadow-lg hover:-translate-y-1",
                    "bg-white cursor-pointer text-left",
                    "active:scale-[0.98]",
                    hoveredAction === action.id
                      ? "border-[#2E6BFF]/30 shadow-md bg-gradient-to-br from-blue-50/50 to-white"
                      : "border-gray-200/80 hover:border-[#2E6BFF]/20"
                  ),
                  style: { 
                    animationDelay: `${index * 50}ms`,
                    animation: 'fadeSlideUp 0.4s ease-out forwards',
                    opacity: 0,
                  }
                };

                const cardContent = (
                  <>
                    {/* Hover glow effect */}
                    <div className={cn(
                      "absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#2E6BFF]/5 to-transparent opacity-0 transition-opacity duration-300",
                      hoveredAction === action.id && "opacity-100"
                    )} />
                    
                    {/* Content */}
                    <div className="relative flex flex-col items-center text-center gap-2 sm:gap-2.5">
                      {/* Icon with luxury styling */}
                      <div className={cn(
                        "w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-300",
                        "bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200/80",
                        "shadow-sm",
                        hoveredAction === action.id && "from-[#2E6BFF]/10 to-blue-50 border-[#2E6BFF]/20 shadow-[0_4px_20px_rgba(46,107,255,0.15)]"
                      )}>
                        <div className={cn(
                          "transition-all duration-300",
                          hoveredAction === action.id ? "text-[#2E6BFF] scale-110" : "text-gray-600"
                        )}>
                          {action.icon}
                        </div>
                      </div>

                      {/* Title & Description */}
                      <div className="space-y-0.5">
                        <h4 className={cn(
                          "text-xs sm:text-sm font-semibold transition-colors duration-300 tracking-tight",
                          hoveredAction === action.id ? "text-[#2E6BFF]" : "text-[#0B1220]"
                        )}>
                          {action.title}
                        </h4>
                        <p className="text-[9px] sm:text-[10px] text-gray-500 line-clamp-2 leading-relaxed font-medium">
                          {action.description}
                        </p>
                      </div>
                    </div>
                  </>
                );

                if (!hasHref) {
                  return (
                    <button type="button" {...commonProps}>
                      {cardContent}
                    </button>
                  );
                }

                if (isExternal) {
                  return (
                    <a href={action.href} target="_blank" rel="noopener noreferrer" {...commonProps}>
                      {cardContent}
                    </a>
                  );
                }

                return (
                  <Link to={action.href!} {...commonProps}>
                    {cardContent}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Footer with luxury branding */}
          <div className="px-5 py-3 sm:px-6 sm:py-3.5 border-t border-gray-100/80 bg-gradient-to-r from-gray-50/80 via-transparent to-gray-50/80">
            <div className="flex items-center justify-center gap-1.5">
              <div className="w-1 h-1 rounded-full bg-[#2E6BFF]/60" />
              <p className="text-[9px] sm:text-[10px] text-gray-500 font-medium tracking-wide uppercase">
                Powered by <span className="font-bold text-[#0B1220]">HiTechLogic</span>
              </p>
              <div className="w-1 h-1 rounded-full bg-[#2E6BFF]/60" />
            </div>
          </div>
        </div>
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes expandFromPoint {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        @keyframes fadeSlideUp {
          0% {
            opacity: 0;
            transform: translateY(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
