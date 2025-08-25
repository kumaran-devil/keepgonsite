import { useEffect, useRef } from "react";

const ScheduleForm = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(
              ".fade-in, .slide-up"
            );
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("visible");
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="google-form" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Register for Consuldation
          </h2>
        </div>


        {/* Embedded Google Form */}
        <div className="slide-up flex justify-center">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdgM-FVOI7rV6sEFeNDws4AOfHocTTIIiObOXRTN15qJB5dcQ/viewform?embedded=true"
            width="100%"
            height="800"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            className="rounded-2xl shadow-lg"
          >
            Loading…
          </iframe>
        </div>


      </div>
    </section>
  );
};

export default ScheduleForm;
