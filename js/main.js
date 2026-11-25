/* ==========================================================
   DREAM Lab — main.js
   Animações e interações (sem bibliotecas externas)
   ========================================================== */
(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;
  const PALETTE = ["#a1d6ca", "#a5cce5", "#9fb6ea", "#d4a7e2", "#f1a7dc"];

  $("#year").textContent = new Date().getFullYear();

  /* ---------- preloader ---------- */
  document.body.classList.add("loading");
  const finishLoad = () => {
    $("#loader").classList.add("done");
    document.body.classList.remove("loading");
    document.body.classList.add("ready");
  };
  window.addEventListener("load", () => setTimeout(finishLoad, reduce ? 0 : 1300));
  setTimeout(finishLoad, 4000); // segurança caso alguma fonte demore

  /* ---------- cursor ---------- */
  if (finePointer && !reduce) {
    document.body.classList.add("has-cursor");
    const cur = $(".cursor"), dot = $(".cursor__dot"), ring = $(".cursor__ring");
    let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
    addEventListener("mousemove", e => { mx = e.clientX; my = e.clientY; dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`; });
    (function loop() {
      rx += (mx - rx) * 0.16; ry += (my - ry) * 0.16;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
      requestAnimationFrame(loop);
    })();
    document.addEventListener("mouseover", e => {
      cur.classList.toggle("hover", !!e.target.closest("a, button, .member, .drag, .pub, .gitem, input"));
    });
  } else {
    $(".cursor").remove();
  }

  /* ---------- magnetic buttons ---------- */
  if (finePointer && !reduce) {
    $$(".magnetic").forEach(el => {
      el.addEventListener("mousemove", e => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2, y = e.clientY - r.top - r.height / 2;
        el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
      });
      el.addEventListener("mouseleave", () => (el.style.transform = ""));
    });
  }

  /* ---------- nav: hide on scroll, burger, active link ---------- */
  const nav = $("#nav");
  let lastY = 0;
  const burger = $("#burger");
  burger.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", open);
  });
  $$("#navLinks a").forEach(a => a.addEventListener("click", () => { nav.classList.remove("open"); burger.setAttribute("aria-expanded", false); }));

  const sections = $$("main section[id]");
  const navMap = new Map($$("#navLinks a").map(a => [a.getAttribute("href").slice(1), a]));
  const spy = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        navMap.forEach(a => a.classList.remove("active"));
        navMap.get(en.target.id)?.classList.add("active");
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach(s => spy.observe(s));

  /* ---------- reveal on scroll ---------- */
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.15 });
  const observeReveals = () => $$(".reveal:not(.in), .year-group:not(.in)").forEach(el => io.observe(el));
  observeReveals();

  /* ---------- counters ---------- */
  const countIO = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const el = en.target, end = +el.dataset.count;
      const start = el.hasAttribute("data-plain") ? end - 40 : 0;
      const t0 = performance.now(), dur = reduce ? 1 : 1600;
      (function tick(t) {
        const p = Math.min((t - t0) / dur, 1), e = 1 - Math.pow(1 - p, 4);
        el.textContent = Math.round(start + (end - start) * e);
        if (p < 1) requestAnimationFrame(tick);
      })(t0);
      countIO.unobserve(el);
    });
  }, { threshold: 0.6 });
  $$("[data-count]").forEach(el => countIO.observe(el));

  /* ---------- rotating word + typewriter ---------- */
  const words = ["resistem", "se adaptam", "sobrevivem", "escapam"];
  const rot = $("#rotator em");
  let wi = 0;
  if (!reduce) setInterval(() => {
    rot.classList.add("out");
    setTimeout(() => {
      wi = (wi + 1) % words.length;
      rot.textContent = words[wi];
      rot.classList.remove("out"); rot.classList.add("pre");
      void rot.offsetWidth;
      rot.classList.remove("pre");
    }, 550);
  }, 2800);

  const typedEl = $("#typed"), phrase = "drug resistance and mutagenesis lab.";
  let ti = 0;
  const type = () => { typedEl.textContent = phrase.slice(0, ++ti); if (ti < phrase.length) setTimeout(type, 45 + Math.random() * 60); };
  reduce ? (typedEl.textContent = phrase) : setTimeout(type, 1800);

  /* ---------- DNA helix (canvas) ---------- */
  const cv = $("#helix"), ctx = cv.getContext("2d");
  let W, H, dpr, tilt = 0, tiltTarget = 0, t = 0, visible = true;
  const resize = () => {
    dpr = Math.min(devicePixelRatio || 1, 2);
    W = cv.clientWidth; H = cv.clientHeight;
    cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  resize(); addEventListener("resize", resize);
  addEventListener("mousemove", e => { tiltTarget = (e.clientX / innerWidth - 0.5) * 0.5; });
  new IntersectionObserver(([en]) => (visible = en.isIntersecting)).observe(cv);

  const hex2rgb = h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16));
  const STOPS = PALETTE.map(hex2rgb);
  const colorAt = f => {
    const s = Math.min(Math.max(f, 0), 0.9999) * (STOPS.length - 1), i = Math.floor(s), k = s - i;
    return STOPS[i].map((c, j) => Math.round(c + (STOPS[i + 1][j] - c) * k));
  };

  function drawHelix() {
    ctx.clearRect(0, 0, W, H);
    const N = 26, R = Math.min(W * 0.28, 120), top = H * 0.06, span = H * 0.88, cx = W / 2;
    tilt += (tiltTarget - tilt) * 0.05;
    const pts = [];
    for (let i = 0; i < N; i++) {
      const f = i / (N - 1), y = top + f * span, a = i * 0.48 + t;
      for (const ph of [0, Math.PI]) {
        const x = Math.cos(a + ph), z = Math.sin(a + ph);
        pts.push({ i, f, x: cx + x * R + (y - H / 2) * tilt, y, z, strand: ph });
      }
    }
    // rungs
    for (let i = 0; i < N; i++) {
      const a = pts[i * 2], b = pts[i * 2 + 1];
      const c = colorAt(a.f);
      const g = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
      g.addColorStop(0, `rgba(${c},${0.25 + (a.z + 1) * 0.2})`);
      g.addColorStop(1, `rgba(${c},${0.25 + (b.z + 1) * 0.2})`);
      ctx.strokeStyle = g; ctx.lineWidth = 4; ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
    }
    // backbone curves
    for (const ph of [0, Math.PI]) {
      const s = pts.filter(p => p.strand === ph);
      ctx.beginPath();
      s.forEach((p, k) => (k ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)));
      ctx.strokeStyle = "rgba(173,173,173,.25)"; ctx.lineWidth = 2; ctx.stroke();
    }
    // spheres, back to front
    pts.sort((p, q) => p.z - q.z).forEach(p => {
      const c = colorAt(p.f), d = (p.z + 1) / 2, r = 6 + d * 10;
      const g = ctx.createRadialGradient(p.x - r * 0.35, p.y - r * 0.35, r * 0.1, p.x, p.y, r);
      g.addColorStop(0, `rgba(255,255,255,${0.6 + d * 0.4})`);
      g.addColorStop(0.35, `rgba(${c},${0.55 + d * 0.45})`);
      g.addColorStop(1, `rgba(${c.map(v => v - 30)},${0.5 + d * 0.5})`);
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, Math.PI * 2); ctx.fill();
    });
  }
  (function helixLoop() {
    if (visible) { t += reduce ? 0 : 0.012; drawHelix(); }
    requestAnimationFrame(helixLoop);
  })();

  /* ---------- scroll-driven stuff ---------- */
  const progress = $(".progress span");
  const scrub = $("#scrubText");
  const highlight = ["2019", "Clarissa", "Rocha,", "sobrevivem", "quimioterapia."];
  scrub.innerHTML = scrub.textContent.split(/\s+/).map(w =>
    `<span class="w${highlight.includes(w) ? " hl" : ""}">${w}</span>`).join(" ");
  const scrubWords = $$(".w", scrub);

  const hs = $(".hscroll"), track = $("#hTrack");
  const isDesktop = () => innerWidth > 960;
  const sizeH = () => {
    if (!isDesktop()) { hs.style.height = ""; return; }
    const last = track.lastElementChild;
    const padR = parseFloat(getComputedStyle(track).paddingRight) || 0;
    const extra = last.offsetLeft + last.offsetWidth + padR - $("#hView").clientWidth;
    hs.style.height = `${innerHeight + Math.max(extra, 0)}px`;
  };
  addEventListener("resize", sizeH); addEventListener("load", sizeH); sizeH();

  const timeline = $("#timeline");

  function onScroll() {
    const y = scrollY, max = document.documentElement.scrollHeight - innerHeight;
    progress.style.transform = `scaleX(${y / max})`;
    if (!nav.classList.contains("open")) nav.classList.toggle("hide", y > lastY && y > 300);
    lastY = y;

    // word scrub
    const r = scrub.getBoundingClientRect();
    const p = Math.min(Math.max((innerHeight * 0.85 - r.top) / (r.height + innerHeight * 0.35), 0), 1);
    const n = Math.round(p * scrubWords.length);
    scrubWords.forEach((w, i) => w.classList.toggle("on", i < n));

    // horizontal research
    if (isDesktop()) {
      const hr = hs.getBoundingClientRect();
      const dist = hs.offsetHeight - innerHeight;
      const hp = Math.min(Math.max(-hr.top / dist, 0), 1);
      const maxX = hs.offsetHeight - innerHeight;
      track.style.transform = `translateX(${-hp * maxX}px)`;
    }

    // timeline fill
    const tr = timeline.getBoundingClientRect();
    const tp = Math.min(Math.max((innerHeight * 0.6 - tr.top) / tr.height, 0), 1);
    timeline.style.setProperty("--fill", `${tp * 100}%`);
  }
  addEventListener("scroll", () => requestAnimationFrame(onScroll), { passive: true });
  onScroll();

  /* ---------- team ---------- */
  const grid = $("#teamGrid");
  const initials = n => n.split(" ").filter(p => /^[A-ZÀ-Ú]/.test(p)).slice(0, 2).map(p => p[0]).join("");
  const pair = i => [PALETTE[i % PALETTE.length], PALETTE[(i + 2) % PALETTE.length]];
  const avatar = (m, i) => {
    const [a1, a2] = pair(i);
    return `<div class="avatar" style="--a1:${a1};--a2:${a2};animation-delay:${-i * 1.3}s">${
      m.foto ? `<img src="${m.foto}" alt="Foto de ${m.nome}" loading="lazy">` : initials(m.nome)}</div>`;
  };
  grid.innerHTML = TEAM.map((m, i) => `
    <button class="member reveal" data-group="${m.grupo}" data-i="${i}" style="transition-delay:${(i % 4) * 0.08}s">
      ${avatar(m, i)}
      <span class="plus" aria-hidden="true">+</span>
      <h3>${m.nome}</h3>
      <p class="role">${m.cargo}</p>
      <div class="mini-tags">${m.temas.map(t => `<span>${t}</span>`).join("")}</div>
    </button>`).join("");
  observeReveals();

  $$(".filters .chip").forEach(btn => btn.addEventListener("click", () => {
    $$(".filters .chip").forEach(b => b.classList.toggle("is-active", b === btn));
    const f = btn.dataset.filter;
    $$(".member").forEach(card => {
      const show = f === "all" || card.dataset.group === f;
      card.classList.toggle("hidden", !show);
      if (show) { card.classList.remove("pop"); void card.offsetWidth; card.classList.add("pop", "in"); }
    });
  }));

  const modal = $("#modal"), body = $("#modalBody");
  grid.addEventListener("click", e => {
    const card = e.target.closest(".member"); if (!card) return;
    const i = +card.dataset.i, m = TEAM[i], [a1, a2] = pair(i);
    body.innerHTML = `
      <div class="modal__top" style="--a1:${a1};--a2:${a2}">
        ${avatar(m, i)}
        <div><h3>${m.completo}</h3><p>${m.cargo}</p></div>
      </div>
      <div class="modal__content">
        <h4>Sobre</h4><p>${m.bio}</p>
        <h4>Temas</h4><div class="mini-tags">${m.temas.map(t => `<span>${t}</span>`).join("")}</div>
        <div class="modal__links">${Object.entries(m.links).map(([k, v]) => `<a href="${v}" target="_blank" rel="noopener">${k} ↗</a>`).join("")}</div>
      </div>`;
    openDialog(modal);
    $(".modal__close", modal).focus();
  });
  /* fechar qualquer janela: botão ×, botão "voltar", clique fora ou tecla Esc */
  $$("dialog").forEach(dlg => {
    $$("[data-close]", dlg).forEach(b => b.addEventListener("click", () => dlg.close()));
    dlg.addEventListener("click", e => {
      const r = dlg.getBoundingClientRect();
      const outside = e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
      if (e.target === dlg && outside) dlg.close();
    });
    dlg.addEventListener("close", () => document.body.classList.remove("dialog-open"));
  });
  const openDialog = dlg => { document.body.classList.add("dialog-open"); dlg.showModal(); };

  /* ---------- publications ---------- */
  const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  function renderPubs(q = "") {
    const query = q.trim().toLowerCase();
    const hl = s => query ? s.replace(new RegExp(`(${esc(query)})`, "ig"), "<mark>$1</mark>") : s;
    const list = PUBS.filter(p => !query || [p.titulo, p.autores, p.revista, p.tipo || "", ...p.temas].join(" ").toLowerCase().includes(query));
    if (!list.length) { timeline.innerHTML = `<li class="empty">nenhum trabalho encontrado ✿ tente outro termo</li>`; return; }
    const years = [...new Set(list.map(p => p.ano))].sort((a, b) => b - a);
    timeline.innerHTML = years.map(y => `
      <li class="year-group">
        <span class="year-group__label"></span>
        <h3>${y}</h3>
        ${list.filter(p => p.ano === y).map(p => `
          <a class="pub" href="${p.link}" target="_blank" rel="noopener">
            <div>
              <h4>${hl(p.titulo)}</h4>
              <p>${hl(p.autores)}</p>
              ${p.tipo === "revisão" ? `<span class="badge">artigo de revisão</span>` : ""}
              ${p.revista ? `<span class="journal">${hl(p.revista)}</span>` : ""}
              <div class="mini-tags">${p.temas.map(t => `<span>${hl(t)}</span>`).join("")}</div>
            </div>
            <span class="pub__go" aria-hidden="true">→</span>
          </a>`).join("")}
      </li>`).join("");
    observeReveals();
    onScroll();
  }
  renderPubs();
  $("#pubSearch").addEventListener("input", e => renderPubs(e.target.value));

    /* ---------- prêmios ---------- */
  const aGrid = $("#awardsGrid");
  const COLORS = { mint: "var(--mint)", blue: "var(--blue)", lilac: "var(--lilac)", pink: "var(--pink)" };
  aGrid.innerHTML = PRIZES.map((p, i) => `
    <button class="award reveal" data-i="${i}" style="--ac:${COLORS[p.cor] || "var(--pink)"}; transition-delay:${(i % 3) * 0.1}s">
      <span class="medal" aria-hidden="true">
        <span class="medal__ribbon l"></span><span class="medal__ribbon r"></span>
        <span class="medal__rosette"></span>
        <span class="medal__face">${p.icone || "🏅"}<span class="medal__shine"></span></span>
      </span>
      ${p.ano ? `<span class="award__year">${p.ano}</span>` : ""}
      <h3>${p.titulo}</h3>
      ${p.categoria ? `<p class="award__cat">${p.categoria}</p>` : ""}
      ${p.quem ? `<p class="award__who">${p.quem}</p>` : ""}
      <span class="award__cta">ver fotos ✿</span>
    </button>`).join("") + `
    <div class="award award--soon reveal">
      <div class="soon__icon">🌷</div>
      <h3>o próximo é nosso!</h3>
      <p>em breve, mais conquistas por aqui</p>
    </div>`;
  observeReveals();

  // confete fofo saindo do ponto do clique
  const burst = (x, y) => {
    if (reduce) return;
    const hearts = ["♡", "✿", "✦"];
    for (let k = 0; k < 26; k++) {
      const s = document.createElement("span");
      const ang = Math.random() * Math.PI * 2, dist = 80 + Math.random() * 140;
      const isHeart = k % 5 === 0;
      s.className = "confetti" + (isHeart ? " heart" : "");
      if (isHeart) { s.textContent = hearts[k % 3]; s.style.color = PALETTE[k % PALETTE.length]; }
      else s.style.background = PALETTE[k % PALETTE.length];
      s.style.left = x + "px"; s.style.top = y + "px";
      s.style.setProperty("--dx", Math.cos(ang) * dist + "px");
      s.style.setProperty("--dy", Math.sin(ang) * dist + 60 + "px");
      s.style.setProperty("--rot", (Math.random() * 720 - 360) + "deg");
      document.body.appendChild(s);
      setTimeout(() => s.remove(), 1200);
    }
  };

  aGrid.addEventListener("click", e => {
    const card = e.target.closest(".award:not(.award--soon)"); if (!card) return;
    const p = PRIZES[+card.dataset.i];
    burst(e.clientX || innerWidth / 2, e.clientY || innerHeight / 2);
    const fotos = p.fotos && p.fotos.length ? p.fotos : [null, null, null];
    const icons2 = ["🏆", "📸", "🎉"];
    const slides = fotos.map((f, k) => {
      const [a1, a2] = pair(k + 1);
      return `<div class="prize__slide">${f ? `<img src="${f}" alt="${p.titulo}, foto ${k + 1}">`
        : `<div class="gph" style="--a1:${a1};--a2:${a2}"><span>${icons2[k % 3]}</span><small>sua foto aqui</small></div>`}</div>`;
    }).join("");
    body.innerHTML = `
      <div class="prize__carousel">
        <div class="prize__track">${slides}</div>
        ${fotos.length > 1 ? `<button class="prize__nav prev" aria-label="Foto anterior">‹</button><button class="prize__nav next" aria-label="Próxima foto">›</button>
        <div class="prize__dots">${fotos.map((_, k) => `<button aria-label="Foto ${k + 1}"${k ? "" : ' class="on"'}></button>`).join("")}</div>` : ""}
      </div>
      <div class="prize__head">
        ${p.ano ? `<span class="award__year">${p.ano}</span>` : ""}
        <h3>${p.titulo}</h3>
        ${p.categoria ? `<p class="award__cat">${p.categoria}</p>` : ""}
      </div>
      <div class="modal__content" style="padding-top:.6rem">
        ${p.quem ? `<p class="award__who" style="margin:0">${p.quem}</p>` : ""}
        <p>${p.descricao || ""}</p>
        ${p.link ? `<div class="modal__links"><a href="${p.link}" target="_blank" rel="noopener">saiba mais ↗</a></div>` : ""}
      </div>`;
    let si = 0;
    const track2 = $(".prize__track", body), dots = $$(".prize__dots button", body);
    const go = k => { si = (k + fotos.length) % fotos.length; track2.style.transform = `translateX(${-si * 100}%)`; dots.forEach((d, n) => d.classList.toggle("on", n === si)); };
    $(".prize__nav.prev", body)?.addEventListener("click", () => go(si - 1));
    $(".prize__nav.next", body)?.addEventListener("click", () => go(si + 1));
    dots.forEach((d, n) => d.addEventListener("click", () => go(n)));
    let sx0 = 0;
    track2.addEventListener("touchstart", ev => (sx0 = ev.touches[0].clientX), { passive: true });
    track2.addEventListener("touchend", ev => { const dx = ev.changedTouches[0].clientX - sx0; if (Math.abs(dx) > 40) go(si + (dx < 0 ? 1 : -1)); });
    modal.onkeydown = ev => { if (!track2.isConnected) return; if (ev.key === "ArrowLeft") go(si - 1); if (ev.key === "ArrowRight") go(si + 1); };
    setTimeout(() => { openDialog(modal); $(".modal__close", modal).focus(); }, reduce ? 0 : 280);
  });


  /* ---------- galeria + lightbox ---------- */
  const gGrid = $("#galleryGrid"), lb = $("#lightbox"), lbMedia = $("#lbMedia"), lbCap = $("#lbCap");
  const icons = ["🧫", "🔬", "🧬", "💜", "☕", "✨", "🎓", "🌸"];
  const ph = (g, i) => {
    const [a1, a2] = pair(i);
    return `<div class="gph" style="--a1:${a1};--a2:${a2}"><span>${icons[i % icons.length]}</span><small>sua foto aqui</small></div>`;
  };
  const media = (g, i) => g.src ? `<img src="${g.src}" alt="${g.legenda}" loading="lazy">` : ph(g, i);
  gGrid.innerHTML = GALLERY.map((g, i) => `
    <button class="gitem gitem--${g.formato || "quadrado"} reveal" data-i="${i}" style="--rot:${[-2, 1.5, -1, 2.5, -1.5, 1][i % 6]}deg; transition-delay:${(i % 4) * 0.07}s">
      <span class="gitem__frame">${media(g, i)}</span>
      <span class="gitem__cap">${g.legenda}</span>
    </button>`).join("");
  observeReveals();
  let gi = 0;
  const showG = i => {
    gi = (i + GALLERY.length) % GALLERY.length;
    const g = GALLERY[gi];
    lbMedia.innerHTML = media(g, gi);
    lbCap.textContent = `${g.legenda} · ${gi + 1}/${GALLERY.length}`;
  };
  gGrid.addEventListener("click", e => {
    const it = e.target.closest(".gitem"); if (!it) return;
    showG(+it.dataset.i); openDialog(lb);
  });
  $("#lbPrev").addEventListener("click", () => showG(gi - 1));
  $("#lbNext").addEventListener("click", () => showG(gi + 1));
  lb.addEventListener("keydown", e => {
    if (e.key === "ArrowLeft") showG(gi - 1);
    if (e.key === "ArrowRight") showG(gi + 1);
  });
  let tx = 0;
  lb.addEventListener("touchstart", e => (tx = e.touches[0].clientX), { passive: true });
  lb.addEventListener("touchend", e => { const dx = e.changedTouches[0].clientX - tx; if (Math.abs(dx) > 50) showG(gi + (dx < 0 ? 1 : -1)); });

  /* ---------- tilt cards ---------- */
  if (finePointer && !reduce) {
    $$(".tilt").forEach(card => {
      card.addEventListener("mousemove", e => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
      });
      card.addEventListener("mouseleave", () => (card.style.transform = ""));
    });
  }

  /* ---------- draggable stickers ---------- */
  const board = $("#board");
  $$(".drag", board).forEach(st => {
    let sx, sy, ox, oy;
    st.addEventListener("pointerdown", e => {
      st.setPointerCapture(e.pointerId);
      st.classList.add("dragging");
      const br = board.getBoundingClientRect(), r = st.getBoundingClientRect();
      ox = r.left - br.left; oy = r.top - br.top; sx = e.clientX; sy = e.clientY;
      Object.assign(st.style, { left: ox + "px", top: oy + "px", right: "auto", bottom: "auto" });
    });
    st.addEventListener("pointermove", e => {
      if (!st.classList.contains("dragging")) return;
      const br = board.getBoundingClientRect();
      const nx = Math.min(Math.max(ox + e.clientX - sx, 0), br.width - st.offsetWidth);
      const ny = Math.min(Math.max(oy + e.clientY - sy, 0), br.height - st.offsetHeight);
      st.style.left = nx + "px"; st.style.top = ny + "px";
    });
    const end = () => st.classList.remove("dragging");
    st.addEventListener("pointerup", end); st.addEventListener("pointercancel", end);
  });
})();

