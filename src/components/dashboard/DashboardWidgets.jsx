import React, { useState } from 'react';

export const CotacaoCard = () => {
  const [tipoCafe, setTipoCafe] = useState('arabica');

  // Dados simulados atualizados com Variação do Dia e do Mês
  const cotacoes = {
    arabica: { 
      preco: 'R$ 1.240,50', 
      varDia: '+1.2%', statusDia: 'alta',
      varMes: '+4.5%', statusMes: 'alta' 
    },
    conilon: { 
      preco: 'R$ 890,00', 
      varDia: '-0.5%', statusDia: 'baixa',
      varMes: '-15.1%', statusMes: 'baixa' 
    }
  };

  const dadosAtuais = cotacoes[tipoCafe];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-am-secondary/30 flex-1">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-am-dark font-semibold">Cotação do Dia</h3>
          <p className="text-xs text-gray-400 mt-1">Fonte: CEPEA/B3</p>
        </div>
        
        {/* Toggle Arábica/Conilon */}
        <div className="flex bg-am-base p-1 rounded-lg">
          <button 
            onClick={() => setTipoCafe('arabica')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
              tipoCafe === 'arabica' ? 'bg-am-primary text-white shadow-sm' : 'text-am-dark hover:bg-white/50'
            }`}
          >
            Arábica
          </button>
          <button 
            onClick={() => setTipoCafe('conilon')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
              tipoCafe === 'conilon' ? 'bg-am-primary text-white shadow-sm' : 'text-am-dark hover:bg-white/50'
            }`}
          >
            Conilon
          </button>
        </div>
      </div>

      {/* Preço Principal */}
      <div className="mt-2">
        <span className="text-3xl font-bold text-am-cafe">{dadosAtuais.preco}</span>
      </div>

      {/* Variações (Dia e Mês) com linha divisória estilo o card de Clima */}
      <div className="mt-4 pt-4 border-t border-am-base flex gap-8">
        <div>
          <p className="text-[10px] text-gray-400 uppercase font-semibold">Var. Dia</p>
          <span className={`text-sm font-bold flex items-center mt-1 ${dadosAtuais.statusDia === 'alta' ? 'text-green-600' : 'text-red-500'}`}>
            {dadosAtuais.statusDia === 'alta' ? '↑' : '↓'} {dadosAtuais.varDia}
          </span>
        </div>
        <div>
          <p className="text-[10px] text-gray-400 uppercase font-semibold">Var. Mês</p>
          <span className={`text-sm font-bold flex items-center mt-1 ${dadosAtuais.statusMes === 'alta' ? 'text-green-600' : 'text-red-500'}`}>
            {dadosAtuais.statusMes === 'alta' ? '↑' : '↓'} {dadosAtuais.varMes}
          </span>
        </div>
      </div>
    </div>
  );
};

export const ClimaCard = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-am-secondary/30 flex-1">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-am-dark font-semibold">Previsão do Tempo</h3>
          <p className="text-xs text-gray-400 mt-1">Vila Velha, ES</p>
        </div>
        <div className="text-right">
          <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md">
            💧 10% chuva
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <div className="text-5xl">⛅</div>
        <div>
          <span className="text-3xl font-bold text-am-dark">28°C</span>
          <p className="text-sm text-gray-500 font-medium">Parcialmente Nublado</p>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-am-base flex justify-between">
        <div className="text-center">
          <p className="text-[10px] text-gray-400 uppercase font-semibold">Amanhã</p>
          <p className="text-xs font-bold text-am-dark mt-1">24°/30°</p>
        </div>
        <div className="text-center">
          <p className="text-[10px] text-gray-400 uppercase font-semibold">Quinta</p>
          <p className="text-xs font-bold text-am-dark mt-1">22°/28°</p>
        </div>
        <div className="text-center">
          <p className="text-[10px] text-blue-400 uppercase font-semibold">Sexta (Chuva)</p>
          <p className="text-xs font-bold text-am-dark mt-1">21°/25°</p>
        </div>
      </div>
    </div>
  );
};