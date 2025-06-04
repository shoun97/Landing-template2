import React from 'react';

const Hero: React.FC = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen bg-cover bg-center pt-20"
      style={{ 
        backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.6)), url("https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg")',
        backgroundAttachment: 'fixed' 
      }}
    >
      <div className="container mx-auto px-4 md:px-6 h-full flex flex-col justify-center">
        <div className="max-w-2xl mx-auto md:mx-0 text-center md:text-left pt-16 md:pt-0">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-700 leading-tight animate-fade-in">
            Elegancia en Tus Manos
          </h1>
          <p className="mt-4 text-lg md:text-xl text-accent-600 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Servicios premium de manicure para elevar tu estilo y aumentar tu confianza.
            Experimenta la perfecta combinación de arte y cuidado con nuestras expertas.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={scrollToBooking}
              className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-full transition-colors shadow-lg hover:shadow-xl"
            >
              Reservar Hora
            </button>
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white hover:bg-gray-100 text-primary-600 font-medium py-3 px-6 rounded-full border border-primary-300 transition-colors shadow-md hover:shadow-lg"
            >
              Ver Servicios
            </button>
          </div>
        </div>
        <div className="hidden md:block absolute bottom-12 right-12 w-64 h-64 rounded-full bg-primary-100 p-4 shadow-lg animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="w-full h-full rounded-full bg-white shadow-inner flex items-center justify-center">
            <div className="text-center">
              <p className="font-serif text-primary-600 text-lg font-semibold">Cliente Nueva</p>
              <p className="font-serif text-primary-700 text-3xl font-bold">20% DCTO</p>
              <p className="text-accent-600 text-sm mt-2">Primera visita</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div 
          className="w-10 h-10 rounded-full border-2 border-primary-300 flex items-center justify-center cursor-pointer"
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-primary-600" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;