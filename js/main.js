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

function updateFilteredDisplay(filteredCars) {
    
    const gridContainer = document.getElementById('allCarsGrid');
    if (gridContainer) {
        if (filteredCars.length === 0) {
            gridContainer.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search fa-3x"></i>
                    <h3>Nuk u gjet asnjë makinë</h3>
                    <p>Provoni të ndryshoni filtrat e kërkimit</p>
                </div>
            `;
        } else {
            gridContainer.innerHTML = filteredCars.map(car => `
                <div class="car-card">
                    <img src="${car.image}" alt="${car.brand} ${car.model}">
                    <div class="car-info">
                        <h3>${car.brand} ${car.model}</h3>
                        <p class="price">${formatPrice(car.price)}</p>
                        <button class="btn-details" onclick="showCarDetails(${car.id})">
                            Shiko Detajet
                        </button>
                    </div>
                </div>
            `).join('');
        }
    }
   
    
    const tableBody = document.getElementById('carsTableBody');
    if (tableBody) {
        if (filteredCars.length === 0) {
            tableBody.innerHTML = `
                <tr>
                    <td colspan="7" class="text-center">
                        Nuk u gjet asnjë makinë me filtrat e zgjedhur
                    </td>
                </tr>
            `;
        } else {
            tableBody.innerHTML = filteredCars.map(car => `
                <tr>
                    <td>${car.brand}</td>
                    <td>${car.model}</td>
                    <td>${car.year}</td>
                    <td>${formatNumber(car.km)} km</td>
                    <td>${formatPrice(car.price)}</td>
                    <td>${car.featured ? 'E Rekomanduar' : 'Në Dispozicion'}</td>
                    <td>
                        <button class="btn-small" onclick="showCarDetails(${car.id})">
                            <i class="fas fa-eye"></i>
                        </button>
                    </td>
                </tr>
            `).join('');
        }
    }
}

function resetCarFilters() {
    document.getElementById('brandFilter').value = '';
    document.getElementById('priceFilter').value = '';
    document.getElementById('yearFilter').value = '';
   
    displayAllCars();
    setupTable();
}


function setupStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
   
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        const duration = 2000; 
        const increment = target / (duration / 16); 
       
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current);
        }, 16);
    });
}


function setupServiceBooking() {
    const bookButtons = document.querySelectorAll('.btn-book');
   
    bookButtons.forEach(button => {
        button.addEventListener('click', function() {
            const serviceRow = this.closest('tr');
            const serviceName = serviceRow.cells[0].textContent;
            const servicePrice = serviceRow.cells[3].textContent;
           
            
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Rezervim...';
            this.disabled = true;
           
            setTimeout(() => {
                alert(`Shërbimi "${serviceName}" u rezervua me sukses!\nÇmimi: ${servicePrice}\nDo t'ju kontaktojmë për detaje.`);
                this.innerHTML = '<i class="fas fa-check"></i> Rezervuar';
                this.classList.add('booked');
            }, 1500);
        });
    });
}


function showCarDetails(carId) {
    const car = carsData.find(c => c.id === carId);
    if (!car) return;
   
    
    const modalHTML = `
        <div class="modal-overlay" id="carModal">
            <div class="modal-content">
                <div class="modal-header">
                    <h2>${car.brand} ${car.model} - ${car.year}</h2>
                    <button class="modal-close" onclick="closeModal()">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="modal-grid">
                        <div class="modal-image">
                            <img src="${car.image}" alt="${car.brand} ${car.model}">
                        </div>
                        <div class="modal-details">
                            <h3>Detajet e Makinës</h3>
                            <ul class="detail-list">
                                <li><strong>Çmimi:</strong> ${formatPrice(car.price)}</li>
                                <li><strong>Kilometrazha:</strong> ${formatNumber(car.km)} km</li>
                                <li><strong>Karburanti:</strong> ${car.fuel}</li>
                                <li><strong>Transmissioni:</strong> ${car.transmission}</li>
                                <li><strong>Ngjyra:</strong> ${car.color}</li>
                                <li><strong>Statusi:</strong> ${car.featured ? 'E Rekomanduar' : 'Në Dispozicion'}</li>
                            </ul>
                            <p class="description">${car.description}</p>
                        </div>
                    </div>
                    <div class="modal-actions">
                        <button class="btn-contact" onclick="contactAboutCar(${car.id})">
                            <i class="fas fa-phone"></i> Kontakto për këtë makinë
                        </button>
                        <button class="btn-testdrive" onclick="requestTestDrive(${car.id})">
                            <i class="fas fa-car"></i> Kërko Test Drive
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
   
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
   
    
    const style = document.createElement('style');
    style.textContent = `
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2000;
            animation: fadeIn 0.3s ease;
        }
        .modal-content {
            background: white;
            border-radius: 10px;
            width: 90%;
            max-width: 800px;
            max-height: 90vh;
            overflow-y: auto;
            animation: slideUp 0.3s ease;
        }
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            border-bottom: 2px solid #eee;
        }
        .modal-close {
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: #666;
        }
        .modal-body {
            padding: 20px;
        }
        .modal-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 20px;
        }
        .modal-image img {
            width: 100%;
            border-radius: 8px;
        }
        .detail-list {
            list-style: none;
            padding: 0;
        }
        .detail-list li {
            padding: 8px 0;
            border-bottom: 1px solid #eee;
        }
        .modal-actions {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }
        @keyframes slideUp {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
}

