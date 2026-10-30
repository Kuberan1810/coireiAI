# Card Wave Reveal & Zoom Animation

This standalone package contains the exact card animation from the Guillaume Zhu portfolio:
1. **Liquid Cream Wave Fill**: An organic, noise-driven wave shader that rises and fills the card on scroll.
2. **Fullscreen Expansion**: The card dynamically scales up to completely cover the screen with the cream/white background.

---

## 📁 Folder Structure

```
card-zoom-animation/
├── index.html                  # Standalone HTML demo (open with Live Server / browser)
├── TransitionCardZoom.jsx      # Reusable React component
├── TransitionCardZoom.css      # Component stylesheet
├── assets/                     # Fonts (CabinetGrotesk)
│   └── CabinetGrotesk-*.woff2
└── home/toolkit/art-direction/en/
    └── transition.png          # Card background graphic
```

---

## 🚀 How to Run

### 1. View in Browser Immediately
Open `index.html` in VS Code with **Live Server**, or run any static server:
```bash
npx serve .
```
Then visit `http://localhost:3000/index.html` (or your Live Server port) and scroll down.

### 2. Use in a React App (Vite, Next.js, Create-React-App)
1. Install dependencies:
   ```bash
   npm install gsap three
   ```
2. Copy `TransitionCardZoom.jsx`, `TransitionCardZoom.css`, `assets/`, and the image into your project.
3. Import and use the component:
   ```jsx
   import TransitionCardZoom from "./TransitionCardZoom";

   export default function App() {
     return <TransitionCardZoom />;
   }
   ```

