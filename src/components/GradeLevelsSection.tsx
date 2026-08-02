import React from 'react';
import { GRADE_LEVELS } from '../data/contentData';
import { Baby, GraduationCap, BookOpenCheck, School, Check, ArrowRight, Sparkles } from 'lucide-react';

interface GradeLevelsSectionProps {
  onOpenLeadModal: () => void;
}

export const GradeLevelsSection: React.FC<GradeLevelsSectionProps> = ({ onOpenLeadModal }) => {
  const getLevelIcon = (iconName: string) => {
    switch (iconName) {
      case 'Baby': return <Baby className="w-8 h-8 text-[#1B1145]" />;
      case 'GraduationCap': return <GraduationCap className="w-8 h-8 text-[#1B1145]" />;
      case 'BookOpenCheck': return <BookOpenCheck className="w-8 h-8 text-[#1B1145]" />;
      default: return <School className="w-8 h-8 text-[#1B1145]" />;
    }
  };

  return (
    <section id="series" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 bg-[#1B1145] text-amber-300 font-bold text-xs uppercase px-3.5 py-1.5 rounded-full mb-3 shadow-sm">
            <School className="w-4 h-4 text-amber-400" />
            <span>Atendimento Presencial Completo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1B1145] tracking-tight">
            Níveis e Séries Atendidas
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 font-medium">
            Atuamos da Educação Infantil ao 1º Ano do Ensino Médio com programas pedagógicos sob medida para cada etapa do desenvolvimento escolar.
          </p>
        </div>

        {/* Grade Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {GRADE_LEVELS.map((level) => (
            <div
              key={level.id}
              className="bg-slate-50/90 rounded-2xl p-6 sm:p-8 border-2 border-slate-100 hover:border-[#F5B718] transition-all hover:shadow-xl flex flex-col justify-between group relative"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-[#F5B718] rounded-2xl shadow-md group-hover:scale-105 transition-transform">
                      {getLevelIcon(level.icon)}
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-[#1B1145]">
                        {level.title}
                      </h3>
                      <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full">
                        {level.ageRange}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                  {level.subtitle}
                </p>

                <p className="text-slate-700 text-sm leading-relaxed font-medium mb-6">
                  {level.description}
                </p>

                {/* Key Pillars */}
                <div className="space-y-2 mb-6 bg-white p-4 rounded-xl border border-slate-200">
                  <span className="text-xs font-extrabold text-[#1B1145] uppercase tracking-wider block mb-1">
                    Foco Principal no Borja Castillo:
                  </span>
                  {level.keyPillars.map((pillar, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{pillar}</span>
                    </div>
                  ))}
                </div>

                {/* Popular Subjects */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {level.popularSubjects.map((sub, i) => (
                    <span
                      key={i}
                      className="bg-[#1B1145]/10 text-[#1B1145] font-extrabold text-[11px] px-2.5 py-1 rounded-md"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <button
                onClick={onOpenLeadModal}
                className="w-full py-2.5 bg-[#1B1145] hover:bg-[#2A1B6B] text-amber-300 font-extrabold text-xs rounded-xl transition-all flex items-center justify-center gap-2 group-hover:bg-[#F5B718] group-hover:text-[#1B1145]"
              >
                <span>Consultar Vagas Para Este Nível</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
