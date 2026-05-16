/* =====================================================================
   CROSHO — script.js
   ===================================================================== */

/* ============================================================
   CUSTOM CURSOR
============================================================ */
const cursorDot  = document.getElementById('cursor-dot');
const cursorRing = document.getElementById('cursor-ring');
let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursorDot.style.left  = mouseX + 'px';
  cursorDot.style.top   = mouseY + 'px';
});

(function animateRing() {
  ringX += (mouseX - ringX) * 0.12;
  ringY += (mouseY - ringY) * 0.12;
  cursorRing.style.left = ringX + 'px';
  cursorRing.style.top  = ringY + 'px';
  requestAnimationFrame(animateRing);
})();

document.querySelectorAll('button, a, input, textarea, select, .pattern-card, .masonry-item, .perk-card, .filter-btn, .tag-btn, .theme-btn, .social-btn').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
});

/* ============================================================
   THEME SYSTEM
============================================================ */
const themeToggle = document.getElementById('theme-toggle-btn');
const themeDrawer = document.getElementById('theme-drawer');
const themeBtns   = document.querySelectorAll('.theme-btn');

themeToggle.addEventListener('click', e => {
  e.stopPropagation();
  themeDrawer.classList.toggle('open');
});
document.addEventListener('click', () => themeDrawer.classList.remove('open'));

const savedTheme = localStorage.getItem('crosho-theme') || 'warm';
applyTheme(savedTheme);

themeBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    applyTheme(btn.dataset.theme);
    themeDrawer.classList.remove('open');
  });
});

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('crosho-theme', theme);
  themeBtns.forEach(b => b.classList.toggle('active', b.dataset.theme === theme));
}

