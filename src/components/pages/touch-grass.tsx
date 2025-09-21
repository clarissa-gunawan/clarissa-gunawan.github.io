import { h, Fragment } from '../../jsx/runtime';
import { BackButton } from '../layout/back-button.tsx';
import { StatsSummary, StatsData } from '../ui/stats-summary.tsx';
import { TierSection, TierData } from '../ui/tier-section.tsx';
import { readFileSync } from 'fs';
import { join } from 'path';

export function TouchGrassPage(): string {
  // Read trail data
  const trailData = JSON.parse(readFileSync(join(process.cwd(), 'src', 'data', 'trails.json'), 'utf8'));
  const siteConfig = JSON.parse(readFileSync(join(process.cwd(), 'src', 'data', 'site-config.json'), 'utf8'));
  
  const stats: StatsData = siteConfig.stats;
  const tiers: Record<string, TierData> = trailData;

  // Generate tier sections as JSX
  const tierSections = Object.entries(tiers).map(([tierKey, tierData]) => (
    <TierSection tierKey={tierKey} tierData={tierData} />
  ));

  // Header/Nav will be returned directly in JSX

    /* removed stray JSX block here */

  // Script will be returned directly in JSX

  return (
    <Fragment>
      {BackButton()}
      <header class="bg-background border-b border-border fixed w-full top-0 z-50">
        <nav class="max-w-7xl mx-auto px-8 py-6">
          <div class="flex justify-between items-center">
            <div class="logo">
              <span class="text-sm font-light tracking-widest uppercase text-foreground">Trail Collection</span>
            </div>
            <div class="nav-links hidden md:flex space-x-8">
              <a href="#random" class="nav-link text-sm font-light tracking-wide text-muted-foreground hover:text-foreground transition-colors">Discovery</a>
              <a href="#stats" class="nav-link text-sm font-light tracking-wide text-muted-foreground hover:text-foreground transition-colors">Statistics</a>
              <a href="#tiers" class="nav-link text-sm font-light tracking-wide text-muted-foreground hover:text-foreground transition-colors">Tiers</a>
            </div>
          </div>
        </nav>
      </header>
      <main class="tier-ranking-portfolio pt-24">
        <nav class="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
          <div class="flex flex-col space-y-4">
            <button class="nav-dot w-2 h-8 bg-foreground/30 hover:bg-foreground/60 transition-colors" data-section="random"></button>
            <button class="nav-dot w-2 h-8 bg-foreground/30 hover:bg-foreground/60 transition-colors" data-section="stats"></button>
            <button class="nav-dot w-2 h-8 bg-foreground/30 hover:bg-foreground/60 transition-colors" data-section="tiers"></button>
          </div>
        </nav>

        <section id="random-spread" class="min-h-screen flex bg-background">
          <div class="w-1/2 flex items-center p-16 lg:p-24">
            <div class="max-w-lg">
              <div class="mb-12">
                <div class="text-xs text-muted-foreground tracking-widest uppercase mb-6">Discovery</div>
                <h2 class="text-4xl lg:text-5xl font-light text-foreground mb-6 leading-tight">
                  Serendipitous<br /><span class="font-thin italic">Trails</span>
                </h2>
                <div class="w-16 h-px bg-border mb-8"></div>
                <p class="text-base text-muted-foreground leading-relaxed mb-8 font-light">
                  Let chance guide your next adventure. Each trail tells a story,
                  and sometimes the best stories are the ones we never planned to find.
                </p>
              </div>

              <button id="generate-hike" class="bg-accent text-white px-6 py-3 text-sm font-light tracking-wide transition-colors hover:bg-accent/90">
                Generate Trail
              </button>

              <div id="hike-profile" class="mt-12 hidden"></div>
            </div>
          </div>

          <div class="w-1/2 relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Forest trail path"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-foreground/20"></div>
            <div class="absolute bottom-8 left-8 text-white">
              <div class="text-sm font-light mb-1">Serendipitous Discovery</div>
              <div class="text-xs opacity-80">Photography by Clarissa Gunawan</div>
            </div>
            <div class="absolute inset-0 whale-shark-pattern opacity-10"></div>
          </div>
        </section>

        <section id="stats-spread" class="min-h-screen flex bg-background">
          <div class="w-1/2 flex items-center p-16 lg:p-24">
            <div class="max-w-lg">
              <div class="mb-12">
                <div class="text-xs text-muted-foreground tracking-widest uppercase mb-6">Statistics</div>
                <h2 class="text-4xl lg:text-5xl font-light text-foreground mb-6 leading-tight">
                  Trail
                  <br />
                  <span class="font-thin italic">Metrics</span>
                </h2>
                <div class="w-16 h-px bg-border mb-8"></div>
                <p class="text-base text-muted-foreground leading-relaxed mb-8 font-light">
                  A comprehensive overview of miles hiked, elevation gained, and adventures completed across different terrains and challenges.
                </p>
              </div>
            </div>
          </div>

          <div class="w-1/2 flex items-center justify-center p-16 lg:p-24">{StatsSummary(stats)}</div>
        </section>

        <section id="tiers-spread" class="min-h-screen bg-background">
          <div class="container mx-auto px-8 py-16">
            <div class="text-center mb-16">
              <div class="text-xs text-muted-foreground tracking-widest uppercase mb-6">Tier Rankings</div>
              <h2 class="text-4xl lg:text-5xl font-light text-foreground mb-6 leading-tight">
                Trail
                <br />
                <span class="font-thin italic">Classifications</span>
              </h2>
              <div class="w-16 h-px bg-border mx-auto mb-8"></div>
              <p class="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto font-light">
                Each trail is ranked based on difficulty, scenery, challenge, and personal impact. From legendary S-tier adventures to solid B-tier training hikes.
              </p>
            </div>

            <div id="tier-sections" class="space-y-16">{tierSections}</div>
          </div>
        </section>
      </main>

      <link rel="stylesheet" href="styles/pages/touch-grass.css" />
      <script>{`
        // Navigation functionality
        const navDots = document.querySelectorAll('.nav-dot');
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('section[id$="-spread"]');
        
        function updateActiveNavigation() {
          const scrollPos = window.scrollY + window.innerHeight / 2;
          
          sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
              // Update navigation dots
              navDots.forEach(dot => dot.classList.remove('active'));
              if (navDots[index]) navDots[index].classList.add('active');
              
              // Update navigation links
              navLinks.forEach(link => link.classList.remove('active'));
              if (navLinks[index]) navLinks[index].classList.add('active');
            }
          });
        }
        
        // Smooth scroll to sections
        navDots.forEach((dot, index) => {
          dot.addEventListener('click', () => {
            sections[index].scrollIntoView({ behavior: 'smooth' });
          });
        });
        
        // Navigation links smooth scroll
        navLinks.forEach((link, index) => {
          link.addEventListener('click', (e) => {
            e.preventDefault();
            sections[index].scrollIntoView({ behavior: 'smooth' });
          });
        });
        
        // Update navigation on scroll
        window.addEventListener('scroll', updateActiveNavigation);
        updateActiveNavigation(); // Initial call
        
        // Random trail generator
        const generateBtn = document.getElementById('generate-hike');
        const hikeProfile = document.getElementById('hike-profile');
        
        generateBtn.addEventListener('click', () => {
          // This would be populated with actual trail data from the JSON
          hikeProfile.innerHTML = '<p>Random trail generator coming soon!</p>';
          hikeProfile.classList.remove('hidden');
        });
      `}</script>
    </Fragment>
  );
}
