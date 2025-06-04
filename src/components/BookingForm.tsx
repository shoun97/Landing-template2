import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { addDays, setHours, setMinutes, format, isSameDay, isToday } from 'date-fns';
import { Booking, TimeSlot } from '../types';
import { services } from '../data/services';

const BookingForm: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [availableTimeSlots, setAvailableTimeSlots] = useState<TimeSlot[]>([]);
  const [booking, setBooking] = useState<Booking>({
    date: null,
    timeSlot: null,
    name: '',
    email: '',
    phone: '',
    service: '',
    notes: '',
  });
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Generate time slots from 9 AM to 6 PM
  useEffect(() => {
    if (selectedDate) {
      const slots: TimeSlot[] = [];
      const today = new Date();
      const isSelectedDateToday = isSameDay(selectedDate, today);
      let startHour = isSelectedDateToday ? Math.max(9, today.getHours() + 1) : 9;
      
      for (let hour = startHour; hour <= 18; hour++) {
        for (let minute = 0; minute < 60; minute += 30) {
          // Skip times that have already passed for today
          if (isSelectedDateToday) {
            const slotTime = setMinutes(setHours(new Date(), hour), minute);
            if (slotTime <= new Date()) continue;
          }
          
          slots.push({
            id: slots.length + 1,
            time: `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`,
            available: true
          });
        }
      }
      setAvailableTimeSlots(slots);
    } else {
      setAvailableTimeSlots([]);
    }
  }, [selectedDate]);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    setBooking({...booking, date, timeSlot: null});
  };

  const handleTimeSlotSelect = (timeSlot: string) => {
    setBooking({...booking, timeSlot});
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBooking({...booking, [name]: value});
  };

  const handleNext = () => {
    if (step === 1 && booking.date && booking.timeSlot) {
      setStep(2);
    }
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the booking data to a server
    console.log('Booking submitted:', booking);
    setIsSubmitted(true);
  };

  // Filter out weekends and past dates
  const isDateDisabled = (date: Date) => {
    const day = date.getDay();
    return day === 0 || (isToday(date) && date.getHours() >= 18) || date < new Date();
  };

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-accent-800 mb-4">Agenda</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-accent-600">
            Agenda con nuestra experta en manicure
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          {isSubmitted ? (
            <div className="p-8 text-center animate-fade-in">
              <svg 
                className="mx-auto h-16 w-16 text-green-500 mb-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <h3 className="text-2xl font-serif font-semibold text-accent-800 mb-2">Hora confirmada!</h3>
              <p className="text-accent-600 mb-6">
                Gracias por agendar la hora
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-6 inline-block">
                <div className="text-left">
                  <p><span className="font-medium">Fecha:</span> {booking.date ? format(booking.date, 'MMMM d, yyyy') : ''}</p>
                  <p><span className="font-medium">Hora:</span> {booking.timeSlot}</p>
                  <p><span className="font-medium">Servicio:</span> {booking.service}</p>
                </div>
              </div>
              <button 
                onClick={() => {
                  setIsSubmitted(false);
                  setStep(1);
                  setBooking({
                    date: null,
                    timeSlot: null,
                    name: '',
                    email: '',
                    phone: '',
                    service: '',
                    notes: '',
                  });
                }}
                className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-6 rounded-full transition-colors shadow-md"
              >
                Agenda otra pepe cita
              </button>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-8 bg-primary-50">
                <div className="flex mb-4">
                  <div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${
                      step === 1 ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    1
                  </div>
                  <div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step === 2 ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    2
                  </div>
                </div>
                
                {step === 1 && (
                  <div className="animate-fade-in">
                    <h3 className="font-serif text-xl font-semibold text-accent-800 mb-4">Selecciona una pepe fecha</h3>
                    <div className="mb-6">
                      <label className="block text-accent-700 text-sm font-medium mb-2">
                        Fecha
                      </label>
                      <DatePicker
                        selected={booking.date}
                        onChange={handleDateChange}
                        minDate={new Date()}
                        maxDate={addDays(new Date(), 30)}
                        filterDate={(date) => {
                          const day = date.getDay();
                          return day !== 0; // Filter out Sundays (0)
                        }}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholderText="Reserva tu hora pepe"
                        dateFormat="MMMM d, yyyy"
                      />
                    </div>

                    {selectedDate && (
                      <div className="mb-6 animate-slide-up">
                        <label className="block text-accent-700 text-sm font-medium mb-2">
                          Available Time Slots
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {availableTimeSlots.map((slot) => (
                            <button
                              key={slot.id}
                              type="button"
                              onClick={() => handleTimeSlotSelect(slot.time)}
                              className={`p-2 text-sm rounded-md transition-colors ${
                                booking.timeSlot === slot.time
                                  ? 'bg-primary-600 text-white'
                                  : 'bg-white text-accent-700 hover:bg-primary-50'
                              } ${!slot.available ? 'opacity-50 cursor-not-allowed' : ''}`}
                              disabled={!slot.available}
                            >
                              {slot.time}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-6">
                      <button
                        type="button"
                        onClick={handleNext}
                        disabled={!booking.date || !booking.timeSlot}
                        className={`w-full py-3 px-4 rounded-full font-medium text-white ${
                          booking.date && booking.timeSlot
                            ? 'bg-primary-600 hover:bg-primary-700'
                            : 'bg-gray-300 cursor-not-allowed'
                        } transition-colors shadow-md`}
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="animate-fade-in">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-serif text-xl font-semibold text-accent-800">Detalles</h3>
                      <button
                        type="button"
                        onClick={handleBack}
                        className="text-primary-600 hover:text-primary-700"
                      >
                        ← Back
                      </button>
                    </div>

                    <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                      <p className="text-sm text-accent-600 mb-1">Selecciona fecha y hora:</p>
                      <p className="text-accent-800 font-medium">
                        {booking.date ? format(booking.date, 'MMMM d, yyyy') : ''} at {booking.timeSlot}
                      </p>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-accent-700 text-sm font-medium mb-2" htmlFor="service">
                            Servicio
                          </label>
                          <select
                            id="service"
                            name="service"
                            value={booking.service}
                            onChange={handleInputChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          >
                            <option value="" disabled>Selecciona un servicio</option>
                            {services.map(service => (
                              <option key={service.id} value={service.name}>
                                {service.name} - {service.price}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-accent-700 text-sm font-medium mb-2" htmlFor="name">
                            Nombre
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={booking.name}
                            onChange={handleInputChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          />
                        </div>
                        <div>
                          <label className="block text-accent-700 text-sm font-medium mb-2" htmlFor="email">
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={booking.email}
                            onChange={handleInputChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          />
                        </div>
                        <div>
                          <label className="block text-accent-700 text-sm font-medium mb-2" htmlFor="phone">
                            Teléfono
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={booking.phone}
                            onChange={handleInputChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          />
                        </div>
                        <div>
                          <label className="block text-accent-700 text-sm font-medium mb-2" htmlFor="notes">
                            Pepe requerimiento especial
                          </label>
                          <textarea
                            id="notes"
                            name="notes"
                            value={booking.notes}
                            onChange={handleInputChange}
                            rows={3}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          ></textarea>
                        </div>
                        <div className="pt-4">
                          <button
                            type="submit"
                            className="w-full py-3 px-4 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-full transition-colors shadow-md"
                          >
                            Confirma la cita pepe
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                )}
              </div>
              
              <div className="hidden lg:block lg:w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(https://images.pexels.com/photos/3997304/pexels-photo-3997304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)` }}>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingForm;