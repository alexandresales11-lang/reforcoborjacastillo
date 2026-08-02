import React, { useState } from 'react';
import { SCHOOL_INFO } from '../data/contentData';
import { X, Sparkles, Send, CheckCircle2, MessageSquare, ShieldCheck, User, Phone } from 'lucide-react';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
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

export const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({
  isOpen,
  onClose,
  onLeadSubmit
}) => {
  const [parentName, setParentName] = useState('');
  const [childName, setChildName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [gradeLevel, setGradeLevel] = useState('4º ao 5º Ano (Fund. I)');
  const [difficulty, setDifficulty] = useState('Matemática');
  const [shift, setShift] = useState('Tarde');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName || !childName || !whatsapp) return;

    onLeadSubmit({
      parentName,
      childName,
      whatsapp,
      gradeLevel,
      difficulties: [difficulty],
      preferredShift: shift,
      notes
    });

    setSubmitted(true);
  };

  const formattedWhatsappText = encodeURIComponent(
    `Olá! Sou ${parentName}, pai/mãe do(a) ${childName} (${gradeLevel}). Vim pelo site do Reforço Borja Castillo e gostaria de agendar uma Aula Experimental Gratuita em Jacobina-BA!`
  );

  const directWhatsappUrl = `https://wa.me/5574981566854?text=${formattedWhatsappText}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto animate-fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border-4 border-[#F5B718] relative my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Modal Header */}
            <div className="text-center mb-6">
              <span className="inline-flex items-center gap-1.5 bg-[#1B1145] text-amber-300 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Aula Experimental Gratuita</span>
              </span>
              <h2 className="text-2xl font-black text-[#1B1145]">
                Agende a Visita do Seu Filho
              </h2>
              <p className="text-xs text-slate-600 font-medium mt-1">
                Acompanhamento presencial em Jacobina - BA da Ed. Infantil ao 1º Ano Médio.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nome do Responsável *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Ex: Ana Souza"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#1B1145] font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nome do Aluno(a) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Lucas Souza"
                    value={childName}
                    onChange={(e) => setChildName(e.target.value)}
                    className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#1B1145] font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    WhatsApp com DDD *
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

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Série / Ano Escolar
                </label>
                <select
                  value={gradeLevel}
                  onChange={(e) => setGradeLevel(e.target.value)}
                  className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#1B1145] font-medium"
                >
                  <option value="Educação Infantil (Pré/Jardim)">Educação Infantil (Pré/Jardim)</option>
                  <option value="1º ao 3º Ano (Fund. I - Alfabetização)">1º ao 3º Ano (Fund. I - Alfabetização)</option>
                  <option value="4º ao 5º Ano (Fund. I)">4º ao 5º Ano (Fund. I)</option>
                  <option value="6º ao 7º Ano (Fund. II)">6º ao 7º Ano (Fund. II)</option>
                  <option value="8º ao 9º Ano (Fund. II)">8º ao 9º Ano (Fund. II)</option>
                  <option value="1º Ano do Ensino Médio">1º Ano do Ensino Médio</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Maior Dificuldade
                  </label>
                  <select
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                    className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#1B1145] font-medium"
                  >
                    <option value="Matemática">Matemática</option>
                    <option value="Português / Leitura">Português / Leitura</option>
                    <option value="Falta de Foco/Rotina">Falta de Foco/Rotina</option>
                    <option value="Provas e Testes">Provas e Testes</option>
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
                    className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#1B1145] font-medium"
                  >
                    <option value="Tarde">Tarde</option>
                    <option value="Manhã">Manhã</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Observações / Dúvidas Adicionais
                </label>
                <textarea
                  rows={2}
                  placeholder="Ex: Gostaria de reforço focado nas provas mensais..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#1B1145] font-medium resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#F5B718] hover:bg-[#E2A610] text-[#1B1145] font-black rounded-xl text-base shadow-lg transition-all flex items-center justify-center gap-2 mt-2"
              >
                <Send className="w-4 h-4 text-[#1B1145]" />
                <span>Confirmar Agendamento</span>
              </button>
            </form>
          </div>
        ) : (
          /* SUCCESS STATE */
          <div className="text-center py-4 space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-black text-[#1B1145]">
              Solicitação Registrada com Sucesso!
            </h3>

            <p className="text-slate-600 text-sm font-medium">
              Obrigado, <strong className="text-[#1B1145]">{parentName}</strong>! A vaga do(a) <strong className="text-[#1B1145]">{childName}</strong> para o Reforço Borja Castillo foi pré-reservada em Jacobina-BA.
            </p>

            <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200 text-left text-xs font-medium space-y-1 text-slate-800">
              <p><strong>Aluno:</strong> {childName}</p>
              <p><strong>Série:</strong> {gradeLevel}</p>
              <p><strong>Foco:</strong> {difficulty}</p>
            </div>

            <p className="text-xs text-slate-500 font-bold">
              Para agilizar seu atendimento, clique no botão abaixo e inicie o chat direto no WhatsApp da coordenação:
            </p>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={directWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-xl text-sm transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>Conversar no WhatsApp Agora</span>
              </a>

              <button
                onClick={onClose}
                className="py-2 text-slate-500 hover:text-slate-700 font-bold text-xs"
              >
                Fechar janela
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
