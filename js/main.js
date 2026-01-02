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