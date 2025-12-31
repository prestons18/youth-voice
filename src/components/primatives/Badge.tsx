import { h } from "@prestonarnold/fuse";

export const Badge = ({
  children,
  variant = "default",
  class: className = "",
}: {
  children?: any;
  variant?: "default" | "maroon" | "gold" | "outline";
  class?: string;
}) => {
  const variants = {
    default: "bg-[#F5F5F5] text-[#404040] border border-[#E5E5E5]",
    maroon: "bg-[#8B1538] text-white",
    gold: "bg-[#D4AF37] text-[#1A1A1A]",
    outline: "bg-white text-[#8B1538] border-2 border-[#8B1538]",
  };

  return (
    <span
      class={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
