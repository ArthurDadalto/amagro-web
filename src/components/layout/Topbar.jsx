import { Bell, Menu, Search } from "lucide-react";
import farmerAvatar from "../../assets/farmer.png";

export function Topbar({ setIsSidebarOpen }) {
  return (
    <header className="sticky top-0 z-20 h-16 bg-white border-b border-gray-100 flex items-center justify-between px-4 sm:px-6 shadow-sm">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="p-2 -ml-2 rounded-md text-am-dark hover:bg-gray-100 lg:hidden"
          aria-label="Abrir menu"
        >
          <Menu size={24} />
        </button>
        
        <div className="hidden sm:flex items-center bg-gray-50 rounded-lg px-3 py-1.5 focus-within:ring-2 focus-within:ring-am-secondary transition-all">
          <Search size={18} className="text-gray-400" />
          <input 
            type="text" 
            placeholder="Buscar..." 
            className="bg-transparent border-none focus:outline-none w-48 lg:w-64 px-2 text-sm text-am-dark placeholder:text-gray-400"
          />
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-5">
        <button className="relative p-2 text-gray-500 hover:text-am-primary transition-colors">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        
        <div className="h-8 w-[1px] bg-gray-200 hidden sm:block"></div>

        <button className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-am-secondary/10 flex items-center justify-center text-am-primary ring-2 ring-transparent transition-all hover:ring-am-primary overflow-hidden p-[2px]">
            <img src={farmerAvatar} alt="Avatar do Usuário" className="w-full h-full object-contain rounded-full" />
          </div>
          <div className="hidden sm:flex flex-col items-start leading-tight">
            <span className="text-sm font-medium text-am-dark">Produtor Arthur Miguel</span>
            <span className="text-xs text-gray-500">Fazenda Taquarussu</span>
          </div>
        </button>
      </div>
    </header>
  );
}
