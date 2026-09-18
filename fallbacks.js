/**
 * Rishta Aunty - Deterministic Fallback & Rule-Based Roast Matrix (JS)
 * Packed with authentic Pakistani & Desi slangs, witty burns, and matrimonial banter.
 */

const RISHTA_FALLBACKS = {
  zeroRepos: {
    title: "M.Sc Ghost Developer (Khali Haath Phannay Khan)",
    gotra: "Incognito Topi Drama Qabeela",
    habits: [
      "Din bhar LinkedIn aur Twitter par lambi lambi chussain maarta hai",
      "Ghar walon ko jhoot bola hua hai ke 'Silicon Valley stealth startup' chala raha hoon",
      "README generator se bhi pehle ChatGPT ke aage ro deta hai"
    ],
    redFlags: [
      "GitHub profile aisi saaf hai jaise raid parne ke baad office!",
      "Portfolio ke naam par 4 saal se 'Under Construction' ka board latkaya hua hai",
      "Zero repos, zero commits, par attitude aisa jaise Elon Musk ka secret chacha ho"
    ],
    auntyVerdict: "Haye tauba lakh di laanat! Zero public repos?! Beta, khali biodata le kar rishta dhoondne nikal pare ho? Ladki walay ghar aayein aur poochhein 'damad ji kya karte hain', toh kya bolenge 'bhai inspect element mein hoshiyari dikhata hai'? Khuda ka khauf karo, pehle ek chhota sa 'Hello World' toh push kar aao, warna Phupho ne pehle round mein hi rishte ka scene off kar dena hai!",
    matchScore: 9,
    stampStatus: "SCENE OFF HAI ❌ (RISHTA KHARIJ)",
    stampClass: "stamp-rejected"
  },

  noviceRepos: {
    title: "Pappu Tutorial Inmate (Abhi Chhota Bacha Hai)",
    gotra: "10-Minute Udemy Shaukeen Baradri",
    habits: [
      "Ek Todo app aur ek Calculator bana kar mohallay mein shashkay maar raha hai",
      "Commit message mein 'first commit', 'final fix', 'final fix 2 pakka' likhta hai",
      "Ammi ko kehta hai 'agla Bill Gates main hi hoon, bas 500 rupay ka easypaisa kar dein'"
    ],
    redFlags: [
      "YouTube tutorial pause kar karke line-by-line copy paste marta hai",
      "Git push karte waqt aisi duayein mangta hai jaise matric ka result aa raha ho",
      "Div ko center karne ke chakkar mein pura hafta depression mein guzaar deta hai"
    ],
    auntyVerdict: "Aray beta ji, do repo bana kar rishte ke bazaar mein itna roab? Ek Todo list aur ek silly calculator se biwi ke nakhray uthao ge? Magar chalo, kam az kam larka koshish toh kar raha hai. Ladki walon ko bolenge 'abhi junior level ka jugaadu hai, shaadi ke baad thoda aur polish ho jayega'!",
    matchScore: 35,
    stampStatus: "PHUPHO KO SAKHT AITRAZ ⚠️",
    stampClass: "stamp-pending"
  },

  forkHoarder: {
    title: "Master of Doosron Ka Code (Open Source Chor / Jugaad King)",
    gotra: "Ctrl+C Ctrl+V Khandaan",
    habits: [
      "Trending tab dekhte hi har kisi ka repo bina sharam ke fork maar leta hai",
      "Doosron ka project fork karke bas README mein apna naam chipka deta hai",
      "Bio mein likha hai 'Core Contributor' (bas ek comma theek kiya tha)"
    ],
    redFlags: [
      "Apna original code dhoondne ke liye forensic audit karwana parega",
      "Shaadi mein dahej bhi parosiyon ke ghar se mang kar show-off karega",
      "Har baat pe mamoo banane ki aadat hai, code mein bhi aur rishtey mein bhi"
    ],
    auntyVerdict: "Tauba tauba aisi chori chakari! Itnay saare forked repos?! Beta, doosron ki mehnat ko apna rishta biodata bana kar shashkay dikha rahe ho? Yeh toh bilkul aisi baat hui ke parosi ki Mercedes ke aage kharay ho kar rishte ki tasveer khinchwa li! Original code kidhar hai jani? Abba nahi manenge aisi topi drama par!",
    matchScore: 26,
    stampStatus: "TOPI DRAMA EXPOSED ❌",
    stampClass: "stamp-rejected"
  },

  javascriptAddict: {
    title: "Senior Framework Hopper (npm install ka Nashai)",
    gotra: "Bhari Bhari Node_Modules Biradari",
    habits: [
      "Har mangalwar naya JS framework dhoond ke purana code kachre mein phenk deta hai",
      "Node_modules itna heavy hai ke hard drive cheekhein maar rahi hai",
      "Shaadi ke nikaah naame par bhi TypeScript ke strict types declare karne ki zid karega"
    ],
    redFlags: [
      "Commitment issues peak level par hain! Aaj React, kal Next.js, parso Remix, kahin tikta hi nahi",
      "UI mein dark mode aur glowing buttons toh daal diye, par login button dabao toh 500 error deta hai",
      "Chai garam karne jao toh bolta hai 'Bun is 10x faster than traditional kettle, bro'"
    ],
    auntyVerdict: "Haye mera BP! Beta dimagh ka tez hai par iske commitment par shaq hai! Aaj keh raha hai React pasand hai, kal bolega Svelte pe dil aa gaya. Kal ko biwi se kahega 'jaan, humara rishta thoda lag kar raha hai, let me refactor our marriage into microservices'. Thoda thehrav lao zindagi mein beta, har cheez npm update se solve nahi hoti!",
    matchScore: 48,
    stampStatus: "THODA SOCH VICHAR BAKI ⚠️",
    stampClass: "stamp-pending"
  },

  pythonAIFan: {
    title: "Self-Styled AI Guru (Prompt Engineer Phannay Khan)",
    gotra: "Jupyter Notebook & GPU Frying Jamat",
    habits: [
      "Din raat `import torch` aur `import openai` ke khwaab dekhta rehta hai",
      "Rishta proposal aur love letter likhne ke liye bhi Claude 3.5 Sonnet ka sahara liya hai",
      "Mining rig aur GPU heating par roti garam karne ka jugaad lagata hai"
    ],
    redFlags: [
      "Code run karne jao toh pehle 8 GB weights aur huggingface models download karta hai",
      "Agar internet band ho jaye toh ek simple 'for loop' likhte huye pasine chhoot jate hain",
      "Har conversation mein 'AI will replace humans' bol ke rishtedaaron ko bore karta hai"
    ],
    auntyVerdict: "Wah bhai wah! Beta AI ka bada ustaad banta hai! Bio mein likha hai 'Machine Learning Visionary', par saari files `final_notebook_real_final_v3_copy.ipynb` hain! Chalo kam az kam shaadi ke baad sasural walon ki puraani tasveerein 4K mein enhance karke de dega. Biryani mein elaichi jaisa thoda ajeeb hai, par kamaai theek thak kar lega!",
    matchScore: 63,
    stampStatus: "RISHTA UNDER INVESTIGATION 📜",
    stampClass: "stamp-pending"
  },

  systemsPurist: {
    title: "Memory Leak Inspector & Low-Level Aristocrat",
    gotra: "Borrow Checker & Segmentation Fault Biradari",
    habits: [
      "Har baat par be-tukka dialogue maarta hai: 'Rust is memory safe, unlike our society'",
      "Shaadi ke agreement ko compile-time verify karne ke chakkar mein dawat miss kar deta hai",
      "Subah 5 bajay uth kar terminal ke NeoVim plugins customize karta rehta hai"
    ],
    redFlags: [
      "Biwi paani maang le toh pointer reference pass kar dega",
      "Zero social skills! Khaandani shaadiyon mein baith kar logon ko Linux install karne ke bhashan deta hai",
      "Zindagi bhar Garbage Collector ke khilaf jahaad karta rahega"
    ],
    auntyVerdict: "MashaAllah dimaag toh Einstein jaisa hai, par dil kahan hai beta? Is se rishte ki baat karo toh aage se kehta hai 'lifetime annotations mismatch'. Arre bhai, hum yahan lifetime partner dhoond rahe hain, koi compiler error nahi! Par chalo, package acha hai aur larka sharif hai, bas romantic dates par terminal band rakhne ka waada lena parega!",
    matchScore: 72,
    stampStatus: "KHANDAANI APPROVED RISHTA 💍",
    stampClass: "stamp-verified"
  },

  abandonedRepoKing: {
    title: "Cemetery of Incomplete Startups (Khwaboon Ka Saudagar)",
    gotra: "Domain Name Kharidar & Abandoner Sect",
    habits: [
      "Har doosre jummay naya .com domain khareedta hai, par site kabhi live nahi hoti",
      "47 repos banaye hain, 46 par sirf initial commit aur ek tuta hua README hai",
      "Har kisi ko kehta hai 'bhai market ready nahi thi mere revolutionary product ke liye'"
    ],
    redFlags: [
      "Starting things: 1000% Josh. Finishing things: Zero battey sannaata!",
      "Ghar ka pankha kharab ho jaye toh 6 mahine tak GitHub issue open rakhta hai",
      "Commit streak aisi hai jaise Karachi mein bijli ki supply (kabhi aayi, kabhi gayi)"
    ],
    auntyVerdict: "Beta has 47 repos, 46 abandoned! Shuru bohot josh-o-kharoosh se karta hai, phir do din baad hawa nikal jaati hai! Kal ko shaadi karke do haftay baad bolega 'I have pivoted to bachelor life again'. Pehle ek project mukammal karke production par deploy karo jani, phir kisi masoom bachi ka haath mangne aana!",
    matchScore: 28,
    stampStatus: "COMMITMENT ISSUES PEAK PAR ❌",
    stampClass: "stamp-rejected"
  },

  openSourceChad: {
    title: "Sharma Ji Ka Beta (Full Shashkay Coder)",
    gotra: "Top 1% Stargazer & Green Graph Royals",
    habits: [
      "Subah nashte mein paratha chabaate chabaate PR merge karta hai",
      "Followers itnay hain ke mohallay ka MPA election aaram se jeet jaye",
      "Har tech conference mein speaker wala lanyard pehan ke hero ban ke ghoomta hai"
    ],
    redFlags: [
      "Bohot zyada mashroof! Honeymoon par bhi laptop khol ke issues triage karega",
      "Nakhray bohot honge, biwi ki baat sunne ke liye issue template submit karne ko kahega",
      "Shaadi ke shor-sharabay mein bhi commit streak tootte nahi dega"
    ],
    auntyVerdict: "SubhanAllah, MashaAllah! Hazaron stars aur itnay followers! Yeh toh sach mein Sharma ji ka beta nikla! Mohallay ki saari auntiyan iske ghar rishtey le kar pohnchi hui hain. Paisa bhi khoob kama raha hai aur khandaan ki naak bhi oonchi kar di. Larka pakka heera hai, rishta abhi lock karo warna koi aur aunty le uregi!",
    matchScore: 93,
    stampStatus: "RISHTA 100% PAKKA! 💖",
    stampClass: "stamp-verified"
  },

  workaholicVampire: {
    title: "Raat Ka Coder (Neend Ka Dushman / RedBull Damad)",
    gotra: "3 AM Deployments & Kali Chai Jamat",
    habits: [
      "Dopehar 2 bajay aankh khulti hai, raat 3 bajay terminal aag ugalta hai",
      "Suraj ki roshni dekh kar aisi cheekh maarta hai jaise Dracula ho",
      "Sasural walon ki dawat par kone mein baith kar laptop par hotfix pel raha hota hai"
    ],
    redFlags: [
      "Aankhon ke neeche dark circles itnay hain jaise do black holes ban gaye hon",
      "Subah nashta table par so raha hoga aur raat ko chai ki kettliyan khali karega",
      "Romantic long drive par bhi kahega 'hotspot on karo, prod fat gaya hai'"
    ],
    auntyVerdict: "Beta ji, raat ke teen bajay kaun production par code push karta hai? Biwi kahegi 'chalo dawat pe chalte hain', yeh aage se bolega 'ek prod incident aag lagaye baitha hai'. Magar dil ka bura nahi hai, mehnat kash banda hai aur biwi ko designer jore zaroor dilaayega. Bas shaadi ke baad timing seedhi karni paregi!",
    matchScore: 58,
    stampStatus: "CONDITIONAL APPROVAL ⚠️",
    stampClass: "stamp-pending"
  },

  solidDeveloper: {
    title: "Sharif Khandani Developer (Sadiq & Ameen Coder)",
    gotra: "Clean Code & Proper Documentation Jamat",
    habits: [
      "README theek se likhta hai, tests bhi pass karwata hai (kabhi kabhi)",
      "Office se waqt par nikalta hai, family ko time dene ki poori salahiyat hai",
      "Chai time par thanda hone se pehle table par aa jata hai"
    ],
    redFlags: [
      "Thoda seedha-saadha aur boring hai, weekends par documentation padhta hai",
      "Chai mein cheeni kam ho toh thoda sa munh phula leta hai",
      "Har mehmaan ko zabardasti Linux ke faiday sunata hai"
    ],
    auntyVerdict: "MashaAllah, bohot hi suljha hua aur shareef bacha hai! Code bhi saaf suthra hai aur harkatein bhi khandani. Na koi fazool shashkay, na jhooti hawa-baazi. Bas kabhi kabhar Git rebase mein phans kar thoda ghabra jata hai, par humari taraf se rishta poora approve hai!",
    matchScore: 82,
    stampStatus: "AUNTY APPROVED RISHTA ✅",
    stampClass: "stamp-verified"
  }
};

