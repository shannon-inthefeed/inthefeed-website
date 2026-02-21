import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { useState } from "react";

interface PricingPlansProps {
  onSelectPlan?: (plan: string) => void;
}

export default function PricingPlans({ onSelectPlan }: PricingPlansProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: "Starter",
      monthlyPrice: 2999,
      annualPrice: 2499,
      description: "Perfect for early-stage Tech and SaaS companies",
      features: [
        "10 social media posts/month",
        "2 blog articles/month",
        "Basic analytics dashboard",
        "Email support",
        "Monthly strategy call"
      ],
      cta: "Start Growing"
    },
    {
      name: "Growth",
      monthlyPrice: 4999,
      annualPrice: 4199,
      description: "For scaling companies ready to dominate",
      popular: true,
      features: [
        "20 social media posts/month",
        "4 blog articles/month",
        "Advanced analytics + AI insights",
        "Priority support (Slack)",
        "Weekly strategy calls",
        "Custom graphics included",
        "Multi-platform optimization"
      ],
      cta: "Scale Now"
    },
    {
      name: "Enterprise",
      monthlyPrice: 9999,
      annualPrice: 8499,
      description: "For market leaders who need it all",
      features: [
        "Unlimited social content",
        "8+ blog articles/month",
        "White-glove service",
        "Dedicated account team",
        "Daily communication",
        "Video content creation",
        "Full brand management",
        "Custom integrations"
      ],
      cta: "Let's Talk"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Choose Your Growth Plan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Transparent pricing with no hidden fees. Cancel anytime.
          </p>
          
          <div className="inline-flex items-center gap-2 p-1 rounded-lg bg-muted">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                billingCycle === 'monthly' 
                  ? 'bg-background text-foreground shadow-sm' 
                  : 'text-muted-foreground hover-elevate'
              }`}
              data-testid="button-monthly-billing"
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                billingCycle === 'annual' 
                  ? 'bg-background text-foreground shadow-sm' 
                  : 'text-muted-foreground hover-elevate'
              }`}
              data-testid="button-annual-billing"
            >
              Annual
              <span className="ml-2 text-xs text-primary">Save 17%</span>
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice;
            
            return (
              <Card 
                key={index} 
                className={`relative ${plan.popular ? 'border-primary shadow-xl' : ''}`}
                data-testid={`pricing-plan-${index}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8 pt-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    {plan.description}
                  </p>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-foreground">
                      ${(price / 100).toFixed(0)}
                    </span>
                    <span className="text-muted-foreground ml-2">
                      /month
                    </span>
                  </div>
                  {billingCycle === 'annual' && (
                    <p className="text-xs text-muted-foreground">
                      Billed annually
                    </p>
                  )}
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex} 
                        className="flex gap-3 items-start"
                        data-testid={`feature-${index}-${featureIndex}`}
                      >
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full ${
                      index === 0 
                        ? 'bg-primary text-primary-foreground border-primary-border' 
                        : index === 1 
                        ? 'bg-secondary text-secondary-foreground border-secondary-border' 
                        : 'bg-accent text-accent-foreground border-accent-border'
                    }`}
                    onClick={() => onSelectPlan?.(plan.name)}
                    data-testid={`button-select-plan-${index}`}
                  >
                    {plan.cta}
                  </Button>
                  
                  <p className="text-xs text-center text-muted-foreground">
                    100% Satisfaction Guaranteed
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
