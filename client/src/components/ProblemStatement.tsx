import { AlertCircle } from "lucide-react";
import consultationPhoto from "@assets/content-challenges-consultation.png";

export default function ProblemStatement() {
  const painPoints = [
    "Struggling to produce consistent, high-quality content that drives engagement",
    "Burning budget on in-house teams that can't keep up with demand",
    "Missing growth opportunities because your content strategy is reactive, not proactive",
    "Wasting time managing freelancers instead of focusing on core business"
  ];

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container px-6 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Content Marketing Shouldn't Be This Hard
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Rapidly growing Tech and SaaS companies often struggle with producing consistent content. We understand these challenges, which is why they choose to partner with In the Feed.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {painPoints.map((point, index) => (
                <div 
                  key={index} 
                  className="flex gap-4 items-start"
                  data-testid={`pain-point-${index}`}
                >
                  <AlertCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                  <p className="text-foreground leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
            
            <div className="hidden lg:block">
              <img 
                src={consultationPhoto} 
                alt="Tech and SaaS marketing consultation - In the Feed helping businesses overcome content challenges" 
                className="rounded-xl shadow-lg w-full"
                loading="lazy"
                width="1200"
                height="800"
              />
            </div>
          </div>
      </div>
    </section>
  );
}
