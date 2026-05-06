import { X, Check } from "lucide-react";

export default function PostInclusionBreakdown() {
  const without = [
    "Pipeline that depends on who you know, not what buyers find",
    "Content that stops the moment you stop",
    "No clear line between content spend and revenue",
    "Every fix still requires you in the loop",
    "Visibility without architecture",
  ];

  const withService = [
    "Inbound sales conversations that arrive without outbound effort",
    "An engine that produces consistently, with or without you",
    "Monthly reporting tied to pipeline signals and closed deals",
    "One 90-minute session per quarter. Everything else runs.",
    "Authority that compounds, not resets",
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Before and After The Founder Exit™
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            This is what changes when the system runs without you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center justify-center md:justify-start gap-2">
              <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                <X className="h-5 w-5 text-destructive" />
              </div>
              Without In the Feed
            </h3>
            {without.map((item, index) => (
              <div
                key={index}
                className="flex gap-3 items-start p-4 rounded-lg bg-destructive/5"
                data-testid={`without-item-${index}`}
              >
                <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center justify-center md:justify-start gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Check className="h-5 w-5 text-primary" />
              </div>
              With In the Feed
            </h3>
            {withService.map((item, index) => (
              <div
                key={index}
                className="flex gap-3 items-start p-4 rounded-lg bg-primary/5"
                data-testid={`with-item-${index}`}
              >
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
