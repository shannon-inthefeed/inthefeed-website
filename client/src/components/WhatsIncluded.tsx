import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function WhatsIncluded() {
  const included = [
    {
      category: "Content Production",
      items: [
        "20 to 80+ posts per month depending on your plan",
        "4+ long-form posts per month: thought-leadership, carousels, infographics",
        "4 SEO-optimised blog posts every month",
        "Branded images and creatives for every post",
        "AI video content available on the Scale Plan (up to 3 videos per week)",
      ],
    },
    {
      category: "Strategy and Support",
      items: [
        "Dedicated content strategist: Shannon Kuykendall",
        "A real human to talk to",
        "Consistent, on-brand messaging across every channel",
        "Access to Metricool's self-service analytics platform",
      ],
    },
    {
      category: "Plans",
      items: [
        "Starter: 1 channel, 20 posts per month — from €1,500/mo",
        "Growth: up to 4 channels, 60+ posts per month — from €1,750/mo",
        "Scale: all channels plus AI video, 80+ posts per month — from €2,500/mo",
        "Video content add-on: €500/mo",
      ],
    },
    {
      category: "Flexibility",
      items: [
        "90-day launch block, then month-to-month. No long-term contract.",
        "Cancel anytime after day 90 with no penalties",
        "Everything we build stays yours on exit",
        "Operational in 48 hours",
      ],
    },
  ];

  return (
    <section id="whats-included" className="py-16 md:py-24 bg-muted">
      <div className="container px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything That Comes With the Engine
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            One complete system. No hidden costs. No surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {included.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              data-testid={`included-section-${sectionIndex}`}
              className="text-center md:text-left"
            >
              <h3 className="text-xl font-bold text-foreground mb-6">
                {section.category}
              </h3>
              <div className="space-y-4 flex flex-col items-center md:items-start">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex gap-3 items-start"
                    data-testid={`included-item-${sectionIndex}-${itemIndex}`}
                  >
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground border-primary-border"
            asChild
            data-testid="button-browse-plans"
          >
            <Link href="/pricing">
              See Full Pricing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
