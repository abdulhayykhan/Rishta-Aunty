# 🎨 Rishta Aunty — Neo-Glassmorphism UI Design System

This design system document describes the visual language, design principles, design tokens, micro-interactions, and canvas rendering optimizations that define **Rishta Aunty**.

---

## 1. Design Philosophy: The Neo-Glassmorphism Fusion

Rishta Aunty fuses two distinct modern aesthetics to create an unmistakable, tactile, and highly memorable interface tailored for high-energy tech hackathons:

```
+------------------------------------+       +------------------------------------+
|           NEOBRUTALISM             |   +   |           GLASSMORPHISM            |
| - 3.5px solid black borders        |       | - Ambient glowing gradient mesh    |
| - Hard, offset drop shadows        |       | - Specular border highlights       |
| - Punchy, saturated color pops     |       | - Translucent depth layering       |
| - Bold monospace badges & stickers |       | - Frosted glass refraction blurs   |
+------------------------------------+       +------------------------------------+
                                      ||
                                      \/
                     +----------------------------------+
                     |        NEO-GLASSMORPHISM         |
                     | The ultimate tactile playground  |
                     +----------------------------------+
```

1. **Neobrutalist Foundations:** Chunky 3.5px pure black (`#000000`) borders, hard geometric drop shadows without Gaussian blur, high-saturation candy accents, and retro software chrome (window header dots, rubber stamps, warning tape marquees).
2. **Glassmorphism Elevation:** A living background ambient mesh of floating, animated radial gradient orbs (hot pink, electric cyan, sunshine yellow, deep purple) providing dynamic specular refractions through frosted glass cards.
3. **Desi Bureau Authenticity:** Cultural matrimonial cues—gold borders, green halal seals, bismillah badges, and official rubber slam stamps.

---

## 2. Color Palette & Design Tokens

