'use client';

import About from "@/components/about";
import Contact from "@/components/contact";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Earth from "@/components/earth";
import Projectss from "@/components/projectss"

export default function ClientSideContent() {
  return (
    <div>
      <main style={{ height: '60vw', backgroundColor: '#0f0f0f', marginTop: '-20vh', marginBottom: '10vh', position: 'relative', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
        <Earth />
        <Projectss />
      </main>
      <main className="flex flex-col items-center px-4">
        <Intro />
        <SectionDivider />
        <About />
        <Projects />
        <Skills /> 
        <Contact />
      </main>
    </div>
  );
}