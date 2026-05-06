import { AlertCircle } from "lucide-react";
import consultationPhoto from "@assets/content-challenges-consultation.png";

export default function ProblemStatement() {
  const painPoints = [
    "Your pipeline still depends on referrals and who you know, not on what buyers find",
    "Every attempt to fix it, ghostwriter, AI tool, internal hire, still runs through you",
    "Content goes out when you have time. Pipeline reflects it.",
    "You're building visibility without building a system. The moment you stop, it stops.",
  ];

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Posting Consistently Isn't the Same as Building a Pipeline
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Most B2B SaaS founders have a content problem that looks like a time problem. It's neither. It's an architecture problem. And no ghostwriter is going to fix that.
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
              alt="B2B SaaS founder content strategy consultation"
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
