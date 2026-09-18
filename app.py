import os
import re
import json
import requests
from flask import Flask, request, jsonify, send_from_directory
from dotenv import load_dotenv
from fallbacks import generate_fallback_roast

# Load environment variables from .env
load_dotenv()

app = Flask(__name__, static_folder=".")

@app.after_request
def add_cors_headers(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type, Authorization"
    return response

@app.route("/api/health", methods=["GET", "OPTIONS"])
@app.route("/health", methods=["GET", "OPTIONS"])
def health():
    groq_ready = bool(os.getenv("GROQ_API_KEY") or os.getenv("GROQ_KEY") or os.getenv("GROQ_API_TOKEN") or os.getenv("GROQ_API"))
    return jsonify({
        "status": "ok",
        "app": "Rishta Aunty Backend (Python)",
        "groq_configured": groq_ready
    })

@app.route("/api/roast", methods=["POST", "OPTIONS"])
@app.route("/roast", methods=["POST", "OPTIONS"])
@app.route("/api/index", methods=["POST", "OPTIONS"])
@app.route("/api", methods=["POST", "OPTIONS"])
def roast():
    if request.method == "OPTIONS":
        return "", 200

    payload = request.get_json(silent=True) or {}
    profile = payload.get("profile")
    repos = payload.get("repos") or []
    username = payload.get("username")

    # If only username provided, fetch GitHub data in Python
    if not profile and username:
        username = username.strip().lstrip("@")
        gh_headers = {"User-Agent": "Rishta-Aunty-App"}
        try:
            prof_resp = requests.get(f"https://api.github.com/users/{username}", headers=gh_headers, timeout=5)
            if prof_resp.status_code == 404:
                return jsonify({"error": f"Haye tauba! GitHub par '@{username}' nahi mila."}), 404
            if not prof_resp.ok:
                return jsonify({"error": "GitHub API error."}), prof_resp.status_code
            profile = prof_resp.json()

            repo_resp = requests.get(
                f"https://api.github.com/users/{username}/repos?sort=updated&per_page=30",
                headers=gh_headers,
                timeout=5
            )
            if repo_resp.ok:
                repos = repo_resp.json()
        except Exception as e:
            return jsonify({"error": f"Failed to fetch GitHub data: {str(e)}"}), 500

    if not profile or not profile.get("login"):
        return jsonify({"error": "Missing GitHub profile information."}), 400

    # Deterministic fallback ready instantly
    fallback_roast = generate_fallback_roast(profile, repos)

    api_key = os.getenv("GROQ_API_KEY") or os.getenv("GROQ_KEY") or os.getenv("GROQ_API_TOKEN") or os.getenv("GROQ_API")
    if api_key:
        api_key = api_key.strip().strip("'\"")

    groq_model = "llama-3.3-70b-versatile"

    if not api_key:
        print("[Rishta Aunty Python] No GROQ_API_KEY detected in environment; returning fallback roast.")
        return jsonify({"source": "fallback", "data": fallback_roast})

    api_url = "https://api.groq.com/openai/v1/chat/completions"

    # Prepare prompt metrics
    stars_total = sum((r.get("stargazers_count", 0) or 0) for r in repos)
    forked_total = sum(1 for r in repos if r.get("fork"))
    languages_used = list(dict.fromkeys([r.get("language") for r in repos if r.get("language")]))[:5]
    repo_names = ", ".join([f"{r.get('name')} ({r.get('language') or 'Code'}, {r.get('stargazers_count', 0)}★)" for r in repos[:8]])

    system_instruction = (
        "You are 'Rishta Aunty', the ultimate dramatic, sharp-tongued, tea-sipping Pakistani matchmaking aunty "
        "reviewing a software engineer's GitHub profile to write their matrimonial 'Rishta Biodata Roast'.\n\n"
        "MAXIMUM ROMAN URDU & DESI SLANGS (CRITICAL):\n"
        "- Use heavy Pakistani/Desi slang words throughout every single field:\n"
        "  'Shashkay' (showing off), 'Chuss marna' (lame nonsense), 'Phannay Khan' (know-it-all), 'Topi Drama' (fake excuses), "
        "  'Jugaad' (duct-tape fixes), 'Scene on hai / Scene off hai' (deal maker / deal breaker), 'Phupho ke taane' (aunt's criticism), "
        "  'Abba nahi manenge', 'Biryani mein elaichi' (buzzkill), 'Batti gul', 'Dhobi ka kutta na frontend ka na backend ka', "
        "  'Hawa-baazi', 'Pappu developer', 'Khandani siyappay', 'Lakh di laanat', 'Haye tauba mera BP barh gaya', 'Ustaad/Jani'.\n"
        "- Make it sound like an authentic Karachi/Lahore/Peshawar aunty gossiping at a wedding tea table.\n\n"
        "STRICT SAFETY CONSTRAINTS:\n"
        "- Keep the humor purely about developer habits: abandoned repos, copy-pasting code, empty READMEs, framework hopping, "
        "lazy commits, zero tests, dark mode addiction, late night coding.\n"
        "- DO NOT make jokes about religion, sects, caste bigotry, physical appearance, or sensitive family trauma.\n\n"
        "JSON OUTPUT ONLY:\n"
        "Respond ONLY with a valid JSON object (no markdown code blocks, no backticks, no extra text) with this schema:\n"
        "{\n"
        '  "title": "Funny matrimonial job title with slangs (e.g. Senior Abandoned Repo Architect, Phannay Khan Prompt Engineer)",\n'
        '  "gotra": "Tech clan/gotra (e.g. Node_Modules Baradri, Topi Drama Qabeela, Copy-Paste Khandaan)",\n'
        '  "habits": ["Slang-filled Habit 1", "Slang-filled Habit 2", "Slang-filled Habit 3"],\n'
        '  "assets": ["Slang-filled Asset 1", "Slang-filled Asset 2", "Slang-filled Asset 3", "Slang-filled Asset 4"],\n'
        '  "redFlags": ["Slang-filled Red flag 1", "Slang-filled Red flag 2", "Slang-filled Red flag 3"],\n'
        '  "auntyVerdict": "Brutally funny 3-4 sentence Desi aunty roast packed with Roman Urdu slangs evaluating their marriage scene.",\n'
        '  "matchScore": 45,\n'
        '  "stampStatus": "SCENE OFF HAI ❌ or PHUPHO KO SAKHT AITRAZ ⚠️ or RISHTA 100% PAKKA! 💖",\n'
        '  "stampClass": "stamp-rejected or stamp-pending or stamp-verified"\n'
        "}"
    )

    user_prompt = (
        f"Candidate Profile:\n"
        f"- Username: {profile.get('login')}\n"
        f"- Full Name: {profile.get('name') or 'Not disclosed'}\n"
        f"- Bio: \"{profile.get('bio') or 'Khali bio - secretive personality'}\"\n"
        f"- Public Repositories: {profile.get('public_repos', 0)}\n"
        f"- Followers: {profile.get('followers', 0)} | Following: {profile.get('following', 0)}\n"
        f"- Total Stars: {stars_total}\n"
        f"- Forked Repos: {forked_total} out of {len(repos)} inspected\n"
        f"- Top Languages: {', '.join(languages_used) if languages_used else 'None detected'}\n"
        f"- Sample Repositories: {repo_names if repo_names else 'None'}\n"
        f"- Location: {profile.get('location') or 'Unknown'}\n\n"
        "Write their matrimonial biodata roast JSON now."
    )

    try:
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"Bearer {api_key}"
        }
        body = {
            "model": groq_model,
            "messages": [
                {"role": "system", "content": system_instruction},
                {"role": "user", "content": user_prompt}
            ],
            "temperature": 0.8,
            "response_format": {"type": "json_object"}
        }

        # 4.5-second timeout to protect live presentation
        resp = requests.post(api_url, headers=headers, json=body, timeout=4.5)

        if not resp.ok:
            print(f"[Rishta Aunty Python] Groq API error: {resp.status_code} {resp.text}")
            return jsonify({"source": "fallback", "data": fallback_roast})

        resp_data = resp.json()
        content = resp_data.get("choices", [{}])[0].get("message", {}).get("content", "")

        if not content:
            return jsonify({"source": "fallback", "data": fallback_roast})

        clean_json = re.sub(r"^```json\s*", "", content.strip(), flags=re.IGNORECASE)
        clean_json = re.sub(r"```$", "", clean_json.strip()).strip()
        parsed = json.loads(clean_json)

        # Merge metadata
        parsed["candidateName"] = profile.get("name") or profile.get("login")
        parsed["topLanguage"] = languages_used[0] if languages_used else "Code"
        parsed["totalStars"] = stars_total
        parsed["publicRepos"] = profile.get("public_repos", 0)
        parsed["followers"] = profile.get("followers", 0)

        return jsonify({"source": "groq", "data": parsed})

    except Exception as exc:
        print(f"[Rishta Aunty Python] Groq error or timeout ({str(exc)}), using fallback matrix.")
        return jsonify({"source": "fallback", "data": fallback_roast})


if __name__ == "__main__":
    @app.route("/")
    def index():
        return send_from_directory(".", "index.html")

    @app.route("/<path:filename>")
    def static_files(filename):
        return send_from_directory(".", filename)

    port = int(os.getenv("PORT", 5000))
    print(f"🧕 Rishta Aunty running at http://127.0.0.1:{port}")
    app.run(host="0.0.0.0", port=port, debug=True)
