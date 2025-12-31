import { h } from "@prestonarnold/fuse";

export const PageHeader = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => {
  return (
    <div class="bg-[#8B1538] text-white py-12 px-4">
      <div class="max-w-6xl mx-auto">
        <h1 class="text-4xl font-bold mb-3">{title}</h1>
        {description && <p class="text-lg opacity-90">{description}</p>}
      </div>
    </div>
  );
};
