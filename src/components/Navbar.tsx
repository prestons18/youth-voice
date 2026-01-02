// In Navbar.tsx
import { h, createNavLink, effect } from "@prestonarnold/fuse";
import { NYIWLogo } from "./NYIWLogo";
import { router } from "../router";

// Create NavLink component with the router instance
const NavLink = createNavLink(router);

type NavItem = {
  name: string;
  href: string;
  exact?: boolean;
};

export const Navbar = ({
  items = [],
  className = "",
}: {
  items?: NavItem[];
  className?: string;
}) => {
  // Add an effect to force re-render when route changes
  effect(() => {
    // This will cause the component to re-render when the route changes
    const currentPath = router.currentPath.value;
  });

  return (
    <nav class={`bg-white shadow-sm ${className}`}>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <NavLink
              href="/"
              exact
              className="shrink-0 flex items-center"
              activeClassName=""
            >
              <NYIWLogo />
            </NavLink>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            {items.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                exact={item.exact}
                className="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                activeClassName="border-[#8B1538] text-gray-900"
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
