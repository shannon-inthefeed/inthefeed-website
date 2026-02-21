import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface PrimaryCTAProps {
  onCtaClick?: () => void;
}

export default function PrimaryCTA({ onCtaClick }: PrimaryCTAProps) {
  const trustIndicators = [
    "No long-term contracts",
    "100% Satisfaction Guaranteed",
    "Results in 30 days"
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="container px-6 max-w-3xl mx-auto text-center">
        <Button 
          size="lg"
          className="bg-secondary text-secondary-foreground border-secondary-border"
          asChild
          data-testid="button-primary-cta"
        >
          <a 
            href="https://cal.com/inthefeed/discovery" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => onCtaClick?.()}
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>
        
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {trustIndicators.map((indicator, index) => (
            <div 
              key={index} 
              className="flex items-center gap-2"
              data-testid={`trust-indicator-${index}`}
            >
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">{indicator}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
