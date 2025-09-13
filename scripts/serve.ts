import { serve, file } from "bun";

const PORT = 3000;
const DIST_DIR = "dist";
const routes: Record<string, string> = {
  "/work": "work.html",
  "/touch-grass": "touch-grass.html",
  "/daily-sudoku": "daily-sudoku.html",
};

serve({
  port: PORT,
  fetch(req) {
    const url = new URL(req.url);
    const pathname = url.pathname;

    if (pathname in routes) {
      return new Response(file(`./${DIST_DIR}/${routes[pathname]}`));
    }

    const filePath = pathname.slice(1); // Remove leading slash
    if (filePath) {
      try {
        return new Response(file(`./${DIST_DIR}/${filePath}`));
      } catch {
        return new Response("Not Found", { status: 404 });
      }
    }

    // Default to index.html for root
    return new Response(file(`./${DIST_DIR}/index.html`));
  },
});
