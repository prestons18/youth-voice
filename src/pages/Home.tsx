import { h } from "@prestonarnold/fuse";
import IdeaList from "@/components/IdeaList";
import { ideas } from "@/lib/MockIdeas";

export const HomePage = () => {
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
  return (
    <div class="space-y-16 max-w-6xl mx-auto px-4 py-8 sm:py-12">
      {/* Idea Cards */}
      <section id="ideas">
        <IdeaList ideas={ideas()} onVote={handleVote} />
      </section>
    </div>
  );
};
