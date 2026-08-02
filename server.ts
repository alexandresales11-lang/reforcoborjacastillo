import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface Lead {
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

// In-memory persistent storage for server lifetime
let leadsStore: Lead[] = [
  {
    id: "lead-1",
    parentName: "Mariana Silva",
    childName: "Lucas Silva",
    whatsapp: "74981234567",
    gradeLevel: "4º ano - Fundamental I",
    difficulties: ["Matemática", "Português (Leitura)"],
    preferredShift: "Tarde",
    notes: "Interessado em reforço para provas mensais",
    status: "NOVO",
    createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
    source: "Site - Form Hero"
  },
  {
    id: "lead-2",
    parentName: "Roberto Lima",
    childName: "GABRIEL LIMA",
    whatsapp: "74991122334",
    gradeLevel: "7º ano - Fundamental II",
    difficulties: ["Matemática", "História/Geografia"],
    preferredShift: "Manhã",
    notes: "Dificuldade em manter rotina de estudos em casa",
    status: "EM_CONTATO",
    createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
    source: "Diagnóstico Rápido"
  }
];

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", app: "Reforço Escolar Borja Castillo" });
  });

  // Get all leads
  app.get("/api/leads", (_req, res) => {
    res.json({ success: true, count: leadsStore.length, leads: leadsStore });
  });

  // Create new lead
  app.post("/api/leads", (req, res) => {
    try {
      const { parentName, childName, whatsapp, gradeLevel, difficulties, preferredShift, notes, source } = req.body;

      if (!parentName || !whatsapp || !childName) {
        return res.status(400).json({ success: false, error: "Nome do responsável, nome do aluno e WhatsApp são obrigatórios." });
      }

      const newLead: Lead = {
        id: "lead-" + Date.now(),
        parentName: String(parentName).trim(),
        childName: String(childName).trim(),
        whatsapp: String(whatsapp).replace(/\D/g, ""),
        gradeLevel: String(gradeLevel || "Não informado"),
        difficulties: Array.isArray(difficulties) ? difficulties : difficulties ? [String(difficulties)] : ["Reforço Geral"],
        preferredShift: String(preferredShift || "Flexível"),
        notes: notes ? String(notes).trim() : "",
        status: "NOVO",
        createdAt: new Date().toISOString(),
        source: source || "Formulário Principal"
      };

      leadsStore.unshift(newLead);
      console.log(" Novo Lead Capturado:", newLead.childName, newLead.whatsapp);

      return res.status(201).json({
        success: true,
        message: "Lead cadastrado com sucesso! Entraremos em contato em breve.",
        lead: newLead
      });
    } catch (err) {
      console.error("Erro ao salvar lead:", err);
      return res.status(500).json({ success: false, error: "Erro interno do servidor ao registrar lead." });
    }
  });

  // Update lead status
  app.patch("/api/leads/:id", (req, res) => {
    const { id } = req.params;
    const { status, notes } = req.body;

    const leadIndex = leadsStore.findIndex((l) => l.id === id);
    if (leadIndex === -1) {
      return res.status(404).json({ success: false, error: "Lead não encontrado." });
    }

    if (status) {
      leadsStore[leadIndex].status = status;
    }
    if (notes !== undefined) {
      leadsStore[leadIndex].notes = notes;
    }

    return res.json({ success: true, lead: leadsStore[leadIndex] });
  });

  // Delete lead
  app.delete("/api/leads/:id", (req, res) => {
    const { id } = req.params;
    leadsStore = leadsStore.filter((l) => l.id !== id);
    return res.json({ success: true, message: "Lead removido com sucesso." });
  });

  // Gemini Pedagogical Diagnostic Helper Endpoint
  app.post("/api/diagnostic", async (req, res) => {
    try {
      const { childName, gradeLevel, difficulties } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey) {
        return res.json({
          success: true,
          aiAdvice: `Com o acompanhamento personalizado do Borja Castillo para o ${gradeLevel}, o ${childName || "aluno"} receberá foco específico em ${Array.isArray(difficulties) ? difficulties.join(", ") : difficulties}, com técnicas ludopedagógicas, reforço na leitura e rotina semanal de estudos!`
        });
      }

      const ai = new GoogleGenAI({ apiKey });
      const prompt = `Você é a coordenação pedagógica do Reforço Escolar Borja Castillo em Jacobina-BA. 
Escreva uma mensagem curta, acolhedora, profissional e motivadora (no máximo 3 frases) em português para os pais do aluno(a) ${childName || "aluno"} que está no ${gradeLevel} e tem dificuldade em: ${Array.isArray(difficulties) ? difficulties.join(", ") : difficulties}.
Destaque como nossa metodologia de reforço presencial (foco em leitura, diálogo, motivação e acompanhamento individualizado) vai transformar essa dificuldade em facilidade e aprovação!`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt
      });

      const text = response.text?.trim() || "Nossa equipe pedagógica preparará um plano personalizado para o seu filho!";

      return res.json({ success: true, aiAdvice: text });
    } catch (err) {
      console.error("Gemini Diagnostic Error:", err);
      return res.json({
        success: true,
        aiAdvice: "No Reforço Escolar Borja Castillo, cada aluno conta com um plano exclusivo de estudo que transforma suas dúvidas em notas altas e auto-confiança!"
      });
    }
  });

  // Vite development middleware vs Static Production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`✨ Reforço Escolar Borja Castillo Server running on http://localhost:${PORT}`);
  });
}

startServer();
