import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/contentData';
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';
import { SCHOOL_INFO } from '../data/contentData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 bg-[#1B1145] text-amber-300 font-bold text-xs uppercase px-3.5 py-1.5 rounded-full mb-3 shadow-sm">
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1B1145] tracking-tight">
            Perguntas Frequentes de Pais e Responsáveis
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 font-medium">
            Tudo o que você precisa saber sobre as aulas presenciais no Borja Castillo em Jacobina-BA.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-slate-50 border-2 border-slate-200 rounded-2xl overflow-hidden transition-all hover:border-[#F5B718]"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-black text-[#1B1145] text-sm sm:text-base focus:outline-none"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-amber-500 font-bold text-xs bg-amber-100 px-2 py-0.5 rounded">
                      0{index + 1}
                    </span>
                    {item.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#1B1145] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-700 text-xs sm:text-sm leading-relaxed font-medium border-t border-slate-200/60 bg-white">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Questions Direct WhatsApp CTA */}
        <div className="mt-10 text-center bg-amber-50 p-6 rounded-2xl border-2 border-amber-300">
          <p className="text-xs sm:text-sm font-bold text-[#1B1145]">
            Ainda tem alguma dúvida específica sobre a situação escolar do seu filho?
          </p>
          <a
            href={SCHOOL_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow transition-all"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Falar com a Coordenação no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