/* ============================================================
   PATTERN DATA
============================================================ */
const patterns = [
  {
    id: 1,
    title: "Spring Blossom Beanie",
    difficulty: "beginner",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&q=80&auto=format&fit=crop",
    credit: "By CROSHO",
    tags: ["wearable","floral"],
    materials: ["5mm crochet hook","100g DK weight yarn (main colour)","25g contrast yarn","Yarn needle","Scissors"],
    abbreviations: ["ch = chain","sc = single crochet","hdc = half double crochet","sl st = slip stitch","MR = magic ring","rep = repeat"],
    steps: [
      "Foundation ring: Using main colour, make a magic ring. Ch 2 (counts as hdc). Work 11 hdc in ring. Sl st to join. (12 hdc)",
      "Round 2: Ch 2, 2 hdc in same st, *2 hdc in next st* rep around. Sl st. (24 hdc)",
      "Round 3: Ch 2, hdc in same st, hdc in next, *2 hdc in next, hdc in next* rep. Sl st. (36 hdc)",
      "Round 4: Ch 2, hdc in same st, hdc in next 2, *2 hdc in next, hdc in next 2* rep. Sl st. (48 hdc)",
      "Rounds 5–12: Ch 2, hdc in each st around. Sl st. (48 hdc — work even for 8 rounds)",
      "Brim: Switch to contrast colour. Work 3 rounds of sc, then 1 round sl st. Fasten off.",
      "Flower embellishment (optional): With contrast, MR. *Ch 5, sl st back to ring* × 6. Fasten off and sew to side of beanie.",
      "Weave in all ends. Block gently if needed."
    ]
  },
  {
    id: 2,
    title: "Vintage Ripple Cushion",
    difficulty: "beginner",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80&auto=format&fit=crop",
    credit: "By Guest Artist: Kavita Sharma",
    tags: ["home"],
    materials: ["6mm hook","150g each of 3 contrasting DK yarns","40cm cushion insert","Yarn needle"],
    abbreviations: ["ch = chain","sc = single crochet","dc = double crochet","dec = decrease","rep = repeat"],
    steps: [
      "Foundation: Ch 93 (or multiple of 12 + 9 for your size).",
      "Row 1: Dc in 4th ch from hook. Dc in next 3. *Skip 2, dc in 5, 3 dc in next, dc in 5, skip 2* rep. End 2 dc. Turn.",
      "Row 2: Ch 3. Dc in same. Dc in 3. *Skip 2, dc in 5, 3 dc in next, dc in 5, skip 2* rep. End 2 dc. Turn.",
      "Repeat Row 2, changing colour every 4 rows, for 40 rows total.",
      "Make a second identical panel. Join three sides with sl st, insert cushion, close fourth side.",
      "Add a simple sc border around the cushion for a neat finish. Weave in all ends."
    ]
  },
  {
    id: 3,
    title: "Sunflower Granny Square",
    difficulty: "intermediate",
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&q=80&auto=format&fit=crop",
    credit: "By Guest Artist: Ananya Rao",
    tags: ["floral","home"],
    materials: ["3.5mm hook","Yellow worsted yarn","Green worsted yarn","Brown yarn (small)","Yarn needle"],
    abbreviations: ["ch = chain","sc = single crochet","dc = double crochet","sl st = slip stitch","sp = space","rep = repeat"],
    steps: [
      "Centre (Brown): MR. Ch 3 (counts as dc). 11 dc in ring. Sl st to top of ch-3. (12 dc) Fasten off.",
      "Petals (Yellow): Join to any dc. Ch 3, 2 dc cluster same st. Ch 2. *3 dc cluster in next dc. Ch 2* rep around. Sl st. (12 clusters)",
      "Round 3 (Green): Join to any ch-2 sp. Ch 3, 2 dc same sp. Ch 1. *3 dc in next ch-2 sp. Ch 1* rep. Sl st.",
      "Corner Round: *3 dc in ch-1 sp, ch 2 corner; 3 dc in next sp, ch 1; 3 dc in next sp, ch 2 corner* × 4. Forms the square.",
      "Border: Sc evenly around, working 3 sc in each corner ch-2 sp. Fasten off and weave in ends.",
      "Block by pinning to shape and misting with water. Allow to dry flat."
    ]
  },
  {
    id: 4,
    title: "Boho Fringe Market Bag",
    difficulty: "intermediate",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&q=80&auto=format&fit=crop",
    credit: "By Guest Artist: Meera Pillai",
    tags: ["bag"],
    materials: ["5mm hook","200g cotton twine or macramé cord","Scissors","Yarn needle","Two 1-inch D-rings (optional)"],
    abbreviations: ["ch = chain","sc = single crochet","dc = double crochet","ch-sp = chain space","sl st = slip stitch","rep = repeat"],
    steps: [
      "Foundation: Ch 41. Sc in 2nd ch from hook and across. (40 sc) Ch 1, turn.",
      "Row 1–6: Sc across. Ch 1, turn. (Base)",
      "Begin body: Ch 4, dc in same st. *Skip 1, dc + ch 1 + dc in next sc* rep across. Turn.",
      "Continue mesh pattern: Ch 4, *dc in ch-sp, ch 1* rep across. Work for 20 rows.",
      "Final row: Sc in each dc and ch-sp. Sc evenly up the sides and base edges.",
      "Handles: Ch 60, sl st to opposite corner. Repeat on other side.",
      "Fringe: Cut 15cm lengths of cord. Fold in half, pull loop through bottom mesh sp, pull ends through loop. Fringe every other sp.",
      "Weave in all ends. Wet block for a more structured shape."
    ]
  },
  {
    id: 5,
    title: "3D Strawberry Amigurumi",
    difficulty: "intermediate",
    image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=600&q=80&auto=format&fit=crop",
    credit: "By CROSHO",
    tags: ["amigurumi"],
    materials: ["2.5mm hook","Red DK yarn","Green DK yarn","Cream yarn (small)","Polyfill stuffing","Safety eyes (6mm)","Yarn needle"],
    abbreviations: ["MR = magic ring","sc = single crochet","inc = 2 sc in same st","dec = invisible decrease","BLO = back loop only"],
    steps: [
      "Body (Red): MR. 6 sc.",
      "Round 2: inc × 6. (12) | Round 3: *sc, inc* × 6. (18) | Round 4: *sc, sc, inc* × 6. (24)",
      "Rounds 5–12: Sc around even. (24) Place safety eyes between rounds 7–8, 5 sts apart.",
      "Round 13: *sc, sc, dec* × 6. (18) | Round 14: *sc, dec* × 6. (12) — Stuff firmly.",
      "Round 15: dec × 6. (6) — Fasten off, close hole.",
      "Leaf Crown (Green): Ch 8. Sl st to 1st ch to ring. *Ch 5, sl st back to ring* × 5. Makes 5 leaf points.",
      "Attach crown to top of berry. Use cream yarn to embroider small 'V' seeds randomly across.",
      "Weave in all ends. Your 3D strawberry is ready!"
    ]
  },
  {
    id: 6,
    title: "Lace Mandala Wall Hanging",
    difficulty: "advanced",
    image: "https://images.unsplash.com/photo-1611269154421-4e27233ac5c5?w=600&q=80&auto=format&fit=crop",
    credit: "By Guest Artist: Divya Krishnamurthy",
    tags: ["home","floral"],
    materials: ["2mm steel hook","Fine cotton thread (size 10)","Wooden dowel 30cm","Wooden beads and feathers","Yarn needle","Starch spray"],
    abbreviations: ["ch = chain","sc = single crochet","dc = double crochet","tr = treble","dtr = double treble","picot = ch 3 sl st to base","sp = space"],
    steps: [
      "Centre: Ch 10, sl st to ring. Round 1: Ch 3, 23 dc into ring. Sl st to top of ch-3. (24 dc)",
      "Round 2: Ch 5, *skip 1 dc, dc in next, ch 2* rep around. Sl st. (12 ch-2 sps)",
      "Round 3: Sl st to ch-sp. Ch 3, 4 dc in same sp. Ch 2. *5 dc cluster in next sp. Ch 2* rep. (12 clusters)",
      "Round 4: Shell = (3 dc, ch 2, 3 dc) in each ch-2 sp. Ch 3 between shells. (12 shells)",
      "Round 5: Sc in each dc, picot in each ch-2 sp. Work 7 dc fan in the ch-3 spaces.",
      "Round 6: Join sc to centre dc of any fan. *Ch 7, dtr in ch-2 sp of shell, ch 7, sc in centre of next fan* rep. (12 dtr arches)",
      "Round 7: Into each ch-7 arch: work 9 dc. Join. Fasten off.",
      "Finishing: Starch heavily, pin to board in circle. Leave 24h to set. Attach to dowel, add bead/feather embellishments."
    ]
  },
  {
    id: 7,
    title: "Heirloom Christening Shawl",
    difficulty: "advanced",
    image: "https://images.unsplash.com/photo-1545696968-1a31da406a64?w=600&q=80&auto=format&fit=crop",
    credit: "By CROSHO",
    tags: ["wearable"],
    materials: ["1.75mm steel hook","2 balls fine lace weight cotton (400m/ball)","Blocking wires and pins","Yarn needle","Steam iron"],
    abbreviations: ["ch = chain","sc = single crochet","dc = double crochet","tr = treble","ch-sp = chain space","rep = repeat","pm = place marker"],
    steps: [
      "Foundation: Ch 301. Row 1 (WS): dc in 4th ch, *ch 1, skip 1, dc in next* rep to end. Turn. (150 ch-1 sps)",
      "Row 2 (RS): Ch 4, *dc in ch-sp, ch 1* rep to end, dc in turning ch. Turn.",
      "Rows 3–60: Repeat Row 2 for the body mesh. Every 10 rows, count to ensure 150 ch-sps.",
      "Shell edging setup: Ch 1, 3 sc in corner, sc evenly down side, 3 sc in corner, sc across bottom, repeat corners. Join.",
      "Shell edging: *Skip 2 sc, 5 dc shell in next sc, skip 2 sc, sl st in next sc* rep around. Work 7 dc in each corner.",
      "Picot edging: Join to top of any shell. *Sc in top of shell, ch 4, sl st to base of ch (picot), sc in next sl st* rep. Fasten off.",
      "Blocking: Soak 10 min in cool water. Squeeze gently. Pin to blocking board (approx 75cm × 100cm). Steam — do NOT press. Leave 48h.",
      "Complete. Store folded in acid-free tissue."
    ]
  },
  {
    id: 8,
    title: "Chunky Bobble Throw Blanket",
    difficulty: "beginner",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=600&q=80&auto=format&fit=crop",
    credit: "By Guest Artist: Riya Mehta",
    tags: ["blanket","home"],
    materials: ["9mm hook","500g super bulky yarn (3 skeins)","Scissors","Yarn needle"],
    abbreviations: ["ch = chain","sc = single crochet","bob = bobble (5 dc in same st pull through all)","ch 3 = turning chain","rep = repeat"],
    steps: [
      "Foundation: Ch 61 (or any odd number + 1 for turning ch).",
      "Row 1: Sc in 2nd ch from hook and across. Ch 3, turn. (60 sc)",
      "Row 2 (bobble row): *Bob in next sc, sc in next sc* rep across. End sc. Ch 1, turn.",
      "Row 3: Sc across all sts. Ch 3, turn.",
      "Repeat Rows 2–3 until blanket measures approx 120cm or desired length.",
      "Border: Work 3 rounds of sc around all edges, 3 sc in each corner. Fasten off.",
      "Weave in all ends. Ready to cozy up!"
    ]
  }
];

