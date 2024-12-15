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
     bg-[#121212]
      bg-[url('/images/bg4.png')] sm:bg-cover bg-contain bg-no-repeat bg-center bg-fixed
      ">
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
