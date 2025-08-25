import { useEffect, useRef } from 'react';
import { Target, Eye, Users } from 'lucide-react';

const About = () => {
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
    <section ref={sectionRef} className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            About KeepGon
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Building bridges between ideas and execution through innovative technology solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Vision */}
          <div className="slide-up">
            <div className="card-hover p-8 animate-float" style={{ animationDelay: '0s' }}>
              <div className="flex items-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-lg mr-4">
                  <Eye className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Our vision is to empower students and enterprises by providing affordable, innovative, and scalable project solutions that create real-world impact.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="slide-up">
            <div className="card-hover p-8 animate-float" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-lg mr-4">
                  <Target className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to bridge the gap between creativity and execution. We aim to help students gain hands-on experience with cutting-edge projects, while also delivering high-quality solutions for enterprises.
              </p>
            </div>
          </div>
        </div>

        {/* Who We Are - Full Width */}
        <div className="mt-12 slide-up">
          <div className="card-hover p-8 text-center animate-float" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-lg mr-4">
                <Users className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Who We Are</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-4xl mx-auto text-lg">
              We are a passionate team of freelancers dedicated to helping students succeed with impactful academic projects and internships. Beyond academia, we extend our expertise to enterprises, offering tailored solutions in AI, ML, IoT, and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;