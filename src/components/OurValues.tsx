import { useEffect, useRef } from "react";
import { Lightbulb, Users, Award, DollarSign } from "lucide-react";

const OurValues = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const elements = entry.target.querySelectorAll(".fade-in, .slide-up");
          if (entry.isIntersecting) {
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("visible");
              }, index * 150);
            });
          } else {
            elements.forEach((el) => el.classList.remove("visible"));
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always pushing boundaries with new ideas.",
    },
    {
      icon: Users,
      title: "Student-Centric",
      description: "Focused on empowering future talent.",
    },
    {
      icon: Award,
      title: "Quality",
      description: "Delivering reliable and impactful results.",
    },
    {
      icon: DollarSign,
      title: "Affordability",
      description: "Making advanced learning and projects accessible.",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Values
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <div key={value.title} className="slide-up">
              <div className="card-hover p-6 text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
