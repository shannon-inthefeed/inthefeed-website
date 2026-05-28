import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LandingPage from "@/pages/LandingPage";
import AboutPage from "@/pages/AboutPage";
import PricingPage from "@/pages/PricingPage";
import PrivacyPage from "@/pages/PrivacyPage";
import ContactPage from "@/pages/ContactPage";
import CaseStudyDK from "@/pages/CaseStudyDK";
import CaseStudyGalit from "@/pages/CaseStudyGalit";
import CaseStudyNetRanks from "@/pages/CaseStudyNetRanks";
import BlogIndex from "@/pages/BlogIndex";
import BlogPost1 from "@/pages/blog/BestLinkedInAgenciesSaas";
import BlogPost2 from "@/pages/blog/LinkedInStrategyPostRevenue";
import BlogPost3 from "@/pages/blog/LinkedInGhostwriterCost";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";
import { initGA } from "./lib/analytics";
import { useAnalytics } from "./hooks/use-analytics";

function Router() {
  useAnalytics();

  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/pricing">
        {() => <PricingPage onSelectPlan={(plan) => console.log(`Selected: ${plan}`)} />}
      </Route>
      <Route path="/privacy" component={PrivacyPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/case-studies/dk-consulting" component={CaseStudyDK} />
      <Route path="/case-studies/miss-galit" component={CaseStudyGalit} />
      <Route path="/case-studies/netranks-ai" component={CaseStudyNetRanks} />
      <Route path="/blog" component={BlogIndex} />
      <Route path="/blog/best-linkedin-content-agencies-saas-founders-2026" component={BlogPost1} />
      <Route path="/blog/linkedin-content-strategy-post-revenue-saas-founders" component={BlogPost2} />
      <Route path="/blog/linkedin-ghostwriter-cost-2026" component={BlogPost3} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    if (!import.meta.env.VITE_GA_MEASUREMENT_ID) {
      console.warn("Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID");
    } else {
      initGA();
    }
  }, []);

  const handleCtaClick = () => {
    console.log("CTA clicked - would open contact form");
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col">
          <Navigation onCtaClick={handleCtaClick} />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
