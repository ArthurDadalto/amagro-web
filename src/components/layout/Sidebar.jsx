import { NavLink } from "react-router-dom";
import { 
  Home, 
  Map, 
  DollarSign, 
  Sprout, 
  Package, 
  Thermometer, 
  ShieldCheck, 
  Menu,
  X
} from "lucide-react";
import { cn } from "../../lib/utils";

const navigation = [
  { name: "Início", href: "/", icon: Home },
  { name: "Fazendas", href: "/fazendas", icon: Map },
  { name: "Gastos", href: "/gastos", icon: DollarSign },
  { name: "Colheita", href: "/colheita", icon: Sprout },
  { name: "Estoque", href: "/estoque", icon: Package },
  { name: "Solo", href: "/solo", icon: Thermometer },
  { name: "Rastreabilidade", href: "/rastreabilidade", icon: ShieldCheck },
];

export function Sidebar({ isOpen, setIsOpen }) {
  // Mobile: Drawer slide over, Desktop: Fixed sidebar
  return (
    <>
      {/* Overlay Mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-am-dark/40 z-30 lg:hidden transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Panel */}
      <aside 
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full lg:static lg:h-screen"
        )}
      >
        <div className="h-16 flex items-center justify-between px-6 bg-am-primary/5">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-am-cafe">AMAGRO</h1>
            <img src="/logo-cafe.png" alt="Logo Café" className="w-8 h-8 object-contain drop-shadow-sm mix-blend-multiply" />
          </div>
          <button 
            onClick={() => setIsOpen(false)} 
            className="p-1 rounded-md text-am-cafe hover:bg-am-primary/10 lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors duration-200",
                  isActive
                    ? "bg-am-primary text-white shadow-sm"
                    : "text-am-dark/70 hover:bg-am-secondary/20 hover:text-am-primary"
                )
              }
            >
              <item.icon size={20} className="shrink-0" />
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}
