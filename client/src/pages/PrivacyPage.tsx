import { useEffect } from "react";
import SEO from "@/components/SEO";
import { Link } from "wouter";

export default function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <SEO 
        title="Privacy Policy & Terms of Service - In the Feed"
        description="Review In the Feed's privacy policy and terms of service. Learn how we protect your data, handle payments, and provide transparent service terms for our content marketing services."
        canonical="https://inthefeed.com/privacy"
        keywords="privacy policy, terms of service, data protection, IntheFeed privacy, content marketing terms"
      />

      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy & Terms of Service
            </h1>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed">
              At IntheFeed.com, we're committed to protecting your privacy and providing clear terms for our services. Review our policies below to understand how we handle your information.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              
              <div className="mb-12">
                <div className="flex gap-4 text-sm mb-8">
                  <a 
                    href="mailto:shannon@inthefeed.com" 
                    className="text-primary hover:underline"
                    data-testid="link-contact"
                  >
                    Contact Us
                  </a>
                  <Link 
                    href="/" 
                    className="text-primary hover:underline"
                    data-testid="link-visit-website"
                  >
                    Visit Website
                  </Link>
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-6">Privacy Policy</h2>
                <p className="text-sm text-muted-foreground mb-8">Last Updated: September 4, 2025</p>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4">Who We Are</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      IntheFeed.com is owned and operated by Shannon Kuykendall. Our business address is 1441 NE 136th Avenue #242, Vancouver, WA 98964. For any privacy-related questions, reach us at{" "}
                      <a 
                        href="mailto:shannon@inthefeed.com" 
                        className="text-primary hover:underline"
                        data-testid="link-contact-email"
                      >
                        shannon@inthefeed.com
                      </a>.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4">What Information We Collect</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Only essential personal information is collected, such as name, email, and payment details, strictly for service delivery and business records.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      This information is collected via PayPal during service sign-up. We do not use cookies or other tracking technologies on our site.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      No sensitive personal data (such as health, financial info beyond payment processing, or data from children) is ever collected.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Your data is used to process payments, manage client accounts, measure key business metrics, and deliver marketing communications if you opt in.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      We do not share or sell your personal information to third parties under any circumstances.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4">Your Rights & Choices</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      You may request a copy, correction, or deletion of your personal data at any time by emailing{" "}
                      <a 
                        href="mailto:shannon@inthefeed.com" 
                        className="text-primary hover:underline"
                        data-testid="link-data-rights-email"
                      >
                        shannon@inthefeed.com
                      </a>.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      You can unsubscribe from marketing emails at any time through the opt-out link provided in each communication or by contacting us directly.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      There is no cookie tracking or web analytics on IntheFeed.com, so no related opt-outs are necessary.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4">Legal Compliance</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      IntheFeed.com operates under Washington State law and is committed to general best practices in privacy. If more robust privacy regulations apply to your region, contact us with your request and it will be honored to the fullest extent possible.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-16">
                <h2 className="text-3xl font-bold text-foreground mb-6">Terms of Service</h2>
                <p className="text-sm text-muted-foreground mb-8">Last Updated: September 4, 2025</p>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4">Website Use</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      IntheFeed.com provides content marketing, business consulting, and related communications services. It is an informational site and does not require user account creation or login for access.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Service sign-up is managed externally through PayPal and Metricool; all account management and billing take place on those platforms.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4">Payments & Refunds</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Service payment is required in advance and processed securely through PayPal.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      To cancel a service, send written notice (email) at least 24 hours before the next billing date. If cancelled on time, a full refund will be issued. If work has begun, a partial refund may be provided based on work completed.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4">Communications</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      IntheFeed.com may send marketing emails and newsletters. Users can opt in or out at any time via links in each email or by contacting Shannon directly.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4">Content & Conduct</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The site is for informational purposes only. There are no prohibited behaviors specified, but by using our services, you agree to act in good faith and not misuse provided information or services.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4">Disputes & Modifications</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Any disputes should be addressed by email to{" "}
                      <a 
                        href="mailto:shannon@inthefeed.com" 
                        className="text-primary hover:underline"
                        data-testid="link-disputes-email"
                      >
                        shannon@inthefeed.com
                      </a>. We strive to resolve issues quickly and fairly.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      IntheFeed.com reserves the right to update these policies at any time. Notice of changes will be posted clearly on this page.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-8 border-t">
                <p className="text-center text-muted-foreground">
                  Have questions about our privacy policy or terms?{" "}
                  <a 
                    href="mailto:shannon@inthefeed.com" 
                    className="text-primary hover:underline font-medium"
                    data-testid="link-footer-contact-email"
                  >
                    Contact us
                  </a>{" "}
                  or{" "}
                  <Link 
                    href="/" 
                    className="text-primary hover:underline font-medium"
                    data-testid="link-return-home"
                  >
                    return to homepage
                  </Link>.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
