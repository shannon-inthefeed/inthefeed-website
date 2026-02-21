import { Button } from "@/components/ui/button";
import { ArrowRight, Star, MessageCircle } from "lucide-react";
import { Link } from "wouter";
import { trackEvent } from "@/lib/analytics";

interface FinalCTAProps {
  onCtaClick?: () => void;
}

export default function FinalCTA({ onCtaClick }: FinalCTAProps) {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary via-primary to-secondary text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container px-6 max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-white" />
              ))}
            </div>
            <span className="text-sm font-semibold">Trusted by leading Tech & SaaS teams</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Are you Ready to Command Your Market with Content that Delivers?
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join our waitlist today and begin your journey with In the Feed, for content that truly drives conversions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground border-accent-border"
              asChild
              data-testid="button-final-cta"
            >
              <a 
                href="https://cal.com/inthefeed/discovery" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => {
                  trackEvent('cta_click', 'conversion', 'final_claim_spot', 1);
                  onCtaClick?.();
                }}
              >
                Claim Your Spot Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm"
              asChild
              data-testid="button-contact-us"
            >
              <Link 
                href="/contact"
                onClick={() => trackEvent('navigation', 'engagement', 'contact_us_button')}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Contact Us First
              </Link>
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm opacity-90">
            <span>✓ Limited availability this month</span>
            <span>✓ Setup starts in 24 hours</span>
            <span>✓ Satisfaction guaranteed</span>
          </div>
      </div>
    </section>
  );
}
