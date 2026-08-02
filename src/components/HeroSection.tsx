import React, { useState } from 'react';
import { SCHOOL_INFO } from '../data/contentData';
import { CheckCircle2, ShieldCheck, Sparkles, Star, MapPin, ArrowRight, BookOpen, Send, Clock, User } from 'lucide-react';

interface HeroSectionProps {
  onLeadSubmit: (data: {
    parentName: string;
    childName: string;
    whatsapp: string;
    gradeLevel: string;
    difficulties: string[];
    preferredShift: string;
    notes?: string;
  }) => void;
  isSubmitting: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onLeadSubmit, isSubmitting }) => {
  const [parentName, setParentName] = useState('');
  const [childName, setChildName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [gradeLevel, setGradeLevel] = useState('4º ao 5º Ano (Fund. I)');
  const [mainDifficulty, setMainDifficulty] = useState('Matemática');
  const [shift, setShift] = useState('Tarde');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName || !childName || !whatsapp) return;

    onLeadSubmit({
      parentName,
      childName,
      whatsapp,
      gradeLevel,
      difficulties: [mainDifficulty],
      preferredShift: shift,
      notes: 'Lead direto do formulário principal da Hero'
    });
  };

  return (
    <section className="relative bg-gradient-to-br from-[#1B1145] via-[#24175B] to-[#140C33] text-white pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Hero Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-400/15 border border-amber-400/30 text-amber-300 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-ping" />
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Aulas Presenciais em Jacobina - BA | Ed. Infantil ao 1º Ano Médio</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight sm:leading-none tracking-tight">
              Seu filho com <span className="text-[#F5B718] underline decoration-amber-400 decoration-wavy decoration-2">notas altas</span>, motivação para estudar e <span className="text-amber-300">aprovação garantida!</span>
            </h1>

            {/* Subheadline */}
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-medium">
              Transforme o medo de provas e a resistência no dever de casa em confiança e orgulho. No <strong className="text-amber-300 font-extrabold">Reforço Escolar Borja Castillo</strong>, combinamos ensino personalizado, estimulo à leitura e diálogo contínuo com a família.
            </p>

            {/* Key Benefits List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm pt-2">
              <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 p-2.5 rounded-xl backdrop-blur-sm">
                <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="font-semibold text-slate-100">Atendimento Individualizado</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 p-2.5 rounded-xl backdrop-blur-sm">
                <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="font-semibold text-slate-100">Foco em Leitura & Interpretação</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 p-2.5 rounded-xl backdrop-blur-sm">
                <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="font-semibold text-slate-100">Acompanhamento dos Deveres de Casa</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 p-2.5 rounded-xl backdrop-blur-sm">
                <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="font-semibold text-slate-100">Relatórios de Desempenho para os Pais</span>
              </div>
            </div>

            {/* Social Proof Stats Bar */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" className="w-8 h-8 rounded-full border-2 border-[#1B1145] object-cover" alt="Aluno" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" className="w-8 h-8 rounded-full border-2 border-[#1B1145] object-cover" alt="Aluno" />
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80" className="w-8 h-8 rounded-full border-2 border-[#1B1145] object-cover" alt="Aluno" />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="font-bold text-white text-xs">250+ Alunos Atendidos em Jacobina</span>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-amber-500/20 px-3 py-1.5 rounded-lg border border-amber-400/30">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span className="font-bold text-amber-200">98% de Aprovação no Ano Letivo</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Converting Lead Capture Card */}
          <div className="lg:col-span-5">
            <div className="bg-white text-slate-900 rounded-2xl shadow-2xl p-6 sm:p-8 border-4 border-[#F5B718] relative">
              
              {/* Card Header Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#1B1145] text-amber-300 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1.5 whitespace-nowrap">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" />
                <span>Vagas Limitadas - Jacobina BA</span>
              </div>

              <div className="text-center mb-6 pt-2">
                <h2 className="text-xl sm:text-2xl font-black text-[#1B1145]">
                  Agende uma Aula Experimental Gratuita
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                  Preencha abaixo para a nossa coordenação entrar em contato pelo WhatsApp:
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Parent Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nome do Responsável *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="Ex: Maria Santos"
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#1B1145] focus:outline-none font-medium"
                    />
                  </div>
                </div>

                {/* Child Name & WhatsApp */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Nome do Aluno(a) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Pedro Santos"
                      value={childName}
                      onChange={(e) => setChildName(e.target.value)}
                      className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#1B1145] focus:outline-none font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      WhatsApp com DDD *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(74) 98888-8888"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#1B1145] focus:outline-none font-medium"
                    />
                  </div>
                </div>

                {/* Grade Level Select */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Série / Ano Escolar do Filho(a)
                  </label>
                  <select
                    value={gradeLevel}
                    onChange={(e) => setGradeLevel(e.target.value)}
                    className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#1B1145] focus:outline-none font-medium"
                  >
                    <option value="Educação Infantil (Pré/Jardim)">Educação Infantil (Pré/Jardim)</option>
                    <option value="1º ao 3º Ano (Fund. I - Alfabetização)">1º ao 3º Ano (Fund. I - Alfabetização)</option>
                    <option value="4º ao 5º Ano (Fund. I)">4º ao 5º Ano (Fund. I)</option>
                    <option value="6º ao 7º Ano (Fund. II)">6º ao 7º Ano (Fund. II)</option>
                    <option value="8º ao 9º Ano (Fund. II)">8º ao 9º Ano (Fund. II)</option>
                    <option value="1º Ano do Ensino Médio">1º Ano do Ensino Médio</option>
                  </select>
                </div>

                {/* Main Difficulty */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Maior Dificuldade
                    </label>
                    <select
                      value={mainDifficulty}
                      onChange={(e) => setMainDifficulty(e.target.value)}
                      className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#1B1145] focus:outline-none font-medium"
                    >
                      <option value="Matemática">Matemática</option>
                      <option value="Português / Leitura">Português / Leitura</option>
                      <option value="Falta de Foco e Rotina">Falta de Foco e Rotina</option>
                      <option value="Provas / Recuperação">Provas / Recuperação</option>
                      <option value="Todas as Matérias">Todas as Matérias</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Turno Preferido
                    </label>
                    <select
                      value={shift}
                      onChange={(e) => setShift(e.target.value)}
                      className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#1B1145] focus:outline-none font-medium"
                    >
                      <option value="Tarde">Tarde (Presencial)</option>
                      <option value="Manhã">Manhã (Presencial)</option>
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl font-black text-base text-[#1B1145] bg-[#F5B718] hover:bg-[#E2A610] shadow-lg hover:shadow-xl transition-all transform active:scale-98 flex items-center justify-center gap-2 border-2 border-[#1B1145]/10 mt-2"
                >
                  {isSubmitting ? (
                    <span>Registrando Vaga...</span>
                  ) : (
                    <>
                      <span>Garantir Vaga & Agendar Aula Grátis</span>
                      <ArrowRight className="w-5 h-5 text-[#1B1145]" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-slate-500 font-medium pt-1">
                  🔒 Seus dados estão seguros. Sem spams, apenas contato direto da coordenação.
                </p>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
