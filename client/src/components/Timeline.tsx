import { Map, Mic, PenLine, Send, LogOut, BarChart } from "lucide-react";

export default function Timeline() {
  const phases = [
    {
      icon: Map,
      phase: "Step 1",
      title: "Position",
      description:
        "We define your ICP, sharpen your offer, and identify the pipeline targets worth building toward. Strategy first. Always.",
    },
    {
      icon: Mic,
      phase: "Step 2",
      title: "Extract",
      description:
        "One 90-minute session in week one. We mine your calls, Looms, decks, and voice notes. Your thinking becomes the raw material. Nothing is invented from scratch.",
    },
    {
      icon: PenLine,
      phase: "Step 3",
      title: "Build",
      description:
        "Written by humans, assisted by AI. Every piece sounds like you, not a template. You review once a month. 30 to 60 minutes. That's it.",
    },
    {
      icon: Send,
      phase: "Step 4",
      title: "Distribute",
      description:
        "Published across LinkedIn and every other channel your buyers actually use. Consistently. On schedule. Without you managing it.",
    },
    {
      icon: LogOut,
      phase: "Step 5",
      title: "Exit",
      description:
        "You step out of the production loop. The engine keeps going. Inbound compounds. Pipeline builds without your personal heroics holding it together.",
    },
    {
      icon: BarChart,
      phase: "Step 6",
      title: "Report",
      description:
        "Monthly reporting on what matters: inbound conversations, leads generated, and deals where content played a role. Not impressions. Not likes.",
    },
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-background">
      <div className="container px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            The Founder Exit™ — How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We don't create content from scratch. We extract it from what's already in your business, build it, distribute it, and track what moves the pipeline.
          </p>
        </div>

        <div>
          <div className="hidden md:block relative">
            <div className="absolute top-0 left-1/2 w-0.5 h-full bg-border -translate-x-1/2" />

            {phases.map((phase, index) => {
              const Icon = phase.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="relative mb-16 last:mb-0"
                  data-testid={`timeline-phase-${index}`}
                >
                  <div className={`flex items-center ${isEven ? "flex-row" : "flex-row-reverse"}`}>
                    <div className={`w-1/2 ${isEven ? "pr-12 text-right" : "pl-12"}`}>
                      <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-3">
                        {phase.phase}
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {phase.title}
                      </h3>
                      <p className="text-muted-foreground">{phase.description}</p>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary flex items-center justify-center z-10">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="w-1/2" />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="md:hidden space-y-8">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <div
                  key={index}
                  className="flex gap-4"
                  data-testid={`timeline-phase-mobile-${index}`}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-2">
                      {phase.phase}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {phase.title}
                    </h3>
                    <p className="text-muted-foreground">{phase.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
