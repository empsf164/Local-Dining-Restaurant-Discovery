/**
 * Crumb & Table - Menu Explorer Engine
 */

(function () {
  let currentCategory = "all";
  let currentDietary = "all";
  let currentSort = "popular";
  let currentSearch = "";

  function renderMenuItems() {
    const container = document.getElementById("menuItemsGrid");
    if (!container || typeof MENU_ITEMS_DATA === 'undefined') return;

    let items = [...MENU_ITEMS_DATA];

    // Category filter
    if (currentCategory !== "all") {
      items = items.filter(item => item.categorySlug === currentCategory || item.category.toLowerCase().includes(currentCategory));
    }

    // Dietary filter
    if (currentDietary !== "all") {
      items = items.filter(item => item.dietary && item.dietary.some(d => d.toLowerCase().includes(currentDietary.toLowerCase())));
    }

    // Search query
    if (currentSearch) {
      const q = currentSearch.toLowerCase();
      items = items.filter(item => item.name.toLowerCase().includes(q) || item.description.toLowerCase().includes(q) || item.venueName.toLowerCase().includes(q));
    }

    // Sorting
    if (currentSort === "price-low") {
      items.sort((a, b) => a.numericPrice - b.numericPrice);
    } else if (currentSort === "price-high") {
      items.sort((a, b) => b.numericPrice - a.numericPrice);
    } else if (currentSort === "popular") {
      items.sort((a, b) => (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0));
    }

    if (items.length === 0) {
      container.innerHTML = `
        <div class="col-12 text-center py-5">
          <div class="p-5 bg-surface rounded-4 border border-subtle">
            <i class="bi bi-cup-hot display-4 text-muted mb-3 d-block"></i>
            <h4 class="fw-bold mb-2">No menu items match your selection</h4>
            <p class="text-muted mb-3">Try clearing dietary filters or searching for another treat.</p>
            <button class="btn btn-secondary-custom" id="resetMenuFiltersBtn" type="button">Reset Filters</button>
          </div>
        </div>
      `;
      const resetBtn = document.getElementById("resetMenuFiltersBtn");
      if (resetBtn) resetBtn.addEventListener("click", resetMenuFilters);
      return;
    }

    container.innerHTML = items.map(item => `
      <div class="col-md-6 col-lg-4 mb-4 fade-in-up">
        <div class="menu-item-card">
          <img src="${item.image}" alt="${item.name}" class="menu-item-img" loading="lazy" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1524351199678-941a58a3df50?q=80&w=800&auto=format&fit=crop';">
          <div class="menu-item-info">
            <div class="menu-item-header">
              <h4 class="menu-item-title">${item.name}</h4>
              <span class="menu-item-price">${item.price}</span>
            </div>
            <a href="venue-details.html?id=${item.venueId}" class="small text-muted mb-2 text-truncate d-block">
              <i class="bi bi-shop me-1 text-terracotta"></i> ${item.venueName}
            </a>
            <p class="menu-item-desc">${item.description}</p>
            <div class="mt-auto d-flex align-items-center justify-content-between pt-2 border-top border-subtle">
              <div class="d-flex flex-wrap gap-1">
                ${(item.dietary || []).map(d => `<span class="dietary-tag">${d}</span>`).join("")}
              </div>
              <button class="btn btn-sm text-muted p-0" data-save-menu="${item.id}" data-item-name="${item.name}" title="Favorite Item">
                <i class="bi bi-heart fs-6"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    `).join("");

    if (window.FavoritesManager) {
      window.FavoritesManager.updateAllSaveButtons();
    }
  }

  function resetMenuFilters() {
    currentCategory = "all";
    currentDietary = "all";
    currentSearch = "";
    currentSort = "popular";

    document.querySelectorAll(".menu-cat-btn").forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-category") === "all");
    });

    document.querySelectorAll(".dietary-filter-pill").forEach(pill => {
      pill.classList.toggle("active", pill.getAttribute("data-dietary") === "all");
    });

    const searchInput = document.getElementById("menuSearchInput");
    if (searchInput) searchInput.value = "";

    const sortSelect = document.getElementById("menuSortSelect");
    if (sortSelect) sortSelect.value = "popular";

    renderMenuItems();
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("menuExplorerPage")) {
      renderMenuItems();

      // Category tab clicks
      document.querySelectorAll(".menu-cat-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          document.querySelectorAll(".menu-cat-btn").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          currentCategory = btn.getAttribute("data-category");
          renderMenuItems();
        });
      });

      // Dietary filter pills
      document.querySelectorAll(".dietary-filter-pill").forEach(pill => {
        pill.addEventListener("click", () => {
          document.querySelectorAll(".dietary-filter-pill").forEach(p => p.classList.remove("active"));
          pill.classList.add("active");
          currentDietary = pill.getAttribute("data-dietary");
          renderMenuItems();
        });
      });

      // Search input
      const searchInput = document.getElementById("menuSearchInput");
      if (searchInput) {
        searchInput.addEventListener("input", (e) => {
          currentSearch = e.target.value.trim();
          renderMenuItems();
        });
      }

      // Sort select
      const sortSelect = document.getElementById("menuSortSelect");
      if (sortSelect) {
        sortSelect.addEventListener("change", (e) => {
          currentSort = e.target.value;
          renderMenuItems();
        });
      }
    }
  });

  window.MenuExplorer = {
    renderMenuItems,
    resetMenuFilters
  };
})();
