import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function generateSummary(text: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Resuma o seguinte texto de forma clara, estruturada e concisa em português. Use tópicos se necessário para facilitar a leitura:\n\n${text}`,
    });
    return response.text;
  } catch (error) {
    console.error("Error generating summary:", error);
    throw new Error("Falha ao gerar o resumo. Tente novamente.");
  }
}

export interface Flashcard {
  id: string;
  front: string;
  back: string;
}

export async function generateFlashcards(text: string): Promise<Flashcard[]> {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Crie flashcards de estudo a partir do seguinte texto. 
      Retorne APENAS um array JSON válido com objetos contendo 'front' (pergunta ou conceito) e 'back' (resposta ou definição). 
      Não inclua crases, formatação markdown ou texto adicional no retorno, apenas o JSON puro.
      Exemplo de formato esperado: [{"front": "O que é X?", "back": "X é Y."}]
      
      Texto:\n${text}`,
    });
    
    let jsonStr = response.text || '[]';
    jsonStr = jsonStr.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    
    const parsed = JSON.parse(jsonStr);
    if (Array.isArray(parsed)) {
      return parsed.map((item, index) => ({
        id: crypto.randomUUID(),
        front: item.front || '',
        back: item.back || '',
      }));
    }
    return [];
  } catch (error) {
    console.error("Error generating flashcards:", error);
    throw new Error("Falha ao gerar flashcards. Tente novamente.");
  }
}
