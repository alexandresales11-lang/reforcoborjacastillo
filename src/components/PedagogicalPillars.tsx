import React from 'react';
import { PEDAGOGICAL_PILLARS } from '../data/contentData';
import { UserCheck, BookMarked, Award, CalendarCheck, CheckCircle2, Sparkles, BookOpen } from 'lucide-react';

export const PedagogicalPillars: React.FC = () => {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck': return <UserCheck className="w-7 h-7 text-[#1B1145]" />;
      case 'BookMarked': return <BookMarked className="w-7 h-7 text-[#1B1145]" />;
      case 'Award': return <Award className="w-7 h-7 text-[#1B1145]" />;
      default: return <CalendarCheck className="w-7 h-7 text-[#1B1145]" />;
    }
  };

  return (
    <section id="diferenciais" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 bg-[#1B1145] text-amber-300 font-bold text-xs uppercase px-3.5 py-1.5 rounded-full mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Por que escolher o Borja Castillo?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1B1145] tracking-tight">
            Nossos Diferenciais Pedagógicos
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 font-medium">
            Muito mais do que um simples tirar dúvidas: uma metodologia presencial e humanizada construída para gerar autoconfiança e resultados duradouros em Jacobina-BA.
          </p>
        </div>

        {/* Pillars Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PEDAGOGICAL_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-slate-50/80 rounded-2xl p-6 sm:p-8 border-2 border-slate-100 hover:border-[#F5B718] transition-all hover:shadow-xl group relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-[#F5B718] rounded-2xl shadow-md group-hover:scale-110 transition-transform">
                    {getPillarIcon(pillar.iconName)}
                  </div>
                  <span className="text-xs font-black text-[#1B1145] bg-amber-200/80 px-3 py-1 rounded-full uppercase tracking-wider">
                    Diferencial Exclusivo
                  </span>
                </div>

                <h3 className="text-xl font-black text-[#1B1145] mb-1">
                  {pillar.title}
                </h3>
                <p className="text-xs font-bold text-amber-600 mb-3">
                  {pillar.tagline}
                </p>

                <p className="text-slate-700 text-sm leading-relaxed mb-6 font-medium">
                  {pillar.description}
                </p>

                {/* Bullet points */}
                <div className="space-y-2.5 pt-4 border-t border-slate-200">
                  {pillar.bulletPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Highlight Banner with Generated Image Asset */}
        <div className="mt-12 bg-gradient-to-r from-[#1B1145] to-[#2E1D70] rounded-2xl p-6 sm:p-10 text-white shadow-2xl overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="bg-amber-400 text-[#1B1145] font-black text-xs px-3 py-1 rounded-md uppercase tracking-wider">
                Metodologia Comprovada
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Garantimos um acompanhamento próximo que respeita a individualidade do seu filho.
              </h3>
              <p className="text-slate-200 text-sm leading-relaxed font-medium">
                Em nossas salas presenciais em Jacobina-BA, o professor orienta cada etapa do dever de casa e tira as dúvidas mais profundas, para que o estudante faça a prova com serenidade e dominio da matéria.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-amber-300">
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                  <BookOpen className="w-4 h-4 text-amber-400" /> Projeto Especial de Leitura
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                  <Sparkles className="w-4 h-4 text-amber-400" /> Relatórios para os Pais
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#F5B718] transform rotate-1 hover:rotate-0 transition-transform max-w-sm">
                <img
                  src="/src/assets/images/borja_teacher_help_1785379383755.jpg"
                  alt="Acompanhamento Pedagógico Borja Castillo"
                  className="w-full h-56 sm:h-64 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-center text-xs font-bold text-amber-300">
                  Atenção Individualizada em Jacobina-BA
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
