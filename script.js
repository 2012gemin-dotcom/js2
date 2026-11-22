// Butun mehsullar
const products = [
    // _____________________________tel baslangic____________________________________//
    { id: 101, 
    title: "Apple IPhone 14 ", 
    category: "phone", 
    price: 1049.99, 
    rating: 4.9, 
    inStock: true, 
    badge: "Top", 
    image: "https://www.sellcell.com/assets/images/devices/009/iphone-14.jpg", 
    desc: "Apple" },
    { id: 102, 
    title: "Apple IPhone 15", 
    category: "phone", 
    price: 1549.99, 
    rating: 4.9, 
    inStock: true, 
    badge: "Top", 
    image: "https://www.sellcell.com/assets/images/devices/009/iphone-15.jpg", 
    desc: "Apple" },
    { id: 103, 
    title: "Apple IPhone 16", 
    category: "phone", 
    price: 1799.99, 
    rating: 4.9, 
    inStock: true, 
    badge: "Top", 
    image: "https://www.sellcell.com/assets/images/devices/009/iphone-16.jpg", 
    desc: "Apple" },
    { id: 104, 
    title: "Apple IPhone 17", 
    category: "phone", 
    price: 1949.99, 
    rating: 4.9, 
    inStock: true, 
    badge: "Top", 
    image: "https://www.sellcell.com/assets/images/devices/009/iphone-17.jpg", 
    desc: "Apple" },
    { id: 105, 
    title: "Apple iPhone 14 Pro Max ", 
    category: "phone", 
    price: 1199.99, 
    rating: 4.9, 
    inStock: true, 
    badge: "Top", 
    image: "https://i5.walmartimages.com/asr/cb8f75e5-1b8e-4c06-9776-0d995a314ada.88ab53492f6fe7e653033585616419b1.jpeg", 
    desc: "Apple" },
    { id: 106, 
    title: "Apple iPhone 15 Pro Max ", 
    category: "phone", 
    price: 1749.99, 
    rating: 4.9, 
    inStock: true, 
    badge: "Top", 
    image: "https://www.sellcell.com/assets/images/devices/009/iphone-15-pro-max.jpg", 
    desc: "Apple" },
    { id: 107, 
    title: "Apple IPhone 16 Pro Max", 
    category: "phone", 
    price: 2199.99, 
    rating: 4.9, 
    inStock: true, 
    badge: "Top", 
    image: "https://www.sellcell.com/assets/images/devices/009/iphone-16-pro-max.jpg", 
    desc: "Apple" },
    { id: 108, 
    title: "Apple IPhone 17 Pro Max", 
    category: "phone", 
    price: 1799.99, 
    rating: 4.9, 
    inStock: true, 
    badge: "Top", 
    image: "https://storage.irshad.az/products/resized/eejixoO48GfFzxGaoWoYHRlAAzjyFK5Di5YIPAPw.png", 
    desc: "Apple" },
    { id: 109, 
    title: "Apple IPhone 18 Pro Max", 
    category: "phone", 
    price: 3289.99, 
    rating: 4.9, 
    inStock: true, 
    badge: "Yeni", 
    image: "https://www.sellcell.com/assets/images/devices/009/iphone-18-pro-max.jpg", 
    desc: "Apple" },
    { id: 110, 
    title: "Samsung Galaxy S22 Ultra", 
    category: "phone", 
    price: 1099.99, 
    rating: 4.9, 
    inStock: true, 
    badge: "Top", 
    image: "https://tse3.mm.bing.net/th/id/OIF.a4Q02B5t7rYt9AJ78tNJ1g?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", 
    desc: "Samsung" },
    { id: 111, 
    title: "Samsung Galaxy S23 Ultra", 
    category: "phone", 
    price: 1249.99, 
    rating: 4.9, 
    inStock: true, 
    badge: "Top", 
    image: "https://image-us.samsung.com/us/smartphones/galaxy-s23-ultra/images/gallery/lavender/01-DM3-Lavender-PDP-1600x1200.jpg", 
    desc: "Samsung" },
    { id: 112, 
    title: "Samsung Galaxy S24 Ultra", 
    category: "phone", 
    price: 1799.99,
    rating: 4.9, 
    inStock: true, 
    badge: "Top", 
    image: "https://wizemart.ru/images/item/3a/da/smartfon_samsung_galaxy_s24_ultra-4552479pic.jpeg", 
    desc: "Samsung" },
    { id: 113, 
    title: "Samsung Galaxy S25 Ultra", 
    category: "phone", 
    price: 2049.99, 
    rating: 4.9, 
    inStock: true, 
    badge: "Top", 
    image: "https://tse4.mm.bing.net/th/id/OIP.67P4CLNOPwSCPeCvKJ0_gQHaHd?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", 
    desc: "Samsung" },
    { id: 114, 
    title: "Samsung Galaxy S26 Ultra", 
    category: "phone", 
    price: 2469.99, 
    rating: 4.9, 
    inStock: true, 
    badge: "Yeni", 
    image: "https://storage.irshad.az/products/resized/bfabshjspl1o301lLMaRdTI8RFKi5Sk0wTcpohg9.png", 
    desc: "Samsung" },
    { id: 115, 
    title: "HONOR 600", 
    category: "phone", 
    price: 1249.99, 
    rating: 4.8, 
    inStock: true, 
    badge: "Yeni", 
    image: "https://storage.irshad.az/products/resized/v8Xomi6lxA7s6G2JkKyLEUmGwoGXw0cxycc1fnpM.png", 
    desc: "HONOR" },
    { id: 116, 
    title: "HONOR 600 pro", 
    category: "phone", 
    price: 1649.99, 
    rating: 4.7, 
    inStock: true, 
    badge: "Yeni", 
    image: "https://storage.irshad.az/products/resized/4t4byNrdyN78lQr3s0P5TwgVdzECKJMf2fy1mRhI.png", 
    desc: "HONOR" },
    { id: 117, 
    title: "HONOR magic8 pro", 
    category: "phone", 
    price: 2499.99, 
    rating: 4.8, 
    inStock: true, 
    badge: "Pro", 
    image: "https://storage.irshad.az/products/resized/hxrIN5dCUzUt4vWWhRKkp5fPjjOULgMjKUGAqVtn.png", 
    desc: "HONOR" },
    { id: 118, 
    title: "HONOR x9d", 
    category: "phone", 
    price: 999.99, 
    rating: 4.7, 
    inStock: true, 
    badge: "Yeni", 
    image: "https://storage.irshad.az/products/resized/ogZwH0mEMBnMlM04rzO3FT4EoG9xDW5T6HiM0Hk0.png", 
    desc: "HONOR" },
    // _____________________________tel axir____________________________________//
    { id: 310, 
    title: "Apple Ipad Pro 13 (M4) ", 
    category: "laptop", 
    price: 1049.99, 
    rating: 4.9, 
    inStock: true, 
    badge: "Top", 
    image: "https://storage.irshad.az/products/resized/VKOebts2yL2Rwt8IyecQXaD06aNgng1V7sID4dOf.png", 
    desc: "Apple" },
    { id: 311, 
    title: "Samsung Galaxy Tab S11", 
    category: "laptop", 
    price: 1799.99, 
    rating: 4.8, 
    inStock: true, 
    badge: "Yeni", 
    image: "https://storage.irshad.az/products/resized/rFLYr3iORrnjOVnzLVkvysOqHPNMXQkpki3cAT7r.png", 
    desc: "Samsung" },
    { id: 312, 
    title: "Apple Ipad Air 13(M3)", 
    category: "laptop", 
    price: 899.99, 
    rating: 4.8, 
    inStock: true, 
    badge: "Yeni", 
    image: "https://storage.irshad.az/products/resized/ug6GiiFhElziun83tB5v4yrjwxrg2zQdsnEhTSP0.png", 
    desc: "Apple" },
    // _______________________________komp baslangic__________________________________//
    { id: 301, 
    title: "Razer Blade 18", 
    category: "laptop", 
    price: 3199.99, 
    rating: 4.9, 
    inStock: true, 
    badge: "Top", 
    image: "https://m.media-amazon.com/images/I/71ZxR9paGGL.jpg", 
    desc: "Razer" },
    { id: 302, 
    title: "Asus ROG Zephyrus G14", 
    category: "laptop", 
    price: 2199.99, 
    rating: 4.8, 
    inStock: true, 
    badge: "Top", 
    image: "https://th.bing.com/th/id/OIP.yBwmTase6Ap4wcZcWwZftAHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3", 
    desc: "Asus" },
    { id: 303, 
    title: "Lenovo ThinkPad X1", 
    category: "laptop", 
    price: 2499.99, 
    rating: 4.8, 
    inStock: true, 
    badge: "Pro", 
    image: "https://p4-ofp.static.pub/ShareResource/optimized/pdp/thinkpad/thinkpad-x1-series/len101t0108/lenovo-thinkpad-x1-carbon-gen-13-14-intel-series-tn.19e53120c7d322b7.png", 
    desc: "Lenovo" },
    { id: 304, 
    title: "Dell XPS 15 Laptop", 
    category: "laptop", 
    price: 2299.99, 
    rating: 4.8, 
    inStock: true, 
    badge: "Top", 
    image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FDell-Pro-16-Plus-Laptop-1aCln3.webp&w=640&q=75", 
    desc: "Dell" },
     { id: 305,
     title: "HP OmniBook 5", 
     category: "laptop", 
     price: 1899.99, 
     rating: 4.7, 
     inStock: true, 
     badge: "Yeni", 
     image: "https://storage.irshad.az/products/resized/INO0uv1zY37NCNkiqGRtCQmbKHBjF8FPaHNDYr7e.png", 
     desc: "HP" },
     { id: 306,
     title: "Asus ExpertBook B5 ", 
     category: "laptop", 
     price: 2799.99, 
     rating: 4.7, 
     inStock: true, 
     badge: "Yeni", 
     image: "https://storage.irshad.az/products/resized/NX9GyOOpOC6gK2uSijQ3SWIRPm5ZUJyYRchjsxrz.png", 
     desc: "Asus" },
     { id: 307,
     title: "Asus ROG Strix G18", 
     category: "laptop", 
     price: 3799.99, 
     rating: 4.7, 
     inStock: true, 
     badge: "Yeni", 
     image: "https://storage.irshad.az/products/resized/hLfwagSrOW1G17YOpYrjpuDZPXDMheRvp1q41UVG.png", 
     desc: "Asus" },
    { id: 308,
    title: "Apple MacBook Pro M3",
    category: "laptop", 
    price: 3289.99, 
    rating: 4.9, 
    inStock: true, 
    badge: "Best Seller", 
    image: "https://media.pji.nu/9a54d0ac-67d4-41c4-969d-483711efac25.webp?height=280&width=280", 
    desc: "Apple" },
    { id: 309, 
    title: "HP Spectre x360 14", 
    category: "laptop", 
    price: 1799.99, 
    rating: 4.7, 
    inStock: true, 
    badge: "Yeni", 
    image: "https://nanoreview.net/common/images/laptop/hp-spectre-x360-14-2024-mini.jpeg", 
    desc: "HP" },
    // _______________________________komp axir__________________________________//
    { id: 1001, 
    title: "GoPro HERO12 Black", 
    category: "camera", 
    price: 479.99, 
    rating: 4.6, 
    inStock: true, 
    badge: "Yeni", 
    image: "https://scr.wfcdn.de/26896/GoPro-Hero-12-BLack-1692443502-0-0.jpg", 
    desc: "GoPro" },
    { id: 1002, 
    title: "DJI Action Camera", 
    category: "camera", 
    price: 859.99, 
    rating: 4.6, 
    inStock: true, 
    badge: "Yeni", 
    image: "https://storage.irshad.az/products/resized/h5IIUXkpI9UIFgVdDFXtUdk5t3ws1KQ0MPiwy8HO.png", 
    desc: "DJI" },
    // _____________________________audio baslangic____________________________________//
    { id: 2001, 
    title: "JBL Charge 6r", 
    category: "audio", 
    price: 149.99, 
    rating: 4.6, 
    inStock: true, 
    badge: "Endirim", 
    image: "https://th.bing.com/th/id/OIP.-hZTQImJ5W11o8EVby42IgHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3", 
    desc: "JBL" },
    { id: 2002, 
    title: "Apple AirPods Pro 2", 
    category: "audio", 
    price: 239.99, 
    rating: 4.8, 
    inStock: true, 
    badge: "Yeni", 
    image: "https://tse1.mm.bing.net/th/id/OIP.GszA0xq2UCbek56RQ6lcagHaF6?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", 
    desc: "Apple" },
    { id: 2003, 
    title: "Bose QuietComfort 45", 
    category: "audio", 
    price: 319.99, 
    rating: 4.8, 
    inStock: true, 
    badge: "Pro", 
    image: "https://tse1.mm.bing.net/th/id/OIP.IgjW4IKMj7s3nHKNHSWrFQHaJz?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", 
    desc: "Bose" },
    { id: 2004,
    title: "Sony M5", 
    category: "audio", 
    price: 419.99, 
    rating: 4.8, 
    inStock: true, 
    badge: "Endirim", 
    image: "https://tse4.mm.bing.net/th/id/OIP.kyxA3sH-Fhjwyy4z_tSt3AHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", 
    desc: "Sony" },
    // _____________________________audio axir____________________________________//
    { id: 1, 
    title: "Samsung Galaxy Watch 6", 
    category: "wearable", 
    price: 329.99, 
    rating: 4.7, inStock: true, 
    badge: "Yeni", 
    image: "https://tse1.mm.bing.net/th/id/OIP.zWCvKkgJGAoXgCo5kDULmQHaIz?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", 
    desc: "Samsung" },
    { id: 2, 
    title: "Nintendo Switch", 
    category: "gaming", 
    price: 479.99, 
    rating: 4.8, 
    inStock: true, 
    badge: "Top", 
    image: "https://tse1.mm.bing.net/th/id/OIP.vF87Wy871PJsp3Sxr5ipiwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", 
    desc: "Nintendo" },
    { id: 3, 
    title: "Xbox Series X", 
    category: "gaming", 
    price: 469.99, 
    rating: 4.9, 
    inStock: true, 
    badge: "Yeni", 
    image: "https://tse1.mm.bing.net/th/id/OIP.if8cx402zWX-OEWu6_saRAHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", 
    desc: "Xbox" },
    { id: 4, 
    title: "Sony PlayStation 5", 
    category: "gaming", 
    price: 1049.99, 
    rating: 4.9, 
    inStock: true, 
    badge: "Yeni", 
    image: "https://tse2.mm.bing.net/th/id/OIP.ELUlozp_7Bjc-ln0FrGp8wHaHu?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", 
    desc: "Sony" },
    { id: 5, 
    title: "Oculus Quest 3", 
    category: "gaming", 
    price: 378.99, 
    rating: 4.7, 
    inStock: true, 
    badge: "Yeni", 
    image: "https://scale.coolshop-cdn.com/product-media.coolshop-cdn.com/23HW5S/60bf21783a2148128e730172606eef53.jpg/f/oculus-meta-quest-3-128gb-vr-headset.jpg", 
    desc: "Oculus" },
    { id: 6, 
    title: "Garmin Fenix 7X", 
    category: "wearable", 
    price: 769.99, 
    rating: 4.8, 
    inStock: true, 
    badge: "Pro", 
    image: "https://tse1.mm.bing.net/th/id/OIP.5_RorgzxoDUT3K4nVNidBwHaHs?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", 
    desc: "Garmin" },
    { id: 7, 
    title: "Logitech MX Master 3S", 
    category: "wearable", 
    price: 219.99, 
    rating: 4.6, 
    inStock: false, 
    badge: "Tükəndi", 
    image: "https://tse2.mm.bing.net/th/id/OIP.yvAWJSp1L-N1dUp2v7MCsAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", 
    desc: "Logitech" },
    { id: 8,
     title: "Apple Watch Series 9 GPS", 
     category: "wearable", 
     price: 619.99, 
     rating: 4.7, 
     inStock: true, 
     badge: "Yeni", 
     image: "https://tse1.mm.bing.net/th/id/OIP.UB4O-BP_Tf37pUMey2_osQHaIn?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", 
     desc: "Apple" },
     //__________________________gaming baslangic__________________________//
    { id: 3001,
     title: "PlayStation 5 Sonic Racing ", 
     category: "gaming", 
     price: 129.99, 
     rating: 4.7, 
     inStock: true, 
     badge: "Yeni", 
     image: "https://storage.irshad.az/products/resized/O1vb6zJu0yZGu5KpC418SX8FvzNMa4gzdc7JrqfP.png", 
     desc: "Sony" },
    { id: 3002,
     title: "PlayStation 5 007 First Light", 
     category: "gaming", 
     price: 149.99, 
     rating: 4.7, 
     inStock: true, 
     badge: "Yeni", 
     image: "https://storage.irshad.az/products/resized/ggBu5DipTXiUdWU5F6t5JDLTOYgMvMhvQlxNj04H.png", 
     desc: "Sony" },
    { id: 3003,
     title: "Playstation 5 FC 27", 
     category: "gaming", 
     price: 164.99, 
     rating: 4.7, 
     inStock: true, 
     badge: "Yeni", 
     image: "https://storage.irshad.az/products/resized/0DZLkGB8yDxhLJp1zSg2UPrCNR6v1THKO5WfYZca.png", 
     desc: "Sony" },
    { id: 3004,
     title: "Playstation 5 UFC 6", 
     category: "gaming", 
     price: 199.99, 
     rating: 4.7, 
     inStock: true, 
     badge: "Yeni", 
     image: "https://storage.irshad.az/products/resized/AOYenorgk50kFqbjF3HsUf7o6NE2oLt9p4HZrt1k.png", 
     desc: "Sony" },
    { id: 3005,
     title: "Playstation 5 Battlefield 6", 
     category: "gaming", 
     price: 139.99, 
     rating: 4.7, 
     inStock: true, 
     badge: "Yeni", 
     image: "https://storage.irshad.az/products/resized/62tmKZ6K29Qvfu9vMgymjhiS2bcSphCFwhLVFSHq.png", 
     desc: "Sony" },
    { id: 3006,
     title: "Playstation 5 Solid Snake", 
     category: "gaming", 
     price: 139.99, 
     rating: 4.7, 
     inStock: true, 
     badge: "Yeni", 
     image: "https://storage.irshad.az/products/resized/LcQQW6m5BEdMcOAtQoNDNcN6LFbKW2FTcgg9b2XT.png", 
     desc: "Sony" },
    { id: 3007,
     title: "Playstation 5 Nightmares III", 
     category: "gaming", 
     price: 109.99, 
     rating: 4.7, 
     inStock: true, 
     badge: "Yeni", 
     image: "https://storage.irshad.az/products/resized/sNG0H2eTJaMttyOvjzfornztJTOANyUNnXnFgcU2.png", 
     desc: "Sony" },
    { id: 3008,
     title: "Playstation 5 Minecraft", 
     category: "gaming", 
     price: 84.99, 
     rating: 4.7, 
     inStock: true, 
     badge: "Yeni", 
     image: "https://storage.irshad.az/products/resized/8aFh4jG7cs9KV38un5NRpnSc0JogISsgr8t6w6rL.webp", 
     desc: "Sony" },
];

