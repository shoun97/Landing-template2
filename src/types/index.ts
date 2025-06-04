export interface Service {
  id: number;
  name: string;
  description: string;
  price: string;
  duration: string;
  image: string;
}

export interface GalleryItem {
  id: number;
  image: string;
  category: string;
}

export interface TimeSlot {
  id: number;
  time: string;
  available: boolean;
}

export interface Booking {
  date: Date | null;
  timeSlot: string | null;
  name: string;
  email: string;
  phone: string;
  service: string;
  notes: string;
}