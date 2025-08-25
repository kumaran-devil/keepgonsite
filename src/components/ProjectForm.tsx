import { useEffect, useRef } from "react";

const ProjectForm = () => {
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
            Register for Project Requirements
          </h2>
        </div>


        {/* Embedded Google Form */}
        <div className="slide-up flex justify-center">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdS6clU4QNWqbZhMu4vIytOI-yD6z1Vul0AF4nHAwBSs-B9Bg/viewform?embedded=true"
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

        {/* Footer */}
        {/* <div className="text-center fade-in mt-20">
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl font-bold mb-2">Stay Tuned</h3>
            <p className="text-lg text-white/90">
              We’ll announce the start date very soon!
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ProjectForm;
