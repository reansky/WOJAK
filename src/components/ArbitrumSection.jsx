import { ArrowUpRight, Orbit, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { config } from "../config";
import { ActionLink, Reveal, SectionEyebrow } from "./ui";

export default function ArbitrumSection() {
  return (
    <section className="arbitrum-section section-pad">
      <div className="page-width">
        <Reveal className="arbitrum-panel">
          <div className="arbitrum-panel-grid" />
          <div className="arbitrum-copy">
            <SectionEyebrow number="03">THE SPEED LAYER</SectionEyebrow>
            <h2>THE FEELING<br /><span>FOUND SPEED.</span></h2>
            <p>Built for quick moves.<br />Hosted on Arbitrum.</p>
            <div className="arbitrum-disclaimer">
              <ShieldCheck size={15} />
              <span>Independent community project. Not affiliated with Arbitrum.</span>
            </div>
            <ActionLink href={config.arbitrumUrl} variant="light">
              STEP INTO ARBITRUM
            </ActionLink>
          </div>

          <div className="arbitrum-visual" aria-hidden="true">
            <motion.div
              className="arbitrum-orbit orbit-large"
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="arbitrum-orbit orbit-small"
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />
            <div className="arbitrum-core">
              <img src="/logo.png" alt="" />
            </div>
            <div className="arbitrum-plus">+</div>
            <div className="arbitrum-wordmark">
              <span className="arbitrum-icon"><Orbit size={23} /></span>
              <span>ARBITRUM</span>
            </div>
            <span className="visual-index">CHAIN / 42161 <ArrowUpRight size={14} /></span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
