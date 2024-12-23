 // Hämta viktiga element från HTML
const badge = document.querySelector('.badge'); // Badgen (nummer i kundvagnen)
const addToCartButton = document.querySelector('.cta-add'); // "Add to Cart"-knappen
const inchButton = document.querySelector('.cta-select'); // "14 Inch"-knappen

// Håll koll på antalet produkter i kundvagnen
let cartCount = 0;

// Funktion: Uppdatera badge-visningen
function updateBadge() {
  badge.setAttribute('value', cartCount); // Uppdatera badge med cartCount
  if (cartCount > 0) {
    inchButton.textContent = "Remove from Cart"; // Ändra text till "Remove from Cart"
  } else {
    inchButton.textContent = "14 Inch"; // Återställ texten
  }
}

// Klick för "Add to Cart"
addToCartButton.addEventListener('click', () => {
  cartCount++; // Öka antalet produkter
  updateBadge(); // Uppdatera visningen
});

// klick för "Remove from Cart" / "14 Inch"
inchButton.addEventListener('click', () => {
  if (cartCount > 0) {
    cartCount--; // Minska antalet produkter
    updateBadge(); // Uppdatera visningen
  }
});

