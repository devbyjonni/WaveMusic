// =========================
// Simple Modal for Product Quick View
// =========================

document.addEventListener("DOMContentLoaded", function () {
  const productCards = document.querySelectorAll(".product-card");
  const simpleModal = document.getElementById("simple-modal");
  const closeSimpleModal = document.getElementById("close-simple-modal");

  productCards.forEach((card) => {
    card.addEventListener("click", () => {
      document.getElementById("modal-product-name").textContent =
        card.querySelector(".product-name").textContent;

      document.getElementById("modal-product-price").textContent =
        card.querySelector(".product-price").textContent;

      document.getElementById("modal-product-description").textContent =
        card.querySelector(".product-description").textContent;

      document.getElementById("modal-product-image").src =
        card.querySelector(".product-image").src;

      simpleModal.style.display = "flex";
    });
  });

  closeSimpleModal.addEventListener("click", () => {
    simpleModal.style.display = "none";
  });

  simpleModal.addEventListener("click", (e) => {
    if (e.target === simpleModal) {
      simpleModal.style.display = "none";
    }
  });
});
