import { h } from '../../jsx/runtime';

export function NotFoundPage(): string {
  return (
    <main>
      <h1 class="text-3xl font-bold mb-4">404 - Page Not Found</h1>
      <p class="mb-6">The page you’re looking for doesn’t exist.</p>
      <a href="index.html" class="text-blue-500 hover:text-blue-700">Return to Home</a>
    </main>
  );
}

