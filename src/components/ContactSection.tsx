import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Send } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    }
  };

  return (
    <section id="contact" className="w-full py-20 px-4 relative bg-[#0a0402]">
      
      {/* Light gradient decoration */}
      <div className="absolute top-10 left-1/3 w-80 h-80 bg-[#d17c46]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="font-script text-[#d17c46] text-3xl sm:text-4xl">Visit Us</span>
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
            Get in Touch
          </h2>
          <div className="w-16 h-1 bg-[#d17c46] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Block: Contact Details & Form */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-10">
            
            {/* Quick Details Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Card 1: Address */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-coffee-card/30 border border-coffee-line/40 hover:border-coffee-line transition-all duration-300">
                <div className="p-3 bg-[#d17c46]/10 text-[#d17c46] rounded-xl">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1 uppercase text-xs tracking-wider">Location</h4>
                  <p className="text-white/60 text-sm leading-relaxed font-medium">
                    Regierungsstraße 62,<br />99084 Erfurt, Germany
                  </p>
                </div>
              </div>

              {/* Card 2: Hours */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-coffee-card/30 border border-coffee-line/40 hover:border-coffee-line transition-all duration-300">
                <div className="p-3 bg-[#d17c46]/10 text-[#d17c46] rounded-xl">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1 uppercase text-xs tracking-wider">Opening Hours</h4>
                  <p className="text-white/60 text-sm leading-relaxed font-medium">
                    Mon - Fri: 8:00 - 18:00<br />Sat - Sun: 9:00 - 17:00
                  </p>
                </div>
              </div>

              {/* Card 3: Phone */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-coffee-card/30 border border-coffee-line/40 hover:border-coffee-line transition-all duration-300">
                <div className="p-3 bg-[#d17c46]/10 text-[#d17c46] rounded-xl">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1 uppercase text-xs tracking-wider">Call Us</h4>
                  <p className="text-white/60 text-sm font-medium hover:text-[#d17c46] transition-colors">
                    +49 (0) 361 1234567
                  </p>
                </div>
              </div>

              {/* Card 4: Email */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-coffee-card/30 border border-coffee-line/40 hover:border-coffee-line transition-all duration-300">
                <div className="p-3 bg-[#d17c46]/10 text-[#d17c46] rounded-xl">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1 uppercase text-xs tracking-wider">Write Us</h4>
                  <p className="text-white/60 text-sm font-medium hover:text-[#d17c46] transition-colors break-all">
                    hello@bohnea-cafe.de
                  </p>
                </div>
              </div>

            </div>

            {/* Form Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-coffee-card/25 border border-coffee-line/50 backdrop-blur-sm">
              <h3 className="text-xl font-black mb-6 uppercase text-white tracking-wide">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col">
                    <label className="text-xs uppercase text-white/50 mb-2 tracking-wider font-semibold">Your Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe" 
                      className="w-full bg-[#0d0603]/80 border border-coffee-line rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#d17c46] focus:ring-1 focus:ring-[#d17c46] transition-all outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-xs uppercase text-white/50 mb-2 tracking-wider font-semibold">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com" 
                      className="w-full bg-[#0d0603]/80 border border-coffee-line rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#d17c46] focus:ring-1 focus:ring-[#d17c46] transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="text-xs uppercase text-white/50 mb-2 tracking-wider font-semibold">Message</label>
                  <textarea 
                    rows={4} 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your catering needs, event request, or just say hello..." 
                    className="w-full bg-[#0d0603]/80 border border-coffee-line rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#d17c46] focus:ring-1 focus:ring-[#d17c46] transition-all outline-none resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-[#de884b] to-[#b35e2b] text-[#0d0603] font-bold text-sm uppercase py-3.5 px-6 rounded-xl hover:opacity-95 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-[#b35e2b]/15 cursor-pointer"
                >
                  {isSubmitted ? (
                    <span className="text-white font-black animate-pulse">Message Sent Successfully!</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            </div>

          </div>

          {/* Right Block: Custom Styled Google Maps Embed */}
          <div className="lg:col-span-6 h-[400px] lg:h-auto min-h-[350px] relative rounded-3xl overflow-hidden border border-coffee-line/60 shadow-2xl bg-coffee-card/10 group">
            <iframe 
              title="Bohnea Café & Rösterei Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2516.483955627052!2d11.026348315798993!3d50.977599979551465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a4738293da63dd%3A0x24966d3d3d6cc68!2sBohnea%20Caf%C3%A9%20%26%20R%C3%B6sterei!5e0!3m2!1sen!2sde!4v1780764400000!5m2!1sen!2sde"
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="map-dark-blend absolute inset-0 w-full h-full select-none"
            />
            {/* Smooth Border Overlay */}
            <div className="absolute inset-0 border border-coffee-line rounded-3xl pointer-events-none z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}
