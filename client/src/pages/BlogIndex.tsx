import { Link } from "wouter";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/SEO";
import { useEffect } from "react";

export const blogPosts = [
  {
    slug: "best-linkedin-content-agencies-saas-founders-2026",
    title: "Best LinkedIn Content Agencies for B2B SaaS Founders in 2026",
    excerpt:
      "Most LinkedIn content agencies were built for brands, not founders. Here is how to find the one that generates pipeline for a post-revenue SaaS business — and how five leading agencies compare on the criteria that actually matter.",
    category: "Industry Guide",
    date: "May 26, 2026",
    dateISO: "2026-05-26",
    readTime: "8 min read",
  },
  {
    slug: "linkedin-content-strategy-post-revenue-saas-founders",
    title: "LinkedIn Content Strategy for Post-Revenue SaaS Founders",
    excerpt:
      "Posting consistently is not the same as having a strategy. This guide covers what a working LinkedIn content strategy actually looks like for a founder past the startup scramble — and why most attempts at it fail.",
    category: "Strategy",
    date: "May 27, 2026",
    dateISO: "2026-05-27",
    readTime: "7 min read",
  },
  {
    slug: "linkedin-ghostwriter-cost-2026",
    title: "How Much Does a LinkedIn Ghostwriter Cost? 2026 Pricing Guide",
    excerpt:
      "LinkedIn ghostwriting ranges from €500 to €10,000 per month depending on who you hire and what you actually get. This guide breaks down every tier, what is included at each price point, and what the numbers mean for a B2B SaaS founder.",
    category: "Pricing",
    date: "May 28, 2026",
    dateISO: "2026-05-28",
    readTime: "6 min read",
  },
  {
    slug: "linkedin-content-compounding-curve",
    title: "The LinkedIn Content Compounding Curve: What Months 1, 3, and 6 Actually Look Like",
    excerpt:
      "Most founders quit LinkedIn content at month two. Not because the strategy failed — because nobody told them what month two is supposed to feel like. Here is what the compounding curve looks like, month by month, and how to tell the difference between a strategy that isn't working and one that hasn't finished working yet.",
    category: "Strategy",
    date: "April 15, 2026",
    dateISO: "2026-04-15",
    readTime: "8 min read",
  },
  {
    slug: "linkedin-engagement-strategy-b2b-founders",
    title: "The Missing Half of Your LinkedIn Strategy: Turning LinkedIn Activity into Inbound Leads",
    excerpt:
      "You've posted 40 times this quarter. Your pipeline hasn't moved. That's not bad luck — that's a missing system. Posting without engaging is winking in the dark. Here is the five-step engagement framework that turns LinkedIn activity into inbound leads.",
    category: "Strategy",
    date: "March 31, 2026",
    dateISO: "2026-03-31",
    readTime: "6 min read",
  },
  {
    slug: "linkedin-content-ai-generated-voice",
    title: "\"Your Content Sounds AI-Generated.\" How to Tell if It's a Real Problem or a Panic Signal.",
    excerpt:
      "A client forwarded a note that her content sounded AI-generated. Her inbound was up. Her pipeline was moving. The right people were reaching out. Here is how to tell the difference between a real voice problem and a confidence panic — and what to do about each.",
    category: "Content",
    date: "March 11, 2026",
    dateISO: "2026-03-11",
    readTime: "5 min read",
  },
  {
    slug: "b2b-founder-content-strategy-authority-2026",
    title: "The 2026 Founder's Reality Check: Why Your Hustle is Building a House of Cards",
    excerpt:
      "The old playbook — chasing reach, spamming inboxes, and hoping for conversions — is officially dead. In 2026, the founders compounding fastest are building authority architecture, not hustle loops. Here is what that shift actually looks like.",
    category: "Strategy",
    date: "February 25, 2026",
    dateISO: "2026-02-25",
    readTime: "6 min read",
  },
];

export default function BlogIndex() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Blog — LinkedIn Content Strategy for B2B SaaS Founders | In the Feed"
        description="Practical guides on LinkedIn content strategy, ghostwriting pricing, and pipeline generation for post-revenue B2B SaaS founders."
        canonical="https://inthefeed.com/blog"
        keywords="LinkedIn content strategy, LinkedIn ghostwriting, B2B SaaS LinkedIn, founder content, inbound pipeline LinkedIn"
      />

      {/* Header */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container px-6 max-w-4xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest opacity-75 mb-4">
            The In the Feed Blog
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            LinkedIn Content Strategy for B2B SaaS Founders
          </h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Practical guides on pipeline generation, content systems, and the
            specific mechanics of making LinkedIn work as a business development
            channel.
          </p>
        </div>
      </section>

      {/* Post list */}
      <section className="py-16 md:py-20">
        <div className="container px-6 max-w-4xl mx-auto">
          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <Link key={index} href={`/blog/${post.slug}`}>
                <Card
                  className="group cursor-pointer hover:shadow-md transition-shadow duration-200"
                  data-testid={`blog-card-${index}`}
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <Badge variant="secondary" className="text-xs font-semibold">
                            {post.category}
                          </Badge>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>
                      <div className="flex-shrink-0 flex items-center md:items-start md:pt-1">
                        <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                          Read
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted">
        <div className="container px-6 max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            Ready to act on what you've read?
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Book a 30-minute strategy call with Shannon
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            If LinkedIn should be generating pipeline for your B2B SaaS business
            and it isn't, that's the conversation worth having.
          </p>
          <a
            href="https://cal.com/inthefeed/discovery"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
          >
            Book a Strategy Call
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
