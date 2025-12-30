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