import { MoveUpRight } from "lucide-react";
import { config } from "../config";
import { ActionLink, Reveal } from "./ui";

export default function CTA() {
  return (
    <section className="cta-section section-pad">
      <div className="page-width">
        <Reveal className="cta-panel">
          <video className="cta-video" autoPlay loop muted playsInline poster="/hero.png" src="/wojak-flight.mp4" />
          <div className="cta-shade" />
          <div className="cta-content">
            <span className="cta-label">YOUR NEXT TAB IS CALLING</span>
            <h2>FEELING<br /><span>WOJAK?</span></h2>
            <p>Take the scenic route. Start on Arbitrum.</p>
            <div className="cta-actions">
              <ActionLink href={config.buyUrl} variant="light">BUY $WOJAK</ActionLink>
              <ActionLink href={config.chartUrl} variant="outline-light">VIEW CHART</ActionLink>
              <ActionLink href={config.contractUrl} variant="outline-light">OPEN ARBISCAN</ActionLink>
            </div>
          </div>
          <div className="cta-corner"><MoveUpRight size={20} /><span>WJ / NEXT</span></div>
        </Reveal>
      </div>
    </section>
  );
}
