import { Zap, Target, TrendingUp, Clock, Users, Shield } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Zap,
      title: "Human + AI Production",
      description:
        "Built by humans, assisted by AI. Your voice stays intact at scale. No generic output dressed as strategy.",
    },
    {
      icon: Target,
      title: "ICP-Specific Content",
      description:
        "Content written for your exact buyer. Not the broadest possible audience. Your pipeline, not your follower count.",
    },
    {
      icon: TrendingUp,
      title: "Pipeline-Tied Reporting",
      description:
        "We report on inbound conversations and deals where content played a role. Not impressions. Not likes.",
    },
    {
      icon: Clock,
      title: "Founder-Optional Operation",
      description:
        "One 90-minute extraction session in week one. Then a monthly approval pass of 30 to 60 minutes. Everything else runs without you.",
    },
    {
      icon: Users,
      title: "20 Years of Pattern Recognition",
      description:
        "Shannon has watched every content trend cycle through. She knows which ones compound and which ones disappear.",
    },
    {
      icon: Shield,
      title: "No Contract. No Lock-in.",
      description:
        "Cancel after the first 90 days, anytime. You keep everything we build: the strategy, the calendar, the content, the voice guide.",
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-background">
      <div className="container px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why B2B SaaS Founders With Proven Products Choose In the Feed
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built for founders past the startup scramble. Ready for inbound.
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
