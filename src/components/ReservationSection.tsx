import React, { useState } from 'react';
import { Calendar, Users, Clock, Coffee, Sparkles, CheckCircle2 } from 'lucide-react';

export function ReservationSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '2 Personen',
    date: '',
    time: '10:00 Uhr',
    area: 'Gemütliche Lounge'
  });
  const [bookingRef, setBookingRef] = useState('');
  const [isReserved, setIsReserved] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState('');

  const handleReserve = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.date) {
      setIsSending(true);
      setSendError('');
      const ref = `BOH-${Math.floor(1000 + Math.random() * 9000)}`;
      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: import.meta.env.VITE_WEB3FORMS_KEY,
            subject: `🍵 Neue Reservierung — ${ref}`,
            from_name: `${formData.name} (via Place Coffee)`,
            replyto: formData.email,
            'Buchungsreferenz': ref,
            'Name des Gastes': formData.name,
            'E-Mail des Gastes': formData.email,
            'Datum': formData.date,
            'Uhrzeit': formData.time,
            'Gäste': formData.guests,
            'Sitzbereich': formData.area,
          }),
        });
        const data = await res.json();
        if (data.success) {
          setBookingRef(ref);
          setIsReserved(true);
        } else {
          throw new Error(data.message || 'Unknown error');
        }
      } catch (err) {
        setSendError('Reservierung konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder rufen Sie uns direkt an.');
      } finally {
        setIsSending(false);
      }
    }
  };

  const handleReset = () => {
    setIsReserved(false);
    setFormData({
      name: '',
      email: '',
      guests: '2 Personen',
      date: '',
      time: '10:00 Uhr',
      area: 'Gemütliche Lounge'
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
          <span className="font-script text-[#d17c46] text-3xl sm:text-4xl">Reservierungen</span>
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
            Tisch reservieren
          </h2>
          <p className="text-white/50 mt-3 text-sm max-w-md mx-auto">
            Erleben Sie handwerkliche Röstung und gemütlichen Komfort. Sichern Sie sich Ihren Platz im Voraus.
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
                  <label className="text-xs uppercase text-white/50 mb-2 tracking-wider font-semibold">Vollständiger Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Geben Sie Ihren Namen ein" 
                    className="w-full bg-[#0d0603]/80 border border-coffee-line rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/30 focus:border-[#d17c46] focus:ring-1 focus:ring-[#d17c46] transition-all outline-none"
                  />
                </div>

                {/* Email Address */}
                <div className="flex flex-col">
                  <label className="text-xs uppercase text-white/50 mb-2 tracking-wider font-semibold">E-Mail-Adresse</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ihre@email.de" 
                    className="w-full bg-[#0d0603]/80 border border-coffee-line rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/30 focus:border-[#d17c46] focus:ring-1 focus:ring-[#d17c46] transition-all outline-none"
                  />
                </div>

                {/* Date Picker */}
                <div className="flex flex-col">
                  <label className="text-xs uppercase text-white/50 mb-2 tracking-wider font-semibold flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#d17c46]" /> Datum
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
                    <Clock size={13} className="text-[#d17c46]" /> Bevorzugte Uhrzeit
                  </label>
                  <select 
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full bg-[#0d0603]/80 border border-coffee-line rounded-xl px-4 py-3.5 text-sm text-white focus:border-[#d17c46] focus:ring-1 focus:ring-[#d17c46] transition-all outline-none [color-scheme:dark]"
                  >
                    <option value="08:30 Uhr">08:30 Uhr (Frühstück)</option>
                    <option value="10:00 Uhr">10:00 Uhr (Morgenkaffee)</option>
                    <option value="11:30 Uhr">11:30 Uhr (Brunch)</option>
                    <option value="13:00 Uhr">13:00 Uhr (Mittagessen)</option>
                    <option value="14:30 Uhr">14:30 Uhr (Nachmittagspause)</option>
                    <option value="16:00 Uhr">16:00 Uhr (Nachmittagstee)</option>
                    <option value="17:30 Uhr">17:30 Uhr (Früher Abend)</option>
                  </select>
                </div>

                {/* Number of Guests */}
                <div className="flex flex-col">
                  <label className="text-xs uppercase text-white/50 mb-2 tracking-wider font-semibold flex items-center gap-1.5">
                    <Users size={13} className="text-[#d17c46]" /> Anzahl der Gäste
                  </label>
                  <select 
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full bg-[#0d0603]/80 border border-coffee-line rounded-xl px-4 py-3.5 text-sm text-white focus:border-[#d17c46] focus:ring-1 focus:ring-[#d17c46] transition-all outline-none [color-scheme:dark]"
                  >
                    <option value="1 Person">1 Person</option>
                    <option value="2 Personen">2 Personen</option>
                    <option value="3 Personen">3 Personen</option>
                    <option value="4 Personen">4 Personen</option>
                    <option value="5 Personen">5 Personen</option>
                    <option value="6+ Personen">6+ Personen (Gruppe)</option>
                  </select>
                </div>

                {/* Seating Preference */}
                <div className="flex flex-col">
                  <label className="text-xs uppercase text-white/50 mb-2 tracking-wider font-semibold flex items-center gap-1.5">
                    <Coffee size={13} className="text-[#d17c46]" /> Sitzbereich
                  </label>
                  <select 
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    className="w-full bg-[#0d0603]/80 border border-coffee-line rounded-xl px-4 py-3.5 text-sm text-white focus:border-[#d17c46] focus:ring-1 focus:ring-[#d17c46] transition-all outline-none [color-scheme:dark]"
                  >
                    <option value="Gemütliche Lounge">Gemütliche Lounge (Sofas im Innenbereich)</option>
                    <option value="Dachterrasse">Dachterrasse (Open Air)</option>
                    <option value="Fensterplatz">Fensterplatz (Straßenblick)</option>
                    <option value="Kaffeelabor">Kaffeelabor (Nah am Röster)</option>
                  </select>
                </div>

              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={isSending}
                className="w-full mt-6 bg-gradient-to-r from-[#de884b] to-[#b35e2b] text-[#0d0603] font-black text-sm uppercase py-4 px-6 rounded-xl hover:opacity-95 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-[#b35e2b]/15 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSending ? (
                  <span className="animate-pulse">Reservierung wird gesendet…</span>
                ) : (
                  <>
                    <span>Reservierung bestätigen</span>
                    <Sparkles size={16} />
                  </>
                )}
              </button>

              {sendError && (
                <p className="text-red-400 text-xs text-center mt-3 font-medium">{sendError}</p>
              )}

            </form>
          ) : (
            
            /* Success Booking Summary State */
            <div className="text-center py-6 flex flex-col items-center">
              <div className="text-[#d17c46] mb-4 animate-bounce">
                <CheckCircle2 size={56} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-wide mb-2">
                Buchung bestätigt!
              </h3>
              <p className="text-white/60 text-sm max-w-sm mb-8">
                Vielen Dank, {formData.name}. Wir haben Ihren Tisch reserviert und freuen uns darauf, Sie zu begrüßen.
              </p>

              {/* Booking Voucher / Receipt */}
              <div className="w-full max-w-md bg-[#0d0603]/80 border border-coffee-line rounded-2xl p-6 text-left relative overflow-hidden shadow-inner">
                {/* Overlay side circles for ticket shape */}
                <div className="absolute top-1/2 -left-3 w-6 h-6 bg-coffee-card rounded-full -translate-y-1/2 border-r border-coffee-line" />
                <div className="absolute top-1/2 -right-3 w-6 h-6 bg-coffee-card rounded-full -translate-y-1/2 border-l border-coffee-line" />

                <div className="border-b border-coffee-line/60 pb-4 mb-4 flex justify-between items-center">
                  <div>
                    <span className="text-[10px] uppercase text-white/40 tracking-wider">Buchungsreferenz</span>
                    <div className="text-lg font-black text-[#d17c46]">{bookingRef}</div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase text-white/40 tracking-wider">Sitzbereich</span>
                    <div className="text-sm font-bold text-white">{formData.area}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-[10px] uppercase text-white/40 tracking-wider block mb-0.5">Datum</span>
                    <span className="font-semibold text-white">{formData.date}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-white/40 tracking-wider block mb-0.5">Zeitfenster</span>
                    <span className="font-semibold text-white">{formData.time}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-white/40 tracking-wider block mb-0.5">Gäste</span>
                    <span className="font-semibold text-white">{formData.guests}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-white/40 tracking-wider block mb-0.5">E-Mail</span>
                    <span className="font-semibold text-white truncate block">{formData.email}</span>
                  </div>
                </div>
              </div>

              {/* Book another table */}
              <button 
                onClick={handleReset}
                className="mt-8 text-xs font-bold text-[#d17c46] hover:text-[#de884b] transition-colors border-b border-[#d17c46]/30 hover:border-[#d17c46] pb-0.5"
              >
                Anderen Tisch reservieren
              </button>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
