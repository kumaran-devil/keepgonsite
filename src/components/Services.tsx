import { useEffect, useRef } from 'react';
import { Brain, Code, Wifi, Globe, Building, GraduationCap, Link } from 'lucide-react';

const Services = () => {
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

  const studentDomains = [
    { icon: Brain, name: 'Artificial Intelligence (AI)', description: 'Intelligent systems that solve real-world problems' },
    { icon: Brain, name: 'Machine Learning (ML)', description: 'Predictive analytics and smart algorithms' },
    { icon: Code, name: 'Computer Science & Engineering (CSE)', description: 'Core academic project support' },
    { icon: Wifi, name: 'Internet of Things (IoT)', description: 'Smart devices and connected systems' },
    { icon: Globe, name: 'Web Development', description: 'Responsive and interactive web applications' }
  ];

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Our Services
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Comprehensive project solutions for students and enterprises across multiple technology domains
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Projects Center for Students */}
          <div id="projects-students" className="slide-up">
            <div className="card-glow p-8 h-full animate-float" style={{ animationDelay: '0s' }}>
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary to-primary-dark rounded-lg mr-4 hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">Projects Center for Students</h3>
              </div>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Specialized project support for students across various technology domains, helping you build 
                impressive portfolio projects that stand out.
              </p>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-neutral-800 mb-3">Available Domains:</h4>
                {studentDomains.map((domain, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-colors duration-200">
                    <domain.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h5 className="font-medium text-neutral-800">{domain.name}</h5>
                      <p className="text-sm text-neutral-600">{domain.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Projects for Enterprises */}
          <div id="projects-enterprises" className="slide-up">
            <div className="card-glow p-8 h-full animate-float" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary to-primary-dark rounded-lg mr-4 hover:scale-110 transition-transform duration-300">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">Projects for Enterprises</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-secondary rounded-lg">
                  <p className="font-medium text-foreground mb-2">Customized enterprise project solutions</p>
                  <p className="text-sm text-muted-foreground">Tailored to your business requirements</p>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                  <p className="font-medium text-foreground mb-2">Scalable and reliable IT services</p>
                  <p className="text-sm text-muted-foreground">Built to grow with your business</p>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                  <p className="font-medium text-foreground mb-2">Technology-driven innovation</p>
                  <p className="text-sm text-muted-foreground">Boost business growth with cutting-edge tech</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center fade-in">
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-xl mb-6 text-white/90">
              Let's discuss your requirements and bring your ideas to life
            </p>
            {/* <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors duration-300 shadow-medium hover:shadow-large"
            onClick={() => {window.location.href = "https://docs.google.com/forms/d/1wrEKJzobK57I0680HLxP5UDCtHR1QNkysPayCSeKUfQ/";}}>
              Get Started Today
            </button> */}
            
            <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors duration-300 shadow-medium hover:shadow-large"
            onClick={() => {window.location.href = "/ProjectForm";}}>
              Get Started Today
            </button>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;