import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";

interface PostInclusionCTAProps {
  onCtaClick?: () => void;
}

export default function PostInclusionCTA({ onCtaClick }: PostInclusionCTAProps) {
  return (
    <section className="py-16 md:py-20 bg-secondary text-secondary-foreground">
      <div className="container px-6 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-sm font-semibold">Limited spots available this month</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Build Your Custom Growth Plan Today
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Start driving measurable results in 30 days, guaranteed
          </p>
          
          <Button 
            size="lg" 
            className="bg-accent text-accent-foreground border-accent-border"
            asChild
            data-testid="button-post-inclusion-cta"
          >
            <a 
              href="https://cal.com/inthefeed/discovery" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => onCtaClick?.()}
            >
              Start Growing Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          
          <div className="flex items-center justify-center gap-2 mt-6 opacity-90">
            <Shield className="h-5 w-5" />
            <span className="text-sm">100% Satisfaction Guaranteed</span>
          </div>
      </div>
    </section>
  );
}
