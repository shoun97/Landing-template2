import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-accent-800 mb-4">Visítanos</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-accent-600">
            Nos encantaría darte la bienvenida a nuestro salón. Visítanos o contáctanos con cualquier pregunta.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto">
          <div className="lg:w-1/2 bg-primary-50 p-8 rounded-lg shadow-md">
            <h3 className="font-serif text-2xl font-semibold text-accent-800 mb-6">Información de Contacto</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-medium text-accent-800 mb-1">Ubicación</h4>
                  <p className="text-accent-600">Av. Providencia 1234, Local 56</p>
                  <p className="text-accent-600">Providencia, Santiago</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-medium text-accent-800 mb-1">Contacto</h4>
                  <p className="text-accent-600">Teléfono: +56 969020106</p>
                  <p className="text-accent-600">Email: info@pepe.cl</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-medium text-accent-800 mb-1">Horario</h4>
                  <p className="text-accent-600">Lunes - Viernes: 9:00 - 19:00</p>
                  <p className="text-accent-600">Sábado: 9:00 - 18:00</p>
                  <p className="text-accent-600">Domingo: Cerrado</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-medium text-accent-800 mb-1">Contáctanos</h4>
                  <p className="text-accent-600 mb-4">¿Tienes preguntas o solicitudes especiales? ¡Escríbenos!</p>
                  <button 
                    className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-6 rounded-full transition-colors shadow-md"
                    onClick={() => window.location.href = 'mailto:info@pepe.cl'}
                  >
                    Enviar Email
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="h-full rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg" 
                alt="Santiago de Chile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;