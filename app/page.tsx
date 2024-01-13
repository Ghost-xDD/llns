import Hero from '@/components/landing/main/Hero';
import Projects from '@/components/landing/main/Features';
import Developers from '@/components/landing/main/Developers';

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-10">
        <Hero />
        <Projects />
        <Developers />
      </div>
    </main>
  );
}
