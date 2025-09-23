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
    <nav class="mb-8">
      <div class="flex justify-between items-center">
        <a href="index.html" class="text-2xl font-bold text-primary">
          Clarissa Gunawan
        </a>
        <div class="flex items-center space-x-4">
          <a href="work.html" class={getLinkClass("work")}>
            Experience
          </a>
          <a href="touch-grass.html" class={getLinkClass("touch-grass")}>
            Outdoor Studio
          </a>
          <a href="daily-sudoku.html" class={getLinkClass("daily-sudoku")}>
            Mini Challenge
          </a>
          <a href="contact.html" class={getLinkClass("contact")}>
            Contact
          </a>
          <button
            id="theme-toggle"
            type="button"
            aria-pressed="false"
            aria-label="Toggle theme"
            class="inline-flex items-center gap-1 rounded-md border border-primary/30 px-3 py-1 text-sm text-primary hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary
                   aria-[pressed=true]:bg-primary aria-[pressed=true]:text-primary-foreground aria-[pressed=true]:border-primary
                   dark:text-primary dark:border-primary/40 dark:hover:bg-primary/20 dark:aria-[pressed=true]:bg-primary/80 dark:aria-[pressed=true]:border-primary/60"
          >
            <span class="dark:hidden" aria-hidden="true">
              🌙
            </span>
            <span class="hidden dark:inline" aria-hidden="true">
              ☀️
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
