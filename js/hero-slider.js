// =========================
// Hero Image Slider with Pagination
// =========================

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".hero-slide");
  const pagination = document.querySelector(".hero-pagination");
  let currentSlide = 0;

  if (slides.length === 0 || !pagination) {
    console.error("No hero slides or pagination found!");
    return;
  }

  // Create pagination dots
  slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("hero-dot");
    if (index === 0) dot.classList.add("active");
    pagination.appendChild(dot);
  });

  const dots = document.querySelectorAll(".hero-dot");

  const showSlide = (index) => {
    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));
    slides[index].classList.add("active");
    dots[index].classList.add("active");
  };

  // Start the first slide
  showSlide(currentSlide);

  // Auto-slide every 4 seconds
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 4000);
});
