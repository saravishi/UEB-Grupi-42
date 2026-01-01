const carsData = [
    {
        id: 1,
        brand: "BMW",
        model: "X5",
        year: 2021,
        price: 45000,
        km: 30000,
        fuel: "Benzinë",
        transmission: "Automatik",
        color: "E zezë",
        image: "images/BMW-X5.jpg", 
        featured: true,
        description: "SUV luksoze me shumë opsione."
    },
    {
        id: 2,
        brand: "Audi",
        model: "A6",
        year: 2023,
        price: 30000,
        km: 8000,
        fuel: "Diesel",
        transmission: "Manuel",
        color: "Gri",
        image: "images/Audi-A6.jpg", 
        featured: true,
        description: "Makina pothuajse e re."
    },
    {
        id: 3,
        brand: "Mercedes",
        model: "C-Class",
        year: 2022,
        price: 28000,
        km: 15000,
        fuel: "Diesel",
        transmission: "Automatik",
        color: "E bardhë",
        image: "images/Mercedes-C-Class.jpg", 
        featured: true,
        description: "Makina në gjendje të shkëlqyer."
    }
];

const formatPrice = price =>
    new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(price);

document.addEventListener("DOMContentLoaded", () => {
    displayFeaturedCars();
    initJQueryEffects();
});

function displayFeaturedCars() {
    const container = document.getElementById("featuredCars");
    if (!container) return;

    container.innerHTML = carsData
        .filter(car => car.featured)
        .map(car => `
            <div class="car-card">
                <img src="${car.image}" alt="${car.brand}" style="width:100%; height:200px; object-fit:cover;">
                <div class="car-info">
                    <h3>${car.brand} ${car.model}</h3>
                    <p>Çmimi: ${formatPrice(car.price)}</p>
                    <button onclick="showCarDetails(${car.id})">Detajet</button>
                </div>
            </div>
        `).join("");
}

function showCarDetails(id) {
    const car = carsData.find(c => c.id === id);
    if (!car) return;
    alert(`${car.brand} ${car.model}\nViti: ${car.year}\n${car.description}`);
}

function initJQueryEffects() {
    if (typeof jQuery === "undefined") return;
    $(".car-card").hover(
        function() { $(this).css("opacity", "0.8"); },
        function() { $(this).css("opacity", "1"); }
    );
}