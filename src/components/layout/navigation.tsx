import { h } from '../../jsx/runtime';

export interface NavigationProps {
  currentPage?: string;
}

export function Navigation({ currentPage }: NavigationProps = {}): string {
  const getLinkClass = (page: string) => {
    const baseClass = 'text-blue-500 hover:text-blue-700';
    return currentPage === page ? `${baseClass} font-bold` : baseClass;
  };

  return (
    <nav class="mb-8">
      <div class="flex justify-between items-center">
        <a href="index.html" class="text-2xl font-bold text-blue-600">
          Clarissa Gunawan
        </a>
        <div class="space-x-4">
          <a href="work.html" class={getLinkClass('work')}>
            Work
          </a>
          <a href="touch-grass.html" class={getLinkClass('touch-grass')}>
            Hiking
          </a>
          <a href="daily-sudoku.html" class={getLinkClass('daily-sudoku')}>
            Sudoku
          </a>
        </div>
      </div>
    </nav>
  );
}
