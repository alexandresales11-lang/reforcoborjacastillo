import React, { useState } from 'react';
import { Lead } from '../types';
import { X, Search, Filter, Download, MessageSquare, CheckCircle, Clock, Calendar, UserCheck, Trash2, Plus, LayoutDashboard } from 'lucide-react';

interface AdminLeadsModalProps {
  isOpen: boolean;
  onClose: () => void;
  leads: Lead[];
  onUpdateLeadStatus: (id: string, status: Lead['status']) => void;
  onDeleteLead: (id: string) => void;
  onRefreshLeads: () => void;
}

export const AdminLeadsModal: React.FC<AdminLeadsModalProps> = ({
  isOpen,
  onClose,
  leads,
  onUpdateLeadStatus,
  onDeleteLead,
  onRefreshLeads
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');

  if (!isOpen) return null;

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.parentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.childName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.whatsapp.includes(searchTerm) ||
      lead.gradeLevel.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'ALL' || lead.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const exportToCSV = () => {
    const headers = ['ID', 'Data', 'Nome Responsavel', 'Nome Aluno', 'WhatsApp', 'Serie', 'Dificuldade', 'Turno', 'Status', 'Origem'];
    const rows = leads.map((l) => [
      l.id,
      new Date(l.createdAt).toLocaleDateString('pt-BR'),
      `"${l.parentName}"`,
      `"${l.childName}"`,
      l.whatsapp,
      `"${l.gradeLevel}"`,
      `"${l.difficulties.join(', ')}"`,
      l.preferredShift,
      l.status,
      `"${l.source}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Leads_Borja_Castillo_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const statusBadges = {
    NOVO: 'bg-amber-100 text-amber-800 border-amber-300',
    EM_CONTATO: 'bg-blue-100 text-blue-800 border-blue-300',
    AULA_AGENDADA: 'bg-purple-100 text-purple-800 border-purple-300',
    MATRICULADO: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    ARQUIVADO: 'bg-slate-100 text-slate-600 border-slate-300'
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4 overflow-y-auto animate-fade-in">
      <div className="bg-white rounded-3xl max-w-5xl w-full p-6 sm:p-8 shadow-2xl border-4 border-[#1B1145] relative my-6 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#1B1145] text-amber-300 rounded-xl">
              <LayoutDashboard className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-[#1B1145]">
                Painel de Captação de Leads
              </h2>
              <p className="text-xs text-slate-500 font-bold">
                Reforço Escolar Borja Castillo (Jacobina - BA) • Total: {leads.length} Contatos
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={exportToCSV}
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors border border-slate-200"
              title="Baixar lista em formato Excel/CSV"
            >
              <Download className="w-4 h-4" />
              <span>Exportar CSV</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filters Bar */}
        <div className="py-4 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Buscar por nome ou WhatsApp..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl font-medium focus:ring-2 focus:ring-[#1B1145]"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 scrollbar-none">
            {['ALL', 'NOVO', 'EM_CONTATO', 'AULA_AGENDADA', 'MATRICULADO'].map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  statusFilter === st
                    ? 'bg-[#1B1145] text-amber-300 shadow'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {st === 'ALL' ? 'Todos' : st.replace('_', ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* Leads Table */}
        <div className="flex-1 overflow-y-auto border border-slate-200 rounded-2xl bg-slate-50/50">
          {filteredLeads.length === 0 ? (
            <div className="p-12 text-center text-slate-400 font-bold text-sm">
              Nenhum lead encontrado com o filtro selecionado.
            </div>
          ) : (
            <div className="divide-y divide-slate-200">
              {filteredLeads.map((lead) => {
                const whatsappFormatted = lead.whatsapp.replace(/\D/g, '');
                const whatsappMsg = encodeURIComponent(
                  `Olá ${lead.parentName}! Sou da coordenação do Reforço Escolar Borja Castillo em Jacobina-BA. Vimos seu interesse para o(a) ${lead.childName} (${lead.gradeLevel}). Gostaria de confirmar o agendamento da Aula Experimental?`
                );
                const whatsappLink = `https://wa.me/55${whatsappFormatted}?text=${whatsappMsg}`;

                return (
                  <div
                    key={lead.id}
                    className="p-4 bg-white hover:bg-amber-50/30 transition-colors flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                  >
                    {/* Left: Info */}
                    <div className="space-y-1 max-w-lg">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-extrabold text-[#1B1145] text-base">
                          {lead.childName}
                        </span>
                        <span className="text-xs text-slate-500 font-semibold">
                          (Resp: {lead.parentName})
                        </span>
                        <span className={`text-[10px] font-black px-2 py-0.5 rounded-full border ${statusBadges[lead.status]}`}>
                          {lead.status.replace('_', ' ')}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600 font-medium">
                        <span>📚 <strong>Série:</strong> {lead.gradeLevel}</span>
                        <span>🧮 <strong>Dificuldade:</strong> {lead.difficulties.join(', ')}</span>
                        <span>☀️ <strong>Turno:</strong> {lead.preferredShift}</span>
                      </div>

                      {lead.notes && (
                        <p className="text-[11px] text-slate-500 italic bg-slate-50 p-1.5 rounded border border-slate-100 mt-1">
                          "{lead.notes}"
                        </p>
                      )}

                      <span className="text-[10px] text-slate-400 block pt-0.5">
                        Cadastrado em {new Date(lead.createdAt).toLocaleString('pt-BR')} • Origem: {lead.source}
                      </span>
                    </div>

                    {/* Right: Actions */}
                    <div className="flex items-center gap-2 flex-shrink-0 w-full md:w-auto justify-end pt-2 md:pt-0 border-t md:border-0 border-slate-100">
                      {/* Status Selector */}
                      <select
                        value={lead.status}
                        onChange={(e) => onUpdateLeadStatus(lead.id, e.target.value as Lead['status'])}
                        className="px-2.5 py-1.5 text-xs bg-slate-100 border border-slate-200 rounded-lg font-bold text-slate-700"
                      >
                        <option value="NOVO">NOVO</option>
                        <option value="EM_CONTATO">EM CONTATO</option>
                        <option value="AULA_AGENDADA">AULA AGENDADA</option>
                        <option value="MATRICULADO">MATRICULADO</option>
                        <option value="ARQUIVADO">ARQUIVADO</option>
                      </select>

                      {/* WhatsApp 1-Click Button */}
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-bold text-xs flex items-center gap-1 shadow-sm"
                        title="Chamar pai/mãe no WhatsApp com mensagem modelo"
                      >
                        <MessageSquare className="w-3.5 h-3.5 fill-current" />
                        <span className="hidden sm:inline">WhatsApp</span>
                      </a>

                      {/* Delete */}
                      <button
                        onClick={() => onDeleteLead(lead.id)}
                        className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg"
                        title="Excluir lead"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="pt-4 flex justify-between items-center text-xs text-slate-500 font-semibold">
          <span>Dica: Os novos leads recebidos pelo site aparecem nesta lista instantaneamente!</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#1B1145] text-amber-300 font-bold rounded-xl"
          >
            Fechar Painel
          </button>
        </div>

      </div>
    </div>
  );
};
