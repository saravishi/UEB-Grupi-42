
const carsData = [
    {
        id: 1,
        brand: "Mercedes-Benz",
        model: "S-Class",
        year: 2022,
        price: 85000,
        km: 20000,
        fuel: "Diesel",           
        transmission: "Automatik", 
        color: "E bardhë",         
        image: "images/mercedes.jpg", 
        featured: true,
        description: "Makina e re luksoze në gjendje të shkëlqyer."
    },
    {
        id: 2,
        brand: "BMW",
        model: "M4",
        year: 2021,
        price: 70000,
        km: 35000,
        fuel: "Benzinë",
        transmission: "Automatik",
        color: "E gjelbër",
        image: "images/bmw.jpg",
        featured: true,
        description: "Makina sportive e përdorur, performancë e lartë."
    },
    {
        id: 3,
        brand: "Audi",
        model: "RS6",
        year: 2023,
        price: 120000,
        km: 5000,
        fuel: "Benzinë",
        transmission: "Automatik",
        color: "E zezë",
        image: "images/audi.jpg",
        featured: true,
        description: "Makina pothuajse e re, performancë sportive dhe luksoze."
    },
   
 {
        id: 4,
        brand: "Porsche",
        model: "Cayenne S",
        year: 2010,
        price: 21500, 
        km: 185000,
        fuel: "Diesel",
        transmission: "Automatik",
        color: "E zezë",
        image: "images/porshe-C.jpg", 
        featured: true,
        description: "Porsche Cayenne në gjendje shumë të mirë teknike, i saposervisuar."
    },
    {
        id: 5,
        brand: "Volkswagen",
        model: "Golf 8 GTI",
        year: 2021,
        price: 32000,
        km: 45000,
        fuel: "Benzinë",
        transmission: "Automatik",
        color: "E hirtë",
        image: "images/vw-golf.jpg",
        featured: false,
        description: "Makina ideale për qytet dhe performancë, shumë ekonomike."
    },
    {
        id: 6,
        brand: "Ford",
        model: "Mustang GT",
        year: 2020,
        price: 48500,
        km: 52000,
        fuel: "Benzinë",
        transmission: "Manual",
        color: "E kaltër",
        image: "images/ford-mustang.jpg",
        featured: true,
        description: "Fuqi amerikane me motor V8 dhe zhurmë karakteristike."
    }
];

const formatPrice = price =>
    new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(price);

const formatNumber = num => num.toLocaleString("de-DE");

document.addEventListener("DOMContentLoaded", () => {
    initPage();
    initJQueryEffects();
    setupGlobalEvents();
});

function initPage() {
    const page = window.location.pathname.split("/").pop();

    if (page === "products.html") {
        displayAllCars();
        setupFilters();
        setupTable();
    }
    
    // SHTOJE KËTË PJESË KËTU:
    if (page === "services.html") {
        setupServiceAnimations();
    }
}

function displayFeaturedCars() {
    const container = document.getElementById("featuredCars");
    if (!container) return;

    container.innerHTML = carsData
        .filter(car => car.featured)
        .map(car => carCardHTML(car))
        .join("");
}

function displayAllCars(list = carsData) {
    const grid = document.getElementById("allCarsGrid");
    if (!grid) return;

    grid.innerHTML = list.map(car => carCardHTML(car)).join("");
    initJQueryEffects();
}

function carCardHTML(car) {
    return `
        <div class="car-card">
            <img src="${car.image}" alt="${car.brand}">
            <div class="car-info">
                <h3>${car.brand} ${car.model}</h3>
                <p class="car-price-centered">${formatPrice(car.price)}</p>
                <button class="btn-details-new" onclick="showCarDetails(${car.id})">Detajet</button>
            </div>
        </div>
    `;
}

function setupTable() {
    const tbody = document.getElementById("carsTableBody");
    if (!tbody) return;

    tbody.innerHTML = carsData.map(car => `
        <tr>
            <td>${car.brand}</td>
            <td>${car.model}</td>
            <td>${car.year}</td>
            <td>${formatNumber(car.km)} km</td>
            <td>${formatPrice(car.price)}</td>
            <td>${car.featured ? "Rekomanduar" : "Normal"}</td>
            <td><button onclick="showCarDetails(${car.id})">👁</button></td>
        </tr>
    `).join("");
}

