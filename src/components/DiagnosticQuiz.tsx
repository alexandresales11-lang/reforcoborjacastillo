import React, { useState } from 'react';
import { SCHOOL_INFO } from '../data/contentData';
import { Sparkles, Brain, CheckCircle2, ArrowRight, MessageSquare, RotateCcw, AlertCircle } from 'lucide-react';

interface DiagnosticQuizProps {
  onLeadSubmit: (data: {
    parentName: string;
    childName: string;
    whatsapp: string;
    gradeLevel: string;
    difficulties: string[];
    preferredShift: string;
    notes?: string;
  }) => void;
}

export const DiagnosticQuiz: React.FC<DiagnosticQuizProps> = ({ onLeadSubmit }) => {
  const [step, setStep] = useState<number>(1);
  const [childName, setChildName] = useState('');
  const [parentName, setParentName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [gradeLevel, setGradeLevel] = useState('4º ao 5º Ano (Fund. I)');
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>(['Matemática']);
  const [shift, setShift] = useState('Tarde');

  const [aiAdvice, setAiAdvice] = useState<string | null>(null);
  const [loadingAi, setLoadingAi] = useState<boolean>(false);

  const difficultyOptions = [
    { id: 'Matemática', label: '🧮 Matemática & Raciocínio' },
    { id: 'Português', label: '📖 Português, Leitura & Redação' },
    { id: 'Falta de Foco', label: '⏰ Falta de Foco e Rotina em Casa' },
    { id: 'Provas', label: '📝 Ansiedade em Provas / Recuperação' },
    { id: 'Física/Química', label: '🔬 Física e Química (1º Ano Médio)' },
    { id: 'Todas', label: '📚 Dificuldade em Quase Todas as Matérias' }
  ];

  const toggleDifficulty = (id: string) => {
    if (selectedDifficulties.includes(id)) {
      setSelectedDifficulties(selectedDifficulties.filter(item => item !== id));
    } else {
      setSelectedDifficulties([...selectedDifficulties, id]);
    }
  };

  const handleRunDiagnostic = async () => {
    setLoadingAi(true);
    setStep(3);

    try {
      const res = await fetch('/api/diagnostic', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          childName,
          gradeLevel,
          difficulties: selectedDifficulties
        })
      });
      const data = await res.json();
      if (data.aiAdvice) {
        setAiAdvice(data.aiAdvice);
      } else {
        setAiAdvice(`Para o ${gradeLevel}, o Reforço Escolar Borja Castillo em Jacobina-BA aplicará uma rotina direcionada para as matérias: ${selectedDifficulties.join(', ')}. Com nosso acompanhamento, o ${childName || 'seu filho'} terá o dever de casa em dia e notas altas garantidas!`);
      }
    } catch (err) {
      setAiAdvice(`Com o acompanhamento personalizado do Borja Castillo em Jacobina-BA para o ${gradeLevel}, o ${childName || 'aluno'} receberá foco específico em ${selectedDifficulties.join(', ')}, com apoio na leitura, paciência e revisão para provas!`);
    } finally {
      setLoadingAi(false);
    }
  };

  const handleFinishAndSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName || !whatsapp) return;

    onLeadSubmit({
      parentName,
      childName: childName || 'Aluno',
      whatsapp,
      gradeLevel,
      difficulties: selectedDifficulties,
      preferredShift: shift,
      notes: `Diagnóstico Rápido: ${aiAdvice || ''}`
    });
  };

  return (
    <section id="diagnostico" className="py-16 bg-gradient-to-br from-[#140C33] via-[#1B1145] to-[#25185E] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 bg-amber-400/20 text-amber-300 font-bold text-xs uppercase px-3.5 py-1.5 rounded-full mb-3 border border-amber-400/30">
            <Brain className="w-4 h-4 text-amber-400" />
            <span>Ferramenta Interativa Rápida</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Diagnóstico Escolar do Seu Filho em 1 Minuto
          </h2>
          <p className="text-slate-200 text-sm sm:text-base mt-2 font-medium">
            Responda 3 perguntas simples e receba uma recomendação pedagógica personalizada da nossa equipe em Jacobina-BA.
          </p>
        </div>

        {/* Quiz Box */}
        <div className="bg-white text-slate-900 rounded-3xl shadow-2xl p-6 sm:p-10 border-4 border-[#F5B718] relative">
          
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center text-xs font-bold text-slate-500 mb-2">
              <span>Etapa {step} de 3</span>
              <span>{step === 1 ? '33%' : step === 2 ? '66%' : '100%'} Concluído</span>
            </div>
            <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-[#F5B718] h-full transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>

          {/* STEP 1: Grade Level & Child Name */}
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="text-xl font-black text-[#1B1145]">
                1. Quem é o aluno e em qual série ele está estudando?
              </h3>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nome do Aluno(a) (Opcional)
                </label>
                <input
                  type="text"
                  placeholder="Ex: Gabriel"
                  value={childName}
                  onChange={(e) => setChildName(e.target.value)}
                  className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#1B1145] font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Série / Ano Escolar Atual *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'Educação Infantil (Pré/Jardim)',
                    '1º ao 3º Ano (Fund. I - Alfabetização)',
                    '4º ao 5º Ano (Fund. I)',
                    '6º ao 7º Ano (Fund. II)',
                    '8º ao 9º Ano (Fund. II)',
                    '1º Ano do Ensino Médio'
                  ].map((level) => (
                    <button
                      key={level}
                      type="button"
                      onClick={() => setGradeLevel(level)}
                      className={`p-3 text-left rounded-xl text-xs font-extrabold border-2 transition-all ${
                        gradeLevel === level
                          ? 'bg-[#1B1145] text-amber-300 border-[#1B1145] shadow'
                          : 'bg-slate-50 text-slate-800 border-slate-200 hover:border-amber-400'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full py-3.5 bg-[#F5B718] hover:bg-[#E2A610] text-[#1B1145] font-black rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <span>Avançar para Etapa 2</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* STEP 2: Difficulties */}
          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-xl font-black text-[#1B1145]">
                2. Quais são os maiores desafios do(a) {childName || 'seu filho'} atualmente?
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Pode selecionar mais de uma opção:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {difficultyOptions.map((opt) => {
                  const isSelected = selectedDifficulties.includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => toggleDifficulty(opt.id)}
                      className={`p-3.5 text-left rounded-xl text-xs font-black border-2 transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-amber-100/80 text-[#1B1145] border-[#F5B718] shadow-sm'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <span>{opt.label}</span>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />}
                    </button>
                  );
                })}
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="py-3 px-4 bg-slate-100 text-slate-700 font-bold rounded-xl text-xs hover:bg-slate-200"
                >
                  Voltar
                </button>

                <button
                  type="button"
                  onClick={handleRunDiagnostic}
                  className="flex-1 py-3.5 bg-[#F5B718] hover:bg-[#E2A610] text-[#1B1145] font-black rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Gerar Diagnóstico Personalizado</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Results & Parent Contact Form */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="bg-amber-50 p-5 rounded-2xl border-2 border-amber-300">
                <div className="flex items-center gap-2 text-[#1B1145] font-black text-base mb-2">
                  <Sparkles className="w-5 h-5 text-amber-500 animate-bounce" />
                  <span>Resultado do Diagnóstico Pedagógico</span>
                </div>

                {loadingAi ? (
                  <p className="text-xs text-slate-600 font-bold animate-pulse py-2">
                    Analisando série ({gradeLevel}) e perfil do estudante...
                  </p>
                ) : (
                  <p className="text-slate-800 text-sm font-semibold leading-relaxed">
                    {aiAdvice}
                  </p>
                )}
              </div>

              <form onSubmit={handleFinishAndSend} className="space-y-4 pt-2">
                <h4 className="font-extrabold text-[#1B1145] text-sm">
                  Informe os dados para receber o plano completo da coordenação em Jacobina-BA:
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Seu Nome (Pai/Mãe) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Fernanda"
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#1B1145] font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Seu WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(74) 98123-4567"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#1B1145] font-medium"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="p-3 bg-slate-100 text-slate-700 font-bold rounded-xl text-xs hover:bg-slate-200 flex items-center gap-1"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Refazer</span>
                  </button>

                  <button
                    type="submit"
                    className="flex-1 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>Enviar Diagnóstico e Reservar Vaga no WhatsApp</span>
                  </button>
                </div>
              </form>

            </div>
          )}

        </div>
      </div>
    </section>
  );
};
