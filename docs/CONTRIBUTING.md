# 🤝 Contributing to Rishta Aunty

Thank you for your interest in contributing to **Rishta Aunty**! We welcome bug fixes, humorous new fallback archetypes, UI polish, and performance optimizations.

---

## 1. Ground Rules & Core Constraints

Before submitting pull requests, please respect the architectural principles of this project:

1. **Zero JavaScript Frameworks (Strict Rule):**
   - The frontend must remain **100% Vanilla HTML, CSS, and ES6+ JavaScript**.
   - Do **NOT** introduce React, Vue, Svelte, Next.js, Nuxt, Angular, Vite, Webpack, Tailwind, or jQuery.
   - Raw static assets must remain instantly servable via CDN edge nodes without build steps or transpilation.
2. **Pure Python Backend:**
   - The serverless backend must remain pure Python (`Flask`, `requests`, `python-dotenv`).
   - Keep `requirements.txt` minimal and platform-independent to ensure sub-second cold starts on Vercel.
3. **Halal & Affectionate Humor Only:**
   - Roasts must strictly target **developer habits, coding quirks, Git crimes, and open-source behavior**.
   - No jokes targeting religion, sectarian divides, gender discrimination, physical appearance, or socioeconomic background.
4. **Resilience First:**
   - Any new feature or API call must include a deterministic offline fallback. No user must ever experience a blank screen or unhandled exception.

---

## 2. Local Development Setup

```bash
# 1. Clone your fork of the repository
git clone https://github.com/<your-username>/Rishta-Aunty.git
cd Rishta-Aunty

# 2. Initialize a Python virtual environment
python -m venv .venv

# On Windows:
.\.venv\Scripts\activate
# On Linux / macOS:
source .venv/bin/activate

# 3. Install backend dependencies
pip install -r requirements.txt

# 4. (Optional) Set up your GroqCloud API key in .env
cp .env.example .env
# Edit .env and add GROQ_API_KEY=gsk_...

# 5. Launch the local Flask server
python app.py
```

Access the application at `http://localhost:5000` in your web browser.

---

## 3. Adding New Fallback Archetypes

When adding new satirical archetypes to the deterministic rule engine, make sure to update **BOTH** the Python backend (`fallbacks.py`) and the client-side JavaScript engine (`fallbacks.js`) to maintain 1:1 parity:

### Step 1: Update `fallbacks.py`
Add your logic inside the evaluation matrix in `fallbacks.py`:
```python
# Example: Adding a Docker / DevOps hoarder archetype
if any("docker" in r.get("name", "").lower() or "k8s" in r.get("name", "").lower() for r in repos):
    title = "Khandani YAML & Container Sardaar (K8s Ke Siyappay)"
    gotra = "DevOps & Cloud Over-Engineer Biradari"
    match_score = 62
    stamp_status = "LADKI WALAY SOCHENGAY ⚠️"
    stamp_class = "stamp-pending"
    habits = [
        "Chai banane ke liye bhi pehle Docker container spin up karta hai",
        "Ghar ka bill aane par bolta hai 'Cloud cost optimize karni paregi'",
        "Shaadi ke mandap ko Kubernetes cluster par deploy karne ki zid"
    ]
    red_flags = [
        "Simple hello world app ke liye 400 lines ka YAML file likhta hai",
        "Har baat par bolta hai 'Production par toh perfectly chal raha tha'",
        "Ghar ke darwaze par ingress controller lagaya hua hai"
    ]
    aunty_verdict = "Ladka theek hai lekin baat baat par pods crash hone ka rona rota hai! Sasural walon ko monitor karne ke liye Prometheus alert set kar dega."
```

### Step 2: Update `fallbacks.js`
Mirror the same condition and archetype into `fallbacks.js` so that clients operating offline or during API timeouts experience the exact same rich satire.

---

## 4. Code Quality & Pre-Commit Verification

Before submitting a Pull Request, run the following verification checks:

```powershell
# 1. Validate Python code syntax & execution
.\.venv\Scripts\python.exe -c "import app; print('App syntax clean!')"
.\.venv\Scripts\python.exe -c "import fallbacks; print('Fallbacks syntax clean!')"

# 2. Validate JavaScript syntax
node --check app.js
node --check fallbacks.js

# 3. Check Git status for extraneous files
git status
```

---

## 5. Pull Request Guidelines

1. Fork the repository and create a descriptive branch: `git checkout -b feat/new-rust-archetype`.
2. Commit your changes with clear, semantic commit messages:
   `git commit -m "Add Rust memory-safety developer archetype to fallback engines"`
3. Push to your branch and submit a Pull Request to `abdulhayykhan/Rishta-Aunty` on branch `main`.
4. Provide a clear summary and screenshots of the newly added archetype in action.
