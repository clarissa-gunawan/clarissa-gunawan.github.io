import { h, Fragment } from '../../jsx/runtime.ts';
import { BackButton } from '../layout/back-button.tsx';
import { readFileSync } from 'fs';
import { join } from 'path';

export interface StatsData {
  totalDistanceKm: number;
  totalElevationM: number;
  countriesExplored: number;
  hours: number;
}

export function StatsSummary(stats: StatsData): string {
  return (
    <div class="stats-summary">
      <div class="summary-stat">
        <div class="summary-number">{stats.totalDistanceKm}</div>
        <div class="summary-label">KM Hiked</div>
      </div>
      <div class="summary-stat">
        <div class="summary-number">{stats.totalElevationM.toLocaleString()}</div>
        <div class="summary-label">M Climbed</div>
      </div>
      <div class="summary-stat">
        <div class="summary-number">{stats.countriesExplored}</div>
        <div class="summary-label">Countries Explored</div>
      </div>
      <div class="summary-stat">
        <div class="summary-number">{stats.hours}</div>
        <div class="summary-label">Hours Hiking</div>
      </div>
    </div>
  );
}
export interface Trail {
  name: string;
  location: string;
  tier: string;
  distanceKm: string;
  elevationM: string;
  timeH: string;
  terrainDifficulty: string;
  description: string;
  link: string;
  images: string;
  gpx: string;
}

export function TrailCard(trail: Trail): string {
  return (
    <div class="trail-card">
      <img src={trail.images[0]} alt={trail.name} class="trail-image" />
      <div class="trail-content">
        <h3>{trail.name}</h3>
        <div class="trail-location">{trail.location}</div>
        <div class="trail-stats">
          <div class="trail-stat">
            Distance<br />
            <span>{trail.distanceKm}</span>
          </div>
          <div class="trail-stat">
            Elevation<br />
            <span>{trail.elevationM}</span>
          </div>
          <div class="trail-stat">
            Time<br />
            <span>{trail.timeH}</span>
          </div>
        </div>
        <div class="trail-description">{trail.description}</div>
        <div class="gpx-mini">
          <div class="elevation-mini"></div>
        </div>
      </div>
    </div>
  );
}

export function OutdoorStudioPage(): string {
  const trailData: Array<Trail> = JSON.parse(readFileSync(join(process.cwd(), 'src', 'data', 'trails.json'), 'utf8'));
  const stats = JSON.parse(readFileSync(join(process.cwd(), 'src', 'data', 'trail-stats.json'), 'utf8'));
   
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
        <section>
        <h1>Outdoor Studio</h1>
        <button>
        <span>Let's be practical</span>
        <span>Let's be fancy</span>
        </button>
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
        <section>
<div class="trail-grid">
        {trailData.map((trail) => (
          <TrailCard {...trail} />
        ))}
      </div>

        </section>
        {/*
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
        </section> */} 
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
