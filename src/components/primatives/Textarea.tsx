import { h } from "@prestonarnold/fuse";

export const Textarea = ({
  label,
  placeholder,
  value,
  onInput,
  rows = 4,
  required = false,
  class: className = "",
}: {
  label?: string;
  placeholder?: string;
  value?: any;
  onInput: (e: any) => void;
  rows?: number;
  required?: boolean;
  class?: string;
}) => {
  return (
    <div class={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label class="text-sm font-semibold text-[#1A1A1A]">
          {label} {required && <span class="text-[#8B1538]">*</span>}
        </label>
      )}
      <textarea
        value={value()}
        onInput={onInput}
        placeholder={placeholder}
        required={required}
        rows={rows}
        class="px-4 py-2.5 text-base bg-white border-2 border-[#E5E5E5] rounded-lg outline-none transition-all resize-none focus:border-[#8B1538] focus:shadow-[0_0_0_3px_rgba(139,21,56,0.12)]"
      />
    </div>
  );
};
