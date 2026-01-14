import { Mail, Instagram, Phone, ExternalLink } from 'lucide-react';
import infonixLogo from '@/assets/infonix-logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* Logo & Description */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              {/* Removed the extra box so the logo sits directly on the footer background */}
              <img 
                src={infonixLogo} 
                alt="Infonix Logo" 
                className="h-12 w-auto object-contain drop-shadow-md"
              />
              <span className="font-heading font-bold text-xl">Infonix 2K25</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              National Level Technical Symposium 2K25 hosted by University College of 
              Engineering Villupuram, fostering innovation and excellence in technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-primary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-primary transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-primary transition-colors"
                >
                  Events
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <a 
                href="mailto:infonix2.0symposium@gmail.com"
                className="flex items-center space-x-2 text-primary-foreground/80 hover:text-primary transition-colors"
              >
                <Mail size={16} />
                <span>infonix2.0symposium@gmail.com</span>
              </a>
              <a 
                href="https://www.instagram.com/infonix_2k25?igsh=MTR6OGJvM3FnN2RnaQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-primary-foreground/80 hover:text-primary transition-colors"
              >
                <Instagram size={16} />
                <span>@Infonix2.0</span>
                <ExternalLink size={12} />
              </a>
              <a 
                href="tel:+916380612880"
                className="flex items-center space-x-2 text-primary-foreground/80 hover:text-primary transition-colors"
              >
                <Phone size={16} />
                <span>+91 63806 12880</span>
              </a>
              <a 
                href="tel:+919363155733"
                className="flex items-center space-x-2 text-primary-foreground/80 hover:text-primary transition-colors"
              >
                <Phone size={16} />
                <span>+91 9363155733</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex justify-center items-center">
            <p className="text-primary-foreground/80 text-sm text-center">
              ©  Infonix 2.0 Symposium. All Rights Reserved.
            </p>
          </div>
        </div>
        
          <div className="flex justify-center items-center">
            <p className="text-primary-foreground/80 text-sm text-center">
                      Designed and Hosted by Syril.
            </p>
          </div>
        </div>
      
    </footer>
  );
};

export default Footer;
