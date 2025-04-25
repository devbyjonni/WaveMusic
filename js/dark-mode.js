// =========================
// Dark Mode Toggle
// =========================

document.addEventListener("DOMContentLoaded", function () {
  const toggleDarkMode = (event) => {
    event.preventDefault();
    document.body.classList.toggle("dark-mode");
  };

  // Expose toggle function globally (for Dev Menu to call)
  window.toggleDarkMode = toggleDarkMode;
});
