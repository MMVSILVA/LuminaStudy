import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  BrainCircuit, 
  FileText, 
  Gamepad2, 
  GraduationCap, 
  Layers, 
  Lightbulb, 
  Menu, 
  Sparkles, 
  Target, 
  X,
  ChevronRight,
  CheckCircle2,
  Globe2,
  ArrowRight
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="bg-brand-600 p-2 rounded-xl">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <span className="font-display font-bold text-2xl text-slate-900 tracking-tight">LuminaStudy</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-600 hover:text-brand-600 font-medium transition-colors">Recursos</a>
            <a href="#smart-study" className="text-slate-600 hover:text-brand-600 font-medium transition-colors">Estudo Inteligente</a>
            <a href="#pricing" className="text-slate-600 hover:text-brand-600 font-medium transition-colors">Preços</a>
            <div className="flex items-center gap-4 ml-4">
              <Link to="/dashboard" className="text-slate-900 font-medium hover:text-brand-600 transition-colors">Entrar</Link>
              <Link to="/dashboard" className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-sm hover:shadow-md">
                Comece Grátis
              </Link>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-4 shadow-lg">
          <a href="#features" className="block text-slate-600 font-medium py-2">Recursos</a>
          <a href="#smart-study" className="block text-slate-600 font-medium py-2">Estudo Inteligente</a>
          <a href="#pricing" className="block text-slate-600 font-medium py-2">Preços</a>
          <div className="pt-4 flex flex-col gap-3">
            <Link to="/dashboard" className="w-full border border-slate-200 text-slate-900 font-medium py-2.5 rounded-xl text-center">Entrar</Link>
            <Link to="/dashboard" className="w-full bg-brand-600 text-white font-medium py-2.5 rounded-xl text-center">Comece Grátis</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-100/50 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent-400/20 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-5xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 text-brand-700 font-medium text-sm mb-8"
        >
          <Sparkles className="w-4 h-4" />
          <span>Ferramentas de Estudo com IA Premiadas</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-display font-bold text-slate-900 leading-[1.1] tracking-tight mb-6"
        >
          Não apenas memorize.<br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600">Domine o seu material.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Reduza o estresse e economize tempo com o LuminaStudy. Crie guias de estudo, flashcards e testes práticos com IA em segundos.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/dashboard" className="w-full sm:w-auto bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-full font-medium text-lg transition-all shadow-lg shadow-brand-500/30 flex items-center justify-center gap-2">
            Criar Conta Grátis <ArrowRight className="w-5 h-5" />
          </Link>
          <button className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-medium text-lg transition-all flex items-center justify-center gap-2">
            Veja Como Funciona
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  return (
    <section className="py-10 border-y border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Globe2 className="w-6 h-6 text-brand-500" />
          <h2 className="text-lg font-medium text-slate-600">Amado por estudantes em mais de 200 países e territórios</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
          <div className="font-display font-bold text-2xl">Stanford</div>
          <div className="font-display font-bold text-2xl">MIT</div>
          <div className="font-display font-bold text-2xl">Oxford</div>
          <div className="font-display font-bold text-2xl">Harvard</div>
          <div className="font-display font-bold text-2xl">Cambridge</div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon: Icon, title, description, colorClass }: { icon: any, title: string, description: string, colorClass: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all"
  >
    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${colorClass}`}>
      <Icon className="w-7 h-7" />
    </div>
    <h3 className="text-2xl font-display font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </motion.div>
);

const Features = () => {
  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Conheça Nossos Recursos</h2>
          <p className="text-lg text-slate-600">Tudo o que você precisa para gabaritar sua próxima prova, impulsionado por IA avançada.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={FileText}
            title="Resumir"
            description="Faça upload de qualquer documento, PDF ou cole o texto. Nossa IA extrai instantaneamente os conceitos-chave e cria um resumo conciso."
            colorClass="bg-blue-100 text-blue-600"
          />
          <FeatureCard 
            icon={BookOpen}
            title="Guia de Estudo"
            description="Gere guias de estudo abrangentes adaptados ao seu plano de ensino. Nós organizamos o caos em caminhos de aprendizado claros e estruturados."
            colorClass="bg-purple-100 text-purple-600"
          />
          <FeatureCard 
            icon={Layers}
            title="Memorizar"
            description="Gere automaticamente flashcards inteligentes a partir de suas anotações. Perfeito para revisões rápidas antes da grande prova."
            colorClass="bg-orange-100 text-orange-600"
          />
          <FeatureCard 
            icon={Target}
            title="Testes Práticos"
            description="Teste seus conhecimentos com questionários gerados por IA. Múltipla escolha, respostas curtas e questões dissertativas baseadas no seu material."
            colorClass="bg-emerald-100 text-emerald-600"
          />
          <FeatureCard 
            icon={BrainCircuit}
            title="Estudo Inteligente"
            description="Nosso algoritmo aprende como você aprende. Ele agenda revisões no momento perfeito para maximizar a retenção."
            colorClass="bg-pink-100 text-pink-600"
          />
          <FeatureCard 
            icon={GraduationCap}
            title="Avaliador de Redação"
            description="Receba feedback instantâneo sobre suas redações. Verificamos clareza, força do argumento e correção gramatical."
            colorClass="bg-indigo-100 text-indigo-600"
          />
        </div>
      </div>
    </section>
  );
};

const SmartStudy = () => {
  return (
    <section id="smart-study" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-400/10 text-accent-500 font-medium text-sm mb-6">
              <BrainCircuit className="w-4 h-4" />
              <span>Estudo Baseado em Pesquisas</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
              Estude de forma mais inteligente com o <span className="text-brand-600">Estudo Inteligente</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Pare de estudar de última hora. O LuminaStudy usa princípios da ciência cognitiva para ajudar você a reter informações por mais tempo e lembrá-las mais rápido.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 bg-brand-100 w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Repetição Espaçada</h4>
                  <p className="text-slate-600">Mostramos a informação logo antes de você esquecê-la, fortalecendo sua memória ao longo do tempo.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 bg-brand-100 w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Recordação Ativa</h4>
                  <p className="text-slate-600">Em vez de ler passivamente, testamos constantemente seu conhecimento para construir caminhos neurais mais fortes.</p>
                </div>
              </div>
            </div>
            
            <Link to="/dashboard" className="mt-10 inline-flex bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-medium transition-all items-center gap-2">
              Experimente o Estudo Inteligente <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-100 to-purple-100 rounded-[3rem] transform rotate-3 scale-105 -z-10"></div>
            <div className="bg-white border border-slate-200 rounded-[3rem] p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-100">
                <div>
                  <h3 className="font-bold text-lg text-slate-900">Biologia 101</h3>
                  <p className="text-slate-500 text-sm">Respiração Celular</p>
                </div>
                <div className="bg-brand-50 text-brand-600 px-3 py-1 rounded-full text-sm font-medium">
                  Revisão Pendente
                </div>
              </div>
              
              <div className="bg-slate-50 rounded-2xl p-8 text-center mb-6 min-h-[200px] flex items-center justify-center">
                <p className="text-xl font-medium text-slate-800">Qual é o papel principal do ATP no metabolismo celular?</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <button className="bg-white border-2 border-slate-200 hover:border-brand-500 rounded-xl p-4 text-slate-700 font-medium transition-colors">
                  Armazenamento de energia
                </button>
                <button className="bg-white border-2 border-slate-200 hover:border-brand-500 rounded-xl p-4 text-slate-700 font-medium transition-colors">
                  Moeda de energia
                </button>
                <button className="bg-white border-2 border-slate-200 hover:border-brand-500 rounded-xl p-4 text-slate-700 font-medium transition-colors">
                  Suporte estrutural
                </button>
                <button className="bg-white border-2 border-slate-200 hover:border-brand-500 rounded-xl p-4 text-slate-700 font-medium transition-colors">
                  Catalisador
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Gamification = () => {
  return (
    <section className="py-24 bg-brand-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-600 rounded-full blur-[120px] opacity-50 -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm border border-white/20">
            <Gamepad2 className="w-8 h-8 text-accent-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Mais Perguntas, Mais Jogos, Mais Diversão!</h2>
          <p className="text-xl text-brand-100 mb-10 leading-relaxed">
            Estudar não precisa ser chato. Ganhe pontos, desbloqueie conquistas e compita com amigos enquanto domina suas matérias.
          </p>
          <Link to="/dashboard" className="inline-block bg-accent-500 hover:bg-accent-400 text-slate-900 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-accent-500/20">
            Junte-se à Diversão
          </Link>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-brand-600 p-1.5 rounded-lg">
                <Lightbulb className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl text-slate-900">LuminaStudy</span>
            </div>
            <p className="text-slate-500 mb-6">
              Capacitando estudantes em todo o mundo a aprender mais rápido, lembrar por mais tempo e alcançar seus objetivos acadêmicos.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Produto</h4>
            <ul className="space-y-3 text-slate-500">
              <li><a href="#" className="hover:text-brand-600 transition-colors">Recursos</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Estudo Inteligente</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Preços</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Escolas</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Recursos</h4>
            <ul className="space-y-3 text-slate-500">
              <li><a href="#" className="hover:text-brand-600 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Dicas de Estudo</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Comunidade</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Empresa</h4>
            <ul className="space-y-3 text-slate-500">
              <li><a href="#" className="hover:text-brand-600 transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Termos de Serviço</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} LuminaStudy. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default function Landing() {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-200 selection:text-brand-900">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <SmartStudy />
        <Gamification />
      </main>
      <Footer />
    </div>
  );
}
