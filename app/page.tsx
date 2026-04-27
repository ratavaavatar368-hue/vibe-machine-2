import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';
import { ReelsSlider } from '@/components/sections/ReelsSlider';
import { Formats } from '@/components/sections/Formats';
import { Process } from '@/components/sections/Process';
import { FinalCTA } from '@/components/sections/FinalCTA';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ReelsSlider />
        <Formats />
        <Process />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
