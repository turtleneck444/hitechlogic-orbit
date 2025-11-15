import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { DollarSign, TrendingUp, TrendingDown, Calendar, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export function ROICalculator() {
  const [monthlyCloudSpend, setMonthlyCloudSpend] = useState(50000);
  const [engineerCount, setEngineerCount] = useState(10);
  const [incidentsPerMonth, setIncidentsPerMonth] = useState(50);
  const [avgResolutionHours, setAvgResolutionHours] = useState(4);

  // Calculations
  const annualCloudSpend = monthlyCloudSpend * 12;
  const cloudCostSavings = annualCloudSpend * 0.50; // 50% average savings
  const engineerCostPerYear = engineerCount * 150000; // Avg engineer salary
  const engineerEfficiencyGain = engineerCostPerYear * 0.40; // 40% time saved
  const downtimeCost = incidentsPerMonth * avgResolutionHours * 5000 * 12; // $5K/hour avg cost
  const downtimeReduction = downtimeCost * 0.75; // 75% MTTR improvement

  const totalAnnualSavings = cloudCostSavings + engineerEfficiencyGain + downtimeReduction;
  const estimatedInvestment = engineerCount * 25000; // Avg per-engineer annual investment
  const roi = ((totalAnnualSavings - estimatedInvestment) / estimatedInvestment) * 100;
  const paybackMonths = (estimatedInvestment / (totalAnnualSavings / 12)).toFixed(1);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 mb-6">
              <DollarSign className="h-4 w-4 text-green-600" />
              <span className="text-sm font-bold text-green-900">Calculate Your Savings</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--navy))] mb-4">
              See Your Potential ROI
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Calculate the financial impact of AI-powered cloud operations, automation, and FinOps optimization
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left: Input Panel */}
            <Card className="p-8 border-2 border-slate-200">
              <h3 className="text-xl font-bold text-[hsl(var(--navy))] mb-6 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-[hsl(var(--accent-blue))]" />
                Your Current Environment
              </h3>

              <div className="space-y-6">
                {/* Monthly Cloud Spend */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm font-semibold text-slate-700">Monthly Cloud Spend</Label>
                    <span className="text-lg font-bold text-[hsl(var(--accent-blue))]">
                      {formatCurrency(monthlyCloudSpend)}
                    </span>
                  </div>
                  <Slider
                    value={[monthlyCloudSpend]}
                    onValueChange={(value) => setMonthlyCloudSpend(value[0])}
                    min={10000}
                    max={500000}
                    step={5000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>$10K</span>
                    <span>$500K</span>
                  </div>
                </div>

                {/* Engineering Team Size */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm font-semibold text-slate-700">Engineering Team Size</Label>
                    <span className="text-lg font-bold text-[hsl(var(--accent-blue))]">
                      {engineerCount} engineers
                    </span>
                  </div>
                  <Slider
                    value={[engineerCount]}
                    onValueChange={(value) => setEngineerCount(value[0])}
                    min={5}
                    max={100}
                    step={5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>5</span>
                    <span>100+</span>
                  </div>
                </div>

                {/* Incidents Per Month */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm font-semibold text-slate-700">Incidents Per Month</Label>
                    <span className="text-lg font-bold text-[hsl(var(--accent-blue))]">
                      {incidentsPerMonth} incidents
                    </span>
                  </div>
                  <Slider
                    value={[incidentsPerMonth]}
                    onValueChange={(value) => setIncidentsPerMonth(value[0])}
                    min={10}
                    max={200}
                    step={10}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>10</span>
                    <span>200+</span>
                  </div>
                </div>

                {/* Average Resolution Time */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm font-semibold text-slate-700">Avg Resolution Time</Label>
                    <span className="text-lg font-bold text-[hsl(var(--accent-blue))]">
                      {avgResolutionHours} hours
                    </span>
                  </div>
                  <Slider
                    value={[avgResolutionHours]}
                    onValueChange={(value) => setAvgResolutionHours(value[0])}
                    min={1}
                    max={24}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>1h</span>
                    <span>24h</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Right: Results Panel */}
            <div className="space-y-6">
              {/* Annual Savings Breakdown */}
              <Card className="p-8 border-2 border-[hsl(var(--accent-blue))]/30 bg-gradient-to-br from-white to-blue-50/30">
                <h3 className="text-xl font-bold text-[hsl(var(--navy))] mb-6 flex items-center gap-2">
                  <TrendingDown className="h-5 w-5 text-green-600" />
                  Projected Annual Savings
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-white border border-slate-200">
                    <div>
                      <p className="text-sm font-semibold text-slate-700">Cloud Cost Optimization</p>
                      <p className="text-xs text-slate-500">50% average reduction</p>
                    </div>
                    <div className="text-2xl font-black text-green-600">
                      {formatCurrency(cloudCostSavings)}
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-white border border-slate-200">
                    <div>
                      <p className="text-sm font-semibold text-slate-700">Engineering Efficiency</p>
                      <p className="text-xs text-slate-500">40% time saved via automation</p>
                    </div>
                    <div className="text-2xl font-black text-green-600">
                      {formatCurrency(engineerEfficiencyGain)}
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-white border border-slate-200">
                    <div>
                      <p className="text-sm font-semibold text-slate-700">Downtime Reduction</p>
                      <p className="text-xs text-slate-500">75% MTTR improvement</p>
                    </div>
                    <div className="text-2xl font-black text-green-600">
                      {formatCurrency(downtimeReduction)}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t-2 border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-slate-700 uppercase tracking-wide">Total Annual Savings</span>
                    <div className="text-4xl font-black bg-gradient-to-r from-[hsl(var(--accent-blue))] to-[hsl(var(--signal-purple))] bg-clip-text text-transparent">
                      {formatCurrency(totalAnnualSavings)}
                    </div>
                  </div>
                </div>
              </Card>

              {/* ROI Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 bg-gradient-to-br from-green-50 to-white border-2 border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-bold text-slate-700">ROI</span>
                  </div>
                  <div className="text-4xl font-black text-green-600 mb-1">
                    {roi.toFixed(0)}%
                  </div>
                  <p className="text-xs text-slate-600">Return on investment</p>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-blue-50 to-white border-2 border-[hsl(var(--accent-blue))]/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-5 w-5 text-[hsl(var(--accent-blue))]" />
                    <span className="text-sm font-bold text-slate-700">Payback</span>
                  </div>
                  <div className="text-4xl font-black text-[hsl(var(--accent-blue))] mb-1">
                    {paybackMonths}
                  </div>
                  <p className="text-xs text-slate-600">Months to break even</p>
                </Card>
              </div>

              {/* CTA */}
              <Card className="p-6 bg-gradient-to-br from-[hsl(var(--navy))] to-slate-900 border-2 border-[hsl(var(--accent-blue))]/40">
                <div className="flex items-start gap-4 mb-4">
                  <CheckCircle2 className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-bold mb-2">Ready to realize these savings?</p>
                    <p className="text-blue-200 text-sm">
                      Schedule a consultation to validate your savings potential and create a customized implementation roadmap.
                    </p>
                  </div>
                </div>
                <Button
                  variant="secondary"
                  size="lg"
                  asChild
                  className="w-full bg-white text-[hsl(var(--navy))] hover:bg-blue-50"
                >
                  <Link to="/contact" className="group flex items-center justify-center gap-2">
                    <span>Get Personalized ROI Analysis</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </Card>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-slate-500 text-center mt-8">
            * Projections based on average client outcomes. Actual results vary by environment complexity, current efficiency, and implementation scope.
          </p>
        </div>
      </div>
    </section>
  );
}
