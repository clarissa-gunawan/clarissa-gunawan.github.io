import { writeFileSync, mkdirSync, existsSync, copyFileSync } from 'fs';
import { join } from 'path';
import { execSync } from 'child_process';

// Import components
import { Layout } from '../src/components/layout/layout.tsx';
import { HomePage } from '../src/components/pages/home.tsx';
import { WorkPage } from '../src/components/pages/work.tsx';
import { TouchGrassPage } from '../src/components/pages/touch-grass.tsx';
import { DailySudokuPage } from '../src/components/pages/daily-sudoku.tsx';
import { NotFoundPage } from '../src/components/pages/not-found.tsx';

async function buildSite() {
  console.log('🚀 Starting build...');
  
  // Create dist directory
  const distDir = 'dist';
  mkdirSync(distDir, { recursive: true });
  
  // Generate home page
  console.log('📄 Building home page...');
  const homeHTML = Layout({
    title: 'Clarissa Gunawan',
    content: HomePage(),
    currentPage: 'home'
  });
  writeFileSync(join(distDir, 'index.html'), homeHTML);
  
  // Generate work page
  console.log('💼 Building work page...');
  const workHTML = Layout({
    title: 'Work - Clarissa Gunawan',
    content: WorkPage(),
    currentPage: 'work'
  });
  writeFileSync(join(distDir, 'work.html'), workHTML);
  
  // Generate touch-grass page
  console.log('🥾 Building touch-grass page...');
  const touchGrassHTML = Layout({
    title: 'Touch Grass - Clarissa Gunawan',
    content: TouchGrassPage(),
    currentPage: 'touch-grass',
    showNav: false // Touch grass has its own navigation
  });
  writeFileSync(join(distDir, 'touch-grass.html'), touchGrassHTML);
  
  // Generate daily-sudoku page
  console.log('🧩 Building daily-sudoku page...');
  const sudokuHTML = Layout({
    title: 'Daily Sudoku - Clarissa Gunawan',
    content: DailySudokuPage(),
    currentPage: 'daily-sudoku'
  });
  writeFileSync(join(distDir, 'daily-sudoku.html'), sudokuHTML);
  
  // Generate 404 page
  console.log('🚫 Building 404 page...');
  const notFoundHTML = Layout({
    title: 'Page Not Found - Clarissa Gunawan',
    content: NotFoundPage(),
    currentPage: '404'
  });
  writeFileSync(join(distDir, '404.html'), notFoundHTML);
  
  // Build CSS
  console.log('🎨 Building CSS...');
  execSync("tailwindcss -i src/styles/main.css -o dist/main.css --minify --content 'src/**/*.{tsx,ts,html,js}'", { stdio: 'inherit' });
  
  // Copy page-specific styles
  console.log('📁 Copying page styles...');
  mkdirSync(join(distDir, 'styles', 'pages'), { recursive: true });
  copyFileSync('src/styles/pages/touch-grass.css', join(distDir, 'styles', 'pages', 'touch-grass.css'));
  
  // Create .nojekyll to disable Jekyll processing on GitHub Pages
  if (!existsSync(join(distDir, '.nojekyll'))) {
    writeFileSync(join(distDir, '.nojekyll'), '');
  }
  
  console.log('✅ Build complete!');
  console.log(`📁 Files generated in: ${distDir}/`);
}

buildSite().catch(console.error);
