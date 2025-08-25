import Hero from '@/components/Hero';
import About from '@/components/About';
import OurValues from '@/components/OurValues';
import WhyChooseUs from '@/components/WhyChooseUs';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <OurValues />
      <WhyChooseUs />
    </div>
  );
};

export default Home;