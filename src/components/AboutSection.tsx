import React from 'react';
import { Flame, Globe, Sparkles, Coffee } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="w-full py-20 px-4 relative overflow-hidden bg-gradient-to-b from-[#0d0603] to-[#1a0a04]">
      
      {/* Visual background decorations */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#d17c46]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#d17c46]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Collage */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row gap-6 relative select-none pointer-events-none">
            
            {/* Main Image */}
            <div className="flex-1 relative rounded-2xl overflow-hidden border border-coffee-line shadow-2xl group">
              <div className="absolute inset-0 bg-[#0d0603]/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img 
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&h=800&auto=format&fit=crop&q=80" 
                alt="Frisch geröstete Bohnen und Filterkaffee" 
                className="w-full h-[350px] sm:h-[450px] object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Secondary Overlapping Image */}
            <div className="flex-1 sm:translate-y-12 relative rounded-2xl overflow-hidden border border-coffee-line shadow-2xl group">
              <div className="absolute inset-0 bg-[#0d0603]/15 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img 
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&h=800&auto=format&fit=crop&q=80" 
                alt="Barista brüht Kaffee" 
                className="w-full h-[350px] sm:h-[450px] object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Absolute Badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 sm:-translate-x-0 sm:left-4 bg-[#d17c46] text-[#0d0603] px-6 py-4 rounded-xl font-bold flex items-center gap-3 shadow-xl z-20">
              <Coffee size={24} className="animate-pulse" />
              <div>
                <div className="text-xs uppercase tracking-wider opacity-80">Seit</div>
                <div className="text-xl font-black">2021</div>
              </div>
            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Title Block */}
            <div className="relative mb-6">
              <span className="font-script text-[#d17c46] text-4xl sm:text-5xl block -mb-2">
                Entdecken Sie
              </span>
              <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-gray-400">
                Bohnea Café & Rösterei
              </h2>
            </div>

            {/* Main Paragraphs */}
            <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-6 font-medium">
              Im Herzen von Erfurt, Deutschland, gelegen, ist das Bohnea Café & Rösterei mehr als nur eine Anlaufstelle für Kaffee – es ist eine Oase des Handwerks. Wir wählen die feinsten Single-Origin Arabica-Bohnen von nachhaltigen und ethischen Farmen weltweit aus.
            </p>
            
            <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-10">
              Jede Charge wird vor Ort mit akribischer Präzision mikrogeröstet, um die feinen, natürlichen Geschmacksnoten hervorzuheben, die von hell und fruchtig bis hin zu tiefen, schokoladigen Profilen reichen. Unsere zertifizierten Baristas brühen jede einzelne Tasse mit Leidenschaft, um sicherzustellen, dass Sie die einzigartige Geschichte hinter jeder Bohne schmecken.
            </p>

            {/* Features/Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              
              {/* Feature 1 */}
              <div className="bg-coffee-card/40 border border-coffee-line/60 rounded-xl p-5 hover:bg-coffee-card/75 transition-colors duration-300 group">
                <div className="text-[#d17c46] mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Flame size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-white/90 text-sm mb-1.5 uppercase tracking-wide">
                  Eigene Röstung
                </h3>
                <p className="text-white/55 text-xs leading-normal">
                  In kleinen Chargen mikrogeröstet, um die einzigartigen Aromaprofile zu bewahren.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-coffee-card/40 border border-coffee-line/60 rounded-xl p-5 hover:bg-coffee-card/75 transition-colors duration-300 group">
                <div className="text-[#d17c46] mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Globe size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-white/90 text-sm mb-1.5 uppercase tracking-wide">
                  Direkter Handel
                </h3>
                <p className="text-white/55 text-xs leading-normal">
                  Ethisch bezogen aus Kleinstmengen (Micro-Lots), um lokale Kaffeebauern zu unterstützen.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-coffee-card/40 border border-coffee-line/60 rounded-xl p-5 hover:bg-coffee-card/75 transition-colors duration-300 group">
                <div className="text-[#d17c46] mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-white/90 text-sm mb-1.5 uppercase tracking-wide">
                  Baristakunst
                </h3>
                <p className="text-white/55 text-xs leading-normal">
                  Sorgfältig gebrüht mit V60, Chemex oder als Espresso für die perfekte Extraktion.
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