function setupFilters() {
    const apply = document.getElementById("applyFilters");
    const reset = document.getElementById("resetFilters");

    if (apply) apply.addEventListener("click", applyFilters);
    
    if (reset) {
        reset.addEventListener("click", () => {
           
            document.getElementById("brandFilter").value = "";
            document.getElementById("priceFilter").value = "";
            document.getElementById("yearFilter").value = "";
            
            displayAllCars(carsData);
        });
    }
}

function applyFilters() {
    const brand = document.getElementById("brandFilter")?.value.toLowerCase();
    const price = document.getElementById("priceFilter")?.value;
    const year = document.getElementById("yearFilter")?.value;
    let result = carsData;

    if (brand) {
        result = result.filter(c => c.brand.toLowerCase().includes(brand));
    }

    if (price) {
        const [min, max] = price.split("-").map(Number);
        result = result.filter(c => c.price >= min && c.price <= max);
    }

    if (year) {
        const [minY, maxY] = year.split("-").map(Number);
        result = result.filter(c => c.year >= minY && c.year <= maxY);
    }

    displayAllCars(result);
    
    const grid = document.getElementById("allCarsGrid");
    if (result.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; padding: 2rem; font-weight: bold; color: #e74c3c;">
            Nuk u gjet asnjë makinë me këto kritere. Provo përsëri!</p>`;
    }
}

function showCarDetails(id) {
    closeModal(); // Mbyll çdo modal ekzistues

    const car = carsData.find(c => c.id === id);
    if (!car) return;

    const modal = `
        <div id="carModal" class="modal-overlay" onclick="if(event.target == this) closeModal()">
            <div class="modal-content">
                <button class="close-btn" onclick="closeModal()">✖</button>
                <img src="${car.image}" alt="${car.brand}" style="width:100%; border-radius:10px; margin-bottom:15px;">
                <h2>${car.brand} ${car.model}</h2>
                <div class="modal-specs">
                    <span><i class="fas fa-calendar"></i> ${car.year}</span> | 
                    <span><i class="fas fa-gas-pump"></i> ${car.fuel}</span> | 
                    <span><i class="fas fa-road"></i> ${formatNumber(car.km)} km</span>
                </div>
                <p style="margin: 15px 0;">${car.description}</p>
                <h3 style="color: #2c3e50; font-size: 1.5rem;">${formatPrice(car.price)}</h3>
                <button class="btn-testdrive" onclick="requestTestDrive()">Rezervo Test Drive</button>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML("beforeend", modal);
}

function closeModal() {
    document.getElementById("carModal")?.remove();
}

function requestTestDrive() {
    const btn = document.querySelector("#carModal .btn-testdrive");
    if (!btn) return;

    btn.textContent = "Rezervuar ✔";
    btn.disabled = true;
}

function initJQueryEffects() {
    if (typeof jQuery === "undefined") return;

    $(document)
        .off("mouseenter mouseleave", ".car-card")
        .on("mouseenter", ".car-card", function () {
            $(this).fadeTo(200, 0.9);
        })
        .on("mouseleave", ".car-card", function () {
            $(this).fadeTo(200, 1);
        });
}

function setupGlobalEvents() {
    document.addEventListener("keydown", e => {
        if (e.key === "Escape") closeModal();
    });
}
// Funksioni për interaktivitetin e faqes Services
function setupServiceAnimations() {
    // Kur klikon butonin "Rezervo" te tabela e çmimeve
    const bookButtons = document.querySelectorAll('.btn-book');
    bookButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Merr emrin e shërbimit nga rreshti i tabelës
            const serviceName = this.closest('tr').cells[0].innerText;
            alert(`Ju faleminderit! Rezervimi për "${serviceName}" u dërgua me sukses. Do t'ju kontaktojmë së shpejti.`);
            
            // Opsionale: E ndryshon butonin pasi klikohet
            this.textContent = "U dërgua";
            this.style.background = "#2ecc71";
            this.disabled = true;
        });
    });

    // Animacion i thjeshtë për shfaqjen e kartave
    const cards = document.querySelectorAll('.service-category, .service-card');
    cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "all 0.5s ease forwards";
        
        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 150 * index); // I shfaq një nga një me vonesë të vogël
    });
}