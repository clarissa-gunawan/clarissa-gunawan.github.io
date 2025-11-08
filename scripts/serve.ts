import { serve, file } from "bun";
import { existsSync } from "fs";
import { join } from "path";

const PORT = 3000;
const DIST_DIR = "dist";
const ALLOWED = new Set<string>([
  "index.html",
  "work-experience.html",
  "outdoor-studio.html",
  "404.html",
  "main.css",
  "styles/pages/outdoor-studio.css",
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
    
    // Check whitelist first
    if (ALLOWED.has(directPath)) {
      return new Response(file(`./${DIST_DIR}/${directPath}`));
    }
    
    // Allow any static asset (files that exist in dist but aren't HTML pages)
    // This includes files from the static/ directory
    const filePath = join(DIST_DIR, directPath);
    if (existsSync(filePath)) {
      // Serve non-HTML files (static assets like PDFs, images, etc.)
      if (!directPath.endsWith('.html')) {
        return new Response(file(`./${filePath}`));
      }
    }

    // Fallback: 404.html if present, else 404 text
    try {
      return new Response(file(`./${DIST_DIR}/404.html`), { status: 404 });
    } catch {
      return new Response("Not Found", { status: 404 });
    }
  },
});
