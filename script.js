// REAL MOCK PRODUCTS DATA
const products = [
    { id: 1, title: "MacBook Pro 16' M3 Max", category: "laptop", price: 3890.00, rating: 4.9, inStock: true, badge: "Best Seller", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80", desc: "Maksimal gücə malik professional iş stansiyası." },
    { id: 2, title: "Sony WH-1000XM5 Noise-Canceling", category: "audio", price: 420.00, rating: 4.8, inStock: true, badge: "Endirim", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80", desc: "Kristal təmizliyində səs və küyboğma sistemi." },
    { id: 3, title: "Apple Watch Series 9 GPS", category: "wearable", price: 620.00, rating: 4.7, inStock: true, badge: "Yeni", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80", desc: "Ağıllı idman və səhhət izləmə köməkçiniz." },
    { id: 4, title: "iPhone 15 Pro Max 256GB", category: "phone", price: 2450.00, rating: 4.9, inStock: true, badge: "Top", image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=400&q=80", desc: "Titan çərçivə və A17 Pro çipi ilə misilsiz sürət." },
    { id: 5, title: "Logitech MX Master 3S Mouse", category: "laptop", price: 180.00, rating: 4.6, inStock: false, badge: "Tükəndi", image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=400&q=80", desc: "Erqonomik dizayn və səssiz klik düymələri." },
    { id: 6, title: "Canon EOS R6 Mark II", category: "camera", price: 3100.00, rating: 4.8, inStock: true, badge: "Pro", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=80", desc: "Peşəkar fotoqraflar üçün 4K kamera." },
    { id: 7, title: "Samsung Galaxy S24 Ultra", category: "phone", price: 2200.00, rating: 4.9,  inStock: true,  badge: "Yeni", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=400&q=80", desc: "Galaxy AI imkanları və 200 MP kamera." },
    { id: 8, title: "Bose QuietComfort Earbuds II", category: "audio", price: 300.00, rating: 4.7, inStock: true, badge: "Endirim", image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=400&q=80", desc: "Səs keyfiyyəti və rahatlıq üçün ideal." },
    { id: 9, title: "Dell XPS 15 Laptop", category: "laptop", price: 2500.00, rating: 4.8, inStock: true, badge: "Top", image: "https://images.unsplash.com/photo-1587825140708-1e3f1b5c6f2e?auto=format&fit=crop&w=400&q=80", desc: "Ultra incə dizayn və güclü performans." },
    { id: 10, title: "GoPro HERO12 Black", category: "camera", price: 500.00, rating: 4.6, inStock: true, badge: "Yeni", image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=400&q=80", desc: "Ekstremal idman və səyahət üçün ideal." },
    { id: 11, title: "Fitbit Charge 6 Fitness Tracker", category: "wearable", price: 180.00, rating: 4.5, inStock: true, badge: "Endirim", image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=400&q=80", desc: "Səhiyyə və idman izləmə üçün mükəmməl." },
    { id: 12, title: "Nikon Z9 Mirrorless Camera", category: "camera", price: 5500.00, rating: 4.9, inStock: true, badge: "Pro", image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=400&q=80", desc: "Peşəkar fotoqraflar üçün yüksək performans." },
    { id: 13, title: "Microsoft Surface Pro 9", category: "laptop", price: 1800.00, rating: 4.7, inStock: true, badge: "Yeni", image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=400&q=80", desc: "Planşet və laptopun mükəmməl birləşməsi." },
    { id: 14, title: "JBL Charge 6 Portable Speaker", category: "audio", price: 150.00, rating: 4.6, inStock: true, badge: "Endirim", image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=400&q=80", desc: "Səs keyfiyyəti və portativlik üçün ideal." },
    { id: 15, title: "Razer Blade 18 Gaming Laptop", category: "laptop", price: 4000.00, rating: 4.9, inStock: true, badge: "Top", image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=400&q=80", desc: "Ən son oyun texnologiyası ilə güclü performans." },
    { id: 16, title: "Apple AirPods Pro 2", category: "audio", price: 250.00, rating: 4.8, inStock: true, badge: "Yeni", image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=400&q=80", desc: "Aktiv səsboğma və şəffaf rejim ilə mükəmməl səs." },
    { id: 17, title: "Samsung Galaxy Watch 6", category: "wearable", price: 350.00, rating: 4.7, inStock: true, badge: "Yeni", image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=400&q=80", desc: "Səhiyyə və idman izləmə üçün qabaqcıl ağıllı saat." },
    { id: 18, title: "Canon EOS R5 Mirrorless Camera", category: "camera", price: 3900.00, rating: 4.9, inStock: true, badge: "Pro", image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=400&q=80", desc: "8K video və yüksək sürətli çəkiliş üçün ideal." },
    { id: 19, title: "Sony Alpha 7 IV Camera", category: "camera", price: 2800.00, rating: 4.8, inStock: true, badge: "Yeni", image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=400&q=80", desc: "Peşəkar fotoqraflar üçün yüksək performanslı kamera." },
    { id: 20, title: "Google Pixel 8 Pro", category: "phone", price: 1300.00, rating: 4.7, inStock: true, badge: "Yeni", image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=400&q=80", desc: "Ən son Android təcrübəsi və qabaqcıl kamera texnologiyası." },
    { id: 21, title: "Asus ROG Zephyrus G14", category: "laptop", price: 2200.00, rating: 4.8, inStock: true, badge: "Top", image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=400&q=80", desc: "Yüksək performanslı oyun laptopu." },
    { id: 22, title: "Bose SoundLink Revolve+", category: "audio", price: 200.00, rating: 4.6, inStock: true, badge: "Endirim", image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=400&q=80", desc: "360 dərəcə səs və portativ dizayn." },
    { id: 23, title: "HP Spectre x360 14", category: "laptop", price: 1800.00, rating: 4.7, inStock: true, badge: "Yeni", image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=400&q=80", desc: "2-in-1 dizayn və güclü performans." },
    { id: 24, title: "OnePlus 12 Pro", category: "phone", price: 1100.00, rating: 4.7, inStock: true, badge: "Yeni", image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=400&q=80", desc: "Sürətli performans və qabaqcıl kamera sistemi." },
    { id: 25, title: "DJI Mavic 3 Drone", category: "camera", price: 2200.00, rating: 4.8, inStock: true, badge: "Pro", image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=400&q=80", desc: "Hava çəkilişi üçün qabaqcıl dron." },
    { id: 26, title: "Roku Streaming Stick 4K", category: "electronics", price: 50.00, rating: 4.5, inStock: true, badge: "Endirim", image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=400&q=80", desc: "4K HDR axın təcrübəsi üçün kompakt cihaz." },
    { id: 27, title: "Kindle Paperwhite 2024", category: "electronics", price: 140.00, rating: 4.7, inStock: true, badge: "Yeni", image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=400&q=80", desc: "Gözləri yormayan ekran və suya davamlı dizayn." },
    { id: 28, title: "Nintendo Switch OLED Model", category: "gaming", price: 350.00, rating: 4.8, inStock: true, badge: "Top", image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=400&q=80", desc: "Yüksək keyfiyyətli OLED ekran və portativ oyun təcrübəsi." },
    { id: 29, title: "Xbox Series X", category: "gaming", price: 500.00, rating: 4.9, inStock: true, badge: "Yeni", image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=400&q=80", desc: "Ən son oyun texnologiyası və güclü performans." },
    { id: 30, title: "PlayStation 5 Digital Edition", category: "gaming", price: 400.00, rating: 4.9, inStock: true, badge: "Yeni", image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=400&q=80", desc: "Yüksək performanslı oyun konsolu və rəqəmsal oyunlar üçün ideal." }

];

// STATE MANAGEMENT
let cart = [];
let wishlist = [];
let compareList = [];
let activeCategory = 'all';
let currentPromo = null;
let currentCurrency = 'AZN';
const currencyRates = { AZN: 1, USD: 0.59, EUR: 0.54 };
const currencySymbols = { AZN: '₼', USD: '$', EUR: '€' };

// DOM ELEMENTS
const productsGrid = document.getElementById('products-grid');
const searchInput = document.getElementById('live-search-input');
const clearSearchBtn = document.getElementById('clear-search-btn');
const priceRange = document.getElementById('price-range');
const priceRangeVal = document.getElementById('price-range-val');
const sortSelect = document.getElementById('sort-select');
const stockOnlyCheckbox = document.getElementById('stock-only-checkbox');
const cartDrawer = document.getElementById('cart-drawer');
const overlay = document.getElementById('overlay');

// INITIALIZE APP
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    renderProducts();
    setupEventListeners();
    startCountdownTimer();
}

function convertPrice(valInAZN) {
    const rate = currencyRates[currentCurrency];
    return (valInAZN * rate).toFixed(2);
}

function getSymbol() {
    return currencySymbols[currentCurrency];
}

function renderProducts() {
    let filtered = [...products];

    // Filter Category
    if (activeCategory !== 'all') {
        filtered = filtered.filter(p => p.category === activeCategory);
    }

    // Filter Search Query
    const query = searchInput.value.toLowerCase().trim();
    if (query) {
        filtered = filtered.filter(p => p.title.toLowerCase().includes(query));
    }

    // Filter Price Range
    const maxPrice = parseFloat(priceRange.value);
    filtered = filtered.filter(p => p.price <= maxPrice);

    // Filter Stock Only
    if (stockOnlyCheckbox.checked) {
        filtered = filtered.filter(p => p.inStock);
    }

    // Sort
    const sortVal = sortSelect.value;
    if (sortVal === 'price-low') filtered.sort((a, b) => a.price - b.price);
    if (sortVal === 'price-high') filtered.sort((a, b) => b.price - a.price);
    if (sortVal === 'rating') filtered.sort((a, b) => b.rating - a.rating);

    document.getElementById('product-count-display').textContent = `${filtered.length} Məhsul tapıldı`;

    productsGrid.innerHTML = '';
    if (filtered.length === 0) {
        productsGrid.innerHTML = `<p class="text-center" style="grid-column: 1/-1; padding: 40px; color: var(--text-muted);">Meyarlara uyğun məhsul tapılmadı.</p>`;
        return;
    }

    filtered.forEach(p => {
        const isWish = wishlist.includes(p.id);
        const isComp = compareList.includes(p.id);

        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
            <div class="product-img-wrap">
                <img src="${p.image}" alt="${p.title}">
            </div>
            <h3 class="product-title">${p.title}</h3>
            <div class="product-rating"><i class="fa-solid fa-star"></i> ${p.rating}</div>
            <div class="product-price-row">
                <span class="price">${convertPrice(p.price)} ${getSymbol()}</span>
            </div>
            <div class="card-actions">
                <button class="btn-add-cart" onclick="addToCart(${p.id})">${p.inStock ? 'Səbətə At' : 'Tükəndi'}</button>
                <button class="btn-icon-secondary" onclick="toggleWishlist(${p.id})"><i class="${isWish ? 'fa-solid' : 'fa-regular'} fa-heart" style="${isWish ? 'color: red;' : ''}"></i></button>
                <button class="btn-icon-secondary" onclick="openQuickView(${p.id})"><i class="fa-solid fa-eye"></i></button>
            </div>
        `;
        productsGrid.appendChild(card);
    });
}

// CART ACTIONS
function addToCart(id) {
    const p = products.find(prod => prod.id === id);
    if (!p.inStock) {
        showToast("Bu məhsul stokda yoxdur!", "danger");
        return;
    }

    const item = cart.find(item => item.id === id);
    if (item) {
        item.qty += 1;
    } else {
        cart.push({ ...p, qty: 1 });
    }

    updateCart();
    showToast(`${p.title} səbətə əlavə olundu!`);
}

function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const drawerCartCount = document.getElementById('drawer-cart-count');
    const cartContainer = document.getElementById('cart-items-container');
    const subtotalEl = document.getElementById('cart-subtotal');
    const totalEl = document.getElementById('cart-total-price');

    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    cartCount.textContent = totalQty;
    drawerCartCount.textContent = totalQty;

    cartContainer.innerHTML = '';
    let subtotal = 0;

    cart.forEach(item => {
        subtotal += item.price * item.qty;
        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';
        itemEl.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div style="flex:1">
                <h4 style="font-size:13px; font-weight:700;">${item.title}</h4>
                <p style="font-size:12px; color:var(--primary);">${item.qty} x ${convertPrice(item.price)} ${getSymbol()}</p>
            </div>
            <button onclick="removeFromCart(${item.id})" style="background:none; border:none; color:#ef4444; cursor:pointer;"><i class="fa-solid fa-trash"></i></button>
        `;
        cartContainer.appendChild(itemEl);
    });

    let discount = currentPromo ? subtotal * 0.3 : 0;
    const finalTotal = subtotal - discount;

    subtotalEl.textContent = `${convertPrice(subtotal)} ${getSymbol()}`;
    totalEl.textContent = `${convertPrice(finalTotal)} ${getSymbol()}`;

    if (currentPromo) {
        document.getElementById('discount-row').classList.remove('hidden');
        document.getElementById('cart-discount').textContent = `-${convertPrice(discount)} ${getSymbol()}`;
    }
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
}

// WISHLIST & COMPARE ACTIONS
function toggleWishlist(id) {
    if (wishlist.includes(id)) {
        wishlist = wishlist.filter(wId => wId !== id);
        showToast("Məhsul sevimlilərdən silindi!");
    } else {
        wishlist.push(id);
        showToast("Məhsul sevimlilərə əlavə olundu!");
    }
    document.getElementById('wishlist-count').textContent = wishlist.length;
    renderProducts();
}

function toggleCompare(id) {
    if (compareList.includes(id)) {
        compareList = compareList.filter(cId => cId !== id);
        showToast("Məhsul müqayisədən silindi!");
    } else {
        if(compareList.length >= 4) {
            showToast("Maksimum 4 məhsul müqayisə edilə bilər!", "danger");
            return;
        }
        compareList.push(id);
        showToast("Məhsul müqayisə siyahısına əlavə olundu!");
    }
    document.getElementById('compare-count').textContent = compareList.length;
    renderProducts();
}

// OPEN MODAL FOR WISHLIST & COMPARE
function openListModal(type) {
    const modalBody = document.getElementById('list-modal-body');
    const modalTitle = document.getElementById('list-modal-title');
    modalBody.innerHTML = '';

    const listIds = type === 'wishlist' ? wishlist : compareList;
    modalTitle.textContent = type === 'wishlist' ? 'Sevimlilər Siyahısı' : 'Müqayisə Siyahısı';

    if (listIds.length === 0) {
        modalBody.innerHTML = '<p class="text-center" style="padding:20px; color:var(--text-muted);">Siyahı boşdur.</p>';
    } else {
        const grid = document.createElement('div');
        grid.style.display = 'grid';
        grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(180px, 1fr))';
        grid.style.gap = '15px';

        listIds.forEach(id => {
            const p = products.find(prod => prod.id === id);
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <div class="product-img-wrap"><img src="${p.image}"></div>
                <h4 style="font-size:13px;">${p.title}</h4>
                <p class="price" style="margin: 5px 0;">${convertPrice(p.price)} ${getSymbol()}</p>
                <button class="btn-checkout" style="padding:6px; font-size:12px;" onclick="addToCart(${p.id})">Səbətə At</button>
            `;
            grid.appendChild(card);
        });
        modalBody.appendChild(grid);
    }

    document.getElementById('list-modal').classList.add('active');
    overlay.classList.add('active');
}

// QUICK VIEW MODAL
function openQuickView(id) {
    const p = products.find(prod => prod.id === id);
    const body = document.getElementById('quickview-body-content');
    body.innerHTML = `
        <div style="display:flex; gap:20px; align-items:center; flex-wrap:wrap;">
            <div style="flex:1; min-width:200px; text-align:center;">
                <img src="${p.image}" style="max-width:100%; max-height:220px; object-fit:contain;">
            </div>
            <div style="flex:1; min-width:200px;">
                <h2>${p.title}</h2>
                <p style="margin: 10px 0; color: var(--text-muted); font-size:14px;">${p.desc}</p>
                <h3 style="color:var(--primary); font-size: 24px;">${convertPrice(p.price)} ${getSymbol()}</h3>
                <button class="btn-checkout" style="margin-top:15px;" onclick="addToCart(${p.id})">Səbətə At</button>
            </div>
        </div>
    `;
    document.getElementById('quick-view-modal').classList.add('active');
    overlay.classList.add('active');
}

// EVENT LISTENERS
function setupEventListeners() {
    // Live Search
    searchInput.addEventListener('input', () => {
        clearSearchBtn.classList.toggle('hidden', !searchInput.value);
        renderProducts();
    });

    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        clearSearchBtn.classList.add('hidden');
        renderProducts();
    });

    // Keyboard '/' search focus
    window.addEventListener('keydown', (e) => {
        if (e.key === '/' && document.activeElement !== searchInput) {
            e.preventDefault();
            searchInput.focus();
        }
    });

    // Price Filter
    priceRange.addEventListener('input', (e) => {
        priceRangeVal.textContent = e.target.value;
        renderProducts();
    });

    // Stock & Sort Filters
    stockOnlyCheckbox.addEventListener('change', renderProducts);
    sortSelect.addEventListener('change', renderProducts);

    // Category Buttons
    document.querySelectorAll('.cat-filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.cat-filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            activeCategory = e.target.dataset.cat;
            renderProducts();
        });
    });

    // Navigation Category Links
    document.querySelectorAll('.nav-cat-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const cat = link.dataset.cat;
            activeCategory = cat;
            document.querySelectorAll('.cat-filter-btn').forEach(b => {
                b.classList.toggle('active', b.dataset.cat === cat);
            });
            document.getElementById('dept-menu-list').classList.add('hidden');
            renderProducts();
            document.getElementById('products-section').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Reset Filters
    document.getElementById('reset-filters-btn').addEventListener('click', () => {
        activeCategory = 'all';
        priceRange.value = 4000;
        priceRangeVal.textContent = '4000';
        stockOnlyCheckbox.checked = false;
        searchInput.value = '';
        sortSelect.value = 'featured';
        document.querySelectorAll('.cat-filter-btn').forEach(b => {
            b.classList.toggle('active', b.dataset.cat === 'all');
        });
        renderProducts();
    });

    // Currency Change
    document.getElementById('currency-picker').addEventListener('change', (e) => {
        currentCurrency = e.target.value;
        document.querySelectorAll('.currency-symbol').forEach(s => s.textContent = getSymbol());
        renderProducts();
        updateCart();
    });

    // Department Menu Toggle
    document.getElementById('dept-menu-btn').addEventListener('click', () => {
        document.getElementById('dept-menu-list').classList.toggle('hidden');
    });

    // Cart Drawer Open & Close
    document.getElementById('cart-btn').addEventListener('click', () => {
        cartDrawer.classList.add('open');
        overlay.classList.add('active');
    });
    document.getElementById('close-cart-btn').addEventListener('click', closeCart);

    // Header Wishlist & Compare Buttons
    document.getElementById('wishlist-btn').addEventListener('click', () => openListModal('wishlist'));
    document.getElementById('compare-btn').addEventListener('click', () => openListModal('compare'));

    // Modals Close
    document.getElementById('close-quickview-btn').addEventListener('click', closeModals);
    document.getElementById('close-checkout-btn').addEventListener('click', closeModals);
    document.getElementById('close-list-modal-btn').addEventListener('click', closeModals);

    overlay.addEventListener('click', () => {
        closeCart();
        closeModals();
        document.getElementById('dept-menu-list').classList.add('hidden');
    });

    // Open Checkout Modal
    document.getElementById('open-checkout-modal-btn').addEventListener('click', () => {
        if (cart.length === 0) {
            showToast("Səbətiniz boşdur!", "danger");
            return;
        }
        closeCart();
        document.getElementById('checkout-modal').classList.add('active');
        overlay.classList.add('active');
    });

    // Checkout Form Submit
    document.getElementById('checkout-form').addEventListener('submit', (e) => {
        e.preventDefault();
        showToast("Sifarişiniz uğurla qəbul olundu!");
        cart = [];
        currentPromo = null;
        updateCart();
        closeModals();
    });

    // Apply Promo Code
    document.getElementById('apply-promo-btn').addEventListener('click', () => {
        const input = document.getElementById('promo-input').value.trim();
        if (input.toUpperCase() === 'SUPER30') {
            currentPromo = 'SUPER30';
            updateCart();
            showToast("30% Endirim tətbiq edildi!");
        } else {
            showToast("Yanlış promo kod!", "danger");
        }
    });

    // Dark/Light Theme Toggle
    document.getElementById('theme-toggle-btn').addEventListener('click', () => {
        const html = document.documentElement;
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        html.setAttribute('data-theme', newTheme);
        document.getElementById('theme-toggle-btn').innerHTML = newTheme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    });

    // FAQ Accordion
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.parentElement.classList.toggle('active');
        });
    });
}

function closeCart() {
    cartDrawer.classList.remove('open');
    overlay.classList.remove('active');
}

function closeModals() {
    document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
    overlay.classList.remove('active');
}

// TOAST ENGINE
function showToast(msg, type = "success") {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    if (type === "danger") toast.style.backgroundColor = "#ef4444";
    toast.textContent = msg;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// COUNTDOWN TIMER
function startCountdownTimer() {
    let duration = 86400 * 2; // 2 gün
    const timerEl = document.getElementById('deal-timer');

    setInterval(() => {
        let days = Math.floor(duration / (3600 * 24));
        let hours = Math.floor((duration % (3600 * 24)) / 3600);
        let minutes = Math.floor((duration % 3600) / 60);
        let seconds = Math.floor(duration % 60);

        timerEl.textContent = `${days}d ${hours}saat ${minutes}dək ${seconds}san`;
        if (duration > 0) duration--;
    }, 1000);
}