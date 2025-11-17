import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";
import { SEO } from "@/components/SEO";

const challengeOptions = [
  "Reducing alert noise",
  "Improving MTTR",
  "Automation & runbooks",
  "Identity governance",
  "Cost & capacity planning",
  "Scaling delivery velocity",
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedChallenges, setSelectedChallenges] = useState<string[]>([]);

  const toggleChallenge = (value: string) => {
    setSelectedChallenges((prev) => (prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Request received",
        description: "A member of our leadership team will reach out shortly.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
      setSelectedChallenges([]);
    }, 1000);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact HiTechLogic",
    "description": "Request a strategy consultation to discuss your infrastructure reliability needs"
  };

  return (
    <>
      <SEO 
        title="Contact Us - Request Strategy Consultation | HiTechLogic"
        description="Schedule a 30-minute consultation to discuss your infrastructure reliability challenges. Our team will provide a calm, structured plan to stabilize your operations. Response within one business day."
        keywords="contact HiTechLogic, infrastructure consultation, managed services inquiry, DevOps consulting, SRE consultation, reliability assessment"
        canonical="https://hitechlogic.com/contact"
        schema={schema}
      />
      <Layout>
      <section className="bg-white">
        <div className="mx-auto w-full max-w-4xl px-6 pt-12 pb-24 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32 text-center">
          <span className="eyebrow text-electric-blue/70">Strategy consultation</span>
          <h1 className="mt-4 text-4xl md:text-5xl leading-tight text-foreground font-['Inter']">Share your environment. We'll steady it.</h1>
          <p className="mt-4 text-lg text-slate-600">
            Tell us where reliability feels risky today—noise, automation, governance, or scale. We’ll respond with a calm, structured plan.
          </p>
        </div>
      </section>

      <section className="section-space">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-semibold text-foreground">What to expect</h2>
                <p className="mt-4 text-base text-slate-600">
                  A 30-minute discussion with our strategic leads to understand your environment, align on outcomes, and outline next
                  steps. No pressure—just clarity.
                </p>
              </div>
              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "contact@hitechlogic.com" },
                  { icon: Phone, label: "Phone", value: "+1 (888) 448-3244" },
                  { icon: MapPin, label: "Offices", value: "New York • Austin • Remote" },
                ].map((item) => (
                  <Card key={item.label} className="flex items-center gap-4 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--muted))]">
                      <item.icon className="h-5 w-5 text-electric-blue" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{item.label}</p>
                      <p className="text-sm text-slate-600">{item.value}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="p-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" name="name" placeholder="Jordan Patel" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" placeholder="jordan@company.com" required />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company *</Label>
                    <Input id="company" name="company" placeholder="Northwind Bank" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Role *</Label>
                    <Input id="role" name="role" placeholder="VP Infrastructure" required />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Which challenges feel relevant? *</Label>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {challengeOptions.map((option) => (
                      <label key={option} className="flex items-start gap-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] p-3">
                        <Checkbox
                          checked={selectedChallenges.includes(option)}
                          onCheckedChange={() => toggleChallenge(option)}
                        />
                        <span className="text-sm text-slate-600">{option}</span>
                      </label>
                    ))}
                  </div>
                  {selectedChallenges.map((challenge) => (
                    <input key={challenge} name="challenges[]" type="hidden" value={challenge} />
                  ))}
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="best-time">Best time for a call *</Label>
                    <Select name="best-time" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select window" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (8–11am)</SelectItem>
                        <SelectItem value="midday">Midday (11am–2pm)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (2–5pm)</SelectItem>
                        <SelectItem value="evening">Evening (5–7pm)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timeline">Desired start *</Label>
                    <Select name="timeline" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeframe" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Immediate (0–30 days)</SelectItem>
                        <SelectItem value="quarter">This quarter</SelectItem>
                        <SelectItem value="later">Beyond this quarter</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="context">Anything else we should know?</Label>
                  <Textarea id="context" name="context" placeholder="Share context, priorities, or planned initiatives." rows={4} />
                </div>

                <Button className="w-full" disabled={isSubmitting} size="lg" type="submit" variant="primary">
                  {isSubmitting ? "Sending..." : "Request Strategy Consultation"}
                </Button>
                <p className="text-center text-xs font-medium tracking-wide text-slate-500">Responses within one business day</p>
              </form>
            </Card>
          </div>
        </div>
      </section>
      </Layout>
    </>
  );
}
