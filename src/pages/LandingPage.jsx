import React from 'react';
import { Link } from 'react-router-dom'; // IMPORTAÇÃO NOVA AQUI
import cafefolha from '../assets/cafefolha.png';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-am-base font-sans">
      
      {/* Navbar Simplificada */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <img src={cafefolha} alt="Logo AMAGRO" className="w-8 h-8 rounded-full object-cover" />
          <span className="text-2xl font-bold text-am-dark">AMAGRO</span>
        </div>
        <div className="flex gap-4 items-center">
          {/* AQUI A MÁGICA ACONTECE: O botão virou um Link */}
          <Link to="/dashboard" className="text-am-cafe font-medium hover:text-am-primary transition">
            Entrar
          </Link>
          <button className="bg-am-primary text-white px-5 py-2 rounded-lg font-bold hover:bg-green-700 transition shadow-md">
            Teste Grátis
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-am-dark mb-6 tracking-tight">
          A tecnologia que <span className="text-am-primary">valoriza cada saca</span> do seu café.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Gestão financeira completa, controle de talhões, rastreabilidade por QR Code e inteligência de mercado para produtores de Arábica e Conilon.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-am-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition shadow-lg">
            Começar meus 30 dias grátis
          </button>
          <button className="bg-white text-am-cafe border border-am-secondary px-8 py-4 rounded-xl font-bold text-lg hover:bg-am-base transition">
            Conhecer as funcionalidades
          </button>
        </div>
      </main>

      {/* Seção de Funcionalidades Resumida */}
      <section className="bg-white py-20 border-t border-am-secondary/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-am-dark mb-2">Controle de Custos</h3>
              <p className="text-gray-500">Saiba exatamente o seu custo de produção por saca e maximize sua margem de lucro.</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-am-dark mb-2">QR Code e Rastreabilidade</h3>
              <p className="text-gray-500">Conecte sua história com o comprador final e ganhe poder de negociação na exportação.</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">🌦️</div>
              <h3 className="text-xl font-bold text-am-dark mb-2">Clima e Mercado</h3>
              <p className="text-gray-500">Tome decisões no momento certo com cotações CEPEA/B3 e previsão do tempo integradas.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}