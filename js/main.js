const carsData = [
    {
        id: 1,
        brand: "Mercedes",
        model: "C200",
        year: 2022,
        price: 25000,
        km: 15000,
        fuel: "Diesel",
        transmission: "Automatik",
        color: "E bardhë",
        image: "https://via.placeholder.com/300x200/3498db/ffffff?text=Mercedes+C200",
        featured: true,
        description: "Makina në gjendje të shkëlqyer, vetëm 1 pronar, me garancion."
    },
    {
        id: 2,
        brand: "BMW",
        model: "X5",
        year: 2021,
        price: 45000,
        km: 30000,
        fuel: "Benzinë",
        transmission: "Automatik",
        color: "E zezë",
        image: "https://via.placeholder.com/300x200/e74c3c/ffffff?text=BMW+X5",
        featured: true,
        description: "SUV luksoze me të gjitha opsionet, pak e përdorur."
    },
    {
        id: 3,
        brand: "Audi",
        model: "A4",
        year: 2023,
        price: 32000,
        km: 8000,
        fuel: "Diesel",
        transmission: "Manuel",
        color: "Gri",
        image: "https://via.placeholder.com/300x200/2ecc71/ffffff?text=Audi+A4",
        featured: true,
        description: "Makina e re, me pak kilometrazh, garancion 2 vjet."
    },
    {
        id: 4,
        brand: "Volkswagen",
        model: "Golf 7",
        year: 2019,
        price: 18000,
        km: 45000,
        fuel: "Benzinë",
        transmission: "Automatik",
        color: "Blu",
        image: "https://via.placeholder.com/300x200/9b59b6/ffffff?text=VW+Golf+7",
        featured: false,
        description: "Makina familjare, e mirëmbajtur mirë, ekonomi karburanti."
    },
    {
        id: 5,
        brand: "Toyota",
        model: "RAV4",
        year: 2020,
        price: 28000,
        km: 35000,
        fuel: "Hibrid",
        transmission: "Automatik",
        color: "E kuqe",
        image: "https://via.placeholder.com/300x200/f1c40f/333333?text=Toyota+RAV4",
        featured: false,
        description: "SUV hibrid, ekonomik, i përshtatshëm për familje."
    },
    {
        id: 6,
        brand: "Mercedes",
        model: "E220",
        year: 2020,
        price: 38000,
        km: 25000,
        fuel: "Diesel",
        transmission: "Automatik",
        color: "E argjendtë",
        image: "https://via.placeholder.com/300x200/3498db/ffffff?text=Mercedes+E220",
        featured: false,
        description: "Limuzinë luksoze, pak e përdorur, të gjitha opsionet."
    }
];

function formatPrice(price) {
    return new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR'
    }).format(price);
}

function formatNumber(num) {
    return num.toLocaleString('de-DE');
}

document.addEventListener('DOMContentLoaded', function() {
    console.log("UEB-GRUPl-42 Car Marketplace u ngarkua me sukses!");
   
    initializePage();
   
    initializeJQueryEffects();
   
    setupEventListeners();
});

function initializePage() {
    const currentPage = window.location.pathname.split('/').pop();
   
    switch(currentPage) {
        case 'index.html':
        case '':
            displayFeaturedCars();
            setupSearch();
            break;
        case 'products.html':
            displayAllCars();
            setupFilters();
            setupTable();
            break;
        case 'services.html':
            setupServiceBooking();
            break;
        case 'about.html':
            setupStatsCounter();
            break;
    }
}

function displayFeaturedCars() {
    const container = document.getElementById('featuredCars');
    if (!container) return;
   
    const featuredCars = carsData.filter(car => car.featured);
   
    container.innerHTML = featuredCars.map(car => `
        <div class="car-card" data-id="${car.id}">
            <img src="${car.image}" alt="${car.brand} ${car.model}">
            <div class="car-info">
                <h3>${car.brand} ${car.model}</h3>
                <p class="car-details">
                    <i class="fas fa-calendar"></i> ${car.year} |
                    <i class="fas fa-tachometer-alt"></i> ${formatNumber(car.km)} km
                </p>
                <p class="car-details">
                    <i class="fas fa-gas-pump"></i> ${car.fuel} |
                    <i class="fas fa-cog"></i> ${car.transmission}
                </p>
                <p class="price">${formatPrice(car.price)}</p>
                <p class="description">${car.description}</p>
                <button class="btn-details" onclick="showCarDetails(${car.id})">
                    <i class="fas fa-info-circle"></i> Shiko Detajet
                </button>
            </div>
        </div>
    `).join('');
}

