let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

function renderCart() {
  cartItemsContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    let row = document.createElement("tr");

    row.innerHTML = `
      <td><img src="${item.img}" width="60"></td>
      <td>${item.title}</td>
      <td>${item.price}</td>
      <td>
        <input type="number" value="${item.quantity || 1}" min="1" class="qty-input" data-index="${index}">
      </td>
      <td>Rs ${parseInt(item.price.replace("Rs", "").trim()) * (item.quantity || 1)}</td>
      <td><button class="remove-btn" data-index="${index}">X</button></td>
    `;

    cartItemsContainer.appendChild(row);

    total += parseInt(item.price.replace("Rs", "").trim()) * (item.quantity || 1);
  });

  cartTotal.textContent = total;
  localStorage.setItem("cart", JSON.stringify(cart));
}

cartItemsContainer.addEventListener("input", (e) => {
  if (e.target.classList.contains("qty-input")) {
    const index = e.target.dataset.index;
    cart[index].quantity = parseInt(e.target.value);
    renderCart();
  }
});

cartItemsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-btn")) {
    const index = e.target.dataset.index;
    cart.splice(index, 1);
    renderCart();
  }
});

document.getElementById("checkout-btn").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert("Proceeding to checkout...");
  // Add checkout logic here
});

renderCart();
// Example cart structure
// let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add item to cart
function addToCart(product) {
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Example product format
// { id: 1, name: "Green Shirt", image: "shirt.png" }
