export interface Lead {
  id: string;
  parentName: string;
  childName: string;
  whatsapp: string;
  gradeLevel: string;
  difficulties: string[];
  preferredShift: string;
  notes?: string;
  status: "NOVO" | "EM_CONTATO" | "AULA_AGENDADA" | "MATRICULADO" | "ARQUIVADO";
  createdAt: string;
  source: string;
}

export interface Testimonial {
  id: string;
  studentName: string;
  parentName: string;
  gradeLevel: string;
  schoolName?: string;
  quote: string;
  resultBadge: string; // e.g. "Aprovado no 1º Ano Médio!", "Nota 4.5 ➔ 9.5 em Matemática"
  beforeScore?: string;
  afterScore?: string;
  rating: number;
  avatarUrl: string;
  category: "INFANTIL" | "FUND_1" | "FUND_2" | "MEDIO";
}

export interface PedagogicalPillar {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  bulletPoints: string[];
  highlightColor: string;
}

export interface GradeLevelInfo {
  id: string;
  title: string;
  subtitle: string;
  ageRange: string;
  description: string;
  keyPillars: string[];
  popularSubjects: string[];
  icon: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}
