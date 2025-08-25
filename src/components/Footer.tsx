import { Github, Linkedin, Twitter, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">KeepGon</h3>
            <p className="text-neutral-300 mb-4 leading-relaxed">
              Empowering students and enterprises with innovative project solutions. 
              We bridge the gap between ideas and execution through quality support and training.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-neutral-400 hover:text-white transition-colors duration-300"
                aria-label="GitHub"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-neutral-400 hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-neutral-400 hover:text-white transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contact@keepgon.com" 
                className="text-neutral-400 hover:text-white transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-neutral-300 hover:text-white transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="./Services" className="text-neutral-300 hover:text-white transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="./Students" className="text-neutral-300 hover:text-white transition-colors duration-300">
                  Students
                </a>
              </li>
              <li>
                <a href="./Contact" className="text-neutral-300 hover:text-white transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-neutral-300">AI/ML Projects</span>
              </li>
              <li>
                <span className="text-neutral-300">Web Development</span>
              </li>
              <li>
                <span className="text-neutral-300">IoT Solutions</span>
              </li>
              <li>
                <span className="text-neutral-300">Enterprise Projects</span>
              </li>
              <li>
                <span className="text-neutral-300">Online Classes</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-neutral-400 mb-4 md:mb-0">
              © {currentYear} KeepGon. All Rights Reserved.
            </div>
            <div className="flex space-x-6">
              <a 
                href="#" 
                className="text-neutral-400 hover:text-white transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-neutral-400 hover:text-white transition-colors duration-300 text-sm"
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className="text-neutral-400 hover:text-white transition-colors duration-300 text-sm"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
