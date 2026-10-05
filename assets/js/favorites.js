/**
 * Crumb & Table - Favorites / Saved Places System
 * Handles saving venues, menu items, and guides in localStorage
 */

(function () {
  const STORAGE_KEY = "crumb_table_saved";

  function getSavedState() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : { places: [], menuItems: [], guides: [] };
    } catch (e) {
      return { places: [], menuItems: [], guides: [] };
    }
  }

  function saveSavedState(state) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    updateSavedBadgeCounts();
  }

  function isPlaceSaved(id) {
    const state = getSavedState();
    return state.places.includes(id);
  }

  function isMenuItemSaved(id) {
    const state = getSavedState();
    return state.menuItems.includes(id);
  }

  function isGuideSaved(id) {
    const state = getSavedState();
    return state.guides.includes(id);
  }

  function toggleSavePlace(id, venueName = "Venue") {
    const state = getSavedState();
    const index = state.places.indexOf(id);
    let isSaved = false;

    if (index > -1) {
      state.places.splice(index, 1);
      isSaved = false;
      if (window.showToast) window.showToast(`Removed <strong>${venueName}</strong> from saved places`, "bi-bookmark");
    } else {
      state.places.push(id);
      isSaved = true;
      if (window.showToast) window.showToast(`Saved <strong>${venueName}</strong> to your places`, "bi-bookmark-heart-fill");
    }

    saveSavedState(state);
    updateAllSaveButtons();
    return isSaved;
  }

  function toggleSaveMenuItem(id, itemName = "Item") {
    const state = getSavedState();
    const index = state.menuItems.indexOf(id);
    let isSaved = false;

    if (index > -1) {
      state.menuItems.splice(index, 1);
      isSaved = false;
      if (window.showToast) window.showToast(`Removed <strong>${itemName}</strong> from saved items`, "bi-heart");
    } else {
      state.menuItems.push(id);
      isSaved = true;
      if (window.showToast) window.showToast(`Added <strong>${itemName}</strong> to favorites`, "bi-heart-fill");
    }

    saveSavedState(state);
    updateAllSaveButtons();
    return isSaved;
  }

  function toggleSaveGuide(id, guideTitle = "Guide") {
    const state = getSavedState();
    const index = state.guides.indexOf(id);
    let isSaved = false;

    if (index > -1) {
      state.guides.splice(index, 1);
      isSaved = false;
      if (window.showToast) window.showToast(`Removed article from reading list`, "bi-bookmark");
    } else {
      state.guides.push(id);
      isSaved = true;
      if (window.showToast) window.showToast(`Saved article to reading list`, "bi-bookmark-check-fill");
    }

    saveSavedState(state);
    updateAllSaveButtons();
    return isSaved;
  }

  function updateSavedBadgeCounts() {
    const state = getSavedState();
    const total = state.places.length + state.menuItems.length + state.guides.length;
    document.querySelectorAll(".saved-count-badge").forEach(badge => {
      badge.textContent = total;
      badge.style.display = total > 0 ? "inline-flex" : "none";
    });
  }

  function updateAllSaveButtons() {
    const state = getSavedState();

    // Venues
    document.querySelectorAll("[data-save-venue]").forEach(btn => {
      const id = btn.getAttribute("data-save-venue");
      const isSaved = state.places.includes(id);
      btn.classList.toggle("saved", isSaved);
      const icon = btn.querySelector("i");
      if (icon) {
        icon.className = isSaved ? "bi bi-bookmark-fill" : "bi bi-bookmark";
      }
      btn.setAttribute("aria-label", isSaved ? "Remove from saved" : "Save this place");
    });

    // Menu Items
    document.querySelectorAll("[data-save-menu]").forEach(btn => {
      const id = btn.getAttribute("data-save-menu");
      const isSaved = state.menuItems.includes(id);
      btn.classList.toggle("saved", isSaved);
      const icon = btn.querySelector("i");
      if (icon) {
        icon.className = isSaved ? "bi bi-heart-fill text-danger" : "bi bi-heart";
      }
    });

    // Guides
    document.querySelectorAll("[data-save-guide]").forEach(btn => {
      const id = btn.getAttribute("data-save-guide");
      const isSaved = state.guides.includes(id);
      btn.classList.toggle("saved", isSaved);
      const icon = btn.querySelector("i");
      if (icon) {
        icon.className = isSaved ? "bi bi-bookmark-fill" : "bi bi-bookmark";
      }
    });
  }

  // Global click delegate
  document.addEventListener("DOMContentLoaded", () => {
    updateSavedBadgeCounts();
    updateAllSaveButtons();

    document.addEventListener("click", (e) => {
      const venueBtn = e.target.closest("[data-save-venue]");
      if (venueBtn) {
        e.preventDefault();
        e.stopPropagation();
        const id = venueBtn.getAttribute("data-save-venue");
        const name = venueBtn.getAttribute("data-venue-name") || "Place";
        toggleSavePlace(id, name);
        return;
      }

      const menuBtn = e.target.closest("[data-save-menu]");
      if (menuBtn) {
        e.preventDefault();
        e.stopPropagation();
        const id = menuBtn.getAttribute("data-save-menu");
        const name = menuBtn.getAttribute("data-item-name") || "Item";
        toggleSaveMenuItem(id, name);
        return;
      }

      const guideBtn = e.target.closest("[data-save-guide]");
      if (guideBtn) {
        e.preventDefault();
        e.stopPropagation();
        const id = guideBtn.getAttribute("data-save-guide");
        const title = guideBtn.getAttribute("data-guide-title") || "Article";
        toggleSaveGuide(id, title);
        return;
      }
    });
  });

  window.FavoritesManager = {
    getSavedState,
    isPlaceSaved,
    isMenuItemSaved,
    isGuideSaved,
    toggleSavePlace,
    toggleSaveMenuItem,
    toggleSaveGuide,
    updateAllSaveButtons,
    updateSavedBadgeCounts
  };
})();
