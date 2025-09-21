import { h } from '../../jsx/runtime';
import { Navigation } from './navigation.tsx';
import type { NavigationProps } from './navigation.tsx';

export interface LayoutProps extends NavigationProps {
  title: string;
  content: string;
  showNav?: boolean;
}

export function Layout({ title, content, showNav = true, currentPage }: LayoutProps): string {
  return (
    '<!DOCTYPE html>' +
    (
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>{title}</title>
          <script>
            {`
            (function(){
              var storageKey = 'theme';
              var root = document.documentElement;
              try {
                var stored = localStorage.getItem(storageKey);
                var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                var initial = stored || (prefersDark ? 'dark' : 'light');
                if (initial === 'dark') root.classList.add('dark'); else root.classList.remove('dark');
                // expose toggler for the button
                window.__toggleTheme = function(){
                  var isDark = root.classList.toggle('dark');
                  try { localStorage.setItem(storageKey, isDark ? 'dark' : 'light'); } catch (e) {}
                  var btn = document.getElementById('theme-toggle');
                  if (btn) btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
                };
              } catch (e) {
                // If anything goes wrong, default to light
                root.classList.remove('dark');
              }
            })();
            `}
          </script>
          <link rel="stylesheet" href="main.css" />
        </head>
        <body>
          <div class="container mx-auto p-8">
            {showNav ? Navigation({ currentPage }) : ''}
            {content}
          </div>
          <script>
            {`
            (function(){
              var btn = document.getElementById('theme-toggle');
              if (btn) {
                var isDark = document.documentElement.classList.contains('dark');
                btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
                // Attach a robust click listener instead of inline handlers
                btn.addEventListener('click', function(){
                  if (typeof window.__toggleTheme === 'function') {
                    window.__toggleTheme();
                  } else {
                    // Fallback if helper is unavailable
                    var root = document.documentElement;
                    var nowDark = root.classList.toggle('dark');
                    try { localStorage.setItem('theme', nowDark ? 'dark' : 'light'); } catch (e) {}
                    btn.setAttribute('aria-pressed', nowDark ? 'true' : 'false');
                  }
                });
              }
            })();
            `}
          </script>
        </body>
      </html>
    )
  );
}
