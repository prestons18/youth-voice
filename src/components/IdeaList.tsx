import { h } from "@prestonarnold/fuse";
import { Card } from "./primatives/Card";
import { VoteButton } from "./VoteButton";
import { Badge } from "./primatives/Badge";
import { Idea } from "../types/idea";

interface IdeaListProps {
  ideas: Idea[];
  onVote: (id: string, type: "up" | "down") => void;
}

export default function IdeaList({ ideas, onVote }: IdeaListProps) {
  const sortedIdeas = () =>
    [...ideas].sort(
      (a, b) => b.upvotes - b.downvotes - (a.upvotes - a.downvotes)
    );

  return (
    <section id="ideas">
      <h2 class="text-2xl font-bold mb-6 text-[#8B1538]">
        Community Ideas
        <span class="text-base font-normal text-[#404040] ml-3">
          ({ideas.length} ideas)
        </span>
      </h2>
      <div class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
        {sortedIdeas().map((idea) => (
          <Card hover class={idea.id}>
            <div class="flex items-start justify-between mb-4">
              <Badge
                variant={
                  idea.category === "Environment"
                    ? "teal"
                    : idea.category === "Education"
                    ? "blue"
                    : idea.category === "Community"
                    ? "green"
                    : idea.category === "Sports"
                    ? "orange"
                    : idea.category === "Arts"
                    ? "purple"
                    : idea.category === "Health"
                    ? "maroon"
                    : idea.category === "Technology"
                    ? "gold"
                    : "default"
                }
              >
                {idea.category}
              </Badge>
              <div class="flex items-center gap-2">
                <VoteButton
                  votes={() => idea.upvotes}
                  hasVoted={() => idea.userVote === "up"}
                  onVote={() => onVote(idea.id, "up")}
                  type="upvote"
                />
                <VoteButton
                  votes={() => idea.downvotes}
                  hasVoted={() => idea.userVote === "down"}
                  onVote={() => onVote(idea.id, "down")}
                  type="downvote"
                />
              </div>
            </div>
            <h3 class="text-xl font-bold mb-2 text-[#1A1A1A]">{idea.title}</h3>
            <p class="text-base text-[#404040]">{idea.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
