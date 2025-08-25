import { useEffect, useRef } from 'react';
import { Database } from 'lucide-react';

const Courses = () => {
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
    <section ref={sectionRef} id="courses" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Courses
          </h2>
        </div>

        {/* Notice Message */}
        <div className="text-center slide-up">
          <div className="flex flex-col items-center justify-center p-10">
            <Database className="w-16 h-16 text-primary mb-6 animate-bounce" />
            <p className="text-2xl font-semibold text-neutral-700 animate-pulse">
              Our courses are temporarily unavailable.
            </p>
            <p className="text-lg text-neutral-500 mt-3 animate-pulse">
              We are fixing a database issue. Please check back soon!
            </p>
          </div>
        </div>

        {/* Footer (Status Update) */}
        <div className="text-center fade-in mt-20">
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl font-bold mb-2">Thank you for your patience</h3>
            <p className="text-lg text-white/90">
              Our team is working hard to resolve the issue quickly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