// Valyuta
let cart = [];
let wishlist = [];
let compareList = [];
let activeCategory = 'all';
let currentPromo = null;
let currentCurrency = 'AZN';
const currencyRates = { AZN: 1, USD: 0.59, EUR: 0.54 };
const currencySymbols = { AZN: '₼', USD: '$', EUR: '€' };

// DOM 
const productsGrid = document.getElementById('products-grid');
const searchInput = document.getElementById('live-search-input');
const clearSearchBtn = document.getElementById('clear-search-btn');
const priceRange = document.getElementById('price-range');
const priceRangeVal = document.getElementById('price-range-val');
const sortSelect = document.getElementById('sort-select');
const stockOnlyCheckbox = document.getElementById('stock-only-checkbox');
const cartDrawer = document.getElementById('cart-drawer');
const overlay = document.getElementById('overlay');

// .....
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

    // Filter 
    if (activeCategory !== 'all') {
        filtered = filtered.filter(p => p.category === activeCategory);
    }

    // Filter Search 
    const query = searchInput.value.toLowerCase().trim();
    if (query) {
        filtered = filtered.filter(p => p.title.toLowerCase().includes(query));
    }

    // Filter Price 
    const maxPrice = parseFloat(priceRange.value);
    filtered = filtered.filter(p => p.price <= maxPrice);

    // Filter Stock 
    if (stockOnlyCheckbox.checked) {
        filtered = filtered.filter(p => p.inStock);
    }

    // Siralama
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

// .....
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

// .....
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

// .....
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

// Quick wiew
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
function getFilteredProducts() {
    //.....
    let filtered = [...products]; 

    const query = searchInput.value.toLowerCase().trim();

    if (query) {
        filtered = filtered.filter(p => 
            p.title.toLowerCase().includes(query) || 
            p.desc.toLowerCase().includes(query) 
        );
    }

    return filtered;
}

// .....
function setupEventListeners() {
    // Live Search
    searchInput.addEventListener('input', () => {
    renderProducts(getFilteredProducts());
});

    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        clearSearchBtn.classList.add('hidden');
        renderProducts();
    });

    // '/' shortcut
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

    // Stock & Sort Filter
    stockOnlyCheckbox.addEventListener('change', renderProducts);
    sortSelect.addEventListener('change', renderProducts);

    // Kataqoriya
    document.querySelectorAll('.cat-filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.cat-filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            activeCategory = e.target.dataset.cat;
            renderProducts();
        });
    });

    // Kataqoriya linkleri
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

        timerEl.textContent = `${days}g ${hours}saat ${minutes}dəq ${seconds}san`;
        if (duration > 0) duration--;
    }, 1000);
}