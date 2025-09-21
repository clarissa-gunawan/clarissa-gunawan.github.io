import { h } from '../../jsx/runtime';
import { Navigation, NavigationProps } from './navigation.tsx';

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
          <link rel="stylesheet" href="main.css" />
        </head>
        <body>
          <div class="container mx-auto p-8">
            {showNav ? Navigation({ currentPage }) : ''}
            {content}
          </div>
        </body>
      </html>
    )
  );
}
