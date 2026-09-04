import { motion } from "framer-motion";
import { ArrowDownRight, CornerDownRight } from "lucide-react";
import { Reveal, SectionEyebrow } from "./ui";

export default function About() {
  return (
    <section id="about" className="about-section section-pad">
      <div className="page-width about-grid">
        <Reveal className="about-copy">
          <SectionEyebrow number="02">A CHARACTER WITH RANGE</SectionEyebrow>
          <h2>
            SAME FACE.
            <span>NEW TERRITORY.</span>
          </h2>
          <p className="about-intro">
            Wojak has been the internet&apos;s most honest reaction for years. One face,
            every feeling, no explanation required. $WOJAK takes that language somewhere faster.
          </p>
          <p className="about-note">
            No roadmap cosplay. No corporate voice. Just a recognizable face, a quick chain,
            and a community that knows why it still hits.
          </p>
          <div className="about-signoff">
            <CornerDownRight size={18} />
            <span>KEEP THE FEELING. MOVE FASTER.</span>
          </div>
        </Reveal>

        <Reveal className="about-art" delay={0.12}>
          <motion.div
            className="about-art-card"
            whileHover={{ rotate: -1, y: -6 }}
            transition={{ duration: 0.35 }}
          >
            <img src="/hero.png" alt="Wojak portrait in a blue field" />
            <div className="about-art-overlay" />
            <span className="about-art-label">A VERY ONLINE CHARACTER</span>
            <span className="about-art-mark">WJ / 01</span>
          </motion.div>
          <div className="about-art-caption">
            <span>THE ORIGINAL REACTION / STILL ONLINE</span>
            <ArrowDownRight size={18} />
          </div>
          <div className="about-sticker">STAY<br />WOJAK</div>
        </Reveal>
      </div>
    </section>
  );
}
