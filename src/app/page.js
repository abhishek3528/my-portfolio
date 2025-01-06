import HeroBanner from "./components/HeroBanner";
import NavigateBar from "./components/NavigateBar";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import { Contact } from "./components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col
     
      "> 
      <div className="fixed inset-0 z-[-1]">
        <div 
          className="absolute inset-0 bg-[url('/images/bgnew.jpg')] 
          bg-cover bg-center bg-no-repeat
          md:bg-fixed
          before:content-[''] before:absolute before:inset-0 before:bg-black/30 
          motion-safe:transition-[background-position]
          duration-300
          sm:bg-scroll
         "
          
        />
      </div>
      <NavigateBar />
      <div className="container mt-24 mx-auto px-12 py-4">
        
        <HeroBanner />
        <AboutSection />
        <Skills />
        <Experience/>
        <Projects/>
        <Certifications/>
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
