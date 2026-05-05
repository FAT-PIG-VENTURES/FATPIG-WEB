import Hero from '@/components/sections/Hero';
import ServicesGrid from '@/components/sections/ServicesGrid';
import ValueProposition from '@/components/sections/ValueProposition';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import PreFooterCTA from '@/components/sections/PreFooterCTA';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesGrid />
        <ValueProposition />
        <ProcessTimeline />
        <PreFooterCTA />
      </main>
      <Footer />
    </>
  );
}
