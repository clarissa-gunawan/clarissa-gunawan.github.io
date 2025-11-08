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
          <button
            id="theme-toggle"
            type="button"
            aria-pressed="false"
            aria-label="Toggle theme"
            class="inline-flex items-center gap-1 rounded-md px-2 py-1 text-sm text-primary hover:text-primary/80 
                   border-0 outline-0 bg-transparent cursor-pointer aria-[pressed=true]:text-primary"
          >
            <span id="theme-sun" class="dark:hidden inline-flex items-center" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </svg>
            </span>
            <span id="theme-moon" class="hidden dark:inline inline-flex items-center" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