function _detectLikelyFemale(name) {
  if (!name) return false;
  const first = name.trim().split(/\s+/)[0].toLowerCase();

  const feminineNames = new Set([
    "fatima", "ayesha", "aisha", "zainab", "maryam", "hira", "sana", "sara", "sarah",
    "mahnoor", "noor", "amna", "bushra", "rabia", "huma", "nimra", "iqra", "kinza",
    "arooj", "mehwish", "sidra", "anum", "laiba", "naila", "maria", "samia", "saima",
    "sumaya", "zunaira", "aleena", "alina", "anaya", "dua", "emaan", "esha", "fariha",
    "hafsa", "hamna", "hooria", "huriya", "javeria", "khadija", "komal", "maira",
    "malika", "minahil", "muneeba", "nadia", "najma", "palwasha", "rimsha", "rida",
    "rukhsar", "sadia", "sahar", "sawera", "shabnam", "shazia", "sobia", "syeda",
    "tahira", "tania", "uzma", "wardah", "yumna", "zahra", "zara", "zoha",
    "emily", "emma", "olivia", "sophia", "jessica", "jennifer", "amanda", "ashley",
    "elizabeth", "katherine", "kate", "anna", "lisa", "mary", "patricia", "linda",
    "nancy", "karen", "betty", "helen", "sandra", "donna", "carol", "ruth", "sharon",
    "michelle", "laura", "nicole", "rachel", "rebecca", "samantha", "catherine",
    "christine", "amy", "deborah", "stephanie", "diana", "andrea", "natalie", "julia",
    "victoria", "priya", "anita", "sunita", "neha", "pooja", "shreya", "divya", "kavya",
    "riya", "meera", "megha", "tara", "nisha", "swati", "deepa", "jyoti", "rekha"
  ]);

  const masculineNames = new Set([
    "ali", "ahmed", "muhammad", "mohammad", "hussain", "hassan", "hamza", "bilal",
    "usman", "umar", "omar", "asad", "fahad", "faisal", "adnan", "kamran", "imran",
    "kashif", "khalid", "tariq", "wahab", "waqar", "zubair", "junaid", "danish",
    "raja", "rana", "arif", "amir", "aamir", "raza", "shahid", "shoaib", "saad",
    "talha", "usama", "yasir", "zeeshan", "nabeel", "noman", "owais", "qasim",
    "rehan", "saqib", "tahir", "taimur", "wali", "zahid", "zain", "john", "james",
    "robert", "michael", "william", "david", "richard", "joseph", "thomas", "charles",
    "daniel", "matthew", "anthony", "mark", "donald", "steven", "andrew", "paul",
    "joshua", "kenneth", "kevin", "brian", "george", "timothy", "ronald", "edward",
    "abdul", "hayy", "abdulhayy", "linus", "torvalds"
  ]);

  if (feminineNames.has(first)) return true;
  if (masculineNames.has(first)) return false;
  if (first.endsWith("ina") || first.endsWith("eena") || first.endsWith("isha") || first.endsWith("iya") || first.endsWith("aya")) return true;
  return false;
}

