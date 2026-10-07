/**
 * Crumb & Table - Main Application Controller
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Sticky Header Scroll Effect
  const header = document.querySelector(".site-header");
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
  }

  // 2. Highlight Active Nav Links
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link-custom, .mobile-nav-link").forEach(link => {
    const href = link.getAttribute("href");
    if (href && (href === currentPath || (currentPath === "" && href === "index.html"))) {
      link.classList.add("active");
    }
  });

  // 3. Hero Search Form Redirection (Index page)
  const heroForm = document.getElementById("heroSearchForm");
  if (heroForm) {
    heroForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = document.getElementById("heroSearchInput")?.value.trim() || "";
      const loc = document.getElementById("heroLocationSelect")?.value || "";
      window.location.href = `discover.html?q=${encodeURIComponent(input)}&location=${encodeURIComponent(loc)}`;
    });
  }

  // 4. Newsletter Subscription forms
  document.querySelectorAll(".newsletter-form").forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = form.querySelector('input[type="email"]');
      if (emailInput && emailInput.value.trim()) {
        if (window.showToast) {
          window.showToast("Welcome to the Crumb & Table dispatch! Check your inbox for weekly bakery trails.", "bi-envelope-check-fill");
        }
        form.reset();
      }
    });
  });

  // 5. Contact / Venue Onboarding Form
  const contactForm = document.getElementById("contactVenueForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (window.showToast) {
        window.showToast("Thank you! Your inquiry or bakery submission has been received.", "bi-check2-circle");
      }
      contactForm.reset();
    });
  }

  // 6. Smooth Scroll for in-page anchors
  document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // 7. Back to Top Button Controller
  let backToTopBtn = document.getElementById("backToTopBtn");
  if (!backToTopBtn) {
    backToTopBtn = document.createElement("button");
    backToTopBtn.id = "backToTopBtn";
    backToTopBtn.className = "back-to-top-btn";
    backToTopBtn.setAttribute("aria-label", "Back to top");
    backToTopBtn.setAttribute("title", "Back to top");
    backToTopBtn.innerHTML = '<i class="bi bi-arrow-up"></i>';
    document.body.appendChild(backToTopBtn);
  }

  const handleScrollTop = () => {
    if (window.scrollY > 280) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  };

  window.addEventListener("scroll", handleScrollTop, { passive: true });
  handleScrollTop();

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});

