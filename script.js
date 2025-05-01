const items = [
  // Burgers
  { category: 'Burgers', name: 'Bacon CheeseBurger', img: 'https://tse4.mm.bing.net/th?id=OIP.q7UmIaHgc9krghFlp7adOAHaHa&pid=Api&P=0&h=180' },
  { category: 'Burgers', name: 'Classic Burger', img: 'https://tse3.mm.bing.net/th?id=OIP.VwCX3lzjZQmLjjc0Tb1mkgHaEJ&pid=Api&P=0&h=180' },
  { category: 'Burgers', name: 'Veggie Burger', img: 'https://tse3.mm.bing.net/th?id=OIP.QYH6qgWUWhxYqto372rSNwHaFk&pid=Api&P=0&h=180' },
  { category: 'Burgers', name: 'Double Patty Burger', img: 'https://tse2.mm.bing.net/th?id=OIP.68A3nSbDxAsZ10KNCYl_qwHaFb&pid=Api&P=0&h=180' },
  { category: 'Burgers', name: 'Mushroom Swiss Burger', img: 'https://tse2.mm.bing.net/th?id=OIP.-7kuj9QQp_qPxotaLTT8aQHaFO&pid=Api&P=0&h=180' },
  { category: 'Burgers', name: 'BBQ Burger', img: 'https://tse4.mm.bing.net/th?id=OIP.ViX2XkYjy7YZbUjYLvurSgHaEJ&pid=Api&P=0&h=180' },

  // Drinks
  { category: 'Drinks', name: 'Iced Tea', img: 'https://tse4.mm.bing.net/th?id=OIP.2qvwdZEuz8-XxkvtYcfuwwHaHa&pid=Api&P=0&h=180' },
  { category: 'Drinks', name: 'Milkshake', img: 'https://img.freepik.com/premium-photo/high-resolution-white-isolated-milkshake-image_872147-8012.jpg' },
  { category: 'Drinks', name: 'Coke', img: 'https://tse2.mm.bing.net/th?id=OIP.0nrmvoW93j2GPIStOW9_UgHaGy&pid=Api&P=0&h=180' },
  { category: 'Drinks', name: 'Bottled Water', img: 'http://kidspressmagazine.com/wp-content/uploads/2014/04/dreamstime_xl_12522351.jpg' },
  { category: 'Drinks', name: 'Fruit Punch', img: 'https://tse1.mm.bing.net/th?id=OIP.D360jv8FELl1QY0szAC5YAHaLH&pid=Api&P=0&h=180' },
  { category: 'Drinks', name: 'Coffee', img: 'https://tse3.mm.bing.net/th?id=OIP.HxFfBmqvKsktRmVJcbguBwHaE8&pid=Api&P=0&h=180' },

  // Desserts
  { category: 'Desserts', name: 'Chocolate Cake', img: 'https://tse2.mm.bing.net/th?id=OIP.lO4phN4Ss7Pizf0Kz6Z_AwHaHa&pid=Api&P=0&h=180' },
  { category: 'Desserts', name: 'Ice Cream', img: 'https://tse4.mm.bing.net/th?id=OIP.dGXe2R4to8DYryO1LY1eJwHaHa&pid=Api&P=0&h=180' },
  { category: 'Desserts', name: 'Apple Pie', img: 'https://tse3.mm.bing.net/th?id=OIP.LLIIWzCXfIHl06Bs1X1eFAHaEB&pid=Api&P=0&h=180' },
  { category: 'Desserts', name: 'Brownie Sundae', img: 'https://tse3.mm.bing.net/th?id=OIP.6f6LBGnNVH6jiLU6aPXF-QHaD7&pid=Api&P=0&h=180' },
  { category: 'Desserts', name: 'Donut Delight', img: 'https://tse2.mm.bing.net/th?id=OIP.KAlwCAvjJIoPsjsggp4yWgHaEo&pid=Api&P=0&h=180t' },

  // Meals
  { category: 'Meals', name: 'Chicken Meal', img: 'https://tse3.mm.bing.net/th?id=OIP.aBu9wT2wu-qYlVPGy2RbUwHaEK&pid=Api&P=0&h=180' },
  { category: 'Meals', name: 'Spaghetti', img: 'https://tse3.mm.bing.net/th?id=OIP.UFr7PAySATOUtkQl9RjMDgHaEK&pid=Api&P=0&h=180' },
  { category: 'Meals', name: 'Rice Bowl', img: 'https://tse1.mm.bing.net/th?id=OIP.ofdmXA_txjGA9pNOwgzJwQHaHa&pid=Api&P=0&h=180' },
  { category: 'Meals', name: 'Fish Fillet Meal', img: 'https://tse4.mm.bing.net/th?id=OIP.gmZ2bJhGxtx1x62EhfTa8gHaFA&pid=Api&P=0&h=180' },
  { category: 'Meals', name: 'Beef Tapa Meal', img: 'https://tse2.mm.bing.net/th?id=OIP.AVBVD9Xw0OZXHd978nPvUAHaEK&pid=Api&P=0&h=180' },

  // Specials
  { category: 'Specials', name: 'Family Combo', img: 'https://via.placeholder.com/150?text=Family+Combo' },
  { category: 'Specials', name: 'Holiday Platter', img: 'https://via.placeholder.com/150?text=Holiday+Platter' },
  { category: 'Specials', name: 'Party Pack', img: 'https://via.placeholder.com/150?text=Party+Pack' },
  { category: 'Specials', name: 'Weekend Feast', img: 'https://via.placeholder.com/150?text=Weekend+Feast' },
  { category: 'Specials', name: 'Birthday Bash Bundle', img: 'https://via.placeholder.com/150?text=Birthday+Bash' },

  // Sides
  { category: 'Sides', name: 'French Fries', img: 'https://via.placeholder.com/150?text=Fries' },
  { category: 'Sides', name: 'Onion Rings', img: 'https://via.placeholder.com/150?text=Onion+Rings' },
  { category: 'Sides', name: 'Mozzarella Sticks', img: 'https://via.placeholder.com/150?text=Mozzarella+Sticks' },
  { category: 'Sides', name: 'Coleslaw', img: 'https://via.placeholder.com/150?text=Coleslaw' },
  { category: 'Sides', name: 'Mashed Potatoes', img: 'https://via.placeholder.com/150?text=Mashed+Potatoes' },
];

