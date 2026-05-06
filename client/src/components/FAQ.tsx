import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "What is The Founder Exit™?",
      answer:
        "The Founder Exit™ is our core framework: Position, Extract, Build, Distribute, Exit. We define your positioning, extract your thinking in one 90-minute session, build and publish your content, and remove you from the production loop entirely. The engine runs. Inbound compounds. You focus on closing, not creating.",
    },
    {
      question: "Is this for founders just starting out or established companies?",
      answer:
        "In the Feed is built for B2B tech and SaaS founders with proven products and existing clients who are past the survival phase. If you're pre-revenue or still finding product-market fit, we're likely not the right fit yet. This works when there's something worth amplifying.",
    },
    {
      question: "How quickly will I see results?",
      answer:
        "Pipeline signals, inbound DMs, and buyers citing your content typically start appearing at months 2 to 3. Full compounding, where your calendar fills regularly with qualified inbound, comes at months 4 to 6. Anyone promising a transformed pipeline in 30 days is selling you something else.",
    },
    {
      question: "How much of my time does this take?",
      answer:
        "After the initial extraction session in week one (90 minutes), your involvement is a monthly approval pass of 30 to 60 minutes. That's it. Everything else runs without you. If you're currently spending more than that on content and getting no pipeline, that's the gap we're closing.",
    },
    {
      question: "What if the content doesn't sound like me?",
      answer:
        "We build from your real conversations, calls, Looms, voice notes, and emails, not guesswork. The first month includes voice calibration. If it doesn't sound like you, we rewrite it. No charge, no argument. This only works if it sounds like you. That's not a nice-to-have. It's the whole point.",
    },
    {
      question: "What's the contract?",
      answer:
        "Every plan starts with a 90-day launch block, billed upfront. After that, it's month-to-month. Cancel anytime with no penalties. Everything we build stays yours: the strategy, the calendar, the content, the voice guide. No lock-in. No black box.",
    },
    {
      question: "What makes you different from other content agencies?",
      answer:
        "Most agencies optimise for output. We optimise for pipeline. Clients have performance dashboards, a shared collaboration workspace, and content approval before anything goes live. Nothing is a black box. Every piece of content is tied to a strategy. Every strategy is tied to pipeline, not impressions.",
    },
    {
      question: "What's the guarantee?",
      answer:
        "Execution guarantee: if we don't deliver strategy, content, and publishing in a given month, you don't pay for that month. No argument. And when you leave, everything we built goes with you.",
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-muted">
      <div className="container px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The questions that move founders off the fence.
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
