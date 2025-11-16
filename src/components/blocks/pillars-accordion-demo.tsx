import { Feature197 } from "./accordion-feature-section"

const pillarsData = {
  features: [
    {
      id: 1,
      title: "Infrastructure & Cloud Operations",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&h=350&fit=crop&crop=center", // Data center/cloud servers
      description:
        "Hybrid, multi-cloud, and on-prem estates managed with disciplined change, capacity, and lifecycle controls. Deploy across platforms with consistent operational excellence.",
    },
    {
      id: 2,
      title: "System Oversight & Event Reduction",
      description:
        "Noise-calmed monitoring and automated correlation that keeps executive dashboards clear and actionable. Our intelligent oversight ensures you focus on strategic insights, not operational noise.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=350&fit=crop&crop=center", // Control center/monitoring
    },
    {
      id: 3,
      title: "Automated Corrective Actions",
      description:
        "Self-healing frameworks that remediate known failure modes before teams are paged during incidents. Deploy and manage automated runbooks that resolve issues automatically.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=350&fit=crop&crop=center", // Robotics/automation
    },
    {
      id: 4,
      title: "Cost Efficiency & Capacity Strategy",
      description:
        "Financial observability and optimization programs that keep spend predictable and accountable. Real-time cost monitoring with AI-driven optimization recommendations.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=350&fit=crop&crop=center", // Financial charts/analytics
    },
  ],
};

function PillarsAccordionDemo() {
  return <Feature197 {...pillarsData} />;
}

export { PillarsAccordionDemo };
