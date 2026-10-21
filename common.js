/* ZAREXX STORE — shared data & components */

const WA_JUAL = "6285877101381";
const WA_RENTAL = "6288219933462";

const SOCIALS = {
  yt: "https://www.youtube.com/@zarexxYT",
  ig: "https://www.instagram.com/zarexxstore_?exln=MXV2MWxoY3Q4OXQxZQ==",
  tiktok: "https://tiktok.com/@zarexxstore_",
};

const WA_CHANNEL = "https://whatsapp.com/channel/0029Vb7b6UVFCCoQMDJZ1W2F";

const CATEGORIES = ["Game"];

/* id, name, category, type: 'jual' | 'rental', price, image?, badge?, rating, soldOut?, specs[], durations?[] */
const GARANSI_SPEC = ["Keamanan", "Bergaransi sampai akun berhasil di-bind ke punyamu"];
const RENTAL_KEAMANAN_SPEC = ["Keamanan", "Login via Google Only"];
const RENTAL_SKIN_SPEC = ["Skin", "Skin SG &amp; Evo Gun Max"];

/* Harga rental akun #2, #3, #4 */
const RENTAL_PRICING_STANDAR = [
  ["1 Jam", 3000],
  ["2 Jam", 5000],
  ["4 Jam", 10000],
  ["6 Jam", 15000],
  ["24 Jam", 30000],
  ["Paket Siang (06.00–19.00 WIB)", 20000],
  ["Paket Malam (19.00–05.00 WIB)", 15000],
];

/* Harga rental akun #1 */
const RENTAL_PRICING_KHUSUS = [
  ["1 Jam", 4000],
  ["3 Jam", 10000],
  ["6 Jam", 20000],
  ["12 Jam", 25000],
  ["24 Jam", 35000],
  ["Paket Siang (06.00–19.00 WIB)", 25000],
  ["Paket Malam (19.00–05.00 WIB)", 20000],
];

const PRODUCTS = [
  // ===== JUAL AKUN FREE FIRE (4 akun ready stock) =====
  {
    id: "j-ff-1",
    type: "jual",
    name: "Akun Free Fire #1",
    category: "Game",
    price: 50000,
    rating: 3.9,
    image: "ff-jual-1.jpg",
    specs: [
      ["Level Akun", "48"],
      ["Bundle", "80+ bundle"],
      ["Skin Senjata", "75+"],
      GARANSI_SPEC,
    ],
  },
  {
    id: "j-ff-2",
    type: "jual",
    name: "Akun Free Fire #2",
    category: "Game",
    price: 80000,
    rating: 4.0,
    image: "ff-jual-2.jpg",
    specs: [
      ["Level Akun", "59"],
      ["Bundle", "200+ bundle"],
      ["Skin Senjata", "180+"],
      GARANSI_SPEC,
    ],
  },
  {
    id: "j-ff-3",
    type: "jual",
    name: "Akun Free Fire #3",
    category: "Game",
    price: 600000,
    rating: 4.5,
    image: "ff-jual-3.jpg",
    badge: "Premium",
    specs: [
      ["Level Akun", "58"],
      ["Bundle", "300+ bundle"],
      ["Skin Senjata", "290+"],
      GARANSI_SPEC,
    ],
  },
  {
    id: "j-ff-4",
    type: "jual",
    name: "Akun Free Fire #4",
    category: "Game",
    price: 100000,
    rating: 4.7,
    soldOut: true,
    badge: "Segera Hadir",
    specs: [
      ["Bundle", "20+ bundle langka"],
      ["Skin Senjata", "15+"],
      GARANSI_SPEC,
    ],
  },

  // ===== RENTAL AKUN FREE FIRE (4 akun ready stock) =====
  {
    id: "r-ff-1",
    type: "rental",
    name: "Rental Akun Free Fire #1",
    category: "Game",
    price: RENTAL_PRICING_KHUSUS[0][1],
    rating: 4.9,
    image: "ff-rental-1.jpg",
    badge: "Baru",
    durations: RENTAL_PRICING_KHUSUS,
    specs: [["Level Akun", "70"], RENTAL_SKIN_SPEC, RENTAL_KEAMANAN_SPEC],
  },
  {
    id: "r-ff-2",
    type: "rental",
    name: "Rental Akun Free Fire #2",
    category: "Game",
    price: RENTAL_PRICING_STANDAR[0][1],
    rating: 4.9,
    image: "ff-rental-2.jpg",
    durations: RENTAL_PRICING_STANDAR,
    specs: [["Level Akun", "65"], RENTAL_SKIN_SPEC, RENTAL_KEAMANAN_SPEC],
  },
  {
    id: "r-ff-3",
    type: "rental",
    name: "Rental Akun Free Fire #3",
    category: "Game",
    price: RENTAL_PRICING_STANDAR[0][1],
    rating: 4.7,
    image: "ff-rental-3.jpg",
    durations: RENTAL_PRICING_STANDAR,
    specs: [["Level Akun", "58"], RENTAL_SKIN_SPEC, RENTAL_KEAMANAN_SPEC],
  },
  {
    id: "r-ff-4",
    type: "rental",
    name: "Rental Akun Free Fire #4",
    category: "Game",
    price: RENTAL_PRICING_STANDAR[0][1],
    rating: 4.3,
    image: "ff-rental-4.jpg",
    durations: RENTAL_PRICING_STANDAR,
    specs: [["Level Akun", "57"], RENTAL_SKIN_SPEC, RENTAL_KEAMANAN_SPEC],
  },
];

