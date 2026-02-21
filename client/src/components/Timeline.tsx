import { Calendar, Rocket, TrendingUp, Trophy, CheckCircle, BarChart } from "lucide-react";

export default function Timeline() {
  const phases = [
    {
      icon: Calendar,
      phase: "Step 1",
      title: "Onboarding & Discovery",
      description: "We begin with a deep dive into your brand, goals, and target audience to lay the foundation for a successful content strategy"
    },
    {
      icon: Rocket,
      phase: "Step 2",
      title: "Content Calendar Creation",
      description: "Our experts craft a bespoke content calendar, strategically outlining themes, topics, and formats to align with your business objectives"
    },
    {
      icon: CheckCircle,
      phase: "Step 3",
      title: "Client Approval",
      description: "The calendar is sent for your review and approval, ensuring complete alignment before content production begins"
    },
    {
      icon: Trophy,
      phase: "Step 4",
      title: "Content Production",
      description: "Our AI-human hybrid team generates daily posts with high-quality images, carousels, infographics, video, and engaging blog posts tailored to your brand voice and target audience."
    },
    {
      icon: TrendingUp,
      phase: "Step 5",
      title: "Scheduling & Posting",
      description: "We manage the scheduling and posting across your social channels, ensuring consistent delivery and optimal timing for engagement"
    },
    {
      icon: BarChart,
      phase: "Step 6",
      title: "Performance Review",
      description: "We continuously monitor and analyze content performance, providing actionable insights to refine strategies and maximize ROI"
    }
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-background">
      <div className="container px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Content Creation Workflow
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience a transparent, efficient content journey designed for maximum impact and minimal effort from your team
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
                  <div className={`flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${isEven ? 'pr-12 text-right' : 'pl-12'}`}>
                      <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-3">
                        {phase.phase}
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {phase.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {phase.description}
                      </p>
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
                    <p className="text-muted-foreground">
                      {phase.description}
                    </p>
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
