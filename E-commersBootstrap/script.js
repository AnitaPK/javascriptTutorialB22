// Sample products
const products = [
    { id: 1, name: 'Product 1', price: 10, description: 'Description for Product 1' },
    { id: 2, name: 'Product 2', price: 20, description: 'Description for Product 2' },
    { id: 3, name: 'Product 3', price: 30, description: 'Description for Product 3' },
    { id: 4, name: 'Product 4', price: 40, description: 'Description for Product 4' }
  ];
  
  // Display products
  const productList = document.getElementById('productList');
  products.forEach(product => {
    const div = document.createElement('div');
    div.classList.add('col-md-3', 'mb-4');
    div.innerHTML = `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">$${product.price}</p>
          <p class="card-text">${product.description}</p>
          <button onclick="addToCart(${product.id})" class="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    `;
    productList.appendChild(div);
  });
  
  // Cart
  const cartButton = document.getElementById('cartButton');
  const cartOverlay = document.getElementById('cartOverlay');
  const closeOverlay = document.querySelector('.close');
  const cartList = document.getElementById('cartList');
  const checkoutButton = document.getElementById('checkoutButton');
  let cartItems = [];
  
  // Show cart overlay
  cartButton.addEventListener('click', () => {
    renderCart();
    cartOverlay.style.display = 'flex';
  });
  
  // Close cart overlay
  closeOverlay.addEventListener('click', () => {
    cartOverlay.style.display = 'none';
  });
  
  // Add item to cart
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
      cartItems.push(product);
      renderCart();
      cartOverlay.style.display = 'flex';
    }
  }
  
  // Render cart items
  function renderCart() {
    cartList.innerHTML = '';
    cartItems.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - $${item.price}`;
      cartList.appendChild(li);
    });
    
    // Update cart button text
    cartButton.textContent = `Cart (${cartItems.length})`;
  }
  
  // Checkout
  checkoutButton.addEventListener('click', () => {
    if (cartItems.length > 0) {
      alert('Checkout successful!');
      cartItems = [];
      renderCart();
      cartOverlay.style.display = 'none';
    } else {
      alert('Your cart is empty!');
    }
  });
  