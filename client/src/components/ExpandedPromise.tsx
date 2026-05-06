import { Check } from "lucide-react";

export default function ExpandedPromise() {
  const promises = [
    "A system built on your real thinking, not generic templates or guesswork",
    "Voice-accurate content that sounds like you, not like it was outsourced",
    "Distribution across every channel your buyers actually use",
    "Monthly reporting tied to pipeline signals and inbound conversations, not follower counts",
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-6 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Not a Ghostwriter. Not an Agency. A Content Engine.
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            In the Feed builds the system most founders are missing. Strategy, production, distribution, and reporting tied directly to pipeline. Not impressions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mt-12">
          {promises.map((promise, index) => (
            <div
              key={index}
              className="flex gap-4 items-start"
              data-testid={`promise-item-${index}`}
            >
              <div className="flex-shrink-0 mt-1">
                <div className="rounded-full bg-primary/10 p-1">
                  <Check className="h-5 w-5 text-primary" />
                </div>
              </div>
              <p className="text-base text-foreground leading-relaxed">{promise}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
