import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChevronRight, CheckCircle2, AlertCircle, TrendingUp, Shield, DollarSign, BarChart3, ArrowRight, Bot } from "lucide-react";
import { Link } from "react-router-dom";

type AssessmentType = "finops" | "security" | "ai" | null;

type Question = {
  id: string;
  question: string;
  options: {
    value: number;
    label: string;
  }[];
};

const finopsQuestions: Question[] = [
  {
    id: "cost-visibility",
    question: "How visible are your cloud costs across teams and projects?",
    options: [
      { value: 1, label: "No visibility - costs are unclear" },
      { value: 2, label: "Basic billing reports only" },
      { value: 3, label: "Cost allocation by team/project" },
      { value: 4, label: "Real-time cost visibility with forecasting" },
    ],
  },
  {
    id: "optimization",
    question: "How often do you optimize cloud resources?",
    options: [
      { value: 1, label: "Never - resources run continuously" },
      { value: 2, label: "Occasionally when costs spike" },
      { value: 3, label: "Monthly optimization reviews" },
      { value: 4, label: "Automated continuous optimization" },
    ],
  },
  {
    id: "governance",
    question: "What level of cloud cost governance do you have?",
    options: [
      { value: 1, label: "No policies or budgets" },
      { value: 2, label: "Basic budgets without enforcement" },
      { value: 3, label: "Budget alerts and approval workflows" },
      { value: 4, label: "Automated guardrails and policy enforcement" },
    ],
  },
  {
    id: "rightsizing",
    question: "How do you handle resource rightsizing?",
    options: [
      { value: 1, label: "Never rightsized" },
      { value: 2, label: "Manual reviews quarterly" },
      { value: 3, label: "Regular rightsizing based on metrics" },
      { value: 4, label: "AI-driven automated rightsizing" },
    ],
  },
  {
    id: "forecasting",
    question: "How accurate is your cloud cost forecasting?",
    options: [
      { value: 1, label: "No forecasting" },
      { value: 2, label: "Basic linear projections" },
      { value: 3, label: "Forecasting with 20-30% accuracy" },
      { value: 4, label: "ML-powered forecasting with <10% variance" },
    ],
  },
];

const securityQuestions: Question[] = [
  {
    id: "vulnerability-management",
    question: "How do you manage security vulnerabilities?",
    options: [
      { value: 1, label: "No formal process" },
      { value: 2, label: "Manual quarterly scans" },
      { value: 3, label: "Automated scanning with manual remediation" },
      { value: 4, label: "Continuous scanning with automated patching" },
    ],
  },
  {
    id: "threat-detection",
    question: "What's your threat detection capability?",
    options: [
      { value: 1, label: "No threat detection" },
      { value: 2, label: "Basic log monitoring" },
      { value: 3, label: "SIEM with manual investigation" },
      { value: 4, label: "AI-powered SOC with automated response" },
    ],
  },
  {
    id: "access-control",
    question: "How do you manage identity and access?",
    options: [
      { value: 1, label: "Shared credentials and passwords" },
      { value: 2, label: "Individual accounts without MFA" },
      { value: 3, label: "SSO and MFA for most systems" },
      { value: 4, label: "Zero-trust with just-in-time access" },
    ],
  },
  {
    id: "compliance",
    question: "What's your compliance posture?",
    options: [
      { value: 1, label: "No compliance framework" },
      { value: 2, label: "Working toward first certification" },
      { value: 3, label: "Enterprise compliance certified" },
      { value: 4, label: "Multiple certifications with continuous compliance" },
    ],
  },
  {
    id: "incident-response",
    question: "How prepared are you for security incidents?",
    options: [
      { value: 1, label: "No incident response plan" },
      { value: 2, label: "Basic documented procedures" },
      { value: 3, label: "Tested incident response playbooks" },
      { value: 4, label: "Automated response with 24/7 SOC" },
    ],
  },
];