/* ============================================================
   GALLERY DATA
============================================================ */
const galleryItems = [
  { id:1,  title:"Spring Blossom Beanie",     tag:"wearable", img:"https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500&q=75&auto=format&fit=crop", h:"tall",   desc:"Delicate floral accents on this cosy DK beanie", tags:["wearable","beginner","floral"] },
  { id:2,  title:"Sunflower Granny Square",   tag:"floral",   img:"https://images.unsplash.com/photo-1563453392212-326f5e854473?w=500&q=75&auto=format&fit=crop", h:"short",  desc:"Classic granny square with a golden sunflower centre", tags:["floral","intermediate"] },
  { id:3,  title:"Boho Market Bag",           tag:"bag",      img:"https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&q=75&auto=format&fit=crop", h:"medium", desc:"Earthy cotton twine with bohemian fringe bottom", tags:["bag","intermediate"] },
  { id:4,  title:"Strawberry Amigurumi",      tag:"amigurumi",img:"https://images.unsplash.com/photo-1551782450-17144efb9c50?w=500&q=75&auto=format&fit=crop", h:"short",  desc:"3D stuffed strawberry with embroidered seeds", tags:["amigurumi","intermediate"] },
  { id:5,  title:"Chunky Bobble Blanket",     tag:"blanket",  img:"https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=500&q=75&auto=format&fit=crop", h:"medium", desc:"Super bulky throw with satisfying bobble texture", tags:["blanket","beginner"] },
  { id:6,  title:"Mandala Wall Hanging",      tag:"home",     img:"https://images.unsplash.com/photo-1611269154421-4e27233ac5c5?w=500&q=75&auto=format&fit=crop", h:"tall",   desc:"Intricate lace mandala for bohemian wall décor", tags:["home","advanced"] },
  { id:7,  title:"Ripple Cushion Cover",      tag:"home",     img:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=75&auto=format&fit=crop", h:"short",  desc:"Vintage chevron cushion in three contrasting shades", tags:["home","beginner"] },
  { id:8,  title:"Lace Christening Shawl",    tag:"wearable", img:"https://images.unsplash.com/photo-1545696968-1a31da406a64?w=500&q=75&auto=format&fit=crop", h:"medium", desc:"Heirloom-quality lace shawl in fine cotton thread", tags:["wearable","advanced"] },
  { id:9,  title:"Amigurumi Bunny",           tag:"amigurumi",img:"https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&q=75&auto=format&fit=crop", h:"tall",   desc:"Floppy-eared bunny in soft pastel yarn", tags:["amigurumi","beginner"] },
  { id:10, title:"Macramé Plant Hanger",      tag:"home",     img:"https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500&q=75&auto=format&fit=crop", h:"medium", desc:"Knotted cotton cord hanger for trailing plants", tags:["home","intermediate"] },
  { id:11, title:"Rainbow Granny Blanket",    tag:"blanket",  img:"https://images.unsplash.com/photo-1617897903246-719242758050?w=500&q=75&auto=format&fit=crop", h:"short",  desc:"Cheerful joined granny squares in 12 vibrant colours", tags:["blanket","intermediate"] },
  { id:12, title:"Daisy Chain Tote",         tag:"bag",      img:"https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=500&q=75&auto=format&fit=crop", h:"tall",   desc:"Cotton raffia tote with embossed daisy stitch", tags:["bag","intermediate","floral"] },
  { id:13, title:"Cactus Amigurumi Set",     tag:"amigurumi",img:"https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=500&q=75&auto=format&fit=crop", h:"medium", desc:"Mini cactus trio — perfect gift set for plant lovers", tags:["amigurumi","beginner"] },
  { id:14, title:"Filet Lace Tablecloth",    tag:"home",     img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=75&auto=format&fit=crop", h:"short",  desc:"Geometric filet crochet for a vintage dining table", tags:["home","advanced"] },
  { id:15, title:"Wrist Warmers",            tag:"wearable", img:"https://images.unsplash.com/photo-1612159862521-0c7e0aa6c67b?w=500&q=75&auto=format&fit=crop", h:"medium", desc:"Fingerless mitts with delicate shell stitch cuffs", tags:["wearable","beginner"] },
  { id:16, title:"Statement Ear Cuffs",      tag:"wearable", img:"https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=500&q=75&auto=format&fit=crop", h:"tall",   desc:"Dainty crochet hoops with seed bead accents", tags:["wearable","advanced"] },
];

/* ============================================================
   ROUTER
============================================================ */
function navigate(section) {
  document.querySelectorAll('.page-section').forEach(s => {
    s.classList.remove('active');
    s.style.display = 'none';
  });
  document.querySelectorAll('.nav-links button, .mobile-menu button').forEach(b => b.classList.remove('active'));

  const el = document.getElementById('section-' + section);
  if (el) {
    el.style.display = 'block';
    el.classList.add('active');
    el.querySelectorAll('.section-fade').forEach(f => {
      f.style.animation = 'none';
      void f.offsetHeight;
      f.style.animation = '';
    });
  }

  const navBtn = document.getElementById('nav-' + section);
  if (navBtn) navBtn.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ============================================================
   MOBILE MENU
============================================================ */
function toggleMobile() {
  document.getElementById('hamburger').classList.toggle('open');
  document.getElementById('mobile-menu').classList.toggle('open');
}
function closeMobile() {
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('mobile-menu').classList.remove('open');
}

/* ============================================================
   RENDER PATTERN CARDS
============================================================ */
function renderCards(filter) {
  const grid = document.getElementById('patterns-grid');
  grid.innerHTML = '';
  const filtered = filter === 'all' ? patterns : patterns.filter(p => p.difficulty === filter);

  filtered.forEach(p => {
    const card = document.createElement('div');
    card.className = 'pattern-card';
    card.innerHTML = `
      <div class="card-img">
        <img src="${p.image}" alt="${p.title}" loading="lazy" />
        <span class="difficulty-badge badge-${p.difficulty}">${cap(p.difficulty)}</span>
      </div>
      <div class="card-body">
        <h3>${p.title}</h3>
        <p class="card-credit">${p.credit}</p>
        <button class="btn-view" onclick="openModal(${p.id})">View Pattern</button>
      </div>
    `;
    grid.appendChild(card);
  });

  if (filtered.length === 0) {
    grid.innerHTML = '<p style="text-align:center;color:var(--text3);padding:60px 20px;">No patterns found for this filter.</p>';
  }
}

function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

document.getElementById('filter-bar').addEventListener('click', e => {
  if (!e.target.classList.contains('filter-btn')) return;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  e.target.classList.add('active');
  renderCards(e.target.dataset.filter);
});

/* ============================================================
   GALLERY — MASONRY / PINTEREST STYLE
============================================================ */
let activeGalleryTag = 'all';
let gallerySearchTerm = '';
let lightboxIndex = 0;
let visibleGallery = [];

function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  const term = gallerySearchTerm.toLowerCase();
  visibleGallery = galleryItems.filter(item => {
    const tagMatch = activeGalleryTag === 'all' || item.tag === activeGalleryTag;
    const searchMatch = !term || item.title.toLowerCase().includes(term) || item.tags.some(t => t.includes(term));
    return tagMatch && searchMatch;
  });

  grid.innerHTML = '';
  if (visibleGallery.length === 0) {
    grid.innerHTML = '<p style="text-align:center;color:var(--text3);padding:60px 20px;column-span:all;">No results found.</p>';
    return;
  }

  visibleGallery.forEach((item, idx) => {
    const div = document.createElement('div');
    div.className = 'masonry-item';
    div.innerHTML = `
      <img src="${item.img}" alt="${item.title}" loading="lazy" style="border-radius:var(--radius)" />
      <div class="masonry-overlay">
        <div class="masonry-title">${item.title}</div>
        <div class="masonry-tag">${item.tag}</div>
      </div>
      <button class="masonry-save" onclick="event.stopPropagation(); saveItem(${item.id})">Save</button>
    `;
    div.addEventListener('click', () => openLightbox(idx));
    grid.appendChild(div);
  });
}

function filterGallery() {
  gallerySearchTerm = document.getElementById('gallery-search').value;
  renderGallery();
}

document.getElementById('gallery-tags').addEventListener('click', e => {
  if (!e.target.classList.contains('tag-btn')) return;
  document.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('active'));
  e.target.classList.add('active');
  activeGalleryTag = e.target.dataset.tag;
  renderGallery();
});

function saveItem(id) {
  showToast('success', '📌 Saved to your collection!');
}

/* ============================================================
   LIGHTBOX
============================================================ */
function openLightbox(idx) {
  lightboxIndex = idx;
  updateLightbox();
  document.getElementById('lightbox-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function lightboxNav(dir, e) {
  e && e.stopPropagation();
  lightboxIndex = (lightboxIndex + dir + visibleGallery.length) % visibleGallery.length;
  updateLightbox();
}

function updateLightbox() {
  const item = visibleGallery[lightboxIndex];
  if (!item) return;
  document.getElementById('lightbox-img').src = item.img;
  document.getElementById('lightbox-img').alt = item.title;
  document.getElementById('lightbox-title').textContent = item.title;
  document.getElementById('lightbox-desc').textContent = item.desc;
  const tagsEl = document.getElementById('lightbox-tags');
  tagsEl.innerHTML = item.tags.map(t => `<span>${t}</span>`).join('');
}

/* ============================================================
   MODAL
============================================================ */
let currentPattern = null;

function openModal(id) {
  const p = patterns.find(x => x.id === id);
  if (!p) return;
  currentPattern = p;

  document.getElementById('modal-title').textContent = p.title;
  document.getElementById('modal-meta').textContent = p.credit + ' · ' + cap(p.difficulty) + ' Level';

  document.getElementById('modal-body').innerHTML = `
    <div class="modal-section">
      <h4>Materials Needed</h4>
      <ul class="materials-list">
        ${p.materials.map(m => `<li>${m}</li>`).join('')}
      </ul>
    </div>
    <div class="modal-section">
      <h4>Stitch Abbreviations</h4>
      <div class="abbrev-grid">
        ${p.abbreviations.map(a => `<span class="abbrev-chip">${a}</span>`).join('')}
      </div>
    </div>
    <div class="modal-section">
      <h4>Step-by-Step Instructions</h4>
      <ol class="steps-list">
        ${p.steps.map(s => `<li>${s}</li>`).join('')}
      </ol>
    </div>
  `;

  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
  currentPattern = null;
}

function closeModalOnBg(e) {
  if (e.target === document.getElementById('modal-overlay')) closeModal();
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModal(); closeLightbox(); }
});

