import { serve, file } from "bun";

const PORT = 3000;
const DIST_DIR = "dist";
const ALLOWED = new Set<string>([
  "index.html",
  "work.html",
  "touch-grass.html",
  "daily-sudoku.html",
  "404.html",
  "main.css",
  "styles/pages/touch-grass.css",
]);

serve({
  port: PORT,
  fetch(req) {
    const url = new URL(req.url);
    const pathname = url.pathname;

    // Root -> index.html
    if (pathname === "/" || pathname === "") {
      return new Response(file(`./${DIST_DIR}/index.html`));
    }

    // Serve only whitelisted files; everything else -> 404
    const directPath = pathname.slice(1);
    if (ALLOWED.has(directPath)) {
      return new Response(file(`./${DIST_DIR}/${directPath}`));
    }

    // Fallback: 404.html if present, else 404 text
    try {
      return new Response(file(`./${DIST_DIR}/404.html`), { status: 404 });
    } catch {
      return new Response("Not Found", { status: 404 });
    }
  },
});
