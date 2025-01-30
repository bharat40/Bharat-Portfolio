import Header from "./pages/Header";
import HeroSection from "./pages/HeroSection";
import AboutSection from "./pages/AboutSection";
import ProjectSection from "./pages/ProjectSection";
import ContactSection from "./pages/ContactSection";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <section className="font-custom">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
      <ScrollToTop />
    </section>
  );
}

export default App;