function _genderSwapText(text) {
  const swaps = [
    ["Sharma Ji Ka Beta", "Sharma Ji Ki Beti"],
    ["Sharma ji ka beta", "Sharma ji ki beti"],
    ["Ladki walay", "Larke walay"],
    ["ladki walay", "larke walay"],
    ["Ladki walon", "Larke walon"],
    ["ladki walon", "larke walon"],
    ["damad ji", "bahu ji"],
    ["Damad", "Bahu"],
    ["damad", "bahu"],
    [" larka ", " larki "],
    [" Larka ", " Larki "],
    ["Pappu", "Guddi"],
    [" beta ", " beti "],
    [" Beta ", " Beti "],
    ["Beta,", "Beti,"],
    ["beta,", "beti,"],
    ["Beta!", "Beti!"],
    ["beta!", "beti!"],
    ["Beta.", "Beti."],
    ["beta.", "beti."],
    [" biwi ", " shohar "],
    [" Biwi ", " Shohar "],
    ["biwi ke", "shohar ke"],
    ["Biwi ke", "Shohar ke"],
    ["biwi ko", "shohar ko"],
    ["Biwi ko", "Shohar ko"],
    ["biwi ki", "shohar ki"],
    ["Biwi ki", "Shohar ki"],
    [" chacha ", " khala "],
    [" Chacha ", " Khala "],
    [" bhai ", " baji "],
    [" Bhai ", " Baji "],
    ["karta hai", "karti hai"],
    ["kehta hai", "kehti hai"],
    ["maarta hai", "maarti hai"],
    ["karta phirta", "karti phirti"],
    ["raha hai", "rahi hai"],
    ["bola hua", "boli hui"],
    ["deta hai", "deti hai"],
    ["nikla", "nikli"],
    ["ustaad", "ustaani"],
    ["Ustaad", "Ustaani"],
    [" banda ", " bandi "],
    [" Banda ", " Bandi "],
    ["RedBull Damad", "RedBull Bahu"],
  ];
  for (const [old, rep] of swaps) {
    text = text.split(old).join(rep);
  }
  return text;
}

