import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Platform from "./pages/Platform";
import Services from "./pages/Services";
import Resources from "./pages/Resources";
import Approach from "./pages/Approach";
import Pricing from "./pages/Pricing";
import CaseStudies from "./pages/CaseStudies";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import Demo from "./pages/Demo";
import Principles from "./pages/Principles";
import Admin from "./pages/Admin";
import { AdminProvider } from "./contexts/AdminContext";
import InfrastructureCloudOperations from "./pages/services/InfrastructureCloudOperations";
import SystemOversightEventReduction from "./pages/services/SystemOversightEventReduction";
import AutomatedCorrectiveActions from "./pages/services/AutomatedCorrectiveActions";
import ReliabilityPerformanceEngineering from "./pages/services/ReliabilityPerformanceEngineering";
import SecurityIdentityAssurance from "./pages/services/SecurityIdentityAssurance";
import CostEfficiencyCapacityStrategy from "./pages/services/CostEfficiencyCapacityStrategy";
import StrategicTechnologyPartnership from "./pages/services/StrategicTechnologyPartnership";
import RapidPrototyping from "./pages/services/RapidPrototyping";
import RapidDesignPrototypingPage from "./pages/services/rapid-prototyping/steps/RapidDesignPrototyping";
import BuildLaunchPage from "./pages/services/rapid-prototyping/steps/BuildLaunch";
import OperatePage from "./pages/services/rapid-prototyping/steps/Operate";
import AutonomousAgentSwarm from "./pages/services/AutonomousAgentSwarm";
import Technology from "./pages/industries/Technology";
import FinancialServices from "./pages/industries/FinancialServices";
import Healthcare from "./pages/industries/Healthcare";
import Ecommerce from "./pages/industries/Ecommerce";
import Saas from "./pages/industries/Saas";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/principles" element={<Principles />} />
          <Route path="/admin" element={<AdminProvider><Admin /></AdminProvider>} />
          <Route path="/legal/privacy" element={<Privacy />} />
          <Route path="/legal/terms" element={<Terms />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/services/rapid-prototyping/rapid-design-prototyping" element={<RapidDesignPrototypingPage />} />
          <Route path="/services/rapid-prototyping/build-launch" element={<BuildLaunchPage />} />
          <Route path="/services/rapid-prototyping/operate" element={<OperatePage />} />
          {/* Service Detail Pages */}
          <Route path="/services/infrastructure-cloud-operations" element={<InfrastructureCloudOperations />} />
          <Route path="/services/system-oversight-event-reduction" element={<SystemOversightEventReduction />} />
          <Route path="/services/automated-corrective-actions" element={<AutomatedCorrectiveActions />} />
          <Route path="/services/reliability-performance-engineering" element={<ReliabilityPerformanceEngineering />} />
          <Route path="/services/security-identity-assurance" element={<SecurityIdentityAssurance />} />
          <Route path="/services/cost-efficiency-capacity-strategy" element={<CostEfficiencyCapacityStrategy />} />
          <Route path="/services/strategic-technology-partnership" element={<StrategicTechnologyPartnership />} />
          <Route path="/services/rapid-prototyping" element={<RapidPrototyping />} />
          <Route path="/services/autonomous-agent-swarm" element={<AutonomousAgentSwarm />} />
          {/* Industry Detail Pages */}
          <Route path="/industries/technology" element={<Technology />} />
          <Route path="/industries/financial-services" element={<FinancialServices />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/ecommerce" element={<Ecommerce />} />
          <Route path="/industries/saas" element={<Saas />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
