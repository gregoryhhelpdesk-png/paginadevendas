/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { CheckCircle2, ChevronRight, Clock, ShieldCheck, Star, TrendingUp, AlertTriangle } from 'lucide-react';
import { useEffect, useState } from 'react';

const CHECKOUT_URL = "https://pay.kiwify.com.br/QHcQmqI";

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
    <div className="flex items-center justify-center gap-2 text-red-600 font-bold text-2xl my-4 bg-red-50 p-3 rounded-lg border border-red-200">
      <Clock className="animate-pulse" />
      <span>
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </span>
    </div>
  );
}

function CTAButton({ text = "QUERO COMEÇAR A LUCRAR AGORA", className = "" }) {
  return (
    <motion.a
      href={CHECKOUT_URL}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`block w-full bg-green-600 text-white text-center font-black text-lg py-4 rounded-xl shadow-[0_4px_0_rgb(22,163,74)] hover:bg-green-500 hover:shadow-[0_2px_0_rgb(22,163,74)] hover:translate-y-[2px] transition-all uppercase tracking-tight flex items-center justify-center gap-2 ${className}`}
    >
      {text}
      <ChevronRight size={24} />
    </motion.a>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800 pb-24 selection:bg-amber-200">
      
      {/* URGENCY BAR */}
      <div className="bg-red-600 text-white text-center text-xs font-bold py-2 px-4 uppercase tracking-wider">
        ⚠️ Atenção: Oferta de lançamento encerra em breve!
      </div>

      {/* HERO SECTION */}
      <header className="px-5 pt-8 pb-10 bg-white">
        <div className="max-w-md mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-black text-center leading-tight text-stone-900 mb-4"
          >
            DESCUBRA COMO GERAR ATÉ <span className="text-green-600 bg-green-50 px-1">R$ 3.000 POR MÊS</span> NA COZINHA DA SUA CASA, MESMO COMEÇANDO DO ZERO!
          </motion.h1>
          
          <p className="text-center text-stone-600 mb-6 font-medium text-lg">
            O método mais rápido, fácil e barato para ter dinheiro no bolso todos os dias vendendo doces irresistíveis.
          </p>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8 border-4 border-white">
            <img 
              src="https://storage.googleapis.com/a1aa/image/V3P02Z7w17vJt2D7lS0wU9R5n5Y_1Xn7_J_D-d9uT1A.jpg" 
              alt="Mulher cozinhando doces" 
              className="w-full h-64 object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white font-bold text-sm flex items-center gap-2">
                <Star className="text-yellow-400 fill-yellow-400" size={16} />
                Método testado e aprovado
              </p>
            </div>
          </div>

          <CTAButton />
          
          <div className="flex justify-center items-center gap-1 mt-4 text-sm text-stone-500 font-medium">
            <ShieldCheck size={16} className="text-green-600" />
            Compra 100% Segura e Acesso Imediato
          </div>
        </div>
      </header>

      {/* PAIN SECTION */}
      <section className="px-5 py-12 bg-stone-900 text-white">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-black mb-6 text-red-400 uppercase">
            Você está cansada de...
          </h2>
          <ul className="space-y-4">
            {[
              "Contar moedas para pagar as contas no fim do mês?",
              "Depender financeiramente de outras pessoas?",
              "Não ter dinheiro para comprar o que você e seus filhos merecem?",
              "Trabalhar duro e nunca ver a cor do dinheiro?"
            ].map((text, i) => (
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="flex items-start gap-3 text-lg"
              >
                <AlertTriangle className="text-red-500 shrink-0 mt-1" size={20} />
                <span className="font-medium text-stone-300">{text}</span>
              </motion.li>
            ))}
          </ul>
          
          <div className="mt-8 p-5 bg-stone-800 rounded-xl border border-stone-700">
            <p className="text-xl font-bold text-center">
              Chega de passar vontade. A solução está nas suas mãos (e na sua cozinha).
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="px-5 py-12 bg-amber-50">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-black text-center mb-8 text-amber-900">
            POR QUE VENDER DOCES É A SUA MELHOR SAÍDA?
          </h2>

          <div className="grid gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-amber-100">
              <TrendingUp className="text-green-500 mb-3" size={32} />
              <h3 className="text-xl font-bold mb-2">Lucro Altíssimo</h3>
              <p className="text-stone-600">Ingredientes baratos se transformam em produtos de alto valor agregado. Margens de lucro que chegam a 300%.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-amber-100">
              <img 
                src="https://storage.googleapis.com/a1aa/image/p1pXvQ2Q9R_2n-8cE6h9_zM2J_iB0_sHlK_q6-7zXpQ.jpg" 
                alt="Doces" 
                className="w-full h-40 object-cover rounded-lg mb-4"
                referrerPolicy="no-referrer"
              />
              <h3 className="text-xl font-bold mb-2">Venda Fácil</h3>
              <p className="text-stone-600">Ninguém resiste a um doce bem feito. Eles se vendem sozinhos no trabalho, na faculdade, ou pelo WhatsApp.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-amber-100">
              <h3 className="text-xl font-bold mb-2">Comece com R$ 50</h3>
              <p className="text-stone-600">Você não precisa de equipamentos caros. Use as panelas que você já tem e compre ingredientes no mercadinho da esquina.</p>
            </div>
          </div>

          <div className="mt-10">
            <CTAButton text="SIM, EU QUERO MUDAR DE VIDA" />
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="px-5 py-12 bg-white">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-black text-center mb-8">
            O QUE VOCÊ VAI RECEBER HOJE:
          </h2>

          <div className="space-y-4">
            {[
              "Receitas secretas e lucrativas (fáceis de fazer)",
              "Como precificar para não ter prejuízo",
              "Estratégias de vendas para iniciantes",
              "Como embalar gastando pouco e parecendo premium",
              "Onde encontrar os melhores clientes"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3 bg-stone-50 p-4 rounded-xl border border-stone-100">
                <CheckCircle2 className="text-green-500 shrink-0" size={24} />
                <span className="font-bold text-stone-700">{text}</span>
              </div>
            ))}
          </div>
          
          <img 
            src="https://storage.googleapis.com/a1aa/image/1d34lXF1B_h2_gHq_Y7d4_J_t-8_m_q_F_o_t_z_x_w.jpg" 
            alt="Doces no pote" 
            className="w-full h-48 object-cover rounded-2xl mt-8 shadow-md"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* OFFER SECTION */}
      <section className="px-5 py-12 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-red-500"></div>
        <div className="max-w-md mx-auto text-center relative z-10">
          <h2 className="text-3xl font-black mb-4">A DECISÃO É SUA.</h2>
          <p className="text-lg text-stone-300 mb-8">
            Você pode continuar reclamando da falta de dinheiro, ou pode dar o primeiro passo hoje.
          </p>

          <div className="bg-white text-stone-900 p-8 rounded-3xl shadow-2xl transform rotate-1">
            <p className="text-stone-500 font-bold uppercase tracking-wider text-sm mb-2">Valor Normal:</p>
            <p className="text-2xl text-red-500 line-through font-black mb-4">R$ 97,00</p>
            
            <p className="text-stone-500 font-bold uppercase tracking-wider text-sm mb-2">Apenas Hoje:</p>
            <div className="flex justify-center items-start gap-1 mb-2">
              <span className="text-2xl font-bold mt-2">R$</span>
              <span className="text-7xl font-black text-green-600 tracking-tighter">19</span>
              <span className="text-3xl font-bold mt-2">,90</span>
            </div>
            <p className="text-sm font-bold text-stone-500 mb-6">Ou menos que uma pizza para mudar sua vida financeira!</p>

            <CountdownTimer />

            <CTAButton text="COMPRAR AGORA POR R$ 19,90" className="animate-pulse" />
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="px-5 py-12 bg-white">
        <div className="max-w-md mx-auto flex flex-col items-center text-center">
          <ShieldCheck size={64} className="text-green-500 mb-4" />
          <h2 className="text-2xl font-black mb-3">RISCO ZERO!</h2>
          <p className="text-stone-600 font-medium">
            Você tem 7 dias de garantia incondicional. Se você não gostar do material, ou achar que não é para você, devolvemos 100% do seu dinheiro. Sem perguntas.
          </p>
        </div>
      </section>

      {/* STICKY BOTTOM CTA FOR MOBILE */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-stone-200 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] z-50 md:hidden">
        <a
          href={CHECKOUT_URL}
          className="block w-full bg-green-600 text-white text-center font-black text-lg py-3 rounded-xl shadow-[0_4px_0_rgb(22,163,74)] active:shadow-[0_0px_0_rgb(22,163,74)] active:translate-y-[4px] transition-all uppercase"
        >
          QUERO COMEÇAR AGORA
        </a>
      </div>

    </div>
  );
}
