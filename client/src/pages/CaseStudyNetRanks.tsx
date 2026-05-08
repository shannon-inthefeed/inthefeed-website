import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import {
  ArrowLeft,
  BarChart,
  MessageSquare,
  TrendingUp,
  Clock,
  Quote,
  CheckCircle,
  Target,
  Zap,
  Users,
} from "lucide-react";
import SEO from "@/components/SEO";
import { useEffect } from "react";
import netranksLogo from "@assets/netranks-logo.png";

export default function CaseStudyNetRanks() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const metrics = [
    { label: "Demos Generated", value: "35", icon: MessageSquare },
    { label: "Close Rate", value: "75%", icon: TrendingUp },
    { label: "New Paying Clients", value: "~26", icon: Users },
    { label: "From a Standing Start", value: "45 days", icon: Clock },
  ];

  const detailedMetrics = [
    { metric: "Impressions Growth", value: "12x", note: "Scaled from zero in 45 days" },
    { metric: "Reactions Increase", value: "+935%", note: "Engagement quality improved as volume grew" },
    { metric: "Clicks Increase", value: "+1,786%", note: "High-intent traffic to the product" },
    { metric: "Demos Generated", value: "35", note: "All from organic LinkedIn content" },
    { metric: "Close Rate", value: "75%", note: "Pre-educated buyers, lower sales friction" },
    { metric: "New Paying Clients", value: "~26", note: "In 45 days from a standing start" },
  ];

  const successFactors = [
    {
      title: "Educate First, Sell Second",
      description:
        "The strategy was built around a simple principle: in a new product category, buyers don't know they need you yet. Every piece of content educated the market on AI Visibility and GEO Monitoring before asking for anything.",
    },
    {
      title: "Consistent Cadence From Day One",
      description:
        "Starting from a brand-new page meant every day of silence cost them ground. The content system was publishing consistently within 48 hours of launch, giving the algorithm and the audience something to respond to immediately.",
    },
    {
      title: "Sharp Copy With Clear CTAs",
      description:
        "Educational content without a next step is a dead end. Every post that educated also directed the right reader toward a demo. The path from content to conversion was built into the content architecture from the start.",
    },
    {
      title: "Quality Improved With Volume",
      description:
        "A common concern with high-output content is quality degradation. In this case the opposite happened: as volume scaled, engagement quality improved. Reactions up 935%. Clicks up 1,786%. The system got better as it ran.",
    },
  ];

  return (
    <>
      <SEO
        title="Case Study: How NetRanks AI Generated 35 Demos and a 75% Close Rate in 45 Days | In the Feed"
        description="NetRanks AI started with a blank LinkedIn page and zero content infrastructure. In 45 days, they generated 35 demos, closed 75% of them, and acquired ~26 new clients from organic LinkedIn alone."
        keywords="LinkedIn case study, B2B SaaS content marketing, AI startup LinkedIn strategy, demo generation LinkedIn, NetRanks AI"
      />

      <div className="min-h-screen bg-background">
        <div className="container px-6 max-w-4xl mx-auto py-12">
          <Link href="/#testimonials">
            <Button variant="ghost" className="mb-8" data-testid="button-back">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Testimonials
            </Button>
          </Link>

          <Badge className="mb-4">Case Study</Badge>

          <div className="flex items-center gap-4 mb-6">
            <img
              src={netranksLogo}
              alt="NetRanks AI"
              className="h-10 w-auto object-contain"
            />
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Zero LinkedIn Presence. 35 Demos. 75% Close Rate. 45 Days.
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            45 days | 2025 | NetRanks AI · B2B SaaS, AI Visibility and GEO Monitoring
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {metrics.map((metric, index) => (
              <Card key={index} className="text-center" data-testid={`metric-card-${index}`}>
                <CardContent className="p-6">
                  <metric.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-bold text-foreground">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">The Short Version</h2>
            <p className="text-foreground leading-relaxed mb-4">
              NetRanks AI came to In the Feed with a brand-new LinkedIn page, a new product category, and zero content infrastructure. In 45 days, that changed.
            </p>
            <p className="text-foreground leading-relaxed">
              35 demos from organic LinkedIn content. 75% close rate. Approximately 26 new paying clients. Impressions scaled 12x. And engagement quality improved as volume grew — not the other way around.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">The Challenge</h2>
            <p className="text-foreground leading-relaxed mb-4">
              NetRanks AI operates in a nascent product category: AI Visibility and GEO Monitoring. The technology is real and the need is growing — but the market doesn't have a name for the problem yet.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">No Brand Recognition</h3>
                  <p className="text-sm text-muted-foreground">
                    A brand-new LinkedIn page with no followers, no content history, and no established presence in a competitive B2B SaaS landscape.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">A Category That Needs Explaining</h3>
                  <p className="text-sm text-muted-foreground">
                    AI Visibility and GEO Monitoring is an emerging space. Buyers don't know they need it yet. The content had to educate before it could sell.
                  </p>
                </CardContent>
              </Card>
            </div>
            <p className="text-foreground leading-relaxed">
              The question wasn't whether the product worked. It was whether content alone could build enough market awareness and trust to generate qualified demos in a meaningful timeframe.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">The Strategy</h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">1. Educate the Market, Then Sell to It</h3>
                  <p className="text-muted-foreground">
                    The core principle was simple: in a new category, you have to create the demand before you can capture it. Content focused on the problem first — why AI visibility matters, what GEO Monitoring means for B2B products, what the cost of ignoring it looks like — before ever positioning NetRanks AI as the solution.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">2. Consistent Cadence From Day One</h3>
                  <p className="text-muted-foreground">
                    There was no ramp-up period. Publishing started within 48 hours of launch. A new LinkedIn page needs to give the algorithm something to work with, and the audience needs a reason to pay attention. Gaps in early posting cost disproportionate ground in a new account.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">3. Every Post Had a Clear Next Step</h3>
                  <p className="text-muted-foreground">
                    Educational content with no conversion path is just brand awareness. Each post that built understanding also pointed the right reader toward a demo. The path from interest to action was built into the content architecture from the start.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">The Results: Numbers Behind the Pipeline</h2>

            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Performance Metrics</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 font-medium text-foreground">Metric</th>
                        <th className="text-left py-2 font-medium text-foreground">Result</th>
                        <th className="text-left py-2 font-medium text-muted-foreground">What It Means</th>
                      </tr>
                    </thead>
                    <tbody>
                      {detailedMetrics.map((row, index) => (
                        <tr key={index} className="border-b last:border-0">
                          <td className="py-3 text-foreground">{row.metric}</td>
                          <td className="py-3 font-semibold text-primary">{row.value}</td>
                          <td className="py-3 text-muted-foreground">{row.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-1">35</div>
                  <div className="text-sm text-muted-foreground">Demos generated</div>
                  <div className="text-xs text-muted-foreground mt-2">all organic, no paid</div>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-1">75%</div>
                  <div className="text-sm text-muted-foreground">Close rate</div>
                  <div className="text-xs text-muted-foreground mt-2">pre-educated buyers</div>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-1">45</div>
                  <div className="text-sm text-muted-foreground">Days to first results</div>
                  <div className="text-xs text-muted-foreground mt-2">from a standing start</div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-primary bg-primary/5 mb-6">
              <CardContent className="p-8">
                <div className="flex gap-4 items-start">
                  <BarChart className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-2">The Number That Matters Most</h3>
                    <p className="text-foreground mb-4">
                      A 75% close rate on demo calls is not a content metric. It's a sales metric that content made possible. Buyers who come through organic LinkedIn content arrive pre-educated, pre-warmed, and already aligned with the product's positioning. The sales conversation starts further along.
                    </p>
                    <ul className="text-muted-foreground space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        Engagement quality improved as volume scaled
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        Impressions 12x in 45 days from zero
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        Pre-educated buyers meant shorter, higher-quality sales conversations
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        ~26 new paying clients entirely from organic content
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted/50">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <blockquote className="text-lg text-foreground italic mb-4 leading-relaxed">
                  "We came to Shannon at In the Feed with a brand-new LinkedIn page, a new product category, and zero content infrastructure. In 45 days, that changed. The strategy was simple in the right way: educate the market first, sell second. Shannon built a content system around that principle, consistent cadence, sharp copy, clear CTAs, and it generated 35 product demos entirely from organic LinkedIn. The close rate was 75%. That's approximately 26 new paying customers from content alone. What impressed us most wasn't just the reach, impressions scaled 12x, it was that engagement quality improved as volume grew. Reactions up 935%. Clicks up 1,786%. Those aren't vanity numbers. That's a system that was working. If you're building pipeline for an early-stage B2B product and you're not working with Shannon, you're leaving demos on the table."
                </blockquote>
                <div className="font-semibold text-foreground">Reya Sonmez</div>
                <div className="text-sm text-muted-foreground">Founder, NetRanks AI</div>
              </CardContent>
            </Card>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Key Success Factors</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {successFactors.map((factor, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                        {index + 1}
                      </div>
                      <h3 className="font-semibold text-foreground">{factor.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{factor.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="text-center py-12 border-t">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Building Pipeline for an Early-Stage B2B Product?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              If you have a proven product and need a content system that generates qualified demos, the Founder Exit™ is built for this.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing">
                <Button size="lg" data-testid="button-view-pricing">
                  See Pricing
                </Button>
              </Link>
              <Button size="lg" variant="outline" asChild data-testid="button-book-call">
                <a
                  href="https://cal.com/inthefeed/discovery"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Strategy Call
                </a>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
