import { useEffect, useState, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [showFirst, setShowFirst] = useState(true);

  // Toggle between two hero sections every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Intersection Observer for fade-in when in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) el.classList.add("visible");
          else el.classList.remove("visible");
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-secondary fade-in"
    >
      {/* Floating Background Shapes */}
      <div className="floating-shapes">
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
      </div>

      {/* First Hero */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-opacity duration-1000 z-10 ${
          showFirst ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
          Welcome to <span className="gradient-text">KeepGon</span>
        </h1>
        <p className="text-lg md:text-2xl text-muted-foreground mb-8 font-medium">
          KeepGon – Turning Ideas into Reality
        </p>
        <p className="text-base md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed px-4">
          Empowering students and enterprises with innovative project solutions
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/services">
            <Button className="btn-hero group" size="lg">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
          <Link to="/students">
            <Button
              variant="outline"
              size="lg"
              className="hover:bg-primary hover:text-primary-foreground"
            >
              Join Internship
            </Button>
          </Link>
        </div>
      </div>

      {/* Second Hero (responsive for mobile) */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center text-black px-6 transition-opacity duration-1000 z-10 ${
          showFirst ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
        }`}
      >
        <div className="max-w-4xl w-full text-center space-y-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-wide">
            <span className="gradient-text">KeepGon</span> Projects!
          </h1>
          <p className="text-lg md:text-2xl font-bold mb-6 tracking-wide leading-relaxed">
            "YOUR <span className="gradient-text">ONE-STOP</span> DESTINATION FOR{" "}
            <span className="gradient-text">PROJECTS</span> IN AI, ML, IOT & MORE!"
          </p>

          {/* Stack on mobile, grid on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 text-left">
            {/* Project Domain */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-wide text-center md:text-left">
                <span className="gradient-text">PROJECT DOMAIN:</span>
              </h2>
              <ul className="space-y-3 font-semibold text-lg md:text-2xl text-center md:text-left">
                <li>Data Science</li>
                <li>Machine Learning</li>
                <li>Software & Hardware</li>
                <li>Internet-Of-Things</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-wide text-center md:text-left">
                <span className="gradient-text">CONTACT US:</span>
              </h2>
              <ul className="space-y-3 font-semibold text-lg md:text-2xl text-center md:text-left">
                <li>📞 +91 74004 72116</li>
                <li>📞 +91 76958 23146</li>
                <li>
                  📧{" "}
                  <a
                    href="mailto:tamizhofficial30@gmail.com"
                    className="hover:underline"
                  >
                    tamizhofficial30@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
