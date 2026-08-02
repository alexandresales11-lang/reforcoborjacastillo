import { Testimonial, PedagogicalPillar, GradeLevelInfo, FaqItem } from '../types';

export const SCHOOL_INFO = {
  name: "Reforço Escolar Borja Castillo",
  instagram: "reforcoborjacastillo",
  instagramUrl: "https://instagram.com/reforcoborjacastillo",
  whatsappNumber: "5574981566854",
  whatsappFormatted: "(74) 98156-6854",
  whatsappLink: "https://wa.me/5574981566854?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20Refor%C3%A7o%20Escolar%20Borja%20Castillo.",
  city: "Jacobina - BA",
  location: "Jacobina - Bahia",
  schedule: "Segunda a Sexta-feira (Aulas Presenciais)",
  gradesCovered: "Educação Infantil ao 1º Ano do Ensino Médio",
  mission: "Transformar dificuldades escolares em autoconfiança, motivação e notas altas através de ensino individualizado, leitura, diálogo e carinho pedagogicamente orientado."
};

export const STORY_HIGHLIGHTS = [
  {
    id: "conhecimento",
    title: "Conhecimento",
    iconName: "Brain",
    emoji: "💡",
    color: "from-amber-400 to-yellow-500",
    description: "Metodologia ativa e estruturada para fixação sólida dos conteúdos escolares, eliminando dúvidas de raiz."
  },
  {
    id: "dialogo",
    title: "Diálogo",
    iconName: "MessageCircle",
    emoji: "💎",
    color: "from-purple-500 to-indigo-600",
    description: "Parceria próxima com as famílias. Escuta ativa do aluno para compreender medos e bloqueios de aprendizagem."
  },
  {
    id: "diversao",
    title: "Diversão",
    iconName: "Sparkles",
    emoji: "🎉",
    color: "from-pink-500 to-amber-500",
    description: "Ambiente leve, alegre e estimulante. O estudo deixa de ser um fardo e vira um momento de conquista!"
  },
  {
    id: "leitura",
    title: "Leitura",
    iconName: "BookOpen",
    emoji: "📚",
    color: "from-blue-500 to-cyan-500",
    description: "Incentivo constante à leitura crítica, caligrafia e interpretação de texto — base para todas as disciplinas."
  },
  {
    id: "feedbacks",
    title: "Feedbacks",
    iconName: "BarChart3",
    emoji: "🧮",
    color: "from-emerald-500 to-teal-600",
    description: "Acompanhamento transparente do progresso do aluno com retornos frequentes para os pais."
  },
  {
    id: "quemsomos",
    title: "Quem somos?",
    iconName: "HeartHandshake",
    emoji: "🏫",
    color: "from-purple-600 to-yellow-500",
    description: "Tradição em reforço escolar em Jacobina-BA, combinando disciplina pedagógica com acolhimento afetivo."
  }
];

