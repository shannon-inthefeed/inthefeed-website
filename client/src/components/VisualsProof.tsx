import dashboardMockup from "@assets/generated_images/Dashboard_interface_mockup_9f919017.png";
import contentFlow from "@assets/generated_images/Content_flow_illustration_6a0dbcfa.png";

export default function VisualsProof() {
  const visuals = [
    {
      image: dashboardMockup,
      title: "Real-Time Analytics Dashboard",
      description: "Track performance and ROI at a glance"
    },
    {
      image: contentFlow,
      title: "Seamless Content Workflow",
      description: "From ideation to publication, fully automated"
    },
    {
      image: dashboardMockup,
      title: "AI-Powered Insights",
      description: "Know what content to create before your competitors"
    },
    {
      image: contentFlow,
      title: "Multi-Platform Publishing",
      description: "One dashboard, all your channels"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            See Our Platform in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A powerful dashboard that puts you in control of your content empire
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {visuals.map((visual, index) => (
            <div 
              key={index} 
              className="group"
              data-testid={`visual-${index}`}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={visual.image} 
                  alt={visual.title} 
                  className="w-full h-auto"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {visual.title}
                </h3>
                <p className="text-muted-foreground">
                  {visual.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
