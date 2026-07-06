# Case Studies — Ayush Singh

Two cinematic React case study pages for your GitHub Pages portfolio.

## Live URLs (after deploy)
- `destroyermoh.github.io/case-studies/` — home listing
- `destroyermoh.github.io/case-studies/dying-interface` — The Dying Interface
- `destroyermoh.github.io/case-studies/anatomy-vr` — 3D Anatomy VR Platform

## Stack
React 19 + Vite · React Router v7 · GSAP + ScrollTrigger · Inter · gh-pages

---

## Deploy — step by step

### 1. Install dependencies
```bash
npm install
```

### 2. Push to your GitHub repo

If adding to existing destroyermoh.github.io repo:
```bash
git add .
git commit -m "add: case studies — dying interface + anatomy vr"
git push
```

Or init fresh:
```bash
git init
git add .
git commit -m "init: case studies"
git remote add origin https://github.com/destroyermoh/destroyermoh.github.io.git
git push -u origin main
```

### 3. Deploy to GitHub Pages
```bash
npm run deploy
```
This builds the project and pushes /dist to the gh-pages branch automatically.

### 4. Enable GitHub Pages in repo settings
- Settings → Pages → Source: gh-pages branch → /root → Save
- Live in ~2 minutes at: destroyermoh.github.io/case-studies

---

## Local dev
```bash
npm run dev
# http://localhost:5173/case-studies/
```

---

## Add Figma prototype embeds
In DyingInterface.jsx or AnatomyVR.jsx, drop this in anywhere:
```jsx
<iframe
  style={{ border:'none', borderRadius:12, width:'100%', height:500 }}
  src="https://www.figma.com/embed?embed_host=share&url=YOUR_FIGMA_URL"
  allowFullScreen
/>
```