export const PEDAGOGICAL_PILLARS: PedagogicalPillar[] = [
  {
    id: "atendimento-individual",
    title: "Acompanhamento Individualizado",
    tagline: "Cada criança aprende no seu próprio ritmo",
    description: "Diferente da sala de aula tradicional com muitos alunos, no Borja Castillo identificamos exatamente onde está a lacuna do aprendizado de cada estudante e trabalhamos de forma cirúrgica.",
    iconName: "UserCheck",
    bulletPoints: [
      "Turmas reduzidas e atenção direta do professor",
      "Diagnóstico inicial das dificuldades específicas",
      "Ritmo adaptado para superar bloqueios"
    ],
    highlightColor: "border-purple-500 text-purple-600 bg-purple-50"
  },
  {
    id: "estimulo-leitura",
    title: "Foco em Leitura & Interpretação",
    tagline: "A chave para entender matemática, história e todas as matérias",
    description: "Grande parte das notas baixas vem da falta de interpretação dos enunciados das questões. Desenvolvemos o gosto pela leitura e o raciocínio lógico.",
    iconName: "BookMarked",
    bulletPoints: [
      "Exercícios contínuos de interpretação de texto",
      "Melhoria na caligrafia e produção textual",
      "Domínio de enunciados em provas e testes"
    ],
    highlightColor: "border-amber-500 text-amber-600 bg-amber-50"
  },
  {
    id: "preparacao-provas",
    title: "Preparação para Provas & Testes",
    tagline: "Estratégia e revisão antes dos exames escolares",
    description: "Realizamos simulados direcionados e revisões com os conteúdos exigidos pelas escolas de Jacobina, preparando o aluno com antecedência para evitar o nervosismo da véspera.",
    iconName: "Award",
    bulletPoints: [
      "Revisão focada no calendário de provas da escola do aluno",
      "Técnicas para vencer a ansiedade antes da avaliação",
      "Resolução prática de listas de exercícios"
    ],
    highlightColor: "border-indigo-500 text-indigo-600 bg-indigo-50"
  },
  {
    id: "rotina-autonomia",
    title: "Criação de Rotina e Disciplina de Estudo",
    tagline: "Construindo o hábito de estudar todos os dias",
    description: "Ensinamos o aluno a organizar seu tempo, fazer as tarefas de casa sem choro ou procrastinação e desenvolver autonomia para a vida toda.",
    iconName: "CalendarCheck",
    bulletPoints: [
      "Organização diária das tarefas de casa (deveres)",
      "Método visual de estudos e gerenciamento do tempo",
      "Eliminação do hábito de estudar só no dia da prova"
    ],
    highlightColor: "border-emerald-500 text-emerald-600 bg-emerald-50"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "dep-1",
    studentName: "Lucas Gabriel",
    parentName: "Juliana Santos (Mãe do Lucas)",
    gradeLevel: "1º Ano do Ensino Médio",
    schoolName: "Escola em Jacobina - BA",
    quote: "O Lucas estava desesperado com as matérias do 1º ano do Ensino Médio, principalmente Matemática e Física. No Reforço Borja Castillo ele encontrou professores pacientes que explicaram do jeito dele. Foi aprovado direto sem precisar de recuperação final!",
    resultBadge: "Aprovado no 1º Ano Médio!",
    beforeScore: "Média 4.2",
    afterScore: "Média 8.8",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200",
    category: "MEDIO"
  },
  {
    id: "dep-2",
    studentName: "Clara Beatriz",
    parentName: "Fernanda Oliveira (Mãe da Clara)",
    gradeLevel: "4º Ano - Ensino Fundamental I",
    schoolName: "Colégio de Jacobina",
    quote: "Minha filha tinha muito bloqueio com leitura e vergonha de ler em voz alta. Depois do acompanhamento no Borja Castillo, ela se apaixonou pelos livros e a nota de Português subiu para 9.5! O carinho e a paciência da equipe fazem toda diferença.",
    resultBadge: "Leitura Fluida & Nota 9.5 em Português",
    beforeScore: "Média 5.0",
    afterScore: "Média 9.5",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
    category: "FUND_1"
  },
  {
    id: "dep-3",
    studentName: "Arthur Vinícius",
    parentName: "Carlos Eduardo (Pai do Arthur)",
    gradeLevel: "7º Ano - Ensino Fundamental II",
    schoolName: "Escola de Jacobina - BA",
    quote: "Estudar em casa era motivo de briga diária na nossa família. O Arthur acumulava tarefas e tirava notas baixas. Quando entrou no reforço presencial, ele criou uma rotina de estudos maravilhosa. Hoje ele mesmo faz as lições com orgulho!",
    resultBadge: "Recuperou o Ano Sem Estresse!",
    beforeScore: "Média 4.8",
    afterScore: "Média 8.5",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    category: "FUND_2"
  },
  {
    id: "dep-4",
    studentName: "Sofia Maria",
    parentName: "Patrícia Barbosa (Mãe da Sofia)",
    gradeLevel: "Educação Infantil / Alfabetização",
    schoolName: "Educação Infantil em Jacobina",
    quote: "O reforço escolar no Borja Castillo trouxe um desenvolvimento incrível para a alfabetização da Sofia. As atividades lúdicas e o afeto com que ensinam fazem ela pedir para ir todos os dias!",
    resultBadge: "Alfabetização Lúdica & Conquista",
    beforeScore: "Dificuldade na escrita",
    afterScore: "Lendo palavras e frases",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    category: "INFANTIL"
  },
  {
    id: "dep-5",
    studentName: "Matheus Henrique",
    parentName: "Renata Costa (Mãe do Matheus)",
    gradeLevel: "8º Ano - Ensino Fundamental II",
    schoolName: "Escola de Jacobina",
    quote: "A cada final de unidade eu fico impressionada com os feedbacks que a equipe do Borja Castillo nos envia. Não é só dar aula, é cuidar do futuro da criança. O Matheus fechou o boletim com notas azuis em todas as matérias!",
    resultBadge: "Boletim 100% Nota Azul!",
    beforeScore: "3 Matérias vermelhas",
    afterScore: "Todas acima de 8.0",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    category: "FUND_2"
  }
];

