import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  HelpCircle,
  Shield,
  Zap,
  Users,
  Building2,
  Video,
  User,
  Briefcase,
  Rocket,
  Star,
  ExternalLink,
  Calendar,
  Download,
  Target,
  MessageSquare,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Link } from "wouter";
import { useEffect } from "react";
import SEO from "@/components/SEO";
import { trackEvent } from "@/lib/analytics";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import bigTopLogo from "@assets/IMG_4655_1762560382615.jpeg";
import gratisIQLogo from "@assets/IMG_4657_1762560382615.png";
import agConstructionLogo from "@assets/IMG_4656_1762560382615.png";
import danooshPhoto from "@assets/IMG_5472_1768087836962.png";
import missGalitLogo from "@assets/miss-galit-logo.png";
import netranksLogo from "@assets/netranks-logo.png";

interface AddOn {
  icon: typeof Video;
  title: string;
  description: string;
  eurPrice: number;
  priceLabel: string;
}

interface Plan {
  name: string;
  monthlyPrice: number;
  eurPrice: number;
  launchPrice: number;
  tagline: string;
  description: string;
  whyNinetyDays: string;
  features: string[];
  popular?: boolean;
  addOns?: AddOn[];
  cta: string;
  whatsappLink: string;
}

interface PricingPageProps {
  onSelectPlan?: (plan: string) => void;
}

