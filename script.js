/* ============================================================
   simple seeded random so the layout is consistent every load
   ============================================================ */
function mulberry32(seed){
  return function(){
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* ============================================================
   ORIGINAL BUNNY (usagi) POSES — simple shapes, several poses
   ============================================================ */
const bunnyPoses = [
  // sitting, ears up straight
  `<svg viewBox="0 0 100 120" width="64" height="76"><ellipse cx="50" cy="80" rx="26" ry="24" fill="#3A2C1A"/><circle cx="50" cy="46" r="20" fill="#3A2C1A"/><ellipse cx="34" cy="10" rx="7" ry="26" fill="#3A2C1A"/><ellipse cx="66" cy="10" rx="7" ry="26" fill="#3A2C1A"/><circle cx="43" cy="44" r="2.6" fill="#FFF8E7"/><circle cx="57" cy="44" r="2.6" fill="#FFF8E7"/></svg>`,
  // ears relaxed / flopped to the side
  `<svg viewBox="0 0 100 120" width="64" height="76"><ellipse cx="50" cy="82" rx="27" ry="22" fill="#3A2C1A"/><circle cx="50" cy="48" r="19" fill="#3A2C1A"/><ellipse cx="28" cy="34" rx="7" ry="22" fill="#3A2C1A" transform="rotate(-35 28 34)"/><ellipse cx="72" cy="34" rx="7" ry="22" fill="#3A2C1A" transform="rotate(35 72 34)"/><circle cx="43" cy="47" r="2.4" fill="#FFF8E7"/><circle cx="57" cy="47" r="2.4" fill="#FFF8E7"/></svg>`,
  // jumping — legs kicked out, ears back
  `<svg viewBox="0 0 120 100" width="72" height="60"><ellipse cx="55" cy="55" rx="24" ry="20" fill="#3A2C1A" transform="rotate(-12 55 55)"/><circle cx="34" cy="34" r="17" fill="#3A2C1A"/><ellipse cx="16" cy="16" rx="6" ry="20" fill="#3A2C1A" transform="rotate(-50 16 16)"/><ellipse cx="34" cy="10" rx="6" ry="20" fill="#3A2C1A" transform="rotate(-15 34 10)"/><ellipse cx="88" cy="62" rx="8" ry="16" fill="#3A2C1A" transform="rotate(60 88 62)"/><circle cx="29" cy="32" r="2.3" fill="#FFF8E7"/><circle cx="39" cy="32" r="2.3" fill="#FFF8E7"/></svg>`,
  // waving one arm up
  `<svg viewBox="0 0 100 120" width="60" height="72"><ellipse cx="50" cy="82" rx="25" ry="23" fill="#3A2C1A"/><circle cx="50" cy="46" r="19" fill="#3A2C1A"/><ellipse cx="35" cy="10" rx="6.5" ry="24" fill="#3A2C1A"/><ellipse cx="65" cy="10" rx="6.5" ry="24" fill="#3A2C1A"/><ellipse cx="76" cy="60" rx="6" ry="18" fill="#3A2C1A" transform="rotate(-40 76 60)"/><circle cx="43" cy="44" r="2.4" fill="#FFF8E7"/><circle cx="57" cy="44" r="2.4" fill="#FFF8E7"/></svg>`,
  // peeking — one ear bent
  `<svg viewBox="0 0 100 120" width="56" height="68"><ellipse cx="50" cy="84" rx="24" ry="20" fill="#3A2C1A"/><circle cx="50" cy="50" r="18" fill="#3A2C1A"/><ellipse cx="36" cy="16" rx="6" ry="22" fill="#3A2C1A"/><path d="M60 16 Q76 22 66 40 Q60 30 58 16 Z" fill="#3A2C1A"/><circle cx="44" cy="48" r="2.2" fill="#FFF8E7"/><circle cx="57" cy="48" r="2.2" fill="#FFF8E7"/></svg>`
];

/* ============================================================
   ORIGINAL CHIIKAWA-STYLE POSES — round soft blobs, several poses
   ============================================================ */
const chiiPoses = [
  // sitting, arms down, content
  `<svg viewBox="0 0 100 100" width="60" height="60"><ellipse cx="50" cy="58" rx="34" ry="30" fill="#F4A6AE"/><ellipse cx="30" cy="34" rx="9" ry="10" fill="#F4A6AE"/><ellipse cx="70" cy="34" rx="9" ry="10" fill="#F4A6AE"/><circle cx="40" cy="55" r="2.4" fill="#4A3B35"/><circle cx="60" cy="55" r="2.4" fill="#4A3B35"/><ellipse cx="34" cy="66" rx="4" ry="2.4" fill="#F9C9CE"/><ellipse cx="66" cy="66" rx="4" ry="2.4" fill="#F9C9CE"/></svg>`,
  // arms up cheering
  `<svg viewBox="0 0 120 100" width="68" height="58"><ellipse cx="60" cy="60" rx="32" ry="28" fill="#F4A6AE"/><ellipse cx="42" cy="38" rx="8" ry="9" fill="#F4A6AE"/><ellipse cx="78" cy="38" rx="8" ry="9" fill="#F4A6AE"/><ellipse cx="24" cy="42" rx="6" ry="16" fill="#F4A6AE" transform="rotate(-30 24 42)"/><ellipse cx="96" cy="42" rx="6" ry="16" fill="#F4A6AE" transform="rotate(30 96 42)"/><circle cx="50" cy="58" r="2.2" fill="#4A3B35"/><circle cx="70" cy="58" r="2.2" fill="#4A3B35"/></svg>`,
  // sleepy — closed eyes (curved lines)
  `<svg viewBox="0 0 100 100" width="60" height="60"><ellipse cx="50" cy="60" rx="33" ry="28" fill="#F9C9CE"/><ellipse cx="32" cy="38" rx="8" ry="9" fill="#F9C9CE"/><ellipse cx="68" cy="38" rx="8" ry="9" fill="#F9C9CE"/><path d="M35 56 Q40 60 45 56" stroke="#4A3B35" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="M55 56 Q60 60 65 56" stroke="#4A3B35" stroke-width="2.4" fill="none" stroke-linecap="round"/></svg>`,
  // waving
  `<svg viewBox="0 0 110 100" width="64" height="58"><ellipse cx="52" cy="60" rx="32" ry="28" fill="#F4A6AE"/><ellipse cx="34" cy="38" rx="8" ry="9" fill="#F4A6AE"/><ellipse cx="70" cy="38" rx="8" ry="9" fill="#F4A6AE"/><ellipse cx="88" cy="44" rx="6" ry="15" fill="#F4A6AE" transform="rotate(45 88 44)"/><circle cx="42" cy="58" r="2.2" fill="#4A3B35"/><circle cx="62" cy="58" r="2.2" fill="#4A3B35"/></svg>`,
  // small / far away, simple round
  `<svg viewBox="0 0 100 100" width="44" height="44"><ellipse cx="50" cy="58" rx="30" ry="26" fill="#F9C9CE"/><ellipse cx="32" cy="36" rx="7" ry="8" fill="#F9C9CE"/><ellipse cx="68" cy="36" rx="7" ry="8" fill="#F9C9CE"/><circle cx="41" cy="56" r="2" fill="#4A3B35"/><circle cx="59" cy="56" r="2" fill="#4A3B35"/></svg>`
];

function scatterCritters(containerId, poses, count, seed){
  const container = document.getElementById(containerId);
  if(!container) return;
  const rand = mulberry32(seed);
  for(let i=0;i<count;i++){
    const pose = poses[Math.floor(rand()*poses.length)];
    const el = document.createElement('div');
    el.className = 'critter';
    el.innerHTML = pose;
    const top = rand()*100;
    const left = rand()*100;
    const rotate = (rand()*50 - 25).toFixed(1);
    const scale = (0.6 + rand()*0.9).toFixed(2);
    const flip = rand() > 0.5 ? -1 : 1;
    const opacity = (0.35 + rand()*0.4).toFixed(2);
    el.style.top = top + '%';
    el.style.left = left + '%';
    el.style.transform = `translate(-50%,-50%) rotate(${rotate}deg) scale(${flip * scale}, ${scale})`;
    el.style.opacity = opacity;
    container.appendChild(el);
  }
}

scatterCritters('usagi-bg', bunnyPoses, 22, 7);
scatterCritters('chiikawa-bg', chiiPoses, 22, 42);

/* ============================================================
   floating hearts on the letter page
   ============================================================ */
function spawnHearts(){
  const field = document.getElementById('hearts-field');
  if(!field) return;
  const rand = mulberry32(101);
  const symbols = ['♥','♡'];
  for(let i=0;i<26;i++){
    const h = document.createElement('span');
    h.className = 'heart';
    h.textContent = symbols[Math.floor(rand()*symbols.length)];
    const size = 14 + rand()*22;
    h.style.left = (rand()*100) + '%';
    h.style.fontSize = size + 'px';
    const duration = 9 + rand()*10;
    const delay = rand()*duration;
    h.style.animationDuration = duration + 's';
    h.style.animationDelay = '-' + delay + 's';
    field.appendChild(h);
  }
}
spawnHearts();

/* ============================================================
   page navigation
   ============================================================ */
const pageUsagi = document.getElementById('page-usagi');
const pageChiikawa = document.getElementById('page-chiikawa');
const pageLetter = document.getElementById('page-letter');
const audio = document.getElementById('bg-audio');
const soundToggle = document.getElementById('sound-toggle');

function showPage(page){
  [pageUsagi, pageChiikawa, pageLetter].forEach(p => p.classList.remove('is-active'));
  page.classList.add('is-active');
  window.scrollTo({top:0, behavior:'instant' in window ? 'instant' : 'auto'});
}

document.getElementById('btn-to-chiikawa').addEventListener('click', () => {
  showPage(pageChiikawa);
});

document.getElementById('btn-to-letter').addEventListener('click', () => {
  showPage(pageLetter);
  audio.play().catch(() => { /* autoplay may still be blocked on some browsers */ });
});

soundToggle.addEventListener('click', () => {
  if(audio.paused){
    audio.play();
    soundToggle.classList.remove('is-muted');
  } else {
    audio.pause();
    soundToggle.classList.add('is-muted');
  }
});
