import React from 'react';
import { LogoShield } from './LogoShield';
import { SCHOOL_INFO } from '../data/contentData';
import { MapPin, Phone, MessageSquare, Instagram, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenLeadModal: () => void;
  onOpenAdminModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLeadModal, onOpenAdminModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#140C33] text-white pt-16 pb-12 border-t-4 border-[#F5B718]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <LogoShield size="lg" className="text-white" />
            
            <p className="text-slate-300 text-sm leading-relaxed max-w-md font-medium">
              Reforço escolar presencial em Jacobina-BA para alunos da Educação Infantil ao 1º Ano do Ensino Médio. Ensino humanizado, afeto, estímulo à leitura e aprovação garantida.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={SCHOOL_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/10 hover:bg-amber-400 hover:text-[#1B1145] rounded-xl transition-all text-amber-300 flex items-center gap-2 text-xs font-bold"
              >
                <Instagram className="w-4 h-4" />
                <span>@{SCHOOL_INFO.instagram}</span>
              </a>

              <a
                href={SCHOOL_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-emerald-600/30 hover:bg-emerald-600 rounded-xl transition-all text-emerald-300 hover:text-white flex items-center gap-2 text-xs font-bold border border-emerald-500/40"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>WhatsApp: {SCHOOL_INFO.whatsappFormatted}</span>
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-3 space-y-3 text-sm">
            <h4 className="font-extrabold text-amber-400 text-sm uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2 text-slate-300 font-medium text-xs sm:text-sm">
              <li>
                <a href="#diferenciais" className="hover:text-amber-300 transition-colors">
                  Diferenciais Pedagógicos
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-amber-300 transition-colors">
                  Depoimentos de Aprovados
                </a>
              </li>
              <li>
                <a href="#series" className="hover:text-amber-300 transition-colors">
                  Séries (Ed. Infantil ao 1º Médio)
                </a>
              </li>
              <li>
                <a href="#diagnostico" className="hover:text-amber-300 transition-colors">
                  Diagnóstico Escolar Rápido
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-amber-300 transition-colors">
                  Localização em Jacobina - BA
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-300 transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="lg:col-span-4 space-y-3 text-sm">
            <h4 className="font-extrabold text-amber-400 text-sm uppercase tracking-wider">
              Atendimento em Jacobina-BA
            </h4>
            <div className="space-y-2 text-slate-300 text-xs sm:text-sm font-medium">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>Jacobina - Bahia (Aulas Presenciais)</span>
              </p>
              <p className="flex items-start gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>WhatsApp Direct: {SCHOOL_INFO.whatsappFormatted}</span>
              </p>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenLeadModal}
                className="flex-1 py-3 bg-[#F5B718] hover:bg-[#E2A610] text-[#1B1145] font-black rounded-xl text-xs uppercase tracking-wider shadow-md transition-all text-center"
              >
                Agendar Aula Experimental
              </button>
              <img
                src="https://i.imgur.com/0nYfUqP.png"
                alt="Borja Castillo Logo"
                className="h-12 w-auto object-contain flex-shrink-0 bg-white/10 p-1 rounded-xl border border-amber-400/30"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
          <p>© {new Date().getFullYear()} Reforço Escolar Borja Castillo. Todos os direitos reservados. Jacobina - BA.</p>
          
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenAdminModal}
              className="text-amber-400 hover:underline font-bold"
            >
              Acesso Coordenação
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors flex items-center gap-1"
              title="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Topo</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
