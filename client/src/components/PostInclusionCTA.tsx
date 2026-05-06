import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface PostInclusionCTAProps {
  onCtaClick?: () => void;
}

export default function PostInclusionCTA({ onCtaClick }: PostInclusionCTAProps) {
  return (
    <section className="py-16 md:py-20 bg-secondary text-secondary-foreground">
      <div className="container px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Build the Engine. Exit the Loop.
        </h2>
        <p className="text-lg opacity-90 mb-8">
          Pipeline signals typically appear at months 2 to 3. Full compounding at months 4 to 6. No contract after the first 90 days.
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
            Book a Strategy Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>
    </section>
  );
}
