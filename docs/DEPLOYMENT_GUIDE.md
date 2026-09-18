# 🚀 Rishta Aunty — Vercel Deployment & Production Operations Guide

This guide details how to configure, deploy, scale, and maintain **Rishta Aunty** on **Vercel** utilizing the Python Serverless WSGI Runtime alongside global Edge CDN static asset delivery.

---

## 1. Prerequisites

Before deploying, ensure you have:
1. A **[Vercel Account](https://vercel.com/)** (Hobby or Pro tier).
2. The **[Vercel CLI](https://vercel.com/cli)** installed locally (`npm i -g vercel`), OR a GitHub repository linked to your Vercel team.
3. A **[GroqCloud Account](https://console.groq.com/)** with a generated API Key (format: `gsk_...`). *(Optional: the app functions with 100% reliability using the built-in deterministic matrix if omitted).*
4. Git installed locally.

---

## 2. Deployment Strategies

### Method A: Direct Vercel CLI Deployment (Fastest)

Deploying via the CLI takes under 60 seconds directly from your local terminal:

```powershell
# 1. Navigate to the project root
cd "Rishta-Aunty"

# 2. Authenticate with Vercel (if not already logged in)
vercel login

# 3. Trigger initial preview deployment
vercel

# Answer the interactive CLI prompts:
# ? Set up and deploy “~/Rishta-Aunty”? [Y/n] y
# ? Which scope do you want to deploy to? <Your Account>
# ? Link to existing project? [y/N] n
# ? What’s your project’s name? rishta-aunty
# ? In which directory is your code located? ./
# ? Want to modify settings? [y/N] n

# 4. Deploy directly to Production
vercel --prod
```

---

### Method B: Git Integration (Continuous Deployment via GitHub)

Continuous deployment automatically triggers builds whenever commits are pushed to `main`:

1. **Push your code to GitHub:**
   ```powershell
   git remote add origin https://github.com/abdulhayykhan/Rishta-Aunty.git
   git branch -M main
   git push -u origin main
   ```

2. **Import into Vercel Dashboard:**
   - Navigate to [vercel.com/new](https://vercel.com/new).
   - Locate and select the `abdulhayykhan/Rishta-Aunty` repository.
   - **Framework Preset:** Select `Other` or `Flask`.
   - **Root Directory:** `./`
   - Click **Deploy**.

---

## 3. Environment Variables Configuration

To enable dynamic LLM-generated satire powered by Groq's LPU engine:

1. In the Vercel Project Dashboard, navigate to **Settings** -> **Environment Variables**.
2. Add the following key-value pair:

| Variable Name | Value | Environment | Description |
| :--- | :--- | :--- | :--- |
| `GROQ_API_KEY` | `gsk_your_actual_key_here` | Production, Preview, Development | GroqCloud API authorization secret |

3. Redeploy the latest commit from the **Deployments** tab to ensure the environment variable takes effect.

> [!TIP]
> If `GROQ_API_KEY` is omitted, the app will **never crash**. It seamlessly routes all roast requests to `fallbacks.py`, computing culturally authentic archetypal roasts in $<5\text{ ms}$.

---

## 4. Under the Hood: Serverless Execution Architecture

### 4.1. Directory Structure on Vercel
```
Rishta-Aunty/
├── api/
│   ├── index.py       # Primary WSGI entrypoint for /api/*
│   └── roast.py       # Direct serverless fallback shim
├── app.py             # Core Flask application and Groq handler
├── fallbacks.py       # Deterministic Python roast engine
├── requirements.txt   # Serverless Python dependencies
├── vercel.json        # Routing rewrites & serverless configuration
├── index.html         # Served statically via Vercel Global Edge CDN
├── style.css          # Served statically via Vercel Global Edge CDN
├── app.js             # Served statically via Vercel Global Edge CDN
└── fallbacks.js       # Served statically via Vercel Global Edge CDN
```

### 4.2. Routing Matrix (`vercel.json`)
```json
{
  "version": 2,
  "rewrites": [
    {
      "source": "/api/(.*)",
      "destination": "/api/index.py"
    }
  ]
}
```
- **Static Assets:** Vercel recognizes `index.html`, `style.css`, `app.js`, and `fallbacks.js` as static web assets. They bypass Python execution entirely and are cached at global edge POPs (Point of Presence) with zero cold-start penalty.
- **Dynamic API:** Requests directed to `/api/*` (such as `POST /api/roast` and `GET /api/health`) invoke `@vercel/python` in an isolated Linux micro-VM.

---

## 5. Performance Tuning & Latency Budgets

| Stage | Expected Latency | Budget Limit | Mitigation Strategy |
| :--- | :--- | :--- | :--- |
| **Edge Static Assets** | $10\text{ ms} - 40\text{ ms}$ | $100\text{ ms}$ | Vercel Global Edge CDN Caching |
| **GitHub API Ingestion** | $150\text{ ms} - 400\text{ ms}$ | $1500\text{ ms}$ | Direct browser fetch, unauthenticated pool |
| **Python Serverless Cold Start** | $300\text{ ms} - 800\text{ ms}$ | $1500\text{ ms}$ | Minimal `requirements.txt` dependencies |
| **Groq LPU LLM Inference** | $400\text{ ms} - 1200\text{ ms}$ | $3500\text{ ms}$ | Strict `timeout=3.5s` circuit breaker |
| **Deterministic Fallback Engine** | $<5\text{ ms}$ | $20\text{ ms}$ | Zero network I/O, pure in-memory compute |

---

## 6. Troubleshooting & Common Issues

### Issue 1: "ModuleNotFoundError: No module named 'flask'" in Vercel logs
- **Cause:** Vercel could not locate `requirements.txt` or dependencies failed to resolve.
- **Resolution:** Verify `requirements.txt` resides in the repository root directory with:
  ```
  Flask>=3.0.0
  requests>=2.31.0
  python-dotenv>=1.0.0
  ```

### Issue 2: "Function Timeout / Execution timed out after 10.00 seconds"
- **Cause:** External network calls hung without a timeout.
- **Resolution:** Verify that `requests.post()` in `app.py` enforces `timeout=3.5`. This guarantees execution completes well within Vercel Hobby tier's 10-second serverless execution ceiling.

### Issue 3: GitHub 403 Rate Limit Reached
- **Cause:** IP address hit GitHub unauthenticated quota (60 requests/hr).
- **Resolution:** Because queries originate from the client browser, individual users hit limits independently. The UI automatically displays the fallback card with quick-pick chips for judges.
