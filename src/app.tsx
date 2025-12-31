import { h, signal } from "@prestonarnold/fuse";
import { Button } from "./components/primatives/Button";
import { Card } from "./components/primatives/Card";
import { PageHeader } from "./components/primatives/Header";
import { Input } from "./components/primatives/Input";
import { Textarea } from "./components/primatives/Textarea";
import { VoteButton } from "./components/VoteButton";
import { Badge } from "./components/primatives/Badge";

export interface Idea {
  id: string;
  title: string;
  description: string;
  category?: string;
  upvotes: number;
  downvotes: number;
  userVote?: "up" | "down" | null;
}

export const App = () => {
  const formData = signal({
    title: "",
    description: "",
    category: "",
  });

  const ideas = signal<Idea[]>([
    {
      id: "1",
      title: "Community Garden",
      description:
        "A garden project where youth can learn about nature and sustainability.",
      category: "Environment",
      upvotes: 15,
      downvotes: 3,
      userVote: null,
    },
    {
      id: "2",
      title: "Youth Coding Club",
      description: "Weekly coding workshops for local teens.",
      category: "Education",
      upvotes: 10,
      downvotes: 2,
      userVote: null,
    },
    {
      id: "3",
      title: "Town Clean-Up Initiative",
      description:
        "Monthly volunteer events to keep our town clean and beautiful.",
      category: "Environment",
      upvotes: 20,
      downvotes: 5,
      userVote: null,
    },
  ]);

  const handleVote = (id: string, voteType: "up" | "down") => {
    ideas.set(
      ideas().map((idea) => {
        if (idea.id !== id) return idea;

        const currentVote = idea.userVote;

        // If clicking the same vote button again, remove the vote
        if (currentVote === voteType) {
          return {
            ...idea,
            upvotes: voteType === "up" ? idea.upvotes - 1 : idea.upvotes,
            downvotes:
              voteType === "down" ? idea.downvotes - 1 : idea.downvotes,
            userVote: null,
          };
        }

        // If changing vote type
        if (currentVote) {
          return {
            ...idea,
            upvotes: voteType === "up" ? idea.upvotes + 1 : idea.upvotes - 1,
            downvotes:
              voteType === "down" ? idea.downvotes + 1 : idea.downvotes - 1,
            userVote: voteType,
          };
        }

        // New vote
        return {
          ...idea,
          upvotes: voteType === "up" ? idea.upvotes + 1 : idea.upvotes,
          downvotes: voteType === "down" ? idea.downvotes + 1 : idea.downvotes,
          userVote: voteType,
        };
      })
    );
  };

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

  const sortedIdeas = () => {
    return [...ideas()].sort(
      (a, b) => b.upvotes - b.downvotes - (a.upvotes - a.downvotes)
    );
  };

  return (
    <div class="bg-[#FAFAF8] min-h-screen">
      <PageHeader
        title="Northamptonshire Youth Idea Wall"
        description="Share your ideas for Northamptonshire"
      />

      <div class="max-w-6xl mx-auto px-4 py-12">
        <div class="flex flex-col gap-16">
          {/* Idea Cards */}
          <section>
            <h2 class="text-2xl font-bold mb-6 text-[#8B1538]">
              Community Ideas
              <span class="text-base font-normal text-[#404040] ml-3">
                ({ideas().length} ideas)
              </span>
            </h2>
            <div class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
              {() =>
                sortedIdeas().map((idea) => (
                  <Card hover>
                    <div class="flex items-start justify-between mb-4">
                      <Badge
                        variant={
                          idea.category === "Environment"
                            ? "maroon"
                            : idea.category === "Education"
                            ? "gold"
                            : "default"
                        }
                      >
                        {idea.category}
                      </Badge>
                      <div class="flex items-center gap-2">
                        <VoteButton
                          votes={() =>
                            ideas().find((i) => i.id === idea.id)?.upvotes || 0
                          }
                          hasVoted={() =>
                            ideas().find((i) => i.id === idea.id)?.userVote ===
                            "up"
                          }
                          onVote={() => handleVote(idea.id, "up")}
                          type="upvote"
                        />
                        <VoteButton
                          votes={() =>
                            ideas().find((i) => i.id === idea.id)?.downvotes ||
                            0
                          }
                          hasVoted={() =>
                            ideas().find((i) => i.id === idea.id)?.userVote ===
                            "down"
                          }
                          onVote={() => handleVote(idea.id, "down")}
                          type="downvote"
                        />
                      </div>
                    </div>
                    <h3 class="text-xl font-bold mb-2 text-[#1A1A1A]">
                      {idea.title}
                    </h3>
                    <p class="text-base text-[#404040]">{idea.description}</p>
                  </Card>
                ))
              }
            </div>
          </section>

          {/* Forms */}
          <section>
            <h2 class="text-2xl font-bold mb-6 text-[#8B1538]">
              Submit Your Idea
            </h2>
            <Card class="max-w-3xl">
              <div class="flex flex-col gap-5">
                <Input
                  label="Idea Title"
                  placeholder="Enter your idea title"
                  value={() => formData().title}
                  onInput={(e) =>
                    formData.set({ ...formData(), title: e.target.value })
                  }
                  required
                />

                <Textarea
                  label="Description"
                  placeholder="Describe your idea in detail"
                  value={() => formData().description}
                  onInput={(e) =>
                    formData.set({ ...formData(), description: e.target.value })
                  }
                  required
                  rows={5}
                />

                <Input
                  label="Category"
                  placeholder="e.g. Environment, Education, Community"
                  value={() => formData().category}
                  onInput={(e) =>
                    formData.set({ ...formData(), category: e.target.value })
                  }
                />

                {() => (
                  <Button
                    icon="Send"
                    fullWidth
                    onClick={handleSubmit}
                    disabled={
                      !formData().title.trim() || !formData().description.trim()
                    }
                  >
                    Submit Your Idea
                  </Button>
                )}
              </div>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;
