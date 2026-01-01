document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
   
    const style = document.createElement('style');
    style.innerHTML = `
        .error { border: 2px solid #e74c3c !important; }
        .shake { animation: shake 0.5s; }
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
    `;
    document.head.appendChild(style);

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateForm()) {
                alert("Mesazhi u dërgua!");
                contactForm.reset();
            }
        });
    }
});

function validateForm() {
    let isValid = true;
    const name = document.getElementById('fullName');
    const email = document.getElementById('email');

    if (name && name.value.length < 3) {
        name.classList.add('error', 'shake');
        isValid = false;
    } else {
        name?.classList.remove('error', 'shake');
    }

    return isValid;
}