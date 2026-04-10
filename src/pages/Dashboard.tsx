import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, FileText, ArrowRight } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-display font-bold text-slate-900 mb-2">Bem-vindo de volta! 👋</h2>
        <p className="text-slate-600">O que você gostaria de estudar hoje?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
          <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
            <FileText className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-display font-bold text-slate-900 mb-3">Resumir Texto</h3>
          <p className="text-slate-600 mb-6">Cole um texto longo e deixe a IA extrair os pontos principais para você.</p>
          <Link 
            to="/dashboard/summarize"
            className="inline-flex items-center gap-2 text-brand-600 font-medium hover:text-brand-700"
          >
            Começar a resumir <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
          <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-6">
            <BookOpen className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-display font-bold text-slate-900 mb-3">Gerar Flashcards</h3>
          <p className="text-slate-600 mb-6">Transforme suas anotações em flashcards interativos para memorização rápida.</p>
          <Link 
            to="/dashboard/flashcards"
            className="inline-flex items-center gap-2 text-brand-600 font-medium hover:text-brand-700"
          >
            Criar flashcards <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