export default function PricingPage({ onSelectPlan }: PricingPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const commonAddOns: AddOn[] = [
    {
      icon: Video,
      title: "Video Content",
      description: "4 videos per month to build authority on camera.",
      eurPrice: 500,
      priceLabel: "/month",
    },
    {
      icon: Users,
      title: "Team Member Profiles",
      description:
        "Add senior leaders or key voices to the content calendar. Each profile gets its own strategy, copy, and posting.",
      eurPrice: 500,
      priceLabel: "/profile/month",
    },
    {
      icon: Building2,
      title: "Company Page Management",
      description:
        "The tools and systems ITF uses run on your personal LinkedIn profile. If you want your company page active too, we make sure your content gets posted there consistently. Same voice, aligned messaging — just posted, not managed with the same automation.",
      eurPrice: 250,
      priceLabel: "/month",
    },
  ];

  const plans: Plan[] = [
    {
      name: "Starter Plan",
      monthlyPrice: 1500,
      eurPrice: 1500,
      launchPrice: 4500,
      tagline: "Your Personal LinkedIn Profile",
      description:
        "We build your Authority Architecture on your personal LinkedIn profile. The tools and systems we use are built for the founder's profile. That's where the engine runs.",
      whyNinetyDays:
        "The first 90 days is where the engine is built. Voice extraction, positioning, 10 to 20 core topics, and the first calendar. By day 90 you have concrete pipeline signals and proof the system works. After that, month-to-month. No contract. Cancel anytime.",
      features: [
        "4 long-form posts per month: authority-building and carousels",
        "16 to 20 short posts per month to maintain consistent feed presence",
        "4 SEO-optimised blog posts per month",
        "Branded images and custom creatives for every post",
        "Monthly performance report: lead signal and engagement audit",
        "Monthly strategic direction: pivot and planning session",
        "KPI dashboard: access to Metricool",
        "Dedicated strategist: Shannon Kuykendall",
        "A real human to talk to",
      ],
      addOns: commonAddOns,
      cta: "Book Your Strategy Call",
      whatsappLink:
        "https://wa.me/18052030564?text=Hi%20Shannon%2C%20I'm%20interested%20in%20the%20Starter%20Plan%20(%E2%82%AC1%2C500%2Fmonth).",
    },
    {
      name: "Growth Plan",
      monthlyPrice: 1750,
      eurPrice: 1750,
      launchPrice: 5250,
      tagline: "Personal Profile + Three More Channels",
      popular: true,
      description:
        "For founders who are serious about being the obvious choice in their category. One system, four channels, same voice.",
      whyNinetyDays:
        "The first 90 days builds the full omnichannel architecture. Strategy, voice, positioning, and distribution across every channel. By day 90 the engine is running consistently and the pipeline signals are measurable. After that, month-to-month. No contract. Cancel anytime.",
      features: [
        "Everything from Starter Plan",
        "Up to 4 channels managed for you",
        "60+ posts per month across all platforms",
        "Consistent voice and quality across every channel",
        "Full creative support: copy, images, and strategy",
        "A real human to talk to",
      ],
      addOns: commonAddOns,
      cta: "Book Your Strategy Call",
      whatsappLink:
        "https://wa.me/18052030564?text=Hi%20Shannon%2C%20I'm%20interested%20in%20the%20Growth%20Plan%20(%E2%82%AC1%2C750%2Fmonth).",
    },
    {
      name: "Scale Plan",
      monthlyPrice: 2500,
      eurPrice: 2500,
      launchPrice: 7500,
      tagline: "Full Output",
      description:
        "The output of a full marketing department. Without the hiring, the management, or the overhead.",
      whyNinetyDays:
        "The first 90 days builds the complete system at scale. All channels, video production, and the full content engine calibrated to your voice. By day 90 the machine runs without you in the loop. After that, month-to-month. No contract. Cancel anytime.",
      features: [
        "Everything from Starter and Growth Plans",
        "80+ posts per month across all your channels",
        "AI video content — with or without you on camera",
        "Up to 3 videos per week",
        "TikTok and YouTube included",
      ],
      addOns: commonAddOns.slice(1),
      cta: "Book Your Strategy Call",
      whatsappLink:
        "https://wa.me/18052030564?text=Hi%20Shannon%2C%20I'm%20interested%20in%20the%20Scale%20Plan%20(%E2%82%AC2%2C500%2Fmonth).",
    },
  ];

  const faqs = [
    {
      question: "Why do you require 90 days upfront?",
      answer:
        "Month-to-month from day one is an exit ramp dressed up as flexibility. Month two is when impatience starts making decisions. And impatience is expensive. The 90-day launch block filters for founders who want a system, not a shortcut. By day 90 the routine is built, the voice is calibrated, the strategy is running, and the KPIs are measurable. That's when we go month-to-month. No contract. No pressure. The engine is already running.",
    },
    {
      question: "What happens inside those first 90 days?",
      answer:
        "We're operational within 48 hours of payment. The first step is an onboarding interview, recorded so we capture the nuances of your voice, the way you talk, and how you think. From there we build the positioning, research 10 to 20 core topics, and build out the full content calendar. If you have company news or specific announcements, you send them through and we write and post. If you have the LinkedIn Engagement Service, we build your top 50 ideal client list and begin targeting them from day one.",
    },
    {
      question: "How long until I see pipeline results?",
      answer:
        "Pipeline signals, inbound DMs, and buyers citing your content typically start appearing at months 2 to 3. Full compounding, where your calendar fills regularly with qualified inbound, comes at months 4 to 6. Anyone promising a transformed pipeline in 30 days is selling you something else.",
    },
    {
      question: "How much of my time does this take?",
      answer:
        "After the onboarding interview in week one (90 minutes), your involvement is a monthly approval pass of 30 to 60 minutes. That's it. Everything else runs without you. If you're currently spending more than that on content and getting no pipeline, that's the gap we're closing.",
    },
    {
      question: "What does 'one primary channel' mean?",
      answer:
        "Each plan covers one main LinkedIn profile — either your personal profile or your company page. You choose which is your primary focus, and we build your entire content strategy around it.",
    },
    {
      question: "What if the content doesn't sound like me?",
      answer:
        "We build from your real conversations, calls, Looms, voice notes, and emails. Not guesswork. The first month includes voice calibration. If it doesn't sound like you, we rewrite it. No charge, no argument. This only works if it sounds like you. That's not a nice-to-have. It's the whole point.",
    },
    {
      question: "Can I switch plans later?",
      answer:
        "Yes. You can upgrade or downgrade at any time after the first 90 days. Changes take effect at the start of your next billing cycle.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept Visa, Mastercard, and IBAN bank transfers (preferred). We use Wise for payment processing.",
    },
    {
      question: "What's the guarantee?",
      answer:
        "Execution guarantee: if we don't deliver strategy, content, and publishing in a given month, you don't pay for that month. No argument. Cancel anytime after the first 90 days. Keep everything we build: the strategy, the calendar, the content, the voice guide. All yours.",
    },
  ];

  const trustBadges = [
    { icon: Shield, text: "Execution Guaranteed" },
    { icon: Zap, text: "Operational in 48 Hours" },
    { icon: HelpCircle, text: "No Contract After Day 90" },
    { icon: Target, text: "Pipeline Signals at Months 2 to 3" },
  ];

  const testimonials = [
    {
      name: "Danoosh Kapadia",
      role: "DK Consulting / +AI",
      logo: danooshPhoto,
      featured: true,
      text: "In the Feed completely transformed my presence on LinkedIn. Over just six months, we went from an underused profile to a channel that now reliably drives consulting work and demands for my +AI training program. I now have 4,700+ engaged followers, 100+ strategic posts, and nearly 54,000 impressions, but the most important outcome was the consulting surge from September to December, traditionally a slow period, where my calendar filled up with qualified inbound inquiries. What I appreciated most was having a professional team own the content strategy, writing, scheduling, and optimization, so I could stay focused on serving clients while my authority and visibility were compounding in the background.",
      caseStudyLink: "/case-studies/dk-consulting",
      stats: [
        { value: "23", label: "inbound sales calls" },
        { value: "+67%", label: "revenue Q4 vs Q3" },
        { value: "4", label: "clients closed" },
      ],
    },
    {
      name: "Galit Wexler",
      role: "Founder, Miss Galit LLC",
      logo: missGalitLogo,
      logoBg: "#383430",
      featured: false,
      caseStudyLink: "/case-studies/miss-galit",
      text: "I knew Shannon for two years before I signed. My profile had 18,600 followers and I hadn't posted in months. I knew I needed help, I just had to get there. Signing with In the Feed was the right call. My content gets done, it performs better than I ever expected, and I don't have to think about it. That last part alone is worth it.",
      stats: [
        { value: "14", label: "inbound sales conversations" },
        { value: "+45%", label: "revenue increase" },
      ],
    },
    {
      name: "Reya Sonmez",
      role: "Founder, NetRanks AI",
      logo: netranksLogo,
      featured: false,
      caseStudyLink: "/case-studies/netranks-ai",
      text: "Shannon and In the Feed built us a LinkedIn pipeline from zero. 35 demos. 75% close rate. 45 days. The content system worked, and the numbers prove it.",
      stats: [
        { value: "35", label: "demos generated" },
        { value: "75%", label: "close rate" },
        { value: "~26", label: "new clients in 45 days" },
      ],
    },
    {
      name: "Ian Gilpatrick",
      role: "Big Top USA",
      logo: bigTopLogo,
      featured: false,
      text: "Working with Shannon and her team has been a breakthrough for our business. Before partnering with them, we had zero LinkedIn presence. Now, just over a year later, our company page has grown to over 1,400+ engaged followers, driving consistent website traffic and generating new leads. Shannon's strategic approach to content delivers real results, and her responsiveness and openness to feedback set her apart.",
    },
    {
      name: "Abdallah Atieh",
      role: "AG Construction Management",
      logo: agConstructionLogo,
      featured: false,
      text: "Shannon and her team have transformed my construction business's marketing. I needed content that truly spoke to my Cary, NC clientele, and that's exactly what they delivered. Every piece is thoughtfully localized, making our brand stand out in the local market and connect authentically with our customers.",
    },
    {
      name: "Ayan Roy",
      role: "Gratis Intelligence",
      logo: gratisIQLogo,
      featured: false,
      text: "As a SaaS company with a highly specialized product for bar managers and distributors, we needed a content partner who could truly understand our niche. Shannon and her team exceeded expectations from day one. Since partnering with Shannon, our content has become a powerful lead generator, directly fueling sales growth.",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Pricing — In the Feed | Content Engine for B2B SaaS Founders"
        description="Every plan starts with a 90-day launch block. After that, month-to-month. No contract. Cancel anytime. Everything we build stays yours. From €1,500/month."
        canonical="https://inthefeed.com/pricing"
        keywords="B2B SaaS content pricing, founder content engine pricing, LinkedIn pipeline strategy, done-for-you content marketing pricing"
      />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container px-6 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, Transparent Pricing.
            <br />
            Built for Founders Who Are Done Restarting.
          </h1>
          <p className="text-lg md:text-xl opacity-90 leading-relaxed">
            Every plan starts with a 90-day launch block. After that, month-to-month. No contract. Cancel anytime. Everything we build stays yours.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container px-6 max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            Why In the Feed vs the Alternatives
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="text-center" data-testid="roi-inhouse">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-muted-foreground/10 flex items-center justify-center mx-auto mb-4">
                  <User className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-3">In-House Team</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">€6,000 to €10,000/month</p>
                  <p>Salary, tools, and management overhead</p>
                  <p className="pt-2">4 to 6 weeks to hire and onboard</p>
                  <p>Inconsistent output, sick days, turnover</p>
                  <p>You manage everything</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center" data-testid="roi-agency">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-muted-foreground/10 flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-3">Traditional Agency</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">€5,000 to €15,000/month</p>
                  <p>High retainers, long contracts</p>
                  <p className="pt-2">2 to 4 weeks kickoff</p>
                  <p>Slow turnaround, limited flexibility</p>
                  <p>You get a junior account manager</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-primary shadow-lg" data-testid="roi-inthefeed">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-primary mb-3">In the Feed</h3>
                <div className="space-y-2 text-sm">
                  <p className="font-bold text-primary text-lg">€1,500 to €2,500/month</p>
                  <p className="text-muted-foreground">After the 90-day launch block</p>
                  <p className="pt-2 text-foreground font-medium">Operational in 48 hours</p>
                  <p className="text-foreground font-medium">Human + AI: speed and quality</p>
                  <p className="text-foreground font-medium">Shannon. Not a substitute.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Plan cards */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-6 max-w-6xl mx-auto">
      <div className="text-center mb-10">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Every plan is built around your personal LinkedIn profile. That's where the tools, systems, and engine run. Want your company page active too? Add it on. Want to bring in team members? Add them. But the personal profile is always the foundation.
          </p>
        </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative pricing-card ${plan.popular ? "prism-border shadow-xl border-transparent" : ""}`}
                data-testid={`pricing-plan-${index}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-6 pt-8">
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-sm font-semibold text-primary mb-3">
                    {plan.tagline}
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    {plan.description}
                  </p>
                  <div className="mb-1">
                    <div className="text-2xl font-bold text-foreground">
                      €{plan.launchPrice.toLocaleString()}
                    </div>
                    <div className="text-sm font-semibold text-primary">
                      90-Day Launch Block — Billed Upfront
                    </div>
                    <div className="text-xs text-muted-foreground italic mt-1">
                      Then €{plan.eurPrice.toLocaleString()}/mo — no contract
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* 90-day explanation */}
                  <div className="rounded-lg bg-primary/5 border border-primary/20 p-4">
                    <p className="text-xs text-foreground leading-relaxed">
                      <span className="font-semibold">Why 90 days?</span>{" "}
                      {plan.whyNinetyDays}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex gap-3 items-start"
                        data-testid={`feature-${index}-${featureIndex}`}
                      >
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {plan.addOns && plan.addOns.length > 0 && (
                    <div className="space-y-3 pt-4 border-t border-border">
                      <p className="text-xs font-semibold text-foreground uppercase tracking-wide">
                        Optional Add-ons
                      </p>
                      {plan.addOns.map((addOn, addOnIndex) => {
                        const AddOnIcon = addOn.icon;
                        return (
                          <div
                            key={addOnIndex}
                            className="p-3 rounded-lg bg-muted"
                            data-testid={`addon-${index}-${addOnIndex}`}
                          >
                            <div className="flex items-start gap-2 mb-1">
                              <AddOnIcon className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                              <div className="flex-1">
                                <p className="text-xs font-medium text-foreground">
                                  {addOn.title}
                                </p>
                                <p className="text-xs text-muted-foreground mt-0.5">
                                  {addOn.description}
                                </p>
                              </div>
                            </div>
                            <p className="text-xs text-primary font-medium mt-2">
                              +€{addOn.eurPrice.toLocaleString()} {addOn.priceLabel}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  <div className="space-y-3">
                    <Button
                      className={`w-full ${
                        index === 0
                          ? "bg-primary text-primary-foreground border-primary-border"
                          : index === 1
                          ? "bg-secondary text-secondary-foreground border-secondary-border"
                          : "bg-accent text-accent-foreground border-accent-border"
                      }`}
                      asChild
                      data-testid={`button-select-plan-${index}`}
                    >
                      <a
                        href="https://cal.com/inthefeed/discovery"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => {
                          trackEvent(
                            "plan_select",
                            "conversion",
                            `pricing_${plan.name.toLowerCase().replace(" ", "_")}`,
                            plan.monthlyPrice
                          );
                          onSelectPlan?.(plan.name);
                        }}
                      >
                        {plan.cta}
                      </a>
                    </Button>
                    <a
                      href={plan.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-sm font-medium py-2.5 px-4 rounded-md bg-[#25D366] text-white hover:bg-[#20BD5A] transition-colors"
                      onClick={() => {
                        trackEvent(
                          "whatsapp_click",
                          "conversion",
                          `pricing_${plan.name.toLowerCase().replace(" ", "_")}_whatsapp`,
                          1
                        );
                      }}
                      data-testid={`button-whatsapp-${index}`}
                    >
                      <SiWhatsapp className="h-5 w-5" />
                      Ask a Question on WhatsApp
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-8">
            {trustBadges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-2"
                  data-testid={`trust-badge-${index}`}
                >
                  <Icon className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">{badge.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LinkedIn Engagement Service add-on */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container px-6 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <Badge className="bg-primary text-primary-foreground mb-4">
              Premium Add-on — Existing Clients Only
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              LinkedIn Engagement Service
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ITF manages your daily LinkedIn engagement — comments, reactions, connection requests, and DMs — written in your voice, targeting a pre-built list of buyers, influencers, and referral partners. You stay in the right feeds every day without ever logging in to do it.
            </p>
          </div>

          <Card className="border-primary shadow-lg" data-testid="engagement-service-card">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-4">What's included</h3>
                  <div className="space-y-3">
                    {[
                      "Daily comments written in your voice",
                      "Reactions and profile views",
                      "Connection requests to ICP targets",
                      "DM sequences to warm contacts",
                      "Three target lists: buyers, influencers, referral partners",
                      "Top 50 ideal client list built and managed for you",
                      "Monthly pipeline signal report",
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-foreground mb-4">How it works</h3>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <p>We build your list of top 50 ideal clients and begin targeting them from day one. We engage with their content, send DMs in your voice, and move warm prospects toward a booked call or continued conversation. At the right moment, they get passed to you or your sales team to close.</p>
                      <p>You stay in the right feeds. Every day. Without logging in.</p>
                    </div>
                  </div>

                  <div className="mt-8 p-6 rounded-lg bg-primary/5 border border-primary/20 text-center">
                    <div className="text-2xl font-bold text-foreground mb-1">€4,500</div>
                    <div className="text-sm font-semibold text-primary mb-1">First 90 Days — Billed Upfront</div>
                    <div className="text-xs text-muted-foreground italic mb-4">Then €1,500/mo — no contract</div>
                    <p className="text-xs text-muted-foreground mb-4">
                      Available exclusively to active In the Feed content retainer clients. Not available as a standalone service.
                    </p>
                    <a
                      href="https://wa.me/18052030564?text=Hi%20Shannon%2C%20I'd%20like%20to%20know%20more%20about%20the%20LinkedIn%20Engagement%20Service."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 text-sm font-medium py-2.5 px-6 rounded-md bg-[#25D366] text-white hover:bg-[#20BD5A] transition-colors"
                      data-testid="button-engagement-whatsapp"
                    >
                      <SiWhatsapp className="h-5 w-5" />
                      Ask About This Add-on
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sample calendar download */}
      <section className="py-16 md:py-20 bg-primary/15 dark:bg-primary/20">
        <div className="container px-6 max-w-3xl mx-auto">
          <Card className="border-0 bg-white dark:bg-card shadow-xl" data-testid="sample-calendar-cta">
            <CardContent className="p-8 text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                Want to See Exactly What You're Getting?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Download a free sample content calendar — post dates, channels, asset types, themes, headlines, and SEO keywords. No guesswork, no vague promises.
              </p>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground px-8"
                asChild
                data-testid="button-download-sample"
              >
                <a
                  href="/sample-calendar.xlsx"
                  download="In-the-Feed-Sample-Content-Calendar.xlsx"
                  onClick={() => {
                    trackEvent("lead_magnet_download", "conversion", "sample_calendar", 1);
                  }}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Free Sample Calendar
                </a>
              </Button>
              <p className="text-xs text-muted-foreground mt-4">No email required. Instant access.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-background" id="pricing-testimonials">
        <div className="container px-6 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary mb-2 uppercase tracking-wide">
              Results Tied to Pipeline, Not Vanity Metrics
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6">

            {/* Danoosh — featured full width */}
            <Card className="md:col-span-6 pricing-card border-primary" data-testid="featured-testimonial">
              <CardContent className="p-6 md:p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed text-base md:text-lg">
                  "{testimonials[0].text}"
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  {testimonials[0].stats?.map((stat, i) => (
                    <div key={i} className="bg-primary/5 rounded-lg px-4 py-2 text-center">
                      <div className="text-xl font-bold text-primary">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[0].logo}
                      alt="Danoosh Kapadia"
                      className="w-12 h-12 rounded-md object-contain border border-border bg-card"
                      loading="lazy"
                      width="96"
                      height="96"
                    />
                    <div>
                      <div className="font-semibold text-foreground">{testimonials[0].name}</div>
                      <div className="text-sm text-muted-foreground">{testimonials[0].role}</div>
                    </div>
                  </div>
                  <Link
                    href={testimonials[0].caseStudyLink!}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Review the Case Study
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Miss Galit */}
            <Card className="md:col-span-3 pricing-card" data-testid="testimonial-galit">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-4 leading-relaxed flex-1">"{testimonials[1].text}"</p>
                <div className="flex flex-wrap gap-3 mb-4">
                  {testimonials[1].stats?.map((stat, i) => (
                    <div key={i} className="bg-primary/5 rounded-lg px-3 py-1.5 text-center">
                      <div className="text-lg font-bold text-primary">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonials[1].logo}
                    alt="Miss Galit LLC"
                    className="w-12 h-12 rounded-md object-contain p-1"
                    style={{ backgroundColor: testimonials[1].logoBg }}
                    loading="lazy"
                    width="96"
                    height="96"
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-foreground text-sm">{testimonials[1].name}</div>
                    <div className="text-xs text-muted-foreground">{testimonials[1].role}</div>
                  </div>
                  <Link href={testimonials[1].caseStudyLink!} className="text-xs text-primary hover:underline flex items-center gap-1 flex-shrink-0">
                    <ExternalLink className="h-3 w-3" />
                    Case Study
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* NetRanks AI */}
            <Card className="md:col-span-3 pricing-card" data-testid="testimonial-netranks">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-4 leading-relaxed flex-1">"{testimonials[2].text}"</p>
                <div className="flex flex-wrap gap-3 mb-4">
                  {testimonials[2].stats?.map((stat, i) => (
                    <div key={i} className="bg-primary/5 rounded-lg px-3 py-1.5 text-center">
                      <div className="text-lg font-bold text-primary">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonials[2].logo}
                    alt="NetRanks AI"
                    className="w-12 h-12 rounded-md object-contain"
                    loading="lazy"
                    width="96"
                    height="96"
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-foreground text-sm">{testimonials[2].name}</div>
                    <div className="text-xs text-muted-foreground">{testimonials[2].role}</div>
                  </div>
                  <Link href={testimonials[2].caseStudyLink!} className="text-xs text-primary hover:underline flex items-center gap-1 flex-shrink-0">
                    <ExternalLink className="h-3 w-3" />
                    Case Study
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Ian Gilpatrick */}
            <Card className="md:col-span-4 pricing-card" data-testid="pricing-testimonial-ian">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-4 leading-relaxed flex-1">"{testimonials[3].text}"</p>
                <div className="flex items-center gap-3">
                  <img src={testimonials[3].logo} alt="Big Top USA" className="w-10 h-10 rounded-md object-contain" loading="lazy" width="80" height="80" />
                  <div>
                    <div className="font-semibold text-foreground text-sm">{testimonials[3].name}</div>
                    <div className="text-xs text-muted-foreground">{testimonials[3].role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Abdallah Atieh */}
            <Card className="md:col-span-2 pricing-card" data-testid="pricing-testimonial-abdallah">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-4 leading-relaxed text-sm flex-1">"{testimonials[4].text}"</p>
                <div className="flex items-center gap-3">
                  <img src={testimonials[4].logo} alt="AG Construction Management" className="w-10 h-10 rounded-md object-contain" loading="lazy" width="80" height="80" />
                  <div>
                    <div className="font-semibold text-foreground text-sm">{testimonials[4].name}</div>
                    <div className="text-xs text-muted-foreground">{testimonials[4].role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ayan Roy */}
            <Card className="md:col-span-6 pricing-card" data-testid="pricing-testimonial-ayan">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-foreground leading-relaxed">"{testimonials[5].text}"</p>
                  </div>
                  <div className="flex items-center gap-3 md:min-w-[200px]">
                    <img src={testimonials[5].logo} alt="Gratis Intelligence" className="w-10 h-10 rounded-md object-contain" loading="lazy" width="80" height="80" />
                    <div>
                      <div className="font-semibold text-foreground text-sm">{testimonials[5].name}</div>
                      <div className="text-xs text-muted-foreground">{testimonials[5].role}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-6 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            The Questions That Move Founders Off the Fence
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-lg px-6 border"
                data-testid={`pricing-faq-${index}`}
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container px-6 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build the Engine?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Content compounds monthly. Inconsistency resets it. Most founders aren't losing because they don't start. They're losing because they keep restarting.
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 px-12 py-6 text-lg min-h-[3.5rem]"
            asChild
            data-testid="button-pricing-cta"
          >
            <a
              href="https://cal.com/inthefeed/discovery"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackEvent("cta_click", "conversion", "pricing_bottom_cta", 1);
                onSelectPlan?.("Growth");
              }}
            >
              Book a Strategy Call
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
