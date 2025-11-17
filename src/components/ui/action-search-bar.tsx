"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Server,
  Activity,
  Workflow,
  Gauge,
  ShieldCheck,
  BarChart3,
  Handshake,
  Sparkles,
  ArrowRight,
} from "lucide-react";

function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

interface Action {
  id: string;
  label: string;
  icon: React.ReactNode;
  description?: string;
  href: string;
}

interface SearchResult {
  actions: Action[];
}

const allActions: Action[] = [
  {
    id: "1",
    label: "Infrastructure & Cloud Operations",
    icon: <Server className="h-4 w-4 text-[hsl(var(--accent-blue))]" />,
    description: "24/7 oversight and capacity management",
    href: "/services/infrastructure-cloud-operations",
  },
  {
    id: "2",
    label: "System Oversight & Event Reduction",
    icon: <Activity className="h-4 w-4 text-[hsl(var(--accent-blue))]" />,
    description: "Intelligent monitoring and noise reduction",
    href: "/services/system-oversight-event-reduction",
  },
  {
    id: "3",
    label: "Automated Corrective Actions",
    icon: <Workflow className="h-4 w-4 text-[hsl(var(--accent-blue))]" />,
    description: "Self-healing workflows and runbooks",
    href: "/services/automated-corrective-actions",
  },
  {
    id: "4",
    label: "Reliability & Performance Engineering",
    icon: <Gauge className="h-4 w-4 text-[hsl(var(--accent-blue))]" />,
    description: "Engineering excellence at scale",
    href: "/services/reliability-performance-engineering",
  },
  {
    id: "5",
    label: "Security & Identity Assurance",
    icon: <ShieldCheck className="h-4 w-4 text-[hsl(var(--accent-blue))]" />,
    description: "Access governance and threat monitoring",
    href: "/services/security-identity-assurance",
  },
  {
    id: "6",
    label: "Cost Efficiency & Capacity Strategy",
    icon: <BarChart3 className="h-4 w-4 text-[hsl(var(--accent-blue))]" />,
    description: "Financial transparency and optimization",
    href: "/services/cost-efficiency-capacity-strategy",
  },
  {
    id: "7",
    label: "Strategic Technology Partnership",
    icon: <Handshake className="h-4 w-4 text-[hsl(var(--accent-blue))]" />,
    description: "Dedicated leadership and roadmap planning",
    href: "/services/strategic-technology-partnership",
  },
  {
    id: "8",
    label: "Rapid Prototyping & App Development",
    icon: <Sparkles className="h-4 w-4 text-[hsl(var(--accent-blue))]" />,
    description: "Fast MVPs and production prototypes",
    href: "/services/rapid-prototyping",
  },
];

function ActionSearchBar({ actions = allActions }: { actions?: Action[] }) {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<SearchResult | null>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [selectedAction, setSelectedAction] = useState<Action | null>(null);
  const debouncedQuery = useDebounce(query, 200);

  useEffect(() => {
    if (!isFocused) {
      setResult(null);
      return;
    }

    if (!debouncedQuery) {
      setResult({ actions: allActions });
      return;
    }

    const normalizedQuery = debouncedQuery.toLowerCase().trim();
    const filteredActions = allActions.filter((action) => {
      const searchableText = `${action.label} ${action.description}`.toLowerCase();
      return searchableText.includes(normalizedQuery);
    });

    setResult({ actions: filteredActions });
  }, [debouncedQuery, isFocused]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const container = {
    hidden: { opacity: 0, height: 0 },
    show: {
      opacity: 1,
      height: "auto",
      transition: {
        height: {
          duration: 0.4,
        },
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        height: {
          duration: 0.3,
        },
        opacity: {
          duration: 0.2,
        },
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
      },
    },
  };

  const handleFocus = () => {
    setSelectedAction(null);
    setIsFocused(true);
  };

  const handleActionClick = (action: Action) => {
    setSelectedAction(action);
    setIsFocused(false);
    window.location.href = action.href;
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative flex flex-col justify-start items-center">
        <div className="w-full sticky top-0 z-10 pb-1">
          <label
            className="text-sm font-bold uppercase tracking-wider text-[hsl(var(--navy))] mb-3 block"
            htmlFor="search"
          >
            Explore Our Services
          </label>
          <div className="relative">
            <Input
              type="text"
              placeholder="Search by service name or capability..."
              value={query}
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)}
              className="pl-12 pr-4 py-6 h-14 text-base rounded-xl border-[hsl(var(--accent-blue))]/20 bg-white shadow-lg shadow-slate-900/5 focus-visible:ring-[hsl(var(--accent-blue))] focus-visible:ring-2 focus-visible:border-[hsl(var(--accent-blue))]/40 transition-all duration-300"
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5">
              <Search className="w-5 h-5 text-[hsl(var(--accent-blue))]" />
            </div>
          </div>
        </div>

        <div className="w-full">
          <AnimatePresence>
            {isFocused && result && !selectedAction && (
              <motion.div
                className="w-full border border-[hsl(var(--accent-blue))]/20 rounded-xl shadow-2xl shadow-slate-900/10 overflow-hidden bg-white mt-3"
                variants={container}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                <motion.ul>
                  {result.actions.length > 0 ? (
                    result.actions.map((action) => (
                      <motion.li
                        key={action.id}
                        className="group px-5 py-4 flex items-center justify-between hover:bg-gradient-to-r hover:from-slate-50 hover:to-blue-50/30 cursor-pointer transition-all duration-200 border-b border-slate-100 last:border-b-0"
                        variants={item}
                        layout
                        onClick={() => handleActionClick(action)}
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-slate-50 to-white border border-[hsl(var(--accent-blue))]/20 shadow-sm group-hover:shadow-md group-hover:shadow-[hsl(var(--accent-blue))]/10 transition-all duration-200">
                            {action.icon}
                          </div>
                          <div>
                            <span className="text-base font-semibold text-[hsl(var(--navy))] group-hover:text-[hsl(var(--accent-blue))] transition-colors block">
                              {action.label}
                            </span>
                            <span className="text-sm text-slate-500 mt-0.5 block">
                              {action.description}
                            </span>
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-[hsl(var(--accent-blue))] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                      </motion.li>
                    ))
                  ) : (
                    <motion.li
                      className="px-5 py-8 text-center"
                      variants={item}
                    >
                      <p className="text-sm text-slate-500">
                        No services found matching "{query}"
                      </p>
                    </motion.li>
                  )}
                </motion.ul>
                <div className="px-5 py-3 bg-gradient-to-r from-slate-50/50 to-white border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs font-medium text-slate-500">
                    <span>Press Enter to navigate</span>
                    <span>ESC to close</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export { ActionSearchBar, type Action };
