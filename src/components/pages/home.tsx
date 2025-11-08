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
  return (
    <main>
      {/* TODO: name and robotics and ai should stay in one line. the buttons should be larger  */}
      <section class="max-w-4xl mx-auto text-center space-y-6">
        <h1 class="text-5xl md:text-6xl text-foreground leading-tight">
          Hey! I’m <span class="underline underline-offset-4">Clarissa Gunawan</span>,
          <br /> a software engineer currently working in the intersection of <space/> 
          <span class="underline underline-offset-4" >robotics and ai.</span>{" "}
        </h1>

        <div class="flex flex-wrap justify-center gap-6 mt-12">
          <a
            href="work-experience.html"
            class="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground h-10 px-6 text-sm font-medium transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            View Experience
          </a>
          <a
            href="outdoor-studio.html"
            class="inline-flex items-center justify-center rounded-md border border-input bg-background text-foreground h-10 px-6 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Explore the Outdoors
          </a>{" "}
        </div>

        <div class="text-muted-foreground">
          <h2 class="text-3xl md:text-4xl mt-12">
            I'm a multidisciplinary software engineer, outdoor adventurer, and a mini sudoku enthusiast. 
            My goal is to build bridges between teams and technologies to create delightful products.{" "}
          </h2>
        </div>
        <div  class="text-muted-foreground">
          <h2 class="text-3xl md:text-4xl mt-12">
            Feel free to hit me up via <a class="underline underline-offset-4 hover:text-foreground" href="mailto:">email</a>. I always try to make time for tea
            and meeting new people. I'm also on <a class="underline underline-offset-4 hover:text-foreground" href="">LinkedIn</a> & <a class="underline underline-offset-4 hover:text-foreground" href="">Strava</a>.{" "}
          </h2>
        </div>
      </section>
    </main>
  );
}
