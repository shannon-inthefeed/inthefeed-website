import { Card, CardContent } from "@/components/ui/card";
import { Star, User, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import bigTopLogo from "@assets/IMG_4655_1762560382615.jpeg";
import gratisIQLogo from "@assets/IMG_4657_1762560382615.png";
import agConstructionLogo from "@assets/IMG_4656_1762560382615.png";
import danooshPhoto from "@assets/IMG_5472_1768087836962.png";

export default function SocialProof() {
  const featuredTestimonial = {
    name: "Danoosh Kapadia",
    role: "DK Consulting / +AI",
    rating: 5,
    text: "In the Feed completely transformed my presence on LinkedIn. Over just six months, we went from an underused profile to a channel that now reliably drives consulting work and demands for my +AI training program. I now have 4,700+ engaged followers, 100+ strategic posts, and nearly 54,000 impressions, but the most important outcome was the consulting surge from September to December, traditionally a slow period, where my calendar filled up with qualified inbound inquiries. What I appreciated most was having a professional team own the content strategy, writing, scheduling, and optimization, so I could stay focused on serving clients while my authority and visibility were compounding in the background. If you're a consultant, coach, or service provider who knows LinkedIn should be a serious business development channel, but you don't have the time or consistency to make it work, partnering with In the Feed is one of the highest-ROI decisions you can make.",
    caseStudyLink: "/case-studies/dk-consulting"
  };

  const testimonials = [
    {
      name: "Ian Gilpatrick",
      role: "Big Top USA",
      company: "",
      rating: 5,
      logo: bigTopLogo,
      text: "Working with Shannon and her team has been a breakthrough for our business. Before partnering with them, we had zero LinkedIn presence. Now, just over a year later, our company page has grown to over 1,400+ engaged followers, driving consistent website traffic and generating new leads. Shannon's strategic approach to content delivers real results, and her responsiveness and openness to feedback set her apart."
    },
    {
      name: "Ayan Roy",
      role: "Gratis Intelligence",
      company: "",
      rating: 5,
      logo: gratisIQLogo,
      text: "As a SaaS company with a highly specialized product for bar managers and distributors, we needed a content partner who could truly understand our niche. Shannon and her team exceeded expectations from day one. Since partnering with Shannon, our content has become a powerful lead generator, directly fueling sales growth. The quality and relevance of their work have been a game changer for our business."
    },
    {
      name: "Abdallah Atieh",
      role: "AG Construction Management",
      company: "",
      rating: 5,
      logo: agConstructionLogo,
      text: "Shannon and her team have transformed my construction business's marketing. I needed content that truly spoke to my Cary, NC clientele, and that's exactly what they delivered. Every piece is thoughtfully localized, making our brand stand out in the local market and connect authentically with our customers."
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
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
          <Card 
            className="md:col-span-6 pricing-card border-primary" 
            data-testid="featured-testimonial"
          >
            <CardContent className="p-6 md:p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(featuredTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed text-base md:text-lg">
                "{featuredTestimonial.text}"
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
                    <div className="font-semibold text-foreground">{featuredTestimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{featuredTestimonial.role}</div>
                  </div>
                </div>
                <Link 
                  href={featuredTestimonial.caseStudyLink}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  <ExternalLink className="h-4 w-4" />
                  Review the Case Study
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card 
            className="md:col-span-4 pricing-card" 
            data-testid="testimonial-0"
          >
            <CardContent className="p-6 h-full flex flex-col">
              <div className="flex gap-1 mb-3">
                {[...Array(testimonials[0].rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-4 leading-relaxed flex-1">
                "{testimonials[0].text}"
              </p>
              <div className="flex items-center gap-3">
                <img 
                  src={testimonials[0].logo} 
                  alt={`${testimonials[0].role} company logo - Tech and SaaS content marketing client`}
                  className="w-10 h-10 rounded-md object-contain"
                  loading="lazy"
                  width="80"
                  height="80"
                />
                <div>
                  <div className="font-semibold text-foreground text-sm">{testimonials[0].name}</div>
                  <div className="text-xs text-muted-foreground">{testimonials[0].role}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card 
            className="md:col-span-2 pricing-card" 
            data-testid="testimonial-2"
          >
            <CardContent className="p-6 h-full flex flex-col">
              <div className="flex gap-1 mb-3">
                {[...Array(testimonials[2].rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-4 leading-relaxed text-sm flex-1">
                "{testimonials[2].text}"
              </p>
              <div className="flex items-center gap-3">
                <img 
                  src={testimonials[2].logo} 
                  alt={`${testimonials[2].role} company logo - Tech and SaaS content marketing client`}
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
            </CardContent>
          </Card>

          <Card 
            className="md:col-span-6 pricing-card" 
            data-testid="testimonial-1"
          >
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-1">
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonials[1].rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground leading-relaxed">
                    "{testimonials[1].text}"
                  </p>
                </div>
                <div className="flex items-center gap-3 md:min-w-[200px]">
                  <img 
                    src={testimonials[1].logo} 
                    alt={`${testimonials[1].role} company logo - Tech and SaaS content marketing client`}
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
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
