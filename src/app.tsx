import { h, signal } from "@prestonarnold/fuse";

export interface Idea {
  id: string;
  title: string;
  description: string;
  category?: string;
  votes: number;
}

export const App = () => {
  const ideas = signal<Idea[]>([
    {
      id: "1",
      title: "Community Garden",
      description:
        "A garden project where youth can learn about nature and sustainability.",
      category: "Environment",
      votes: 12,
    },
    {
      id: "2",
      title: "Youth Coding Club",
      description: "Weekly coding workshops for local teens.",
      category: "Education",
      votes: 8,
    },
  ]);

  // Add a new idea
  const addIdea = (idea: Omit<Idea, "id" | "votes">) => {
    const newIdea: Idea = {
      ...idea,
      id: Date.now().toString(),
      votes: 0,
    };
    ideas.set([newIdea, ...ideas()]);
  };

  const voteIdea = (id: string, delta: number) => {
    const prevIdeas = ideas();
    ideas.set(
      prevIdeas.map((idea: Idea) =>
        idea.id === id ? { ...idea, votes: idea.votes + delta } : idea
      )
    );
  };

  return (
    <div class="app font-sans">
      <main class="px-4 md:px-8 lg:px-16">
        <div class="text-center py-8">
          <h2 class="text-2xl font-bold mb-4">Ideas from the Community</h2>
          <div class="space-y-4">
            {ideas().map((idea) => (
              <div key={idea.id} class="bg-white p-4 rounded-lg shadow">
                <h3 class="font-bold text-lg">{idea.title}</h3>
                <p class="text-gray-600">{idea.description}</p>
                <p class="text-sm text-gray-500">Votes: {idea.votes}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
