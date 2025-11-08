import { h, Fragment } from '../../jsx/runtime.ts';
import { BackButton } from '../layout/back-button.tsx';

export function WorkPage(): string {
    // TODO: Import data, it has company, start, end, position, list of achievenets and projects (list of technologies used? or something cool about it lessons learned).
    // Include parallex effect. Should I add some anymation at the back or keep it clean.   
  return (
    <>
      {BackButton()}
      <main>
        <h1 class="text-3xl font-bold mb-6">Work & Resume</h1>
        <div class="prose max-w-none">
        <button>Download Resume</button>
          <p class="text-lg mb-6">My resume and work experience will go here.</p>
          <div class="card p-6">
            <h2 class="text-xl font-semibold mb-4">Coming Soon</h2>
            <p>Professional experience, skills, and achievements will be displayed here.</p>
          </div>
        </div>
      </main>
    </>
  );
}
