import { Icon } from "@/components/primatives/Icon";
import { h } from "@prestonarnold/fuse";

type VoteType = "upvote" | "downvote";

export const VoteButton = ({
  votes,
  hasVoted,
  onVote,
  type = "upvote",
}: {
  votes: () => number;
  hasVoted: () => boolean;
  onVote: () => void;
  type?: VoteType;
}) => {
  const isUpvote = type === "upvote";
  const iconName = isUpvote ? "ThumbsUp" : "ThumbsDown";

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onVote();
      }}
      class={`inline-flex items-center gap-2 px-3 py-2 rounded-lg border-2 transition-all cursor-pointer ${
        hasVoted()
          ? isUpvote
            ? "border-[#8B1538] bg-[#8B1538] text-white"
            : "border-[#D4AF37] bg-[#D4AF37] text-white"
          : `border-[#E5E5E5] bg-white text-[#1A1A1A] ${
              isUpvote
                ? "hover:border-[#8B1538] hover:text-[#8B1538]"
                : "hover:border-[#D4AF37] hover:text-[#D4AF37]"
            }`
      }`}
    >
      <Icon
        name={iconName}
        size={18}
        color={hasVoted() ? "#FFFFFF" : "#1A1A1A"}
      />
      <span class="font-semibold">{votes()}</span>
    </button>
  );
};
