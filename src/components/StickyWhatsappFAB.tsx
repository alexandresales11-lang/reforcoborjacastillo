import React, { useState } from 'react';
import { SCHOOL_INFO } from '../data/contentData';
import { MessageSquare, X } from 'lucide-react';

export const StickyWhatsappFAB: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2 animate-bounce-slow">
      {showTooltip && (
        <div className="bg-white text-[#1B1145] p-3 rounded-2xl shadow-2xl border-2 border-[#F5B718] text-xs max-w-xs relative animate-fade-in flex items-start gap-2">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -left-2 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-full p-0.5"
            aria-label="Fechar mensagem"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="space-y-1">
            <p className="font-extrabold text-xs text-[#1B1145]">
              👋 Olá! Precisa de reforço para seu filho?
            </p>
            <p className="text-[11px] text-slate-600 font-medium leading-tight">
              Aulas presenciais do Infantil ao 1º Ano Médio em Jacobina-BA. Fale conosco no WhatsApp!
            </p>
          </div>
        </div>
      )}

      <a
        href={SCHOOL_INFO.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-black text-sm p-3.5 rounded-full shadow-2xl transition-all transform hover:scale-110 active:scale-95 border-2 border-white"
        aria-label="Conversar no WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-current text-white" />
        <span className="hidden group-hover:inline pr-1 transition-all">
          WhatsApp Borja Castillo
        </span>
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-200"></span>
        </span>
      </a>
    </div>
  );
};
