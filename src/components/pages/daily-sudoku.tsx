import { h, Fragment } from '../../jsx/runtime';
import { BackButton } from '../layout/back-button.tsx';

export function DailySudokuPage(): string {
  return (
    <Fragment>
      {BackButton()}
      <main>
        <h1 class="text-3xl font-bold mb-6">Daily Sudoku 🧩</h1>
        <p class="text-lg mb-6">Challenge yourself with daily sudoku puzzles!</p>

        <div class="bg-secondary/10 p-6 rounded-lg">
          <div class="flex justify-between items-center mb-6">
            <span class="text-lg font-semibold">Difficulty: Medium</span>
            <div class="timer text-xl font-mono bg-background text-foreground px-4 py-2 rounded">
              Time: <span id="timer">00:00</span>
            </div>
          </div>

          <div class="sudoku-grid grid grid-cols-9 gap-1 mb-6 max-w-md mx-auto" id="sudoku-grid"></div>

          <div class="flex gap-4 justify-center">
            <button id="check-btn" class="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90 transition-colors">
              Check Solution
            </button>
            <button id="hint-btn" class="bg-accent text-accent-foreground px-4 py-2 rounded hover:bg-accent/90 transition-colors">
              Get Hint
            </button>
          </div>

          <div id="result" class="mt-4 hidden"></div>
        </div>
      </main>

      <script>{`
        // Simple sudoku game implementation
        let startTime = Date.now();
        let timerInterval;
        
        function startTimer() {
          timerInterval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const minutes = Math.floor(elapsed / 60000);
            const seconds = Math.floor((elapsed % 60000) / 1000);
            document.getElementById('timer').textContent = 
              minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
          }, 1000);
        }
        
        function stopTimer() {
          clearInterval(timerInterval);
        }
        
        // Initialize sudoku grid
        function initSudoku() {
          const grid = document.getElementById('sudoku-grid');
          grid.innerHTML = '';
          
          for (let i = 0; i < 81; i++) {
            const cell = document.createElement('input');
            cell.type = 'text';
            cell.maxLength = 1;
            cell.className = 'w-10 h-10 text-center border border-border focus:border-primary focus:outline-none';
            cell.addEventListener('input', (e) => {
              const value = e.target.value;
              if (value && !/^[1-9]$/.test(value)) {
                e.target.value = '';
              }
            });
            grid.appendChild(cell);
          }
        }
        
        // Initialize when page loads
        document.addEventListener('DOMContentLoaded', () => {
          initSudoku();
          startTimer();
        });
        
        // Check solution button
        document.getElementById('check-btn').addEventListener('click', () => {
          alert('Solution checking coming soon!');
        });
        
        // Hint button
        document.getElementById('hint-btn').addEventListener('click', () => {
          alert('Hint feature coming soon!');
        });
      `}</script>
    </Fragment>
  );
}
