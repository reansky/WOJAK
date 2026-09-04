import { Activity, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, SectionEyebrow } from "./ui";

export default function ChartSection() {
  return (
    <section id="chart" className="chart-section section-pad">
      <div className="page-width">
        <Reveal className="chart-panel">
          <div className="chart-copy">
            <SectionEyebrow number="05">THE MARKET VIEW</SectionEyebrow>
            <h2>THE CHART<br /><span>COMES NEXT.</span></h2>
            <p>
              The token is not live yet, so we are leaving the numbers honest.
              Once the contract is deployed, this window becomes the home for the live GeckoTerminal view.
            </p>
            <div className="chart-status">
              <i><Activity size={13} /></i>
              <span>GECKOTERMINAL LINK / PENDING TOKEN LAUNCH</span>
            </div>
          </div>

          <motion.div
            className="chart-placeholder"
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.35 }}
            aria-label="Chart placeholder waiting for the deployed token link"
          >
            <div className="chart-grid-lines" />
            <motion.div
              className="chart-line"
              animate={{ backgroundPositionX: ["0px", "72px"] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
            />
            <div className="chart-axis chart-axis--top"><span>LIVE DATA</span><span>AWAITING CONTRACT</span></div>
            <div className="chart-axis chart-axis--bottom"><span>GECKOTERMINAL</span><ArrowUpRight size={15} /></div>
            <div className="chart-center-mark">WJ / 05</div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
