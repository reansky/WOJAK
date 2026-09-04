import { ExternalLink } from "lucide-react";
import { config } from "../config";
import { ActionLink, Reveal, SectionEyebrow } from "./ui";

const rows = [
  ["TOKEN", config.tokenName],
  ["NETWORK", config.network],
  ["CONTRACT", config.contractDisplay],
  ["TAX", config.tax],
];

export default function TokenSection() {
  return (
    <section id="token" className="token-section section-pad">
      <div className="page-width">
        <Reveal className="token-card">
          <div className="token-card-top">
            <div>
              <SectionEyebrow number="06">THE DETAILS / WITHOUT THE DRAMA</SectionEyebrow>
              <h2>THE WOJAK<br /><span>FIELD GUIDE</span></h2>
            </div>
            <div className="token-card-signal"><i /> ARBITRUM / LIVE</div>
          </div>

          <div className="token-specs">
            {rows.map(([label, value]) => (
              <div className="token-spec-row" key={label}>
                <span className="field-label">{label}</span>
                <span className={label === "CONTRACT" ? "token-spec-value token-spec-value--address" : "token-spec-value"}>
                  {value}
                </span>
                {label === "CONTRACT" ? (
                  <a className="token-copy" href={config.contractUrl} target="_blank" rel="noreferrer">
                    <ExternalLink size={16} />
                    <span>ARBISCAN</span>
                  </a>
                ) : null}
              </div>
            ))}
          </div>

          <div className="token-card-actions">
            <ActionLink href={config.buyUrl}>BUY $WOJAK</ActionLink>
            <ActionLink href={config.chartUrl} variant="ghost">VIEW CHART</ActionLink>
            <ActionLink href={config.contractUrl} variant="ghost">OPEN ARBISCAN</ActionLink>
          </div>
          <div className="token-card-bottom">
            <span>NO MARKET THEATRE. JUST THE DETAILS.</span>
            <ExternalLink size={15} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
