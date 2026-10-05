/**
 * Crumb & Table - Filters Engine (Discover & Category pages)
 */

(function () {
  function getFilterState() {
    const categories = Array.from(document.querySelectorAll('input[name="categoryFilter"]:checked')).map(el => el.value);
    const minRating = document.querySelector('input[name="ratingFilter"]:checked')?.value || 0;
    const priceLevels = Array.from(document.querySelectorAll('input[name="priceFilter"]:checked')).map(el => parseInt(el.value));
    const openNowOnly = document.getElementById("filterOpenNow")?.checked || false;
    const dietary = Array.from(document.querySelectorAll('input[name="dietaryFilter"]:checked')).map(el => el.value);
    const amenities = Array.from(document.querySelectorAll('input[name="amenitiesFilter"]:checked')).map(el => el.value);
    const sortBy = document.getElementById("discoverSortSelect")?.value || "recommended";
    const searchQuery = document.getElementById("discoverSearchInput")?.value.toLowerCase().trim() || "";

    return {
      categories,
      minRating: parseFloat(minRating),
      priceLevels,
      openNowOnly,
      dietary,
      amenities,
      sortBy,
      searchQuery
    };
  }

  function filterVenues(venues, filters) {
    return venues.filter(v => {
      // Search query
      if (filters.searchQuery) {
        const matchesSearch = v.name.toLowerCase().includes(filters.searchQuery) ||
          v.category.toLowerCase().includes(filters.searchQuery) ||
          v.description.toLowerCase().includes(filters.searchQuery) ||
          v.neighborhood.toLowerCase().includes(filters.searchQuery);
        if (!matchesSearch) return false;
      }

      // Categories
      if (filters.categories.length > 0) {
        if (!filters.categories.includes(v.categorySlug) && !filters.categories.includes(v.category)) {
          return false;
        }
      }

      // Rating
      if (filters.minRating > 0 && v.rating < filters.minRating) {
        return false;
      }

      // Price
      if (filters.priceLevels.length > 0 && !filters.priceLevels.includes(v.priceLevel)) {
        return false;
      }

      // Open now
      if (filters.openNowOnly && !v.openingHours.isOpen) {
        return false;
      }

      // Dietary
      if (filters.dietary.length > 0) {
        const hasDietary = filters.dietary.some(d => v.dietary && v.dietary.some(vd => vd.toLowerCase().includes(d.toLowerCase())));
        if (!hasDietary) return false;
      }

      // Amenities
      if (filters.amenities.length > 0) {
        const hasAmenity = filters.amenities.every(a => v.amenities && v.amenities.some(va => va.toLowerCase().includes(a.toLowerCase())));
        if (!hasAmenity) return false;
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === "highest-rated") {
        return b.rating - a.rating;
      } else if (filters.sortBy === "nearest") {
        return parseFloat(a.distance) - parseFloat(b.distance);
      } else if (filters.sortBy === "newest") {
        return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      } else if (filters.sortBy === "trending") {
        return (b.trendingScore || 0) - (a.trendingScore || 0);
      }
      return (b.trendingScore || 0) - (a.trendingScore || 0);
    });
  }

  function renderVenueGrid(venues, containerId = "discoverVenueGrid") {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (venues.length === 0) {
      container.innerHTML = `
        <div class="col-12 text-center py-5">
          <div class="p-5 bg-surface rounded-4 border border-subtle">
            <i class="bi bi-compass display-4 text-muted mb-3 d-block"></i>
            <h4 class="fw-bold mb-2">No matching bakeries or dessert spots found</h4>
            <p class="text-muted mb-4">Try clearing some of your filter criteria or broadening your search keywords.</p>
            <button class="btn btn-primary-custom" id="resetFiltersBtn" type="button">
              <i class="bi bi-arrow-counterclockwise"></i> Reset All Filters
            </button>
          </div>
        </div>
      `;
      const resetBtn = document.getElementById("resetFiltersBtn");
      if (resetBtn) resetBtn.addEventListener("click", resetAllFilters);
      return;
    }

    container.innerHTML = venues.map(v => `
      <div class="col-md-6 col-lg-4 mb-4 fade-in-up">
        <div class="venue-card">
          <div class="venue-card-img-wrapper">
            <img src="${v.images.cover}" alt="${v.name}" class="venue-card-img" loading="lazy">
            ${v.badge ? `<span class="venue-badge-pill">${v.badge}</span>` : ""}
            <button class="venue-save-btn" data-save-venue="${v.id}" data-venue-name="${v.name}" title="Save Place">
              <i class="bi bi-bookmark"></i>
            </button>
          </div>
          <div class="venue-card-body">
            <div class="venue-category-row">
              <span class="venue-category-label">${v.category}</span>
              <span class="venue-price-indicator">${v.priceRange}</span>
            </div>
            <h3 class="venue-title">
              <a href="venue-details.html?id=${v.id}">${v.name}</a>
            </h3>
            <p class="venue-description">${v.description}</p>
            <div class="venue-meta-row">
              <span class="rating-badge"><i class="bi bi-star-fill"></i> ${v.rating} <small class="text-muted">(${v.reviewCount})</small></span>
              <span class="status-badge ${v.openingHours.isOpen ? 'open' : ''}">${v.openingHours.status}</span>
              <span class="ms-auto text-muted"><i class="bi bi-geo-alt"></i> ${v.distance}</span>
            </div>
          </div>
        </div>
      </div>
    `).join("");

    if (window.FavoritesManager) {
      window.FavoritesManager.updateAllSaveButtons();
    }
  }

  function updateResultsCount(count) {
    const counter = document.getElementById("resultsCountBadge");
    if (counter) {
      counter.textContent = `${count} ${count === 1 ? 'place' : 'places'} found`;
    }
  }

  function applyAndRefreshFilters() {
    if (typeof VENUES_DATA === 'undefined') return;
    const filters = getFilterState();
    const results = filterVenues(VENUES_DATA, filters);
    renderVenueGrid(results);
    updateResultsCount(results.length);
  }

  function resetAllFilters() {
    document.querySelectorAll('input[name="categoryFilter"]').forEach(el => el.checked = false);
    document.querySelectorAll('input[name="ratingFilter"]').forEach(el => el.checked = false);
    document.querySelectorAll('input[name="priceFilter"]').forEach(el => el.checked = false);
    document.querySelectorAll('input[name="dietaryFilter"]').forEach(el => el.checked = false);
    document.querySelectorAll('input[name="amenitiesFilter"]').forEach(el => el.checked = false);
    const openNow = document.getElementById("filterOpenNow");
    if (openNow) openNow.checked = false;
    const search = document.getElementById("discoverSearchInput");
    if (search) search.value = "";
    const sort = document.getElementById("discoverSortSelect");
    if (sort) sort.value = "recommended";

    applyAndRefreshFilters();
    if (window.showToast) window.showToast("All filters reset", "bi-arrow-counterclockwise");
  }

  document.addEventListener("DOMContentLoaded", () => {
    // Check if on discover page
    const discoverContainer = document.getElementById("discoverVenueGrid");
    if (discoverContainer) {
      // Check category in URL
      const urlParams = new URLSearchParams(window.location.search);
      const catParam = urlParams.get("category");
      if (catParam) {
        const checkbox = document.querySelector(`input[name="categoryFilter"][value="${catParam}"]`);
        if (checkbox) checkbox.checked = true;
      }

      applyAndRefreshFilters();

      // Listen to filter change events
      document.querySelectorAll(".filter-control-input").forEach(input => {
        input.addEventListener("change", applyAndRefreshFilters);
      });

      const sortSelect = document.getElementById("discoverSortSelect");
      if (sortSelect) sortSelect.addEventListener("change", applyAndRefreshFilters);

      const searchInput = document.getElementById("discoverSearchInput");
      if (searchInput) searchInput.addEventListener("input", applyAndRefreshFilters);

      const resetBtn = document.getElementById("clearAllFiltersBtn");
      if (resetBtn) resetBtn.addEventListener("click", resetAllFilters);
    }
  });

  window.FiltersEngine = {
    getFilterState,
    filterVenues,
    applyAndRefreshFilters,
    resetAllFilters
  };
})();
