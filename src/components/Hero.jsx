import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MoveUpRight, Sparkles } from "lucide-react";
import { config } from "../config";
import { ActionLink, SectionEyebrow } from "./ui";

export default function Hero() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPointer({
      x: (event.clientX - rect.left) / rect.width - 0.5,
      y: (event.clientY - rect.top) / rect.height - 0.5,
    });
  };

  return (
    <section id="home" className="hero-section" onPointerMove={handlePointerMove}>
      <div className="hero-grid page-width">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
          >
            <SectionEyebrow number="01">INTERNET FOLKLORE / ARBITRUM</SectionEyebrow>
          </motion.div>

          <motion.div
            className="hero-heading-wrap"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="hero-token-name">$WOJAK</p>
            <p className="hero-kicker">A MEME WITH MILEAGE</p>
            <h1>
              <span>SAME FACE.</span><br /> NEW CHAIN.
            </h1>
            <p className="hero-lede">
              The internet&apos;s most honest reaction.<br />
              Now moving at Arbitrum speed.<br />
              Still allergic to taking itself seriously.
            </p>
          </motion.div>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
          >
            <ActionLink href={config.buyUrl}>ENTER THE LIQUIDITY</ActionLink>
            <ActionLink href={config.chartUrl} variant="ghost">
              READ THE CHART
            </ActionLink>
          </motion.div>

          <motion.div
            className="hero-footnote"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            <span className="live-dot" />
            <span>THE CHAIN IS LIVE</span>
            <span className="hero-footnote-line" />
            <span className="mono-text">MEME ENERGY / ON-CHAIN</span>
          </motion.div>

          <motion.div
            className="hero-rail"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.68 }}
          >
            <span><b>01</b> MEME NATIVE</span>
            <span><b>02</b> FAST MOVING</span>
            <span><b>03</b> COMMUNITY LED</span>
          </motion.div>
        </div>

        <motion.div
          className="hero-art-wrap"
          initial={{ opacity: 0, scale: 0.93, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          style={{
            transform: `translate3d(${pointer.x * 9}px, ${pointer.y * 9}px, 0)`,
          }}
        >
          <div className="hero-art-glow" />
          <div className="hero-art-card">
            <div className="hero-art-topline">
              <span>WOJAK / FLIGHT 01</span>
              <span>ARBITRUM</span>
            </div>
            <div className="hero-video-frame">
              <video
                autoPlay
                loop
                muted
                playsInline
                poster="/hero.png"
                src="/wojak-flight.mp4"
              />
              <div className="hero-video-shade" />
              <span className="hero-video-corner">REC <i /></span>
              <span className="hero-scanline" />
            </div>
            <div className="hero-art-bottomline">
              <span className="hero-art-index">WJ — 001</span>
              <span className="hero-art-caption">THE FACE IS ON-CHAIN</span>
              <MoveUpRight size={18} />
            </div>
          </div>
          <motion.div
            className="hero-float-card hero-float-card--top"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles size={14} />
            <span>STATUS</span>
            <strong>MEME / ONLINE</strong>
          </motion.div>
          <motion.div
            className="hero-float-card hero-float-card--bottom"
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          >
            <span>CHAIN / 42161</span>
            <strong>ARBITRUM</strong>
          </motion.div>
          <motion.div
            className="hero-stamp"
            animate={{ rotate: [8, 12, 8], y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span>W</span>
            <small>EST. MEME ERA</small>
          </motion.div>
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
        </motion.div>
      </div>

      <div className="hero-scroll-hint">
        <ArrowRight size={15} />
        <span>SCROLL INTO THE FEELING</span>
      </div>
      <div className="hero-index">00 <span>/ 07</span></div>
    </section>
  );
}