/* ============================================================
   PRINT & DOWNLOAD
============================================================ */
function printPattern() {
  if (!currentPattern) return;
  const p = currentPattern;
  const printArea = document.getElementById('print-area');
  printArea.innerHTML = `
    <div class="print-header">CROSHO — ${p.title}</div>
    <div class="print-meta">${p.credit} &nbsp;·&nbsp; ${cap(p.difficulty)} Level</div>
    <div class="print-section-title">Materials Needed</div>
    <ul class="print-list">${p.materials.map(m => `<li>${m}</li>`).join('')}</ul>
    <div class="print-section-title">Stitch Abbreviations</div>
    <div class="print-chips">${p.abbreviations.map(a => `<span class="print-chip">${a}</span>`).join('')}</div>
    <div class="print-section-title">Step-by-Step Instructions</div>
    <ol class="print-list">${p.steps.map(s => `<li>${s}</li>`).join('')}</ol>
    <div class="print-footer">Downloaded from CROSHO (crosho.in) · Free patterns for all skill levels.</div>
  `;
  printArea.style.display = 'block';
  window.print();
  printArea.style.display = 'none';
}

function downloadPattern(format) {
  if (!currentPattern) return;
  const p = currentPattern;

  if (format === 'txt') {
    let txt = `CROSHO — Pattern: ${p.title}\n`;
    txt += `Credit: ${p.credit}\nDifficulty: ${cap(p.difficulty)}\n\n`;
    txt += `MATERIALS NEEDED\n${'─'.repeat(40)}\n`;
    txt += p.materials.map(m => '• ' + m).join('\n') + '\n\n';
    txt += `STITCH ABBREVIATIONS\n${'─'.repeat(40)}\n`;
    txt += p.abbreviations.map(a => '• ' + a).join('\n') + '\n\n';
    txt += `STEP-BY-STEP INSTRUCTIONS\n${'─'.repeat(40)}\n`;
    txt += p.steps.map((s, i) => `${i + 1}. ${s}`).join('\n') + '\n\n';
    txt += '─'.repeat(40) + '\nDownloaded from CROSHO (crosho.in)\n';
    triggerDownload(new Blob([txt], { type: 'text/plain' }), p.title + '_crosho.txt');
    showToast('success', '✓ TXT downloaded!');

  } else if (format === 'pdf') {
    // Build an HTML document and use print-to-PDF
    const html = buildPrintableHTML(p);
    const printWin = window.open('', '_blank', 'width=800,height=600');
    if (!printWin) { showToast('error', 'Pop-up blocked. Allow pop-ups and try again.'); return; }
    printWin.document.write(html);
    printWin.document.close();
    printWin.onload = () => {
      printWin.focus();
      printWin.print();
    };
    showToast('success', '✓ PDF print dialog opened!');

  } else if (format === 'doc') {
    // Generate a .doc (HTML-in-doc wrapper that Word accepts)
    const docHtml = buildWordHTML(p);
    const blob = new Blob([docHtml], { type: 'application/msword' });
    triggerDownload(blob, p.title.replace(/\s+/g, '_').toLowerCase() + '_crosho.doc');
    showToast('success', '✓ DOC downloaded!');
  }
}

