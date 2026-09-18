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

## 🎯 Why This Wins "Make Internet Fun"

1. **Audience IS The Demo:** No artificial seed data. Judges or attendees can type their own GitHub username live on the projector.
2. **Culturally Resonant Satire:** Frames technical developer flaws (npm fatigue, tutorial hell, Git conflicts) through beloved Desi matchmaking tropes (*"Sharma ji ka beta tier"*, *"Dahej mein open source maang rahe hain"*).
3. **Affectionate & Halal:** 100% focused on coding habits. No jokes about religion, sects, family background, or personal appearance.
4. **Stage-Proof Resilience:** Built with a **Dual-Tier Roast Engine**. If the LLM experiences latency or rate-limiting during the live pitch, the app automatically and instantaneously falls back to our deterministic rule-based roast matrix in <100ms. **Zero blank screens. Zero demo fails.**

---

## 🚀 Live Demo Presentation Cheat-Sheet

| Step | Action | Stage Quip / Talk Track |
|------|--------|--------------------------|
| **1. Hook** | Open app on projector | *"Everyone talks about AI agent workflows and enterprise architectures. But today, we tackle Pakistan's real engineering crisis: Can a full-stack developer actually get married?"* |
| **2. Demo 1** | Type a judge's username or `shadcn` / `gaearon` | Point out the loading quote: *"Look, aunty is checking if they clean their room or just write clean code."* |
| **3. The Reveal** | Show the Biodata Card & Stamp | Read out the Matrimonial Title, Gotra (*"Node_Modules Biradari"*), and Aunty's Verdict. |
| **4. Edge Case** | Type an account with 0-1 repos or click Linus | Show how it mocks 0 repos: *"Khali biodata le kar rishta dhoondne nikal pare ho? Pehle ek Hello World toh push kar aao!"* |
| **5. The Closer** | Click "Download Biodata Card" | *"One-click export ready to send to your family WhatsApp group before your mother finds out your commit streak broke."* |

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
       ├──► Tier 1: xAI Grok (/api/roast) [4s timeout]
       └──► Tier 2: Instant Deterministic Fallback Matrix (fallbacks.js)
             │
             ▼
[Dynamic Biodata Card]
  - Ornate golden matrimonial border & corner filigree
  - Dynamic rubber stamp with slam animation
  - 1-Click PNG Download via html2canvas
  - Pre-filled WhatsApp & Twitter / X share intents
```

- **Frontend:** Pure Vanilla HTML5, CSS3, and Vanilla JS (Zero JS frameworks, zero build steps, 100% lightweight).
- **Backend / AI:** Python (`Flask`, `requests`, `python-dotenv`) powered by xAI Grok API (`grok-2-latest`).
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

Visit **`http://localhost:5000`** in your browser. (The local Python fallback engine works 100% reliably even without Grok API keys!).

### Adding Grok API Key (Optional for AI-generated dynamic roasts):
1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Get an API key from [xAI Console](https://console.x.ai/).
3. Add `GROK_API_KEY=your_key_here` to `.env`.

---

## 🚢 Deploying to Vercel

The app includes `api/index.py` and `vercel.json` configured for Vercel's Python Serverless runtime:

```bash
vercel
```

Add `GROK_API_KEY` under **Project Settings > Environment Variables** on your Vercel Dashboard.

---

## 📜 License

MIT License • Built for GDG Live Pakistan Chai aur Code ☕
