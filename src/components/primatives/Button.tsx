import { h } from "@prestonarnold/fuse";
import { Icon } from "./Icon";

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  icon,
  onClick,
  class: className = "",
  disabled = false,
  fullWidth = false,
}: {
  children?: any;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: "ThumbsUp" | "ThumbsDown" | "Send" | "Lightbulb" | "TrendingUp";
  onClick?: () => void;
  class?: string;
  disabled?: boolean;
  fullWidth?: boolean;
}) => {
  const variants = {
    primary:
      "bg-[#8B1538] text-white hover:bg-[#6B0F2A] border-2 border-[#8B1538]",
    secondary:
      "bg-[#D4AF37] text-[#1A1A1A] hover:bg-[#B8935C] border-2 border-[#D4AF37]",
    outline:
      "bg-white text-[#8B1538] border-2 border-[#8B1538] hover:bg-[#8B1538] hover:text-white",
    ghost:
      "bg-transparent text-[#8B1538] hover:bg-[#F5F5F5] border-2 border-transparent",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const getIconColor = () => {
    if (variant === "primary") return "#FFFFFF";
    if (variant === "secondary") return "#1A1A1A";
    if (variant === "outline") return "#8B1538";
    if (variant === "ghost") return "#8B1538";
    return "#FFFFFF";
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      class={`inline-flex items-center justify-center gap-2 font-medium transition-all rounded-lg cursor-pointer ${
        variants[variant]
      } ${sizes[size]} ${fullWidth ? "w-full" : ""} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {icon && <Icon name={icon} size={18} color={getIconColor()} />}
      {children}
    </button>
  );
};