function setupSearch() {
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
   
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', function() {
            const searchTerm = searchInput.value.toLowerCase().trim();
            if (searchTerm) {
                
                const results = carsData.filter(car =>
                    car.brand.toLowerCase().includes(searchTerm) ||
                    car.model.toLowerCase().includes(searchTerm) ||
                    car.description.toLowerCase().includes(searchTerm)
                );
               
                if (results.length > 0) {
                    alert(`U gjetën ${results.length} makina për "${searchTerm}"`);
                    
                    window.location.href = `products.html?search=${encodeURIComponent(searchTerm)}`;
                } else {
                    alert(`Nuk u gjet asnjë makinë për "${searchTerm}"`);
                }
            } else {
                alert('Ju lutem shkruani diçka për të kërkuar!');
            }
        });
       
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchBtn.click();
            }
        });
    }
}

function displayAllCars() {
    const gridContainer = document.getElementById('allCarsGrid');
    if (!gridContainer) return;
   
    gridContainer.innerHTML = carsData.map(car => `
        <div class="car-card" data-brand="${car.brand.toLowerCase()}"
             data-price="${car.price}" data-year="${car.year}">
            <img src="${car.image}" alt="${car.brand} ${car.model}">
            <div class="car-info">
                <h3>${car.brand} ${car.model}</h3>
                <p class="car-details">
                    <i class="fas fa-calendar"></i> ${car.year} |
                    <i class="fas fa-tachometer-alt"></i> ${formatNumber(car.km)} km
                </p>
                <p class="price">${formatPrice(car.price)}</p>
                <div class="car-actions">
                    <button class="btn-details" onclick="showCarDetails(${car.id})">
                        <i class="fas fa-info-circle"></i> Detajet
                    </button>
                    <button class="btn-contact" onclick="contactAboutCar(${car.id})">
                        <i class="fas fa-phone"></i> Kontakto
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function setupTable() {
    const tableBody = document.getElementById('carsTableBody');
    if (!tableBody) return;
   
    tableBody.innerHTML = carsData.map(car => `
        <tr data-id="${car.id}">
            <td><strong>${car.brand}</strong></td>
            <td>${car.model}</td>
            <td>${car.year}</td>
            <td>${formatNumber(car.km)} km</td>
            <td class="price-cell">${formatPrice(car.price)}</td>
            <td>
                <span class="status ${car.featured ? 'featured' : 'available'}">
                    ${car.featured ? 'E Rekomanduar' : 'Në Dispozicion'}
                </span>
            </td>
            <td>
                <button class="btn-small" onclick="showCarDetails(${car.id})">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="btn-small btn-success" onclick="contactAboutCar(${car.id})">
                    <i class="fas fa-phone"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

function setupFilters() {
    const applyBtn = document.getElementById('applyFilters');
    const resetBtn = document.getElementById('resetFilters');
   
    if (applyBtn) {
        applyBtn.addEventListener('click', function() {
            applyCarFilters();
        });
    }
   
    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            resetCarFilters();
        });
    }
}

function applyCarFilters() {
    const brandFilter = document.getElementById('brandFilter').value;
    const priceFilter = document.getElementById('priceFilter').value;
    const yearFilter = document.getElementById('yearFilter').value;
   
    let filteredCars = carsData;
   
    if (brandFilter) {
        filteredCars = filteredCars.filter(car =>
            car.brand.toLowerCase() === brandFilter.toLowerCase()
        );
    }
   
    if (priceFilter) {
        const [min, max] = priceFilter.split('-').map(Number);
        filteredCars = filteredCars.filter(car =>
            car.price >= min && car.price <= max
        );
    }
   
    if (yearFilter) {
        const [startYear, endYear] = yearFilter.split('-').map(Number);
        filteredCars = filteredCars.filter(car =>
            car.year >= startYear && car.year <= endYear
        );
    }
   
    updateFilteredDisplay(filteredCars);
   
    const notification = document.createElement('div');
    notification.className = 'filter-notification';
    notification.innerHTML = `
        <p>U gjetën ${filteredCars.length} makina me filtrat e zgjedhur</p>
        <button onclick="this.parentElement.remove()">&times;</button>
    `;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #2ecc71;
        color: white;
        padding: 15px;
        border-radius: 5px;
        box-shadow: 0 3px 10px rgba(0,0,0,0.2);
        z-index: 1000;
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-width: 300px;
    `;
   
    document.body.appendChild(notification);
   
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 3000);
}