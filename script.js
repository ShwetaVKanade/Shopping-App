const items = {
  item1: { name: "Item 1", price: 500, image: "Images/item1.avif" },
  item2: { name: "Item 2", price: 750, image: "Images/item2.avif" },
  item3: { name: "Item 3", price: 1200, image: "Images/item3.avif" },
  item4: { name: "Item 4", price: 500, image: "Images/images4.jpeg" },
  item5: { name: "Item 5", price: 750, image: "Images/images5.jpeg" },
  item6: { name: "Item 6", price: 1200, image: "Images/images6.jpeg" },
};

const cart = {}; // key: item ID, value: quantity

const itemList = document.getElementById("itemList");
const cartSection = document.getElementById("cartSection");
const cartTotal = document.getElementById("cartTotal");

// Render items
Object.entries(items).forEach(([key, item]) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${item.image}" alt="${item.name}" />
    <h3>${item.name}</h3>
    <p>Unit Price: ₹${item.price}</p>
    <input type="number" id="${key}-qty" placeholder="Quantity" value="1" min="1" />
    <button onclick="addToCart('${key}')">Add to Cart</button>
  `;
  itemList.appendChild(card);
});

// Add item to cart
function addToCart(key) {
  const qty = parseInt(document.getElementById(`${key}-qty`).value) || 1;
  cart[key] = (cart[key] || 0) + qty;
  renderCart();
}

// Render cart
function renderCart() {
  cartSection.innerHTML = "";
  let total = 0;

  Object.entries(cart).forEach(([key, qty]) => {
    const item = items[key];
    const itemTotal = item.price * qty;
    total += itemTotal;

    const row = document.createElement("div");
    row.className = "cart-item";
    row.innerHTML = `
      <span>${item.name} × ${qty}</span>
      <span>₹${itemTotal.toFixed(2)}</span>
    `;
    cartSection.appendChild(row);
  });

  cartTotal.textContent = total.toFixed(2);
}
