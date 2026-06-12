import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Autoplay, FreeMode } from 'swiper/modules';

const menuItems = [
  { id: 1, title: 'Signature Espresso', image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=600&h=900&auto=format&fit=crop&q=80', desc: 'Kräftig und intensiv.' },
  { id: 2, title: 'Iced Caramel Latte', image: 'https://images.unsplash.com/photo-1557142046-c704a3adf364?w=600&h=900&auto=format&fit=crop&q=80', desc: 'Süße Karamellwirbel.' },

  { id: 4, title: 'Heidelbeer-Drink', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&h=900&auto=format&fit=crop&q=80', desc: 'Fruchtig und erfrischend.' },
  { id: 5, title: 'Cold Brew', image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&h=900&auto=format&fit=crop&q=80', desc: 'Perfekt gereift.' },
  { id: 6, title: 'Mokka-Frappuccino', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&h=900&auto=format&fit=crop&q=80', desc: 'Schokoladiger Genuss.' },
];

export function MenuCarousel() {
  return (
    <div className="w-full max-w-7xl mx-auto py-8 md:py-12 px-4 relative z-20 overflow-hidden">
      <h2 className="text-3xl md:text-5xl font-black text-center mb-8 md:mb-12 uppercase tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-gray-400">
        Unsere <span className="text-coffee-brand">Speisekarte</span>
      </h2>
      
      <Swiper
        grabCursor={true}
        slidesPerView={'auto'}
        spaceBetween={30}
        loop={true}
        freeMode={true}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, FreeMode]}
        className="w-full h-full pb-10 md:pb-16 continuous-slider"
      >
        {menuItems.map((item) => (
          <SwiperSlide key={item.id} className="w-[260px] md:w-[320px] h-[380px] md:h-[500px] bg-coffee-card rounded-2xl overflow-hidden shadow-xl border border-coffee-line/50 transition-transform duration-300 hover:-translate-y-2 group">
            <div className="relative h-full w-full">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover object-center brightness-90 group-hover:brightness-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0603] via-[#0d0603]/50 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 text-left translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl md:text-3xl font-black text-white mb-2 leading-tight">{item.title}</h3>
                <p className="text-white/80 text-sm md:text-base">{item.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <div className="flex justify-center mt-8">
        <a 
          href="/BohneaMenu.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-[#de884b] to-[#b35e2b] text-white px-10 py-4 rounded-full font-bold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-[#b35e2b]/20 inline-block text-center cursor-pointer"
        >
          Speisekarte ansehen
        </a>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .continuous-slider .swiper-wrapper {
          transition-timing-function: linear !important;
        }
        .swiper-slide {
          width: 260px !important;
        }
        @media (min-width: 768px) {
          .swiper-slide {
            width: 320px !important;
          }
        }
      `}} />
    </div>
  );
}
