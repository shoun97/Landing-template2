import { Service } from '../types';

export const services: Service[] = [
  {
    id: 1,
    name: 'Manicure Clásica',
    description: 'Nuestra manicure signature incluye limado de uñas, cuidado de cutículas, masaje de manos y aplicación de esmalte.',
    price: '$15.000',
    duration: '45 min',
    image: 'https://images.pexels.com/photos/939836/pexels-photo-939836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    name: 'Manicure Gel',
    description: 'Esmalte gel de larga duración que proporciona un acabado brillante y dura hasta dos semanas sin descascararse.',
    price: '$25.000',
    duration: '60 min',
    image: 'https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    name: 'Manicure Spa Deluxe',
    description: 'Disfruta de nuestro tratamiento premium con exfoliación, mascarilla hidratante, masaje extendido y esmalte premium.',
    price: '$35.000',
    duration: '75 min',
    image: 'https://images.pexels.com/photos/3997383/pexels-photo-3997383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    name: 'Arte y Diseño',
    description: 'Exprésate con diseños personalizados, desde acentos simples hasta obras de arte elaboradas en una o todas las uñas.',
    price: '$8.000+',
    duration: '20+ min',
    image: 'https://images.pexels.com/photos/704815/pexels-photo-704815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];