"""
Rishta Aunty - Deterministic Fallback & Rule-Based Roast Matrix (Python)

Guarantees zero-latency, culturally hilarious, and 100% reliable biodata
roasts during live stage demos, even if offline or rate-limited.
"""

RISHTA_FALLBACKS = {
    # Edge Case: Absolute Zero Repos
    "zero_repos": {
        "title": "M.Sc Ghost Developer (Khali Haath)",
        "gotra": "Incognito Committer Qabeela",
        "habits": [
            "Din bhar Twitter aur LinkedIn par tech debate karta hai",
            "README bhi generate karne ke liye ChatGPT ka intezar karta hai",
            "Ghar walon ko bola hai 'stealth startup' chala raha hai"
        ],
        "red_flags": [
            "Profile par ek bhi green tile nahi hai (Dil bhi khali hai)",
            "Portfolio website ke naam par 'Coming Soon' laga rakha hai",
            "Zero commits, 100% confidence"
        ],
        "aunty_verdict": "Haye tauba! Zero public repos?! Beta, khali biodata le kar rishta dhoondne nikal pare ho? Ladki walon ne poochha 'beta kya karta hai', toh kya bolenge 'inspect element karta hai'? Pehle ek chhota sa 'Hello World' toh push kar lo, phir hum kisi ko chai par bulayein!",
        "match_score": 12,
        "stamp_status": "RISHTA KHARIJ ❌",
        "stamp_class": "stamp-rejected"
    },

    # Edge Case: 1 to 3 Repos (Barely Started)
    "novice_repos": {
        "title": "Junior Tutorial Inmate (Abhi seekh raha hai)",
        "gotra": "Udemy Certified Sect",
        "habits": [
            "Todo app bana kar khud ko Full Stack architect samajhta hai",
            "Commit message mein sirf 'first commit' aur 'fixed bug' likhta hai",
            "Ammi ko kehta hai 'Agla Sundar Pichai main hi hoon'"
        ],
        "red_flags": [
            "Saare projects YouTube video dekh kar line-by-line copy kiye hain",
            "Git push ke baad dua maangta hai ke conflict na aaye",
            "CSS align center karne ke liye 3 ghante lagata hai"
        ],
        "aunty_verdict": "Aray beta ji, do repo bana kar rishte ke bazaar mein entry marli? Ek Todo App aur ek Calculator se ghar nahi chalta! Magar chalo, shauk toh hai bachay ko. Ladki walon ko bolenge 'thoda sa fixing baki hai, update ho jayega'.",
        "match_score": 38,
        "stamp_status": "LADKI WALAY SOCHENGAY ⚠️",
        "stamp_class": "stamp-pending"
    },

    # Edge Case: Fork Hoarder (> 50% repos are forks)
    "fork_hoarder": {
        "title": "Master of Doosron Ka Code (Open Source Chor)",
        "gotra": "Ctrl+C Ctrl+V Khandaan",
        "habits": [
            "Har trending library ko bina soche fork kar leta hai",
            "Fork karke star dena bhool jata hai",
            "Bio mein 'Contributor to Kubernetes' likha hai (bas typo fix kiya tha)"
        ],
        "red_flags": [
            "Apna original code do line ka nahi hai, baki sab borrowed glory",
            "Rishte mein dahej bhi doosron se maang kar dikhayega",
            "Git clone karke file rename karke upload karta hai"
        ],
        "aunty_verdict": "Tauba tauba! Itnay saare forked repos?! Beta, doosron ki mehnat ko apna rishta biodata bana kar pesh kar rahe ho? Yeh toh aisi baat hui ke parosi ki gaari ke aage kharay ho kar tasveer khinchwa li! Original kaam kahan hai?",
        "match_score": 29,
        "stamp_status": "RISHTA KHARIJ ❌",
        "stamp_class": "stamp-rejected"
    },

    # Archetype: JavaScript / TypeScript Overloader
    "javascript_addict": {
        "title": "Senior Framework Hopper (npm install ka badshah)",
        "gotra": "Node_Modules Bhari Gotra",
        "habits": [
            "Har naye hafte naya JS framework seekhne lag jata hai",
            "Node_modules folder itna bhaari hai ke hard drive cheekhein maar rahi hai",
            "Shaadi ke card par bhi TypeScript ke types declare karega"
        ],
        "red_flags": [
            "Commitment issues hain! React se Next.js, Next se Remix, kahin tikta hi nahi",
            "Dark mode toh add kar liya, par functionality aadhi tooti hui hai",
            "Chai garam karne ke bajaye 'Bun is faster than Node' par larta hai"
        ],
        "aunty_verdict": "Beta bohot tez hai, par iske commitment par shaq hai! Kal React pasand tha, aaj Svelte pe fida hai, parso kisi aur pe chala jayega. Biwi se bolay ga 'jaan, let's refactor our marriage into microservices'. Thoda thehrav lao beta zindagi mein!",
        "match_score": 47,
        "stamp_status": "CONDITIONAL MATCH ⚠️",
        "stamp_class": "stamp-pending"
    },

    # Archetype: Python / AI Enthusiast
    "python_ai_fan": {
        "title": "Self-Styled AI Guru (Prompt Engineer Sahib)",
        "gotra": "Jupyter Notebook Caste",
        "habits": [
            "Pura din `import torch` aur `import openai` ke khwaab dekhta hai",
            "Rishta proposal likhne ke liye bhi Claude aur ChatGPT use kiya hai",
            "GPU heating par roti garam karne ki koshish karta hai"
        ],
        "red_flags": [
            "Code chalne se pehle 4 GB weights download karta hai",
            "Bina LLM ke ek for loop nahi likh sakta",
            "Ghar ka AC band karwa ke mining rig chala rakhi hai"
        ],
        "aunty_verdict": "Wah bhai wah! Beta AI ka shauqeen hai. Bio mein likha hai 'Machine Learning Engineer', par saari files `test_final_v2_really_final.ipynb` hain! Chalo kam az kam shaadi ke baad sasural walon ki tasveerein toh enhance karke de dega.",
        "match_score": 61,
        "stamp_status": "RISHTA UNDER REVIEW 📜",
        "stamp_class": "stamp-pending"
    },

    # Archetype: C++ / Rust / Systems Dev
    "systems_purist": {
        "title": "Memory Leak Inspector & Borrow Checker Devotee",
        "gotra": "Low-Level Aristocracy",
        "habits": [
            "Baat baat par bolta hai 'Rust is memory safe, unlike our society'",
            "Shaadi ke contracts ko compile-time check karna chahta hai",
            "Subah 5 bajay uth kar terminal ke font customize karta hai"
        ],
        "red_flags": [
            "Biwi ne paani maanga toh pointer reference de dega",
            "Zero social skills, sirf StackOverflow par logon ko galat sabit karta hai",
            "Zindagi bhar garbage collection ke khilaf larta rahega"
        ],
        "aunty_verdict": "MashaAllah dimaag toh bohot tez hai, par dil kahan hai? Is se baat karo toh kehta hai 'lifetime annotations mismatch'. Arre beta, hum yahan lifetime partner dhoond rahe hain, compiler warnings nahi! Par chalo package acha mil jayega.",
        "match_score": 68,
        "stamp_status": "KHANDAANI PASAND 💍",
        "stamp_class": "stamp-verified"
    },

    # Archetype: Abandoned Projects Specialist
    "abandoned_repo_king": {
        "title": "Cemetery of Incomplete Startups Founder",
        "gotra": "Domain Name Kharidar Biradari",
        "habits": [
            "Har doosre mahine naya domain khareedta hai, par site kabhi launch nahi hoti",
            "Har repo mein sirf initial commit aur .gitignore hota hai",
            "Kehta hai 'bhai market ready nahi thi is product ke liye'"
        ],
        "red_flags": [
            "Starting things: 100%. Finishing things: 0%",
            "Ghar ka bulb kharab ho toh 4 mahine tak issue open rakhega",
            "Commit streak aisi hai jaise Eid ka chaand"
        ],
        "aunty_verdict": "Beta has 47 repos, 46 abandoned! Shuru bohot josh se karta hai, phir do din baad bhool jata hai. Kal ko shaadi karke bolega 'I have pivoted to single life'. Pehle ek project pura karke production pe daalo, phir shaadi ke mandap/nikah mein aana!",
        "match_score": 33,
        "stamp_status": "RISHTA KHARIJ ❌",
        "stamp_class": "stamp-rejected"
    },

    # Archetype: High Star / High Follower Open Source Star
    "open_source_chad": {
        "title": "Sharma Ji Ka Beta (GitHub Sitarah)",
        "gotra": "Top 1% Stargazer Royals",
        "habits": [
            "Chai peete peete pull request merge karta hai",
            "Followers itnay hain ke mohallay ka council election jeet jaye",
            "Har conference mein speaker badge pehan ke ghoomta hai"
        ],
        "red_flags": [
            "Bohot zyada busy! Honeymoon par bhi GitHub issues triage karega",
            "Nakhray bohot honge, biwi ki baat sunne ke liye issue template mangega",
            "Shaadi ke shor mein bhi commit streak tootte nahi dega"
        ],
        "aunty_verdict": "SubhanAllah! 1000+ stars aur itnay followers! Yeh toh Sharma ji ka beta nikla! Saari auntyan iske peeche pari hain. Magar daal mein kuch kaala toh nahi? Itna online rehta hai toh rishte walon ko waqt kab dega? Chalo rishta pakka karte hain, ladka kamao hai!",
        "match_score": 89,
        "stamp_status": "RISHTA PAKKA! 💖",
        "stamp_class": "stamp-verified"
    },

    # Archetype: Workaholic Ghost
    "workaholic_vampire": {
        "title": "Raat Ka Coder (Sleep Deprived Damad)",
        "gotra": "Chai & RedBull Devotees",
        "habits": [
            "Subah 11 bajay aankh khulti hai, raat 3 bajay terminal garam hota hai",
            "Sunlight dekh kar aisi aankein band karta hai jaise Dracula ho",
            "Dawat par baith kar laptop par hotfix deploy karta hai"
        ],
        "red_flags": [
            "BP high rehta hai, ankhon ke neeche dark circles permanent hain",
            "Sasural walay subah nashta karein toh yeh so raha hoga",
            "Romantic dates par Wi-Fi hotspot dhoondta phirega"
        ],
        "aunty_verdict": "Beta ji, raat ke teen bajay kaun code push karta hai? Biwi kahegi 'chalo dawat pe chalte hain', yeh bolega 'ek prod incident solve karke aaya'. Magar mehnti bohot hai, biwi ko shopping zaroor karwayega!",
        "match_score": 54,
        "stamp_status": "SOCH BICHAAR JARI ⚠️",
        "stamp_class": "stamp-pending"
    },

    # Archetype: General Solid Mid-Level Dev
    "solid_developer": {
        "title": "Sharif Khandani Developer (Sadiq & Ameen Coder)",
        "gotra": "Clean Code Jamat",
        "habits": [
            "README theek se likhta hai, documentation bhi achi hai",
            "Tests run karta hai (kabhi kabhi pass bhi hote hain)",
            "Office se waqt par nikalta hai, family man banne ki salahiyat hai"
        ],
        "red_flags": [
            "Thoda boring hai, weekends par documentation padhta hai",
            "Chai thandi hone par thoda chirchira ho jata hai",
            "Linux install karne ki advice har mehfil mein deta hai"
        ],
        "aunty_verdict": "MashaAllah bohot suljha hua bacha hai. Code bhi saaf hai aur harkatein bhi sharifana. Na koi fazool show-off, na empty promises. Bas kabhi kabhi Git rebase mein phans jata hai, par hum rishta approve karte hain!",
        "match_score": 78,
        "stamp_status": "RISHTA APPROVED ✅",
        "stamp_class": "stamp-verified"
    }
}


