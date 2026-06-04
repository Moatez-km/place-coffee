import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const menuItems = [
  { id: 1, title: 'Signature Espresso', image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=600&auto=format&fit=crop&q=80', desc: 'Rich and intense.' },
  { id: 2, title: 'Vanilla Latte', image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=600&auto=format&fit=crop&q=80', desc: 'Smooth and sweet.' },
  { id: 3, title: 'Iced Caramel Macchiato', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&auto=format&fit=crop&q=80', desc: 'Cold and refreshing.' },
  { id: 4, title: 'Matcha Green Tea', image: 'https://images.unsplash.com/photo-1515823662415-e0fac04ea553?w=600&auto=format&fit=crop&q=80', desc: 'Earthy and vibrant.' },
  { id: 5, title: 'Cold Brew', image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&auto=format&fit=crop&q=80', desc: 'Steeped to perfection.' },
  { id: 6, title: 'Mocha Frappuccino', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&auto=format&fit=crop&q=80', desc: 'Chocolatey delight.' },
];

export function MenuCarousel() {
  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-4 relative z-20">
      <h2 className="text-4xl md:text-5xl font-black text-center mb-12 uppercase tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-gray-400">
        Our <span className="text-coffee-brand">Menu</span>
      </h2>
      
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 30, // Angles the side cards
          stretch: 0,
          depth: 150, // Pushes side cards back in 3D space
          modifier: 1, // Multiplier for effect
          slideShadows: true, // Enables shadows on side cards
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="w-full h-full pb-12"
      >
        {menuItems.map((item) => (
          <SwiperSlide key={item.id} className="w-[280px] sm:w-[320px] md:w-[380px] bg-coffee-card rounded-2xl overflow-hidden shadow-2xl border border-coffee-line/50 transition-transform duration-300">
            <div className="relative h-[400px] w-full">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover object-center brightness-90 group-hover:brightness-110 transition-all"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-bg via-coffee-bg/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-full p-6 text-left">
                <h3 className="text-2xl font-black text-white mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <div className="flex justify-center mt-12">
        <button className="bg-gradient-to-r from-[#de884b] to-[#b35e2b] text-white px-10 py-4 rounded-full font-bold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-[#b35e2b]/20">
          Check our Menu
        </button>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .swiper-slide {
          /* Required for auto width to work properly with coverflow */
          width: auto !important; 
        }
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.4);
        }
        .swiper-pagination-bullet-active {
          background: #d17c46 !important;
        }
      `}} />
    </div>
  );
}
