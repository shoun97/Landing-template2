import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Ronald Duran',
    text: 'El pepe me dejó las uñas espectacular.',
    rating: 5,
  },
  {
    id: 2,
    name: 'El loco Maurii',
    text: 'Las uñas me quedaron como a mi me gustan',
    rating: 5,
  },
  {
    id: 3,
    name: 'El Pepe',
    text: 'El sistema de agenda le quedó espectacular a m pana Manu',
    rating: 4,
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-primary-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-accent-800 mb-4">Qué dicen nuestras Clientas</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-accent-600">
            Escucha lo que dicen ellas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute -top-4 left-6 bg-primary-100 p-2 rounded-full">
                <svg
                  className="w-6 h-6 text-primary-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11 7.5V5.5C11 4.4 10.1 3.5 9 3.5H5C3.9 3.5 3 4.4 3 5.5V9.5C3 10.6 3.9 11.5 5 11.5H7C8.1 11.5 9 12.4 9 13.5V14.5H5C5 14.5 3 14.5 3 16.5V18.5H9C10.1 18.5 11 17.6 11 16.5V10.5C11 9.4 10.1 8.5 9 8.5H7V7.5H11Z" />
                  <path d="M21 7.5V5.5C21 4.4 20.1 3.5 19 3.5H15C13.9 3.5 13 4.4 13 5.5V9.5C13 10.6 13.9 11.5 15 11.5H17C18.1 11.5 19 12.4 19 13.5V14.5H15C15 14.5 13 14.5 13 16.5V18.5H19C20.1 18.5 21 17.6 21 16.5V10.5C21 9.4 20.1 8.5 19 8.5H17V7.5H21Z" />
                </svg>
              </div>
              <div className="pt-6">
                <p className="text-accent-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-accent-800">{testimonial.name}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating ? 'text-secondary-400' : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;