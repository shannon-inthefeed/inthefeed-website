import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import heroBackground from "@assets/generated_images/Hero_background_abstract_design_88429898.png";
import heroBaseImage from "@assets/CC60392C-08B9-4DA9-8C8D-CBCC1C79FAE9_1762142912072.png";
import lightLogo from "@assets/IMG_4566_1761839928540.png";
import { trackEvent } from "@/lib/analytics";

interface HeroSectionProps {
  onCtaClick?: () => void;
  onVideoClick?: () => void;
}

export default function HeroSection({ onCtaClick, onVideoClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBaseImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div 
        className="absolute inset-0 z-0 bg-accent"
        style={{
          opacity: 0.4,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />
      
      <div className="container relative z-10 px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12 flex justify-center">
            <img 
              src={lightLogo} 
              alt="In the Feed Logo - AI-Powered Content Marketing for Tech & SaaS Companies" 
              className="h-32 md:h-40 lg:h-48 w-auto"
              data-testid="img-hero-logo"
              loading="eager"
              width="600"
              height="240"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Transform Your Tech & SaaS Growth with Elite Content Marketing
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Drive engagement and revenue without building an in-house team. Get AI-powered content strategies and expert execution that scales with your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button 
              size="lg"
              className="bg-accent text-accent-foreground border-accent-border"
              asChild
              data-testid="button-hero-cta"
            >
              <a 
                href="https://cal.com/inthefeed/discovery" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => {
                  trackEvent('cta_click', 'conversion', 'hero_start_growing', 1);
                  onCtaClick?.();
                }}
              >
                Start Growing Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button 
              size="lg"
              className="bg-secondary text-secondary-foreground border-secondary-border"
              asChild
              data-testid="button-watch-video"
            >
              <a 
                href="#video"
                onClick={() => trackEvent('video_click', 'engagement', 'hero_watch_video')}
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                Watch How It Works
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