const aiQuestions: Question[] = [
  {
    id: "ai-adoption",
    question: "How extensively are you using AI/ML technologies in your operations?",
    options: [
      { value: 1, label: "No AI/ML usage" },
      { value: 2, label: "Basic AI tools (chatbots, simple automation)" },
      { value: 3, label: "AI integrated in some business processes" },
      { value: 4, label: "AI-driven operations across multiple domains" },
    ],
  },
  {
    id: "ai-strategy",
    question: "Do you have a formal AI strategy and governance framework?",
    options: [
      { value: 1, label: "No AI strategy or governance" },
      { value: 2, label: "Informal AI initiatives without governance" },
      { value: 3, label: "Documented AI strategy with basic governance" },
      { value: 4, label: "Comprehensive AI strategy with enterprise governance" },
    ],
  },
  {
    id: "data-quality",
    question: "How do you ensure data quality for AI/ML models?",
    options: [
      { value: 1, label: "No data quality processes" },
      { value: 2, label: "Basic data cleaning for specific projects" },
      { value: 3, label: "Standardized data quality processes" },
      { value: 4, label: "Automated data quality monitoring and governance" },
    ],
  },
  {
    id: "ai-skills",
    question: "What's your team's AI/ML expertise level?",
    options: [
      { value: 1, label: "No internal AI expertise" },
      { value: 2, label: "Basic understanding, rely on external vendors" },
      { value: 3, label: "Dedicated AI team with growing expertise" },
      { value: 4, label: "Center of excellence with advanced AI capabilities" },
    ],
  },
  {
    id: "ai-ethics",
    question: "How do you address AI ethics, bias, and responsible AI practices?",
    options: [
      { value: 1, label: "No consideration for AI ethics" },
      { value: 2, label: "Basic awareness, minimal implementation" },
      { value: 3, label: "Established ethical guidelines and reviews" },
      { value: 4, label: "Comprehensive responsible AI framework with monitoring" },
    ],
  },
];

type MaturityLevel = "beginner" | "developing" | "advanced" | "optimized";

const getMaturityLevel = (score: number, maxScore: number): MaturityLevel => {
  const percentage = (score / maxScore) * 100;
  if (percentage < 25) return "beginner";
  if (percentage < 50) return "developing";
  if (percentage < 75) return "advanced";
  return "optimized";
};

const maturityInfo = {
  beginner: {
    title: "Getting Started",
    description: "Significant opportunities for improvement",
    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    icon: AlertCircle,
  },
  developing: {
    title: "Building Foundation",
    description: "Good progress with room for optimization",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    icon: TrendingUp,
  },
  advanced: {
    title: "Well Optimized",
    description: "Strong practices with tactical improvements available",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    icon: BarChart3,
  },
  optimized: {
    title: "Industry Leading",
    description: "Exceptional maturity with continuous improvement",
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    icon: CheckCircle2,
  },
};

