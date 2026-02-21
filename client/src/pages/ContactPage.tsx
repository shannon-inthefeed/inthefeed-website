import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageSquare, User, Send } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import SEO from "@/components/SEO";
import { useEffect } from "react";

export default function ContactPage() {
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: ""
    }
  });

  const submitContactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await fetch("https://formspree.io/f/xovyqdyn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error("Failed to submit form");
      }
      
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly.",
        variant: "destructive"
      });
    }
  });

  const onSubmit = (data: InsertContact) => {
    submitContactMutation.mutate(data);
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Contact In the Feed - Get in Touch About Content Marketing"
        description="Have questions about our content marketing services? Fill out our contact form and our team will get back to you within 24 hours."
        canonical="https://inthefeed.com/contact"
      />

      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary to-secondary overflow-hidden">
        <div className="container px-6 max-w-3xl mx-auto relative z-10 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Talk About Your Content Strategy
            </h1>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed">
              Not ready to schedule a call? No problem. Send us a message and we'll get back to you within 24 hours.
            </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container px-6 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-md">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Quick Questions</h3>
                      <p className="text-muted-foreground text-sm">
                        Use this form for general inquiries, pricing questions, or to learn more about our services.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-md">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Ready to Get Started?</h3>
                      <p className="text-muted-foreground text-sm">
                        If you're ready to transform your content strategy, 
                        <a 
                          href="https://cal.com/inthefeed/discovery" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline ml-1"
                        >
                          schedule a discovery call
                        </a>.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardContent className="p-8 md:p-12">
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      Name *
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      {...form.register("name")}
                      data-testid="input-contact-name"
                      className="min-h-[48px]"
                    />
                    {form.formState.errors.name && (
                      <p className="text-sm text-destructive">{form.formState.errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      {...form.register("email")}
                      data-testid="input-contact-email"
                      className="min-h-[48px]"
                    />
                    {form.formState.errors.email && (
                      <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      placeholder="Your company name (optional)"
                      {...form.register("company")}
                      data-testid="input-contact-company"
                      className="min-h-[48px]"
                    />
                    {form.formState.errors.company && (
                      <p className="text-sm text-destructive">{form.formState.errors.company.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-muted-foreground" />
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your content marketing needs..."
                      rows={6}
                      {...form.register("message")}
                      data-testid="input-contact-message"
                      className="resize-none"
                    />
                    {form.formState.errors.message && (
                      <p className="text-sm text-destructive">{form.formState.errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90"
                    disabled={submitContactMutation.isPending}
                    data-testid="button-submit-contact"
                  >
                    {submitContactMutation.isPending ? (
                      <>Sending...</>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-muted-foreground">
                    * Required fields. We respect your privacy and will never share your information.
                  </p>
                </form>
              </CardContent>
            </Card>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                Prefer to connect directly?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="https://www.linkedin.com/in/stkuykendall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                  data-testid="link-contact-linkedin"
                >
                  Connect on LinkedIn
                </a>
                <span className="hidden sm:inline text-muted-foreground">•</span>
                <a 
                  href="https://wa.me/18052030564?text=Welcome%20to%20In%20the%20Feed%2C%20how%20may%20I%20help%20you%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#25D366] hover:underline font-medium"
                  data-testid="link-contact-whatsapp"
                >
                  <SiWhatsapp className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
                <span className="hidden sm:inline text-muted-foreground">•</span>
                <a 
                  href="https://cal.com/inthefeed/discovery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                  data-testid="link-contact-discovery"
                >
                  Schedule a Discovery Call
                </a>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
}
