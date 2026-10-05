/**
 * Crumb & Table - Personalized Recommendations & Saved Places Engine
 */

(function () {
  function renderSavedPage() {
    const placesContainer = document.getElementById("savedPlacesGrid");
    const menuContainer = document.getElementById("savedMenuGrid");
    const guidesContainer = document.getElementById("savedGuidesGrid");

    if (!placesContainer || typeof FavoritesManager === 'undefined' || typeof VENUES_DATA === 'undefined') return;

    const state = FavoritesManager.getSavedState();

    // 1. Render Places Tab
    if (state.places.length === 0) {
      placesContainer.innerHTML = `
        <div class="col-12 text-center py-5">
          <div class="p-5 bg-surface rounded-4 border border-subtle">
            <i class="bi bi-bookmark-heart display-4 text-muted mb-3 d-block"></i>
            <h4 class="fw-bold font-serif mb-2">Your delicious discoveries will appear here</h4>
            <p class="text-muted mb-4">Save bakeries, dessert lounges, and patisseries you want to try or revisit.</p>
            <a href="discover.html" class="btn btn-primary-custom">
              <i class="bi bi-compass"></i> Explore Nearby Places
            </a>
          </div>
        </div>
      `;
    } else {
      const savedVenues = VENUES_DATA.filter(v => state.places.includes(v.id));
      placesContainer.innerHTML = savedVenues.map(v => `
        <div class="col-md-6 col-lg-4 mb-4 fade-in-up" id="savedCard-${v.id}">
          <div class="venue-card">
            <div class="venue-card-img-wrapper">
              <img src="${v.images.cover}" alt="${v.name}" class="venue-card-img">
              <button class="venue-save-btn saved" data-save-venue="${v.id}" data-venue-name="${v.name}">
                <i class="bi bi-bookmark-fill"></i>
              </button>
            </div>
            <div class="venue-card-body">
              <div class="venue-category-row">
                <span class="venue-category-label">${v.category}</span>
                <span class="venue-price-indicator">${v.priceRange}</span>
              </div>
              <h3 class="venue-title"><a href="venue-details.html?id=${v.id}">${v.name}</a></h3>
              <p class="venue-description">${v.description}</p>
              <div class="venue-meta-row mt-auto">
                <span class="rating-badge"><i class="bi bi-star-fill"></i> ${v.rating}</span>
                <span class="ms-auto text-muted"><i class="bi bi-geo-alt"></i> ${v.distance}</span>
              </div>
            </div>
          </div>
        </div>
      `).join("");
    }

    // 2. Render Menu Items Tab
    if (menuContainer && typeof MENU_ITEMS_DATA !== 'undefined') {
      if (state.menuItems.length === 0) {
        menuContainer.innerHTML = `
          <div class="col-12 text-center py-5">
            <div class="p-5 bg-surface rounded-4 border border-subtle">
              <i class="bi bi-heart display-4 text-muted mb-3 d-block"></i>
              <h4 class="fw-bold font-serif mb-2">No saved treats yet</h4>
              <p class="text-muted mb-4">Explore our seasonal menu catalogue and heart signature pastries and desserts.</p>
              <a href="menu.html" class="btn btn-primary-custom">
                <i class="bi bi-cup-hot"></i> Browse Menu Explorer
              </a>
            </div>
          </div>
        `;
      } else {
        const savedItems = MENU_ITEMS_DATA.filter(item => state.menuItems.includes(item.id));
        menuContainer.innerHTML = savedItems.map(item => `
          <div class="col-md-6 col-lg-4 mb-4 fade-in-up">
            <div class="menu-item-card">
              <img src="${item.image}" alt="${item.name}" class="menu-item-img">
              <div class="menu-item-info">
                <div class="menu-item-header">
                  <h4 class="menu-item-title">${item.name}</h4>
                  <span class="menu-item-price">${item.price}</span>
                </div>
                <a href="venue-details.html?id=${item.venueId}" class="small text-muted mb-2 d-block">
                  <i class="bi bi-shop me-1 text-terracotta"></i> ${item.venueName}
                </a>
                <p class="menu-item-desc">${item.description}</p>
                <div class="mt-auto d-flex align-items-center justify-content-between pt-2 border-top border-subtle">
                  <span class="dietary-tag">${item.category}</span>
                  <button class="btn btn-sm text-danger p-0" data-save-menu="${item.id}" data-item-name="${item.name}">
                    <i class="bi bi-heart-fill"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        `).join("");
      }
    }

    // 3. Render Guides Tab
    if (guidesContainer && typeof GUIDES_DATA !== 'undefined') {
      if (state.guides.length === 0) {
        guidesContainer.innerHTML = `
          <div class="col-12 text-center py-5">
            <div class="p-5 bg-surface rounded-4 border border-subtle">
              <i class="bi bi-journal-bookmark display-4 text-muted mb-3 d-block"></i>
              <h4 class="fw-bold font-serif mb-2">No saved articles in your reading list</h4>
              <p class="text-muted mb-4">Discover local bakery culture, croissant guides, and behind-the-scenes stories.</p>
              <a href="guides.html" class="btn btn-primary-custom">
                <i class="bi bi-book"></i> Read Food Guides
              </a>
            </div>
          </div>
        `;
      } else {
        const savedGuides = GUIDES_DATA.filter(g => state.guides.includes(g.id));
        guidesContainer.innerHTML = savedGuides.map(g => `
          <div class="col-md-6 col-lg-4 mb-4 fade-in-up">
            <div class="guide-card">
              <div class="guide-card-img-wrap">
                <img src="${g.image}" alt="${g.title}" class="guide-card-img">
              </div>
              <div class="guide-card-body">
                <span class="guide-meta">${g.category}</span>
                <h3 class="guide-title"><a href="guide-details.html?slug=${g.slug}">${g.title}</a></h3>
                <p class="guide-excerpt">${g.excerpt}</p>
                <div class="guide-author-row">
                  <img src="${g.author.avatar}" alt="${g.author.name}" class="guide-author-avatar">
                  <div class="guide-author-info">
                    <span class="guide-author-name">${g.author.name}</span>
                    <span>${g.readTime}</span>
                  </div>
                  <button class="btn btn-sm text-muted ms-auto p-0" data-save-guide="${g.id}">
                    <i class="bi bi-bookmark-fill text-terracotta"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        `).join("");
      }
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("savedPlacesPage")) {
      renderSavedPage();
    }
  });

  window.RecommendationsEngine = {
    renderSavedPage
  };
})();
