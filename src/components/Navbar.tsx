import React, { useState } from 'react';
import { LogoShield } from './LogoShield';
import { SCHOOL_INFO } from '../data/contentData';
import { Phone, MapPin, Calendar, Clock, MessageSquare, LayoutDashboard, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenLeadModal: () => void;
  onOpenAdminModal: () => void;
  leadCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenLeadModal,
  onOpenAdminModal,
  leadCount
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Séries Atendidas', href: '#series' },
    { name: 'Diagnóstico', href: '#diagnostico' },
    { name: 'Localização', href: '#localizacao' },
    { name: 'Dúvidas', href: '#faq' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full shadow-md bg-white/95 backdrop-blur-md border-b border-amber-100">
      {/* Top Notification / Contact Bar */}
      <div className="bg-[#1B1145] text-white text-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center flex-wrap gap-4 text-amber-200 font-medium">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{SCHOOL_INFO.city} (Aulas Presenciais)</span>
            </span>
            <span className="hidden md:flex items-center gap-1 text-slate-200">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Seg. a Sex. (Ed. Infantil ao 1º Ano Médio)</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={SCHOOL_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white px-2.5 py-1 rounded-full font-bold transition-all text-[11px] shadow-sm"
            >
              <MessageSquare className="w-3 h-3 fill-current" />
              <span>WhatsApp: {SCHOOL_INFO.whatsappFormatted}</span>
            </a>

            <button
              onClick={onOpenAdminModal}
              className="hidden sm:flex items-center gap-1.5 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 hover:text-amber-200 px-2.5 py-1 rounded-md font-semibold transition-colors text-[11px] border border-amber-500/40"
              title="Acessar gestão de leads recebidos"
            >
              <LayoutDashboard className="w-3 h-3" />
              <span>Painel do Reforço</span>
              {leadCount > 0 && (
                <span className="bg-amber-400 text-[#1B1145] text-[10px] font-black rounded-full px-1.5 py-0.2">
                  {leadCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a href="#" className="flex items-center">
          <LogoShield size="md" />
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-6 font-semibold text-sm text-slate-700">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#1B1145] hover:underline decoration-amber-400 decoration-2 underline-offset-4 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenLeadModal}
            className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-extrabold text-sm text-[#1B1145] bg-[#F5B718] hover:bg-[#E2A610] transition-all shadow-md hover:shadow-lg transform active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-[#1B1145] animate-pulse" />
            <span>Agendar Aula Grátis</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenLeadModal}
            className="bg-[#F5B718] text-[#1B1145] font-bold text-xs px-3 py-1.5 rounded-lg shadow"
          >
            Aula Grátis
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#1B1145] hover:bg-slate-100"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-amber-100 px-4 py-4 space-y-3 shadow-xl">
          <nav className="flex flex-col space-y-2.5 font-bold text-slate-800">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 px-3 rounded-lg hover:bg-amber-50 hover:text-[#1B1145]"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLeadModal();
              }}
              className="w-full py-2.5 bg-[#F5B718] text-[#1B1145] font-black rounded-xl text-center shadow-md"
            >
              Agendar Aula Experimental Gratuita
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdminModal();
              }}
              className="w-full py-2 bg-[#1B1145] text-amber-300 font-bold rounded-xl text-center text-xs flex items-center justify-center gap-1.5"
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Acessar Painel de Leads ({leadCount})</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
