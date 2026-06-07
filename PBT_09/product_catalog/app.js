const products = [
  { id: 1, name: 'iPhone 16', price: 25990000, category: 'phone', image: 'https://placehold.co/400x400?text=iPhone+16', rating: 4.5, inStock: true },
  { id: 2, name: 'MacBook Pro', price: 45990000, category: 'laptop', image: 'https://placehold.co/400x400?text=MacBook+Pro', rating: 4.8, inStock: true },
  { id: 3, name: 'AirPods Pro', price: 6990000, category: 'accessory', image: 'https://placehold.co/400x400?text=AirPods+Pro', rating: 4.3, inStock: true },
  { id: 4, name: 'iPad Air', price: 16990000, category: 'tablet', image: 'https://placehold.co/400x400?text=iPad+Air', rating: 4.6, inStock: false },
  { id: 5, name: 'Samsung S24', price: 22990000, category: 'phone', image: 'https://placehold.co/400x400?text=Samsung+S24', rating: 4.4, inStock: true },
  { id: 6, name: 'Dell XPS 15', price: 35990000, category: 'laptop', image: 'https://placehold.co/400x400?text=Dell+XPS+15', rating: 4.7, inStock: true },
  { id: 7, name: 'Galaxy Buds', price: 3490000, category: 'accessory', image: 'https://placehold.co/400x400?text=Galaxy+Buds', rating: 4.1, inStock: true },
  { id: 8, name: 'Xiaomi Pad 6', price: 7990000, category: 'tablet', image: 'https://placehold.co/400x400?text=Xiaomi+Pad+6', rating: 4.2, inStock: true },
  { id: 9, name: 'Pixel 9', price: 19990000, category: 'phone', image: 'https://placehold.co/400x400?text=Pixel+9', rating: 4.6, inStock: true },
  { id: 10, name: 'ThinkPad X1', price: 32990000, category: 'laptop', image: 'https://placehold.co/400x400?text=ThinkPad+X1', rating: 4.5, inStock: true },
  { id: 11, name: 'Logitech Mouse', price: 1290000, category: 'accessory', image: 'https://placehold.co/400x400?text=Logitech+Mouse', rating: 4.2, inStock: true },
  { id: 12, name: 'Samsung Tab', price: 10990000, category: 'tablet', image: 'https://placehold.co/400x400?text=Samsung+Tab', rating: 4.0, inStock: true }
];

const productGrid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const categoryFilters = document.getElementById('categoryFilters');
const sortSelect = document.getElementById('sortSelect');
const cartBadge = document.getElementById('cartBadge');
const modal = document.getElementById('productModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');
const darkModeToggle = document.getElementById('darkModeToggle');

let currentCategory = 'all';
let cartCount = 0;
let currentSort = 'price-asc';

const categories = ['all', 'phone', 'laptop', 'tablet', 'accessory'];

function formatMoney(value) {
  return value.toLocaleString('vi-VN') + 'đ';
}

function renderCategories() {
  categoryFilters.innerHTML = '';
  categories.forEach(category => {
    const button = document.createElement('button');
    button.textContent = category === 'all' ? 'All' : category;
    button.dataset.category = category;
    button.className = category === currentCategory ? 'active' : '';
    button.addEventListener('click', () => {
      currentCategory = category;
      renderCategories();
      renderProducts();
    });
    categoryFilters.appendChild(button);
  });
}

function sortProducts(items) {
  if (currentSort === 'price-asc') return [...items].sort((a, b) => a.price - b.price);
  if (currentSort === 'price-desc') return [...items].sort((a, b) => b.price - a.price);
  if (currentSort === 'name-asc') return [...items].sort((a, b) => a.name.localeCompare(b.name));
  if (currentSort === 'rating-desc') return [...items].sort((a, b) => b.rating - a.rating);
  return items;
}

function renderProducts() {
  const query = searchInput.value.trim().toLowerCase();
  let filtered = products.filter(product => {
    const matchCategory = currentCategory === 'all' || product.category === currentCategory;
    const matchSearch = product.name.toLowerCase().includes(query);
    return matchCategory && matchSearch;
  });
  filtered = sortProducts(filtered);
  productGrid.innerHTML = '';
  filtered.forEach(product => productGrid.appendChild(createCard(product)));
}

function createCard(product) {
  const card = document.createElement('article');
  card.className = 'card';
  card.addEventListener('click', e => {
    if (e.target.tagName.toLowerCase() !== 'button') {
      showModal(product);
    }
  });

  const img = document.createElement('img');
  img.src = product.image;
  img.alt = product.name;

  const body = document.createElement('div');
  body.className = 'card-body';

  const title = document.createElement('h2');
  title.textContent = product.name;

  const desc = document.createElement('p');
  desc.textContent = `${product.category} • ${formatMoney(product.price)}`;

  const footer = document.createElement('div');
  footer.className = 'card-footer';

  const rating = document.createElement('span');
  rating.textContent = `⭐ ${product.rating}`;

  const addButton = document.createElement('button');
  addButton.textContent = 'Add to cart';
  addButton.addEventListener('click', e => {
    e.stopPropagation();
    cartCount += 1;
    updateCartBadge();
  });

  body.append(title, desc, footer);
  footer.append(rating, addButton);
  card.append(img, body);
  return card;
}

function updateCartBadge() {
  cartBadge.textContent = `🛒 ${cartCount}`;
}

function showModal(product) {
  modalBody.innerHTML = `
    <h2>${product.name}</h2>
    <p>Category: ${product.category}</p>
    <p>Price: ${formatMoney(product.price)}</p>
    <p>Rating: ${product.rating}</p>
    <p>${product.inStock ? 'In stock' : 'Out of stock'}</p>
  `;
  modal.classList.remove('hidden');
}

closeModal.addEventListener('click', () => modal.classList.add('hidden'));
modal.addEventListener('click', e => {
  if (e.target === modal) modal.classList.add('hidden');
});

searchInput.addEventListener('input', renderProducts);
sortSelect.addEventListener('change', event => {
  currentSort = event.target.value;
  renderProducts();
});

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

renderCategories();
renderProducts();
updateCartBadge();
