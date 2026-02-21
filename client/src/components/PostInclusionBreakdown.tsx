import { X, Check } from "lucide-react";

export default function PostInclusionBreakdown() {
  const without = [
    "Inconsistent content quality and posting schedule",
    "Burning time managing multiple freelancers",
    "Wasting budget on strategies that don't convert",
    "Falling behind competitors in organic reach",
    "Struggling to measure ROI on content efforts"
  ];

  const withService = [
    "Predictable, high-quality content every single week",
    "Expert team handling everything from strategy to execution",
    "Data-driven approach with proven conversion tactics",
    "Outpacing competitors with consistent market presence",
    "Clear analytics showing exactly how content drives revenue"
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Before & After In the Feed
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The transformation is real. Here's what changes when you partner with us.
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
