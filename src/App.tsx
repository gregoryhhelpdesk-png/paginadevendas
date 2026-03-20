import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  ChevronRight, 
  Clock, 
  ShieldCheck, 
  Star, 
  AlertTriangle, 
  Smartphone, 
  Lock,
  ArrowRight,
  Gift
} from 'lucide-react';
import { useEffect, useState } from 'react';

const CHECKOUT_URL = "https://pay.kiwify.com.br/QHcQmqI";

// Assets
const HERO_IMAGE = "/hero.png";
const SOLUTION_IMAGE = "/solution.png";
const PRODUCTION_IMAGE = "/production.png";

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex items-center justify-center gap-3 text-red-600 font-black text-3xl my-6 bg-red-50 p-4 rounded-2xl border-2 border-red-200 shadow-inner">
      <Clock className="animate-pulse" size={28} />
      <span>
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </span>
    </div>
  );
}

function CTAButton({ text, className = "", subtext = "" }) {
  return (
    <div className={`flex flex-col items-center gap-3 w-full max-w-lg mx-auto ${className}`}>
      <motion.a
        href={CHECKOUT_URL}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="block w-full bg-green-600 hover:bg-green-500 text-white text-center font-black text-xl md:text-2xl py-5 px-6 rounded-2xl shadow-[0_8px_0_rgb(21,128,61)] hover:shadow-[0_4px_0_rgb(21,128,61)] transition-all uppercase tracking-tight flex items-center justify-center gap-3 active:translate-y-1"
      >
        {text}
        <ArrowRight size={28} />
      </motion.a>
      {subtext && <p className="text-stone-500 font-bold text-sm text-center flex items-center justify-center gap-2">
        {subtext}
      </p>}
    </div>
  );
}

