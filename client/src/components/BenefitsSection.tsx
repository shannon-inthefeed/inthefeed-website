import { Zap, Target, TrendingUp, Clock, Users, Shield } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Zap,
      title: "AI-Powered Efficiency",
      description: "Leverage cutting-edge AI to create content 10x faster without sacrificing quality"
    },
    {
      icon: Target,
      title: "Laser-Focused Strategy",
      description: "Custom content plans tailored to your tech or SaaS niche and target audience"
    },
    {
      icon: TrendingUp,
      title: "Proven Growth Results",
      description: "Drive measurable engagement and conversions with data-backed content"
    },
    {
      icon: Clock,
      title: "Time Back to Scale",
      description: "Stop managing content production and focus on building your product or service"
    },
    {
      icon: Users,
      title: "Elite Specialists",
      description: "Work with expert content creators who understand tech and SaaS marketing"
    },
    {
      icon: Shield,
      title: "Consistent Quality",
      description: "Never worry about inconsistent output or missed deadlines again"
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-background">
      <div className="container px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Tech & SaaS Founders Choose In the Feed
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to dominate your market with content that converts
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index} 
                className="text-center"
                data-testid={`benefit-${index}`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 mb-6">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
