
import React from 'react';
import { 
  Crown, 
  Gem, 
  BookOpen, 
  Coins, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Target, 
  Layers, 
  MessageCircle, 
  Layout, 
  Zap,
  Heart
} from 'lucide-react';

const App: React.FC = () => {
  // Rosa Palo Principal: rose-300 / rose-400
  // Pasteles: pink-50, rose-50, stone-100
  
  return (
    <div className="min-h-screen bg-[#fff9fa] text-stone-700 pb-20">
      {/* Header / Concepto Central */}
      <header className="relative bg-white border-b border-rose-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-50 rounded-full -mr-48 -mt-48 blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-50 rounded-full -ml-32 -mb-32 blur-3xl opacity-50"></div>
        
        <div className="max-w-5xl mx-auto px-6 py-20 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="bg-rose-100 p-5 rounded-full shadow-inner">
              <Crown className="w-14 h-14 text-rose-500" />
            </div>
          </div>
          <h2 className="text-xs font-bold tracking-[0.3em] text-rose-400 uppercase mb-3">Propuesta Estratégica Integral</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-stone-800 mb-4 tracking-tight">BELLEZA CON <span className="text-rose-400">PROPÓSITO</span></h1>
          <p className="text-2xl md:text-3xl italic text-rose-300 font-serif mb-10">“Formando Reinas para el Reino”</p>
          
          <div className="max-w-3xl mx-auto border-t border-rose-100 pt-12 mt-12">
            <h3 className="text-sm font-semibold text-stone-400 uppercase tracking-[0.2em] mb-8">Concepto Central del Ecosistema</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "1. Mentalidad de Reina", desc: "Identidad como hija de Dios.", icon: <Gem className="w-7 h-7" /> },
                { title: "2. Mentalidad de Reino", desc: "Finanzas con principios bíblicos.", icon: <Coins className="w-7 h-7" /> },
                { title: "3. Mentalidad de Líder", desc: "Liderazgo, trabajo en equipo y carácter.", icon: <Users className="w-7 h-7" /> }
              ].map((p, i) => (
                <div key={i} className="bg-white/60 backdrop-blur-sm p-8 rounded-[2rem] shadow-sm border border-rose-50 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="text-rose-400 mb-4 flex justify-center">{p.icon}</div>
                  <h4 className="font-bold text-stone-800 mb-2 font-serif text-lg">{p.title}</h4>
                  <p className="text-sm text-stone-500 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* 5. Estructura del Ecosistema de Productos */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <div className="inline-block bg-rose-100 text-rose-500 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">Portafolio</div>
          <h2 className="text-4xl font-bold text-stone-800 mb-3 italic font-serif">5. Estructura del Ecosistema de Productos</h2>
          <p className="text-rose-300 font-medium tracking-wide">(Low – Mid – High Ticket)</p>
        </div>

        <div className="space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Low Ticket */}
            <div className="bg-white rounded-[2.5rem] p-10 border border-rose-50 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-rose-50 text-rose-400 px-6 py-2 rounded-bl-3xl text-xs font-bold uppercase tracking-wider">Nivel 1</div>
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-rose-50 p-3 rounded-2xl group-hover:scale-110 transition-transform">
                  <Target className="text-rose-400 w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-stone-800 uppercase tracking-tight">Low Ticket (Entrada)</h3>
              </div>
              <p className="text-xs text-rose-400 mb-8 font-bold uppercase tracking-widest border-b border-rose-50 pb-4">OBJETIVO: Alcance, confianza y preparación espiritual.</p>
              <ul className="space-y-5">
                {["Devocional digital: Mentalidad de Reina", "Mini guía: Belleza con Propósito", "Reto de 5 o 7 días: “Activa tu Mentalidad de Reina”", "Devocionales mensuales temáticos"].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-stone-600">
                    <Heart className="w-5 h-5 text-rose-200 mt-0.5 shrink-0 fill-rose-50" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mid Ticket */}
            <div className="bg-white rounded-[2.5rem] p-10 border border-rose-50 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-pink-50 text-pink-400 px-6 py-2 rounded-bl-3xl text-xs font-bold uppercase tracking-wider">Nivel 2</div>
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-pink-50 p-3 rounded-2xl group-hover:scale-110 transition-transform">
                  <Layers className="text-pink-400 w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-stone-800 uppercase tracking-tight">Mid Ticket (Transformación)</h3>
              </div>
              <p className="text-xs text-pink-400 mb-8 font-bold uppercase tracking-widest border-b border-pink-50 pb-4">OBJETIVO: Formación guiada y profundidad.</p>
              <ul className="space-y-5">
                {["Taller grabado: Identidad y Belleza con Propósito", "Masterclass: Mentalidad de Reino (finanzas)", "Masterclass: Mentalidad de Líder"].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-stone-600">
                    <Heart className="w-5 h-5 text-pink-200 mt-0.5 shrink-0 fill-pink-50" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* High Ticket - Academia (Rosa Palo Oscuro / Dusty Rose) */}
          <div className="bg-[#a67b81] rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 bg-white/10 backdrop-blur-md text-white px-8 py-3 rounded-bl-3xl text-xs font-bold uppercase tracking-[0.2em]">Nivel 3 - Programa Elite</div>
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-12">
                <div className="bg-white/20 p-4 rounded-3xl self-start">
                  <Crown className="text-white w-12 h-12" />
                </div>
                <div>
                  <h3 className="text-4xl font-bold tracking-tight font-serif italic mb-2">ACADEMIA: REINAS DEL REINO</h3>
                  <div className="flex gap-4 text-rose-100 text-sm font-semibold tracking-widest uppercase">
                    <span>Duración: 6 meses</span>
                    <span className="opacity-50">|</span>
                    <span>Modelo Desbloqueable</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Módulo 1 */}
                <div className="bg-white/10 p-8 rounded-3xl border border-white/10 hover:bg-white/[0.15] transition-colors">
                  <div className="text-[0.65rem] font-black uppercase tracking-[0.3em] mb-4 text-rose-200 bg-white/5 inline-block px-3 py-1 rounded">Mes 1 y 2</div>
                  <h4 className="text-xl font-bold mb-6 font-serif border-b border-white/10 pb-4">Mentalidad de Reina</h4>
                  <ul className="text-xs space-y-3 font-medium text-rose-50/80">
                    {["Identidad como hija de Dios", "Quién soy en Cristo", "Belleza con propósito", "Autoestima bíblica", "Sanidad de identidad", "Carácter y santidad"].map((txt, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-rose-300"></div>
                        {txt}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Módulo 2 */}
                <div className="bg-white/10 p-8 rounded-3xl border border-white/10 hover:bg-white/[0.15] transition-colors">
                  <div className="text-[0.65rem] font-black uppercase tracking-[0.3em] mb-4 text-rose-200 bg-white/5 inline-block px-3 py-1 rounded">Mes 3 y 4</div>
                  <h4 className="text-xl font-bold mb-6 font-serif border-b border-white/10 pb-4">Mentalidad de Reino</h4>
                  <ul className="text-xs space-y-3 font-medium text-rose-50/80">
                    {["Finanzas con principios bíblicos", "Mayordomía", "Mentalidad financiera sana", "Prosperidad sin culpa", "Administración y propósito", "Negocios con valores del Reino"].map((txt, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-rose-300"></div>
                        {txt}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Módulo 3 */}
                <div className="bg-white/10 p-8 rounded-3xl border border-white/10 hover:bg-white/[0.15] transition-colors">
                  <div className="text-[0.65rem] font-black uppercase tracking-[0.3em] mb-4 text-rose-200 bg-white/5 inline-block px-3 py-1 rounded">Mes 5 y 6</div>
                  <h4 className="text-xl font-bold mb-6 font-serif border-b border-white/10 pb-4">Mentalidad de Líder</h4>
                  <ul className="text-xs space-y-3 font-medium text-rose-50/80">
                    {["Liderazgo y trabajo en equipo", "Qué es un líder según Dios", "Autoridad espiritual", "Servicio y liderazgo", "Trabajo en equipo", "Influencia con carácter"].map((txt, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-rose-300"></div>
                        {txt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-12 pt-10 border-t border-white/10">
                <p className="text-center text-[0.65rem] font-bold uppercase tracking-[0.4em] mb-8 text-rose-200">Experiencia Integral Incluida</p>
                <div className="flex flex-wrap justify-center gap-4">
                  {["Clases grabadas", "Devocionales mensuales", "Comunidad privada", "Q&A mensual", "Invitadas especiales"].map((inc, i) => (
                    <div key={i} className="text-[10px] text-white/90 uppercase font-black bg-white/5 border border-white/10 px-5 py-2.5 rounded-full backdrop-blur-sm">
                      {inc}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Adornos fondo */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-300/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
          </div>

          {/* Premium (Rosa Pastel Muy Suave) */}
          <div className="bg-rose-50/50 rounded-[3rem] p-12 border-2 border-rose-100 text-center relative overflow-hidden">
            <div className="relative z-10">
              <Gem className="text-rose-400 w-12 h-12 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-stone-800 uppercase italic font-serif mb-8 tracking-tighter">Nivel 4 – Premium (1:1)</h3>
              <div className="flex flex-wrap justify-center gap-6">
                {["Mentorías personalizadas", "Acompañamiento integral", "Procesos de identidad, liderazgo y propósito"].map((item, i) => (
                  <div key={i} className="bg-white px-8 py-4 rounded-2xl shadow-sm text-stone-600 font-bold text-sm border border-rose-100 flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-400"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Estrategia de Contenido y Marketing */}
      <section className="bg-white py-24 border-y border-rose-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-stone-800 italic font-serif mb-4">6. Estrategia de Contenido y Marketing</h2>
            <div className="w-24 h-1 bg-rose-100 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h3 className="text-xs font-black text-rose-400 uppercase tracking-[0.4em] mb-8 flex items-center gap-3">
                <div className="w-10 h-[1px] bg-rose-200"></div>
                Pilares de Contenido
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Belleza con propósito", "Identidad en Cristo", "Mentalidad de Reina", "Finanzas del Reino", "Liderazgo cristiano", "Vida real y testimonio"].map((p, i) => (
                  <div key={i} className="group bg-rose-50/30 p-5 rounded-2xl border border-transparent hover:border-rose-100 hover:bg-white transition-all duration-300">
                    <span className="font-bold text-stone-700 text-sm group-hover:text-rose-500">{p}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-xs font-black text-rose-400 uppercase tracking-[0.4em] mb-8 flex items-center gap-3">
                <div className="w-10 h-[1px] bg-rose-200"></div>
                Formatos Estratégicos
              </h3>
              <div className="space-y-4">
                {[
                  { title: "Reels estratégicos", desc: "Contenido dinámico de alto impacto." },
                  { title: "Carruseles profundos", desc: "Educación y valor detallado." },
                  { title: "Stories con CTA", desc: "Interacción diaria y ventas." },
                  { title: "Lives formativos", desc: "Conexión y autoridad en vivo." }
                ].map((f, i) => (
                  <div key={i} className="flex gap-5 items-start p-5 rounded-2xl hover:bg-rose-50/50 transition-colors group">
                    <div className="bg-rose-100 p-2.5 rounded-xl text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-all">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-800 text-base mb-1">{f.title}</h4>
                      <p className="text-xs text-stone-500 font-medium">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Automatizaciones y Plataformas */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold text-stone-800 italic font-serif mb-16">7. Automatizaciones y Plataformas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="p-10 rounded-[3rem] bg-stone-50 border border-stone-100 relative group overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-rose-100/30 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
            <div className="bg-white w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-sm">
              <MessageCircle className="w-10 h-10 text-rose-300" />
            </div>
            <h3 className="text-3xl font-black text-stone-800 mb-3 tracking-tighter">ManyChat</h3>
            <p className="text-stone-500 text-sm font-medium">Interacción automática y gestión estratégica de leads.</p>
          </div>
          
          <div className="p-10 rounded-[3rem] bg-rose-50/30 border border-rose-100 relative group overflow-hidden">
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
            <div className="bg-white w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-sm">
              <Layout className="w-10 h-10 text-rose-300" />
            </div>
            <h3 className="text-3xl font-black text-rose-400 mb-4 tracking-tighter">Systeme.io</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {["Landing", "Ventas", "Multilink", "Funnel"].map(tag => (
                <span key={tag} className="text-[10px] font-black uppercase tracking-widest bg-white px-3 py-1.5 rounded-full text-rose-300 border border-rose-100">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Qué hacemos nosotros */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="bg-gradient-to-br from-[#a67b81] to-[#8c666b] rounded-[4rem] p-16 text-white shadow-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-5xl font-bold mb-6 font-serif italic">8. Qué Hacemos Nosotros</h2>
              <div className="h-1 w-20 bg-rose-300/40 mx-auto mb-6 rounded-full"></div>
              <p className="text-rose-100 text-sm font-black uppercase tracking-[0.3em]">Gestión Integral 360°</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {[
                { label: "Estrategia completa", icon: <Target className="w-6 h-6" /> },
                { label: "Creación de productos", icon: <Layers className="w-6 h-6" /> },
                { label: "Copywriting", icon: <BookOpen className="w-6 h-6" /> },
                { label: "Diseño", icon: <Layout className="w-6 h-6" /> },
                { label: "Contenido", icon: <Zap className="w-6 h-6" /> },
                { label: "Funnels", icon: <ArrowRight className="w-6 h-6" /> },
                { label: "Automatizaciones", icon: <MessageCircle className="w-6 h-6" /> },
                { label: "Lanzamientos", icon: <Crown className="w-6 h-6" /> },
                { label: "Gestión estratégica", icon: <Users className="w-6 h-6" /> }
              ].map((serv, idx) => (
                <div key={idx} className="group bg-white/5 backdrop-blur-sm p-6 rounded-[2.5rem] border border-white/10 flex flex-col items-center gap-4 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
                  <div className="text-rose-200 group-hover:scale-110 transition-transform">{serv.icon}</div>
                  <span className="text-xs font-black tracking-widest uppercase text-center">{serv.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="text-center py-16 border-t border-rose-50 bg-white">
        <div className="inline-flex items-center gap-3 mb-4 bg-rose-50 px-6 py-2 rounded-full">
          <Crown className="w-5 h-5 text-rose-400" />
          <span className="font-black tracking-[0.3em] uppercase text-rose-400 text-xs">Belleza con Propósito</span>
        </div>
        <p className="text-stone-400 text-[10px] font-bold uppercase tracking-widest italic">“Formando Reinas para el Reino”</p>
      </footer>
    </div>
  );
};

export default App;
