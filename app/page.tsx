import Hero from '@/components/landing/main/Hero';
import Projects from '@/components/landing/main/Features';
import Developers from '@/components/landing/main/Developers';
import About from '@/components/landing/main/About';

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-10">
        <Hero />
        <About />
        <Projects />
        <Developers />
      </div>
    </main>
  );
}