function buildPrintableHTML(p) {
  return `<!DOCTYPE html>
<html><head><meta charset="UTF-8"/>
<title>CROSHO — ${p.title}</title>
<style>
  body { font-family: Georgia, serif; max-width: 720px; margin: 40px auto; color: #2F3E46; line-height: 1.7; }
  h1 { font-size: 26px; color: #2F3E46; margin-bottom: 4px; }
  .meta { font-size: 13px; color: #7C9E8E; margin-bottom: 24px; padding-bottom: 12px; border-bottom: 3px solid #C67B5C; }
  h2 { font-size: 13px; font-weight: bold; color: #C67B5C; text-transform: uppercase; letter-spacing: 1px; margin: 22px 0 8px; }
  ul, ol { padding-left: 22px; } li { font-size: 13px; margin-bottom: 5px; line-height: 1.75; }
  .chips { display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 8px; }
  .chip { border: 1px solid #ccc; border-radius: 4px; padding: 2px 7px; font-size: 11px; font-family: monospace; }
  .footer { margin-top: 32px; padding-top: 10px; border-top: 1px solid #ccc; font-size: 11px; color: #aaa; }
  @media print { body { margin: 20px; } }
</style></head><body>
<h1>${p.title}</h1>
<div class="meta">${p.credit} &nbsp;·&nbsp; ${cap(p.difficulty)} Level</div>
<h2>Materials Needed</h2>
<ul>${p.materials.map(m => `<li>${m}</li>`).join('')}</ul>
<h2>Stitch Abbreviations</h2>
<div class="chips">${p.abbreviations.map(a => `<span class="chip">${a}</span>`).join('')}</div>
<h2>Step-by-Step Instructions</h2>
<ol>${p.steps.map(s => `<li>${s}</li>`).join('')}</ol>
<div class="footer">Downloaded from CROSHO (crosho.in) · Free patterns for all skill levels.</div>
</body></html>`;
}

