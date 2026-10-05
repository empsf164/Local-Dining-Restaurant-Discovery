/**
 * Crumb & Table - Authentication System (Demo frontend architecture)
 */

(function () {
  const AUTH_KEY = "crumb_table_user";

  function getCurrentUser() {
    try {
      const data = localStorage.getItem(AUTH_KEY);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      return null;
    }
  }

  function login(email, password, remember = true) {
    const user = {
      name: email.split("@")[0].replace(".", " ").replace(/\b\w/g, l => l.toUpperCase()),
      email: email,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
      city: "Arts Quarter, Central City",
      loggedInAt: new Date().toISOString()
    };
    localStorage.setItem(AUTH_KEY, JSON.stringify(user));
    updateAuthUI();
    return user;
  }

  function signup(fullName, email, password, city = "Central City") {
    const user = {
      name: fullName,
      email: email,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
      city: city,
      loggedInAt: new Date().toISOString()
    };
    localStorage.setItem(AUTH_KEY, JSON.stringify(user));
    updateAuthUI();
    return user;
  }

  function logout() {
    localStorage.removeItem(AUTH_KEY);
    updateAuthUI();
    if (window.showToast) window.showToast("Logged out successfully", "bi-box-arrow-right");
    setTimeout(() => {
      window.location.href = "index.html";
    }, 600);
  }

  function updateAuthUI() {
    const user = getCurrentUser();
    const authContainers = document.querySelectorAll(".auth-nav-container");

    authContainers.forEach(container => {
      if (user) {
        container.innerHTML = `
          <div class="dropdown">
            <button class="btn nav-link-custom dropdown-toggle p-0 border-0 d-flex align-items-center gap-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="${user.avatar}" alt="${user.name}" class="rounded-circle" style="width: 32px; height: 32px; object-fit: cover; border: 1px solid var(--accent-gold);">
              <span class="d-none d-lg-inline font-weight-bold">${user.name.split(' ')[0]}</span>
            </button>
            <ul class="dropdown-menu dropdown-menu-custom dropdown-menu-end">
              <li class="px-3 py-2 border-bottom border-subtle">
                <div class="small text-muted">Signed in as</div>
                <div class="font-weight-bold text-truncate">${user.email}</div>
              </li>
              <li><a class="dropdown-item dropdown-item-custom" href="saved.html"><i class="bi bi-bookmark-heart"></i> Saved Places</a></li>
              <li><a class="dropdown-item dropdown-item-custom" href="contact.html"><i class="bi bi-shop"></i> List a Bakery</a></li>
              <li><hr class="dropdown-divider my-1"></li>
              <li><button class="dropdown-item dropdown-item-custom text-danger" id="logoutBtn" type="button"><i class="bi bi-box-arrow-right text-danger"></i> Sign Out</button></li>
            </ul>
          </div>
        `;
      } else {
        container.innerHTML = `
          <a href="login.html" class="nav-link-custom">Login</a>
          <a href="signup.html" class="btn-primary-custom py-2 px-3 ms-1 text-nowrap">Sign Up</a>
        `;
      }
    });

    // Mobile drawer auth
    const mobileAuthContainers = document.querySelectorAll(".mobile-auth-container");
    mobileAuthContainers.forEach(container => {
      if (user) {
        container.innerHTML = `
          <div class="p-3 bg-secondary rounded-3 mb-3 d-flex align-items-center gap-3">
            <img src="${user.avatar}" alt="${user.name}" class="rounded-circle" style="width: 44px; height: 44px; object-fit: cover;">
            <div>
              <div class="fw-bold">${user.name}</div>
              <div class="small text-muted">${user.email}</div>
            </div>
          </div>
          <button class="btn btn-secondary-custom w-100 justify-content-center" id="mobileLogoutBtn" type="button">
            <i class="bi bi-box-arrow-right"></i> Sign Out
          </button>
        `;
      } else {
        container.innerHTML = `
          <div class="d-grid gap-2">
            <a href="login.html" class="btn btn-secondary-custom justify-content-center">Login</a>
            <a href="signup.html" class="btn btn-primary-custom justify-content-center">Create Account</a>
          </div>
        `;
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    updateAuthUI();

    document.addEventListener("click", (e) => {
      if (e.target.closest("#logoutBtn") || e.target.closest("#mobileLogoutBtn")) {
        e.preventDefault();
        logout();
      }
    });
  });

  window.AuthManager = {
    getCurrentUser,
    login,
    signup,
    logout,
    updateAuthUI
  };
})();
