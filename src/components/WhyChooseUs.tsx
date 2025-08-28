import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.fade-in, .slide-up');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, index * 200);
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
    <section ref={sectionRef} className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose Us?
          </h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed opacity-90">
            At KeepGon, we combine affordability, expertise, and innovation. Students benefit from projects and internships that strengthen their skills, while enterprises receive solutions that scale with their business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services">
              <Button size="lg" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-300">
                Explore Projects
              </Button>
            </Link>
            <Link to="/students">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Join Internship
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
