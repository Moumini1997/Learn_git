// Attendre que le DOM soit chargé
document.addEventListener("DOMContentLoaded", () => {
  const plusBtns = document.querySelectorAll(".fa-plus-circle");
  const minusBtns = document.querySelectorAll(".fa-minus-circle");
  const deleteBtns = document.querySelectorAll(".fa-trash-alt");
  const heartBtns = document.querySelectorAll(".fa-heart");
  const totalDisplay = document.querySelector(".total");

  // --- Fonction : recalculer le total ---
  function updateTotal() {
    let total = 0;
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
      const priceText = card.querySelector(".unit-price").textContent;
      const price = parseFloat(priceText.replace("$", ""));
      const qty = parseInt(card.querySelector(".quantity").textContent);
      total += price * qty;
    });
    totalDisplay.textContent = total.toFixed(2) + " $";
  }

  // --- Gestion des boutons + ---
  plusBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const qtyEl = btn.parentElement.querySelector(".quantity");
      let qty = parseInt(qtyEl.textContent);
      qtyEl.textContent = qty + 1;
      updateTotal();
    });
  });

  // --- Gestion des boutons - ---
  minusBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const qtyEl = btn.parentElement.querySelector(".quantity");
      let qty = parseInt(qtyEl.textContent);
      if (qty > 0) {
        qtyEl.textContent = qty - 1;
        updateTotal();
      }
    });
  });

  // --- Gestion du bouton supprimer ---
  deleteBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".card"); // 🔹 on supprime toute la carte, image incluse
      if (card) {
        card.remove();
        updateTotal();
      }
    });
  });

  // --- Gestion du bouton cœur ❤️ ---
  heartBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("liked");
      if (btn.classList.contains("liked")) {
        btn.style.color = "red";
      } else {
        btn.style.color = "black";
      }
    });
  });

  // Calcul initial du total
  updateTotal();
});
