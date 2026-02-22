import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, HelpCircle, Shield, Zap, Users, Building2, Video, User, Briefcase, Rocket, Star, ExternalLink, Calendar, Download, Target } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Link } from "wouter";
import { useState, useEffect } from "react";
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

interface AddOn {
  icon: typeof Video;
  title: string;
  description: string;
  eurPrice: number;
  gbpPrice: number;
  usdPrice: number;
  priceLabel: string;
}

interface Plan {
  name: string;
  monthlyPrice: number;
  eurPrice: number;
  gbpPrice: number;
  launchPrice: number;
  description: string;
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
      description: "4 videos/month to boost engagement",
      eurPrice: 500,
      gbpPrice: 500,
      usdPrice: 500,
      priceLabel: "/month"
    },
    {
      icon: Users,
      title: "Add Team Members",
      description: "Add senior leaders or key voices to the content calendar. Each team member gets strategy, copy, and content posted under their own profile.",
      eurPrice: 250,
      gbpPrice: 250,
      usdPrice: 250,
      priceLabel: "/profile/month"
    },
    {
      icon: Building2,
      title: "Company Page Management",
      description: "For clients whose primary is personal profile. Company page gets 4-8 aligned posts/month, announcements, and optimization.",
      eurPrice: 250,
      gbpPrice: 250,
      usdPrice: 250,
      priceLabel: "/month"
    }
  ];

 const plans: Plan[] = [
    {
      name: "Starter Plan",
      monthlyPrice: 1500,
      eurPrice: 1500,
      launchPrice: 4500,
      description: "90-Day Launch Phase: One Channel. We build your Authority Architecture on your personal LinkedIn or Company Page.",
      features: [
        "90-Day Initial Commitment (Billed Upfront), then €1,500/mo",
        "4 long-form posts a month (Authority-building & Carousels)",
        "16-20 short posts a month to maintain high-frequency feed presence",
        "4 SEO-optimized blog posts a month for your website",
        "Branded images and custom creatives (infographics & carousels) for every piece of content.",
        "Monthly Performance Report: Lead signal & engagement audit",
        "Monthly Strategic Direction: Pivot & planning session",
        "KPI Dashboard: Access to Metricool's platform",
        "Dedicated Content Strategist: Shannon Kuykendall",
        "Premium support from a real human"
      ],
      addOns: commonAddOns,
      cta: "Book Your Strategy Call",
      whatsappLink: "https://wa.me/18052030564?text=Hi%20Shannon%2C%20I'm%20interested%20in%20the%20Starter%20Plan%20(€1,500/month)."
    },
    {
      name: "Growth Plan",
      monthlyPrice: 1750,
      eurPrice: 1750,
      launchPrice: 5250, // Added: 3-month upfront total (1750 * 3)
      description: "90-Day Launch Phase: Four Channels.",
      popular: true,
      features: [
        "90-Day Initial Commitment (Billed Upfront), then €1,750/mo",
        "Everything from Starter Plan",
        "Up to 4 channels managed for you",
        "60+ posts a month (yes, really)",
        "Consistent, high-quality messaging across every platform",
        "All the strategy, images, and support you need",
        "Perfect for teams who want to dominate their space"
      ],
      addOns: commonAddOns,
      cta: "Get Started with Growth",
      whatsappLink: "https://wa.me/18052030564?text=Hi%20Shannon%2C%20I'm%20interested%20in%20the%20Growth%20Plan%20(€1,750/month)."
    },
   {
      name: "Scale Plan",
      monthlyPrice: 2500,
      eurPrice: 2500,
      launchPrice: 7500, // Added: 3-month upfront total (2500 * 3)
      description: "90-Day Launch Phase: Full-scale content domination including video and cross-platform distribution.",
      features: [
        "90-Day Initial Commitment (Billed Upfront), then €2,500/mo",
        "Everything from Starter & Growth Plans",
        "80+ posts a month across all your channels",
        "AI Video content (with or without you on camera)",
        "Up to 3 videos a week",
        "TikTok and YouTube included",
        "Look like you have a full marketing department, without hiring one"
      ],
      addOns: commonAddOns.slice(1),
      cta: "Scale Your Content Now",
      whatsappLink: "https://wa.me/18052030564?text=Hi%20Shannon%2C%20I'm%20interested%20in%20the%20Scale%20Plan%20(€2,500/month)."
    }
  ];
  
  const faqs = [
    {
      question: "How quickly will I see ROI from In the Feed?",
      answer: "Most clients see measurable engagement lifts (LinkedIn followers, website traffic, inbound inquiries) within 30 days. Our clients report 3x–5x ROI compared to hiring an in-house content manager, thanks to our AI-assisted efficiency and zero management overhead."
    },
    {
      question: "I already have an in-house marketing team. Can In the Feed still help?",
      answer: "Absolutely! In the Feed works best as a content production partner that frees your team to focus on strategy, campaigns, and growth initiatives. We handle the heavy lifting, content calendars, writing, design, and scheduling, so your team can do what they do best without burnout."
    },
    {
      question: "What does 'one primary channel' mean?",
      answer: "Each plan covers ONE main LinkedIn profile, either your personal profile OR your company page. You choose which one is your primary focus, and we build your entire content strategy around it."
    },
    {
      question: "Can I add more team members or a company page?",
      answer: "Yes! You can add as many team member profiles or company pages as you need at the add-on rate (+€250 / £250 / $250 each per month). This is perfect for amplifying your reach through senior leaders, key voices, or coordinated company messaging."
    },
    {
      question: "Can I switch plans later?",
      answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express & Discover) and ACH bank transfers accepted for annual plans paid in advance."
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees, ever. The price you see is the price you pay."
    },
    {
      question: "What if I'm not satisfied?",
      answer: "Your satisfaction is our priority. If our service isn't meeting your expectations, we'll work with you to make it right. You can cancel anytime with no penalties."
    }
  ];

  const trustBadges = [
    { icon: Shield, text: "100% Satisfaction Guaranteed" },
    { icon: Zap, text: "Setup in 48 Hours" },
    { icon: HelpCircle, text: "No Long-Term Contracts" },
    { icon: Target, text: "Results in 30 Days" }
  ];

  const testimonials = [
    {
      name: "Danoosh Kapadia",
      role: "DK Consulting / +AI",
      logo: null,
      featured: true,
      text: "In the Feed completely transformed my presence on LinkedIn. Over just six months, we went from an underused profile to a channel that now reliably drives consulting work and demands for my +AI training program. I now have 4,700+ engaged followers, 100+ strategic posts, and nearly 54,000 impressions, but the most important outcome was the consulting surge from September to December, traditionally a slow period, where my calendar filled up with qualified inbound inquiries. What I appreciated most was having a professional team own the content strategy, writing, scheduling, and optimization, so I could stay focused on serving clients while my authority and visibility were compounding in the background. If you're a consultant, coach, or service provider who knows LinkedIn should be a serious business development channel, but you don't have the time or consistency to make it work, partnering with In the Feed is one of the highest-ROI decisions you can make.",
      caseStudyLink: "/case-studies/dk-consulting"
    },
    {
      name: "Ian Gilpatrick",
      role: "Big Top USA",
      logo: bigTopLogo,
      featured: false,
      text: "Working with Shannon and her team has been a breakthrough for our business. Before partnering with them, we had zero LinkedIn presence. Now, just over a year later, our company page has grown to over 1,400+ engaged followers, driving consistent website traffic and generating new leads. Shannon's strategic approach to content delivers real results, and her responsiveness and openness to feedback set her apart."
    },
    {
      name: "Ayan Roy",
      role: "Gratis Intelligence",
      logo: gratisIQLogo,
      featured: false,
      text: "As a SaaS company with a highly specialized product for bar managers and distributors, we needed a content partner who could truly understand our niche. Shannon and her team exceeded expectations from day one. Since partnering with Shannon, our content has become a powerful lead generator, directly fueling sales growth. The quality and relevance of their work have been a game changer for our business."
    },
    {
      name: "Abdallah Atieh",
      role: "AG Construction Management",
      logo: agConstructionLogo,
      featured: false,
      text: "Shannon and her team have transformed my construction business's marketing. I needed content that truly spoke to my Cary, NC clientele, and that's exactly what they delivered. Every piece is thoughtfully localized, making our brand stand out in the local market and connect authentically with our customers."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Pricing Plans - In the Feed | Content Marketing from $1,500/month"
        description="Transparent pricing for AI-powered content marketing. Starter ($1,500), Growth ($1,750), Scale ($2,500). No contracts, cancel anytime. 60+ posts/month, SEO blogs, branded graphics included."
        canonical="https://inthefeed.com/pricing"
        keywords="content marketing pricing, Tech and SaaS content pricing, social media management cost, content strategy pricing, affordable content marketing, LinkedIn marketing pricing, tech marketing pricing"
      />
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container px-6 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Simple, Transparent Pricing.<br />
              Built for Growth.
            </h1>
            <div className="text-lg md:text-xl opacity-90 leading-relaxed space-y-2">
              <p>Get enterprise-quality content without the enterprise budget. Choose your plan, cancel anytime.</p>
              <p>
                <Link href="/about" className="underline hover:opacity-80">
                  Learn more about our story
                </Link>.
              </p>
            </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted">
        <div className="container px-6 max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            Why In the Feed Delivers More ROI Than Hiring In-House
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="text-center" data-testid="roi-inhouse">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-muted-foreground/10 flex items-center justify-center mx-auto mb-4">
                  <User className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-3">In-House Team</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">€6,000–€10,000/month</p>
                  <p>(salary + tools + management time)</p>
                  <p className="pt-2">4–6 weeks to hire & onboard</p>
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
                  <p className="font-medium text-foreground">€5,000–€15,000/month</p>
                  <p>(high retainers, long contracts)</p>
                  <p className="pt-2">2–4 weeks kickoff</p>
                  <p>High quality but slow turnaround</p>
                  <p>Limited flexibility</p>
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
                  <p className="font-bold text-primary text-lg">€1,500–€2,500/month</p>
                  <p className="text-muted-foreground">(all-inclusive, cancel anytime)</p>
                  <p className="pt-2 text-foreground font-medium">48 hours to first calendar</p>
                  <p className="text-foreground font-medium">AI + human hybrid: speed + quality</p>
                  <p className="text-foreground font-medium">Dedicated strategist (Shannon)</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <p className="text-center text-lg text-foreground font-medium">
            Get the output of a full marketing department at a fraction of the cost, with zero management headaches.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary/15 dark:bg-primary/20">
        <div className="container px-6 max-w-3xl mx-auto">
          <Card className="border-0 bg-white dark:bg-card shadow-xl" data-testid="sample-calendar-cta">
            <CardContent className="p-8 text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                Not Sure What to Expect?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Download a free sample content calendar so you can see exactly what we deliver, complete with post dates, channels, asset types, themes, headlines, and SEO keywords.
              </p>
              <div className="flex justify-center">
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
                      trackEvent('lead_magnet_download', 'conversion', 'sample_calendar', 1);
                    }}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Free Sample Calendar
                  </a>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                No email required. Instant access.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container px-6 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => {
              const price = plan.monthlyPrice;
              
              return (
                <Card 
                  key={index} 
                  className={`relative pricing-card ${plan.popular ? 'prism-border shadow-xl border-transparent' : ''}`}
                  data-testid={`pricing-plan-${index}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                 <CardHeader className="text-center pb-8 pt-8">
    <h3 className="text-2xl font-bold text-foreground mb-2">
      {plan.name}
    </h3>
    <p className="text-sm text-muted-foreground mb-6">
      {plan.description}
    </p>
    <div className="mb-2 space-y-1">
      {plan.launchPrice ? (
        <>
          <div className="text-2xl font-bold text-foreground">
            €{plan.launchPrice.toLocaleString()}
          </div>
          <div className="text-sm font-semibold text-primary">
            90-Day Launch Phase (Billed Upfront)
          </div>
          <div className="text-xs text-muted-foreground italic">
            (Equates to €{plan.eurPrice.toLocaleString()}/mo)
          </div>
        </>
      ) : (
        <>
          <div className="text-2xl font-bold text-foreground">
            €{plan.eurPrice.toLocaleString()}
          </div>
          <div className="text-sm text-muted-foreground">
            per month
          </div>
        </>
      )}
    </div>
    <p className="text-xs text-muted-foreground">
      No contract. Cancel Anytime After First 90 Days.
    </p>
  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div className="space-y-3 mb-4">
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
                            ? 'bg-primary text-primary-foreground border-primary-border' 
                            : index === 1 
                            ? 'bg-secondary text-secondary-foreground border-secondary-border' 
                            : 'bg-accent text-accent-foreground border-accent-border'
                        }`}
                        asChild
                        data-testid={`button-select-plan-${index}`}
                      >
                        <a 
                          href="https://cal.com/inthefeed/discovery" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          onClick={() => {
                            trackEvent('plan_select', 'conversion', `pricing_${plan.name.toLowerCase().replace(' ', '_')}`, plan.monthlyPrice);
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
                          trackEvent('whatsapp_click', 'conversion', `pricing_${plan.name.toLowerCase().replace(' ', '_')}_whatsapp`, 1);
                        }}
                        data-testid={`button-whatsapp-${index}`}
                      >
                        <SiWhatsapp className="h-5 w-5" />
                        Chat on WhatsApp
                      </a>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="flex flex-wrap justify-center gap-8 mb-16">
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

      <section className="py-16 md:py-24 bg-background" id="pricing-testimonials">
        <div className="container px-6 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary mb-2 uppercase tracking-wide">
              Trusted by Fast-Growing Tech & SaaS Companies
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6">
            {/* Featured testimonial - Danoosh */}
            {testimonials.filter(t => t.featured).map((testimonial, index) => (
              <Card 
                key={`featured-${index}`} 
                className="md:col-span-6 pricing-card border-primary" 
                data-testid="featured-testimonial"
              >
                <CardContent className="p-6 md:p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 leading-relaxed text-base md:text-lg">
                    "{testimonial.text}"
                  </p>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <img 
                        src={danooshPhoto} 
                        alt="Danoosh Kapadia - DK Consulting"
                        className="w-12 h-12 rounded-md object-contain border border-border bg-card"
                        loading="lazy"
                        width="96"
                        height="96"
                      />
                      <div>
                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                    {'caseStudyLink' in testimonial && testimonial.caseStudyLink && (
                      <Link 
                        href={testimonial.caseStudyLink as string}
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Review the Case Study
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Ian Gilpatrick - 4 columns */}
            <Card className="md:col-span-4 pricing-card" data-testid="pricing-testimonial-0">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-4 leading-relaxed flex-1">
                  "{testimonials[1].text}"
                </p>
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonials[1].logo!} 
                    alt={`${testimonials[1].role} company logo`}
                    className="w-10 h-10 rounded-md object-contain"
                    loading="lazy"
                    width="80"
                    height="80"
                  />
                  <div>
                    <div className="font-semibold text-foreground text-sm">{testimonials[1].name}</div>
                    <div className="text-xs text-muted-foreground">{testimonials[1].role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Abdallah Atieh - 2 columns (shorter) */}
            <Card className="md:col-span-2 pricing-card" data-testid="pricing-testimonial-2">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-4 leading-relaxed text-sm flex-1">
                  "{testimonials[3].text}"
                </p>
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonials[3].logo!} 
                    alt={`${testimonials[3].role} company logo`}
                    className="w-10 h-10 rounded-md object-contain"
                    loading="lazy"
                    width="80"
                    height="80"
                  />
                  <div>
                    <div className="font-semibold text-foreground text-sm">{testimonials[3].name}</div>
                    <div className="text-xs text-muted-foreground">{testimonials[3].role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ayan Roy - full width horizontal */}
            <Card className="md:col-span-6 pricing-card" data-testid="pricing-testimonial-1">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-foreground leading-relaxed">
                      "{testimonials[2].text}"
                    </p>
                  </div>
                  <div className="flex items-center gap-3 md:min-w-[200px]">
                    <img 
                      src={testimonials[2].logo!} 
                      alt={`${testimonials[2].role} company logo`}
                      className="w-10 h-10 rounded-md object-contain"
                      loading="lazy"
                      width="80"
                      height="80"
                    />
                    <div>
                      <div className="font-semibold text-foreground text-sm">{testimonials[2].name}</div>
                      <div className="text-xs text-muted-foreground">{testimonials[2].role}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Pricing FAQs
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
                    <span className="font-semibold text-foreground pr-4">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container px-6 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Join leading Tech & SaaS teams growing with In the Feed.
              <br />
              <Link href="/#testimonials" className="underline hover:opacity-80">
                Read their success stories
              </Link>{" "}
              or{" "}
              <Link href="/#process" className="underline hover:opacity-80">
                see how it works
              </Link>.
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
                  trackEvent('cta_click', 'conversion', 'pricing_bottom_cta', 1);
                  onSelectPlan?.('Growth');
                }}
              >
                Choose Your Plan
              </a>
            </Button>
        </div>
      </section>
    </div>
  );
}
