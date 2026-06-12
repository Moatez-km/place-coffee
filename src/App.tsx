import { Search, Menu, X, Twitter, Instagram, Youtube, Coffee, CupSoda } from 'lucide-react';
import React, { useState } from 'react';
import { MenuCarousel } from './components/MenuCarousel';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { ReservationSection } from './components/ReservationSection';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div id="home" className="min-h-screen w-full flex flex-col lg:flex-row bg-coffee-bg text-white font-sans overflow-x-hidden relative">
      
      {/* Home Page Background Video */}
      <div className="absolute top-0 left-0 w-full h-screen z-0 select-none pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover object-right lg:object-center opacity-40 lg:opacity-60"
          src="/background.mp4" 
        />
        {/* Smooth gradient at the bottom */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-coffee-bg via-coffee-bg/80 to-transparent" />
      </div>

      {/* Left Social Sidebar */}
      <aside className="w-16 lg:w-20 hidden lg:flex flex-col items-center justify-center py-10 relative z-20">
        <div className="w-[1px] bg-white/20 h-16 flex-1 mb-8" />
        <div className="flex flex-col items-center gap-6">
          <a href="#" className="text-white/60 hover:text-white transition-colors">
            <Twitter size={20} />
          </a>
          <a href="#" className="text-white/60 hover:text-white transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-white/60 hover:text-white transition-colors">
            <Youtube size={20} />
          </a>
        </div>
        <div className="w-[1px] bg-white/20 h-16 flex-1 mt-8" />
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative w-full lg:w-auto lg:mr-10">
        
        {/* Navigation */}
        <header className="flex items-center justify-between py-6 w-full relative z-50 px-4 lg:px-0">
          
          {/* Brand Logo */}
          <div className="flex flex-col items-center justify-center w-14 h-14 rounded-full border border-[#8C7C73]/40 overflow-hidden cursor-pointer bg-white">
            <img 
              src="/logo.png" 
              alt="Bohnea Café Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-10 text-sm font-medium text-white/90">
            <a href="#home" className="hover:text-[#d17c46] transition-colors">Home</a>
            <a href="#menu" className="hover:text-[#d17c46] transition-colors">Speisekarte</a>
            <a href="#about" className="hover:text-[#d17c46] transition-colors">Über uns</a>
            <a href="#reservation" className="hover:text-[#d17c46] transition-colors">Tisch reservieren</a>
            <a href="#contact" className="hover:text-[#d17c46] transition-colors">Kontakt</a>
          </nav>
          
          {/* Action Button & Hamburger Toggle */}
          <div className="flex items-center gap-4">
            <a 
              href="#reservation" 
              className="bg-gradient-to-r from-[#de884b] to-[#b35e2b] text-[#0d0603] px-4 sm:px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm hover:opacity-95 transition-opacity shadow-lg shadow-[#b35e2b]/15 cursor-pointer text-center whitespace-nowrap animate-pulse hover:animate-none"
            >
              Tisch reservieren
            </a>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white hover:text-[#d17c46] transition-colors focus:outline-none p-1.5 z-50 relative rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm"
              aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </header>

        {/* Mobile Navigation Overlay */}
        <div className={`fixed inset-0 bg-[#0d0603]/98 backdrop-blur-xl z-45 flex flex-col justify-between py-24 px-8 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-10 pointer-events-none'}`}>
          <nav className="flex flex-col gap-6 text-xl font-bold text-white/90 mt-8">
            <a 
              href="#home" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#d17c46] transition-colors py-2 border-b border-coffee-line/40"
            >
              Home
            </a>
            <a 
              href="#menu" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#d17c46] transition-colors py-2 border-b border-coffee-line/40"
            >
              Speisekarte
            </a>
            <a 
              href="#about" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#d17c46] transition-colors py-2 border-b border-coffee-line/40"
            >
              Über uns
            </a>
            <a 
              href="#reservation" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#d17c46] transition-colors py-2 border-b border-coffee-line/40"
            >
              Tisch reservieren
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#d17c46] transition-colors py-2"
            >
              Kontakt
            </a>
          </nav>
          
          {/* Social Links in Mobile Menu */}
          <div className="flex flex-col items-center gap-6 pb-6">
            <div className="flex gap-8">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Youtube size={24} />
              </a>
            </div>
            <p className="text-[10px] text-white/40">© 2026 Bohnea Café. Alle Rechte vorbehalten.</p>
          </div>
        </div>

        {/* Hero Section */}
        <section className="flex-1 flex flex-col lg:flex-row items-center justify-between pb-10 relative z-10 px-4 lg:px-0">
          
          {/* Left Column - Text Details */}
          <div className="w-full lg:w-3/5 flex flex-col mt-10 lg:mt-0 relative z-20">
            
            {/* Titles */}
            <div className="relative mb-6 leading-none">
              <h2 className="font-script text-[#d17c46] text-4xl sm:text-6xl lg:text-8xl absolute -top-6 sm:-top-8 lg:-top-16 left-2 sm:left-6 lg:left-12 -rotate-2 z-10 drop-shadow-lg">
                Cafe
              </h2>
              <h1 className="font-sans font-black text-6xl sm:text-8xl lg:text-[160px] tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white via-white/80 to-gray-500 uppercase leading-[0.85]">
                Bohnea
              </h1>
            </div>

            {/* Subtitle / Paragraph */}
            <p className="text-white/70 max-w-md mt-4 md:mt-2 text-sm md:text-base leading-relaxed pl-2 font-medium">
              Beginnen Sie Ihren Tag mit der perfekten Mischung aus Leidenschaft, Geschmack und Energie – denn großartiger Kaffee ist nicht nur ein Getränk, sondern ein Erlebnis.
            </p>

            {/* Coffee Type Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-4 mt-8 lg:mt-12 max-w-2xl pl-2">
              <CoffeeTypeCard title="Espresso" desc="Kräftig, aromatisch und voller Energie." />
              <CoffeeTypeCard title="Latte" desc="Cremig, mild und perfekt für jeden Tag." />
              <CoffeeTypeCard title="Kaffee" desc="Frisch gebrüht aus ausgewählten Bohnen." />
              <CoffeeTypeCard title="Cappuccino" desc="Feiner Milchschaum trifft starken Espresso." />
            </div>

            {/* Actions / Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-10 md:mt-12 pl-2">
              <a 
                href="#reservation"
                className="bg-gradient-to-r from-[#de884b] to-[#b35e2b] text-[#0d0603] w-full sm:w-auto px-8 md:px-10 py-3.5 md:py-4 rounded-full font-bold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-[#b35e2b]/20 text-center cursor-pointer"
              >
                Tisch reservieren
              </a>
              <a 
                href="#about"
                className="text-white/80 hover:text-white font-semibold text-sm transition-colors w-full sm:w-auto bg-transparent border border-white/20 px-8 py-3.5 rounded-full flex items-center justify-center gap-2 hover:bg-white/10 text-center cursor-pointer"
              >
                Mehr erfahren <span className="text-lg leading-none">&rarr;</span>
              </a>
            </div>

          </div>

          {/* Right Column - Big Image */}
          <div className="hidden lg:flex lg:w-2/5 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 items-center justify-center lg:mt-0 z-0 lg:h-[600px] select-none pointer-events-none">
            <img 
              src="https://images.unsplash.com/photo-1550478144-884812ae93be?w=1000&auto=format&fit=crop&q=80" 
              alt="Dampfende Tasse Kaffee"
              className="w-full h-full object-cover object-center opacity-90 rounded-full lg:rounded-none drop-shadow-2xl mix-blend-lighten"
              style={{
                maskImage: 'radial-gradient(circle, black 35%, transparent 70%)',
                WebkitMaskImage: 'radial-gradient(circle, black 35%, transparent 70%)'
              }}
            />
          </div>
          
        </section>

        {/* Menu Carousel Section */}
        <section id="menu" className="w-full relative z-10 py-12 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3d1e0d] via-[#1a0a04] to-[#0a0402]">
          <MenuCarousel />
        </section>

        {/* About Section */}
        <AboutSection />

        {/* Reservation Section */}
        <ReservationSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Professional Footer */}
        <footer className="w-full py-12 bg-[#050201] border-t border-coffee-line/40 relative z-20 px-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="flex flex-col items-center justify-center w-10 h-10 rounded-full border border-[#8C7C73]/40 overflow-hidden bg-white">
                <img 
                  src="/logo.png" 
                  alt="Bohnea Café Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-bold text-white text-sm tracking-wider uppercase">Bohnea Café</span>
                <p className="text-[10px] text-white/40">© 2026. Alle Rechte vorbehalten.</p>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs font-semibold text-white/50">
              <a href="#home" className="hover:text-[#d17c46] transition-colors">Home</a>
              <a href="#menu" className="hover:text-[#d17c46] transition-colors">Speisekarte</a>
              <a href="#about" className="hover:text-[#d17c46] transition-colors">Über uns</a>
              <a href="#reservation" className="hover:text-[#d17c46] transition-colors">Reservierung</a>
              <a href="#contact" className="hover:text-[#d17c46] transition-colors">Kontakt</a>
            </div>

            <div className="text-[10px] text-white/30 text-center md:text-right">
              Handgefertigt in Erfurt, Deutschland. Global bezogen.
            </div>
          </div>
        </footer>
      </main>

    </div>
  );
}

// Components
function CoffeeTypeCard({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="bg-coffee-card/80 border border-coffee-line rounded-xl p-3 sm:p-4 flex flex-col items-center justify-start text-center hover:bg-coffee-card transition-colors cursor-pointer group">
      <div className="text-[#d17c46] mb-2 group-hover:scale-110 transition-transform">
        <CupSoda size={18} strokeWidth={1.5} />
      </div>
      <h3 className="font-bold text-white/90 text-xs sm:text-sm mb-1">{title}</h3>
      <p className="text-white/55 text-[10px] sm:text-xs leading-normal">{desc}</p>
    </div>
  );
}
