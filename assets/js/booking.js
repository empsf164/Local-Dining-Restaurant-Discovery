/**
 * Crumb & Table - Lightweight Reservation Flow Engine
 */

(function () {
  function initBookingForm() {
    const form = document.getElementById("reservationForm");
    if (!form || typeof VENUES_DATA === 'undefined') return;

    // Populate Venue Select
    const venueSelect = document.getElementById("bookingVenueSelect");
    if (venueSelect) {
      const urlParams = new URLSearchParams(window.location.search);
      const preselectedId = urlParams.get("venue");

      venueSelect.innerHTML = VENUES_DATA.map(v => `
        <option value="${v.id}" ${v.id === preselectedId ? 'selected' : ''}>${v.name} (${v.neighborhood})</option>
      `).join("");

      venueSelect.addEventListener("change", updateSummaryPreview);
    }

    // Default to tomorrow's date
    const dateInput = document.getElementById("bookingDateInput");
    if (dateInput) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      dateInput.value = tomorrow.toISOString().split("T")[0];
      dateInput.min = new Date().toISOString().split("T")[0];
      dateInput.addEventListener("change", updateSummaryPreview);
    }

    // Party size & Time buttons
    const partyInput = document.getElementById("bookingPartySize");
    if (partyInput) partyInput.addEventListener("change", updateSummaryPreview);

    const timeSelect = document.getElementById("bookingTimeSelect");
    if (timeSelect) timeSelect.addEventListener("change", updateSummaryPreview);

    // Initial summary render
    updateSummaryPreview();

    // Form Submission
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const venueId = venueSelect ? venueSelect.value : "maison-creme";
      const venue = getVenueById(venueId);
      const date = dateInput ? dateInput.value : "Tomorrow";
      const time = timeSelect ? timeSelect.value : "06:30 PM";
      const party = partyInput ? partyInput.value : "2 Guests";
      const name = document.getElementById("bookingGuestName")?.value.trim() || "Guest";
      const email = document.getElementById("bookingGuestEmail")?.value.trim() || "";
      const phone = document.getElementById("bookingGuestPhone")?.value.trim() || "";
      const occasion = document.getElementById("bookingOccasionSelect")?.value || "Casual Discovery";
      const special = document.getElementById("bookingSpecialRequests")?.value.trim() || "None";

      const bookingRef = "CT-" + Math.floor(100000 + Math.random() * 900000);

      const bookingRecord = {
        ref: bookingRef,
        venueId: venue.id,
        venueName: venue.name,
        venueAddress: venue.address,
        venueCover: venue.images.cover,
        date: date,
        time: time,
        party: party,
        name: name,
        email: email,
        phone: phone,
        occasion: occasion,
        special: special,
        createdAt: new Date().toISOString()
      };

      // Store in session storage for confirmation page
      sessionStorage.setItem("last_booking", JSON.stringify(bookingRecord));

      // Redirect to confirmation page
      window.location.href = `reservation-confirmation.html?ref=${bookingRef}`;
    });
  }

  function updateSummaryPreview() {
    const venueSelect = document.getElementById("bookingVenueSelect");
    const dateInput = document.getElementById("bookingDateInput");
    const timeSelect = document.getElementById("bookingTimeSelect");
    const partyInput = document.getElementById("bookingPartySize");

    const venue = getVenueById(venueSelect ? venueSelect.value : "maison-creme");

    const summaryVenue = document.getElementById("summaryVenueName");
    if (summaryVenue) summaryVenue.textContent = venue.name;

    const summaryCategory = document.getElementById("summaryVenueCat");
    if (summaryCategory) summaryCategory.textContent = `${venue.category} · ${venue.neighborhood}`;

    const summaryDate = document.getElementById("summaryBookingDate");
    if (summaryDate) summaryDate.textContent = dateInput?.value ? formatDate(dateInput.value) : "Select date";

    const summaryTime = document.getElementById("summaryBookingTime");
    if (summaryTime) summaryTime.textContent = timeSelect ? timeSelect.value : "06:30 PM";

    const summaryParty = document.getElementById("summaryBookingParty");
    if (summaryParty) summaryParty.textContent = partyInput ? `${partyInput.value} Guests` : "2 Guests";

    const summaryImg = document.getElementById("summaryVenueImg");
    if (summaryImg) summaryImg.src = venue.images.cover;
  }

  function formatDate(dateStr) {
    try {
      const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
      return new Date(dateStr).toLocaleDateString("en-US", options);
    } catch (e) {
      return dateStr;
    }
  }

  function loadConfirmationPage() {
    const container = document.getElementById("confirmationContainer");
    if (!container) return;

    let booking = null;
    try {
      booking = JSON.parse(sessionStorage.getItem("last_booking"));
    } catch (e) {
      // ignore
    }

    if (!booking) {
      booking = {
        ref: "CT-849201",
        venueName: "Maison Crème Patisserie",
        venueAddress: "42 Boulevard Saint-Honoré, Arts Quarter",
        venueCover: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop",
        date: "Tomorrow",
        time: "06:30 PM",
        party: "2 Guests",
        name: "Valued Guest",
        email: "guest@example.com"
      };
    }

    const refEl = document.getElementById("confirmationRefNumber");
    if (refEl) refEl.textContent = booking.ref;

    const venueEl = document.getElementById("confirmationVenueName");
    if (venueEl) venueEl.textContent = booking.venueName;

    const dateEl = document.getElementById("confirmationDate");
    if (dateEl) dateEl.textContent = booking.date;

    const timeEl = document.getElementById("confirmationTime");
    if (timeEl) timeEl.textContent = booking.time;

    const partyEl = document.getElementById("confirmationParty");
    if (partyEl) partyEl.textContent = booking.party;

    const guestEl = document.getElementById("confirmationGuest");
    if (guestEl) guestEl.textContent = `${booking.name} (${booking.email})`;

    const imgEl = document.getElementById("confirmationImg");
    if (imgEl) imgEl.src = booking.venueCover;
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("reservationForm")) {
      initBookingForm();
    }
    if (document.getElementById("confirmationContainer")) {
      loadConfirmationPage();
    }
  });

  window.BookingManager = {
    initBookingForm,
    loadConfirmationPage
  };
})();
