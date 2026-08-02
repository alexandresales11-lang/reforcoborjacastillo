import React, { useState } from 'react';
import { STORY_HIGHLIGHTS } from '../data/contentData';
import { X, Sparkles, BookOpen, MessageCircle, Brain, BarChart3, HeartHandshake, CheckCircle } from 'lucide-react';

interface HighlightModalData {
  title: string;
  emoji: string;
  description: string;
}

export const HighlightsBar: React.FC = () => {
  const [activeHighlight, setActiveHighlight] = useState<HighlightModalData | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain': return <Brain className="w-6 h-6 text-[#1B1145]" />;
      case 'MessageCircle': return <MessageCircle className="w-6 h-6 text-[#1B1145]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#1B1145]" />;
      case 'BookOpen': return <BookOpen className="w-6 h-6 text-[#1B1145]" />;
      case 'BarChart3': return <BarChart3 className="w-6 h-6 text-[#1B1145]" />;
      default: return <HeartHandshake className="w-6 h-6 text-[#1B1145]" />;
    }
  };

  return (
    <section className="bg-amber-50/60 border-y border-amber-200/60 py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#1B1145] bg-amber-200/80 px-3 py-1 rounded-full">
            Nossos Destaques & Valores
          </span>
        </div>

        {/* Story Circles Grid / Flex Bar matching Instagram */}
        <div className="flex items-center justify-start sm:justify-center gap-4 sm:gap-8 overflow-x-auto pb-2 scrollbar-none px-2">
          {STORY_HIGHLIGHTS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveHighlight({ title: item.title, emoji: item.emoji, description: item.description })}
              className="flex flex-col items-center group flex-shrink-0 focus:outline-none transition-transform hover:scale-105"
            >
              {/* Instagram Style Gradient Ring */}
              <div className="p-1 rounded-full bg-gradient-to-tr from-[#F5B718] via-purple-600 to-[#1B1145] shadow-md group-hover:shadow-lg transition-all">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full p-1 flex flex-col items-center justify-center border-2 border-white">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-amber-100/70 rounded-full flex items-center justify-center">
                    <span className="text-2xl sm:text-3xl">{item.emoji}</span>
                  </div>
                </div>
              </div>
              <span className="text-xs font-bold text-[#1B1145] mt-2 group-hover:text-amber-600 transition-colors">
                {item.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Highlight Details Modal */}
      {activeHighlight && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border-4 border-[#F5B718] relative">
            <button
              onClick={() => setActiveHighlight(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">{activeHighlight.emoji}</span>
              <div>
                <h3 className="text-xl font-black text-[#1B1145]">{activeHighlight.title}</h3>
                <span className="text-xs text-amber-600 font-bold uppercase tracking-wider">Reforço Escolar Borja Castillo</span>
              </div>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed font-medium bg-slate-50 p-4 rounded-xl border border-slate-100">
              {activeHighlight.description}
            </p>

            <div className="mt-5 flex justify-end">
              <button
                onClick={() => setActiveHighlight(null)}
                className="px-5 py-2 rounded-xl bg-[#1B1145] text-amber-300 font-bold text-sm hover:bg-[#25185E]"
              >
                Entendi
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
