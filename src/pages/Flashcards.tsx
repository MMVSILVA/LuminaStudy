import React, { useState } from 'react';
import { generateFlashcards, type Flashcard } from '../lib/gemini';
import { Loader2, Sparkles, ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export default function Flashcards() {
  const [text, setText] = useState('');
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleGenerate = async () => {
    if (!text.trim()) return;
    
    setIsLoading(true);
    setError('');
    setFlashcards([]);
    setCurrentIndex(0);
    setIsFlipped(false);
    
    try {
      const result = await generateFlashcards(text);
      if (result.length === 0) {
        throw new Error("Não foi possível gerar flashcards com este texto.");
      }
      setFlashcards(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ocorreu um erro.');
    } finally {
      setIsLoading(false);
    }
  };

  const nextCard = () => {
    if (currentIndex < flashcards.length - 1) {
      setIsFlipped(false);
      setTimeout(() => setCurrentIndex(prev => prev + 1), 150);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setIsFlipped(false);
      setTimeout(() => setCurrentIndex(prev => prev - 1), 150);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {flashcards.length === 0 ? (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-200 bg-slate-50">
            <h2 className="text-lg font-medium text-slate-900">Gerador de Flashcards</h2>
            <p className="text-sm text-slate-500 mt-1">Cole seu texto e a IA criará cartões de memorização automaticamente.</p>
          </div>
          
          <div className="p-6">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Cole o conteúdo da sua aula, artigo ou anotações aqui..."
              className="w-full h-64 p-4 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none resize-none transition-all"
            />
            
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleGenerate}
                disabled={isLoading || !text.trim()}
                className="bg-brand-600 hover:bg-brand-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl font-medium transition-all flex items-center gap-2"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Sparkles className="w-5 h-5" />
                )}
                {isLoading ? 'Gerando...' : 'Gerar Flashcards'}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div className="w-full flex justify-between items-center mb-8">
            <button 
              onClick={() => setFlashcards([])}
              className="text-slate-500 hover:text-slate-900 font-medium flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" /> Criar novos
            </button>
            <span className="bg-brand-100 text-brand-700 px-4 py-1.5 rounded-full font-medium text-sm">
              {currentIndex + 1} de {flashcards.length}
            </span>
          </div>

          {/* Flashcard */}
          <div className="w-full max-w-2xl aspect-[3/2] perspective-1000 mb-8">
            <motion.div
              className="w-full h-full relative preserve-3d cursor-pointer"
              animate={{ rotateX: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 20 }}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              {/* Front */}
              <div className="absolute inset-0 backface-hidden bg-white rounded-3xl border-2 border-slate-200 shadow-lg flex flex-col items-center justify-center p-12 text-center">
                <span className="absolute top-6 left-6 text-slate-400 font-medium text-sm uppercase tracking-wider">Pergunta</span>
                <h3 className="text-2xl md:text-3xl font-display font-medium text-slate-900">
                  {flashcards[currentIndex].front}
                </h3>
                <p className="absolute bottom-6 text-slate-400 text-sm">Clique para virar</p>
              </div>

              {/* Back */}
              <div 
                className="absolute inset-0 backface-hidden bg-brand-600 rounded-3xl border-2 border-brand-600 shadow-lg flex flex-col items-center justify-center p-12 text-center text-white"
                style={{ transform: 'rotateX(180deg)' }}
              >
                <span className="absolute top-6 left-6 text-brand-200 font-medium text-sm uppercase tracking-wider">Resposta</span>
                <h3 className="text-xl md:text-2xl font-medium">
                  {flashcards[currentIndex].back}
                </h3>
              </div>
            </motion.div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-6">
            <button
              onClick={prevCard}
              disabled={currentIndex === 0}
              className="p-4 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextCard}
              disabled={currentIndex === flashcards.length - 1}
              className="p-4 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

      {error && (
        <div className="mt-6 p-4 bg-red-50 text-red-600 rounded-xl border border-red-100">
          {error}
        </div>
      )}
    </div>
  );
}
