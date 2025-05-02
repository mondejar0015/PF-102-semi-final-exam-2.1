const products = [
    // Burgers
    { id: 1, name: 'The Brooklyn', price: 179.99, category: '🍔', image: 'images/burger1.jpg' },
    { id: 2, name: 'The Mamma Mia', price: 189.99, category: '🍔', image: 'images/burger2.jpg' },
    { id: 9, name: 'BBQ Chicken Wings', price: 249.99, category: '🍔', image: 'images/wings1.jpg' },
    { id: 11, name: 'Grilled Cheese Sandwich', price: 159.99, category: '🍔', image: 'images/sandwich1.jpg' },
    { id: 16, name: 'Fried Chicken Burger', price: 199.99, category: '🍔', image: 'images/burger3.jpg' },
    { id: 18, name: 'Veggie Burger', price: 179.99, category: '🍔', image: 'images/burger4.jpg' },
    { id: 20, name: 'Cheese Fries', price: 99.99, category: '🍔', image: 'images/fries1.jpg' },
    { id: 21, name: 'Chicken Quesadilla', price: 229.99, category: '🍔', image: 'images/quesadilla1.jpg' },
    { id: 24, name: 'Veggie Wrap', price: 159.99, category: '🍔', image: 'images/wrap1.jpg' },
    { id: 26, name: 'Crispy Chicken Tenders', price: 199.99, category: '🍔', image: 'images/tenders1.jpg' },
    { id: 29, name: 'Caesar Salad', price: 179.99, category: '🍔', image: 'images/salad1.jpg' },

    // Pizzas
    { id: 3, name: 'Pepperoni Pizza', price: 299.99, category: '🍕', image: 'images/pizza1.jpg' },
    { id: 4, name: 'Cheese Burst Pizza', price: 349.99, category: '🍕', image: 'images/pizza2.jpg' },
    { id: 10, name: 'Veggie Supreme Pizza', price: 289.99, category: '🍕', image: 'images/pizza3.jpg' },
    { id: 17, name: 'Buffalo Chicken Pizza', price: 349.99, category: '🍕', image: 'images/pizza4.jpg' },
    { id: 27, name: 'Pasta Alfredo', price: 299.99, category: '🍕', image: 'images/pasta1.jpg' },
    { id: 28, name: 'Garlic Bread', price: 99.99, category: '🍕', image: 'images/garlicbread1.jpg' },
    { id: 32, name: 'BBQ Veg Pizza', price: 319.99, category: '🍕', image: 'images/pizza5.jpg' },

    // Snacks (Samosas, Spring Rolls)
    { id: 6, name: 'Spicy Chicken Samosa', price: 59.99, category: '🥟', image: 'images/samosa1.jpg' },
    { id: 14, name: 'Veg Samosa', price: 49.99, category: '🥟', image: 'images/samosa2.jpg' },
    { id: 30, name: 'Crispy Veg Spring Rolls', price: 89.99, category: '🥟', image: 'images/springrolls1.jpg' },

    // Drinks
    { id: 7, name: 'Coca Cola', price: 158.98, category: '🥤', image: 'images/drink1.jpg' },
    { id: 12, name: 'Mango Lassi', price: 79.99, category: '🥤', image: 'images/drink2.jpg' },
    { id: 15, name: 'Iced Tea', price: 99.99, category: '🥤', image: 'images/drink3.jpg' },
    { id: 19, name: 'Pineapple Coconut Smoothie', price: 129.99, category: '🥤', image: 'images/smoothie1.jpg' },
    { id: 22, name: 'Chocolate Milkshake', price: 169.99, category: '🥤', image: 'images/milkshake1.jpg' },

    // Desserts
    { id: 8, name: 'Choco Lava Cake', price: 239.98, category: '🍨', image: 'images/dessert1.jpg' },
    { id: 13, name: 'Chocolate Brownie', price: 179.99, category: '🍨', image: 'images/dessert2.jpg' },
    { id: 23, name: 'Fruit Salad', price: 149.99, category: '🍨', image: 'images/fruitsalad1.jpg' },
    { id: 25, name: 'Strawberry Cheesecake', price: 229.99, category: '🍨', image: 'images/cheesecake1.jpg' },
    { id: 31, name: 'Sundae Cup', price: 109.99, category: '🍨', image: 'images/sundae1.jpg' },

    // Hot Dogs
    { id: 5, name: 'Classic Hot Dog', price: 129.99, category: '🌭', image: 'images/hotdog1.jpg' },
    { id: 33, name: 'Chili Cheese Dog', price: 149.99, category: '🌭', image: 'images/hotdog2.jpg' },
    { id: 34, name: 'Bacon-Wrapped Hot Dog', price: 169.99, category: '🌭', image: 'images/hotdog3.jpg' },
    { id: 35, name: 'Chicago Style Hot Dog', price: 179.99, category: '🌭', image: 'images/hotdog4.jpg' },
    { id: 36, name: 'Veggie Hot Dog', price: 129.99, category: '🌭', image: 'images/hotdog5.jpg' },
    { id: 37, name: 'Spicy Jalapeno Dog', price: 159.99, category: '🌭', image: 'images/hotdog6.jpg' },
    { id: 38, name: 'Mustard & Sauerkraut Dog', price: 139.99, category: '🌭', image: 'images/hotdog7.jpg' },
    { id: 39, name: 'BBQ Sauce Hot Dog', price: 169.99, category: '🌭', image: 'images/hotdog8.jpg' },
    { id: 40, name: 'Loaded Hot Dog', price: 189.99, category: '🌭', image: 'images/hotdog9.jpg' }
];

