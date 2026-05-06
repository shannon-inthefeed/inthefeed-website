import HeroSection from "@/components/HeroSection";
import ExpandedPromise from "@/components/ExpandedPromise";
import SocialProof from "@/components/SocialProof";
import ResultsSection from "@/components/ResultsSection";
import ProblemStatement from "@/components/ProblemStatement";
import BenefitsSection from "@/components/BenefitsSection";
import SolutionIntro from "@/components/SolutionIntro";
import SingleBenefitHighlight from "@/components/SingleBenefitHighlight";
import MidPageCTA from "@/components/MidPageCTA";
import Timeline from "@/components/Timeline";
import WhatsIncluded from "@/components/WhatsIncluded";
import PostInclusionBreakdown from "@/components/PostInclusionBreakdown";
import PostInclusionCTA from "@/components/PostInclusionCTA";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import SEO from "@/components/SEO";
import { useEffect } from "react";
import { useLocation } from "wouter";

export default function LandingPage() {
  const [location] = useLocation();

  useEffect(() => {
    const hash = window.location.hash;

    const scrollToElement = () => {
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          requestAnimationFrame(() => {
            element.scrollIntoView({ behavior: "smooth" });
          });
          return true;
        }
      }
      return false;
    };

    if (!scrollToElement()) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const handleCtaClick = () => {
    console.log("CTA clicked");
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="In the Feed - The Founder Exit™ | Done-For-You Content Engine for B2B SaaS Founders"
        description="We build and run your content engine. You approve once a month. Inbound sales conversations start finding you. Built for B2B tech and SaaS founders with proven products and existing clients."
        canonical="https://inthefeed.com/"
        keywords="B2B SaaS content engine, founder content strategy, LinkedIn inbound pipeline, done-for-you content marketing, SaaS founder marketing, The Founder Exit, content agency for SaaS"
      />
      <HeroSection onCtaClick={handleCtaClick} />
      <ExpandedPromise />
      <SocialProof />
      <ResultsSection />
      <ProblemStatement />
      <BenefitsSection />
      <SolutionIntro />
      <SingleBenefitHighlight />
      <MidPageCTA onCtaClick={handleCtaClick} />
      <Timeline />
      <WhatsIncluded />
      <PostInclusionBreakdown />
      <PostInclusionCTA onCtaClick={handleCtaClick} />
      <FAQ />
      <FinalCTA onCtaClick={handleCtaClick} />
    </div>
  );
}