def generate_fallback_roast(profile: dict, repos: list = None) -> dict:
    """
    Intelligent Rule-Matcher in Python that inspects actual profile metrics
    and generates the most humorous, culturally resonant fallback roast.
    """
    if repos is None:
        repos = []

    public_repos = profile.get("public_repos", 0) or 0
    followers = profile.get("followers", 0) or 0
    following = profile.get("following", 0) or 0
    stars = sum((r.get("stargazers_count", 0) or 0) for r in repos)
    forks_count = sum(1 for r in repos if r.get("fork"))
    fork_ratio = (forks_count / len(repos)) if repos else 0.0

    # Language distribution
    lang_counts = {}
    for r in repos:
        lang = r.get("language")
        if lang:
            lang_counts[lang] = lang_counts.get(lang, 0) + 1

    top_lang = "Plain Text"
    if lang_counts:
        top_lang = sorted(lang_counts.items(), key=lambda item: item[1], reverse=True)[0][0]

    # Matching logic
    if public_repos == 0:
        base = RISHTA_FALLBACKS["zero_repos"]
    elif public_repos <= 2:
        base = RISHTA_FALLBACKS["novice_repos"]
    elif fork_ratio >= 0.55 and len(repos) >= 4:
        base = RISHTA_FALLBACKS["fork_hoarder"]
    elif stars > 250 or followers > 300:
        base = RISHTA_FALLBACKS["open_source_chad"]
    elif top_lang in ["JavaScript", "TypeScript"] and public_repos > 12:
        base = RISHTA_FALLBACKS["javascript_addict"]
    elif top_lang in ["Python", "Jupyter Notebook"]:
        base = RISHTA_FALLBACKS["python_ai_fan"]
    elif top_lang in ["Rust", "C++", "C", "Go"]:
        base = RISHTA_FALLBACKS["systems_purist"]
    elif public_repos >= 20 and stars < 5:
        base = RISHTA_FALLBACKS["abandoned_repo_king"]
    elif followers < 5 and following > 80:
        base = RISHTA_FALLBACKS["workaholic_vampire"]
    else:
        base = RISHTA_FALLBACKS["solid_developer"]

    import copy
    customized = copy.deepcopy(base)

    candidate_name = profile.get("name") or profile.get("login") or "Beta"
    customized["candidateName"] = candidate_name
    customized["topLanguage"] = top_lang
    customized["totalStars"] = stars
    customized["publicRepos"] = public_repos
    customized["followers"] = followers
    customized["forkRatioPercent"] = round(fork_ratio * 100)

    # Assets list
    if public_repos > 0:
        customized["assets"] = [
            f"{public_repos} Public Repositories (Dahej ki list)",
            f"{stars} Total Stars (Mohallay ki izzat)",
            f"{followers} Followers vs {following} Following ({'Mashoor Shakhsiyat' if followers > following else 'Sab ko follow karta phirta hai'})",
            f"Primary Tech: {top_lang} ({'Nakhray baray hain' if top_lang == 'JavaScript' else 'Mehnat kash insaan'})"
        ]
    else:
        customized["assets"] = [
            "0 Public Repositories (Ghar ka cupboard khali hai)",
            "0 Stars (Kisi ne like nahi kiya)",
            "Private repos ka bahana (Kehta hai confidential hai)",
            "Zero verifiable skills"
        ]

    # Map keys to match frontend camelCase expectations
    return {
        "title": customized["title"],
        "gotra": customized["gotra"],
        "habits": customized["habits"],
        "assets": customized["assets"],
        "redFlags": customized["red_flags"],
        "auntyVerdict": customized["aunty_verdict"],
        "matchScore": customized["match_score"],
        "stampStatus": customized["stamp_status"],
        "stampClass": customized["stamp_class"],
        "candidateName": customized["candidateName"],
        "topLanguage": customized["topLanguage"],
        "totalStars": customized["totalStars"],
        "publicRepos": customized["publicRepos"],
        "followers": customized["followers"]
    }
