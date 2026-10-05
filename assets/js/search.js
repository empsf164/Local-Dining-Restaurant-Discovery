/**
 * Crumb & Table - Global Search Engine & Overlay
 */

(function () {
  let searchModal = null;
  let searchInput = null;
  let searchResults = null;

  function initSearchOverlay() {
    searchModal = document.getElementById("globalSearchModal");
    if (!searchModal) return;

    searchInput = searchModal.querySelector(".search-modal-input");
    searchResults = searchModal.querySelector(".search-modal-results");

    // Open triggers
    document.querySelectorAll("[data-open-search]").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        openSearch();
      });
    });

    // Close triggers
    searchModal.querySelectorAll("[data-close-search]").forEach(btn => {
      btn.addEventListener("click", () => closeSearch());
    });

    searchModal.addEventListener("click", (e) => {
      if (e.target === searchModal) closeSearch();
    });

    // Live typing filter
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        handleSearchInput(e.target.value.trim());
      });
    }

    // Keyboard shortcut '/' or 'Ctrl+K' / 'Cmd+K'
    document.addEventListener("keydown", (e) => {
      if ((e.key === "/" && document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA") ||
          ((e.ctrlKey || e.metaKey) && e.key === "k")) {
        e.preventDefault();
        openSearch();
      } else if (e.key === "Escape" && searchModal.classList.contains("active")) {
        closeSearch();
      }
    });
  }

  function openSearch() {
    if (!searchModal) return;
    searchModal.classList.add("active");
    document.body.style.overflow = "hidden";
    if (searchInput) {
      searchInput.value = "";
      setTimeout(() => searchInput.focus(), 50);
      renderDefaultSuggestions();
    }
  }

  function closeSearch() {
    if (!searchModal) return;
    searchModal.classList.remove("active");
    document.body.style.overflow = "";
  }

  function renderDefaultSuggestions() {
    if (!searchResults) return;
    searchResults.innerHTML = `
      <div class="mb-4">
        <div class="search-result-group-title"><i class="bi bi-fire text-warning me-1"></i> Popular Searches</div>
        <div class="d-flex flex-wrap gap-2">
          <button class="btn btn-sm btn-secondary-custom py-1 px-3 search-tag-btn" type="button" data-term="croissant">Croissants</button>
          <button class="btn btn-sm btn-secondary-custom py-1 px-3 search-tag-btn" type="button" data-term="sourdough">Artisan Sourdough</button>
          <button class="btn btn-sm btn-secondary-custom py-1 px-3 search-tag-btn" type="button" data-term="cheesecake">Basque Cheesecake</button>
          <button class="btn btn-sm btn-secondary-custom py-1 px-3 search-tag-btn" type="button" data-term="chocolate">Chocolatiers</button>
          <button class="btn btn-sm btn-secondary-custom py-1 px-3 search-tag-btn" type="button" data-term="patisserie">French Patisseries</button>
        </div>
      </div>

      <div class="mb-2">
        <div class="search-result-group-title"><i class="bi bi-star-fill text-warning me-1"></i> Editor's Top Places</div>
        ${(typeof VENUES_DATA !== 'undefined' ? VENUES_DATA.slice(0, 3) : []).map(v => `
          <a href="venue-details.html?id=${v.id}" class="search-result-item">
            <img src="${v.images.cover}" alt="${v.name}" class="search-result-thumb">
            <div class="flex-grow-1 min-w-0">
              <div class="fw-bold text-truncate">${v.name}</div>
              <div class="small text-muted">${v.category} · ${v.neighborhood}</div>
            </div>
            <span class="rating-badge small"><i class="bi bi-star-fill"></i> ${v.rating}</span>
          </a>
        `).join("")}
      </div>
    `;

    // Bind tag click
    searchResults.querySelectorAll(".search-tag-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const term = btn.getAttribute("data-term");
        if (searchInput) {
          searchInput.value = term;
          handleSearchInput(term);
        }
      });
    });
  }

  function handleSearchInput(query) {
    if (!searchResults) return;
    if (!query) {
      renderDefaultSuggestions();
      return;
    }

    const q = query.toLowerCase();

    // Match venues
    const matchedVenues = (typeof VENUES_DATA !== 'undefined' ? VENUES_DATA : []).filter(v => 
      v.name.toLowerCase().includes(q) ||
      v.category.toLowerCase().includes(q) ||
      v.description.toLowerCase().includes(q) ||
      v.neighborhood.toLowerCase().includes(q) ||
      v.signatureDishes.some(d => d.name.toLowerCase().includes(q))
    );

    // Match categories
    const matchedCategories = (typeof CATEGORIES_DATA !== 'undefined' ? CATEGORIES_DATA : []).filter(c => 
      c.name.toLowerCase().includes(q) || c.description.toLowerCase().includes(q)
    );

    // Match guides
    const matchedGuides = (typeof GUIDES_DATA !== 'undefined' ? GUIDES_DATA : []).filter(g => 
      g.title.toLowerCase().includes(q) || g.excerpt.toLowerCase().includes(q)
    );

    if (matchedVenues.length === 0 && matchedCategories.length === 0 && matchedGuides.length === 0) {
      searchResults.innerHTML = `
        <div class="text-center py-5">
          <i class="bi bi-search display-5 text-muted mb-3 d-block"></i>
          <h5 class="fw-bold mb-2">No discoveries found for "${query}"</h5>
          <p class="text-muted small">Try searching for "croissant", "sourdough", "patisserie", or "chocolate".</p>
        </div>
      `;
      return;
    }

    let html = "";

    if (matchedVenues.length > 0) {
      html += `
        <div class="mb-4">
          <div class="search-result-group-title">Places (${matchedVenues.length})</div>
          ${matchedVenues.map(v => `
            <a href="venue-details.html?id=${v.id}" class="search-result-item">
              <img src="${v.images.cover}" alt="${v.name}" class="search-result-thumb">
              <div class="flex-grow-1 min-w-0">
                <div class="fw-bold text-truncate">${v.name}</div>
                <div class="small text-muted">${v.category} · ${v.neighborhood} · ${v.distance}</div>
              </div>
              <span class="rating-badge small"><i class="bi bi-star-fill"></i> ${v.rating}</span>
            </a>
          `).join("")}
        </div>
      `;
    }

    if (matchedCategories.length > 0) {
      html += `
        <div class="mb-4">
          <div class="search-result-group-title">Categories</div>
          <div class="d-flex flex-wrap gap-2">
            ${matchedCategories.map(c => `
              <a href="category-details.html?category=${c.slug}" class="btn btn-sm btn-secondary-custom py-1 px-3">
                <i class="bi bi-grid-fill text-terracotta me-1"></i> ${c.name}
              </a>
            `).join("")}
          </div>
        </div>
      `;
    }

    if (matchedGuides.length > 0) {
      html += `
        <div class="mb-2">
          <div class="search-result-group-title">Editorial Guides</div>
          ${matchedGuides.map(g => `
            <a href="guide-details.html?slug=${g.slug}" class="search-result-item">
              <img src="${g.image}" alt="${g.title}" class="search-result-thumb">
              <div class="flex-grow-1 min-w-0">
                <div class="fw-bold text-truncate">${g.title}</div>
                <div class="small text-muted">${g.category} · ${g.readTime}</div>
              </div>
              <i class="bi bi-arrow-right text-muted"></i>
            </a>
          `).join("")}
        </div>
      `;
    }

    searchResults.innerHTML = html;
  }

  document.addEventListener("DOMContentLoaded", () => {
    initSearchOverlay();

    // Check URL param search from home hero
    const urlParams = new URLSearchParams(window.location.search);
    const heroQuery = urlParams.get("q");
    if (heroQuery && window.location.pathname.includes("discover.html")) {
      const discoverSearchInput = document.getElementById("discoverSearchInput");
      if (discoverSearchInput) {
        discoverSearchInput.value = heroQuery;
      }
    }
  });

  window.SearchManager = {
    openSearch,
    closeSearch
  };
})();
