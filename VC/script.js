document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;
  const filterBtns = document.querySelectorAll(".filter-btn");
  const cards = Array.from(document.querySelectorAll(".card"));
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  // === Thème sombre / clair ===
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    themeToggle.textContent = "☀️ Mode clair";
  }

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
      themeToggle.textContent = "☀️ Mode clair";
      localStorage.setItem("theme", "dark");
    } else {
      themeToggle.textContent = "🌙 Mode sombre";
      localStorage.setItem("theme", "light");
    }
  });

  // === Filtrage fluide + animation ===
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Activer le bon bouton
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.dataset.category;

      cards.forEach((card) => {
        const match = category === "all" || card.dataset.category === category;

        if (match) {
          // Réafficher avec animation fluide
          card.classList.remove("hidden");
          card.style.display = "flex";

          // Forcer un "reflow" pour relancer l’animation à chaque filtrage
          void card.offsetWidth;
          card.classList.add("show");

          // Supprimer la classe d’animation après sa lecture
          setTimeout(() => card.classList.remove("show"), 500);
        } else {
          // Animation de disparition avant retrait
          card.classList.add("hidden");
          setTimeout(() => (card.style.display = "none"), 300);
        }
      });
    });
  });

  // === Lightbox (agrandissement image) ===
  cards.forEach((card) => {
    const img = card.querySelector("img");
    if (!img) return;

    img.addEventListener("click", () => {
      const largeSrc = img.dataset.large || img.src;
      lightboxImg.src = largeSrc;
      lightbox.style.display = "flex";
      document.documentElement.style.overflow = "hidden";
    });
  });

  // Fermer la lightbox en cliquant ou en appuyant sur Échap
  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
    lightboxImg.src = "";
    document.documentElement.style.overflow = "";
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.style.display === "flex") {
      lightbox.click();
    }
  });

  // === Animation progressive au chargement ===
  window.addEventListener("load", () => {
    document.querySelectorAll(".fade-in").forEach((el, index) => {
      el.style.animationDelay = `${index * 0.12}s`;
    });
  });
});
