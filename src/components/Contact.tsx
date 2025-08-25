import { useEffect, useRef } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
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

  const contacts = [
    {
      type: 'Technical Support',
      name: 'Rahul Naidu',
      phone: '+91 74004 72116',
      icon: Phone,
      description: 'For project-related queries and technical assistance',
      color: 'from-blue-500 to-blue-600'
    },
    {
      type: 'Customer Support',
      name: 'Giridharan',
      phone: '+91 73393 35177',
      icon: MessageCircle,
      description: 'For general inquiries and customer service',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Ready to start your project? Our team is here to help you every step of the way
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {contacts.map((contact, index) => (
            <div key={index} className="slide-up">
              <div className="card-hover p-8 text-center group animate-float" style={{ animationDelay: `${index * 0.3}s` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-glow">
                  <contact.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{contact.type}</h3>
                <h4 className="text-xl font-semibold text-primary mb-3">{contact.name}</h4>
                <a
                  href={`tel:${contact.phone}`}
                  className="inline-flex items-center text-2xl font-bold text-foreground hover:text-primary transition-colors duration-300 mb-4 hover:scale-105"
                >
                  <Phone className="w-6 h-6 mr-2" />
                  {contact.phone}
                </a>
                <p className="text-muted-foreground leading-relaxed mb-6">{contact.description}</p>
                <div className="mt-6">
                  <a
                    href={`tel:${contact.phone}`}
                    className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:shadow-medium transition-all duration-300 hover:scale-105"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Contact Info */}
        <div className="fade-in">
          <div className="bg-gradient-to-r from-neutral-50 to-neutral-100 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary to-primary-dark rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-neutral-800 mb-2">Email Us</h4>
                <p className="text-neutral-600">contact@keepgon.com</p>
              </div>
              <div className="group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary to-primary-dark rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-neutral-800 mb-2">Working Hours</h4>
                <p className="text-neutral-600">Mon-Fri: 9AM-6PM</p>
              </div>
              <div className="group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary to-primary-dark rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-neutral-800 mb-2">Location</h4>
                <p className="text-neutral-600">Remote & On-site</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 fade-in">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-neutral-900 mb-4">
              Ready to Transform Your Ideas?
            </h3>
            <p className="text-lg text-neutral-600 mb-8">
              Whether you're a student starting your first project or an enterprise looking for innovative solutions,
              we're here to help you succeed.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-4 rounded-lg font-semibold hover:shadow-medium transition-all duration-300 hover:scale-105"
              onClick={() => {window.location.href = "https://docs.google.com/forms/d/1wrEKJzobK57I0680HLxP5UDCtHR1QNkysPayCSeKUfQ/";}}>
                Start Your Project
              </button>
              <button className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors duration-300"
                onClick={() => {window.location.href = "https://docs.google.com/forms/d/1ULIR9UHn89ttJEwBK-Snsj-P_pOzi8nPwYYIp5fP7QA/";}}>
                Schedule Consultation
              </button>
            </div> */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/projectform">
                <button className="bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-4 rounded-lg font-semibold hover:shadow-medium transition-all duration-300 hover:scale-105">
                  Start Your Project
                </button>
              </Link>

              <Link to="/scheduleform">
                <button className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors duration-300">
                  Schedule Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;