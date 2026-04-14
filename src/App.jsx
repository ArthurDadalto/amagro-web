import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DashboardLayout } from "./components/layout/DashboardLayout";
import { DashboardHome } from "./features/DashboardHome";
// 1. Importe a Landing Page aqui no topo
import { LandingPage } from "./pages/LandingPage"; 

// Placeholder Views (Mantido intacto)
const PlaceholderView = ({ title }) => (
  <div className="flex flex-col items-center justify-center h-[60vh] text-center">
    <h2 className="text-2xl font-bold text-am-cafe mb-2">{title}</h2>
    <p className="text-gray-500">Módulo em desenvolvimento.</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ROTA PÚBLICA: A Landing Page fica na raiz (/) SEM o Layout do Dashboard */}
        <Route path="/" element={<LandingPage />} />
        
        {/* ROTA PRIVADA: O Sistema todo passa a viver dentro de /dashboard */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          {/* O index indica a tela padrão quando acessamos /dashboard */}
          <Route index element={<DashboardHome />} />
          
          {/* Todas as suas outras telas continuam funcionando perfeitamente aqui dentro */}
          <Route path="fazendas" element={<PlaceholderView title="Gestão de Fazendas e Talhões" />} />
          <Route path="gastos" element={<PlaceholderView title="Lançamento de Gastos" />} />
          <Route path="colheita" element={<PlaceholderView title="Registro de Colheita" />} />
          <Route path="estoque" element={<PlaceholderView title="Controle de Estoque" />} />
          <Route path="solo" element={<PlaceholderView title="Mapas e Análise de Solo" />} />
          <Route path="rastreabilidade" element={<PlaceholderView title="Rastreabilidade e QR Code" />} />
        </Route>

        {/* Fallback: Se o usuário digitar uma URL que não existe, manda de volta pra Landing Page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;