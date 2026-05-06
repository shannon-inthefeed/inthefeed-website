import { Card } from "@/components/ui/card";
import interactions from "@assets/IMG_4658_1762837411899.png";
import growth from "@assets/IMG_4659_1762837411900.png";
import followers from "@assets/IMG_4660_1762837411900.png";
import contentViewed from "@assets/IMG_4661_1762837411900.png";
import summary from "@assets/IMG_4662_1762837411900.png";

export default function ResultsSection() {
  const stats = [
    {
      image: growth,
      alt: "18.82K follower growth - steady upward trajectory",
      caption: "Consistent follower growth with 3.66 followers per post",
    },
    {
      image: summary,
      alt: "31.48K impressions with 586 interactions",
      caption: "High engagement across all content types",
    },
    {
      image: contentViewed,
      alt: "39.94K impressions with 565 reactions",
      caption: "Strong content performance and audience reach",
    },
    {
      image: interactions,
      alt: "499 reactions with 87 comments",
      caption: "Active community engagement and conversations",
    },
    {
      image: followers,
      alt: "Follower balance showing consistent growth",
      caption: "Organic growth with minimal unfollows",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What the Numbers Look Like in Practice
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Actual analytics from client campaigns. Sustainable, compounding, and tied to real pipeline activity.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-elevate w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              data-testid={`stat-card-${index}`}
            >
              <div className="p-4">
                <img
                  src={stat.image}
                  alt={stat.alt}
                  className="w-full h-auto rounded-md mb-3"
                  loading="lazy"
                  width="800"
                  height="600"
                />
                <p className="text-sm text-muted-foreground text-center">
                  {stat.caption}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            These are actual analytics from client campaigns showing sustainable, compounding growth.
          </p>
        </div>
      </div>
    </section>
  );
}
