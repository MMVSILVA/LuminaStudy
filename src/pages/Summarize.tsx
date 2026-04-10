import React, { useState } from 'react';
import { generateSummary } from '../lib/gemini';
import { Loader2, Sparkles } from 'lucide-react';

export default function Summarize() {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSummarize = async () => {
    if (!text.trim()) return;
    
    setIsLoading(true);
    setError('');
    
    try {
      const result = await generateSummary(text);
      setSummary(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ocorreu um erro.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-200 bg-slate-50">
          <h2 className="text-lg font-medium text-slate-900">Cole seu texto abaixo</h2>
          <p className="text-sm text-slate-500 mt-1">A IA irá extrair os pontos principais e criar um resumo estruturado.</p>
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
              onClick={handleSummarize}
              disabled={isLoading || !text.trim()}
              className="bg-brand-600 hover:bg-brand-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl font-medium transition-all flex items-center gap-2"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Sparkles className="w-5 h-5" />
              )}
              {isLoading ? 'Resumindo...' : 'Gerar Resumo'}
            </button>
          </div>
        </div>
      </div>

      {error && (
        <div className="mt-6 p-4 bg-red-50 text-red-600 rounded-xl border border-red-100">
          {error}
        </div>
      )}

      {summary && (
        <div className="mt-8 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-200 bg-brand-50 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-brand-600" />
            <h2 className="text-lg font-medium text-brand-900">Resumo Gerado</h2>
          </div>
          <div className="p-8 prose prose-slate max-w-none">
            {summary.split('\n').map((line, i) => (
              <p key={i} className="mb-2">{line}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
