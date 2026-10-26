/* ==========================================================================
   Green Ride — interações
   ========================================================================== */

// Dados genéricos da loja — troque pelo número real (DDI + DDD + número, só dígitos)
const STORE = {
  whatsapp: "5500000000000",
};

// Fotos em assets/img/modelos/ — "focus" ajusta o enquadramento no card (object-position)
const MODELS = [
  {
    id: "classic-e",
    name: "Classic E",
    category: "scooter",
    img: "classic-e.jpg",
    focus: "50% 60%",
    badge: "Mais vendido",
    desc: "Design retrô com alma elétrica. Banco amplo, bagageiro e pegada urbana para o dia a dia.",
    price: 7490,
    colors: [["Amarelo", "#f2b134"], ["Preto", "#1c1f1c"], ["Branco", "#e9ece6"]],
    specs: { Motor: "1200W", Autonomia: "60 km", "Vel. máx.": "45 km/h", Recarga: "5 a 7 h", Bateria: "60V 26Ah lítio", Freio: "Disco" },
  },
  {
    id: "connect-x21",
    name: "Connect X21",
    category: "moto",
    img: "connect-x21.jpg",
    focus: "35% 60%",
    badge: "Lançamento",
    desc: "Estilo citycoco com pneus largos, banco para duas pessoas e muito torque para subir ladeiras.",
    price: 9490,
    colors: [["Verde", "#5e8f1f"], ["Preto", "#1c1f1c"], ["Vermelho", "#d7262e"]],
    specs: { Motor: "2000W", Autonomia: "60 km", "Vel. máx.": "45 km/h", Recarga: "6 a 8 h", Bateria: "60V 20Ah", Freio: "Disco duplo" },
  },
  {
    id: "tank-3000",
    name: "Tank 3000",
    category: "moto",
    img: "tank-3000.jpg",
    focus: "50% 55%",
    badge: "Potência",
    desc: "O topo da linha: visual esportivo, motor de 3000W e bateria de lítio removível para rodar o dia inteiro.",
    price: 15990,
    colors: [["Vermelho", "#c4161c"], ["Preto", "#1c1f1c"]],
    specs: { Motor: "3000W", Autonomia: "90 km", "Vel. máx.": "80 km/h", Recarga: "4 a 6 h", Bateria: "72V 40Ah lítio", Freio: "Disco duplo" },
  },
  {
    id: "triciclo-x3",
    name: "Triciclo X3",
    category: "triciclo",
    img: "triciclo-x3.jpg",
    focus: "50% 62%",
    badge: "Conforto",
    desc: "Três rodas, banco com encosto e cesto frontal. Estabilidade e segurança para todas as idades.",
    price: 8390,
    colors: [["Preto", "#1c1f1c"], ["Cinza", "#8a8f88"]],
    specs: { Motor: "650W", Autonomia: "45 km", "Vel. máx.": "25 km/h", Recarga: "6 a 8 h", Bateria: "48V 20Ah", Freio: "Tambor" },
  },
  {
    id: "city-lite",
    name: "City Lite",
    category: "scooter",
    img: "city-lite.jpg",
    focus: "50% 68%",
    desc: "A porta de entrada para a mobilidade elétrica. Leve, econômica e fácil de estacionar.",
    price: 5490,
    colors: [["Verde oliva", "#7d8a5a"], ["Branco", "#e9ece6"], ["Preto", "#1c1f1c"]],
    specs: { Motor: "800W", Autonomia: "45 km", "Vel. máx.": "32 km/h", Recarga: "5 a 7 h", Bateria: "48V 20Ah", Freio: "Tambor" },
  },
  {
    id: "connect-x11",
    name: "Connect X11",
    category: "moto",
    img: "connect-x11.jpg",
    focus: "45% 70%",
    desc: "A versão compacta da linha Connect: pneus largos, painel digital e alarme com controle remoto.",
    price: 8590,
    colors: [["Preto", "#1c1f1c"], ["Amarelo", "#f2c200"]],
    specs: { Motor: "1500W", Autonomia: "55 km", "Vel. máx.": "40 km/h", Recarga: "6 a 8 h", Bateria: "60V 20Ah", Freio: "Disco" },
  },
  {
    id: "urban-s",
    name: "Urban S",
    category: "scooter",
    img: "urban-s.jpg",
    focus: "50% 62%",
    desc: "Scooter urbana com baú, para-brisa e porta-objetos. Pronta para o trabalho e para o lazer.",
    price: 6990,
    colors: [["Laranja", "#e2531f"], ["Branco", "#e9ece6"], ["Cinza", "#5d6658"]],
    specs: { Motor: "1000W", Autonomia: "55 km", "Vel. máx.": "40 km/h", Recarga: "6 a 8 h", Bateria: "60V 20Ah", Freio: "Disco" },
  },
  {
    id: "triciclo-conforto",
    name: "Triciclo Conforto",
    category: "triciclo",
    img: "triciclo-conforto.jpg",
    focus: "50% 70%",
    desc: "Assento largo com encosto, cesto e marcha à ré. Mobilidade com tranquilidade para o dia a dia.",
    price: 7890,
    colors: [["Laranja", "#e2711f"], ["Vermelho", "#c4161c"]],
    specs: { Motor: "800W", Autonomia: "50 km", "Vel. máx.": "25 km/h", Recarga: "6 a 8 h", Bateria: "48V 20Ah", Freio: "Tambor" },
  },
];

