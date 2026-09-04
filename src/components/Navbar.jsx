import { Menu, X } from "lucide-react";
import { config } from "../config";
import { ActionLink, BrandMark } from "./ui";

const links = [
  ["HOME", "#home"],
  ["ABOUT", "#about"],
  ["MEMES", "#memes"],
  ["CHART", "#chart"],
  ["TOKEN", "#token"],
  ["COMMUNITY", "#community"],
];

export default function Navbar({ scrolled, menuOpen, onMenuToggle, onNavigate }) {
  const handleNavigate = (event, href) => {
    if (href.startsWith("#")) {
      event.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    onNavigate();
  };

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="nav-inner page-width">
        <BrandMark />

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={(event) => handleNavigate(event, href)}>
              {label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <ActionLink href={config.buyUrl} variant="small">
            BUY $WOJAK
          </ActionLink>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={onMenuToggle}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      <div id="mobile-navigation" className={`mobile-nav ${menuOpen ? "mobile-nav--open" : ""}`}>
        <div className="mobile-nav-inner">
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={(event) => handleNavigate(event, href)}>
              <span>{label}</span>
              <span>0{links.findIndex((link) => link[0] === label) + 1}</span>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
