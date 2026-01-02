import { h } from "@prestonarnold/fuse";
import { Card } from "../components/primatives/Card";
import { Button } from "../components/primatives/Button";

export const AboutPage = () => {
  return (
    <div class="max-w-4xl mx-auto px-4">
      <div class="space-y-8 py-8">
        {/* Mission Section */}
        <div class="bg-linear-to-r from-[#8B1538] to-[#a61d45] text-white p-8 rounded-lg shadow-lg">
          <h2 class="text-2xl font-bold mb-4">Our Mission</h2>
          <p class="text-lg leading-relaxed">
            The Northamptonshire Youth Idea Wall exists to give young people a
            powerful platform to voice their ideas, drive positive change, and
            actively participate in shaping their community. We believe that
            young people have innovative perspectives that deserve to be heard
            and acted upon.
          </p>
        </div>

        {/* How It Works */}
        <Card hover={true}>
          <h2 class="text-2xl font-bold text-[#8B1538] mb-6">How It Works</h2>
          <div class="grid md:grid-cols-3 gap-6">
            {[
              {
                number: 1,
                title: "Share Your Ideas",
                description:
                  "Post your vision for improving Northamptonshire – no idea is too big or too small",
              },
              {
                number: 2,
                title: "Vote & Discuss",
                description:
                  "Support ideas you believe in and engage in meaningful conversations with other young people",
              },
              {
                number: 3,
                title: "Make It Happen",
                description:
                  "Top ideas are reviewed by local authorities and community partners for potential implementation",
              },
            ].map((step) => (
              <div class="text-center">
                <div class="bg-[#8B1538] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 class="font-semibold text-lg mb-2">{step.title}</h3>
                <p class="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Call to Action */}
        <div class="bg-[#8B1538] text-white p-8 rounded-lg text-center">
          <h2 class="text-2xl font-bold mb-4">Ready to Get Involved?</h2>
          <p class="text-lg mb-6">
            Your ideas can help shape the future of Northamptonshire. Whether
            you're passionate about the environment, education, recreation, or
            community services – we want to hear from you!
          </p>
          <div class="flex justify-center gap-4 flex-wrap">
            <Button
              variant="secondary"
              onClick={() => (window.location.href = "/submit")}
            >
              Share an Idea
            </Button>
            <Button
              variant="outline"
              onClick={() => (window.location.href = "/ideas")}
              class=" border-white"
            >
              Browse Ideas
            </Button>
          </div>
        </div>

        {/* Contact/Support */}
        <div class="text-center text-gray-600">
          <p>
            Questions or suggestions about the platform? We'd love to hear from
            you.
          </p>
        </div>
      </div>
    </div>
  );
};
