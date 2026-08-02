import React, { useState, useEffect } from 'react';
import { Lead } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { HighlightsBar } from './components/HighlightsBar';
import { PedagogicalPillars } from './components/PedagogicalPillars';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GradeLevelsSection } from './components/GradeLevelsSection';
import { DiagnosticQuiz } from './components/DiagnosticQuiz';
import { LocationSchedule } from './components/LocationSchedule';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { LeadCaptureModal } from './components/LeadCaptureModal';
import { AdminLeadsModal } from './components/AdminLeadsModal';
import { StickyWhatsappFAB } from './components/StickyWhatsappFAB';

export default function App() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load leads from server or localStorage
  const fetchLeads = async () => {
    try {
      const res = await fetch('/api/leads');
      if (res.ok) {
        const data = await res.json();
        if (data.leads) {
          setLeads(data.leads);
          localStorage.setItem('borja_leads', JSON.stringify(data.leads));
          return;
        }
      }
    } catch (e) {
      console.warn('Backend server offline, fallback to localStorage');
    }

    const saved = localStorage.getItem('borja_leads');
    if (saved) {
      try {
        setLeads(JSON.parse(saved));
      } catch (err) {
        console.error('Erro ao ler localStorage', err);
      }
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleAddLead = async (leadData: {
    parentName: string;
    childName: string;
    whatsapp: string;
    gradeLevel: string;
    difficulties: string[];
    preferredShift: string;
    notes?: string;
  }) => {
    setIsSubmitting(true);

    const newLead: Lead = {
      id: 'lead-' + Date.now(),
      parentName: leadData.parentName,
      childName: leadData.childName,
      whatsapp: leadData.whatsapp,
      gradeLevel: leadData.gradeLevel,
      difficulties: leadData.difficulties,
      preferredShift: leadData.preferredShift,
      notes: leadData.notes || '',
      status: 'NOVO',
      createdAt: new Date().toISOString(),
      source: 'Website Reforço Borja Castillo'
    };

    // Optimistic UI update
    const updatedLeads = [newLead, ...leads];
    setLeads(updatedLeads);
    localStorage.setItem('borja_leads', JSON.stringify(updatedLeads));

    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadData)
      });
    } catch (err) {
      console.warn('Servidor offline, salvo localmente', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleUpdateStatus = async (id: string, status: Lead['status']) => {
    const updated = leads.map((l) => (l.id === id ? { ...l, status } : l));
    setLeads(updated);
    localStorage.setItem('borja_leads', JSON.stringify(updated));

    try {
      await fetch(`/api/leads/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });
    } catch (e) {
      console.error('Erro ao atualizar status', e);
    }
  };

  const handleDeleteLead = async (id: string) => {
    const updated = leads.filter((l) => l.id !== id);
    setLeads(updated);
    localStorage.setItem('borja_leads', JSON.stringify(updated));

    try {
      await fetch(`/api/leads/${id}`, { method: 'DELETE' });
    } catch (e) {
      console.error('Erro ao remover lead', e);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#F5B718] selection:text-[#1B1145]">
      {/* Header / Sticky Navigation */}
      <Navbar
        onOpenLeadModal={() => setIsLeadModalOpen(true)}
        onOpenAdminModal={() => setIsAdminModalOpen(true)}
        leadCount={leads.length}
      />

      <main>
        {/* Hero Section with Lead Form */}
        <HeroSection
          onLeadSubmit={handleAddLead}
          isSubmitting={isSubmitting}
        />

        {/* Instagram Highlights Bar */}
        <HighlightsBar />

        {/* Pedagogical Pillars & Differentials */}
        <PedagogicalPillars />

        {/* Testimonials & Approved Students */}
        <TestimonialsSection
          onOpenLeadModal={() => setIsLeadModalOpen(true)}
        />

        {/* Grade Levels (Ed. Infantil ao 1º Ano Médio) */}
        <GradeLevelsSection
          onOpenLeadModal={() => setIsLeadModalOpen(true)}
        />

        {/* Interactive Diagnostic Quiz */}
        <DiagnosticQuiz
          onLeadSubmit={handleAddLead}
        />

        {/* Location, Schedule & Map */}
        <LocationSchedule />

        {/* FAQ Accordion */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenLeadModal={() => setIsLeadModalOpen(true)}
        onOpenAdminModal={() => setIsAdminModalOpen(true)}
      />

      {/* Lead Modal Pop-up */}
      <LeadCaptureModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
        onLeadSubmit={handleAddLead}
      />

      {/* Admin Leads Management Dashboard */}
      <AdminLeadsModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
        leads={leads}
        onUpdateLeadStatus={handleUpdateStatus}
        onDeleteLead={handleDeleteLead}
        onRefreshLeads={fetchLeads}
      />

      {/* Floating WhatsApp Action Button */}
      <StickyWhatsappFAB />
    </div>
  );
}
