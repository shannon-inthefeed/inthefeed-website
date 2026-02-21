import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ArrowLeft, Users, FileText, Eye, TrendingUp, MessageSquare, ThumbsUp, Share2, Quote, CheckCircle, Target, Clock, Zap } from "lucide-react";
import SEO from "@/components/SEO";
import { useEffect } from "react";

export default function CaseStudyDK() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const metrics = [
    { label: "Followers Gained", value: "4,762", icon: Users },
    { label: "Posts Published", value: "107", icon: FileText },
    { label: "Total Impressions", value: "53,940+", icon: Eye },
    { label: "Engagement Rate", value: "2.22%", icon: TrendingUp },
  ];

  const detailedMetrics = [
    { metric: "Total Impressions", value: "53,940+", note: "Broad reach across LinkedIn network" },
    { metric: "Total Reactions", value: "1,020", note: "Strong emotional resonance with audience" },
    { metric: "Total Comments", value: "264", note: "Meaningful conversations sparked" },
    { metric: "Total Shares", value: "12", note: "Content perceived as valuable and shareable" },
    { metric: "Avg. Reactions Per Post", value: "3.9", note: "Above-average engagement for the platform" },
    { metric: "Avg. Comments Per Post", value: "0.83", note: "Indicative of thought-provoking content" },
    { metric: "Avg. Daily Reactions", value: "2.25", note: "Consistent daily engagement" },
  ];

  const successFactors = [
    {
      title: "Authentic Authority",
      description: "Rather than promoting services directly, the content strategy demonstrated expertise through educational, story-driven posts. This built genuine credibility rather than transactional interest."
    },
    {
      title: "Consistency & Frequency",
      description: "Publishing 3–4 times per week maintained visibility in followers' feeds and signaled professional seriousness to LinkedIn's algorithm."
    },
    {
      title: "Audience-First Approach",
      description: "Every post addressed real challenges faced by the target audience. Content wasn't about Danoosh; it was for his audience."
    },
    {
      title: "Strategic Timing",
      description: "Posts were scheduled during peak engagement windows (typically 7–9 PM on weekdays, 8–9 AM on weekends) to maximize visibility."
    },
    {
      title: "Professional Execution",
      description: "In the Feed managed the entire process, from content planning and copywriting to scheduling and monitoring."
    }
  ];

  return (
    <>
      <SEO 
        title="Case Study: How Danoosh Kapadia Transformed His LinkedIn Presence | In the Feed"
        description="See how strategic LinkedIn content marketing helped Danoosh Kapadia gain 4,762 followers, 53,940+ impressions, and a Q4 consulting surge in just 6 months."
        keywords="LinkedIn case study, content marketing results, consulting growth, thought leadership, B2B marketing success"
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How Strategic LinkedIn Content Marketing Transformed Danoosh Kapadia's Consulting Presence
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            6 months | July–December 2025 | DK Consulting / +AI Program
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
            <h2 className="text-2xl font-bold text-foreground mb-4">Executive Summary</h2>
            <p className="text-foreground leading-relaxed mb-4">
              When Danoosh Kapadia decided to strengthen his professional presence on LinkedIn, he partnered with In the Feed to develop and execute a strategic content marketing program. Over a 6-month period, the results speak for themselves: <strong>4,762 engaged followers</strong>, <strong>107 strategically crafted posts</strong>, and <strong>53,940+ impressions</strong> that positioned both his consulting business and innovative +AI training program as thought leaders in AI adoption for mid-career professionals.
            </p>
            <p className="text-foreground leading-relaxed">
              What began as an effort to gain visibility in a competitive consulting landscape evolved into measurable business impact. Danoosh experienced unprecedented growth in consulting inquiries during the Q4 busy season, a period when most businesses slow down.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">The Challenge</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Danoosh Kapadia operates two interconnected but distinct offerings:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">DK Consulting</h3>
                  <p className="text-sm text-muted-foreground">
                    A consulting practice helping mid-career entrepreneurs, executives, and solopreneurs navigate AI integration, business strategy, and leadership challenges.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">+AI Program</h3>
                  <p className="text-sm text-muted-foreground">
                    A comprehensive AI training program designed to equip professionals with practical skills for implementing AI tools and workflows in their work and business.
                  </p>
                </CardContent>
              </Card>
            </div>
            <p className="text-foreground leading-relaxed">
              Prior to the content marketing initiative, Danoosh's LinkedIn presence was underdeveloped. While he possessed deep expertise and valuable insights, he lacked a consistent, strategic approach to sharing that knowledge with his target audience. The challenge was clear: <em>How could he build credibility, reach the right audience, and convert visibility into consulting opportunities?</em>
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">The Strategy: Content-Driven Authority Building</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">1. Audience-Centric Messaging</h3>
                  <p className="text-muted-foreground mb-2">
                    The content strategy centered on Danoosh's core audience: growth-minded professionals aged 38–58, including solopreneurs, founders, entrepreneurs, consultants, creatives, and neurodivergent professionals.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Managing overwhelm and decision fatigue in a fast-changing business environment</li>
                    <li>Building sustainable systems that scale without burning out</li>
                    <li>Using AI strategically without losing authenticity or creative control</li>
                    <li>Balancing technical skill-building with real business outcomes</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">2. Brand Voice and Positioning</h3>
                  <p className="text-muted-foreground">
                    Content emphasized Danoosh's unique perspective: practical wisdom over hype, system-building over tool chasing, and human-centered AI adoption. The messaging positioned him as a trusted guide who understands the real struggles of mid-career professionals.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">3. Content Pillars</h3>
                  <p className="text-muted-foreground mb-2">Posts were strategically distributed across core topics:</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">AI Strategy & Implementation</Badge>
                    <Badge variant="secondary">Leadership & Decision-Making</Badge>
                    <Badge variant="secondary">Personal Productivity & Systems</Badge>
                    <Badge variant="secondary">Professional Growth</Badge>
                    <Badge variant="secondary">Authenticity & Trust</Badge>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">The Results: Numbers Behind the Growth</h2>
            
            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Engagement Metrics</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 font-medium text-foreground">Metric</th>
                        <th className="text-left py-2 font-medium text-foreground">Value</th>
                        <th className="text-left py-2 font-medium text-muted-foreground">Performance</th>
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

            <div className="grid md:grid-cols-3 gap-4">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-1">2.22%</div>
                  <div className="text-sm text-muted-foreground">Engagement Rate</div>
                  <div className="text-xs text-muted-foreground mt-2">(Industry avg: 0.5–1%)</div>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-1">509</div>
                  <div className="text-sm text-muted-foreground">Peak Post Impressions</div>
                  <div className="text-xs text-muted-foreground mt-2">October 1, 2025</div>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-1">Top 10%</div>
                  <div className="text-sm text-muted-foreground">LinkedIn Creators</div>
                  <div className="text-xs text-muted-foreground mt-2">in his space</div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">The Impact: From Visibility to Business Results</h2>
            
            <Card className="border-primary bg-primary/5 mb-6">
              <CardContent className="p-8">
                <div className="flex gap-4 items-start">
                  <TrendingUp className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-2">The Turning Point: September–December Surge</h3>
                    <p className="text-foreground mb-4">
                      The most compelling metric is qualitative: Danoosh reported <strong>significant growth in consulting inquiries beginning in September 2025, continuing through December</strong>, a period when most service-based businesses experience slowdown.
                    </p>
                    <ul className="text-muted-foreground space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        LinkedIn visibility directly translated to inbound consulting leads
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        The content strategy positioned Danoosh as a sought-after authority
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        Prospects were pre-educated about his philosophy before reaching out
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        The consistency and quality of content built trust and credibility
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
                  "I got very busy from September to December with consulting work from our efforts in posting content on LinkedIn. I was very happy with the work that In the Feed did to make my business and presence known on LinkedIn. Having a professional team handle the content strategy freed me to focus on what I do best, working with clients, while knowing my LinkedIn presence was building momentum in the background."
                </blockquote>
                <div className="font-semibold text-foreground">Danoosh Kapadia</div>
                <div className="text-sm text-muted-foreground">DK Consulting / +AI Program</div>
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

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Strategic Takeaways for Consulting Professionals</h2>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Zap className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <strong className="text-foreground">LinkedIn is a business development channel, not a social platform:</strong>
                      <span className="text-muted-foreground"> When used strategically, it generates qualified leads</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <strong className="text-foreground">Authority builds faster with consistency:</strong>
                      <span className="text-muted-foreground"> Regular, high-quality content establishes thought leadership in 3–6 months</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageSquare className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <strong className="text-foreground">Authentic storytelling outperforms sales pitches:</strong>
                      <span className="text-muted-foreground"> Educational, relatable content drives more engagement than promotional material</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <strong className="text-foreground">Outsourcing content frees your focus:</strong>
                      <span className="text-muted-foreground"> Letting professionals manage your LinkedIn presence allows you to serve existing clients while building future ones</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="text-center py-12 border-t">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Ready to Transform Your LinkedIn Presence?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              If you're a consultant, coach, or service provider looking to build authority and drive leads like Danoosh, let's talk about how In the Feed can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing">
                <Button size="lg" data-testid="button-view-pricing">
                  View Pricing Plans
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
