import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface MidPageCTAProps {
  onCtaClick?: () => void;
}

export default function MidPageCTA({ onCtaClick }: MidPageCTAProps) {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-primary to-secondary text-white">
      <div className="container px-6 max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-sm font-semibold mb-4 opacity-90">
            <Clock className="h-4 w-4" />
            <span>LIMITED SPOTS AVAILABLE THIS MONTH</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the Waitlist and Get Priority Onboarding
          </h2>
          <p className="text-lg opacity-90 mb-8">
            We only take on 10 new clients per month to ensure exceptional service.
          </p>
          
          <Button 
            size="lg"
            className="bg-accent text-accent-foreground border-accent-border"
            asChild
            data-testid="button-mid-cta"
          >
            <a 
              href="https://cal.com/inthefeed/discovery" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => {
                trackEvent('cta_click', 'conversion', 'mid_reserve_spot', 1);
                onCtaClick?.();
              }}
            >
              Reserve Your Spot Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
      </div>
    </section>
  );
}
