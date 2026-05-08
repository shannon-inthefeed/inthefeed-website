import { Card, CardContent } from "@/components/ui/card";
import { Check, Target, Users, BookOpen, Shield } from "lucide-react";
import { Link } from "wouter";
import shannonWorking from "@assets/shannon-working.png";
import SEO from "@/components/SEO";
import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: Target,
      title: "Pipeline, Not Impressions",
      description:
        "If content doesn't lead to sales conversations, we consider it broken. Every piece of work is measured against one question: did this move the pipeline?",
    },
    {
      icon: Users,
      title: "Partnership by Design",
      description:
        "ITF stays small deliberately. When you're a client, you have access to Shannon. Not a junior account manager. Not a team member you've never met. Her.",
    },
    {
      icon: BookOpen,
      title: "Built on Pattern Recognition",
      description:
        "Twenty years of watching names change and processes stay the same. Shannon knows what's a trend and what's architecture. And she knows the difference is not the same for every founder.",
    },
    {
      icon: Shield,
      title: "Yours on Exit",
      description:
        "Everything built for you belongs to you. The strategy, the voice guide, the calendar, the content. No black box. No lock-in. Cancel after day 90 and take everything with you.",
    },
  ];

  const credentials = [
    "20+ years building businesses, not just marketing them",
    "This is my fourth company. The first three taught me everything that matters.",
    "I keep the agency small so every client gets me, not a substitute",
    "I work and live as a nomad. My systems run because they have to. Yours will too.",
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="About Shannon Kuykendall — Founder of In the Feed"
        description="Shannon Kuykendall built In the Feed because she was tired of watching founders get sold content and delivered noise. 20+ years of B2B marketing, four businesses, and a system that actually works."
        canonical="https://inthefeed.com/about"
        keywords="Shannon Kuykendall, In the Feed founder, B2B SaaS content strategy, founder content engine, LinkedIn pipeline strategy"
      />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container px-6 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            The Founder and the Framework
          </h1>
          <p className="text-lg md:text-xl opacity-90 leading-relaxed">
            In the Feed is Shannon Kuykendall. The story and the system are the same thing.
          </p>
        </div>
      </section>

      {/* Shannon section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-6 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">

            <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <img
                src={shannonWorking}
                alt="Shannon Kuykendall, founder of In the Feed, working from her home office"
                className="rounded-xl shadow-2xl w-full max-w-md lg:max-w-none"
                data-testid="img-founder"
                loading="lazy"
                width="600"
                height="800"
              />
            </div>

            <div className="order-1 lg:order-2 text-center lg:text-left">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                Meet Shannon
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                I'm Shannon Kuykendall. This is my fourth business.
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed mb-8">
                <p>
                  I built In the Feed because I watched too many founders get sold content and delivered noise. The gap wasn't the writing. It was everything around it. No system for reviewing metrics. No tool for engagement. No shared approval process. Agencies made big promises to close the deal, then underdelivered the moment the contract was signed.
                </p>
                <p>
                  I knew I could do better. Not for everyone. For founders willing to invest three months and let the engine run properly. The case studies exist because the system works when you give it the time it needs.
                </p>
                <p>
                  I've spent 20+ years inside B2B marketing. I've seen every trend cycle. I know what's architecture and what's decoration. I work and live as a nomad, running ITF from wherever I happen to be, because the systems I build for clients are the same systems I rely on myself.
                </p>
              </div>

              <div className="space-y-3 flex flex-col items-center lg:items-start">
                {credentials.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-3 items-start"
                    data-testid={`credential-${index}`}
                  >
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Our Story + Values */}
          <div className="grid lg:grid-cols-2 gap-12 items-start py-16 border-t">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why I Built It
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Content agencies were selling content only. No metrics layer. No engagement system. No accountability beyond the invoice. They optimised for their own output, not your pipeline. That was the gap.
                </p>
                <p>
                  ITF was built to close it. A real system: strategy, production, distribution, reporting, and a founder who stays in the room. Not a handoff. A partnership.
                </p>
                <p>
                  I keep the agency small by design. It means I'm in the weeds with you. Available. Communicating. Making sure your business is seen and heard across LinkedIn, your blog, and video, without you having to manage any of it.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} data-testid={`value-${index}`}>
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {value.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Closing section */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            What Twenty Years Actually Buys You
          </h2>
          <div className="text-lg text-muted-foreground leading-relaxed mb-8 space-y-4">
            <p>
              Pattern recognition. A lifetime of implementation. Watching the names change and the processes stay the same. Knowing the difference between what worked for one founder and what will work for you. Because it will not be the same.
            </p>
            <p>
              Most content agencies optimise for their own output. ITF optimises for your pipeline. If you're a B2B SaaS founder with a proven product and existing clients, and content keeps stalling, that's the gap we're built to close.
            </p>
          </div>
          <Link
            href="https://cal.com/inthefeed/discovery"
            className="inline-flex items-center gap-2 text-primary font-semibold underline text-lg"
          >
            Book a strategy call and let's find out if it's the right fit.
          </Link>
        </div>
      </section>
    </div>
  );
}