let cart = {};
let selectedCategory = '🍔'; // Default category
let selectedPaymentMethod = 'cash'; // Default payment method (cash)

// Handle payment method selection
const depositInput = document.getElementById('deposit-input');
document.querySelectorAll('input[name="paymentMethod"]').forEach(function(radio) {
    radio.addEventListener('change', function() {
        selectedPaymentMethod = this.value;

        if (this.value === 'Cash') {
            depositInput.style.display = 'block';
        } else {
            depositInput.style.display = 'none';
        }
    });
});

// Trigger the change event on page load to set the initial state
document.querySelector('input[name="paymentMethod"]:checked')?.dispatchEvent(new Event('change'));

function checkout() {
    let subtotal = 0;
    for (let id in cart) {
        const product = products.find(p => p.id == id);
        const quantity = cart[id];
        subtotal += product.price * quantity;
    }

    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    if (selectedPaymentMethod === 'Cash') {
        const cashInput = document.getElementById('deposit') || document.getElementById('deposit-input');
        const cashDeposit = parseFloat(cashInput?.value);

        if (isNaN(cashDeposit)) {
            alert("Invalid input. Please enter a valid number.");
        } else if (cashDeposit < total) {
            alert("Insufficient cash. Please deposit a higher amount.");
        } else {
            const change = cashDeposit - total;
            alert(`Payment successful! Your change is ₱${change.toFixed(2)}. Thank you for your order.`);
            clearCart();
            if (cashInput) cashInput.value = '';
        }
    } else {
        alert(`Payment successful via ${selectedPaymentMethod.charAt(0).toUpperCase() + selectedPaymentMethod.slice(1)}! Thank you for your order.`);
        clearCart();
    }
}

function clearCart() {
    cart = {};
    renderCart();
}

function renderProducts() {
    const productContainer = document.getElementById('products');
    if (!productContainer) return;
    productContainer.innerHTML = '';

    const filteredProducts = products.filter(product => product.category === selectedCategory);

    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'col-12 col-md-6 col-lg-4';
        card.innerHTML = `  
          <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="img-fluid" onerror="this.onerror=null;this.src='images/placeholder.jpg';">
            <h5>${product.name}</h5>
            <p>${product.price.toLocaleString('en-PH', { style: 'currency', currency: 'PHP' })}</p>
            <button class="btn btn-sm btn-outline-primary" onclick="addToCart(${product.id})">Add to Cart</button>
          </div>
        `;
        productContainer.appendChild(card);
    });

    document.querySelectorAll('.category-btn').forEach(button => {
        button.classList.remove('category-selected');
        if (button.dataset.category === selectedCategory) {
            button.classList.add('category-selected');
        }
    });
}

function addToCart(id) {
    if (!cart[id]) cart[id] = 0;
    cart[id]++;
    renderCart();
}

function removeFromCart(id) {
    if (cart[id]) {
        cart[id]--;
        if (cart[id] === 0) delete cart[id];
        renderCart();
    }
}

function renderCart() {
    const cartContainer = document.getElementById('cart-items');
    if (!cartContainer) return;
    cartContainer.innerHTML = '';

    let subtotal = 0;
    for (let id in cart) {
        const product = products.find(p => p.id == id);
        const quantity = cart[id];
        const itemTotal = product.price * quantity;
        subtotal += itemTotal;

        const div = document.createElement('div');
        div.className = 'cart-item d-flex justify-content-between align-items-center mb-2';
        div.innerHTML = `
          <div>
            <strong>${product.name}</strong> (x${quantity})<br>
            <small>${itemTotal.toLocaleString('en-PH', { style: 'currency', currency: 'PHP' })}</small>
          </div>
          <button class="btn btn-sm btn-danger" onclick="removeFromCart(${id})">Remove</button>
        `;
        cartContainer.appendChild(div);
    }

    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    const subtotalEl = document.getElementById('subtotal');
    const taxEl = document.getElementById('tax');
    const totalEl = document.getElementById('total');

    if (subtotalEl) subtotalEl.textContent = subtotal.toFixed(2);
    if (taxEl) taxEl.textContent = tax.toFixed(2);
    if (totalEl) totalEl.textContent = total.toFixed(2);
}

document.getElementById('categories')?.addEventListener('click', (event) => {
    if (event.target.classList.contains('category-btn')) {
        selectedCategory = event.target.dataset.category;
        renderProducts();
}});
