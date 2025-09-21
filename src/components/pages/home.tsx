import { readFileSync } from 'fs';
import { join } from 'path';
import { h } from '../../jsx/runtime';

interface PageInfo {
  id: string;
  title: string;
  description: string;
  color: string;
  emoji: string;
}

export function HomePage(): string {
  // Read site config
  const siteConfig = JSON.parse(
    readFileSync(join(process.cwd(), 'src', 'data', 'site-config.json'), 'utf8')
  );
  const pages = siteConfig.pages as PageInfo[];

  const pageCards = pages.map((page) => (
    <a
      href={`${page.id}.html`}
      class="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <h2 class={`text-xl font-semibold mb-2 text-${page.color}-600`}>{page.title}</h2>
      <p class="text-gray-600">{page.description}</p>
    </a>
  ));

  return (
    <main>
      <h1 class="text-4xl font-bold text-blue-600 mb-4">Hello world</h1>
      <p class="text-lg mb-4">Welcome to my personal site!</p>
      <div class="grid md:grid-cols-3 gap-6 mt-8">{pageCards}</div>
    </main>
  );
}
