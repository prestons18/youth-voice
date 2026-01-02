import { h } from "@prestonarnold/fuse";

export const NYIWLogo = ({ className = "" }: { className?: string }) => {
  return (
    <div class={`flex items-center ${className}`}>
      {/* Maroon background box */}
      <div class="bg-[#8B1538] px-4 py-2.5 rounded-md flex items-center gap-3">
        {/* Business name */}
        <span
          class="
            text-[#D4AF37]
            text-2xl
            font-semibold
            tracking-wide
            font-serif
            leading-none
          "
        >
          NYIW
        </span>
        {/* Slogan */}
        <span
          class="
            text-white
            text-xs
            font-medium
            leading-tight
            max-w-[120px]
            font-sans
          "
        >
          Your Voice.
          <br />
          Our Future.
        </span>
      </div>
    </div>
  );
};