function _applyGenderSwap(data) {
  for (const key of ["title", "gotra", "auntyVerdict"]) {
    if (data[key] && typeof data[key] === "string") {
      data[key] = _genderSwapText(data[key]);
    }
  }
  for (const key of ["habits", "redFlags"]) {
    if (Array.isArray(data[key])) {
      data[key] = data[key].map(item => _genderSwapText(item));
    }
  }
  return data;
}

function generateFallbackRoast(profile, repos = []) {
  const publicRepos = profile.public_repos || 0;
  const followers = profile.followers || 0;
  const following = profile.following || 0;
  const stars = repos.reduce((acc, r) => acc + (r.stargazers_count || 0), 0);
  const forksCount = repos.filter(r => r.fork).length;
  const forkRatio = repos.length > 0 ? (forksCount / repos.length) : 0;
  
  const langCounts = {};
  repos.forEach(r => {
    if (r.language) langCounts[r.language] = (langCounts[r.language] || 0) + 1;
  });
  const topLang = Object.keys(langCounts).sort((a, b) => langCounts[b] - langCounts[a])[0] || 'Plain Text';

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

  const customized = JSON.parse(JSON.stringify(baseTemplate));
  let candidateName = profile.name || profile.login || "Beta";
  const isFemale = _detectLikelyFemale(candidateName);

  if (isFemale) {
    candidateName = candidateName !== "Beta" ? candidateName : "Beti";
    _applyGenderSwap(customized);
  }

  customized.candidateName = candidateName;
  customized.topLanguage = topLang;
  customized.totalStars = stars;
  customized.publicRepos = publicRepos;
  customized.followers = followers;
  customized.forkRatioPercent = Math.round(forkRatio * 100);

  if (publicRepos > 0) {
    customized.assets = [
      `${publicRepos} Public Repos (${isFemale ? 'Jahez' : 'Dahej'} ka total saamaan)`,
      `${stars} Total Stars (Mohallay mein izzat aur shashkay)`,
      `${followers} Followers vs ${following} Following (${followers > following ? 'Mashoor Celebrity Coder' : 'Sab ko follow ' + (isFemale ? 'karti phirti hai bechari' : 'karta phirta hai bechara')})`,
      `Kamaai Ka Jugaad: ${topLang} (${topLang === 'JavaScript' ? 'Full nakhray baaz tech' : 'Mehnati majdoor coder'})`
    ];
  } else {
    customized.assets = [
      "0 Public Repos (Ghar ki almaari bilkul khali hai)",
      "0 Stars (Mohallay ke bachon ne bhi like nahi kiya)",
      `Private repos ka bahana (${isFemale ? 'Kehti' : 'Kehta'} hai confidential scene hai)`,
      "Zero verifiable hunar (Bas baatein hi baatein)"
    ];
  }

  const bonus = Math.min(15, Math.floor(stars / 20) + Math.floor(followers / 50));
  const score = baseTemplate.matchScore + (stars > 10 ? bonus : -bonus);
  customized.matchScore = Math.min(98, Math.max(8, score));

  return customized;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { RISHTA_FALLBACKS, generateFallbackRoast };
}