export const GRADE_LEVELS: GradeLevelInfo[] = [
  {
    id: "infantil",
    title: "Educação Infantil",
    subtitle: "Primeiros Passos com Amor e Estímulo Lúdico",
    ageRange: "3 a 5 anos",
    description: "Desenvolvimento do gosto pelo aprendizado desde os primeiros anos de vida, com incentivo à coordenação motora, linguagem, números e pré-alfabetização.",
    keyPillars: [
      "Alfabetização afetiva e lúdica",
      "Coordenação motora fina e raciocínio com jogos",
      "Estímulo à fala, vocabulário e convivência"
    ],
    popularSubjects: ["Pré-Alfabetização", "Raciocínio Lógico Infantil", "Linguagem e Expressão"],
    icon: "Baby"
  },
  {
    id: "fund-1",
    title: "Ensino Fundamental I",
    subtitle: "1º ao 5º Ano: Base Sólida para a Vida Toda",
    ageRange: "6 a 10 anos",
    description: "Fase crucial de consolidação da alfabetização, leitura fluida, cálculo mental e hábitos de dever de casa diário sem resistência.",
    keyPillars: [
      "Leitura interpretativa e caligrafia legível",
      "Operações matemáticas fundamentais sem trauma",
      "Acompanhamento diário das tarefas da escola"
    ],
    popularSubjects: ["Português e Leitura", "Matemática", "Ciências", "História e Geografia"],
    icon: "GraduationCap"
  },
  {
    id: "fund-2",
    title: "Ensino Fundamental II",
    subtitle: "6º ao 9º Ano: Autonomia e Superação de Dificuldades",
    ageRange: "11 a 14 anos",
    description: "Preparação para o aumento da complexidade escolar. Foco em raciocínio abstrato, redação, ciências exatas e rotina de exames.",
    keyPillars: [
      "Matemática avançada, frações, equações e geometria",
      "Interpretação e produção de texto estruturada",
      "Organização de cronogramas de estudo para provas"
    ],
    popularSubjects: ["Matemática", "Língua Portuguesa & Redação", "Ciências", "História", "Geografia"],
    icon: "BookOpenCheck"
  },
  {
    id: "medio-1",
    title: "1º Ano do Ensino Médio",
    subtitle: "Transição Segura e Preparação de Alto Nível",
    ageRange: "14 a 16 anos",
    description: "O primeiro ano do Ensino Médio traz disciplinas novas e cobrança mais intensa. Oferecemos suporte direcionado para garantir aprovação e alto rendimento.",
    keyPillars: [
      "Acompanhamento em Física, Química e Matemática",
      "Técnicas de estudo focado para avaliações densas",
      "Superação de lacunas vindas dos anos anteriores"
    ],
    popularSubjects: ["Matemática", "Física", "Química", "Gramática e Redação"],
    icon: "School"
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: "Geral",
    question: "Como funcionam as aulas presenciais no Borja Castillo?",
    answer: "As aulas acontecem de segunda a sexta-feira na nossa unidade em Jacobina - BA. Oferecemos turmas em horários estratégicos nos turnos da manhã e da tarde, onde os alunos recebem acompanhamento direto e individualizado nas suas lições e matérias."
  },
  {
    category: "Pedagógico",
    question: "Quais séries são atendidas no reforço escolar?",
    answer: "Atendemos alunos desde a Educação Infantil até o 1º Ano do Ensino Médio, oferecendo suporte completo de acordo com a exigência pedagógica de cada faixa etária."
  },
  {
    category: "Matrículas",
    question: "Como funciona a Aula Experimental Gratuita?",
    answer: "A aula experimental é uma oportunidade para seu filho conhecer o ambiente do reforço, interagir com nossos professores e realizarmos um diagnóstico inicial das necessidades dele sem qualquer compromisso!"
  },
  {
    category: "Comunicação",
    question: "Como os pais acompanham o desempenho do aluno?",
    answer: "Temos um canal aberto e constante via WhatsApp e retornos periódicos (Feedbacks) com os pais sobre o boletim, presença, evolução na leitura e notas nas provas da escola."
  },
  {
    category: "Diferenciais",
    question: "Vocês auxiliam nas tarefas de casa (deveres da escola)?",
    answer: "Sim! Além de preparar para as provas e tirar dúvidas dos conteúdos complexos, orientamos e acompanhamos a realização completa dos deveres de casa da escola do aluno."
  }
];
