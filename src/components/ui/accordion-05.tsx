import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const items = [
  {
    id: "1",
    title: "Infrastructure & Cloud Operations",
    content:
      "Elite multi-cloud orchestration with zero-downtime deployments. Our enterprise-grade infrastructure automation handles complex hybrid estates across leading cloud platforms. Automated scaling, intelligent workload placement, and predictive capacity planning ensure your applications run at peak efficiency while minimizing infrastructure costs significantly.",
    href: "/services/infrastructure-cloud-operations",
  },
  {
    id: "2",
    title: "System Oversight & Event Reduction",
    content:
      "AI-powered observability that transforms chaos into clarity. Our anomaly detection algorithms reduce alert fatigue through intelligent event correlation and predictive maintenance. Executive dashboards provide real-time business insights, while automated root cause analysis dramatically cuts incident response time.",
    href: "/services/system-oversight-event-reduction",
  },
  {
    id: "3",
    title: "AI Business Automation",
    content:
      "Intelligent AI agents that proactively manage infrastructure, predict issues, and execute autonomous remediation with human oversight. AI-driven automation transforms reactive operations into proactive, self-optimizing infrastructure management with continuous learning and predictive capabilities.",
    href: "/services/ai-business-automation",
  },
  {
    id: "4",
    title: "Cost Efficiency & Capacity Strategy",
    content:
      "Data-driven financial optimization that maximizes ROI. Real-time cost monitoring with machine learning predicts usage patterns and recommends resource rightsizing. Automated purchasing leverages enterprise discounts while maintaining compliance, delivering substantial cloud infrastructure cost savings.",
    href: "/services/cost-efficiency-capacity-strategy",
  },
];

export function Accordion05() {
  const [openItems, setOpenItems] = useState<string[]>([]); // Start with no items open

  // Handle expand button click to toggle accordion
  const handleExpandClick = (itemId: string) => {
    setOpenItems(openItems[0] === itemId ? [] : [itemId]);
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <Accordion
        type="single"
        value={openItems[0]}
        className="w-full space-y-4"
      >
        {items.map((item) => (
          <AccordionItem
            value={item.id}
            key={item.id}
            className="border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm transition-all duration-500"
          >
            <AccordionTrigger className="text-left px-6 md:px-8 py-6 overflow-hidden text-white hover:no-underline hover:text-white cursor-pointer w-full [&>svg]:hidden">
              <div
                className="flex items-start justify-between w-full"
                onClick={() => handleExpandClick(item.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleExpandClick(item.id);
                  }
                }}
                aria-expanded={openItems[0] === item.id}
                aria-controls={`accordion-content-${item.id}`}
              >
                <div className="flex flex-1 items-start gap-4">
                  <p className="text-xs text-white/80 font-bold bg-white/10 rounded-full w-6 h-6 flex items-center justify-center">{item.id}</p>
                  <h1 className="text-left text-xl md:text-2xl lg:text-3xl font-semibold leading-tight text-white">
                    {item.title}
                  </h1>
                </div>

                {/* Expand indicator */}
                <div className="flex items-center gap-1 text-xs text-white/60 ml-4">
                  <span className="text-xs font-medium">{openItems[0] === item.id ? 'Collapse' : 'Expand'}</span>
                  <ChevronDown className={cn(
                    "h-3 w-3 transition-transform duration-200",
                    openItems[0] === item.id ? "rotate-180" : ""
                  )} />
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent className="text-white/90 px-6 md:px-8 pb-6 text-base md:text-lg leading-relaxed bg-white/5 pt-4 border-t border-white/10 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-top-2 data-[state=open]:slide-in-from-top-2 duration-500">
              {item.content}
              <div className="mt-6 pt-4 border-t border-white/10">
                <Link
                  to={item.href}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Button
                    className="bg-white/15 hover:bg-white/25 text-white border border-white/30 hover:border-white/50 transition-all duration-300 group"
                    size="sm"
                  >
                    Learn More
                    <ArrowRight className="h-3 w-3 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