All colors are codified as CSS custom properties in [`style.css`](file:///c:/Users/USER/OneDrive%20-%20Dawood%20University%20of%20Engineering%20Technology/Desktop/Rishta-Aunty/style.css):

### 2.1. Primary Neobrutalist Swatches
| Token | Hex / Value | Role & Usage |
| :--- | :--- | :--- |
| `--neo-black` | `#000000` | Ink borders, tactile drop shadows, and high-contrast headlines |
| `--neo-yellow` | `#facc15` | Action button fills, retro titlebars, bismillah badges |
| `--neo-yellow-light` | `#fde047` | Dahej public repos asset box, verdict card gradient |
| `--neo-pink` | `#ff2a85` | Red flag tags, confidential stickers, highlight badges |
| `--neo-pink-light` | `#f472b6` | Khandani Izzat (stars) asset box, avatar frame background |
| `--neo-cyan` | `#00e5ff` | Domestic life section tags, active input focus states |
| `--neo-cyan-light` | `#38bdf8` | Milansar (followers) asset box, handle pill badges |
| `--neo-green` | `#10b981` | Halal verified badges, high compatibility progress bars |
| `--neo-green-light` | `#4ade80` | Kamaai Ka Jugaad (tech stack) asset box, download button |
| `--neo-purple` | `#8b5cf6` | Bullet markers (`✦`), live profile demo chip accents |

### 2.2. Elevation & Shadow Tokens
- **Standard Neobrutalist Shadow:** `4px 4px 0px #000000` (`--glass-shadow-sm`)
- **Interactive Hover Shadow:** `7px 7px 0px #000000`
- **Centerpiece Dossier Shadow:** `10px 10px 0px #000000` (`--glass-shadow-lg`)
- **Active Click Depth:** `1px 1px 0px #000000` (Simulates physical key actuation)

---

## 3. Typography & Hierarchy

Rishta Aunty employs two distinct Google Fonts loaded asynchronously with zero layout shift:

1. **`Space Grotesk` (Headings, Buttons, Badges):**
   - Geometric, proportional sans-serif with idiosyncratic letterforms.
   - Used for the primary banner, section headers, rubber stamps, and button labels (`font-weight: 800` and `900`).
2. **`Plus Jakarta Sans` (Body Text, Bullets, Descriptions):**
   - Clean, geometric grotesque optimized for micro-readability on retina mobile screens.
   - Used for habit lists, red flags, and Aunty verdict paragraphs.
3. **`ui-monospace` / System Monospace (Telemetry & Metadata):**
   - Used for username inputs, the permanent `github.com/` prefix, repo statistics, and retro window titlebars (`MATRIMONIAL_BIODATA_v2.0.exe`).

---

## 4. Tactile Micro-Interactions & Physics

1. **Button Hover & Click Actuation:**
   Buttons utilize physical spring translations rather than standard color transitions:
   ```css
   .action-btn:hover {
     transform: translate(-3px, -3px);
     box-shadow: 7px 7px 0px var(--neo-black);
   }
   .action-btn:active {
     transform: translate(2px, 2px);
     box-shadow: 1px 1px 0px var(--neo-black);
   }
   ```
2. **Rubber Stamp Slam Animation (`@keyframes stampSlam`):**
   When a biodata card renders, the official status stamp starts scaled up at $2.8\times$ and rotated at $-25^\circ$, violently slamming down into position with an oversized cubic-bezier bounce curve:
   ```css
   @keyframes stampSlam {
     0% { opacity: 0; transform: scale(2.8) rotate(-25deg); }
     100% { opacity: 1; transform: scale(1) rotate(-10deg); }
   }
   ```
3. **Tea Cup Loading Wobble (`@keyframes wobbleCup`):**
   While waiting for GitHub and AI analysis, a Pakistani chai cup rotates between $-10^\circ$ and $+10^\circ$ with a scale pulse, accompanied by animated candy stripes.

---

## 5. High-Contrast Canvas Export Architecture (`html2canvas`)

### The Problem with Naive Canvas Captures
When capturing an interface styled with glassmorphism, native `html2canvas` captures only the DOM element without the living background gradient or the browser's `backdrop-filter: blur()`. As a result:
- Translucent white layers (`rgba(255, 255, 255, 0.82)`) over a pale beige background make the card look bleached, milky, and washed-out.
- 70% transparent pastel tiles appear virtually colorless in static images.
- Unfinished CSS animations cause stamps to render with `opacity: 0`.

### The Solution: Dedicated High-Contrast Export Mode
Rishta Aunty solves this via `html2canvas`'s `onclone` hook in [`app.js`](file:///c:/Users/USER/OneDrive%20-%20Dawood%20University%20of%20Engineering%20Technology/Desktop/Rishta-Aunty/app.js):

```javascript
const canvas = await html2canvas(biodataCard, {
  scale: 2, // High resolution for mobile/retina
  useCORS: true,
  backgroundColor: '#faf5ed',
  logging: false,
  onclone: (clonedDoc) => {
    const clonedCard = clonedDoc.getElementById('biodata-card');
    if (clonedCard) {
      clonedCard.classList.add('export-mode');
      const stamp = clonedCard.querySelector('#card-stamp');
      if (stamp) {
        stamp.style.opacity = '1';
        stamp.style.animation = 'none';
        stamp.style.transform = 'rotate(-10deg)';
      }
    }
  }
});
```

And in [`style.css`](file:///c:/Users/USER/OneDrive%20-%20Dawood%20University%20of%20Engineering%20Technology/Desktop/Rishta-Aunty/style.css):
- `.card-frame.export-mode` forces `background: #ffffff !important` and `backdrop-filter: none`.
- The 4 candy tiles render with 100% solid saturated colors (`#fde047`, `#f472b6`, `#38bdf8`, `#4ade80`).
- The stamp renders with deep saturated fills (`#fecaca`, `#fde68a`, `#a7f3d0`) and bold colored borders.
- The exported PNG looks punchy, rich, and pristine on WhatsApp, Twitter, and LinkedIn dark modes.