function statusText(p) {
  if (p.type === "jual") return p.soldOut ? "Stok Habis · Segera Hadir" : "Akun Masih Ada";
  return "100+ Penyewa";
}

function rupiah(n) {
  return "Rp" + Number(n).toLocaleString("id-ID");
}

function waLink(product) {
  const number = product.type === "rental" ? WA_RENTAL : WA_JUAL;
  const text =
    product.type === "rental"
      ? `Halo bang Zarexx, apa rental ${product.name} ini masih ada?`
      : `Halo bang Zarexx, apa akun ${product.name} ini masih ada?`;
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

/* ---------- header / footer ---------- */

function renderHeader(active) {
  const link = (href, label) =>
    `<a href="${href}" class="nav-link${active === href ? " active" : ""}">${label}</a>`;
  return `
  <header class="site-header">
    <div class="header-inner">
      <a href="index.html" class="brand">
        <img src="logo.png" alt="ZAREXX STORE" class="brand-logo" />
        <span class="brand-name">ZAREXX <em>STORE</em></span>
      </a>
      <nav class="site-nav">
        ${link("index.html", "Beranda")}
        ${link("jual.html", "Jual Akun")}
        ${link("rental.html", "Rental Akun")}
        ${link("faq.html", "FAQ &amp; Cara Order")}
      </nav>
      <a class="btn btn-accent btn-sm header-cta" href="https://wa.me/${WA_JUAL}" target="_blank" rel="noopener">Hubungi Admin</a>
      <button class="nav-toggle" id="navToggle" aria-label="Buka menu">
        <span></span><span></span><span></span>
      </button>
    </div>
    <nav class="site-nav-mobile" id="navMobile">
      ${link("index.html", "Beranda")}
      ${link("jual.html", "Jual Akun")}
      ${link("rental.html", "Rental Akun")}
      ${link("faq.html", "FAQ &amp; Cara Order")}
    </nav>
  </header>`;
}

function renderFooter() {
  return `
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <img src="logo.png" alt="ZAREXX STORE" class="brand-logo" />
        <div>
          <div class="brand-name">ZAREXX <em>STORE</em></div>
          <p>Jual &amp; rental akun Free Fire — 100% aman, proses cepat, harga bersahabat.</p>
        </div>
      </div>
      <div class="footer-col">
        <h4>Navigasi</h4>
        <a href="index.html">Beranda</a>
        <a href="jual.html">Jual Akun</a>
        <a href="rental.html">Rental Akun</a>
        <a href="faq.html">FAQ &amp; Cara Order</a>
      </div>
      <div class="footer-col">
        <h4>Admin Order</h4>
        <a href="https://wa.me/${WA_JUAL}" target="_blank" rel="noopener">WA Jual Akun</a>
        <a href="https://wa.me/${WA_RENTAL}" target="_blank" rel="noopener">WA Rental Akun</a>
      </div>
      <div class="footer-col">
        <h4>Sosial Media</h4>
        <a href="${SOCIALS.yt}" target="_blank" rel="noopener">YouTube</a>
        <a href="${SOCIALS.ig}" target="_blank" rel="noopener">Instagram</a>
        <a href="${SOCIALS.tiktok}" target="_blank" rel="noopener">TikTok</a>
      </div>
    </div>
    <div class="footer-bottom">© ${new Date().getFullYear()} ZAREXX STORE. Semua transaksi diproses manual via WhatsApp.</div>
  </footer>`;
}

function mountChrome(active) {
  document.getElementById("site-header").innerHTML = renderHeader(active);
  document.getElementById("site-footer").innerHTML = renderFooter();
  const toggle = document.getElementById("navToggle");
  const mobile = document.getElementById("navMobile");
  if (toggle && mobile) {
    toggle.addEventListener("click", () => {
      mobile.classList.toggle("open");
      toggle.classList.toggle("open");
    });
  }
}

/* ---------- product card + grid ---------- */

function productCard(p) {
  const priceSuffix = p.type === "rental" && !p.durations ? "<small>/bulan</small>" : "";
  return `
  <article class="card" data-id="${p.id}">
    <div class="card-media">
      ${p.image ? `<img src="${p.image}" alt="${p.name}" loading="lazy" />` : `<div class="card-media-ph">${p.category}</div>`}
      ${p.badge ? `<span class="card-badge">${p.badge}</span>` : ""}
      <span class="card-type card-type-${p.type}">${p.type === "rental" ? "Rental" : "Jual"}</span>
    </div>
    <div class="card-body">
      <span class="card-cat">${p.category}</span>
      <h3 class="card-title">${p.name}</h3>
      <div class="card-rating">★ ${p.rating.toFixed(1)} <span>· ${statusText(p)}</span></div>
      <div class="card-price-row">
        <span class="card-price">${rupiah(p.price)}${priceSuffix}</span>
        <button class="btn btn-ghost btn-sm card-detail-btn" data-id="${p.id}">Detail</button>
      </div>
    </div>
  </article>`;
}

function renderGrid(containerId, list) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = list.length
    ? list.map(productCard).join("")
    : `<div class="empty-state">Belum ada produk untuk filter ini. Coba kategori lain ya.</div>`;
  el.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", (e) => {
      openDetail(card.dataset.id);
    });
  });
}

