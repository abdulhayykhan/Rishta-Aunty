/**
 * Rishta Aunty - Main Application Controller
 * Handles GitHub Public API, Gemini AI / Dual-Tier Fallback,
 * Dynamic Biodata Card Rendering, and Image Export.
 */

// Aunty's loading dialogue cycle (Packed with authentic Pakistani/Desi slangs)
const AUNTY_QUIPS = [
  "Chashma theek kar rahi hoon, lagta hai chuss maari hui hai code mein...",
  "47 repos aur 46 abandoned? Haye mera BP! Beta toh pura hawa-baaz nikla!",
  "Kundali match kar rahi hoon... Par lagta hai Phupho ne pehle hi kaan bhar diye hain!",
  "GitHub par itnay shashkay, par ghar mein ek anda fry nahi kar sakta!",
  "Scene off lag raha hai beta, khali biodata dekh kar ammi behosh ho gayi hain...",
  "Git commit streak aisi hai jaise Karachi mein bijli ka schedule (kabhi aayi kabhi gayi)!",
  "Sasural ki dawat par baith kar prod incident solve karne wala damad nahi chahiye!"
];

let quoteInterval = null;
let currentRoastData = null;

// DOM Elements
const roastForm = document.getElementById('roast-form');
const usernameInput = document.getElementById('username-input');
const submitBtn = document.getElementById('submit-btn');
const loadingBox = document.getElementById('loading-box');
const loadingQuote = document.getElementById('loading-quote');
const cardSection = document.getElementById('card-section');
const biodataCard = document.getElementById('biodata-card');
const toast = document.getElementById('toast');
const toastText = document.getElementById('toast-text');

// Action Buttons
const btnDownload = document.getElementById('btn-download');
const btnCopy = document.getElementById('btn-copy');
const btnTwitter = document.getElementById('btn-twitter');
const btnWhatsapp = document.getElementById('btn-whatsapp');

// Quick Pick Chips
document.querySelectorAll('.chip').forEach(chip => {
  chip.addEventListener('click', () => {
    const user = chip.getAttribute('data-user');
    usernameInput.value = user;
    handleSearch(user);
  });
});

// Form Submit Handler
roastForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = usernameInput.value.trim().replace(/^@/, '');
  if (username) {
    handleSearch(username);
  }
});

/**
 * Main flow: Fetch GitHub -> Call Gemini or Local Fallback -> Render Card
 */
