import { h } from "@prestonarnold/fuse";

export const Badge = ({
  children,
  variant = "default",
  class: className = "",
}: {
  children?: any;
  variant?:
    | "default"
    | "maroon"
    | "gold"
    | "outline"
    | "green"
    | "blue"
    | "purple"
    | "teal"
    | "orange";
  class?: string;
}) => {
  const variants = {
    default: "bg-[#f1f5f9] text-[#334155] border border-[#e2e8f0]",
    maroon: "bg-[#881337] text-[#ffe4e6]",
    gold: "bg-[#92400e] text-[#fef3c7]",
    outline: "bg-transparent text-[#475569] border border-[#cbd5e1]",
    green: "bg-[#065f46] text-[#d1fae5]",
    blue: "bg-[#1e293b] text-[#e2e8f0]",
    purple: "bg-[#4c1d95] text-[#ede9fe]",
    teal: "bg-[#115e59] text-[#ccfbf1]",
    orange: "bg-[#9a3412] text-[#fed7aa]",
  };

  return (
    <span
      class={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
