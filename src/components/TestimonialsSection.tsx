import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/contentData';
import { Testimonial } from '../types';
import { Star, Quote, Award, TrendingUp, CheckCircle, Sparkles, Filter } from 'lucide-react';

interface TestimonialsSectionProps {
  onOpenLeadModal: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenLeadModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const filteredTestimonials = activeCategory === 'ALL'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.category === activeCategory);

  return (
    <section id="depoimentos" className="py-16 sm:py-20 bg-slate-50 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 bg-[#1B1145] text-amber-300 font-bold text-xs uppercase px-3.5 py-1.5 rounded-full mb-3 shadow-sm">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Histórias Reais de Superação</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1B1145] tracking-tight">
            Alunos Aprovados & Pais Satisfeitos
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 font-medium">
            Veja o orgulho das famílias de Jacobina-BA ao verem seus filhos superando notas baixas e conquistando o boletim recheado de aprovações!
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          <button
            onClick={() => setActiveCategory('ALL')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all ${
              activeCategory === 'ALL'
                ? 'bg-[#1B1145] text-amber-300 shadow-md scale-105'
                : 'bg-white text-slate-700 hover:bg-amber-100 border border-slate-200'
            }`}
          >
            Todos os Depoimentos ({TESTIMONIALS.length})
          </button>
          <button
            onClick={() => setActiveCategory('MEDIO')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all ${
              activeCategory === 'MEDIO'
                ? 'bg-[#1B1145] text-amber-300 shadow-md scale-105'
                : 'bg-white text-slate-700 hover:bg-amber-100 border border-slate-200'
            }`}
          >
            🎓 1º Ano Médio
          </button>
          <button
            onClick={() => setActiveCategory('FUND_2')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all ${
              activeCategory === 'FUND_2'
                ? 'bg-[#1B1145] text-amber-300 shadow-md scale-105'
                : 'bg-white text-slate-700 hover:bg-amber-100 border border-slate-200'
            }`}
          >
            📚 Fundamental II (6º ao 9º)
          </button>
          <button
            onClick={() => setActiveCategory('FUND_1')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all ${
              activeCategory === 'FUND_1'
                ? 'bg-[#1B1145] text-amber-300 shadow-md scale-105'
                : 'bg-white text-slate-700 hover:bg-amber-100 border border-slate-200'
            }`}
          >
            ✏️ Fundamental I (1º ao 5º)
          </button>
          <button
            onClick={() => setActiveCategory('INFANTIL')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all ${
              activeCategory === 'INFANTIL'
                ? 'bg-[#1B1145] text-amber-300 shadow-md scale-105'
                : 'bg-white text-slate-700 hover:bg-amber-100 border border-slate-200'
            }`}
          >
            🎨 Educação Infantil
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 shadow-md border-2 border-slate-100 hover:border-[#F5B718] transition-all hover:shadow-xl flex flex-col justify-between relative group"
            >
              {/* Approval Badge Tag */}
              <div className="mb-4">
                <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 font-extrabold text-xs px-3 py-1 rounded-full border border-emerald-300">
                  <Award className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{item.resultBadge}</span>
                </span>
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <Quote className="w-8 h-8 text-amber-200 absolute -top-2 -left-2 -z-0 opacity-80" />
                <p className="text-slate-700 text-sm leading-relaxed font-medium relative z-10 italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Score Evolution Highlight */}
              {item.beforeScore && item.afterScore && (
                <div className="bg-amber-50 p-2.5 rounded-xl border border-amber-200 mb-4 flex items-center justify-between text-xs font-bold text-[#1B1145]">
                  <span className="text-slate-500 line-through">Antes: {item.beforeScore}</span>
                  <div className="flex items-center gap-1 text-emerald-700 font-black">
                    <TrendingUp className="w-4 h-4 text-emerald-600" />
                    <span>Depois: {item.afterScore}</span>
                  </div>
                </div>
              )}

              {/* Student & Parent Info */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={item.avatarUrl}
                  alt={item.studentName}
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#F5B718] shadow"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-extrabold text-[#1B1145] text-sm leading-tight">
                    {item.studentName}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    {item.parentName}
                  </p>

                  <div className="flex items-center gap-1 mt-0.5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-[10px] text-slate-400 font-bold ml-1">
                      {item.gradeLevel}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="mt-12 text-center bg-[#1B1145] rounded-2xl p-8 border-4 border-[#F5B718] text-white max-w-4xl mx-auto shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-black text-amber-300">
            Quer ver a foto do seu filho na lista de aprovados no próximo boletim?
          </h3>
          <p className="text-slate-200 text-sm sm:text-base mt-2 max-w-2xl mx-auto font-medium">
            Não espere a recuperação final chegar. Agende agora uma conversa com a coordenação do Reforço Escolar Borja Castillo em Jacobina-BA.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button
              onClick={onOpenLeadModal}
              className="px-8 py-3.5 bg-[#F5B718] hover:bg-[#E2A610] text-[#1B1145] font-black rounded-xl text-base shadow-lg hover:shadow-xl transition-all transform active:scale-95 flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              <span>Garantir Aula Experimental Gratuita</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
