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
                // Function to update button text visibility
                function updateButtonText() {
                  var sunSpan = document.getElementById('theme-sun');
                  var moonSpan = document.getElementById('theme-moon');
                  var isDark = root.classList.contains('dark');
                  if (sunSpan && moonSpan) {
                    if (isDark) {
                      sunSpan.style.display = 'none';
                      moonSpan.style.display = 'inline';
                    } else {
                      sunSpan.style.display = 'inline';
                      moonSpan.style.display = 'none';
                    }
                  }
                }
                // expose toggler for the button
                window.__toggleTheme = function(){
                  var isDark = root.classList.toggle('dark');
                  try { localStorage.setItem(storageKey, isDark ? 'dark' : 'light'); } catch (e) {}
                  var btn = document.getElementById('theme-toggle');
                  if (btn) btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
                  updateButtonText();
                };
                // Update button text on initial load
                setTimeout(updateButtonText, 0);
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
                var root = document.documentElement;
                var isDark = root.classList.contains('dark');
                btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
                // Function to update button text visibility
                function updateButtonText() {
                  var sunSpan = document.getElementById('theme-sun');
                  var moonSpan = document.getElementById('theme-moon');
                  var nowDark = root.classList.contains('dark');
                  if (sunSpan && moonSpan) {
                    if (nowDark) {
                      sunSpan.style.display = 'none';
                      moonSpan.style.display = 'inline';
                    } else {
                      sunSpan.style.display = 'inline';
                      moonSpan.style.display = 'none';
                    }
                  }
                }
                // Update button text on initial load
                updateButtonText();
                // Attach a robust click listener instead of inline handlers
                btn.addEventListener('click', function(){
                  if (typeof window.__toggleTheme === 'function') {
                    window.__toggleTheme();
                  } else {
                    // Fallback if helper is unavailable
                    var nowDark = root.classList.toggle('dark');
                    try { localStorage.setItem('theme', nowDark ? 'dark' : 'light'); } catch (e) {}
                    btn.setAttribute('aria-pressed', nowDark ? 'true' : 'false');
                    updateButtonText();
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
