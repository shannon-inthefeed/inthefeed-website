import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface MidPageCTAProps {
  onCtaClick?: () => void;
}

export default function MidPageCTA({ onCtaClick }: MidPageCTAProps) {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-primary to-secondary text-white">
      <div className="container px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Exit the Production Loop?
        </h2>
        <p className="text-lg opacity-90 mb-8">
          We work with a small number of founders at a time. If this is the right fit, a 30-minute call is the fastest way to find out.
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
              trackEvent("cta_click", "conversion", "mid_book_call", 1);
              onCtaClick?.();
            }}
          >
            Book a Strategy Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>
    </section>
  );
}
