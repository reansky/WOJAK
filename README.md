# $WOJAK / Arbitrum

Premium React + Vite landing page for a Wojak meme/community project on Arbitrum.

## Run locally

```bash
npm install
npm run dev
```

For GitHub/Vercel, upload the project contents from this folder. Vercel will detect Vite automatically.

## Configure

Edit `src/config.js` to add the final contract address and replace any public project links as needed.
When the token is deployed, replace `chartUrl: "#chart"` with the final GeckoTerminal URL.
Meme assets are listed in the `memes` array in the same file and live in `public/memes/`.
The standalone `preview.html` can be opened without the asset folder.
