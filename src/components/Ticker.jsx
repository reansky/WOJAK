import { motion } from "framer-motion";

const tickerItems = ["$WOJAK", "ARBITRUM", "MEMES", "WOJAK", "COMMUNITY", "NO FUD"];

export default function Ticker() {
  const items = [...tickerItems, ...tickerItems];
  return (
    <div className="ticker" aria-label="Wojak ticker">
      <motion.div
        className="ticker-track"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {items.map((item, index) => (
          <span className="ticker-item" key={`${item}-${index}`}>
            {item}
            <i />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
