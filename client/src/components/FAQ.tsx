import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "What if it doesn't work for me?",
      answer: "We're committed to your success. If you're not satisfied with our service, we work with you to make it right. You can cancel anytime with no long-term contracts or penalties."
    },
    {
      question: "How long do I get access?",
      answer: "Your subscription is month-to-month with no long-term contracts. You maintain access as long as your subscription is active, and you can cancel anytime without penalties."
    },
    {
      question: "Is this for beginners or established companies?",
      answer: "In the Feed works for both! We tailor our strategies to your current stage. Whether you're just launching or scaling to 8 figures, our AI + specialist approach adapts to your needs."
    },
    {
      question: "Do I need a marketing team to get started?",
      answer: "Not at all! That's the whole point. We become your marketing team. You just need to have a clear understanding of your product and target audience, we handle everything else."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes! There are no long-term contracts. You can cancel your subscription at any time, and you'll have access through the end of your current billing period."
    },
    {
      question: "How do I access support?",
      answer: "All plans provide email support from our team, ensuring human assistance is always available."
    },
    {
      question: "What makes you different from other content agencies?",
      answer: "We uniquely combine AI technology with human expertise. This means you get the speed and data insights of AI with the creativity and strategic thinking that only experienced content specialists can provide, at a fraction of the cost of traditional agencies."
    },
    {
      question: "How quickly will I see results?",
      answer: "Most clients see measurable improvements in engagement within the first 30 days. Significant revenue impact typically shows up in months 2-3 as your content compounds and your audience grows."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-muted">
      <div className="container px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about In the Feed
          </p>
        </div>
        
        <div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background rounded-lg px-6 border"
                data-testid={`faq-${index}`}
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
      </div>
    </section>
  );
}