function closeModal() {
    const modal = document.getElementById('carModal');
    if (modal) {
        modal.remove();
    }
}

function contactAboutCar(carId) {
    const car = carsData.find(c => c.id === carId);
    if (!car) return;
   
    
    const message = `Dëshiroj të kontaktoj për makinën: ${car.brand} ${car.model} ${car.year}\nÇmimi: ${formatPrice(car.price)}`;
   
    
    const subject = encodeURIComponent(`Kërkesë për ${car.brand} ${car.model}`);
    const body = encodeURIComponent(message);
   
    
    alert(`Do të ridrejtoheni te faqja e kontaktit për makinën:\n${car.brand} ${car.model}`);
   
    
    localStorage.setItem('selectedCar', JSON.stringify({
        brand: car.brand,
        model: car.model,
        year: car.year,
        price: car.price
    }));
   
    
    window.location.href = 'contact.html';
}

function requestTestDrive(carId) {
    const car = carsData.find(c => c.id === carId);
    if (!car) return;
   
    
    const today = new Date();
    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + 7);
   
    const dateStr = nextWeek.toLocaleDateString('sq-AL', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
   
    const response = confirm(`Dëshironi të rezervoni një test drive për ${car.brand} ${car.model}?\n\nData e sugjeruar: ${dateStr}\n\nDo t'ju kontaktojmë për të konfirmuar datën.`);
   
    if (response) {
        alert('Kërkesa për test drive u dërgua me sukses! Do t'ju kontaktojmë brenda 24 orëve.');
       
        
        const btn = document.querySelector('.btn-testdrive');
        if (btn) {
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i> Test Drive i Rezervuar';
            btn.disabled = true;
           
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.disabled = false;
            }, 3000);
        }
    }
}


function initializeJQueryEffects() {
    if (typeof jQuery === 'undefined') {
        console.warn('jQuery nuk është instaluar! Shtoje në index.html');
        return;
    }
   
    $(document).ready(function() {
        
        $('.car-card').hover(
            function() {
                $(this).fadeTo(200, 0.9);
            },
            function() {
                $(this).fadeTo(200, 1);
            }
        );
       
        
        $('.testimonial-card').click(function() {
            $(this).slideUp(300).slideDown(300);
        });
       
        
        $('#loginBtn').click(function() {
            $(this).animate({
                paddingLeft: '30px',
                paddingRight: '30px'
            }, 200).animate({
                paddingLeft: '20px',
                paddingRight: '20px'
            }, 200);
           
            
            const loginForm = `
                <div id="loginModal" style="position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.5);display:flex;justify-content:center;align-items:center;z-index:3000;">
                    <div style="background:white;padding:30px;border-radius:10px;width:90%;max-width:400px;">
                        <h2><i class="fas fa-sign-in-alt"></i> Kyçu në Llogarinë tënde</h2>
                        <input type="email" placeholder="Email" style="width:100%;padding:10px;margin:10px 0;border:1px solid #ddd;border-radius:5px;">
                        <input type="password" placeholder="Fjalëkalimi" style="width:100%;padding:10px;margin:10px 0;border:1px solid #ddd;border-radius:5px;">
                        <button onclick="$('#loginModal').fadeOut(300).remove()" style="background:#e74c3c;color:white;border:none;padding:10px 20px;border-radius:5px;cursor:pointer;width:100%;">
                            Kyçu
                        </button>
                        <button onclick="$('#loginModal').fadeOut(300).remove()" style="background:#95a5a6;color:white;border:none;padding:10px 20px;border-radius:5px;cursor:pointer;width:100%;margin-top:10px;">
                            Anulo
                        </button>
                    </div>
                </div>
            `;
           
            if ($('#loginModal').length === 0) {
                $('body').append(loginForm);
                $('#loginModal').hide().fadeIn(300);
            }
        });
       
        
        $('nav a').click(function(e) {
            if (this.hash !== "") {
                e.preventDefault();
                const hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function() {
                    window.location.hash = hash;
                });
            }
        });
    });
}


function setupEventListeners() {
    
    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            alert('Funksioni i login do të implementohet në fazën e ardhshme!');
        });
    }
   
    
    window.addEventListener('resize', function() {
        console.log('Window resized to:', window.innerWidth, 'x', window.innerHeight);
    });
   
    
    document.addEventListener('keydown', function(e) {
        
        if (e.ctrlKey && e.key === 'f') {
            e.preventDefault();
            const searchInput = document.getElementById('searchInput');
            if (searchInput) {
                searchInput.focus();
            }
        }
       
        if (e.key === 'Escape') {
            closeModal();
            const loginModal = document.getElementById('loginModal');
            if (loginModal) {
                loginModal.remove();
            }
        }
    });
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        carsData,
        formatPrice,
        formatNumber,
        showCarDetails,
        contactAboutCar
    };
}