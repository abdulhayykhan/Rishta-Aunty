"""
Rishta Aunty - Deterministic Fallback & Rule-Based Roast Matrix (Python)
Packed with maximum authentic Pakistani & Desi slangs, witty burns, and matrimonial banter.
"""

RISHTA_FALLBACKS = {
    # Edge Case: Absolute Zero Repos
    "zero_repos": {
        "title": "M.Sc Ghost Developer (Khali Haath Phannay Khan)",
        "gotra": "Incognito Topi Drama Qabeela",
        "habits": [
            "Din bhar LinkedIn aur Twitter par lambi lambi chussain maarta hai",
            "Ghar walon ko jhoot bola hua hai ke 'Silicon Valley stealth startup' chala raha hoon",
            "README generator se bhi pehle ChatGPT ke aage ro deta hai"
        ],
        "red_flags": [
            "GitHub profile aisi saaf hai jaise raid parne ke baad office!",
            "Portfolio ke naam par 4 saal se 'Under Construction' ka board latkaya hua hai",
            "Zero repos, zero commits, par attitude aisa jaise Elon Musk ka secret chacha ho"
        ],
        "aunty_verdict": "Haye tauba lakh di laanat! Zero public repos?! Beta, khali biodata le kar rishta dhoondne nikal pare ho? Ladki walay ghar aayein aur poochhein 'damad ji kya karte hain', toh kya bolenge 'bhai inspect element mein hoshiyari dikhata hai'? Khuda ka khauf karo, pehle ek chhota sa 'Hello World' toh push kar aao, warna Phupho ne pehle round mein hi rishte ka scene off kar dena hai!",
        "match_score": 9,
        "stamp_status": "SCENE OFF HAI ❌ (RISHTA KHARIJ)",
        "stamp_class": "stamp-rejected"
    },

    # Edge Case: 1 to 3 Repos (Barely Started / Tutorial Inmate)
    "novice_repos": {
        "title": "Pappu Tutorial Inmate (Abhi Chhota Bacha Hai)",
        "gotra": "10-Minute Udemy Shaukeen Baradri",
        "habits": [
            "Ek Todo app aur ek Calculator bana kar mohallay mein shashkay maar raha hai",
            "Commit message mein 'first commit', 'final fix', 'final fix 2 pakka' likhta hai",
            "Ammi ko kehta hai 'agla Bill Gates main hi hoon, bas 500 rupay ka easypaisa kar dein'"
        ],
        "red_flags": [
            "YouTube tutorial pause kar karke line-by-line copy paste marta hai",
            "Git push karte waqt aisi duayein mangta hai jaise matric ka result aa raha ho",
            "Div ko center karne ke chakkar mein pura hafta depression mein guzaar deta hai"
        ],
        "aunty_verdict": "Aray beta ji, do repo bana kar rishte ke bazaar mein itna roab? Ek Todo list aur ek silly calculator se biwi ke nakhray uthao ge? Magar chalo, kam az kam larka koshish toh kar raha hai. Ladki walon ko bolenge 'abhi junior level ka jugaadu hai, shaadi ke baad thoda aur polish ho jayega'!",
        "match_score": 35,
        "stamp_status": "PHUPHO KO SAKHT AITRAZ ⚠️",
        "stamp_class": "stamp-pending"
    },

    # Edge Case: Fork Hoarder (> 50% repos are forks)
    "fork_hoarder": {
        "title": "Master of Doosron Ka Code (Open Source Chor / Jugaad King)",
        "gotra": "Ctrl+C Ctrl+V Khandaan",
        "habits": [
            "Trending tab dekhte hi har kisi ka repo bina sharam ke fork maar leta hai",
            "Doosron ka project fork karke bas README mein apna naam chipka deta hai",
            "Bio mein likha hai 'Core Contributor' (bas ek comma theek kiya tha)"
        ],
        "red_flags": [
            "Apna original code dhoondne ke liye forensic audit karwana parega",
            "Shaadi mein dahej bhi parosiyon ke ghar se mang kar show-off karega",
            "Har baat pe mamoo banane ki aadat hai, code mein bhi aur rishtey mein bhi"
        ],
        "aunty_verdict": "Tauba tauba aisi chori chakari! Itnay saare forked repos?! Beta, doosron ki mehnat ko apna rishta biodata bana kar shashkay dikha rahe ho? Yeh toh bilkul aisi baat hui ke parosi ki Mercedes ke aage kharay ho kar rishte ki tasveer khinchwa li! Original code kidhar hai jani? Abba nahi manenge aisi topi drama par!",
        "match_score": 26,
        "stamp_status": "TOPI DRAMA EXPOSED ❌",
        "stamp_class": "stamp-rejected"
    },

    # Archetype: JavaScript / TypeScript Overloader
    "javascript_addict": {
        "title": "Senior Framework Hopper (npm install ka Nashai)",
        "gotra": "Bhari Bhari Node_Modules Biradari",
        "habits": [
            "Har mangalwar naya JS framework dhoond ke purana code kachre mein phenk deta hai",
            "Node_modules itna heavy hai ke hard drive cheekhein maar rahi hai",
            "Shaadi ke nikaah naame par bhi TypeScript ke strict types declare karne ki zid karega"
        ],
        "red_flags": [
            "Commitment issues peak level par hain! Aaj React, kal Next.js, parso Remix, kahin tikta hi nahi",
            "UI mein dark mode aur glowing buttons toh daal diye, par login button dabao toh 500 error deta hai",
            "Chai garam karne jao toh bolta hai 'Bun is 10x faster than traditional kettle, bro'"
        ],
        "aunty_verdict": "Haye mera BP! Beta dimagh ka tez hai par iske commitment par shaq hai! Aaj keh raha hai React pasand hai, kal bolega Svelte pe dil aa gaya. Kal ko biwi se kahega 'jaan, humara rishta thoda lag kar raha hai, let me refactor our marriage into microservices'. Thoda thehrav lao zindagi mein beta, har cheez npm update se solve nahi hoti!",
        "match_score": 48,
        "stamp_status": "THODA SOCH VICHAR BAKI ⚠️",
        "stamp_class": "stamp-pending"
    },

    # Archetype: Python / AI Enthusiast
    "python_ai_fan": {
        "title": "Self-Styled AI Guru (Prompt Engineer Phannay Khan)",
        "gotra": "Jupyter Notebook & GPU Frying Jamat",
        "habits": [
            "Din raat `import torch` aur `import openai` ke khwaab dekhta rehta hai",
            "Rishta proposal aur love letter likhne ke liye bhi Claude 3.5 Sonnet ka sahara liya hai",
            "Mining rig aur GPU heating par roti garam karne ka jugaad lagata hai"
        ],
        "red_flags": [
            "Code run karne jao toh pehle 8 GB weights aur huggingface models download karta hai",
            "Agar internet band ho jaye toh ek simple 'for loop' likhte huye pasine chhoot jate hain",
            "Har conversation mein 'AI will replace humans' bol ke rishtedaaron ko bore karta hai"
        ],
        "aunty_verdict": "Wah bhai wah! Beta AI ka bada ustaad banta hai! Bio mein likha hai 'Machine Learning Visionary', par saari files `final_notebook_real_final_v3_copy.ipynb` hain! Chalo kam az kam shaadi ke baad sasural walon ki puraani tasveerein 4K mein enhance karke de dega. Biryani mein elaichi jaisa thoda ajeeb hai, par kamaai theek thak kar lega!",
        "match_score": 63,
        "stamp_status": "RISHTA UNDER INVESTIGATION 📜",
        "stamp_class": "stamp-pending"
    },

    # Archetype: C++ / Rust / Systems Purist
    "systems_purist": {
        "title": "Memory Leak Inspector & Low-Level Aristocrat",
        "gotra": "Borrow Checker & Segmentation Fault Biradari",
        "habits": [
            "Har baat par be-tukka dialogue maarta hai: 'Rust is memory safe, unlike our society'",
            "Shaadi ke agreement ko compile-time verify karne ke chakkar mein dawat miss kar deta hai",
            "Subah 5 bajay uth kar terminal ke NeoVim plugins customize karta rehta hai"
        ],
        "red_flags": [
            "Biwi paani maang le toh pointer reference pass kar dega",
            "Zero social skills! Khaandani shaadiyon mein baith kar logon ko Linux install karne ke bhashan deta hai",
            "Zindagi bhar Garbage Collector ke khilaf jahaad karta rahega"
        ],
        "aunty_verdict": "MashaAllah dimaag toh Einstein jaisa hai, par dil kahan hai beta? Is se rishte ki baat karo toh aage se kehta hai 'lifetime annotations mismatch'. Arre bhai, hum yahan lifetime partner dhoond rahe hain, koi compiler error nahi! Par chalo, package acha hai aur larka sharif hai, bas romantic dates par terminal band rakhne ka waada lena parega!",
        "match_score": 72,
        "stamp_status": "KHANDAANI APPROVED RISHTA 💍",
        "stamp_class": "stamp-verified"
    },

    # Archetype: Abandoned Projects Specialist (Lots of repos, 0 stars)
    "abandoned_repo_king": {
        "title": "Cemetery of Incomplete Startups (Khwaboon Ka Saudagar)",
        "gotra": "Domain Name Kharidar & Abandoner Sect",
        "habits": [
            "Har doosre jummay naya .com domain khareedta hai, par site kabhi live nahi hoti",
            "47 repos banaye hain, 46 par sirf initial commit aur ek tuta hua README hai",
            "Har kisi ko kehta hai 'bhai market ready nahi thi mere revolutionary product ke liye'"
        ],
        "red_flags": [
            "Starting things: 1000% Josh. Finishing things: Zero battey sannaata!",
            "Ghar ka pankha kharab ho jaye toh 6 mahine tak GitHub issue open rakhta hai",
            "Commit streak aisi hai jaise Karachi mein bijli ki supply (kabhi aayi, kabhi gayi)"
        ],
        "aunty_verdict": "Beta has 47 repos, 46 abandoned! Shuru bohot josh-o-kharoosh se karta hai, phir do din baad hawa nikal jaati hai! Kal ko shaadi karke do haftay baad bolega 'I have pivoted to bachelor life again'. Pehle ek project mukammal karke production par deploy karo jani, phir kisi masoom bachi ka haath mangne aana!",
        "match_score": 28,
        "stamp_status": "COMMITMENT ISSUES PEAK PAR ❌",
        "stamp_class": "stamp-rejected"
    },

    # Archetype: Open Source Superstar (Sharma Ji Ka Beta)
    "open_source_chad": {
        "title": "Sharma Ji Ka Beta (Full Shashkay Coder)",
        "gotra": "Top 1% Stargazer & Green Graph Royals",
        "habits": [
            "Subah nashte mein paratha chabaate chabaate PR merge karta hai",
            "Followers itnay hain ke mohallay ka MPA election aaram se jeet jaye",
            "Har tech conference mein speaker wala lanyard pehan ke hero ban ke ghoomta hai"
        ],
        "red_flags": [
            "Bohot zyada mashroof! Honeymoon par bhi laptop khol ke issues triage karega",
            "Nakhray bohot honge, biwi ki baat sunne ke liye issue template submit karne ko kahega",
            "Shaadi ke shor-sharabay mein bhi commit streak tootte nahi dega"
        ],
        "aunty_verdict": "SubhanAllah, MashaAllah! Hazaron stars aur itnay followers! Yeh toh sach mein Sharma ji ka beta nikla! Mohallay ki saari auntiyan iske ghar rishtey le kar pohnchi hui hain. Paisa bhi khoob kama raha hai aur khandaan ki naak bhi oonchi kar di. Larka pakka heera hai, rishta abhi lock karo warna koi aur aunty le uregi!",
        "match_score": 93,
        "stamp_status": "RISHTA 100% PAKKA! 💖",
        "stamp_class": "stamp-verified"
    },

    # Archetype: Sleep-Deprived Night Owl
    "workaholic_vampire": {
        "title": "Raat Ka Coder (Neend Ka Dushman / RedBull Damad)",
        "gotra": "3 AM Deployments & Kali Chai Jamat",
        "habits": [
            "Dopehar 2 bajay aankh khulti hai, raat 3 bajay terminal aag ugalta hai",
            "Suraj ki roshni dekh kar aisi cheekh maarta hai jaise Dracula ho",
            "Sasural walon ki dawat par kone mein baith kar laptop par hotfix pel raha hota hai"
        ],
        "red_flags": [
            "Aankhon ke neeche dark circles itnay hain jaise do black holes ban gaye hon",
            "Subah nashta table par so raha hoga aur raat ko chai ki kettliyan khali karega",
            "Romantic long drive par bhi kahega 'hotspot on karo, prod fat gaya hai'"
        ],
        "aunty_verdict": "Beta ji, raat ke teen bajay kaun production par code push karta hai? Biwi kahegi 'chalo dawat pe chalte hain', yeh aage se bolega 'ek prod incident aag lagaye baitha hai'. Magar dil ka bura nahi hai, mehnat kash banda hai aur biwi ko designer jore zaroor dilaayega. Bas shaadi ke baad timing seedhi karni paregi!",
        "match_score": 58,
        "stamp_status": "CONDITIONAL APPROVAL ⚠️",
        "stamp_class": "stamp-pending"
    },

    # Archetype: Solid Balanced Dev
    "solid_developer": {
        "title": "Sharif Khandani Developer (Sadiq & Ameen Coder)",
        "gotra": "Clean Code & Proper Documentation Jamat",
        "habits": [
            "README theek se likhta hai, tests bhi pass karwata hai (kabhi kabhi)",
            "Office se waqt par nikalta hai, family ko time dene ki poori salahiyat hai",
            "Chai time par thanda hone se pehle table par aa jata hai"
        ],
        "red_flags": [
            "Thoda seedha-saadha aur boring hai, weekends par documentation padhta hai",
            "Chai mein cheeni kam ho toh thoda sa munh phula leta hai",
            "Har mehmaan ko zabardasti Linux ke faiday sunata hai"
        ],
        "aunty_verdict": "MashaAllah, bohot hi suljha hua aur shareef bacha hai! Code bhi saaf suthra hai aur harkatein bhi khandani. Na koi fazool shashkay, na jhooti hawa-baazi. Bas kabhi kabhar Git rebase mein phans kar thoda ghabra jata hai, par humari taraf se rishta poora approve hai!",
        "match_score": 82,
        "stamp_status": "AUNTY APPROVED RISHTA ✅",
        "stamp_class": "stamp-verified"
    }
}


