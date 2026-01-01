const cars = [
    { brand: "BMW", model: "X5", year: 2021, price: 45000, img: "images/BMW-X5.jpg" },
    { brand: "Audi", model: "A6", year: 2023, price: 30000, img: "images/Audi-A6.jpg" },
    { brand: "Mercedes", model: "C-Class", year: 2022, price: 28000, img: "images/Mercedes-C-Class.jpg" }
];

$(document).ready(function() {
    renderCars(cars);

    
    $(".page-header").hide().fadeIn(1500);

    
    $("#applyFilters").on("click", function() {
        const selectedBrand = $("#brandFilter").val();
        const filtered = (selectedBrand === "all")
            ? cars
            : cars.filter(c => c.brand === selectedBrand); 
        renderCars(filtered);
    });
});

function renderCars(data) {
    
    const gridHtml = data.map(car => `
        <div class="car-card">
            <img src="${car.img}" style="width:100%; border-radius:8px;">
            <h3>${car.brand} ${car.model}</h3>
            <p>Viti: ${car.year}</p>
            <p class="price" style="color:red; font-weight:bold;">${car.price} €</p>
        </div>
    `).join("");

    const tableHtml = data.map(car => `
        <tr><td>${car.brand}</td><td>${car.model}</td><td>${car.year}</td><td>${car.price} €</td></tr>
    `).join("");

    $("#allCarsGrid").html(gridHtml);
    $("#carsTableBody").html(tableHtml);
}