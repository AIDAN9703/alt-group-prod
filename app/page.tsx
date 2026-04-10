import Loader from "./components/Loader";
import Hero from "./components/Hero";
import About from "./components/About";
import VideoSection from "./components/VideoSection";
import Portfolio from "./components/Portfolio";
import AiModelSection from "./components/AiModelSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col selection:bg-[var(--foreground)] selection:text-[var(--background)]">
      <Loader />
      <Hero />
      <About />
      <VideoSection />
      <Portfolio />
      <AiModelSection />
      <Contact />
      <Footer />
    </main>
  );
}