let selectedItems = [];

function renderItems(filter = 'Burgers') {
  const container = document.getElementById('menu-items');
  if (!container) return;

  container.classList.remove('visible'); // Start fade-out

  setTimeout(() => {
    container.innerHTML = '';

    items
      .filter(item => item.category === filter)
      .forEach(item => {
        const div = document.createElement('div');
        div.className = 'item';
        if (selectedItems.some(i => i.name === item.name)) {
          div.classList.add('selected');
        }
        div.innerHTML = `
          <img src="${item.img}" alt="${item.name}" />
          <p>${item.name}</p>
        `;
        div.onclick = () => toggleItemSelection(item.name);
        container.appendChild(div);
      });

    // Trigger fade-in after items have been added
    requestAnimationFrame(() => {
      container.classList.add('visible');
    });

  }, 200); // Adjusted delay for smoother transition
}

function toggleItemSelection(itemName) {
  const index = selectedItems.findIndex(item => item.name === itemName);
  const item = items.find(i => i.name === itemName);
  if (!item) return;

  if (index > -1) {
    selectedItems.splice(index, 1);
  } else {
    selectedItems.push(item);
  }

  updateCheckoutBar();
  updateItemHighlighting();
}

function updateItemHighlighting() {
  const itemElements = document.querySelectorAll('.item');
  itemElements.forEach(el => {
    const name = el.querySelector('p')?.innerText;
    if (selectedItems.some(i => i.name === name)) {
      el.classList.add('selected');
    } else {
      el.classList.remove('selected');
    }
  });
}

function updateCheckoutBar() {
  const checkoutBar = document.getElementById('checkout-bar');
  if (!checkoutBar) return;

  const checkoutContent = checkoutBar.querySelector('.checkout-content');
  if (selectedItems.length > 0) {
    checkoutContent.innerHTML = `
      <span>${selectedItems.length} item(s) selected</span>
      <button onclick="checkout()">Checkout</button>
    `;
  } else {
    checkoutContent.innerHTML = `
      <span>No items selected</span>
    `;
  }
}

function checkout() {
  if (selectedItems.length === 0) {
    alert("Please select at least one item before checking out.");
    return;
  }
  alert(`You checked out ${selectedItems.length} item(s) for $${(selectedItems.length * 9.99).toFixed(2)}!`);
  selectedItems = [];
  updateCheckoutBar();
  renderItems();
}

function filterCategory(category) {
  renderItems(category);
}

window.addEventListener('DOMContentLoaded', () => {
  renderItems();
  updateCheckoutBar();

  const container = document.getElementById('menu-items');
  if (container) {
    container.classList.add('visible');
  }

  // Attach event listener for reviews form submission
  const reviewForm = document.getElementById('review-form');
  if (reviewForm) {
    reviewForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const name = document.getElementById('name').value;
      const reviewText = document.getElementById('review').value;

      if (name && reviewText) {
        reviews.push({ name: name, text: reviewText });

        // Clear the form
        document.getElementById('name').value = '';
        document.getElementById('review').value = '';

        // Display updated reviews
        displayReviews();
        alert('Thank you for your review!');
      } else {
        alert('Please fill out both fields.');
      }
    });
  }
});

let reviews = []; // Array to store reviews

// Function to switch between main content and reviews page
function viewReviews() {
  document.getElementById('menu-items').classList.add('hidden');  // Hide menu items
  document.getElementById('reviews-section').classList.remove('hidden');  // Show reviews section
  document.getElementById('reviews-section').scrollIntoView({ behavior: 'smooth' });
  displayReviews();
}

// Function to go back to the menu
function goBackToMenu() {
  document.getElementById('reviews-section').classList.add('hidden');  // Hide reviews section
  document.getElementById('menu-items').classList.remove('hidden');  // Show menu items
  document.getElementById('menu-items').scrollIntoView({ behavior: 'smooth' });
}

// Function to display all reviews
function displayReviews() {
  const reviewsList = document.getElementById('reviews-list');
  reviewsList.innerHTML = ''; // Clear previous reviews

  if (reviews.length === 0) {
    reviewsList.innerHTML = '<p>No reviews yet. Be the first to leave one!</p>';
  } else {
    reviews.forEach(review => {
      const reviewDiv = document.createElement('div');
      reviewDiv.classList.add('review');
      reviewDiv.innerHTML = `
        <p><strong>${review.name}</strong> says:</p>
        <p>${review.text}</p>
      `;
      reviewsList.appendChild(reviewDiv);
    });
  }
}

// Attach a back button to your reviews page
document.getElementById('back-to-menu-btn').addEventListener('click', goBackToMenu);

// Function to handle form submission
document.getElementById('review-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const reviewText = document.getElementById('review').value;

  if (name && reviewText) {
    // Add new review to the reviews array
    reviews.push({ name: name, text: reviewText });

    // Clear the form
    document.getElementById('name').value = '';
    document.getElementById('review').value = '';

    // Display updated reviews
    displayReviews();
    alert('Thank you for your review!');
  } else {
    alert('Please fill out both fields.');
  }
});

