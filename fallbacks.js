/**
 * Rishta Aunty - Deterministic Fallback & Rule-Based Roast Matrix
 * 
 * Guarantees zero-latency, culturally hilarious, and 100% reliable biodata
 * roasts during live stage demos, even if offline or rate-limited.
 */

const RISHTA_FALLBACKS = {
  // Edge Case: Absolute Zero Repos
  zeroRepos: {
    title: "M.Sc Ghost Developer (Khali Haath)",
    gotra: "Incognito Committer Qabeela",
    habits: [
      "Din bhar Twitter aur LinkedIn par tech debate karta hai",
      "README bhi generate karne ke liye ChatGPT ka intezar karta hai",
      "Ghar walon ko bola hai 'stealth startup' chala raha hai"
    ],
    redFlags: [
      "Profile par ek bhi green tile nahi hai (Dil bhi khali hai)",
      "Portfolio website ke naam par 'Coming Soon' laga rakha hai",
      "Zero commits, 100% confidence"
    ],
    auntyVerdict: "Haye tauba! Zero public repos?! Beta, khali biodata le kar rishta dhoondne nikal pare ho? Ladki walon ne poochha 'beta kya karta hai', toh kya bolenge 'inspect element karta hai'? Pehle ek chhota sa 'Hello World' toh push kar lo, phir hum kisi ko chai par bulayein!",
    matchScore: 12,
    stampStatus: "RISHTA KHARIJ ❌",
    stampClass: "stamp-rejected"
  },

  // Edge Case: 1 to 3 Repos (Barely Started)
  noviceRepos: {
    title: "Junior Tutorial Inmate (Abhi seekh raha hai)",
    gotra: "Udemy Certified Sect",
    habits: [
      "Todo app bana kar khud ko Full Stack architect samajhta hai",
      "Commit message mein sirf 'first commit' aur 'fixed bug' likhta hai",
      "Ammi ko kehta hai 'Agla Sundar Pichai main hi hoon'"
    ],
    redFlags: [
      "Saare projects YouTube video dekh kar line-by-line copy kiye hain",
      "Git push ke baad dua maangta hai ke conflict na aaye",
      "CSS align center karne ke liye 3 ghante lagata hai"
    ],
    auntyVerdict: "Aray beta ji, do repo bana kar rishte ke bazaar mein entry marli? Ek Todo App aur ek Calculator se ghar nahi chalta! Magar chalo, shauk toh hai bachay ko. Ladki walon ko bolenge 'thoda sa fixing baki hai, update ho jayega'.",
    matchScore: 38,
    stampStatus: "LADKI WALAY SOCHENGAY ⚠️",
    stampClass: "stamp-pending"
  },

  // Edge Case: Fork Hoarder (> 50% repos are forks)
  forkHoarder: {
    title: "Master of Doosron Ka Code (Open Source Chor)",
    gotra: "Ctrl+C Ctrl+V Khandaan",
    habits: [
      "Har trending library ko bina soche fork kar leta hai",
      "Fork karke star dena bhool jata hai",
      "Bio mein 'Contributor to Kubernetes' likha hai (bas typo fix kiya tha)"
    ],
    redFlags: [
      "Apna original code do line ka nahi hai, baki sab borrowed glory",
      "Rishte mein dahej bhi doosron se maang kar dikhayega",
      "Git clone karke file rename karke upload karta hai"
    ],
    auntyVerdict: "Tauba tauba! Itnay saare forked repos?! Beta, doosron ki mehnat ko apna rishta biodata bana kar pesh kar rahe ho? Yeh toh aisi baat hui ke parosi ki gaari ke aage kharay ho kar tasveer khinchwa li! Original kaam kahan hai?",
    matchScore: 29,
    stampStatus: "RISHTA KHARIJ ❌",
    stampClass: "stamp-rejected"
  },

  // Archetype: JavaScript / TypeScript Overloader
  javascriptAddict: {
    title: "Senior Framework Hopper (npm install ka badshah)",
    gotra: "Node_Modules Bhari Gotra",
    habits: [
      "Har naye hafte naya JS framework seekhne lag jata hai",
      "Node_modules folder itna bhaari hai ke hard drive cheekhein maar rahi hai",
      "Shaadi ke card par bhi TypeScript ke types declare karega"
    ],
    redFlags: [
      "Commitment issues hain! React se Next.js, Next se Remix, kahin tikta hi nahi",
      "Dark mode toh add kar liya, par functionality aadhi tooti hui hai",
      "Chai garam karne ke bajaye 'Bun is faster than Node' par larta hai"
    ],
    auntyVerdict: "Beta bohot tez hai, par iske commitment par shaq hai! Kal React pasand tha, aaj Svelte pe fida hai, parso kisi aur pe chala jayega. Biwi se bolay ga 'jaan, let's refactor our marriage into microservices'. Thoda thehrav lao beta zindagi mein!",
    matchScore: 47,
    stampStatus: "CONDITIONAL MATCH ⚠️",
    stampClass: "stamp-pending"
  },

  // Archetype: Python / AI Enthusiast
  pythonAIFan: {
    title: "Self-Styled AI Guru (Prompt Engineer Sahib)",
    gotra: "Jupyter Notebook Caste",
    habits: [
      "Pura din `import torch` aur `import openai` ke khwaab dekhta hai",
      "Rishta proposal likhne ke liye bhi Claude aur ChatGPT use kiya hai",
      "GPU heating par roti garam karne ki koshish karta hai"
    ],
    redFlags: [
      "Code chalne se pehle 4 GB weights download karta hai",
      "Bina LLM ke ek for loop nahi likh sakta",
      "Ghar ka AC band karwa ke mining rig chala rakhi hai"
    ],
    auntyVerdict: "Wah bhai wah! Beta AI ka shauqeen hai. Bio mein likha hai 'Machine Learning Engineer', par saari files `test_final_v2_really_final.ipynb` hain! Chalo kam az kam shaadi ke baad sasural walon ki tasveerein toh enhance karke de dega.",
    matchScore: 61,
    stampStatus: "RISHTA UNDER REVIEW 📜",
    stampClass: "stamp-pending"
  },

  // Archetype: C++ / Rust / Systems Dev
  systemsPurist: {
    title: "Memory Leak Inspector & Borrow Checker Devotee",
    gotra: "Low-Level Aristocracy",
    habits: [
      "Baat baat par bolta hai 'Rust is memory safe, unlike our society'",
      "Shaadi ke contracts ko compile-time check karna chahta hai",
      "Subah 5 bajay uth kar terminal ke font customize karta hai"
    ],
    redFlags: [
      "Biwi ne paani maanga toh pointer reference de dega",
      "Zero social skills, sirf StackOverflow par logon ko galat sabit karta hai",
      "Zindagi bhar garbage collection ke khilaf larta rahega"
    ],
    auntyVerdict: "MashaAllah dimaag toh bohot tez hai, par dil kahan hai? Is se baat karo toh kehta hai 'lifetime annotations mismatch'. Arre beta, hum yahan lifetime partner dhoond rahe hain, compiler warnings nahi! Par chalo package acha mil jayega.",
    matchScore: 68,
    stampStatus: "KHANDAANI PASAND 💍",
    stampClass: "stamp-verified"
  },

  // Archetype: Abandoned Projects Specialist (Lots of repos, 0 stars, low activity)
  abandonedRepoKing: {
    title: "Cemetery of Incomplete Startups Founder",
    gotra: "Domain Name Kharidar Biradari",
    habits: [
      "Har doosre mahine naya domain khareedta hai, par site kabhi launch nahi hoti",
      "Har repo mein sirf initial commit aur .gitignore hota hai",
      "Kehta hai 'bhai market ready nahi thi is product ke liye'"
    ],
    redFlags: [
      "Starting things: 100%. Finishing things: 0%",
      "Ghar ka bulb kharab ho toh 4 mahine tak issue open rakhega",
      "Commit streak aisi hai jaise Eid ka chaand"
    ],
    auntyVerdict: "Beta has 47 repos, 46 abandoned! Shuru bohot josh se karta hai, phir do din baad bhool jata hai. Kal ko shaadi karke bolega 'I have pivoted to single life'. Pehle ek project pura karke production pe daalo, phir shaadi ke mandap/nikah mein aana!",
    matchScore: 33,
    stampStatus: "RISHTA KHARIJ ❌",
    stampClass: "stamp-rejected"
  },

  // Archetype: High Star / High Follower Open Source Star
  openSourceChad: {
    title: "Sharma Ji Ka Beta (GitHub Sitarah)",
    gotra: "Top 1% Stargazer Royals",
    habits: [
      "Chai peete peete pull request merge karta hai",
      "Followers itnay hain ke mohallay ka council election jeet jaye",
      "Har conference mein speaker badge pehan ke ghoomta hai"
    ],
    redFlags: [
      "Bohot zyada busy! Honeymoon par bhi GitHub issues triage karega",
      "Nakhray bohot honge, biwi ki baat sunne ke liye issue template mangega",
      "Shaadi ke shor mein bhi commit streak tootte nahi dega"
    ],
    auntyVerdict: "SubhanAllah! 1000+ stars aur itnay followers! Yeh toh Sharma ji ka beta nikla! Saari auntyan iske peeche pari hain. Magar daal mein kuch kaala toh nahi? Itna online rehta hai toh rishte walon ko waqt kab dega? Chalo rishta pakka karte hain, ladka kamao hai!",
    matchScore: 89,
    stampStatus: "RISHTA PAKKA! 💖",
    stampClass: "stamp-verified"
  },

  // Archetype: Workaholic Ghost (Commits at 3 AM / Weekends)
  workaholicVampire: {
    title: "Raat Ka Coder (Sleep Deprived Damad)",
    gotra: "Chai & RedBull Devotees",
    habits: [
      "Subah 11 bajay aankh khulti hai, raat 3 bajay terminal garam hota hai",
      "Sunlight dekh kar aisi aankein band karta hai jaise Dracula ho",
      "Dawat par baith kar laptop par hotfix deploy karta hai"
    ],
    redFlags: [
      "BP high rehta hai, ankhon ke neeche dark circles permanent hain",
      "Sasural walay subah nashta karein toh yeh so raha hoga",
      "Romantic dates par Wi-Fi hotspot dhoondta phirega"
    ],
    auntyVerdict: "Beta ji, raat ke teen bajay kaun code push karta hai? Biwi kahegi 'chalo dawat pe chalte hain', yeh bolega 'ek prod incident solve karke aaya'. Magar mehnti bohot hai, biwi ko shopping zaroor karwayega!",
    matchScore: 54,
    stampStatus: "SOCH BICHAAR JARI ⚠️",
    stampClass: "stamp-pending"
  },

  // Archetype: General Solid Mid-Level Dev
  solidDeveloper: {
    title: "Sharif Khandani Developer (Sadiq & Ameen Coder)",
    gotra: "Clean Code Jamat",
    habits: [
      "README theek se likhta hai, documentation bhi achi hai",
      "Tests run karta hai (kabhi kabhi pass bhi hote hain)",
      "Office se waqt par nikalta hai, family man banne ki salahiyat hai"
    ],
    redFlags: [
      "Thoda boring hai, weekends par documentation padhta hai",
      "Chai thandi hone par thoda chirchira ho jata hai",
      "Linux install karne ki advice har mehfil mein deta hai"
    ],
    auntyVerdict: "MashaAllah bohot suljha hua bacha hai. Code bhi saaf hai aur harkatein bhi sharifana. Na koi fazool show-off, na empty promises. Bas kabhi kabhi Git rebase mein phans jata hai, par hum rishta approve karte hain!",
    matchScore: 78,
    stampStatus: "RISHTA APPROVED ✅",
    stampClass: "stamp-verified"
  }
};

