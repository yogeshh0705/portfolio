import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Research from '@/components/Research';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Leadership from '@/components/Leadership';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Research />
      <Projects />
      <Skills />
      <Leadership />
      <Contact />
    </>
  );
}
