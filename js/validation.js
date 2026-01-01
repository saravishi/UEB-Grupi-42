document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
   
    
    const messageTextarea = document.getElementById('message');
    const charCount = document.getElementById('charCount');
   
    if (messageTextarea && charCount) {
        messageTextarea.addEventListener('input', function() {
            const length = this.value.length;
            charCount.textContent = length;
           
            if (length > 500) {
                charCount.style.color = '#e74c3c';
                this.classList.add('error');
            } else {
                charCount.style.color = '#27ae60';
                this.classList.remove('error');
            }
        });
    }
   
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
       
        if (validateForm()) {
            
            submitForm();
        }
    });
   
    
    setupRealTimeValidation();
});


function validateForm() {
    let isValid = true;
   
    
    clearErrors();
   
    
    const name = document.getElementById('fullName');
    if (!validateName(name.value)) {
        showError('nameError', 'Emri duhet të jetë të paktën 3 karaktere dhe të përmbajë vetëm shkronja');
        highlightError(name);
        isValid = false;
    }
   
    
    const email = document.getElementById('email');
    if (!validateEmail(email.value)) {
        showError('emailError', 'Ju lutem shkruani një email valid');
        highlightError(email);
        isValid = false;
    }
   
    
    const phone = document.getElementById('phone');
    if (phone.value && !validatePhone(phone.value)) {
        showError('phoneError', 'Numri i telefonit nuk është valid');
        highlightError(phone);
        isValid = false;
    }
   
    
    const message = document.getElementById('message');
    if (!validateMessage(message.value)) {
        showError('messageError', 'Mesazhi duhet të jetë të paktën 10 karaktere');
        highlightError(message);
        isValid = false;
    }
   
    
    const terms = document.getElementById('terms');
    if (!terms.checked) {
        showError('termsError', 'Duhet të pranoni kushtet e përdorimit');
        highlightError(terms.closest('.checkbox-group'));
        isValid = false;
    }
   
    return isValid;
}


function validateName(name) {
    if (!name.trim()) return false;
    if (name.length < 3) return false;
   
    
    const nameRegex = /^[A-Za-zËëÇçShshLl\s]{3,}$/;
    return nameRegex.test(name);
}

function validateEmail(email) {
    if (!email.trim()) return false;
   
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    if (!phone.trim()) return true; 
   
    
    const phoneRegex = /^\+383\s?\d{2}\s?\d{3}\s?\d{3}$|^0\d{2}\s?\d{3}\s?\d{3}$/;
    return phoneRegex.test(phone);
}

function validateMessage(message) {
    if (!message.trim()) return false;
    return message.length >= 10 && message.length <= 500;
}


function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

function highlightError(element) {
    element.classList.add('error');
    element.focus();
   
    
    setTimeout(() => {
        element.classList.add('shake');
    }, 100);
   
    
    setTimeout(() => {
        element.classList.remove('shake');
    }, 600);
}

function clearErrors() {
    
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(el => {
        el.textContent = '';
        el.style.display = 'none';
    });
}