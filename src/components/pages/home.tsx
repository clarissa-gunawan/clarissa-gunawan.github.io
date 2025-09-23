import { readFileSync } from "fs";
import { join } from "path";
import { h } from "../../jsx/runtime";

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
    readFileSync(
      join(process.cwd(), "src", "data", "site-config.json"),
      "utf8",
    ),
  );
  const pages = siteConfig.pages as PageInfo[];

  const pageCards = pages.map((page) => (
    <a
      href={`${page.id}.html`}
      class="card block p-6 hover:shadow-md transition-shadow"
    >
      <h2 class="text-xl font-semibold mb-2 text-foreground">{page.title}</h2>
      <p class="text-muted-foreground">{page.description}</p>
    </a>
  ));

  return (
    <main>
      {/* Hero section */}
      <section class="max-w-4xl mx-auto text-center space-y-6">
        <h1 class="text-5xl md:text-6xl text-foreground leading-tight">
          Hey! I’m Clarissa Gunawan,
          <br /> a software engineer currently working in the intersection of
          robotics and ai.{" "}
        </h1>

        <div class="flex flex-wrap justify-center gap-4 mt-6">
          <a
            href="work.html"
            class="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground h-10 px-6 text-sm font-medium transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            View Experience
          </a>
          <a
            href="touch-grass.html"
            class="inline-flex items-center justify-center rounded-md border border-input bg-background text-foreground h-10 px-6 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Explore the Outdoors
          </a>{" "}
        </div>

        <div>
          <p class="text-muted-foreground">
            I'm a multidisciplinary software engineer, outdoor adventurer, and
            <a
              class="underline underline-offset-4 hover:text-foreground"
              href="daily-sudoku.html"
            >
              {" "}
              sudoku enthusiast
            </a>
            . My goal is to build bridges between teams and technologies to
            create delightful products.{" "}
          </p>
        </div>
        <div>
          <p class="text-muted-foreground">
            Feel free to hit me up via email. I always try to make time for tea
            and meeting new people. I'm also on LinkedIn & Strava.{" "}
          </p>
        </div>
      </section>

      {/* Cards grid */}
      <section class="mt-12 max-w-5xl mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {pageCards}
        </div>
      </section>
    </main>
  );
}
