import React, { useState } from 'react';
import { Calendar, Users, Clock, Coffee, Sparkles, CheckCircle2 } from 'lucide-react';

export function ReservationSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2 People',
    date: '',
    time: '10:00 AM',
    area: 'Cozy Lounge'
  });
  const [bookingRef, setBookingRef] = useState('');
  const [isReserved, setIsReserved] = useState(false);

  const handleReserve = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.date) {
      // Generate a random mock booking reference
      const ref = `BOH-${Math.floor(1000 + Math.random() * 9000)}`;
      setBookingRef(ref);
      setIsReserved(true);
    }
  };

  const handleReset = () => {
    setIsReserved(false);
    setFormData({
      name: '',
      phone: '',
      guests: '2 People',
      date: '',
      time: '10:00 AM',
      area: 'Cozy Lounge'
    });
  };

  return (
    <section id="reservation" className="w-full py-20 px-4 relative overflow-hidden bg-gradient-to-b from-[#1a0a04] via-[#0d0603] to-[#0a0402]">
      
      {/* Visual background decorations */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#d17c46]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#d17c46]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Title Block */}
        <div className="text-center mb-12">
          <span className="font-script text-[#d17c46] text-3xl sm:text-4xl">Reservations</span>
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
            Book a Table
          </h2>
          <p className="text-white/50 mt-3 text-sm max-w-md mx-auto">
            Experience artisanal roasting and cozy comfort. Secure your spot in advance.
          </p>
          <div className="w-16 h-1 bg-[#d17c46] mx-auto mt-4 rounded-full" />
        </div>

        {/* Form Container */}
        <div className="bg-coffee-card/30 border border-coffee-line/60 backdrop-blur-md rounded-3xl p-6 sm:p-10 shadow-2xl transition-all duration-500">
          
          {!isReserved ? (
            <form onSubmit={handleReserve} className="space-y-6">
              
              {/* Form Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div className="flex flex-col">
                  <label className="text-xs uppercase text-white/50 mb-2 tracking-wider font-semibold">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name" 
                    className="w-full bg-[#0d0603]/80 border border-coffee-line rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/30 focus:border-[#d17c46] focus:ring-1 focus:ring-[#d17c46] transition-all outline-none"
                  />
                </div>

                {/* Phone Number */}
                <div className="flex flex-col">
                  <label className="text-xs uppercase text-white/50 mb-2 tracking-wider font-semibold">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+49 176 1234567" 
                    className="w-full bg-[#0d0603]/80 border border-coffee-line rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/30 focus:border-[#d17c46] focus:ring-1 focus:ring-[#d17c46] transition-all outline-none"
                  />
                </div>

                {/* Date Picker */}
                <div className="flex flex-col">
                  <label className="text-xs uppercase text-white/50 mb-2 tracking-wider font-semibold flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#d17c46]" /> Date
                  </label>
                  <input 
                    type="date" 
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-[#0d0603]/80 border border-coffee-line rounded-xl px-4 py-3.5 text-sm text-white focus:border-[#d17c46] focus:ring-1 focus:ring-[#d17c46] transition-all outline-none [color-scheme:dark]"
                  />
                </div>

                {/* Time Slot Select */}
                <div className="flex flex-col">
                  <label className="text-xs uppercase text-white/50 mb-2 tracking-wider font-semibold flex items-center gap-1.5">
                    <Clock size={13} className="text-[#d17c46]" /> Preferred Time
                  </label>
                  <select 
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full bg-[#0d0603]/80 border border-coffee-line rounded-xl px-4 py-3.5 text-sm text-white focus:border-[#d17c46] focus:ring-1 focus:ring-[#d17c46] transition-all outline-none [color-scheme:dark]"
                  >
                    <option value="08:30 AM">08:30 AM (Breakfast)</option>
                    <option value="10:00 AM">10:00 AM (Morning Coffee)</option>
                    <option value="11:30 AM">11:30 AM (Brunch)</option>
                    <option value="01:00 PM">01:00 PM (Lunch)</option>
                    <option value="02:30 PM">02:30 PM (Midday Break)</option>
                    <option value="04:00 PM">04:00 PM (Afternoon Tea)</option>
                    <option value="05:30 PM">05:30 PM (Early Evening)</option>
                  </select>
                </div>

                {/* Number of Guests */}
                <div className="flex flex-col">
                  <label className="text-xs uppercase text-white/50 mb-2 tracking-wider font-semibold flex items-center gap-1.5">
                    <Users size={13} className="text-[#d17c46]" /> Number of Guests
                  </label>
                  <select 
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full bg-[#0d0603]/80 border border-coffee-line rounded-xl px-4 py-3.5 text-sm text-white focus:border-[#d17c46] focus:ring-1 focus:ring-[#d17c46] transition-all outline-none [color-scheme:dark]"
                  >
                    <option value="1 Person">1 Person</option>
                    <option value="2 People">2 People</option>
                    <option value="3 People">3 People</option>
                    <option value="4 People">4 People</option>
                    <option value="5 People">5 People</option>
                    <option value="6+ People">6+ People (Group)</option>
                  </select>
                </div>

                {/* Seating Preference */}
                <div className="flex flex-col">
                  <label className="text-xs uppercase text-white/50 mb-2 tracking-wider font-semibold flex items-center gap-1.5">
                    <Coffee size={13} className="text-[#d17c46]" /> Seating Area
                  </label>
                  <select 
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    className="w-full bg-[#0d0603]/80 border border-coffee-line rounded-xl px-4 py-3.5 text-sm text-white focus:border-[#d17c46] focus:ring-1 focus:ring-[#d17c46] transition-all outline-none [color-scheme:dark]"
                  >
                    <option value="Cozy Lounge">Cozy Lounge (Indoor Sofas)</option>
                    <option value="Rooftop Terrace">Rooftop Terrace (Open Air)</option>
                    <option value="Window View">Window View (Street Watch)</option>
                    <option value="Coffee Lab">Coffee Lab (Near the Roaster)</option>
                  </select>
                </div>

              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full mt-6 bg-gradient-to-r from-[#de884b] to-[#b35e2b] text-[#0d0603] font-black text-sm uppercase py-4 px-6 rounded-xl hover:opacity-95 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-[#b35e2b]/15 cursor-pointer"
              >
                <span>Confirm Reservation</span>
                <Sparkles size={16} />
              </button>

            </form>
          ) : (
            
            /* Success Booking Summary State */
            <div className="text-center py-6 flex flex-col items-center">
              <div className="text-[#d17c46] mb-4 animate-bounce">
                <CheckCircle2 size={56} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-wide mb-2">
                Booking Confirmed!
              </h3>
              <p className="text-white/60 text-sm max-w-sm mb-8">
                Thank you, {formData.name}. We have reserved your table and look forward to welcoming you.
              </p>

              {/* Booking Voucher / Receipt */}
              <div className="w-full max-w-md bg-[#0d0603]/80 border border-coffee-line rounded-2xl p-6 text-left relative overflow-hidden shadow-inner">
                {/* Overlay side circles for ticket shape */}
                <div className="absolute top-1/2 -left-3 w-6 h-6 bg-coffee-card rounded-full -translate-y-1/2 border-r border-coffee-line" />
                <div className="absolute top-1/2 -right-3 w-6 h-6 bg-coffee-card rounded-full -translate-y-1/2 border-l border-coffee-line" />

                <div className="border-b border-coffee-line/60 pb-4 mb-4 flex justify-between items-center">
                  <div>
                    <span className="text-[10px] uppercase text-white/40 tracking-wider">Booking Ref</span>
                    <div className="text-lg font-black text-[#d17c46]">{bookingRef}</div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase text-white/40 tracking-wider">Table Area</span>
                    <div className="text-sm font-bold text-white">{formData.area}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-[10px] uppercase text-white/40 tracking-wider block mb-0.5">Date</span>
                    <span className="font-semibold text-white">{formData.date}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-white/40 tracking-wider block mb-0.5">Time Slot</span>
                    <span className="font-semibold text-white">{formData.time}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-white/40 tracking-wider block mb-0.5">Guests</span>
                    <span className="font-semibold text-white">{formData.guests}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-white/40 tracking-wider block mb-0.5">Phone Contact</span>
                    <span className="font-semibold text-white truncate block">{formData.phone}</span>
                  </div>
                </div>
              </div>

              {/* Book another table */}
              <button 
                onClick={handleReset}
                className="mt-8 text-xs font-bold text-[#d17c46] hover:text-[#de884b] transition-colors border-b border-[#d17c46]/30 hover:border-[#d17c46] pb-0.5"
              >
                Book Another Table
              </button>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
