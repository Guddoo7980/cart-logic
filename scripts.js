const products = [
  { name: "Laptop", price: 59999, stock: 3 },
  { name: "Phone", price: 24999, stock: 0 },
  { name: "Headphones", price: 1999, stock: 5 },
  { name: "Mouse", price: 499, stock: 2 }
];

let cart = [];
let total = 0;

const productList = document.getElementById("product-list");
const totalDisplay = document.getElementById("total");

function renderProducts() {
  productList.innerHTML = "";

  const availableProducts = products.filter(p => p.stock > 0);

  availableProducts.forEach((product, index) => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      ${product.name} - ₹${product.price} (Stock: ${product.stock}) 
      <button onclick="addToCart(${index})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart(index) {
  const availableProducts = products.filter(p => p.stock > 0);
  const selected = availableProducts[index];

  if (selected.stock > 0) {
    cart.push({ ...selected });
    selected.stock--;
    total += selected.price;
    totalDisplay.textContent = total;
    renderProducts();
  }
}

renderProducts();
