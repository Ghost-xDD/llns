import Hero from '@/components/landing/main/Hero';
import Projects from '@/components/landing/main/Features';
import Developers from '@/components/landing/main/Developers';
import About from '@/components/landing/main/About';
import FAQ from '@/components/landing/main/FAQ';

export default function Home() {
  return (
    <main className="h-full w-full overflow-x-hidden">
      <div className="flex flex-col gap-10">
        <Hero />
        <About />
        <Projects />
        <Developers />
        <FAQ />
      </div>
    </main>
  );
}