function buildWordHTML(p) {
  return `<html xmlns:o='urn:schemas-microsoft-com:office:office'
xmlns:w='urn:schemas-microsoft-com:office:word'
xmlns='http://www.w3.org/TR/REC-html40'>
<head><meta charset='utf-8'><title>${p.title}</title>
<style>
  body { font-family: Calibri, sans-serif; font-size: 11pt; color: #2F3E46; }
  h1 { font-size: 20pt; color: #2F3E46; }
  h2 { font-size: 11pt; color: #C67B5C; text-transform: uppercase; letter-spacing: 1pt; }
  li { font-size: 10pt; line-height: 1.6; }
  .meta { font-size: 10pt; color: #7C9E8E; border-bottom: 1pt solid #C67B5C; padding-bottom: 6pt; margin-bottom: 14pt; }
  .footer { font-size: 8pt; color: #aaa; margin-top: 20pt; border-top: 1pt solid #ccc; padding-top: 6pt; }
</style></head><body>
<h1>CROSHO — ${p.title}</h1>
<div class="meta">${p.credit} · ${cap(p.difficulty)} Level</div>
<h2>Materials Needed</h2>
<ul>${p.materials.map(m => `<li>${m}</li>`).join('')}</ul>
<h2>Stitch Abbreviations</h2>
<ul>${p.abbreviations.map(a => `<li>${a}</li>`).join('')}</ul>
<h2>Step-by-Step Instructions</h2>
<ol>${p.steps.map(s => `<li>${s}</li>`).join('')}</ol>
<div class="footer">Downloaded from CROSHO (crosho.in) · Free patterns for all skill levels.</div>
</body></html>`;
}

function triggerDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a   = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/* ============================================================
   TOAST
============================================================ */
function showToast(type, msg) {
  const toast  = document.getElementById('toast');
  const icon   = document.getElementById('toast-icon');
  const msgEl  = document.getElementById('toast-msg');
  toast.className = 'toast ' + type;
  icon.textContent  = type === 'success' ? '✓' : '✕';
  msgEl.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3800);
}

/* ============================================================
   FORM SUBMISSIONS
============================================================ */
document.getElementById('collab-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const inputs = this.querySelectorAll('input[required], textarea[required]');
  let valid = true;
  inputs.forEach(i => { if (!i.value.trim() || !i.validity.valid) valid = false; });
  if (!valid) { showToast('error', 'Please fill in all required fields correctly.'); return; }
  showToast('success', '🎉 Pattern submitted! We\'ll review and be in touch.');
  this.reset();
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const inputs = this.querySelectorAll('input[required], textarea[required], select[required]');
  let valid = true;
  inputs.forEach(i => { if (!i.value.trim() || !i.validity.valid) valid = false; });
  if (!valid) { showToast('error', 'Please fill in all required fields.'); return; }
  showToast('success', '✓ Message sent! We\'ll reply within 24 hours.');
  this.reset();
});

/* ============================================================
   MARQUEE DUPLICATE (for seamless scroll)
============================================================ */
(function() {
  const inner = document.querySelector('.feature-strip-inner');
  if (inner) {
    const clone = inner.cloneNode(true);
    inner.parentElement.appendChild(clone);
  }
})();

/* ============================================================
   INIT
============================================================ */
document.querySelectorAll('.page-section').forEach(s => { s.style.display = 'none'; });
renderCards('all');
renderGallery();
navigate('home');