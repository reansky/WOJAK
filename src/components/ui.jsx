import { ArrowUpRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export function BrandMark({ compact = false }) {
  return (
    <a href="#home" className={`brand-mark ${compact ? "brand-mark--compact" : ""}`}>
      <span className="brand-avatar">
        <img src="/logo.png" alt="$WOJAK logo" />
      </span>
      {!compact ? (
        <span className="brand-copy">
          <strong>$WOJAK</strong>
          <small>ARBITRUM</small>
        </span>
      ) : null}
    </a>
  );
}

export function ActionLink({ children, href = "#", variant = "blue", icon = true, ...props }) {
  const external = /^https?:\/\//.test(href);

  return (
    <a
      className={`action-link action-link--${variant}`}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      {...props}
    >
      <span>{children}</span>
      {icon ? <ArrowUpRight size={16} strokeWidth={2.2} /> : null}
    </a>
  );
}

export function SectionEyebrow({ children, number }) {
  return (
    <div className="section-eyebrow">
      {number ? <span className="section-number">{number}</span> : null}
      <span>{children}</span>
    </div>
  );
}

export function Reveal({ children, className = "", delay = 0, ...props }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function ExternalLabel({ children }) {
  return (
    <span className="external-label">
      {children}
      <ExternalLink size={12} />
    </span>
  );
}
