// PROMPT_X — main site script

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("promptGrid");
  const styleGrid = document.getElementById("styleGrid");
  const tabFilters = document.getElementById("tabFilters");
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");

  let visibleCount = 8;

  // ---------- Mobile nav ----------
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      mainNav.classList.toggle("open");
    });
  }

  // ---------- Render prompt cards ----------
  function renderGrid() {
    if (!grid) return;
    grid.innerHTML = "";
    const items = PROMPTS.slice(0, visibleCount);

    items.forEach((p) => {
      const card = document.createElement("article");
      card.className = "card";

      card.innerHTML = `
        <a class="card-link" href="generate.html?prompt=${encodeURIComponent(p.id)}">
          <div class="card-media">
            <img src="${p.img}" alt="${p.title}" loading="lazy">
            <span class="card-badge">${p.category}</span>
            <span class="card-likes">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7-4.35-9.5-8.5C.5 9 2 5 6 5c2 0 3.5 1 4 2.5C10.5 6 12 5 14 5c4 0 5.5 4 3.5 7.5C19 16.65 12 21 12 21z"/></svg>
              ${p.likes}
            </span>
          </div>
        </a>
        <div class="card-body">
          <h3 class="card-title">${p.title}</h3>
          <p class="card-snippet">${p.prompt}</p>
          <div class="card-footer">
            <span class="card-author">By PROMPT_X</span>
            <button class="copy-btn" data-id="${p.id}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
              Copy
            </button>
          </div>
        </div>
      `;

      grid.appendChild(card);
    });

    // Copy button handlers
    grid.querySelectorAll(".copy-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const id = btn.getAttribute("data-id");
        const item = PROMPTS.find((x) => x.id === id);
        if (!item) return;

        navigator.clipboard.writeText(item.prompt).then(() => {
          btn.classList.add("copied");
          const original = btn.innerHTML;
          btn.innerHTML = `
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
            Copied!
          `;
          setTimeout(() => {
            btn.classList.remove("copied");
            btn.innerHTML = original;
          }, 1600);
        }).catch(() => {
          alert("Could not copy automatically — please copy manually:\n\n" + item.prompt);
        });
      });
    });

    if (loadMoreBtn) {
      loadMoreBtn.style.display = visibleCount >= PROMPTS.length ? "none" : "inline-flex";
    }
  }

  // ---------- Load more ----------
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      visibleCount = Math.min(visibleCount + 8, PROMPTS.length);
      renderGrid();
    });
  }

  // ---------- Tabs (Latest / Trending / Popular) ----------
  if (tabFilters) {
    tabFilters.querySelectorAll(".tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        tabFilters.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");

        const mode = tab.dataset.tab;
        let sorted = [...PROMPTS];

        if (mode === "trending") {
          sorted.sort((a, b) => b.likes - a.likes);
          sorted = sorted.slice(0, 10);
        } else if (mode === "popular") {
          sorted.sort((a, b) => b.likes - a.likes);
        }
        // "all" / latest keeps original order

        PROMPTS_SORTED_OVERRIDE = sorted;
        renderGridFromList(sorted);
      });
    });
  }

  let PROMPTS_SORTED_OVERRIDE = null;

  function renderGridFromList(list) {
    if (!grid) return;
    grid.innerHTML = "";
    const items = list.slice(0, visibleCount);

    items.forEach((p) => {
      const card = document.createElement("article");
      card.className = "card";
      card.innerHTML = `
        <a class="card-link" href="generate.html?prompt=${encodeURIComponent(p.id)}">
          <div class="card-media">
            <img src="${p.img}" alt="${p.title}" loading="lazy">
            <span class="card-badge">${p.category}</span>
            <span class="card-likes">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7-4.35-9.5-8.5C.5 9 2 5 6 5c2 0 3.5 1 4 2.5C10.5 6 12 5 14 5c4 0 5.5 4 3.5 7.5C19 16.65 12 21 12 21z"/></svg>
              ${p.likes}
            </span>
          </div>
        </a>
        <div class="card-body">
          <h3 class="card-title">${p.title}</h3>
          <p class="card-snippet">${p.prompt}</p>
          <div class="card-footer">
            <span class="card-author">By PROMPT_X</span>
            <button class="copy-btn" data-id="${p.id}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
              Copy
            </button>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });

    grid.querySelectorAll(".copy-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const id = btn.getAttribute("data-id");
        const item = PROMPTS.find((x) => x.id === id);
        if (!item) return;

        navigator.clipboard.writeText(item.prompt).then(() => {
          btn.classList.add("copied");
          const original = btn.innerHTML;
          btn.innerHTML = `
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
            Copied!
          `;
          setTimeout(() => {
            btn.classList.remove("copied");
            btn.innerHTML = original;
          }, 1600);
        }).catch(() => {
          alert("Could not copy automatically — please copy manually:\n\n" + item.prompt);
        });
      });
    });

    if (loadMoreBtn) {
      loadMoreBtn.style.display = visibleCount >= list.length ? "none" : "inline-flex";
    }
  }

  // ---------- Style grid ----------
  function renderStyles() {
    if (!styleGrid) return;
    styleGrid.innerHTML = "";
    STYLES.forEach((s) => {
      const pill = document.createElement("a");
      pill.className = "style-pill";
      pill.href = `generate.html?style=${encodeURIComponent(s.key)}`;
      pill.innerHTML = `
        <span class="pill-icon">${s.name.charAt(0)}</span>
        <span class="pill-name">${s.name}</span>
        <span class="pill-count">${s.count} Prompts</span>
      `;
      styleGrid.appendChild(pill);
    });
  }

  // ---------- Hero quick filters ----------
  document.querySelectorAll(".hero-links a[data-filter]").forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("library").scrollIntoView({ behavior: "smooth" });
    });
  });

  renderGrid();
  renderStyles();
});

// ===== TRENDING POPUP =====
(function(){
  const overlay = document.getElementById("popupOverlay");
  const closeBtn = document.getElementById("popupClose");
  const skipBtn  = document.getElementById("popupSkip");

  function openPopup(){
    overlay.classList.add("visible");
    document.body.style.overflow = "hidden";
  }

  function closePopup(){
    overlay.classList.remove("visible");
    document.body.style.overflow = "";
  }

  // Show after 1.2s delay
  setTimeout(openPopup, 1200);

  closeBtn.addEventListener("click", closePopup);
  skipBtn.addEventListener("click", closePopup);

  // Close on overlay background click
  overlay.addEventListener("click", function(e){
    if(e.target === overlay) closePopup();
  });

  // Copy buttons inside popup
  document.querySelectorAll(".popup-copy-btn").forEach(function(btn){
    btn.addEventListener("click", function(){
      const text = btn.getAttribute("data-prompt");
      navigator.clipboard.writeText(text).then(function(){
        btn.classList.add("copied");
        const orig = btn.innerHTML;
        btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Copied!';
        setTimeout(function(){
          btn.classList.remove("copied");
          btn.innerHTML = orig;
        }, 1600);
      }).catch(function(){
        alert("Please copy manually:\n\n" + text);
      });
    });
  });
})();