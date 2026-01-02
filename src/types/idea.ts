export interface Idea {
  id: string;
  title: string;
  description: string;
  category: string;
  upvotes: number;
  downvotes: number;
  userVote?: "up" | "down" | null;
}
