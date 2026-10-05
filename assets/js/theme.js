/**
 * Crumb & Table - Theme Configuration
 * Default light theme (warm cream & artisanal terracotta)
 */

(function () {
  document.documentElement.setAttribute("data-theme", "light");
  try {
    localStorage.removeItem("crumb_table_theme");
  } catch (e) {}
})();
