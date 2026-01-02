import { h } from "@prestonarnold/fuse";
import { Signal } from "@prestonarnold/fuse";
import { Button } from "./primatives/Button";
import { Input } from "./primatives/Input";
import { Textarea } from "./primatives/Textarea";
import { Card } from "./primatives/Card";

interface FormData {
  title: string;
  description: string;
  category: string;
}

interface IdeaFormProps {
  formData: Signal<FormData>;
  onSubmit: () => void;
}

export const IdeaForm = ({ formData, onSubmit }: IdeaFormProps) => {
  const handleSubmit = (e: Event) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Card class="max-w-3xl">
      <form onSubmit={handleSubmit} class="flex flex-col gap-5">
        <Input
          label="Idea Title"
          placeholder="Enter your idea title"
          value={formData().title}
          onInput={(e) =>
            formData.set({ ...formData(), title: e.target.value })
          }
          required
        />

        <Textarea
          label="Description"
          placeholder="Describe your idea in detail"
          value={formData().description}
          onInput={(e: any) =>
            formData.set({ ...formData(), description: e.target.value })
          }
          required
          rows={5}
        />

        <Input
          label="Category (optional)"
          placeholder="e.g., Environment, Education, Community"
          value={formData().category}
          onInput={(e) =>
            formData.set({ ...formData(), category: e.target.value })
          }
        />

        <Button
          onClick={() => handleSubmit(new Event("submit"))}
          icon="Send"
          fullWidth
          disabled={!formData().title.trim() || !formData().description.trim()}
        >
          Submit Your Idea
        </Button>
      </form>
    </Card>
  );
};
