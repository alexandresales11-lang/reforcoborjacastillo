import React from 'react';
import { SCHOOL_INFO } from '../data/contentData';
import { MapPin, Clock, Calendar, Phone, MessageSquare, Navigation, CheckCircle } from 'lucide-react';
import learningKidsImg from '../assets/images/borja_learning_kids_1785379368047.jpg';

export const LocationSchedule: React.FC = () => {
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

          {/* Map & Image Visual */}
          <div className="lg:col-span-6">
            <div className="bg-white p-4 rounded-3xl shadow-xl border-4 border-[#F5B718] relative overflow-hidden">
              <div className="rounded-2xl overflow-hidden h-72 sm:h-80 relative bg-slate-100">
                <img
                  src={learningKidsImg}
                  alt="Unidade Reforço Borja Castillo em Jacobina BA"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B1145]/90 via-[#1B1145]/30 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-amber-400 font-extrabold text-xs uppercase tracking-wider">
                    Reforço Escolar Borja Castillo
                  </span>
                  <h3 className="text-xl font-black text-white">
                    Jacobina - Bahia
                  </h3>
                  <p className="text-xs text-slate-200 font-medium mt-1">
                    Ambiente climatizado, silencioso, organizado e altamente motivador.
                  </p>
                </div>
              </div>

              <div className="mt-4 p-3 bg-amber-50 rounded-xl border border-amber-200 flex items-center justify-between text-xs font-bold text-[#1B1145]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Matrículas Abertas para o Mês Vigente</span>
                </span>
                <span className="text-amber-800 bg-amber-200/80 px-2.5 py-0.5 rounded-full">
                  Jacobina BA
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
