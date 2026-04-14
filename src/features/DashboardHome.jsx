import { PageHeader } from "../components/shared/PageHeader";
import { CotacaoCard, ClimaCard } from "../components/dashboard/DashboardWidgets";

export function DashboardHome() {
  return (
    <div>
      {/* 1. TOPO: Cotação e Clima */}
      <div className="flex flex-col lg:flex-row gap-4 md:gap-6 mb-8">
        <CotacaoCard />
        <ClimaCard />
      </div>

      {/* 2. TÍTULO: Resumo da Safra (Sem o seletor) */}
      <PageHeader 
        title="Resumo da Safra" 
        description="Acompanhe os principais indicadores da sua fazenda."
      />

      {/* 3. KPIs: Os 4 cards numéricos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
        {[
          { label: "Gasto Total", value: "R$ 45.230", trend: "+5% que o mês anterior", isPositive: false },
          { label: "Colheita (Sacas)", value: "1.204", trend: "+12% que a safra anterior", isPositive: true },
          { label: "Área Plantada", value: "150 ha", trend: "0 ha recém plantados", isPositive: true },
          { label: "Próxima Aplicação", value: "Fungicida", trend: "Em 2 dias no Talhão 04", isNeutral: true },
        ].map((kpi, index) => (
          <div key={index} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow">
            <span className="text-gray-500 text-sm font-medium mb-1">{kpi.label}</span>
            <span className="text-2xl font-bold text-am-cafe mb-2">{kpi.value}</span>
            <span className={`text-xs font-medium ${kpi.isPositive ? 'text-am-primary' : kpi.isNeutral ? 'text-gray-500' : 'text-red-500'}`}>
              {kpi.trend}
            </span>
          </div>
        ))}
      </div>

      {/* 4. GRÁFICOS: Espaço reservado atualizado */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 min-h-[300px] flex items-center justify-center">
        <div className="text-center max-w-sm">
          <div className="w-16 h-16 bg-am-secondary/20 text-am-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-am-cafe mb-2">Sem gráficos ainda</h3>
          <p className="text-gray-500 text-sm">Registre mais dados de gastos e colheita para gerarmos o balanço da safra atual.</p>
        </div>
      </div>
      
    </div>
  );
}