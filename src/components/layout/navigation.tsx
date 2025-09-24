import { h } from "../../jsx/runtime";

export interface NavigationProps {
  currentPage?: string;
}

export function Navigation({ currentPage }: NavigationProps = {}): string {
  const getLinkClass = (page: string) => {
    const baseClass = "text-primary hover:text-primary/80";
    return currentPage === page ? `${baseClass} font-bold` : baseClass;
  };

  return (
      // TODO: Make the following icon based not a emoji. The button cannot have border and the background is clear. And the cursor should indicate clickable
    <nav class="mb-8">
      <div class="flex justify-between items-center text-center">
        <a href="index.html" class="text-2xl font-bold text-primary">
         CG
        </a>
        <div class="flex items-center space-x-4 text-muted">
          <a href="work-experience.html" class={getLinkClass("work-experience")}>
            Work Experience
          </a>
          <a href="outdoor-studio.html" class={getLinkClass("outdoor-studio")}>
            Outdoor Studio
          </a>
          <a href="mini-challenge.html" class={getLinkClass("mini-challenge")}>
            Mini Challenge
          </a>
          <button
            id="theme-toggle"
            type="button"
            aria-pressed="false"
            aria-label="Toggle theme"
            class="inline-flex items-center gap-1 rounded-md px-3 py-1 text-sm text-primary hover 
                   aria-[pressed=true]:text-primary"
          >
            <span class="dark:hidden" aria-hidden="true">
              🌙 moon
            </span>
            <span class="hidden dark:inline" aria-hidden="true">
              ☀️ sun
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
