/**
 * Crumb & Table - Notification / Toast System
 */

(function () {
  let toastContainer = null;

  function ensureToastContainer() {
    if (!toastContainer) {
      toastContainer = document.querySelector(".toast-container-custom");
      if (!toastContainer) {
        toastContainer = document.createElement("div");
        toastContainer.className = "toast-container-custom";
        document.body.appendChild(toastContainer);
      }
    }
    return toastContainer;
  }

  function showToast(message, iconClass = "bi-info-circle-fill", duration = 3200) {
    const container = ensureToastContainer();

    const toast = document.createElement("div");
    toast.className = "toast-custom";
    toast.setAttribute("role", "alert");
    toast.innerHTML = `
      <i class="bi ${iconClass}"></i>
      <span class="toast-message">${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(12px)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 300);
    }, duration);
  }

  window.showToast = showToast;
})();
