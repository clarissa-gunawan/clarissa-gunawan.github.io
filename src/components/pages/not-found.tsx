import { h, Fragment } from '../../jsx/runtime';
import { BackButton } from '../layout/back-button.tsx';

export function NotFoundPage(): string {
  return (
    <>
      {BackButton()}
      <main>
        <h1 class="text-3xl font-bold mb-4">404 - Page Not Found</h1>
        <p class="mb-6">Looks like this page took a wrong turn somewhere. The page you're looking for doesn't exist — or at least, not here.</p>
      </main>
    </>
  );
}
