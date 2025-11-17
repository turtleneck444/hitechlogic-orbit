import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";

const items = [
  {
    id: "1",
    title: "Infrastructure & Cloud Operations",
    content:
      "Elite multi-cloud orchestration with zero-downtime deployments. Our enterprise-grade infrastructure automation handles complex hybrid estates across AWS, Azure, GCP, and private clouds. Automated scaling, intelligent workload placement, and predictive capacity planning ensure your applications run at peak efficiency while minimizing infrastructure costs by up to 40%.",
  },
  {
    id: "2",
    title: "System Oversight & Event Reduction",
    content:
      "AI-powered observability that transforms chaos into clarity. Our anomaly detection algorithms reduce alert fatigue by 85% through intelligent event correlation and predictive maintenance. Executive dashboards provide real-time business insights, while automated root cause analysis cuts incident response time from hours to minutes.",
  },
  {
    id: "3",
    title: "Automated Corrective Actions",
    content:
      "Self-healing infrastructure that works around the clock. Deploy sophisticated remediation workflows that handle everything from database deadlocks to container crashes, DNS failures to network congestion. Our AI learns from every incident, continuously improving uptime and reducing manual intervention by 75%.",
  },
  {
    id: "4",
    title: "Cost Efficiency & Capacity Strategy",
    content:
      "Data-driven financial optimization that maximizes ROI. Real-time cost monitoring with machine learning predicts usage patterns and recommends resource rightsizing. Automated purchasing leverages enterprise discounts while maintaining compliance. Our clients save an average of 32% on cloud infrastructure costs with guaranteed 99.98% uptime SLAs.",
  },
];

export function Accordion05() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [openItems, setOpenItems] = useState<string[]>(["1"]); // Default first item open

  const handleMouseEnter = useCallback((itemId: string) => {
    setHoveredItem(itemId);
    setTimeout(() => {
      setOpenItems([itemId]);
    }, 50); // Reduced delay for faster response
  }, []);

  const handleMouseLeave = () => {
    setHoveredItem(null);
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
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
          >
            <AccordionTrigger className={cn(
              "text-left px-6 md:px-8 py-6 overflow-hidden text-white/60 duration-500 hover:no-underline hover:text-white cursor-pointer w-full [&>svg]:hidden transition-all duration-500",
              hoveredItem === item.id ? "text-white transform scale-[1.02]" : ""
            )}>
              <div className="flex flex-1 items-start gap-4">
                <p className="text-xs text-white/80 font-bold bg-white/10 rounded-full w-6 h-6 flex items-center justify-center transition-all duration-500 group-hover:bg-white/25">{item.id}</p>
                <h1
                  className="text-left text-xl md:text-2xl lg:text-3xl font-semibold leading-tight text-white transition-all duration-500"
                >
                  {item.title}
                </h1>
              </div>
            </AccordionTrigger>

            <AccordionContent className="text-white/90 px-6 md:px-8 pb-6 text-base md:text-lg leading-relaxed bg-white/5 pt-4 border-t border-white/10 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-top-2 data-[state=open]:slide-in-from-top-2 duration-500">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
