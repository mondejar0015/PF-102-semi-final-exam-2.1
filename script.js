// Products data
const products = [
    // Burgers
    { name: "Bacon CheeseBurger", category: "Burgers", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Classic Burger", category: "Burgers", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Double Patty Burger", category: "Burgers", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Veggie Burger", category: "Burgers", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },

    // Drinks
    { name: "Iced Tea", category: "Drinks", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Soda", category: "Drinks", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Lemonade", category: "Drinks", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Milkshake", category: "Drinks", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },

    // Desserts
    { name: "Chocolate Cake", category: "Desserts", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Ice Cream", category: "Desserts", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Brownies", category: "Desserts", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Fruit Salad", category: "Desserts", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },

    // Meals
    { name: "Chicken Meal", category: "Meals", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Rice Meal", category: "Meals", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Pasta Meal", category: "Meals", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
    { name: "Steak Meal", category: "Meals", imgSrc: "304e8b78-ccbf-4fda-ac3c-6b243de5138f.png" },
];

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
    const filtered = products.filter(p => p.category === category);
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
    alert(`${itemName} added to cart!`);
}

// Checkout - show cart summary
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    let summary = "Your Order:\n\n";
    let counts = {};

    cart.forEach(item => {
        counts[item] = (counts[item] || 0) + 1;
    });

    for (let item in counts) {
        summary += `${item} x${counts[item]}\n`;
    }

    alert(summary);
}

// Load default category at start
filterMenu('Burgers');