const CATEGORY_LABEL = { scooter: "Scooter elétrica", moto: "Moto elétrica", triciclo: "Triciclo elétrico" };

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const brl = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
const waLink = (msg) => `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(msg)}`;
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ---------- Loader ---------- */
window.addEventListener("load", () => setTimeout(() => document.body.classList.add("is-loaded"), 700));
setTimeout(() => document.body.classList.add("is-loaded"), 3500);

$("#year").textContent = new Date().getFullYear();

/* ---------- Links de WhatsApp ---------- */
function bindWhatsApp(root = document) {
  $$("[data-wa]", root).forEach((a) => {
    a.href = waLink(a.dataset.wa);
    a.target = "_blank";
    a.rel = "noopener";
  });
}
bindWhatsApp();

/* ---------- Vídeo da hero: loop de 15s ---------- */
// Clipes mais longos são cortados em 15s; mais curtos são desacelerados para fechar 15s por ciclo.
const heroVideo = $(".hero__video");
if (heroVideo) {
  const limit = parseFloat(heroVideo.dataset.loopSeconds) || 15;
  const fitDuration = () => {
    if (heroVideo.duration && heroVideo.duration < limit) heroVideo.playbackRate = heroVideo.duration / limit;
  };
  heroVideo.addEventListener("loadedmetadata", fitDuration);
  heroVideo.addEventListener("ratechange", () => heroVideo.playbackRate === 1 && fitDuration());
  fitDuration();
  heroVideo.addEventListener("timeupdate", () => {
    if (heroVideo.currentTime >= limit) {
      heroVideo.currentTime = 0;
      heroVideo.play();
    }
  });
  heroVideo.play().catch(() => {});
}

/* ---------- Header ---------- */
const header = $(".header");
let lastY = 0;
function onHeaderScroll() {
  const y = window.scrollY;
  header.classList.toggle("is-scrolled", y > 40);
  header.classList.toggle("is-hidden", y > lastY && y > 600 && !nav.classList.contains("is-open"));
  lastY = y;
}

const burger = $(".burger");
const nav = $("#nav");
burger.addEventListener("click", () => {
  const open = burger.getAttribute("aria-expanded") !== "true";
  burger.setAttribute("aria-expanded", open);
  burger.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  nav.classList.toggle("is-open", open);
  document.body.classList.toggle("is-locked", open);
});
$$("a", nav).forEach((a) =>
  a.addEventListener("click", () => {
    if (!nav.classList.contains("is-open")) return;
    burger.click();
  })
);

// Destaca o link da seção visível
const navLinks = $$(".nav a");
const sectionSpy = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      navLinks.forEach((l) => l.classList.toggle("is-active", l.getAttribute("href") === `#${e.target.id}`));
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
$$("main section[id]").forEach((s) => sectionSpy.observe(s));

