import React, { useState, useEffect } from 'react';
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
  color: string;
  gradient: string;
  glowColor: string;
}

export function QuickActionWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredAction, setHoveredAction] = useState<string | null>(null);

  const quickActions: QuickAction[] = [
    {
      id: 'services',
      title: 'Explore Services',
      description: 'Discover our enterprise infrastructure solutions',
      icon: <Globe className="h-5 w-5" />,
      href: '/services',
      color: 'from-[#2E6BFF] to-blue-600',
      gradient: 'bg-gradient-to-br from-[#2E6BFF]/8 to-blue-600/8',
      glowColor: 'rgba(46, 107, 255, 0.15)',
    },
    {
      id: 'consultation',
      title: 'Book Consultation',
      description: 'Schedule a strategic technology session',
      icon: <Calendar className="h-5 w-5" />,
      href: '/contact',
      color: 'from-[#0B1220] to-gray-800',
      gradient: 'bg-gradient-to-br from-[#0B1220]/8 to-gray-800/8',
      glowColor: 'rgba(11, 18, 32, 0.15)',
    },
    {
      id: 'contact',
      title: 'Contact Us',
      description: 'Connect with our enterprise team',
      icon: <MessageCircle className="h-5 w-5" />,
      href: '/contact',
      color: 'from-[#2E6BFF] to-blue-700',
      gradient: 'bg-gradient-to-br from-[#2E6BFF]/8 to-blue-700/8',
      glowColor: 'rgba(46, 107, 255, 0.15)',
    },
    {
      id: 'call',
      title: 'Talk to Expert',
      description: 'Speak with our solution architects',
      icon: <Phone className="h-5 w-5" />,
      onClick: () => window.open('tel:+18884483244', '_self'),
      color: 'from-gray-700 to-gray-900',
      gradient: 'bg-gradient-to-br from-gray-700/8 to-gray-900/8',
      glowColor: 'rgba(55, 65, 81, 0.15)',
    },
    {
      id: 'xops',
      title: 'XOps 360',
      description: 'Experience our flagship platform',
      icon: <Zap className="h-5 w-5" />,
      href: 'https://xops.axiomio.com/',
      color: 'from-[#2E6BFF] to-[#1e4ed8]',
      gradient: 'bg-gradient-to-br from-[#2E6BFF]/8 to-[#1e4ed8]/8',
      glowColor: 'rgba(46, 107, 255, 0.15)',
    },
    {
      id: 'solutions',
      title: 'Cost Optimization',
      description: 'Unlock massive infrastructure savings',
      icon: <TrendingUp className="h-5 w-5" />,
      href: '/services/cost-efficiency-capacity-strategy',
      color: 'from-slate-700 to-slate-900',
      gradient: 'bg-gradient-to-br from-slate-700/8 to-slate-900/8',
      glowColor: 'rgba(51, 65, 85, 0.15)',
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
      <div className="fixed bottom-8 right-8 z-[9999] group">
        <Button
          onClick={() => setIsOpen(true)}
          className="relative h-12 w-12 rounded-full bg-[#0B1220] hover:bg-[#1a1f35] border border-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95"
        >
          <span className="text-white font-semibold text-lg">H</span>
        </Button>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-[10000]">
          <div className="px-3 py-1.5 bg-[#0B1220] text-white text-xs font-medium rounded-lg shadow-lg whitespace-nowrap">
            Quick Actions
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/10 backdrop-blur-sm z-[9998] animate-fade-in"
        onClick={() => setIsOpen(false)}
      />

      {/* Expansion ring */}
      <div className="fixed bottom-8 right-8 z-[9998]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-12 h-12 rounded-full bg-[#2E6BFF]/20 animate-ping" style={{ animationDuration: '0.6s' }} />
        </div>
      </div>

      {/* Panel */}
      <div
        className="fixed bottom-20 right-8 z-[9999] w-[420px] origin-bottom-right"
        style={{
          animation: 'expandFromPoint 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
        }}
      >
        {/* Main Panel */}
        <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-semibold text-[#0B1220]">Quick Actions</h3>
                <p className="text-xs text-gray-500 mt-0.5">6 shortcuts available</p>
              </div>

              <Button
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 transition-all duration-200"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Actions Grid */}
          <div className="p-5">
            <div className="grid grid-cols-2 gap-3">
              {quickActions.map((action, index) => {
                const hasHref = !!action.href;
                const isExternal = action.href?.startsWith('http');

                const commonProps = {
                  key: action.id,
                  onClick: () => handleActionClick(action),
                  onMouseEnter: () => setHoveredAction(action.id),
                  onMouseLeave: () => setHoveredAction(null),
                  className: cn(
                    "group relative p-4 rounded-xl border transition-all duration-200",
                    "hover:shadow-md hover:-translate-y-0.5",
                    "bg-white cursor-pointer text-left",
                    hoveredAction === action.id
                      ? "border-[#2E6BFF]/40 shadow-sm bg-gray-50/50"
                      : "border-gray-200 hover:border-gray-300"
                  ),
                  style: { animationDelay: `${index * 40}ms` }
                };

                const cardContent = (
                  <>
                    {/* Content */}
                    <div className="flex flex-col items-center text-center gap-2.5">
                      {/* Icon */}
                      <div className={cn(
                        "w-11 h-11 rounded-lg flex items-center justify-center transition-colors duration-200",
                        "bg-gray-100 border border-gray-200",
                        hoveredAction === action.id && "bg-blue-50 border-blue-200"
                      )}>
                        <div className={cn(
                          "transition-colors duration-200",
                          hoveredAction === action.id ? "text-[#2E6BFF]" : "text-gray-600"
                        )}>
                          {action.icon}
                        </div>
                      </div>

                      {/* Title */}
                      <div className="space-y-0.5">
                        <h4 className={cn(
                          "text-sm font-semibold transition-colors duration-200",
                          hoveredAction === action.id ? "text-[#2E6BFF]" : "text-[#0B1220]"
                        )}>
                          {action.title}
                        </h4>
                        <p className="text-[10px] text-gray-500 line-clamp-2 leading-relaxed">
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

          {/* Footer */}
          <div className="px-6 py-3 border-t border-gray-100 bg-gray-50/50">
            <div className="flex items-center justify-center">
              <p className="text-[10px] text-gray-500">
                Powered by <span className="font-semibold text-gray-700">HiTechLogic</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
