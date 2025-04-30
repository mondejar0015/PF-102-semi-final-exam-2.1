// Products data
const products = [
    { name: "Bacon CheeseBurger", category: "Burgers", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Classic Burger", category: "Burgers", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Double Patty Burger", category: "Burgers", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Veggie Burger", category: "Burgers", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Cheese Burger", category: "Burgers", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Chicken Burger", category: "Burgers", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Mushroom Swiss Burger", category: "Burgers", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "BBQ Burger", category: "Burgers", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Iced Tea", category: "Drinks", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Soda", category: "Drinks", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Lemonade", category: "Drinks", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Milkshake", category: "Drinks", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Cold Brew Coffee", category: "Drinks", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Sparkling Water", category: "Drinks", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Apple Juice", category: "Drinks", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Hot Chocolate", category: "Drinks", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Chocolate Cake", category: "Desserts", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Ice Cream", category: "Desserts", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Brownies", category: "Desserts", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Fruit Salad", category: "Desserts", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Apple Pie", category: "Desserts", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Cheesecake", category: "Desserts", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Tiramisu", category: "Desserts", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Chocolate Mousse", category: "Desserts", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Chicken Meal", category: "Meals", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Rice Meal", category: "Meals", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Pasta Meal", category: "Meals", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Steak Meal", category: "Meals", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Fish Meal", category: "Meals", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Beef Stew", category: "Meals", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Chicken Adobo", category: "Meals", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Barbecue Ribs", category: "Meals", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Fries", category: "Sides", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Onion Rings", category: "Sides", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Coleslaw", category: "Sides", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Garlic Bread", category: "Sides", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Mozzarella Sticks", category: "Sides", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Loaded Nachos", category: "Sides", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Potato Wedges", category: "Sides", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Caesar Salad", category: "Sides", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Chicken Sandwich Special", category: "Specials", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Double Cheese Burger Special", category: "Specials", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Surf and Turf Special", category: "Specials", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Steak and Fries Special", category: "Specials", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Shrimp Tacos Special", category: "Specials", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "BBQ Ribs Special", category: "Specials", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Veggie Burger Special", category: "Specials", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Taco Platter Special", category: "Specials", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
];

// Menu and cart
const menu = document.querySelector('.menu');
let cart = [];

// Load items
function loadMenu(items) {
    menu.innerHTML = ''; // clear previous items
    items.forEach(product => {
        const item = document.createElement('div');
        item.classList.add('menu-item');
        item.innerHTML = `
            <img src="${product.imgSrc}" alt="${product.name}">
            <p>${product.name}</p>
            <button onclick="addToCart('${product.name}')">Add to Cart</button>
        `;
        menu.appendChild(item);
    });
}

// Filter menu and highlight active button
function filterMenu(category) {
    let filtered = [];
    if (category === 'All') {
        filtered = products;
    } else {
        filtered = products.filter(p => p.category === category);
    }

    loadMenu(filtered);

    // Highlight active button
    const buttons = document.querySelectorAll('.category-btn');
    buttons.forEach(btn => {
        if (btn.textContent === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Add item to cart
function addToCart(itemName) {
    cart.push(itemName);
    updateCart();
    showNotification(`${itemName} added to cart!`);
}

// Update cart
function updateCart() {
    const cartItemsList = document.getElementById('cartItemsList');
    const cartTotal = document.getElementById('cartTotal');
    cartItemsList.innerHTML = ''; // Clear cart
    let total = 0;

    // Display cart items
    const counts = cart.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {});

    for (const [item, count] of Object.entries(counts)) {
        const li = document.createElement('li');
        li.textContent = `${item} x${count}`;
        cartItemsList.appendChild(li);
        total += count * 10; // Assuming each item costs $10
    }

    cartTotal.textContent = `Total: $${total}`;
}

// Show notification
function showNotification(message) {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notification-text');
    notificationText.textContent = message;
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

// Initialize the menu
loadMenu(products);
