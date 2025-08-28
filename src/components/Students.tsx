import { useEffect, useRef } from 'react';
import { BookOpen, Users, Code2, Bot, Globe, Wifi, IndianRupee } from 'lucide-react';
import { Link } from 'react-router-dom';

const Students = () => {
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

  const onlineClasses = [
    { 
      icon: Code2, 
      name: 'Python Basics', 
      description: 'Fundamentals of Python programming',
      duration: '4 weeks'
    },
    { 
      icon: Bot, 
      name: 'Machine Learning Essentials', 
      description: 'Introduction to ML algorithms and applications',
      duration: '6 weeks'
    },
    { 
      icon: Globe, 
      name: 'Web Development Starter Pack', 
      description: 'HTML, CSS, JavaScript, and React basics',
      duration: '8 weeks'
    },
    { 
      icon: Wifi, 
      name: 'IoT Introduction', 
      description: 'Internet of Things concepts and projects',
      duration: '5 weeks'
    }
  ];

  return (
    <section ref={sectionRef} id="students" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            For Students
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Comprehensive learning opportunities designed to accelerate your career growth
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Internships */}
          <div className="slide-up">
            <div className="card-glow p-8 h-full animate-float" style={{ animationDelay: '0s' }}>
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-lg mr-4 hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Internships</h3>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-secondary rounded-lg">
                  <p className="font-medium text-foreground mb-2">Real-world exposure to project development</p>
                  <p className="text-sm text-muted-foreground">Get hands-on experience with live projects</p>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                  <p className="font-medium text-foreground mb-2">Work on live domains: AI, ML, IoT, Web Dev</p>
                  <p className="text-sm text-muted-foreground">Choose from cutting-edge technology fields</p>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                  <p className="font-medium text-foreground mb-2">Hands-on mentorship and flexible schedules</p>
                  <p className="text-sm text-muted-foreground">Learn from industry experts at your pace</p>
                </div>
              </div>
            </div>
          </div>

          {/* Online Classes */}
          <div className="slide-up">
            <div className="card-glow p-8 h-full animate-float" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-lg mr-4 hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Online Classes</h3>
                <span className="ml-4 px-3 py-1 bg-success text-success-foreground text-sm font-semibold rounded-full">
                  Starts from <span className="text-red-600 font-bold">Rs.99/-</span> Only
                </span>
              </div>

              <div className="space-y-3">
                <div className="p-4 bg-secondary rounded-lg">
                  <h5 className="font-medium text-foreground mb-1">Python Basics</h5>
                  <p className="text-sm text-muted-foreground">Learn programming fundamentals</p>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                  <h5 className="font-medium text-foreground mb-1">Machine Learning Essentials</h5>
                  <p className="text-sm text-muted-foreground">Introduction to ML concepts</p>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                  <h5 className="font-medium text-foreground mb-1">Web Development Starter Pack</h5>
                  <p className="text-sm text-muted-foreground">Build your first website</p>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                  <h5 className="font-medium text-foreground mb-1">IoT Introduction</h5>
                  <p className="text-sm text-muted-foreground">Getting started with smart devices</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enrollment CTA */}
        <div className="text-center fade-in">
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Start Your Learning Journey</h3>
            <p className="text-xl mb-6 text-white/90">
              Join thousands of students who have accelerated their careers with KeepGon
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/Classes">
              <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors duration-300 shadow-medium hover:shadow-large">
                Enroll in Classes and Internships
              </button>
              </Link>
              <Link to="/Courses">
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-300">
                View All Courses
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Students;
