import { Check } from "lucide-react";

export default function ExpandedPromise() {
  const promises = [
    "Seamless integration of cutting-edge AI and elite content specialists",
    "Tailored content marketing plans designed for fast-scaling tech and SaaS companies",
    "Consistent, high-quality social and blog content without in-house resources",
    "Proven strategies to dominate your field and accelerate growth"
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-6 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            The Only Content Partner Built for Tech & SaaS Scale
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            In the Feed combines the precision of AI with the creativity of world-class content specialists to deliver marketing that actually moves the needle.
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
              <p className="text-base text-foreground leading-relaxed">
                {promise}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
