import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import darkLogo from "@assets/IMG_4565_1761839928540.png";

interface NavigationProps {
  onCtaClick?: () => void;
}

export default function Navigation({ onCtaClick }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container px-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-20">
          <Link 
            href="/" 
            className="flex items-center" 
            data-testid="link-home-logo"
            onClick={handleHomeClick}
          >
            <img 
              src={darkLogo} 
              alt="In the Feed Logo - Content Marketing Service for Tech & SaaS" 
              className="h-8 md:h-10 w-auto"
              loading="eager"
              width="200"
              height="80"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === link.href 
                    ? 'text-primary' 
                    : 'text-muted-foreground'
                }`}
                data-testid={`link-${link.label.toLowerCase().replace(' ', '-')}`}
                onClick={link.href === "/" ? handleHomeClick : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Button
              className="bg-primary text-primary-foreground border-primary-border"
              asChild
              data-testid="button-nav-cta"
            >
              <a 
                href="https://cal.com/inthefeed/discovery" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => onCtaClick?.()}
              >
                Get Started
              </a>
            </Button>
          </div>

          <button
            className="md:hidden p-2 hover-elevate rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-6 space-y-4 border-t">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`block text-base font-medium ${
                  location === link.href 
                    ? 'text-primary' 
                    : 'text-foreground'
                }`}
                onClick={(e) => {
                  setIsMenuOpen(false);
                  if (link.href === "/") {
                    handleHomeClick(e);
                  }
                }}
                data-testid={`link-mobile-${link.label.toLowerCase().replace(' ', '-')}`}
              >
                {link.label}
              </Link>
            ))}
            <Button 
              className="w-full bg-primary text-primary-foreground border-primary-border"
              asChild
              data-testid="button-mobile-cta"
            >
              <a 
                href="https://cal.com/inthefeed/discovery" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