/* ---------- category chips ---------- */

function renderChips(containerId, onChange) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const chips = ["Semua", ...CATEGORIES];
  el.innerHTML = chips
    .map(
      (c, i) =>
        `<button class="chip${i === 0 ? " active" : ""}" data-cat="${c}">${c}</button>`
    )
    .join("");
  el.querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      el.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      onChange(chip.dataset.cat);
    });
  });
}

/* ---------- detail modal ---------- */

function detailModalShell() {
  return `
  <div class="modal-overlay" id="detailOverlay">
    <div class="modal" id="detailModal" role="dialog" aria-modal="true">
      <button class="modal-close" id="detailClose" aria-label="Tutup">✕</button>
      <div id="detailContent"></div>
    </div>
  </div>`;
}

function openDetail(id) {
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) return;
  const overlay = document.getElementById("detailOverlay");
  const content = document.getElementById("detailContent");

  const durationBlock = p.durations
    ? `<div class="dur-row" id="durRow">
        ${p.durations
          .map(
            (d, i) =>
              `<button class="dur-chip${i === 0 ? " active" : ""}" data-label="${d[0]}" data-price="${d[1]}">${d[0]}<small>${rupiah(d[1])}</small></button>`
          )
          .join("")}
      </div>`
    : "";

  const priceSuffix = p.type === "rental" && !p.durations ? "<small>/bulan</small>" : "";

  const orderBlock = p.soldOut
    ? `<div class="btn btn-ghost btn-lg modal-order-btn" style="opacity:.6; cursor:not-allowed;">Stok Habis — Segera Hadir</div>`
    : `<a class="btn btn-accent btn-lg modal-order-btn" id="orderBtn" href="${waLink(p)}" target="_blank" rel="noopener">Order via WhatsApp</a>`;

  content.innerHTML = `
    <div class="modal-media">${p.image ? `<img src="${p.image}" alt="${p.name}" />` : p.category}
      ${p.badge ? `<span class="card-badge">${p.badge}</span>` : ""}
    </div>
    <div class="modal-body">
      <span class="card-type card-type-${p.type}">${p.type === "rental" ? "Rental" : "Jual Akun"}</span>
      <h2>${p.name}</h2>
      <div class="card-rating">★ ${p.rating.toFixed(1)} <span>· ${statusText(p)}</span></div>
      <div class="modal-price" id="modalPrice">${rupiah(p.price)}${priceSuffix}</div>
      ${durationBlock}
      <table class="spec-table">
        ${p.specs.map((s) => `<tr><th>${s[0]}</th><td>${s[1]}</td></tr>`).join("")}
      </table>
      <p class="modal-desc">Spek lengkap akun cek saluran WhatsApp kami: <a href="${WA_CHANNEL}" target="_blank" rel="noopener" class="modal-desc-link">Saluran WhatsApp ZAREXX STORE</a></p>
      ${orderBlock}
      <p class="modal-note">Pembayaran &amp; proses order dikonfirmasi langsung oleh admin di WhatsApp.</p>
    </div>
  `;

  if (p.durations) {
    const chips = content.querySelectorAll(".dur-chip");
    const priceEl = content.querySelector("#modalPrice");
    chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        chips.forEach((c) => c.classList.remove("active"));
        chip.classList.add("active");
        priceEl.innerHTML = rupiah(chip.dataset.price);
      });
    });
  }

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeDetail() {
  const overlay = document.getElementById("detailOverlay");
  overlay.classList.remove("open");
  document.body.style.overflow = "";
}

function mountDetailModal() {
  const holder = document.getElementById("detail-modal");
  if (!holder) return;
  holder.innerHTML = detailModalShell();
  document.getElementById("detailClose").addEventListener("click", closeDetail);
  document.getElementById("detailOverlay").addEventListener("click", (e) => {
    if (e.target.id === "detailOverlay") closeDetail();
  });
}
