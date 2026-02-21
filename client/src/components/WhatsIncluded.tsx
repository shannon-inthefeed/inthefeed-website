import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function WhatsIncluded() {
  const included = [
    {
      category: "Content Production",
      items: [
        "20 to 80+ posts per month depending on your plan",
        "4+ long-form posts (thought-leadership, carousels, infographics)",
        "4 SEO-optimized blog posts every month",
        "Branded images and creatives for every post",
        "AI video content available (up to 3 videos/week on Scale Plan)"
      ]
    },
    {
      category: "Strategy & Support",
      items: [
        "Dedicated content strategist",
        "Premium support from a real human",
        "Consistent, high-quality messaging across platforms",
        "DIY Power: Access to Metricool's self-service platform"
      ]
    },
    {
      category: "Growth & Scale Options",
      items: [
        "Starter Plan: 1 channel with 20 posts/month",
        "Growth Plan: Up to 4 channels with 60+ posts/month",
        "Scale Plan: All channels + AI video (80+ posts/month)",
        "Add video content: 4 videos/month for $500 extra"
      ]
    },
    {
      category: "Flexibility",
      items: [
        "No long-term contracts required",
        "Cancel anytime with no penalties",
        "Upgrade or downgrade between plans",
        "Setup starts in 24 hours"
      ]
    }
  ];

  return (
    <section id="whats-included" className="py-16 md:py-24 bg-muted">
      <div className="container px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need to Dominate Your Market
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            One comprehensive package with no hidden fees or surprise charges
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
              Browse All Plans
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
