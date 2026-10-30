# Manifesto Section Animation ("Understand Every Lead Before You Reach Out.")

This folder contains the complete, extracted horizontal scroll and letter-physics animation from the Manifesto section of Guillaume Zhu's portfolio.

---

## 📁 Files Included

```
manifesto-animation/
├── index.html         # Complete standalone demo with React + GSAP
├── Manifesto.jsx      # Reusable React component
├── Manifesto.css      # CSS styling and font face definitions
└── assets/            # CabinetGrotesk variable fonts
    └── CabinetGrotesk-*.woff2
```

---

## ⚡ How the Animation Works

1. **Pinned Viewport**: When the section reaches the top, GSAP pins the container in place.
2. **Horizontal Scrub**: As you scroll down vertically, the massive headline (`font-size: 12vw`) smoothly scrolls horizontally across the viewport.
3. **Container Animation with Letter Physics**:
   - Each individual letter is detected as it enters the right edge of the screen (`containerAnimation: scrollTween`).
   - Letters pop into place with randomized vertical offsets (`yPercent`) and rotational tilts (`rotation`) combined with an elastic bounce (`elastic.out(1.2, 1)`).

---

## 🚀 How to Run

### Live Server:
Open `http://127.0.0.1:5500/manifesto-animation/index.html` in your browser.

### In your React App:
```bash
npm install gsap
```
```jsx
import Manifesto from "./Manifesto";

export default function App() {
  return <Manifesto />;
}
```

