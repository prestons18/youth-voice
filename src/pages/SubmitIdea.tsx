import { h, signal } from "@prestonarnold/fuse";
import { IdeaForm } from "@/components/IdeaForm";
import { Idea } from "@/types/idea";
import { ideas } from "@/lib/MockIdeas";

export const SubmitIdeaPage = () => {
  const formData = signal({
    title: "",
    description: "",
    category: "",
  });

  const handleSubmit = () => {
    const data = formData();
    if (data.title.trim() && data.description.trim()) {
      const newIdea: Idea = {
        id: Date.now().toString(),
        title: data.title,
        description: data.description,
        category: data.category || "General",
        upvotes: 0,
        downvotes: 0,
        userVote: null,
      };
      ideas.set([newIdea, ...ideas()]);
      formData.set({ title: "", description: "", category: "" });
    }
  };

  return (
    <div class="max-w-4xl mx-auto px-4 py-8">
      {/* Forms */}
      <section id="submit-idea">
        <h2 class="text-2xl font-bold mb-6 text-[#8B1538]">Submit Your Idea</h2>
        <IdeaForm formData={formData} onSubmit={handleSubmit} />
      </section>
    </div>
  );
};
