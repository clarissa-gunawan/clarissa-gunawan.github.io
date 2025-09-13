import { Hono } from "hono";
import { serveStatic } from "hono/bun";

const app = new Hono();

app.use("/dist/*", serveStatic({ root: "./" }));

app.get("/", (c) =>
  c.html(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
  <title>Clarissa Gunawan</title>
  <link rel="stylesheet" href="/dist/main.css">
  <script src="https://unpkg.com/htmx.org"></script>
</head>
<body>
<h1 class="text-4xl font-bold text-blue-600 mb-4">Hello world</h1>
<button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition" hx-get="/api/data" hx-target="#result">
Click me
</button>
<div id="result" class="mt-4 p-4 bg-gray-100 rounded"></div>
</body>
</html>`),
);

app.get("/work", (c) => c.json({ what: "myresume here" }));

app.get("/touch-grass", (c) => c.json({ what: "hike tierlist" }));

app.get("/daily-sudoku", (c) => c.json({ what: "some daily challenge" }));

app.get("/api/data", (c) => {
  return c.html(
    `<p>Data loaded! Current time: ${new Date().toLocaleTimeString()}</p>`,
  );
});

export default app;
