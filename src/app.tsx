import { h } from "@prestonarnold/fuse";
import { PageHeader } from "./components/primatives/Header";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { RouterView } from "./router";

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
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Submit Idea", href: "/submit" },
    { name: "Categories", href: "/categories" },
    { name: "About", href: "/about" },
  ];

  return (
    <div class="flex flex-col min-h-screen bg-[#FAFAF8]">
      <Navbar items={navItems} />
      <PageHeader
        title="Northamptonshire Youth Idea Wall"
        description="Contribute to your community by sharing your ideas and suggestions."
      />

      <main class="grow">
        <div class="max-w-6xl mx-auto px-4 py-8 sm:py-12">
          <div class="flex flex-col gap-16">
            <RouterView />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
