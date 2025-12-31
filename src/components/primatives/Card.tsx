import { h } from "@prestonarnold/fuse";

export const Card = ({
  children,
  class: className = "",
  hover = false,
}: {
  children?: any;
  class?: string;
  hover?: boolean;
}) => {
  return (
    <div
      class={`bg-white border-2 border-[#E5E5E5] rounded-lg p-5 transition-all ${
        hover ? "hover:border-[#8B1538] hover:shadow-lg" : "shadow-sm"
      } ${className}`}
    >
      {children}
    </div>
  );
};
