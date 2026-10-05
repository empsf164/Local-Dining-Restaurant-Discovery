/**
 * Crumb & Table - Theme Manager
 * Light / Dark Theme toggle with localStorage persistence and system preference
 */

(function () {
  const THEME_KEY = "crumb_table_theme";

  function getPreferredTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);

    // Update all theme toggle button icons on the page
    document.querySelectorAll(".btn-theme-toggle").forEach(btn => {
      const icon = btn.querySelector("i");
      if (icon) {
        if (theme === "dark") {
          icon.className = "bi bi-sun-fill";
          btn.setAttribute("aria-label", "Switch to Light Mode");
          btn.setAttribute("title", "Switch to Light Mode");
        } else {
          icon.className = "bi bi-moon-stars-fill";
          btn.setAttribute("aria-label", "Switch to Dark Mode");
          btn.setAttribute("title", "Switch to Dark Mode");
        }
      }
    });
  }

  // Instant execution to prevent FOUC (Flash of unstyled content)
  const initialTheme = getPreferredTheme();
  document.documentElement.setAttribute("data-theme", initialTheme);

  document.addEventListener("DOMContentLoaded", () => {
    applyTheme(initialTheme);

    // Listen for theme toggle clicks
    document.addEventListener("click", (e) => {
      const toggleBtn = e.target.closest(".btn-theme-toggle");
      if (toggleBtn) {
        const current = document.documentElement.getAttribute("data-theme") || "light";
        const nextTheme = current === "dark" ? "light" : "dark";
        applyTheme(nextTheme);

        if (window.showToast) {
          window.showToast(`Switched to ${nextTheme === 'dark' ? 'Dark Espresso' : 'Warm Cream'} mode`, "bi-palette");
        }
      }
    });

    // Listen for OS theme change
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      if (!localStorage.getItem(THEME_KEY)) {
        applyTheme(e.matches ? "dark" : "light");
      }
    });
  });

  window.applyTheme = applyTheme;
  window.getPreferredTheme = getPreferredTheme;
})();
