import React, { useState } from 'react';
import { galleryItems } from '../data/gallery';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const categories = ['Todos', 'Clásico', 'Gel', 'Spa', 'Arte'];

  const filteredItems = filter === 'Todos' || filter === null
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-accent-800 mb-4">Nuestra Galería</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-accent-600">
            Explora nuestro portafolio de diseños y tratamientos para encontrar inspiración para tu próxima visita.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category === 'Todos' ? null : category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                (category === 'Todos' && filter === null) || filter === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-accent-700 hover:bg-primary-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                aspectRatio: '1/1'
              }}
            >
              <img 
                src={item.image} 
                alt={`Diseño de uñas - ${item.category}`}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <span className="inline-block bg-primary-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;