import Hero from '@/components/landing/main/Hero';
import Features from '@/components/landing/main/Features';
import Developers from '@/components/landing/main/Developers';
import About from '@/components/landing/main/About';
import FAQ from '@/components/landing/main/FAQ';

export default function Home() {
  return (
    <main className="h-full w-full overflow-x-hidden serif">
      <div className="flex flex-col gap-10">
        <Hero />
        <About />
        <Features />
        <Developers />
        <FAQ />
      </div>
    </main>
  );
}
