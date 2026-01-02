import { Button } from "@/components/primatives/Button";
import { router } from "../router";
import { h } from "@prestonarnold/fuse";

export const NotFoundPage = () => {
  return (
    <div class="text-center py-16">
      <h1 class="text-4xl font-bold text-gray-900">Page Not Found</h1>

      <p class="text-gray-600 mt-5 mb-5">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Button onClick={() => router.navigate("/")}>Go back home</Button>
    </div>
  );
};
