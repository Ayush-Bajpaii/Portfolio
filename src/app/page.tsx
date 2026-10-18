import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingCta } from "@/components/FloatingCta";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Website } from "@/components/sections/Website";
import { Skills } from "@/components/sections/Skills";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" className="flex-1">
        <Hero />
        <Experience />
        <Projects />
        <Website />
        <Testimonials />
        <Skills />
        <About />
      </main>
      <Footer />
      <FloatingCta />
    </>
  );
}
