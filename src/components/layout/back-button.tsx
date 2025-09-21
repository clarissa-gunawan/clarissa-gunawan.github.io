import { h } from '../../jsx/runtime';

export function BackButton(): string {
  return (
    <a href="index.html" class="inline-flex items-center text-blue-500 hover:text-blue-700 mb-6">
      <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
      </svg>
      Back to Home
    </a>
  );
}
