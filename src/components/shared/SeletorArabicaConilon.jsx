import { Leaf, Coffee } from "lucide-react";
import { cn } from "../../lib/utils";

export function SeletorArabicaConilon({ selected, onChange }) {
  return (
    <div className="flex bg-gray-100 p-1 rounded-xl w-fit">
      <button
        onClick={() => onChange("arabica")}
        className={cn(
          "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
          selected === "arabica" 
            ? "bg-white text-am-primary shadow-sm" 
            : "text-gray-500 hover:text-am-dark hover:bg-gray-50"
        )}
      >
        <Coffee size={16} />
        Arábica
      </button>
      <button
        onClick={() => onChange("conilon")}
        className={cn(
          "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
          selected === "conilon" 
            ? "bg-white text-am-primary shadow-sm" 
            : "text-gray-500 hover:text-am-dark hover:bg-gray-50"
        )}
      >
        <Leaf size={16} />
        Conilon
      </button>
    </div>
  );
}
