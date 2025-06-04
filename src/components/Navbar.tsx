import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Sparkles className="h-6 w-6 text-primary-600 mr-2" />
            <span className="font-serif text-2xl font-bold text-primary-700">Pepe</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-accent-700 hover:text-primary-600 transition-colors"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-accent-700 hover:text-primary-600 transition-colors"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-accent-700 hover:text-primary-600 transition-colors"
            >
              Galería
            </button>
            <button 
              onClick={() => scrollToSection('booking')}
              className="text-accent-700 hover:text-primary-600 transition-colors"
            >
              Reservar
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-accent-700 hover:text-primary-600 transition-colors"
            >
              Contacto
            </button>
          </div>

          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-800 hover:text-primary-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-slide-down">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-accent-700 hover:text-primary-600 transition-colors py-2"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-accent-700 hover:text-primary-600 transition-colors py-2"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-accent-700 hover:text-primary-600 transition-colors py-2"
              >
                Galería
              </button>
              <button 
                onClick={() => scrollToSection('booking')}
                className="text-accent-700 hover:text-primary-600 transition-colors py-2"
              >
                Reservar
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-accent-700 hover:text-primary-600 transition-colors py-2"
              >
                Contacto
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;