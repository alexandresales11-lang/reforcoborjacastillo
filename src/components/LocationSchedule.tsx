import React, { useState, useRef } from 'react';
import { SCHOOL_INFO } from '../data/contentData';
import { MapPin, Clock, Calendar, MessageSquare, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const CAROUSEL_IMAGES = [
  'https://i.imgur.com/rCEFbeB.jpeg',
  'https://i.imgur.com/kfPaNXs.jpeg',
  'https://i.imgur.com/oKVcNR6.jpeg',
  'https://i.imgur.com/4cNwcR2.jpeg',
  'https://i.imgur.com/L6vgEpi.jpeg',
  'https://i.imgur.com/BLrjM4u.png',
  'https://i.imgur.com/ozcYUEa.png',
];

export const LocationSchedule: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? CAROUSEL_IMAGES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === CAROUSEL_IMAGES.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 40;
    const isRightSwipe = distance < -40;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section id="localizacao" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Info Side */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 bg-[#1B1145] text-amber-300 font-bold text-xs uppercase px-3.5 py-1.5 rounded-full shadow-sm">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Aulas Presenciais em Jacobina-BA</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-[#1B1145] tracking-tight">
              Localização & Horário de Funcionamento
            </h2>

            <p className="text-slate-700 text-base leading-relaxed font-medium">
              Nosso espaço de reforço presencial foi especialmente planejado em Jacobina - BA para proporcionar tranquilidade, foco, segurança e fácil acesso para os pais.
            </p>

            <div className="space-y-4 pt-2">
              <div className="bg-white p-4 rounded-2xl border-2 border-slate-200 shadow-sm flex items-start gap-3">
                <MapPin className="w-6 h-6 text-[#1B1145] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-extrabold text-[#1B1145] text-sm">Cidade & Unidade:</h4>
                  <p className="text-slate-700 text-xs sm:text-sm font-semibold">
                    Jacobina - BA (Consulte o endereço exato com a coordenação)
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border-2 border-slate-200 shadow-sm flex items-start gap-3">
                <Calendar className="w-6 h-6 text-[#1B1145] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-extrabold text-[#1B1145] text-sm">Dias de Funcionamento:</h4>
                  <p className="text-slate-700 text-xs sm:text-sm font-semibold">
                    Segunda a Sexta-feira (Aulas Presenciais Diárias ou Alternadas)
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border-2 border-slate-200 shadow-sm flex items-start gap-3">
                <Clock className="w-6 h-6 text-[#1B1145] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-extrabold text-[#1B1145] text-sm">Turnos Disponíveis:</h4>
                  <p className="text-slate-700 text-xs sm:text-sm font-semibold">
                    Manhã e Tarde (Ajustados conforme o horário escolar do seu filho)
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={SCHOOL_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm rounded-xl transition-all shadow-md flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Falar no WhatsApp: {SCHOOL_INFO.whatsappFormatted}</span>
              </a>
            </div>
          </div>

          {/* Carousel & Image Visual */}
          <div className="lg:col-span-6">
            <div className="bg-white p-4 rounded-3xl shadow-xl border-4 border-[#F5B718] relative overflow-hidden">
              <div 
                className="rounded-2xl overflow-hidden h-72 sm:h-96 relative bg-slate-900 group select-none cursor-grab active:cursor-grabbing"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {/* Images slide container */}
                <div 
                  className="w-full h-full flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {CAROUSEL_IMAGES.map((imgUrl, index) => (
                    <div key={index} className="w-full h-full flex-shrink-0 relative">
                      <img
                        src={imgUrl}
                        alt={`Ambiente Reforço Borja Castillo - Foto ${index + 1}`}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>

                {/* Gradient overlay on bottom */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1B1145]/90 via-[#1B1145]/40 to-transparent p-4 sm:p-6 text-white pointer-events-none flex flex-col justify-end">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-amber-400 font-extrabold text-xs uppercase tracking-wider">
                        Reforço Escolar Borja Castillo
                      </span>
                      <h3 className="text-lg sm:text-xl font-black text-white">
                        Jacobina - Bahia
                      </h3>
                    </div>
                    <span className="bg-[#1B1145]/80 backdrop-blur-md text-amber-300 border border-amber-400/40 px-2.5 py-1 rounded-full text-xs font-bold">
                      {currentIndex + 1} / {CAROUSEL_IMAGES.length}
                    </span>
                  </div>
                </div>

                {/* Left Arrow */}
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#1B1145]/80 hover:bg-[#1B1145] text-amber-300 p-2.5 rounded-full shadow-lg border border-amber-400/50 transition-all opacity-90 hover:scale-110 active:scale-95"
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#1B1145]/80 hover:bg-[#1B1145] text-amber-300 p-2.5 rounded-full shadow-lg border border-amber-400/50 transition-all opacity-90 hover:scale-110 active:scale-95"
                  aria-label="Próxima imagem"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Carousel Indicators / Dots */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
                  {CAROUSEL_IMAGES.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all ${
                        currentIndex === index 
                          ? 'w-6 bg-[#F5B718]' 
                          : 'w-2 bg-white/60 hover:bg-white'
                      }`}
                      aria-label={`Ir para foto ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-4 p-3 bg-amber-50 rounded-xl border border-amber-200 flex items-center justify-between text-xs font-bold text-[#1B1145]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Matrículas Abertas para o Mês Vigente</span>
                </span>
                <span className="text-amber-800 bg-amber-200/80 px-2.5 py-0.5 rounded-full text-[11px]">
                  Arraste para o lado 👉
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