def generate_fallback_roast(profile: dict, repos: list = None) -> dict:
    """
    Intelligent Rule-Matcher in Python with maximum Desi & Pakistani slangs.
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

    # Slang-packed Assets list
    if public_repos > 0:
        customized["assets"] = [
            f"{public_repos} Public Repos (Dahej ka total saamaan)",
            f"{stars} Total Stars (Mohallay mein izzat aur shashkay)",
            f"{followers} Followers vs {following} Following ({'Mashoor Celebrity Coder' if followers > following else 'Sab ko follow karta phirta hai bechara'})",
            f"Kamaai Ka Jugaad: {top_lang} ({'Full nakhray baaz tech' if top_lang == 'JavaScript' else 'Mehnati majdoor coder'})"
        ]
    else:
        customized["assets"] = [
            "0 Public Repos (Ghar ki almaari bilkul khali hai)",
            "0 Stars (Mohallay ke bachon ne bhi like nahi kiya)",
            "Private repos ka bahana (Kehta hai confidential scene hai)",
            "Zero verifiable hunar (Bas baatein hi baatein)"
        ]

    # Adjust score slightly for uniqueness
    bonus = min(15, (stars // 20) + (followers // 50))
    score = base["match_score"] + (bonus if stars > 10 else -bonus)
    customized["match_score"] = min(98, max(8, score))

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
