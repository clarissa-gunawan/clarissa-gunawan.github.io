import { writeFileSync, mkdirSync, copyFileSync, existsSync } from 'fs';
import { join } from 'path';

// Simple HTML template function
function createHTML(title: string, content: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <link rel="stylesheet" href="/main.css">
</head>
<body>
  <div class="container mx-auto p-8">
    ${content}
  </div>
</body>
</html>`;
}

async function buildSite() {
  console.log('🚀 Starting build...');
  
  // Create dist directory
  const distDir = 'dist';
  mkdirSync(distDir, { recursive: true });
  
  // Generate home page
  console.log('📄 Building home page...');
  const homeHTML = createHTML(
    'Clarissa Gunawan',
    `
      <h1 class="text-4xl font-bold text-blue-600 mb-4">Hello world</h1>
      <p class="text-lg mb-4">Welcome to my personal site!</p>
      <div class="space-y-2">
        <a href="/work.html" class="block text-blue-500 hover:text-blue-700">Work & Resume</a>
        <a href="/touch-grass.html" class="block text-blue-500 hover:text-blue-700">Touch Grass (Hiking)</a>
        <a href="/daily-sudoku.html" class="block text-blue-500 hover:text-blue-700">Daily Sudoku</a>
      </div>
    `
  );
  writeFileSync(join(distDir, 'index.html'), homeHTML);
  
  // Generate work page
  console.log('💼 Building work page...');
  const workHTML = createHTML(
    'Work - Clarissa Gunawan',
    `
      <h1 class="text-3xl font-bold mb-4">Work & Resume</h1>
      <p class="text-lg mb-4">My resume and work experience will go here.</p>
      <a href="/index.html" class="text-blue-500 hover:text-blue-700">← Back to Home</a>
    `
  );
  writeFileSync(join(distDir, 'work.html'), workHTML);
  
  // Generate touch-grass page
  console.log('🥾 Building touch-grass page...');
  const touchGrassHTML = createHTML(
    'Touch Grass - Clarissa Gunawan',
    `
      <h1 class="text-3xl font-bold mb-4">Touch Grass 🥾</h1>
      <p class="text-lg mb-4">Hiking adventures and outdoor experiences.</p>
      <div class="bg-green-50 p-4 rounded-lg mb-4">
        <h2 class="text-xl font-semibold mb-2">Random Hike Profile</h2>
        <button id="generate-hike" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Generate Random Hike Experience
        </button>
        <div id="hike-profile" class="mt-4 hidden">
          <!-- Generated hike profile will appear here -->
        </div>
      </div>
      <div class="bg-blue-50 p-4 rounded-lg">
        <h2 class="text-xl font-semibold mb-2">Top 10 Hikes</h2>
        <button id="show-top-hikes" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          View Top 10 Hikes
        </button>
        <div id="top-hikes-list" class="mt-4 hidden">
          <!-- Top 10 hikes will appear here -->
        </div>
      </div>
      <a href="/index.html" class="block mt-4 text-blue-500 hover:text-blue-700">← Back to Home</a>
    `
  );
  writeFileSync(join(distDir, 'touch-grass.html'), touchGrassHTML);
  
  // Generate daily-sudoku page
  console.log('🧩 Building daily-sudoku page...');
  const sudokuHTML = createHTML(
    'Daily Sudoku - Clarissa Gunawan',
    `
      <h1 class="text-3xl font-bold mb-4">Daily Sudoku 🧩</h1>
      <p class="text-lg mb-4">Challenge yourself with daily sudoku puzzles!</p>
      <div class="bg-yellow-50 p-4 rounded-lg mb-4">
        <div class="flex justify-between items-center mb-4">
          <span class="text-lg font-semibold">Difficulty: Medium</span>
          <div class="timer text-xl font-mono">
            Time: <span id="timer">00:00</span>
          </div>
        </div>
        <div class="sudoku-grid grid grid-cols-9 gap-1 mb-4" id="sudoku-grid">
          <!-- Sudoku grid will be generated here -->
        </div>
        <div class="flex gap-4">
          <button id="check-btn" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Check Solution
          </button>
          <button id="hint-btn" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Get Hint
          </button>
        </div>
        <div id="result" class="mt-4 hidden"></div>
      </div>
      <a href="/index.html" class="block mt-4 text-blue-500 hover:text-blue-700">← Back to Home</a>
    `
  );
  writeFileSync(join(distDir, 'daily-sudoku.html'), sudokuHTML);
  
  // Build CSS
  console.log('🎨 Building CSS...');
  const { execSync } = await import('child_process');
  execSync('tailwindcss -i src/styles/main.css -o dist/main.css --minify', { stdio: 'inherit' });
  
  console.log('✅ Build complete!');
  console.log(`📁 Files generated in: ${distDir}/`);
}

buildSite().catch(console.error);