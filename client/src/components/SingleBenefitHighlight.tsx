import { Check } from "lucide-react";
import linkedinAnalytics from "@assets/A8646AD3-76C3-4111-9CD5-1E087B29E41E_1762842202702.png";

export default function SingleBenefitHighlight() {
  const subBenefits = [
    "AI analyzes your market and competitors in real-time",
    "Content specialists craft engaging posts tailored to your brand",
    "Automated scheduling ensures consistent presence across all platforms",
    "Performance tracking shows exactly what's driving growth"
  ];

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container px-6 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                Our Secret Weapon
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                10x Your Content Output Without 10x the Budget
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our hybrid AI + human approach delivers the volume of automation with the quality of premium agencies. Get more content, better results, at a fraction of the cost.
              </p>
              
              <div className="space-y-4 flex flex-col items-center lg:items-start">
                {subBenefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex gap-3 items-start"
                    data-testid={`sub-benefit-${index}`}
                  >
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-start">
              <img 
                src={linkedinAnalytics} 
                alt="Professional woman viewing LinkedIn analytics dashboard showing follower growth and engagement metrics on laptop - Content marketing performance tracking" 
                className="rounded-xl shadow-2xl w-full max-w-md lg:max-w-none"
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
