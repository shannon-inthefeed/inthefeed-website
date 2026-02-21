import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import videoFile from "@assets/video_optimized.mp4";
import videoThumbnail from "@assets/video_thumbnail.jpg";
import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

interface VSLSectionProps {
  onPlay?: () => void;
}

export default function VSLSection({ onPlay }: VSLSectionProps) {
  const trustIndicators = [
    "No long-term contracts",
    "100% Satisfaction Guaranteed",
    "Results in 30 days"
  ];

  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": "See In the Feed in Action - Content Marketing Success Stories",
      "description": "Watch how we've helped Tech and SaaS companies scale their content marketing and drive real results with In the Feed's AI-powered content strategies.",
      "thumbnailUrl": `${window.location.origin}${videoThumbnail}`,
      "uploadDate": "2024-11-13T00:00:00Z",
      "datePublished": "2024-11-13T00:00:00Z",
      "duration": "PT30S",
      "contentUrl": `${window.location.origin}${videoFile}`,
      "embedUrl": `${window.location.origin}${videoFile}`,
      "width": "1920",
      "height": "1080",
      "publisher": {
        "@type": "Organization",
        "name": "In the Feed",
        "logo": {
          "@type": "ImageObject",
          "url": `${window.location.origin}/logo.png`,
          "width": "200",
          "height": "80"
        }
      },
      "interactionStatistic": {
        "@type": "InteractionCounter",
        "interactionType": "https://schema.org/WatchAction",
        "userInteractionCount": 0
      }
    };

    const scriptTag = document.createElement('script');
    scriptTag.type = 'application/ld+json';
    scriptTag.text = JSON.stringify(schema);
    scriptTag.id = 'video-schema';
    
    const existingScript = document.getElementById('video-schema');
    if (existingScript) {
      existingScript.remove();
    }
    
    document.head.appendChild(scriptTag);

    return () => {
      const script = document.getElementById('video-schema');
      if (script) {
        script.remove();
      }
    };
  }, []);

  return (
    <section id="video" className="py-16 md:py-24 bg-muted">
      <div className="container px-6 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            See In the Feed in Action
          </h2>
          <p className="text-lg text-muted-foreground">
            We've helped Tech and SaaS companies scale their content marketing and drive real results
          </p>
        </div>
        
        <div className="relative rounded-xl overflow-hidden shadow-xl bg-card" data-testid="video-container">
          <div className="aspect-square bg-black flex items-center justify-center">
            <video
              controls
              preload="metadata"
              poster={videoThumbnail}
              className="w-full h-full object-contain"
              data-testid="video-player"
              playsInline
              onPlay={() => {
                trackEvent('video_play', 'engagement', 'vsl_section_video');
                onPlay?.();
              }}
            >
              <source src={videoFile} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          <div className="p-8 text-center border-t border-border bg-card">
            <Button 
              size="lg"
              className="bg-secondary text-secondary-foreground border-secondary-border mb-6"
              asChild
              data-testid="button-vsl-cta"
            >
              <a 
                href="https://cal.com/inthefeed/discovery" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => trackEvent('cta_click', 'conversion', 'vsl_get_started', 1)}
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            
            <div className="flex flex-wrap justify-center gap-6">
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
        </div>
      </div>
    </section>
  );
}
