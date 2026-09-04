import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TokenBar from "./components/TokenBar";
import Ticker from "./components/Ticker";
import About from "./components/About";
import ArbitrumSection from "./components/ArbitrumSection";
import MemeVault from "./components/MemeVault";
import ChartSection from "./components/ChartSection";
import TokenSection from "./components/TokenSection";
import CTA from "./components/CTA";
import Community from "./components/Community";
import Footer from "./components/Footer";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMeme, setActiveMeme] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("modal-open", Boolean(activeMeme));
    return () => document.body.classList.remove("modal-open");
  }, [activeMeme]);

  return (
    <div className="site-shell">
      <Navbar
        scrolled={scrolled}
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen((open) => !open)}
        onNavigate={() => setMenuOpen(false)}
      />
      <main>
        <Hero />
        <TokenBar />
        <Ticker />
        <About />
        <ArbitrumSection />
        <MemeVault onOpen={setActiveMeme} />
        <ChartSection />
        <TokenSection />
        <CTA />
        <Community />
      </main>
      <Footer />
      <AnimatePresence>
        {activeMeme ? (
          <div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Expanded Wojak meme"
            onClick={() => setActiveMeme(null)}
          >
            <button
              className="lightbox-close"
              type="button"
              aria-label="Close meme viewer"
              onClick={() => setActiveMeme(null)}
            >
              <span />
              <span />
            </button>
            <img
              src={activeMeme}
              alt="$WOJAK meme expanded"
              onClick={(event) => event.stopPropagation()}
            />
          </div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
