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

  );
};

export default Hero;
