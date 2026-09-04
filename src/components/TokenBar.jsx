import { ExternalLink } from "lucide-react";
import { config } from "../config";

export default function TokenBar() {
  return (
    <section className="token-bar-section" aria-label="Token quick info">
      <div className="token-bar page-width">
        <div className="token-bar-brand">
          <span className="token-bar-mark">$</span>
          <div>
            <strong>{config.tokenName}</strong>
            <small>{config.network}</small>
          </div>
        </div>

        <div className="token-bar-ca">
          <span className="field-label">CA</span>
          <span className="token-address">{config.contractDisplay}</span>
        </div>

        <div className="token-bar-tax">
          <span className="field-label">TAX</span>
          <strong>{config.tax}</strong>
        </div>

        <div className="token-bar-actions">
          <a className="bar-button" href={config.contractUrl} target="_blank" rel="noreferrer">
            ARBISCAN <ExternalLink size={13} />
          </a>
          <a className="bar-button bar-button--primary" href={config.buyUrl} target="_blank" rel="noreferrer">
            BUY <ExternalLink size={13} />
          </a>
          <a
            className="bar-button"
            href={config.chartUrl}
            target={config.chartUrl.startsWith("http") ? "_blank" : undefined}
            rel={config.chartUrl.startsWith("http") ? "noreferrer" : undefined}
          >
            CHART <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
