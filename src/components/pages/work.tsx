import { h, Fragment } from '../../jsx/runtime';
import { BackButton } from '../layout/back-button.tsx';

export function WorkPage(): string {
  return (
    <>
      {BackButton()}
      <main>
        <h1 class="text-3xl font-bold mb-6">Work & Resume</h1>
        <div class="prose max-w-none">
          <p class="text-lg mb-6">My resume and work experience will go here.</p>
          <div class="bg-gray-50 p-6 rounded-lg">
            <h2 class="text-xl font-semibold mb-4">Coming Soon</h2>
            <p>Professional experience, skills, and achievements will be displayed here.</p>
          </div>
        </div>
      </main>
    </>
  );
}
