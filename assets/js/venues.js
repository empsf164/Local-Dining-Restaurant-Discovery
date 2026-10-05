/**
 * Crumb & Table - Venue Details Loader & Renderer
 */

(function () {
  const RECENT_KEY = "crumb_table_recently_viewed";

  function trackRecentlyViewed(venueId) {
    try {
      let recent = JSON.parse(localStorage.getItem(RECENT_KEY) || "[]");
      recent = recent.filter(id => id !== venueId);
      recent.unshift(venueId);
      if (recent.length > 8) recent.pop();
      localStorage.setItem(RECENT_KEY, JSON.stringify(recent));
    } catch (e) {
      // ignore
    }
  }

  function loadVenueDetails() {
    if (typeof VENUES_DATA === 'undefined') return;

    const urlParams = new URLSearchParams(window.location.search);
    const venueId = urlParams.get("id") || "maison-creme";
    const venue = getVenueById(venueId);

    trackRecentlyViewed(venue.id);

    // Document title
    document.title = `${venue.name} — Crumb & Table Local Discovery`;

    // Render breadcrumb
    const breadcrumbVenue = document.getElementById("breadcrumbVenueName");
    if (breadcrumbVenue) breadcrumbVenue.textContent = venue.name;

    // Render Hero Info
    const nameEl = document.getElementById("venueHeroName");
    if (nameEl) nameEl.textContent = venue.name;

    const taglineEl = document.getElementById("venueHeroTagline");
    if (taglineEl) taglineEl.textContent = venue.tagline;

    const catEl = document.getElementById("venueHeroCategory");
    if (catEl) catEl.textContent = venue.category;

    const ratingEl = document.getElementById("venueHeroRating");
    if (ratingEl) ratingEl.innerHTML = `<i class="bi bi-star-fill text-warning"></i> ${venue.rating} <span class="text-muted small">(${venue.reviewCount} reviews)</span>`;

    const addressEl = document.getElementById("venueHeroAddress");
    if (addressEl) addressEl.innerHTML = `<i class="bi bi-geo-alt"></i> ${venue.address}`;

    const statusEl = document.getElementById("venueHeroStatus");
    if (statusEl) statusEl.innerHTML = `<span class="status-badge ${venue.openingHours.isOpen ? 'open' : ''}">${venue.openingHours.status}</span> · ${venue.openingHours.text}`;

    const priceEl = document.getElementById("venueHeroPrice");
    if (priceEl) priceEl.textContent = `${venue.priceRange} · ${venue.neighborhood}`;

    // Update Save button
    const saveBtn = document.getElementById("venueHeroSaveBtn");
    if (saveBtn) {
      saveBtn.setAttribute("data-save-venue", venue.id);
      saveBtn.setAttribute("data-venue-name", venue.name);
    }

    // Directions button
    const dirBtn = document.getElementById("venueDirectionsBtn");
    if (dirBtn) {
      dirBtn.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venue.name + ' ' + venue.address)}`;
      dirBtn.target = "_blank";
    }

    // Reserve button link
    const resBtn = document.getElementById("venueReserveBtn");
    if (resBtn) {
      resBtn.href = `booking.html?venue=${venue.id}`;
    }

    // Render Hero Gallery
    const galleryContainer = document.getElementById("venueHeroGallery");
    if (galleryContainer && venue.images && venue.images.gallery) {
      galleryContainer.innerHTML = `
        <div class="row g-2">
          <div class="col-lg-8">
            <div class="ratio ratio-16x9 rounded-4 overflow-hidden shadow-sm">
              <img src="${venue.images.hero || venue.images.cover}" alt="${venue.name}" class="w-100 h-100 object-fit-cover">
            </div>
          </div>
          <div class="col-lg-4 d-none d-lg-block">
            <div class="d-flex flex-column gap-2 h-100">
              <div class="ratio ratio-16x9 rounded-4 overflow-hidden flex-fill">
                <img src="${venue.images.gallery[1] || venue.images.cover}" alt="${venue.name}" class="w-100 h-100 object-fit-cover">
              </div>
              <div class="ratio ratio-16x9 rounded-4 overflow-hidden flex-fill">
                <img src="${venue.images.gallery[2] || venue.images.cover}" alt="${venue.name}" class="w-100 h-100 object-fit-cover">
              </div>
            </div>
          </div>
        </div>
      `;
    }

    // Render About & Story
    const descEl = document.getElementById("venueDescriptionText");
    if (descEl) descEl.textContent = venue.description;

    const storyEl = document.getElementById("venueStoryText");
    if (storyEl && venue.story) storyEl.textContent = venue.story;

    // Render Dietary & Amenities Chips
    const dietaryContainer = document.getElementById("venueDietaryChips");
    if (dietaryContainer && venue.dietary) {
      dietaryContainer.innerHTML = venue.dietary.map(d => `<span class="badge bg-secondary text-primary py-2 px-3 rounded-pill fw-medium me-2 mb-2"><i class="bi bi-check2-circle text-terracotta me-1"></i> ${d}</span>`).join("");
    }

    const amenitiesContainer = document.getElementById("venueAmenitiesChips");
    if (amenitiesContainer && venue.amenities) {
      amenitiesContainer.innerHTML = venue.amenities.map(a => `<span class="badge bg-secondary text-primary py-2 px-3 rounded-pill fw-medium me-2 mb-2"><i class="bi bi-patch-check text-terracotta me-1"></i> ${a}</span>`).join("");
    }

    // Render Opening Hours Schedule
    const scheduleContainer = document.getElementById("venueOpeningSchedule");
    if (scheduleContainer && venue.openingHours && venue.openingHours.schedule) {
      scheduleContainer.innerHTML = venue.openingHours.schedule.map(s => `
        <div class="d-flex justify-content-between py-2 border-bottom border-subtle">
          <span class="text-secondary font-weight-medium">${s.day}</span>
          <span class="font-weight-bold">${s.hours}</span>
        </div>
      `).join("");
    }

    // Render Signature Dishes
    const dishesContainer = document.getElementById("venueSignatureDishes");
    if (dishesContainer && venue.signatureDishes) {
      dishesContainer.innerHTML = venue.signatureDishes.map(dish => `
        <div class="col-md-6 mb-3">
          <div class="p-3 bg-surface rounded-3 border border-subtle h-100 d-flex flex-column justify-content-between">
            <div class="d-flex justify-content-between align-items-start mb-1">
              <h5 class="fw-bold mb-0 font-serif fs-5">${dish.name}</h5>
              <span class="fw-bold text-terracotta ms-2">${dish.price}</span>
            </div>
            <p class="small text-muted mb-0">${dish.desc}</p>
          </div>
        </div>
      `).join("");
    }

    // Render Full Photo Gallery
    const fullGallery = document.getElementById("venueFullGallery");
    if (fullGallery && venue.images && venue.images.gallery) {
      fullGallery.innerHTML = venue.images.gallery.map(imgUrl => `
        <div class="col-6 col-md-4 mb-3">
          <div class="ratio ratio-1x1 rounded-3 overflow-hidden shadow-sm">
            <img src="${imgUrl}" alt="${venue.name}" class="w-100 h-100 object-fit-cover" loading="lazy">
          </div>
        </div>
      `).join("");
    }

    // Render Similar Venues
    const similarContainer = document.getElementById("venueSimilarList");
    if (similarContainer) {
      const similar = VENUES_DATA.filter(v => v.id !== venue.id).slice(0, 3);
      similarContainer.innerHTML = similar.map(v => `
        <div class="col-md-4 mb-4">
          <div class="venue-card">
            <div class="venue-card-img-wrapper">
              <img src="${v.images.cover}" alt="${v.name}" class="venue-card-img" loading="lazy">
              <button class="venue-save-btn" data-save-venue="${v.id}" data-venue-name="${v.name}" title="Save Place">
                <i class="bi bi-bookmark"></i>
              </button>
            </div>
            <div class="venue-card-body">
              <span class="venue-category-label">${v.category}</span>
              <h4 class="venue-title mt-1"><a href="venue-details.html?id=${v.id}">${v.name}</a></h4>
              <div class="venue-meta-row mt-auto">
                <span class="rating-badge"><i class="bi bi-star-fill"></i> ${v.rating}</span>
                <span class="ms-auto text-muted"><i class="bi bi-geo-alt"></i> ${v.distance}</span>
              </div>
            </div>
          </div>
        </div>
      `).join("");
    }

    if (window.FavoritesManager) {
      window.FavoritesManager.updateAllSaveButtons();
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("venueDetailsPage")) {
      loadVenueDetails();
    }
  });

  window.VenueManager = {
    loadVenueDetails,
    trackRecentlyViewed
  };
})();
