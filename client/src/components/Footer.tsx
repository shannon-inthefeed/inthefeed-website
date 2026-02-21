import { Link } from "wouter";
import { Linkedin, Zap } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import lightLogo from "@assets/IMG_4566_1761839928540.png";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container px-6 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img 
                src={lightLogo} 
                alt="In the Feed Logo - Content Marketing Service"
                className="h-8 w-auto mb-4 opacity-90"
                loading="lazy"
                width="200"
                height="80"
              />
              <p className="text-sm opacity-80 mb-4">
                Content Marketing That Delivers for Tech & SaaS Teams That Move Fast
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/stkuykendall" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="opacity-80 hover-elevate rounded-md p-1"
                  aria-label="Follow Shannon Kuykendall on LinkedIn"
                  data-testid="link-linkedin"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://wa.me/18052030564?text=Welcome%20to%20In%20the%20Feed%2C%20how%20may%20I%20help%20you%3F" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100 hover-elevate rounded-md p-1 text-[#25D366]"
                  aria-label="Chat with us on WhatsApp"
                  data-testid="link-whatsapp"
                >
                  <SiWhatsapp className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>
                  <a href="#whats-included" className="hover-elevate" data-testid="link-footer-features">
                    Features
                  </a>
                </li>
                <li>
                  <Link href="/pricing" className="hover-elevate" data-testid="link-footer-pricing">
                    Pricing
                  </Link>
                </li>
                <li>
                  <a href="#testimonials" className="hover-elevate" data-testid="link-footer-testimonials">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#process" className="hover-elevate" data-testid="link-footer-process">
                    How It Works
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>
                  <Link href="/about" className="hover-elevate" data-testid="link-footer-about">
                    About Us
                  </Link>
                </li>
                <li>
                  <a href="#faq" className="hover-elevate" data-testid="link-footer-faq">
                    FAQ
                  </a>
                </li>
                <li>
                  <Link href="/contact" className="hover-elevate" data-testid="link-footer-contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Trusted Partners</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>
                  <a
                    href="https://www.keyprinciplestosuccess.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-elevate"
                    data-testid="partner-0"
                    aria-label="Visit Key Principles to Success website"
                  >
                    Key Principles to Success
                  </a>
                </li>
                <li>
                  <a
                    href="https://appsquatch.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-elevate"
                    data-testid="partner-1"
                    aria-label="Visit AppSquatch website"
                  >
                    AppSquatch
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm opacity-60">
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <p>&copy; 2025 In the Feed. All rights reserved.</p>
                <a
                  href="https://appsquatch.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover-elevate transition-opacity hover:opacity-100"
                  data-testid="link-powered-by-appsquatch"
                  aria-label="Website built by AppSquatch"
                >
                  <Zap className="h-3.5 w-3.5" />
                  <span>Powered by AppSquatch</span>
                </a>
              </div>
              <Link 
                href="/privacy" 
                className="hover-elevate"
                data-testid="link-footer-privacy"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
      </div>
    </footer>
  );
}
