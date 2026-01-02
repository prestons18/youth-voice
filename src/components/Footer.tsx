import { NavLink } from "@/router";
import { h } from "@prestonarnold/fuse";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer class="mt-auto py-6 border-t border-gray-200">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex flex-col items-center justify-between md:flex-row">
          <p class="text-sm text-gray-600">
            © {currentYear} Arnold Development. All rights reserved.
          </p>
          <div class="flex gap-4 mt-4 md:mt-0">
            <NavLink
              href="/about"
              className="text-xs text-gray-600 hover:text-gray-900"
            >
              About
            </NavLink>
            <NavLink
              href="/privacy"
              className="text-xs text-gray-600 hover:text-gray-900"
            >
              Privacy
            </NavLink>
            <NavLink
              href="/terms"
              className="text-xs text-gray-600 hover:text-gray-900"
            >
              Terms
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
