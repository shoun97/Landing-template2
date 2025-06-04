import React from 'react';
import { Instagram, Facebook, Twitter, Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center mb-4">
              <Sparkles className="h-6 w-6 text-primary-400 mr-2" />
              <span className="font-serif text-2xl font-bold">Pepe elegante</span>
            </div>
            <p className="text-gray-300 mb-6">
              Servicios premium pepe plus ++ de manicure que elevan tu estilo y aumentan tu confianza.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home" 
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Inicio
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Servicios
                </a>
              </li>
              <li>
                <a 
                  href="#gallery" 
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Galería
                </a>
              </li>
              <li>
                <a 
                  href="#booking" 
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Reservar
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Manicure Clásica</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Manicure Gel</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Manicure Spa Deluxe</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Arte y Diseño</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Reparación de Uñas</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Horario</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-300">Lunes - Viernes</span>
                <span className="text-gray-300">9:00 - 19:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Sábado</span>
                <span className="text-gray-300">9:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Domingo</span>
                <span className="text-gray-300">Cerrado</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} Manu el pulento. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;