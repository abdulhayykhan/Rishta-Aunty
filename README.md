# 🧕 Rishta Aunty — GitHub Matrimonial Biodata Roast

> **"Beta has 47 repos, 46 abandoned. Ghar ka kaam nahi karta, only README."**  
> Built for **GDG Live Pakistan — Chai aur Code Ep#2**  
> **Theme:** *Make Internet Fun*

---

## 🌟 Concept & Pitch

In Pakistani and South Asian culture, nothing strikes fear or excitement like **Rishta Aunty** inspecting every detail of your life. 

**"Rishta Aunty"** turns any developer's GitHub profile into a traditional, ornate **Desi Matrimonial Biodata Roast**:
- Pulls public stats (repos, stars, top languages, commit activity, followers).
- Evaluates your domestic compatibility: *Do you push to main without testing? Are you hoarder of abandoned projects? Do you wake up at 3 PM and commit at 4 AM?*
- Slaps an authentic **Rubber Stamp** (*RISHTA KHARIJ ❌*, *RISHTA PAKKA! 💍*, or *LADKI WALAY SOCHENGAY ⚠️*).
- Outputs a shareable, high-resolution **Biodata Card (PNG)** formatted for WhatsApp family groups, X (Twitter), and LinkedIn.

---

## 🎯 Why This Makes the Internet Fun

1. **Real-time Public Data:** No artificial mockups or seed profiles. Anyone can enter their GitHub username and get an instant roast.
2. **Culturally Resonant Satire:** Frames technical developer flaws (npm fatigue, tutorial hell, Git conflicts) through beloved Desi matchmaking tropes (*"Sharma ji ka beta tier"*, *"Dahej mein open source maang rahe hain"*).
3. **Affectionate & Halal:** 100% focused on coding habits. No jokes about religion, sects, family background, or personal appearance.
4. **Bulletproof Resilience:** Built with a **Dual-Tier Roast Engine**. If the LLM experiences latency, rate-limiting, or is offline, the app automatically and instantaneously falls back to our deterministic rule-based roast matrix in <100ms.

---

## 🛠️ Tech Stack & Architecture

```
[User types GitHub username]
             │
             ▼
[GitHub Public REST API (Client-side)]
  - User profile, repo list, stars, languages, fork ratio
             │
             ▼
[Roast Engine Router]
       ├──► Tier 1: GroqCloud API (/api/roast) [4s timeout]
       └──► Tier 2: Instant Deterministic Fallback Matrix (fallbacks.py)
             │
             ▼
[Dynamic Neo-Glass Biodata Card]
  - Neobrutalism 3.5px borders & hard offset shadows
  - Frosted glassmorphism with ambient background mesh
  - Dynamic rubber stamp with slam animation
  - 1-Click PNG Download via html2canvas
  - Pre-filled WhatsApp & Twitter / X share intents
```

- **Frontend:** Pure Vanilla HTML5, CSS3, and Vanilla JS (Zero JS frameworks, zero build steps, 100% lightweight).
- **Backend / AI:** Python (`Flask`, `requests`, `python-dotenv`) powered by GroqCloud LPU (`llama-3.3-70b-versatile`).
- **Resilience Engine:** `fallbacks.py` & `fallbacks.js` (Dual-tier deterministic metric-matching rule engine).
- **Export:** High-resolution PNG biodata card generation.

---

## 💻 Running Locally (Python)

```bash
# 1. Clone the repository
git clone https://github.com/your-username/rishta-aunty.git
cd rishta-aunty

# 2. Setup Python virtual environment
python -m venv .venv
# On Windows:
.venv\Scripts\activate
# On macOS/Linux:
source .venv/bin/activate

# 3. Install dependencies
pip install -r requirements.txt

# 4. Run the Python app
python app.py
```

Visit **`http://localhost:5000`** in your browser. (The local Python fallback engine works 100% reliably even without Groq API keys!).

### Adding Groq API Key (Optional for AI-generated dynamic roasts):
1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Get a free API key from [GroqCloud Console](https://console.groq.com/).
3. Add `GROQ_API_KEY=gsk_your_key_here` to `.env`.

---

## 🚢 Deploying to Vercel

The app includes `api/index.py` and `vercel.json` configured for Vercel's Python Serverless runtime:

```bash
vercel
```

Add `GROQ_API_KEY` under **Project Settings > Environment Variables** on your Vercel Dashboard.

---

## 📜 License

MIT License • Built for GDG Live Pakistan Chai aur Code ☕