async function handleSearch(username) {
  startLoading();

  try {
    // 1. Fetch GitHub Profile
    const profileRes = await fetch(`https://api.github.com/users/${username}`);
    if (profileRes.status === 404) {
      throw new Error(`Haye tauba! GitHub par '@${username}' naam ka koi shakhs nahi mila. Sahi username likho beta!`);
    }
    if (!profileRes.ok) {
      throw new Error(`GitHub API ne nakhray dikhaye (${profileRes.status}). Thodi der baad dubara koshish karein.`);
    }
    const profile = await profileRes.json();

    // 2. Fetch User Repositories (up to 30 recent)
    let repos = [];
    try {
      const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=30`);
      if (reposRes.ok) {
        repos = await reposRes.json();
      }
    } catch (repoErr) {
      console.warn('Could not fetch repos, continuing with profile only', repoErr);
    }

    // 3. Obtain Roast: Try Serverless Gemini endpoint first, fallback instantly on failure/timeout
    const roast = await fetchRoastWithFallback(profile, repos);
    currentRoastData = { profile, repos, roast };

    // 4. Render the Biodata Card
    renderBiodataCard(profile, repos, roast);
    stopLoading();

    // Smooth scroll to card
    cardSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

  } catch (err) {
    stopLoading();
    showToast(err.message || "Kuch garbar ho gayi beta!", true);
  }
}

/**
 * Resilient Roast Fetcher:
 * Queries `/api/roast` with a strict 3.5s timeout.
 * If running purely static (e.g. npx serve or offline), or if API throttles,
 * instantly resolves with our handcrafted local fallback engine.
 */
async function fetchRoastWithFallback(profile, repos) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 9500);

  try {
    const res = await fetch('/api/roast', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ profile, repos }),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (res.ok) {
      const result = await res.json();
      if (result && result.data) {
        console.log(`[Rishta Aunty] Roast source: ${result.source || 'server'}`);
        return result.data;
      }
    } else {
      console.warn(`[Rishta Aunty] Backend API responded with HTTP status ${res.status}`);
    }
  } catch (e) {
    clearTimeout(timeoutId);
    console.info('[Rishta Aunty] Falling back to client-side roast matrix:', e.message);
  }

  // Pure Client Fallback (100% Reliable for live demos)
  if (typeof generateFallbackRoast === 'function') {
    return generateFallbackRoast(profile, repos);
  }

  throw new Error("Unable to generate biodata roast.");
}

/**
 * Populate the Matrimonial Biodata Card with Candidate Details
 */
function renderBiodataCard(profile, repos, roast) {
  // Avatar
  const avatarEl = document.getElementById('card-avatar');
  avatarEl.src = profile.avatar_url || 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png';
  avatarEl.onerror = () => {
    avatarEl.src = 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png';
  };

  // Names & Titles
  document.getElementById('card-name').textContent = profile.name || profile.login;
  document.getElementById('card-handle').textContent = `@${profile.login} • Member since ${new Date(profile.created_at).getFullYear()}`;
  document.getElementById('card-title').textContent = roast.title || "Junior Aspiring Groom/Bride";
  document.getElementById('card-gotra').textContent = roast.gotra || "Khandani Open Source Baradri";

  // Assets / Dahej stats
  const totalStars = (repos || []).reduce((acc, r) => acc + (r.stargazers_count || 0), 0);
  document.getElementById('stat-repos').textContent = profile.public_repos;
  document.getElementById('stat-stars').textContent = `${totalStars} ★`;
  document.getElementById('stat-followers').textContent = profile.followers;
  document.getElementById('stat-ratio-sub').textContent = `vs ${profile.following} following`;

  // Determine top language
  const langCounts = {};
  (repos || []).forEach(r => {
    if (r.language) langCounts[r.language] = (langCounts[r.language] || 0) + 1;
  });
  const topLang = Object.keys(langCounts).sort((a, b) => langCounts[b] - langCounts[a])[0] || 'Plain Code';
  document.getElementById('stat-tech').textContent = topLang;

  // Rubber Stamp
  const stampEl = document.getElementById('card-stamp');
  stampEl.className = 'stamp';
  stampEl.textContent = roast.stampStatus || "LADKI WALAY SOCHENGAY ⚠️";
  if (roast.stampClass) {
    stampEl.classList.add(roast.stampClass);
  } else if (roast.matchScore < 40) {
    stampEl.classList.add('stamp-rejected');
  } else if (roast.matchScore < 70) {
    stampEl.classList.add('stamp-pending');
  } else {
    stampEl.classList.add('stamp-verified');
  }

  // Re-trigger stamp slam animation
  stampEl.style.animation = 'none';
  void stampEl.offsetWidth; // trigger reflow
  stampEl.style.animation = null;

  // Habits List
  const habitsList = document.getElementById('card-habits');
  habitsList.innerHTML = '';
  (roast.habits || [
    "Din bhar dark mode terminal mein khoya rehta hai",
    "README file likhta hai par code run nahi hota",
    "Chai ke saharey deployment karta hai"
  ]).forEach(h => {
    const li = document.createElement('li');
    li.textContent = h;
    habitsList.appendChild(li);
  });

  // Red Flags List
  const redFlagsList = document.getElementById('card-red-flags');
  redFlagsList.innerHTML = '';
  (roast.redFlags || [
    "47 repos hain, 46 abandoned hain",
    "Commit messages mein sirf 'fix bug' aur 'test' likhta hai",
    "Git push direct main branch pe karta hai bina testing ke"
  ]).forEach(rf => {
    const li = document.createElement('li');
    li.textContent = rf;
    redFlagsList.appendChild(li);
  });

  // Aunty's Verdict
  document.getElementById('card-verdict').textContent = `"${roast.auntyVerdict || 'Beta mehnat toh karta hai, par rishte ke qabil banne ke liye abhi thodi refactoring zaroori hai!'}"`;

  // Compatibility Meter
  const score = Math.min(99, Math.max(10, roast.matchScore || 45));
  document.getElementById('meter-percentage').textContent = `${score}%`;
  document.getElementById('meter-fill').style.width = `${score}%`;

  const meterText = document.getElementById('meter-status-text');
  if (score < 35) {
    meterText.textContent = "Scene Off Hai ❌ (Phupho Ne Rishta Cancel Karwa Diya)";
    meterText.style.color = "#dc2626";
  } else if (score < 65) {
    meterText.textContent = "Thoda Soch Vichar Baki ⚠️ (Abba Ko Manana Parega)";
    meterText.style.color = "#d97706";
  } else {
    meterText.textContent = "Sharma Ji Ka Beta Tier 💖 (Scene Full On Hai — Mithaai Baanto!)";
    meterText.style.color = "#059669";
  }

  // Display card
  cardSection.style.display = 'block';
}

/**
 * Loading state with rotating Aunty quotes
 */
function startLoading() {
  submitBtn.disabled = true;
  submitBtn.style.opacity = '0.7';
  cardSection.style.display = 'none';
  loadingBox.style.display = 'block';

  let quoteIdx = 0;
  loadingQuote.textContent = `"${AUNTY_QUIPS[quoteIdx]}"`;

  quoteInterval = setInterval(() => {
    quoteIdx = (quoteIdx + 1) % AUNTY_QUIPS.length;
    loadingQuote.style.opacity = '0';
    setTimeout(() => {
      loadingQuote.textContent = `"${AUNTY_QUIPS[quoteIdx]}"`;
      loadingQuote.style.opacity = '1';
    }, 200);
  }, 1400);

  loadingBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function stopLoading() {
  submitBtn.disabled = false;
  submitBtn.style.opacity = '1';
  loadingBox.style.display = 'none';
  if (quoteInterval) {
    clearInterval(quoteInterval);
    quoteInterval = null;
  }
}

/**
 * 1-Click PNG Download of the Biodata Card
 */
btnDownload.addEventListener('click', async () => {
  if (!currentRoastData) return;
  
  const candidateHandle = currentRoastData.profile.login;
  showToast("Generating high-res Biodata Card image...");

  try {
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

    const imgData = canvas.toDataURL('image/png');
    const downloadLink = document.createElement('a');
    downloadLink.download = `Rishta-Biodata-${candidateHandle}.png`;
    downloadLink.href = imgData;
    downloadLink.click();

    showToast("Biodata Card downloaded! WhatsApp pe send karo 🎉");
  } catch (err) {
    console.error('Download error:', err);
    showToast("Could not export image. Try taking a screenshot!");
  }
});

/**
 * Copy Roast to Clipboard (Formatted for WhatsApp/Socials)
 */
btnCopy.addEventListener('click', () => {
  if (!currentRoastData) return;

  const { profile, roast } = currentRoastData;
  const copyContent = `🧕 *RISHTA AUNTY MATRIMONIAL BUREAU* 🧕
Official Developer Biodata for @${profile.login} (${profile.name || 'Candidate'})

📜 *Title:* ${roast.title}
🏛️ *Tech Gotra:* ${roast.gotra}
📊 *Score:* ${roast.matchScore}% - ${roast.stampStatus}

*Aunty Ka Hukumnama:*
"${roast.auntyVerdict}"

*Red Flags:*
${(roast.redFlags || []).map(rf => `• ${rf}`).join('\n')}

☕ Verified at Chai aur Code Ep#2 by GDG Live Pakistan
Check yours at: rishta-aunty.vercel.app #MakeInternetFun`;

  navigator.clipboard.writeText(copyContent).then(() => {
    showToast("Roast copied! Ready to paste in WhatsApp group 📋");
  }).catch(() => {
    showToast("Could not copy automatically. Please copy manually.");
  });
});

/**
 * Share on X (Twitter)
 */
btnTwitter.addEventListener('click', () => {
  if (!currentRoastData) return;
  const { profile, roast } = currentRoastData;
  const tweet = `Rishta Aunty just roasted my GitHub biodata! 😂\n\nVerdict: "${roast.stampStatus}" (${roast.matchScore}% match)\n"${roast.title}"\n\nGet your developer biodata reviewed by Rishta Aunty for @GDGLivePakistan Chai aur Code:`;
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}&hashtags=RishtaAunty,ChaiAurCode,MakeInternetFun`;
  window.open(url, '_blank');
});

/**
 * Share on WhatsApp
 */
btnWhatsapp.addEventListener('click', () => {
  if (!currentRoastData) return;
  const { profile, roast } = currentRoastData;
  const text = `🧕 *Rishta Aunty Reviewed My GitHub Profile!* 😂\n\nCandidate: @${profile.login}\nStatus: *${roast.stampStatus}* (${roast.matchScore}% Match)\nTitle: ${roast.title}\n\nAunty's Verdict: "${roast.auntyVerdict}"\n\nCheck yours: ${window.location.href}`;
  const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
});

/**
 * Simple Toast Notification helper
 */
function showToast(message, isError = false) {
  toastText.textContent = message;
  toast.style.background = isError ? '#991b1b' : '#1f2937';
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}
