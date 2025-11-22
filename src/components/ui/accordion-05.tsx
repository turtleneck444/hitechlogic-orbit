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
      "Multi-cloud operations with golden patterns for zero-downtime change. We standardize landing zones, automate patching and failover, and give you live SLOs per service so leaders see reliability in business language. Outcome: fewer escalations, safer releases, and predictable performance even during peak demand.",
    href: "/services/infrastructure-cloud-operations",
  },
  {
    id: "2",
    title: "System Oversight & Event Reduction",
    content:
      "Signal intelligence that turns alert floods into clear actions. We de-duplicate, correlate, and score events with AI so responders see root cause first, not noise. Expect a 70–90% reduction in noise, faster triage, and executive-ready dashboards that show risk, impact, and next steps.",
    href: "/services/system-oversight-event-reduction",
  },
  {
    id: "3",
    title: "AI Business Automation",
    content:
      "Specialized AI agents that plan, execute, and verify operational work. From ticket triage to config changes and remediation, every action is policy-bound, auditable, and measured against MTTR and change success. We help you ship an automation backlog tied to business outcomes, not scripts.",
    href: "/services/automated-corrective-actions",
  },
  {
    id: "4",
    title: "Cloud Cost Efficiency & Capacity Strategy",
    content:
      "FinOps you can act on weekly: unit economics by product, automated rightsizing, commitment management, and executive scorecards that connect spend to revenue and risk. We pair engineering runbooks with finance guardrails so you cut waste, avoid surprise bills, and still meet growth targets.",
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