/* ---------- Parallax ---------- */
const parallaxEls = $$("[data-parallax]");
function onParallax() {
  const vh = window.innerHeight;
  parallaxEls.forEach((el) => {
    const host = el.parentElement.getBoundingClientRect();
    if (host.bottom < 0 || host.top > vh) return;
    const speed = parseFloat(el.dataset.parallax);
    // Hero: relativo ao topo da página; demais: relativo ao centro da viewport
    const offset = el.closest(".hero") ? -host.top : host.top + host.height / 2 - vh / 2;
    const fade = el.classList.contains("hero__content") ? Math.max(0, 1 - -host.top / (vh * 0.7)) : null;
    el.style.transform = `translate3d(0, ${(offset * speed).toFixed(1)}px, 0)`;
    if (fade !== null) el.style.opacity = fade.toFixed(3);
  });
}

let ticking = false;
window.addEventListener(
  "scroll",
  () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      onHeaderScroll();
      if (!reduceMotion) onParallax();
      ticking = false;
    });
  },
  { passive: true }
);
onHeaderScroll();
if (!reduceMotion) onParallax();

/* ---------- Modelos ---------- */
const grid = $("#models-grid");

const imgSrc = (m) => `assets/img/modelos/${m.img}`;

grid.innerHTML = MODELS.map(
  (m, i) => `
  <button class="card reveal" style="--d:${(i % 4) * 0.08}s" data-id="${m.id}" data-cat="${m.category}" aria-haspopup="dialog" aria-label="Ver detalhes do ${m.name}">
    <div class="card__top">
      <span class="card__cat">${m.category}</span>
      ${m.badge ? `<span class="card__badge">${m.badge}</span>` : ""}
    </div>
    <div class="card__img"><img src="${imgSrc(m)}" alt="" loading="lazy" decoding="async" style="object-position:${m.focus}"></div>
    <h3 class="card__name">${m.name}</h3>
    <div class="card__meta"><span>${m.specs.Motor}</span><span>·</span><span>${m.specs.Autonomia}</span></div>
    <div class="card__foot">
      <div class="card__price"><small>a partir de</small><strong>${brl(m.price)}</strong></div>
      <div class="swatches">${m.colors.map(([n, c]) => `<i style="background:${c}" title="${n}"></i>`).join("")}</div>
      <span class="card__go" aria-hidden="true">→</span>
    </div>
  </button>`
).join("");

// Filtro
$$(".filter").forEach((btn) =>
  btn.addEventListener("click", () => {
    $$(".filter").forEach((b) => {
      b.classList.toggle("is-active", b === btn);
      b.setAttribute("aria-selected", b === btn);
    });
    const f = btn.dataset.filter;
    let n = 0;
    $$(".card", grid).forEach((card) => {
      const show = f === "all" || card.dataset.cat === f;
      card.classList.toggle("is-hidden", !show);
      card.classList.remove("is-filtering");
      if (show) {
        void card.offsetWidth; // reinicia a animação
        card.style.animationDelay = `${n++ * 0.06}s`;
        card.classList.add("is-filtering", "is-visible");
      }
    });
  })
);

// Tilt 3D nos cards
if (!reduceMotion && window.matchMedia("(hover: hover)").matches) {
  grid.addEventListener("pointermove", (e) => {
    const card = e.target.closest(".card");
    if (!card) return;
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.setProperty("--tx", `${(x * 8).toFixed(2)}deg`);
    card.style.setProperty("--ty", `${(-y * 8).toFixed(2)}deg`);
  });
  grid.addEventListener(
    "pointerleave",
    (e) => {
      if (!e.target.classList?.contains("card")) return;
      e.target.style.setProperty("--tx", "0deg");
      e.target.style.setProperty("--ty", "0deg");
    },
    true
  );
}

/* ---------- Modal ---------- */
const modal = $("#modal");
const modalImg = $("#modal-img");
let lastFocus = null;

