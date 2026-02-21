import { Card, CardContent } from "@/components/ui/card";
import { Check, Target, Lightbulb, Users, Award } from "lucide-react";
import { Link } from "wouter";
import shannonPhoto from "@assets/IMG_4563_1761839928540.png";
import SEO from "@/components/SEO";
import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "We measure success by your growth, not vanity metrics"
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Blending cutting-edge AI with human creativity"
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Your success is our success, we're in this together"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Elite specialists delivering world-class content"
    }
  ];

  const achievements = [
    "4 years hands-on experience with AI-powered content",
    "Writes 80+ pieces of content monthly",
    "Proven track record growing brands from 0 to 1,400+ followers",
    "Seamless integration of AI and human expertise"
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="About Shannon Kuykendall - Founder of In the Feed | Content Marketing Expert"
        description="Meet Shannon Kuykendall, founder and content strategist at In the Feed. 4 years of AI-powered content expertise, creating 80+ pieces monthly. Learn how we help businesses grow without losing their soul."
        canonical="https://inthefeed.com/about"
        keywords="Shannon Kuykendall, content strategist, AI content expert, In the Feed founder, content marketing professional, Tech and SaaS marketing expert"
      />
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container px-6 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About In the Feed
            </h1>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed">
              We're on a mission to help Tech and SaaS companies dominate their markets through exceptional content marketing
            </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container px-6 max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
                <img 
                  src={shannonPhoto} 
                  alt="Shannon Kuykendall - Founder & Content Strategist at In the Feed, Content Marketing Expert" 
                  className="rounded-xl shadow-2xl w-full max-w-md lg:max-w-none"
                  data-testid="img-founder"
                  loading="lazy"
                  width="600"
                  height="800"
                />
              </div>
              
              <div className="order-1 lg:order-2 text-center lg:text-left">
                <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                  Meet Your Content Partner
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Hey there, I'm Shannon Kuykendall
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed mb-8">
                  <p>
                    As a founder with over two decades of entrepreneurial experience, I've built businesses, developed content marketing strategies, lived abroad, traveled extensively, and now embrace life as an empty nester. For the past four years, I've immersed myself in AI-driven content creation; producing more than 80 pieces each month, while consistently preserving an authentic, human touch in my work.
                  </p>
                  <p className="font-medium text-foreground italic">
                    "In the Feed is my love letter to businesses who want to grow without losing their soul. Let's make your story the one people remember."
                  </p>
                </div>
                
                <div className="space-y-3 flex flex-col items-center lg:items-start">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={index} 
                      className="flex gap-3 items-start"
                      data-testid={`achievement-${index}`}
                    >
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center py-16 border-t">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    In the Feed was born from a simple observation: most Tech and SaaS companies struggle with producing consistent content marketing; not because they lack talent, but because they lack the right resources and systems.
                  </p>
                  <p>
                    We've combined the precision and speed of AI technology with the creativity and strategic thinking of world-class content specialists to create a <span className="underline">unique hybrid model</span> that delivers results at scale.
                  </p>
                  <p>
                    Today, we're proud to partner with fast-growing Tech and SaaS companies across industries, helping them achieve <span className="underline">sustainable growth through transparent pricing</span> and content that actually converts.
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
                        <p className="text-sm text-muted-foreground">
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

      <section className="py-16 md:py-20 bg-muted">
        <div className="container px-6 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why We Do What We Do
            </h2>
            <div className="text-lg text-muted-foreground leading-relaxed mb-8 space-y-4">
              <p>
                We believe every Tech and SaaS company deserves access to world-class content marketing, regardless of size or budget. Our mission is to democratize elite content creation through technology and expertise, helping companies grow faster and smarter.
              </p>
              <p>
                Explore our{" "}
                <Link href="/pricing" className="text-primary font-medium underline">
                  flexible pricing plans
                </Link>{" "}
                designed for every stage of growth.
              </p>
            </div>
            <p className="text-xl font-semibold text-primary">
              <Link href="/#process" className="underline">
                Let's build something amazing together.
              </Link>
            </p>
        </div>
      </section>
    </div>
  );
}
