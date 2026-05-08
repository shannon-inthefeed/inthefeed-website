import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import {
  ArrowLeft,
  Users,
  MessageSquare,
  TrendingUp,
  Clock,
  Quote,
  CheckCircle,
  Target,
  Zap,
} from "lucide-react";
import SEO from "@/components/SEO";
import { useEffect } from "react";
import missGalitLogo from "@assets/miss-galit-logo.png";

export default function CaseStudyGalit() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const metrics = [
    { label: "Inbound Sales Conversations", value: "14", icon: MessageSquare },
    { label: "Revenue Increase", value: "+45%", icon: TrendingUp },
    { label: "Timeline", value: "7 months", icon: Clock },
    { label: "Followers Before", value: "18,600", icon: Users },
  ];

  const successFactors = [
    {
      title: "Voice-First Extraction",
      description:
        "Galit had a clear personal style that was not translating to her LinkedIn presence. The first priority was extracting her real voice — the way she actually talks about fashion, business, and her clients — and building every post from that foundation.",
    },
    {
      title: "Consistency Over Volume",
      description:
        "The account had 18,600 followers but hadn't posted in months. Rebuilding consistency was the first goal. Regular, on-brand content re-established her presence and re-engaged a dormant but warm audience.",
    },
    {
      title: "Buyers Before Browsers",
      description:
        "Content was written for her actual buyers, not a broad fashion audience. Every post was designed to speak to the specific decision a buyer makes when choosing a DTC fashion brand.",
    },
    {
      title: "Founder Removed From Production",
      description:
        "Galit's time was her constraint. The system was built to run without her involvement beyond a monthly approval pass. She focused on her business. The content kept going.",
    },
  ];

  return (
    <>
      <SEO
        title="Case Study: How Miss Galit Generated 14 Inbound Buyers and +45% Revenue | In the Feed"
        description="Galit Wexler had 18,600 LinkedIn followers and hadn't posted in months. In 7 months with In the Feed, she generated 14 qualified buyers and grew revenue 45%."
        keywords="LinkedIn case study, DTC fashion marketing, founder content engine, inbound sales from LinkedIn, Miss Galit"
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
              src={missGalitLogo}
              alt="Miss Galit LLC"
              className="h-10 w-auto object-contain rounded p-1"
              style={{ backgroundColor: "#383430" }}
            />
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            18,600 Followers. No Posts. Then 14 Inbound Buyers and +45% Revenue.
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            7 months | September 2025 onwards | Miss Galit LLC · DTC Fashion
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
              Galit Wexler had 18,600 LinkedIn followers and hadn't posted in months. She knew she needed help. She just wasn't ready to commit. It took her two years to sign.
            </p>
            <p className="text-foreground leading-relaxed">
              Within seven months of starting with In the Feed, she had 14 qualified buyers reaching out directly, revenue up 45%, and content that sounded like her without her having to write a single word. The buyers who contacted her had read her posts before they picked up the phone.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">The Challenge</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Miss Galit LLC is a DTC fashion brand built around Galit's personal style and point of view. Her audience already existed. Her LinkedIn following was real. But the account had gone quiet, and a dormant profile in a crowded space is worse than no profile at all.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">The Profile Problem</h3>
                  <p className="text-sm text-muted-foreground">
                    18,600 followers with no recent content. A warm audience with no reason to engage. The account was an asset being left idle.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">The Founder Problem</h3>
                  <p className="text-sm text-muted-foreground">
                    Galit knew content was the answer. She also knew she wouldn't be the one to do it consistently. The solution had to work without her in the loop.
                  </p>
                </CardContent>
              </Card>
            </div>
            <p className="text-foreground leading-relaxed">
              The real question was whether someone else could capture her voice accurately enough to make the content worth posting. That was the only risk worth solving for.
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
                  <h3 className="font-semibold text-foreground mb-2">1. Voice Extraction First</h3>
                  <p className="text-muted-foreground">
                    The onboarding session focused entirely on how Galit talks about her brand, her clients, and her philosophy. That session became the source material for everything that followed. No guesswork. No generic fashion content.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">2. Content Positioned for Buyers, Not Browsers</h3>
                  <p className="text-muted-foreground">
                    Each post was written to speak to the specific type of person who buys from Miss Galit. Not a broad fashion audience. Her actual buyer. The content educated and built trust before a purchase conversation ever started.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">3. Consistency to Re-Engage a Dormant Audience</h3>
                  <p className="text-muted-foreground">
                    The first 90 days focused on re-establishing presence and giving LinkedIn's algorithm a consistent signal. A warm audience that had gone quiet came back — and started referring and buying.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">The Results</h2>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-1">14</div>
                  <div className="text-sm text-muted-foreground">Qualified inbound buyers</div>
                  <div className="text-xs text-muted-foreground mt-2">who had read her content first</div>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-1">+45%</div>
                  <div className="text-sm text-muted-foreground">Revenue increase</div>
                  <div className="text-xs text-muted-foreground mt-2">over the engagement period</div>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Inbound, not outbound</div>
                  <div className="text-xs text-muted-foreground mt-2">buyers came to her</div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-primary bg-primary/5 mb-6">
              <CardContent className="p-8">
                <div className="flex gap-4 items-start">
                  <TrendingUp className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-2">The Shift That Mattered</h3>
                    <p className="text-foreground mb-4">
                      Every buyer who reached out in the seven-month period had read Galit's content before they made contact. The content was doing the pre-selling. By the time they reached out, they already trusted her.
                    </p>
                    <ul className="text-muted-foreground space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        Buyers referenced specific posts before closing
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        Content re-engaged a dormant audience without paid promotion
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        Galit's involvement: one monthly approval pass
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        Voice accuracy was confirmed from the first month
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
                  "I first reached out to Shannon in 2023. I had 18,600 followers on LinkedIn and hadn't posted in months. My profile was a ghost town. I knew I needed to do something, I just wasn't ready to commit. It took me two years. I finally signed with In the Feed in September 2025. I wish I hadn't waited. Within seven months, I had 14 qualified buyers reaching out, people who had read my posts and contacted me directly. Revenue grew 45%. And the content actually sounds like me, which I didn't think was possible with someone else writing it. Shannon figured out my voice in a way I couldn't even explain myself. The thing I didn't expect: I don't think about content anymore. It gets done. It performs. And I get to focus on my business. If you're sitting on the fence the way I did, don't wait two years like I did. Work with Shannon."
                </blockquote>
                <div className="font-semibold text-foreground">Galit Wexler</div>
                <div className="text-sm text-muted-foreground">Founder, Miss Galit LLC</div>
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
              Your Audience Already Exists. Are You Showing Up for It?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              If you have a proven product and an audience that's gone quiet, the Founder Exit™ is built for exactly this situation.
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
