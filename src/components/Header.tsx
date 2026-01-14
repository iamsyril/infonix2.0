import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import infonixLogo from '@/assets/infonix-logo.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={infonixLogo} 
              alt="Infonix Logo" 
              className="h-10 w-auto object-contain"
            />
            <span className="font-heading font-bold text-xl text-foreground">
              
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="nav-link"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="nav-link"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('events')} 
              className="nav-link"
            >
              Events
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="nav-link"
            >
              Contact
            </button>
            <Button 
              variant="primary"
              onClick={() => window.open('https://forms.gle/quw6AkwY9np5g1HVA', '_blank')}
            >
              Register Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-left nav-link"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-left nav-link"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('events')} 
                className="text-left nav-link"
              >
                Events
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-left nav-link"
              >
                Contact
              </button>
              <Button 
                variant="primary"
                className="w-fit"
                onClick={() => window.open('https://forms.gle/quw6AkwY9np5g1HVA', '_blank')}
              >
                Register Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
