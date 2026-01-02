import { h } from "@prestonarnold/fuse";

export const Input = ({
  label,
  placeholder,
  value,
  onInput,
  type = "text",
  required = false,
  class: className = "",
}: {
  label?: string;
  placeholder?: string;
  value?: any;
  onInput: (e: any) => void;
  type?: string;
  required?: boolean;
  class?: string;
}) => {
  // Handle both signal values and direct values
  const inputValue = typeof value === "function" ? value() : value;

  return (
    <div class={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label class="text-sm font-semibold text-[#1A1A1A]">
          {label} {required && <span class="text-[#8B1538]">*</span>}
        </label>
      )}
      <input
        type={type}
        value={inputValue}
        onInput={onInput}
        placeholder={placeholder}
        required={required}
        class="px-4 py-2.5 text-base bg-white border-2 border-[#E5E5E5] rounded-lg outline-none transition-all focus:border-[#8B1538] focus:shadow-[0_0_0_3px_rgba(139,21,56,0.12)]"
      />
    </div>
  );
};
