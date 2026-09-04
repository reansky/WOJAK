import { ArrowUpRight } from "lucide-react";
import { config } from "../config";
import { BrandMark } from "./ui";

const footerLinks = [
  ["HOME", "#home"],
  ["ABOUT", "#about"],
  ["MEMES", "#memes"],
  ["TOKEN", "#token"],
  ["X", config.xUrl],
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="page-width">
        <div className="footer-main">
          <div className="footer-brand">
            <BrandMark />
            <p>INTERNET FOLKLORE<br />ON ARBITRUM</p>
          </div>
          <nav className="footer-links" aria-label="Footer navigation">
            {footerLinks.map(([label, href]) => (
              <a key={label} href={href}>{label}<ArrowUpRight size={12} /></a>
            ))}
          </nav>
        </div>
        <div className="footer-bottom">
          <span>$WOJAK IS A MEME/COMMUNITY PROJECT. NOTHING HERE IS FINANCIAL ADVICE.</span>
          <span>© {new Date().getFullYear()} WOJAK</span>
        </div>
      </div>
    </footer>
  );
}