/**
 * Intelligent Rule-Matcher that inspects actual profile metrics
 * and selects the funniest and most accurate fallback roast.
 */
function generateFallbackRoast(profile, repos = []) {
  const publicRepos = profile.public_repos || 0;
  const followers = profile.followers || 0;
  const following = profile.following || 0;
  const stars = repos.reduce((acc, r) => acc + (r.stargazers_count || 0), 0);
  const forksCount = repos.filter(r => r.fork).length;
  const forkRatio = repos.length > 0 ? (forksCount / repos.length) : 0;
  
  // Calculate language breakdown
  const langCounts = {};
  repos.forEach(r => {
    if (r.language) {
      langCounts[r.language] = (langCounts[r.language] || 0) + 1;
    }
  });
  const topLang = Object.keys(langCounts).sort((a, b) => langCounts[b] - langCounts[a])[0] || 'Plain Text';

  // Determine candidate match
  let baseTemplate;

  if (publicRepos === 0) {
    baseTemplate = RISHTA_FALLBACKS.zeroRepos;
  } else if (publicRepos <= 2) {
    baseTemplate = RISHTA_FALLBACKS.noviceRepos;
  } else if (forkRatio >= 0.55 && repos.length >= 4) {
    baseTemplate = RISHTA_FALLBACKS.forkHoarder;
  } else if (stars > 250 || followers > 300) {
    baseTemplate = RISHTA_FALLBACKS.openSourceChad;
  } else if (['JavaScript', 'TypeScript'].includes(topLang) && publicRepos > 12) {
    baseTemplate = RISHTA_FALLBACKS.javascriptAddict;
  } else if (['Python', 'Jupyter Notebook'].includes(topLang)) {
    baseTemplate = RISHTA_FALLBACKS.pythonAIFan;
  } else if (['Rust', 'C++', 'C', 'Go'].includes(topLang)) {
    baseTemplate = RISHTA_FALLBACKS.systemsPurist;
  } else if (publicRepos >= 20 && stars < 5) {
    baseTemplate = RISHTA_FALLBACKS.abandonedRepoKing;
  } else if (followers < 5 && following > 80) {
    baseTemplate = RISHTA_FALLBACKS.workaholicVampire;
  } else {
    baseTemplate = RISHTA_FALLBACKS.solidDeveloper;
  }

  // Deep clone to inject customized stats
  const customized = JSON.parse(JSON.stringify(baseTemplate));

  // Personalize the verdict with their actual numbers
  const candidateName = profile.name || profile.login || "Beta";
  customized.candidateName = candidateName;
  customized.topLanguage = topLang;
  customized.totalStars = stars;
  customized.publicRepos = publicRepos;
  customized.followers = followers;
  customized.forkRatioPercent = Math.round(forkRatio * 100);

  // Dynamic customization based on real stats
  if (publicRepos > 0) {
    customized.assets = [
      `${publicRepos} Public Repositories (Dahej ki list)`,
      `${stars} Total Stars (Mohallay ki izzat)`,
      `${followers} Followers vs ${following} Following (${followers > following ? 'Mashoor Shakhsiyat' : 'Sab ko follow karta phirta hai'})`,
      `Primary Tech: ${topLang} (${topLang === 'JavaScript' ? 'Nakhray baray hain' : 'Mehnat kash insaan'})`
    ];
  } else {
    customized.assets = [
      "0 Public Repositories (Ghar ka cupboard khali hai)",
      "0 Stars (Kisi ne like nahi kiya)",
      "Private repos ka bahana (Kehta hai confidential hai)",
      "Zero verifiable skills"
    ];
  }

  // Adjust score slightly based on stars and followers for uniqueness
  const bonus = Math.min(15, Math.floor(stars / 20) + Math.floor(followers / 50));
  customized.matchScore = Math.min(96, Math.max(12, customized.matchScore + (stars > 10 ? bonus : -bonus)));

  return customized;
}

// Support both browser global and Node module
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { RISHTA_FALLBACKS, generateFallbackRoast };
}
