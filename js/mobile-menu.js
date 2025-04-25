// =========================
// Mobile Hamburger Menu Toggle
// =========================

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");

  if (toggleBtn && nav) {
    toggleBtn.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }
});
