import { useEffect } from "react";
import { motion } from "framer-motion";
import { Expand, MousePointer2 } from "lucide-react";
import { memes } from "../config";
import { Reveal, SectionEyebrow } from "./ui";

const tileClasses = ["meme-tile--lead", "meme-tile--tall", "meme-tile--wide", "meme-tile--small"];

export default function MemeVault({ onOpen }) {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        document.querySelector(".lightbox-close")?.click();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <section id="memes" className="meme-section section-pad">
      <div className="page-width">
        <Reveal className="meme-heading-row">
          <div>
            <SectionEyebrow number="04">THE CULTURE FILES</SectionEyebrow>
            <h2>THE WOJAK<br /><span>FIELD NOTES</span></h2>
          </div>
          <div className="meme-heading-aside">
            <p>Nine frames from the timeline.<br />One face for every feeling.<br />Open the archive.</p>
            <span><MousePointer2 size={14} /> OPEN A FRAME</span>
          </div>
        </Reveal>

        <div className="meme-grid">
          {memes.map((path, index) => (
            <Reveal key={path} className={`meme-tile ${tileClasses[index % tileClasses.length]}`} delay={index * 0.06}>
              <motion.button
                type="button"
                onClick={() => onOpen(path)}
                whileHover={{ y: -7 }}
                transition={{ duration: 0.28 }}
                aria-label={`Open Wojak meme ${index + 1}`}
              >
                <img src={path} alt={`$WOJAK meme ${index + 1}`} loading="lazy" />
                <span className="meme-tile-shade" />
                <span className="meme-tile-label">$WOJAK / {String(index + 1).padStart(2, "0")}</span>
                <span className="meme-tile-expand"><Expand size={17} /></span>
              </motion.button>
            </Reveal>
          ))}
        </div>
        <div className="meme-footer-line">
          <span>THE ARCHIVE IS OPEN</span>
          <span className="mono-text">CLICK A FRAME / STAY A WHILE</span>
        </div>
      </div>
    </section>
  );
}
