/**
 * Crumb & Table - Map Explorer Engine
 * Leaflet.js interactive map with synchronized list, custom bakery pins, and filters
 */

(function () {
  let leafletMap = null;
  let markersLayer = null;
  let activeMarkerId = null;

  function initMapExplorer() {
    const mapElement = document.getElementById("discoveryMap");
    if (!mapElement || typeof L === 'undefined' || typeof VENUES_DATA === 'undefined') return;

    // Center coordinates (Central City bakery cluster)
    const center = [12.9716, 77.5946];

    leafletMap = L.map('discoveryMap', {
      center: center,
      zoom: 14,
      zoomControl: false
    });

    // Add clean custom zoom control in bottom right
    L.control.zoom({ position: 'bottomright' }).addTo(leafletMap);

    // Modern OpenStreetMap tiles with custom contrast
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const tileUrl = isDark 
      ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
      : 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

    const tiles = L.tileLayer(tileUrl, {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(leafletMap);

    markersLayer = L.layerGroup().addTo(leafletMap);

    renderMapMarkers(VENUES_DATA);
    renderMapVenueList(VENUES_DATA);

    // Category filter chips on map page
    document.querySelectorAll(".map-category-chip").forEach(chip => {
      chip.addEventListener("click", () => {
        document.querySelectorAll(".map-category-chip").forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        const category = chip.getAttribute("data-category");
        filterMapByCategory(category);
      });
    });

    // Mobile list / map toggle button
    const mobileToggleBtn = document.getElementById("mobileMapToggleBtn");
    if (mobileToggleBtn) {
      mobileToggleBtn.addEventListener("click", () => {
        const sidebar = document.querySelector(".map-list-sidebar");
        const mapPanel = document.querySelector(".map-viewport-panel");
        const isMapVisible = mapPanel.classList.contains("mobile-active");

        if (isMapVisible) {
          mapPanel.classList.remove("mobile-active");
          sidebar.classList.remove("mobile-hidden");
          mobileToggleBtn.innerHTML = `<i class="bi bi-map-fill me-1"></i> View Map`;
        } else {
          mapPanel.classList.add("mobile-active");
          sidebar.classList.add("mobile-hidden");
          mobileToggleBtn.innerHTML = `<i class="bi bi-list-ul me-1"></i> View List`;
          setTimeout(() => leafletMap.invalidateSize(), 200);
        }
      });
    }
  }

  function getCategoryIcon(categorySlug) {
    switch (categorySlug) {
      case "patisseries": return "bi-cup-hot-fill";
      case "chocolatiers": return "bi-gem";
      case "cake-shops": return "bi-cake2-fill";
      case "artisan-bread": return "bi-basket2-fill";
      case "coffee-bakery": return "bi-cup-straw";
      case "dessert-shops": return "bi-magic";
      default: return "bi-shop";
    }
  }

  function renderMapMarkers(venues) {
    if (!leafletMap || !markersLayer) return;
    markersLayer.clearLayers();

    venues.forEach(venue => {
      const iconHtml = `
        <div class="custom-map-pin ${activeMarkerId === venue.id ? 'active' : ''}" data-venue-id="${venue.id}">
          <i class="bi ${getCategoryIcon(venue.categorySlug)}"></i>
        </div>
      `;

      const customIcon = L.divIcon({
        className: 'custom-leaflet-div-icon',
        html: iconHtml,
        iconSize: [36, 36],
        iconAnchor: [18, 18],
        popupAnchor: [0, -20]
      });

      const popupContent = `
        <div class="p-2" style="max-width: 220px; font-family: var(--font-sans);">
          <img src="${venue.images.cover}" alt="${venue.name}" class="w-100 rounded-2 mb-2" style="height: 100px; object-fit: cover;">
          <div class="fw-bold fs-6 mb-1 text-dark" style="line-height: 1.2;">${venue.name}</div>
          <div class="small text-muted mb-2">${venue.category} · ${venue.priceRange}</div>
          <a href="venue-details.html?id=${venue.id}" class="btn btn-sm btn-primary-custom w-100 py-1" style="font-size: 0.78rem;">View Place</a>
        </div>
      `;

      const marker = L.marker(venue.coordinates, { icon: customIcon })
        .bindPopup(popupContent)
        .addTo(markersLayer);

      marker.on("click", () => {
        highlightVenueInList(venue.id);
      });
    });
  }

  function renderMapVenueList(venues) {
    const listContainer = document.getElementById("mapVenueListContainer");
    if (!listContainer) return;

    if (venues.length === 0) {
      listContainer.innerHTML = `
        <div class="text-center py-5 text-muted">
          <i class="bi bi-geo-alt display-6 d-block mb-2"></i>
          <p>No bakeries found in this category.</p>
        </div>
      `;
      return;
    }

    listContainer.innerHTML = venues.map(v => `
      <div class="p-3 mb-3 bg-surface rounded-3 border border-subtle map-list-card ${activeMarkerId === v.id ? 'border-terracotta active-card' : ''}" id="mapCard-${v.id}" data-id="${v.id}" style="cursor: pointer; transition: all 0.2s ease;">
        <div class="d-flex gap-3">
          <img src="${v.images.cover}" alt="${v.name}" class="rounded-2" style="width: 80px; height: 80px; object-fit: cover; flex-shrink: 0;">
          <div class="flex-grow-1 min-w-0">
            <div class="d-flex justify-content-between align-items-start">
              <span class="small fw-bold text-terracotta text-uppercase">${v.category}</span>
              <span class="small text-muted">${v.distance}</span>
            </div>
            <h5 class="fw-bold font-serif fs-6 mb-1 text-truncate">${v.name}</h5>
            <div class="small text-muted mb-2"><i class="bi bi-geo-alt"></i> ${v.neighborhood}</div>
            <div class="d-flex align-items-center justify-content-between">
              <span class="rating-badge small"><i class="bi bi-star-fill"></i> ${v.rating}</span>
              <a href="venue-details.html?id=${v.id}" class="btn btn-sm btn-outline-secondary py-0 px-2 small">Details</a>
            </div>
          </div>
        </div>
      </div>
    `).join("");

    // Bind card click to flyTo marker on map
    listContainer.querySelectorAll(".map-list-card").forEach(card => {
      card.addEventListener("click", () => {
        const id = card.getAttribute("data-id");
        const venue = getVenueById(id);
        if (venue && leafletMap) {
          activeMarkerId = venue.id;
          leafletMap.flyTo(venue.coordinates, 16, { duration: 1.2 });
          renderMapMarkers(venues);
          highlightVenueInList(venue.id);
        }
      });
    });
  }

  function highlightVenueInList(venueId) {
    activeMarkerId = venueId;
    document.querySelectorAll(".map-list-card").forEach(card => {
      card.classList.toggle("active-card", card.getAttribute("data-id") === venueId);
    });

    const targetCard = document.getElementById(`mapCard-${venueId}`);
    if (targetCard) {
      targetCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  function filterMapByCategory(category) {
    let filtered = VENUES_DATA;
    if (category && category !== "all") {
      filtered = VENUES_DATA.filter(v => v.categorySlug === category || v.category.toLowerCase().includes(category));
    }
    renderMapMarkers(filtered);
    renderMapVenueList(filtered);
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("discoveryMap")) {
      initMapExplorer();
    }
  });

  window.MapExplorer = {
    initMapExplorer,
    filterMapByCategory
  };
})();
