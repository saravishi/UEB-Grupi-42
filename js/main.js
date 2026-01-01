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
        description: "Makina në gjendje të shkëlqyer."
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
        description: "SUV luksoze me shumë opsione."
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
        description: "Makina pothuajse e re."
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
        description: "Makina familjare ekonomike."
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
        description: "SUV hibrid për familje."
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

    if (page === "" || page === "index.html") {
        displayFeaturedCars();
    }

    if (page === "products.html") {
        displayAllCars();
        setupFilters();
        setupTable();
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
                <p>${formatPrice(car.price)}</p>
                <button onclick="showCarDetails(${car.id})">Detajet</button>
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
    if (reset) reset.addEventListener("click", () => displayAllCars());
}

function applyFilters() {
    const brand = document.getElementById("brandFilter")?.value.toLowerCase();
    const price = document.getElementById("priceFilter")?.value;
    const year = document.getElementById("yearFilter")?.value;
    let result = carsData;

    
    if (brand) {
        
        const brandMap = {
            "mercedes": "Mercedes",
            "bmw": "BMW",
            "audi": "Audi",
            "volkswagen": "Volkswagen",
            "toyota": "Toyota"
        };

        const selectedBrand = brandMap[brand] || "";
        if (selectedBrand) {
            result = result.filter(c => c.brand === selectedBrand);
        }
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
}

function showCarDetails(id) {
    closeModal();

    const car = carsData.find(c => c.id === id);
    if (!car) return;

    const modal = `
        <div id="carModal" class="modal-overlay">
            <div class="modal-content">
                <button class="close-btn" onclick="closeModal()">✖</button>
                <h2>${car.brand} ${car.model}</h2>
                <p>${car.description}</p>
                <p><strong>${formatPrice(car.price)}</strong></p>
                <button class="btn-testdrive" onclick="requestTestDrive()">Test Drive</button>
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
