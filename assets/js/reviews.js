/**
 * Crumb & Table - Reviews & Ratings Engine
 */

(function () {
  const REVIEWS_STORAGE_PREFIX = "crumb_table_reviews_";

  function getVenueReviews(venueId, defaultReviews = []) {
    try {
      const stored = localStorage.getItem(REVIEWS_STORAGE_PREFIX + venueId);
      const customReviews = stored ? JSON.parse(stored) : [];
      return [...customReviews, ...defaultReviews];
    } catch (e) {
      return defaultReviews;
    }
  }

  function saveNewReview(venueId, reviewData) {
    try {
      const stored = localStorage.getItem(REVIEWS_STORAGE_PREFIX + venueId);
      const customReviews = stored ? JSON.parse(stored) : [];
      customReviews.unshift(reviewData);
      localStorage.setItem(REVIEWS_STORAGE_PREFIX + venueId, JSON.stringify(customReviews));
      return true;
    } catch (e) {
      return false;
    }
  }

  function renderVenueReviews() {
    const container = document.getElementById("venueReviewsList");
    if (!container || typeof VENUES_DATA === 'undefined') return;

    const urlParams = new URLSearchParams(window.location.search);
    const venueId = urlParams.get("id") || "maison-creme";
    const venue = getVenueById(venueId);

    const allReviews = getVenueReviews(venue.id, venue.reviews || []);

    // Summary Score
    const scoreEl = document.getElementById("reviewOverallScore");
    if (scoreEl) scoreEl.textContent = venue.rating.toFixed(1);

    const countEl = document.getElementById("reviewTotalCount");
    if (countEl) countEl.textContent = `Based on ${venue.reviewCount + (allReviews.length - (venue.reviews?.length || 0))} community reviews`;

    // Render Review List
    if (allReviews.length === 0) {
      container.innerHTML = `
        <div class="text-center py-4 text-muted">
          <i class="bi bi-chat-square-heart display-6 d-block mb-2"></i>
          <p>No community reviews yet. Be the first to share your discovery!</p>
        </div>
      `;
      return;
    }

    container.innerHTML = allReviews.map(r => `
      <div class="p-4 mb-3 bg-surface rounded-4 border border-subtle">
        <div class="d-flex justify-content-between align-items-start mb-3">
          <div class="d-flex align-items-center gap-3">
            <img src="${r.avatar}" alt="${r.author}" class="rounded-circle" style="width: 44px; height: 44px; object-fit: cover;">
            <div>
              <div class="fw-bold">${r.author}</div>
              <div class="small text-muted">${r.date}</div>
            </div>
          </div>
          <div class="d-flex text-warning">
            ${Array.from({ length: 5 }).map((_, i) => `<i class="bi ${i < r.rating ? 'bi-star-fill' : 'bi-star'}"></i>`).join("")}
          </div>
        </div>
        <h5 class="fw-bold font-serif fs-6 mb-1">${r.title}</h5>
        <p class="text-secondary small mb-3">${r.comment}</p>
        <div class="d-flex align-items-center text-muted small">
          <button class="btn btn-sm btn-link text-muted p-0 text-decoration-none like-review-btn" type="button">
            <i class="bi bi-hand-thumbs-up me-1"></i> Helpful (${r.likes || 0})
          </button>
        </div>
      </div>
    `).join("");

    // Setup review submit form
    setupReviewForm(venue.id);
  }

  function setupReviewForm(venueId) {
    const form = document.getElementById("writeReviewForm");
    if (!form) return;

    // Star selector in modal
    let selectedRating = 5;
    const starButtons = document.querySelectorAll(".star-rating-select i");
    starButtons.forEach(star => {
      star.addEventListener("click", () => {
        selectedRating = parseInt(star.getAttribute("data-rating"));
        updateStarUI(selectedRating);
      });
    });

    function updateStarUI(rating) {
      starButtons.forEach(star => {
        const val = parseInt(star.getAttribute("data-rating"));
        star.className = val <= rating ? "bi bi-star-fill text-warning fs-4 cursor-pointer" : "bi bi-star text-muted fs-4 cursor-pointer";
      });
    }

    form.onsubmit = function (e) {
      e.preventDefault();

      const user = window.AuthManager ? window.AuthManager.getCurrentUser() : null;
      if (!user) {
        if (window.showToast) window.showToast("Please login to share your experience", "bi-person-lock");
        setTimeout(() => {
          window.location.href = `login.html?redirect=${encodeURIComponent(window.location.href)}`;
        }, 1000);
        return;
      }

      const title = document.getElementById("reviewTitleInput")?.value.trim();
      const comment = document.getElementById("reviewCommentInput")?.value.trim();

      if (!title || !comment) {
        if (window.showToast) window.showToast("Please fill in both title and comments", "bi-exclamation-circle");
        return;
      }

      const newReview = {
        id: "rev-" + Date.now(),
        author: user.name,
        avatar: user.avatar,
        rating: selectedRating,
        date: "Just now",
        title: title,
        comment: comment,
        likes: 0
      };

      saveNewReview(venueId, newReview);

      // Close modal
      const modalEl = document.getElementById("writeReviewModal");
      if (modalEl && typeof bootstrap !== 'undefined') {
        const modalInstance = bootstrap.Modal.getInstance(modalEl);
        if (modalInstance) modalInstance.hide();
      }

      form.reset();
      updateStarUI(5);

      if (window.showToast) window.showToast("Thank you! Your review was published.", "bi-check-circle-fill");
      renderVenueReviews();
    };
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("venueReviewsList")) {
      renderVenueReviews();
    }
  });

  window.ReviewsEngine = {
    renderVenueReviews,
    saveNewReview
  };
})();