function openModal(m) {
  lastFocus = document.activeElement;
  $("#modal-tag").textContent = m.badge || "";
  $("#modal-cat").textContent = CATEGORY_LABEL[m.category];
  $("#modal-title").textContent = m.name;
  $("#modal-desc").textContent = m.desc;
  $("#modal-price").textContent = brl(m.price);
  $("#modal-install").textContent = `ou 12x de ${(m.price / 12).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })} sem juros`;
  modalImg.src = imgSrc(m);
  modalImg.alt = `Foto do ${m.name}`;
  modalImg.style.objectPosition = m.focus;

  $("#modal-specs").innerHTML = Object.entries(m.specs)
    .map(([k, v], i) => `<div style="animation-delay:${0.15 + i * 0.05}s"><dt>${k}</dt><dd>${v}</dd></div>`)
    .join("");

  $("#modal-colors").innerHTML =
    `<small>Cores</small>` + m.colors.map(([n, c]) => `<span><i style="background:${c}"></i>${n}</span>`).join("");
  $("#modal-wa").href = waLink(
    `Olá! Tenho interesse no modelo ${m.name} (${brl(m.price)}) que vi no site da Green Ride. Pode me passar mais informações?`
  );

  // reinicia animação de entrada da imagem
  modalImg.style.animation = "none";
  void modalImg.offsetWidth;
  modalImg.style.animation = "";

  modal.hidden = false;
  modal.classList.remove("is-closing");
  document.body.classList.add("is-locked");
  $(".modal__close", modal).focus();
}

function closeModal() {
  if (modal.hidden || modal.classList.contains("is-closing")) return;
  modal.classList.add("is-closing");
  setTimeout(() => {
    modal.hidden = true;
    modal.classList.remove("is-closing");
    document.body.classList.remove("is-locked");
    lastFocus?.focus();
  }, reduceMotion ? 0 : 320);
}

grid.addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (card) openModal(MODELS.find((m) => m.id === card.dataset.id));
});
modal.addEventListener("click", (e) => e.target.closest("[data-close]") && closeModal());
document.addEventListener("keydown", (e) => {
  if (modal.hidden) return;
  if (e.key === "Escape") closeModal();
  if (e.key === "Tab") {
    const f = $$("button, a[href]", modal).filter((el) => el.offsetParent !== null);
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});

/* ---------- Reveal on scroll ---------- */
const revealer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("is-visible");
      revealer.unobserve(e.target);
    });
  },
  { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
);
// Escalona elementos irmãos que entram juntos
$$(".perks__grid, .steps__list, .numbers__grid, .tgrid, .faq__list").forEach((group) =>
  $$(".reveal", group).forEach((el, i) => el.style.setProperty("--d", `${i * 0.1}s`))
);
$$(".reveal").forEach((el) => revealer.observe(el));

/* ---------- Contadores ---------- */
function countUp(el) {
  const target = parseFloat(el.dataset.count);
  const dec = parseInt(el.dataset.decimals || "0", 10);
  const pre = el.dataset.prefix || "";
  const suf = el.dataset.suffix || "";
  const fmt = (v) => pre + v.toLocaleString("pt-BR", { minimumFractionDigits: dec, maximumFractionDigits: dec }) + suf;
  if (reduceMotion) return (el.textContent = fmt(target));
  const dur = 1800;
  const t0 = performance.now();
  const tick = (t) => {
    const p = Math.min((t - t0) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 4);
    el.textContent = fmt(target * eased);
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
const counter = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      // números da hero aparecem depois da animação de entrada
      setTimeout(() => countUp(e.target), e.target.closest(".hero") ? 2000 : 200);
      counter.unobserve(e.target);
    });
  },
  { threshold: 0.6 }
);
$$("[data-count]").forEach((el) => counter.observe(el));

/* ---------- Botões magnéticos ---------- */
if (!reduceMotion && window.matchMedia("(hover: hover)").matches) {
  $$(".magnetic").forEach((btn) => {
    btn.addEventListener("pointermove", (e) => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      btn.style.transform = `translate(${x * 0.2}px, ${y * 0.3}px)`;
    });
    btn.addEventListener("pointerleave", () => (btn.style.transform = ""));
  });
}
