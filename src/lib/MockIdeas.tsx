import { signal } from "@prestonarnold/fuse";
import { Idea } from "@/types/idea";

export const ideas = signal<Idea[]>([
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
  {
    id: "4",
    title: "Youth Art Exhibition",
    description:
      "A showcase of local young artists' work at the community center.",
    category: "Arts",
    upvotes: 12,
    downvotes: 2,
    userVote: null,
  },
  {
    id: "5",
    title: "Mental Health Workshop",
    description:
      "Workshops focusing on mental health awareness and coping strategies.",
    category: "Health",
    upvotes: 18,
    downvotes: 3,
    userVote: null,
  },
  {
    id: "6",
    title: "Tech Mentorship Program",
    description:
      "Tech professionals mentoring local students in programming and digital skills.",
    category: "Technology",
    upvotes: 14,
    downvotes: 2,
    userVote: null,
  },
  {
    id: "7",
    title: "Community Choir",
    description: "Weekly choir practice open to all ages and skill levels.",
    category: "Arts",
    upvotes: 7,
    downvotes: 1,
    userVote: null,
  },
]);
