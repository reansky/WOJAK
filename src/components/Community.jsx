import { ArrowUpRight, Hash } from "lucide-react";
import { motion } from "framer-motion";
import { config } from "../config";
import { Reveal, SectionEyebrow } from "./ui";

export default function Community() {
  return (
    <section id="community" className="community-section section-pad">
      <div className="page-width">
        <Reveal className="community-heading">
          <SectionEyebrow number="07">THE OPEN TAB</SectionEyebrow>
          <h2>WOJAK LIVES<br /><span>ON THE TIMELINE.</span></h2>
        </Reveal>
        <Reveal className="x-card" delay={0.1}>
          <div className="x-card-grid" />
          <div className="x-mark">𝕏</div>
          <div className="x-card-copy">
            <span className="x-card-label">FOLLOW $WOJAK ON X</span>
            <p>One feed. Infinite reactions.<br />Catch the next feeling.</p>
          </div>
          <a className="x-card-link" href={config.xUrl} aria-label="Follow $WOJAK on X">
            <span>OPEN @ARBITRUMWOJAK</span>
            <ArrowUpRight size={20} />
          </a>
          <motion.div className="x-card-hash" animate={{ rotate: [0, 6, 0] }} transition={{ duration: 5, repeat: Infinity }}>
            <Hash size={22} />
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