const TrustBadges = () => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 text-xs md:text-sm font-bold text-stone-500 uppercase tracking-wide">
    <div className="flex items-center justify-center gap-2 bg-stone-100 py-2 px-3 rounded-full border border-stone-200">
      <CheckCircle2 size={16} className="text-green-600" /> Acesso imediato
    </div>
    <div className="flex items-center justify-center gap-2 bg-stone-100 py-2 px-3 rounded-full border border-stone-200">
      <Smartphone size={16} className="text-green-600" /> Funciona no celular
    </div>
    <div className="flex items-center justify-center gap-2 bg-stone-100 py-2 px-3 rounded-full border border-stone-200">
      <Lock size={16} className="text-green-600" /> Compra 100% segura
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-green-100 overflow-x-hidden">
      
      {/* 🎯 HERO SECTION */}
      <header className="relative bg-white pt-10 pb-16 px-6 border-b border-stone-100">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6">
            Método Prático e Lucrativo
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-center leading-[1.1] mb-6 tracking-tight">
            Como pessoas comuns estão fazendo até <span className="text-green-600 bg-green-50 px-2 rounded-lg">R$3.000 por mês</span> vendendo doces de casa (mesmo começando do zero)
          </h1>
          
          <p className="text-lg md:text-xl text-center text-stone-600 mb-8 max-w-2xl font-medium leading-relaxed">
            Sem experiência, sem investimento alto e usando apenas a sua cozinha.
          </p>

          <div className="w-full max-w-2xl relative rounded-3xl overflow-hidden shadow-2xl mb-10 border-8 border-white ring-1 ring-stone-200">
            <img 
              src={HERO_IMAGE} 
              alt="Mulher fazendo doces de forma artesanal em sua cozinha" 
              className="w-full aspect-video object-cover"
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur shadow-lg px-3 py-2 rounded-xl flex items-center gap-2 border border-white">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full bg-stone-200 border-2 border-white overflow-hidden"><img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+10}`} /></div>)}
              </div>
              <span className="text-[10px] font-black uppercase">+1.247 alunas</span>
            </div>
          </div>

          <div className="text-center mb-8">
            <p className="text-stone-400 line-through text-lg mb-1 font-bold">De R$ 147,00</p>
            <p className="text-4xl md:text-5xl font-black text-stone-900">Por apenas <span className="text-green-600 underline">R$ 19,90</span></p>
          </div>

          <CTAButton text="QUERO COMEÇAR AGORA" />
          <TrustBadges />
        </div>
      </header>

      {/* 🔥 PROBLEMA SECTION */}
      <section className="py-20 px-6 bg-stone-900 text-white relative">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-10 text-center tracking-tight">
            Você está cansada de...
          </h2>
          
          <div className="grid gap-4 mb-12">
            {[
              "Contar moedas no fim do mês?",
              "Depender financeiramente de outras pessoas?",
              "Não conseguir dar uma vida melhor para sua família?",
              "Trabalhar muito e nunca ver resultado?"
            ].map((item, i) => (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="flex items-center gap-4 bg-stone-800/50 p-6 rounded-2xl border border-stone-700/50"
              >
                <div className="bg-red-500/10 p-2 rounded-lg">
                  <AlertTriangle className="text-red-500" size={24} />
                </div>
                <span className="text-lg md:text-xl font-bold text-stone-200">{item}</span>
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-green-600 to-green-700 p-8 rounded-3xl shadow-xl transform -rotate-1">
            <p className="text-xl md:text-2xl font-black text-center text-white italic drop-shadow-md">
              "Chega de passar vontade. A solução pode começar hoje, dentro da sua própria cozinha."
            </p>
          </div>
        </div>
      </section>

      {/* 💡 QUEBRA DE CRENÇA SECTION */}
      <section className="py-20 px-6 bg-white border-b border-stone-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <CheckCircle2 className="mx-auto text-green-600 mb-4" size={40} />
              <p className="text-xl font-black">Você não precisa de experiência</p>
            </div>
            <div className="p-6">
              <CheckCircle2 className="mx-auto text-green-600 mb-4" size={40} />
              <p className="text-xl font-black">Não precisa investir muito dinheiro</p>
            </div>
            <div className="p-6">
              <CheckCircle2 className="mx-auto text-green-600 mb-4" size={40} />
              <p className="text-xl font-black">E não precisa complicar</p>
            </div>
          </div>
          <p className="mt-12 text-2xl font-black text-stone-500 italic">É possível começar simples e ir evoluindo</p>
        </div>
      </section>

      {/* 🍫 SOLUÇÃO SECTION */}
      <section className="py-20 px-6 bg-stone-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
              O Vida Doce com Propósito é um método simples e direto para quem quer começar do zero e gerar renda com doces.
            </h2>
            <div className="mb-8">
              <CTAButton text="QUERO MINHA RENDA EXTRA" className="max-w-none" />
            </div>
          </div>
          <div className="relative">
            <img 
              src={SOLUTION_IMAGE} 
              alt="Doces gourmet organizados de forma profissional" 
              className="rounded-3xl shadow-2xl border-4 border-white"
            />
            <div className="absolute -bottom-6 -right-6 bg-amber-400 p-6 rounded-2xl shadow-xl font-black text-stone-900 transform rotate-3 border-2 border-stone-900">
              RESULTADO REAL!
            </div>
          </div>
        </div>
      </section>

      {/* 📦 BENEFÍCIOS SECTION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-12 text-center">Garantindo o seu sucesso passo a passo:</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Como começar do zero mesmo sem experiência",
              "Receitas simples que vendem fácil",
              "Como vender pelo WhatsApp",
              "Como cobrar corretamente e ter lucro",
              "Como encontrar clientes todos os dias",
              "Como começar mesmo com pouco dinheiro"
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-stone-50 rounded-2xl border border-stone-100 hover:border-green-200 transition-colors">
                <CheckCircle2 className="text-green-600 shrink-0" size={24} />
                <span className="font-bold text-lg text-stone-700 leading-tight">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 💬 PROVA SOCIAL SECTION */}
      <section className="py-20 px-6 bg-stone-100/50">
        <div className="max-w-5xl mx-auto">
          <p className="text-center font-black text-green-600 uppercase tracking-widest mb-4">Evidência Real</p>
          <h2 className="text-4xl font-black text-center mb-16 underline decoration-green-300 underline-offset-8 text-stone-900">Veja quem já começou:</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Comecei sem saber nada e já estou vendendo na minha rua. O retorno foi imediato!",
                author: "Mariana S., São Paulo"
              },
              {
                text: "Com poucos ingredientes já consegui minhas primeiras vendas. As receitas são incríveis.",
                author: "Lucia R., Curitiba"
              },
              {
                text: "Hoje já consigo uma renda extra todo mês que paga minhas contas principais.",
                author: "Carla T., Rio de Janeiro"
              }
            ].map((dep, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200 flex flex-col justify-between">
                <div className="flex gap-1 mb-6 text-amber-400">
                  {[1,2,3,4,5].map(s => <Star key={s} size={20} fill="currentColor" />)}
                </div>
                <p className="text-lg font-bold text-stone-600 italic mb-6 leading-relaxed">"{dep.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-stone-200"></div>
                  <span className="font-black text-stone-900 text-sm">{dep.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 💰 OFERTA SECTION */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-green-50 rounded-full -z-10 blur-3xl opacity-50"></div>
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white p-10 md:p-16 rounded-[40px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border-2 border-stone-100 relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-red-600 text-white px-8 py-2 rounded-full font-black text-lg uppercase tracking-tighter animate-bounce shadow-xl">
              Oferta Especial
            </div>
            
            <p className="text-stone-400 font-bold mb-2 uppercase tracking-widest">Valor Normal: R$ 147,00</p>
            <h2 className="text-6xl md:text-8xl font-black text-stone-900 mb-6 tracking-tighter">
              HOJE: <span className="text-green-600">R$ 19,90</span>
            </h2>
            
            <p className="text-xl md:text-2xl font-bold text-stone-600 mb-8 max-w-sm mx-auto leading-tight italic">
              Menos que uma pizza para começar a mudar sua realidade
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10 text-stone-500 font-black text-sm uppercase">
              <div className="flex items-center justify-center gap-2 bg-stone-50 py-3 rounded-2xl"><ShieldCheck size={20} className="text-green-600" /> Pagamento Único</div>
              <div className="flex items-center justify-center gap-2 bg-stone-50 py-3 rounded-2xl"><CheckCircle2 size={20} className="text-green-600" /> Acesso Imediato</div>
            </div>

            <CTAButton text="COMPRAR AGORA POR R$ 19,90" />
            
            <div className="mt-10">
              <p className="text-red-600 font-black text-sm uppercase mb-2">Atenção!</p>
              <p className="text-stone-500 font-bold">Essa condição promocional pode sair do ar a qualquer momento.</p>
              <CountdownTimer />
            </div>
          </div>
        </div>
      </section>

      {/* 🎁 O QUE VOCÊ VAI RECEBER SECTION */}
      <section className="py-20 px-6 bg-stone-50">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <img 
              src={PRODUCTION_IMAGE} 
              alt="Doces no pote sendo embalados de forma profissional" 
              className="rounded-[2rem] shadow-2xl border-4 border-white object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-black mb-10 flex items-center gap-4">
              <Gift size={40} className="text-green-600" />
              O QUE VOCÊ VAI RECEBER:
            </h2>
            <ul className="space-y-4">
              {[
                "Receitas lucrativas e fáceis",
                "Estratégias de venda simples",
                "Como embalar gastando pouco",
                "Como encontrar clientes",
                "Passo a passo completo"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-xl font-bold text-stone-700">
                  <div className="bg-green-100 p-1 rounded-full"><CheckCircle2 className="text-green-600" size={20} /></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 🧠 QUEBRA FINAL SECTION */}
      <section className="py-24 px-6 bg-stone-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl font-black mb-10 tracking-tighter">A decisão é sua.</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 bg-stone-800 rounded-3xl border border-stone-700/50 opacity-60">
              <p className="text-xl font-bold mb-4">Opção A</p>
              <p className="text-stone-400">Você pode continuar exatamente como está agora.</p>
            </div>
            <div className="p-8 bg-green-600/10 rounded-3xl border border-green-500/30">
              <p className="text-xl font-bold mb-4 text-green-400">Opção B</p>
              <p className="text-white font-black">Você pode começar hoje e mudar sua realidade financeira.</p>
            </div>
          </div>
          <CTAButton text="SIM, QUERO COMEÇAR AGORA" />
        </div>
      </section>

      {/* 🔐 GARANTIA SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto bg-stone-50 border-2 border-stone-100 rounded-[3rem] p-10 md:p-16 flex flex-col items-center text-center">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8">
            <ShieldCheck size={56} className="text-green-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black mb-6">RISCO ZERO</h2>
          <p className="text-xl text-stone-600 font-medium leading-relaxed">
            Você tem 7 dias de garantia incondicional.<br/>
            <span className="font-black text-stone-900">Se não gostar, devolvemos 100% do seu dinheiro.</span>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-stone-50 border-t border-stone-200 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-black text-stone-400 text-sm uppercase tracking-widest mb-6 leading-relaxed">
            Vida Doce Com Proposito © 2026<br/>
            Todos os direitos reservados
          </p>
          <div className="flex justify-center gap-8 text-xs font-bold text-stone-400 uppercase">
            <a href="#" className="hover:text-stone-900">Termos de Uso</a>
            <a href="#" className="hover:text-stone-900">Privacidade</a>
          </div>
        </div>
      </footer>

      {/* STICKY BOTTOM BUTTON FOR MOBILE */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-stone-200 z-50 md:hidden animate-in fade-in slide-in-from-bottom-5">
        <a 
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-green-600 text-white text-center font-black py-4 rounded-2xl shadow-xl uppercase text-lg"
        >
          Aproveitar Oferta R$ 19,90
        </a>
      </div>

    </div>
  );
}
