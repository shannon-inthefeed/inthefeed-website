import HeroSection from "@/components/HeroSection";
import ExpandedPromise from "@/components/ExpandedPromise";
import VSLSection from "@/components/VSLSection";
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
            element.scrollIntoView({ behavior: 'smooth' });
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
    console.log('CTA clicked - would open contact form or redirect to signup');
  };

  const handleVideoClick = () => {
    console.log('Video clicked - would play VSL');
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="In the Feed - Content That Delivers for Tech & SaaS Teams That Move Fast"
        description="Your business deserves content that drives results. In the Feed is the only service offering seamless integration of cutting-edge AI and elite content specialists, delivering tailored marketing plans for companies ready to dominate their field."
        canonical="https://inthefeed.com/"
        keywords="content marketing, Tech and SaaS content, AI content creation, social media management, content strategy, digital marketing, LinkedIn marketing, content automation, tech marketing, SaaS content marketing"
      />
      <HeroSection onCtaClick={handleCtaClick} onVideoClick={handleVideoClick} />
      <ExpandedPromise />
      <VSLSection onPlay={handleVideoClick} />
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
