import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import About from '@/components/About';
import Location from '@/components/Location';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Menu />
      <About />
      <Location />
      <Contact />
      <Footer />
    </main>
  );
}
