import { h, Fragment } from '../../jsx/runtime.ts';
import { BackButton } from '../layout/back-button.tsx';

export function WorkPage(): string {
  return (
    <>
      {BackButton()}
      <main class="max-w-4xl mx-auto px-4 py-8">
        <div class="mb-8">
          <h1 class="text-4xl font-bold mb-2">Clarissa Gunawan</h1>
          <div class="flex flex-wrap gap-4 text-muted-foreground mb-4">
            <a href="mailto:gunawan.clarissa@outlook.com" class="hover:text-foreground transition-colors">
              gunawan.clarissa@outlook.com
            </a>
          </div>
          <a 
            href="/ClarissaGunawanResume.pdf" 
            download="ClarissaGunawanResume.pdf"
            class="inline-block px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
          >
            Download Resume PDF
          </a>
        </div>

        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-6 pb-2 border-b">Work Experience</h2>
          
          <div class="mb-8">
            <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
              <div>
                <h3 class="text-xl font-semibold">Sanctuary AI</h3>
                <p class="text-lg font-medium text-muted-foreground">Senior Software Engineer</p>
              </div>
              <span class="text-sm text-muted-foreground">July 2025 – Present</span>
            </div>
            <ul class="list-disc list-inside space-y-2 ml-4">
              <li>Built camera streaming from simulation to speed up camera selection and cut integration time.</li>
              <li>Reduced software build times by 15%, saving 400+ hours of wait time weekly.</li>
              <li>Technologies used: Python, C++, MuJoCo, ROS2</li>
            </ul>
          </div>

          <div class="mb-8">
            <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
              <div>
                <h3 class="text-xl font-semibold">Sanctuary AI</h3>
                <p class="text-lg font-medium text-muted-foreground">Software Engineering Manager/Lead</p>
              </div>
              <span class="text-sm text-muted-foreground">January 2023 – July 2025</span>
            </div>
            <ul class="list-disc list-inside space-y-2 ml-4">
              <li>Built a simulation tightly integrated with the robotics software stack, supporting 4 robot variants and enabling new robot variants to be onboarded in under 1 day.</li>
              <li>Developed a multi-robot teleoperation system with multi-VR hardware support. Improved stereo camera latency by 74% (500ms→130ms), enabled Cartesian control, added force-torque feedback, and navigation.</li>
              <li>Co-led 40 engineers across 7 teams to deliver a fully deployable robotic system in 2 months, providing teleoperation, data collection, and ML capabilities, and developing APIs for external partners.</li>
              <li>Implemented operational excellence practices (runbooks, weekly reviews, dashboards), reducing downtime by 90% (10h → 1h per week) and cutting cloud spend by $10K/month.</li>
              <li>Improved developer experience by consolidating 100+ repositories into 10 and introducing containerization for a consistent environment. Reduced provisioning time from 2 weeks to 1 day, and cut build time by 50% and build size by 56%.</li>
              <li>Spearheaded release management by building CI/CD pipelines for nightly builds, enabling daily issue detection versus monthly. Established consistent 2-week release cycles with hotfixes.</li>
              <li>Grew engineering capacity by hiring 6 engineers (100+ interviews) and leading up to 22 engineers across 4 teams (platform, high-level teleoperation, low-level teleoperation, simulation).</li>
              <li>Technologies used: Python, C++, Ansible, Docker, AWS, Azure, CI/CD, ROS2, MuJoCo, Blender</li>
            </ul>
          </div>

          <div class="mb-8">
            <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
              <div>
                <h3 class="text-xl font-semibold">Sanctuary AI</h3>
                <p class="text-lg font-medium text-muted-foreground">Software Engineer</p>
              </div>
              <span class="text-sm text-muted-foreground">August 2019 – December 2022</span>
            </div>
            <ul class="list-disc list-inside space-y-2 ml-4">
              <li>Led QA and demo preparation, helping secure a $58.5M Series A.</li>
              <li>Built core perception features into the first cognitive platform, integrating speech-to-text, face recognition, and a knowledge base.</li>
              <li>Built a UI to map robot capabilities to human occupations, informing the company roadmap.</li>
              <li>Technologies used: Python, ROS2, PostgreSQL, React</li>
            </ul>
          </div>
        </section>

        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-6 pb-2 border-b">Education</h2>
          <div>
            <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
              <div>
                <h3 class="text-xl font-semibold">BASc Integrated Engineering</h3>
                <p class="text-lg text-muted-foreground">University of British Columbia</p>
              </div>
              <span class="text-sm text-muted-foreground">Graduated May 2019</span>
            </div>
            <ul class="list-disc list-inside space-y-2 ml-4 mt-2">
              <li>Supermileage Team (Electrical Lead): Built a prototype battery-electric car.</li>
              <li>Medispenser (RESNA Top 8): Developed the scheduling and embedded software for a medication dispenser to increase adherence.</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