export function AssessmentTool() {
  const [assessmentType, setAssessmentType] = useState<AssessmentType>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);

  const questions = assessmentType === "finops" ? finopsQuestions : assessmentType === "security" ? securityQuestions : aiQuestions;
  const maxScore = questions.length * 4;
  const currentScore = Object.values(answers).reduce((sum, val) => sum + val, 0);
  const maturityLevel = getMaturityLevel(currentScore, maxScore);
  const maturity = maturityInfo[maturityLevel];

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers({ ...answers, [questionId]: value });
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    } else {
      setTimeout(() => setShowResults(true), 300);
    }
  };

  const resetAssessment = () => {
    setAssessmentType(null);
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  if (!assessmentType) {
    return (
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--navy))] mb-4">
              Free Assessment Tools
            </h2>
            <p className="text-lg text-slate-600">
              Take a quick assessment to understand your maturity level and get personalized recommendations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card
              className="group relative p-8 cursor-pointer hover:shadow-2xl transition-all duration-300 border-2 hover:border-[hsl(var(--accent-blue))]/40"
              onClick={() => setAssessmentType("finops")}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--accent-blue))]/5 to-[hsl(var(--signal-purple))]/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
              <div className="relative">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-blue-50 group-hover:from-[hsl(var(--accent-blue))]/20 group-hover:to-blue-100 transition-colors">
                    <DollarSign className="h-8 w-8 text-[hsl(var(--accent-blue))]" />
                  </div>
                  <ChevronRight className="h-6 w-6 text-slate-400 group-hover:text-[hsl(var(--accent-blue))] group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-2xl font-bold text-[hsl(var(--navy))] mb-3">
                  FinOps Maturity Assessment
                </h3>
                <p className="text-slate-600 mb-4">
                  Discover your cloud cost optimization potential and get a roadmap to slash costs by 50%
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-[hsl(var(--accent-blue))]">
                  <span>5 minutes</span>
                  <span>•</span>
                  <span>Instant results</span>
                </div>
              </div>
            </Card>

            <Card
              className="group relative p-8 cursor-pointer hover:shadow-2xl transition-all duration-300 border-2 hover:border-[hsl(var(--accent-blue))]/40"
              onClick={() => setAssessmentType("security")}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--accent-blue))]/5 to-[hsl(var(--signal-purple))]/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
              <div className="relative">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-[hsl(var(--signal-purple))]/10 to-purple-50 group-hover:from-[hsl(var(--signal-purple))]/20 group-hover:to-purple-100 transition-colors">
                    <Shield className="h-8 w-8 text-[hsl(var(--signal-purple))]" />
                  </div>
                  <ChevronRight className="h-6 w-6 text-slate-400 group-hover:text-[hsl(var(--signal-purple))] group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-2xl font-bold text-[hsl(var(--navy))] mb-3">
                  Security Posture Assessment
                </h3>
                <p className="text-slate-600 mb-4">
                  Evaluate your security readiness and fortify your defenses against real-time threats
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-[hsl(var(--signal-purple))]">
                  <span>5 minutes</span>
                  <span>•</span>
                  <span>Instant results</span>
                </div>
              </div>
            </Card>

            <Card
              className="group relative p-8 cursor-pointer hover:shadow-2xl transition-all duration-300 border-2 hover:border-[hsl(var(--accent-blue))]/40"
              onClick={() => setAssessmentType("ai")}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--accent-blue))]/5 to-[hsl(var(--signal-purple))]/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
              <div className="relative">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-50 group-hover:from-green-500/20 group-hover:to-emerald-100 transition-colors">
                    <Bot className="h-8 w-8 text-green-600" />
                  </div>
                  <ChevronRight className="h-6 w-6 text-slate-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-2xl font-bold text-[hsl(var(--navy))] mb-3">
                  AI Maturity Assessment
                </h3>
                <p className="text-slate-600 mb-4">
                  Evaluate your AI readiness and discover opportunities to leverage AI for competitive advantage
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-green-600">
                  <span>5 minutes</span>
                  <span>•</span>
                  <span>Instant results</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  if (showResults) {
    const MaturityIcon = maturity.icon;
    const savingsPotential = assessmentType === "finops"
      ? Math.round(50 - (currentScore / maxScore) * 50)
      : Math.round(70 - (currentScore / maxScore) * 70);

    return (
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 md:p-12">
              <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full ${maturity.bgColor} ${maturity.borderColor} border-2 mb-6`}>
                <MaturityIcon className={`h-5 w-5 ${maturity.color}`} />
                <span className={`font-bold ${maturity.color}`}>{maturity.title}</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--navy))] mb-4">
                Your {assessmentType === "finops" ? "FinOps" : assessmentType === "security" ? "Security" : "AI"} Assessment Results
              </h2>

              <p className="text-lg text-slate-600 mb-8">
                {maturity.description}
              </p>

              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-semibold text-slate-700">Maturity Score</span>
                  <span className="text-2xl font-bold text-[hsl(var(--accent-blue))]">
                    {currentScore}/{maxScore}
                  </span>
                </div>
                <Progress value={(currentScore / maxScore) * 100} className="h-3" />
              </div>

              <div className={`p-6 rounded-xl ${maturity.bgColor} border-2 ${maturity.borderColor} mb-8`}>
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-white shadow-sm`}>
                    {assessmentType === "finops" ? (
                      <DollarSign className={`h-6 w-6 ${maturity.color}`} />
                    ) : assessmentType === "security" ? (
                      <Shield className={`h-6 w-6 ${maturity.color}`} />
                    ) : (
                      <Bot className={`h-6 w-6 ${maturity.color}`} />
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-[hsl(var(--navy))] mb-2">
                      {assessmentType === "finops"
                        ? `Potential ${savingsPotential}% Cost Savings`
                        : assessmentType === "security"
                        ? `${savingsPotential}% Security Risk Reduction Opportunity`
                        : `${savingsPotential}% AI Transformation Opportunity`
                      }
                    </h3>
                    <p className="text-sm text-slate-700">
                      {assessmentType === "finops"
                        ? "Based on your current maturity, our FinOps experts can help you optimize cloud spending and eliminate waste."
                        : assessmentType === "security"
                        ? "Our security team can help you strengthen your defenses and reduce your risk exposure significantly."
                        : "Our AI specialists can help you implement cutting-edge AI solutions to transform your business operations."
                      }
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <h3 className="font-bold text-[hsl(var(--navy))] text-lg">Recommended Next Steps:</h3>
                <div className="space-y-3">
                  {assessmentType === "finops" ? (
                    <>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[hsl(var(--accent-blue))] mt-0.5 flex-shrink-0" />
                        <p className="text-slate-700">Implement real-time cost visibility and allocation tracking</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[hsl(var(--accent-blue))] mt-0.5 flex-shrink-0" />
                        <p className="text-slate-700">Deploy automated rightsizing and resource optimization</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[hsl(var(--accent-blue))] mt-0.5 flex-shrink-0" />
                        <p className="text-slate-700">Establish cost governance policies and budget guardrails</p>
                      </div>
                    </>
                  ) : assessmentType === "security" ? (
                    <>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[hsl(var(--signal-purple))] mt-0.5 flex-shrink-0" />
                        <p className="text-slate-700">Implement continuous vulnerability scanning and automated patching</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[hsl(var(--signal-purple))] mt-0.5 flex-shrink-0" />
                        <p className="text-slate-700">Deploy AI-powered threat detection and incident response</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[hsl(var(--signal-purple))] mt-0.5 flex-shrink-0" />
                        <p className="text-slate-700">Establish zero-trust architecture with identity-based access</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <p className="text-slate-700">Develop a comprehensive AI strategy and governance framework</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <p className="text-slate-700">Establish data quality processes and AI ethics guidelines</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <p className="text-slate-700">Build internal AI capabilities and partner with AI specialists</p>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="bg-gradient-to-r from-[hsl(var(--accent-blue))]/8 via-white to-[hsl(var(--accent-blue))]/6 border-2 border-[hsl(var(--accent-blue))]/20 rounded-xl p-6 mb-8 shadow-sm">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <img src="/xops.png" alt="XOps360" className="h-12 w-12 rounded-lg shadow-sm bg-white border border-slate-200" />
                  <div className="flex-1">
                    <h4 className="font-bold text-[hsl(var(--navy))] mb-2">
                      Need a deeper, program-level view? Explore XOps360.
                    </h4>
                    <p className="text-sm text-slate-700 mb-3">
                      XOps360 gives you executive dashboards, coverage heatmaps, and implementation runbooks so you can take this assessment further with prioritized action plans.
                    </p>
                    <p className="text-[11px] text-slate-500 mb-4">
                      Partner solution powered by AXIOMIO—our primary XOps collaborator.
                    </p>
                    <Button variant="outline" size="sm" asChild className="border-[hsl(var(--accent-blue))] text-[hsl(var(--accent-blue))] hover:bg-[hsl(var(--accent-blue))]/5">
                      <a href="https://xops.axiomio.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <span>View XOps360</span>
                        <ArrowRight className="h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg" asChild className="flex-1">
                  <Link to="/contact" className="group flex items-center justify-center gap-2">
                    <span>Schedule Strategy Session</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" onClick={resetAssessment} className="flex-1">
                  Take Another Assessment
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-slate-600">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-sm font-semibold text-[hsl(var(--accent-blue))]">
                {Math.round(progress)}% Complete
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <Card className="p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[hsl(var(--navy))] mb-8">
              {question.question}
            </h2>

            <div className="space-y-3">
              {question.options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(question.id, option.value)}
                  className={`w-full p-5 text-left rounded-xl border-2 transition-all duration-200 hover:border-[hsl(var(--accent-blue))]/40 hover:bg-blue-50/50 hover:shadow-lg ${
                    answers[question.id] === option.value
                      ? "border-[hsl(var(--accent-blue))] bg-blue-50"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-slate-900">{option.label}</span>
                    <ChevronRight className="h-5 w-5 text-slate-400" />
                  </div>
                </button>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
