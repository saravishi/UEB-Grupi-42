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

 
    const errorInputs = document.querySelectorAll('.error');
    errorInputs.forEach(el => {
        el.classList.remove('error');
    });
}


function setupRealTimeValidation() {
    const inputs = {
        'fullName': validateName,
        'email': validateEmail,
        'phone': validatePhone,
        'message': validateMessage
    };
   
    Object.entries(inputs).forEach(([id, validationFunc]) => {
        const input = document.getElementById(id);
        if (input) {
            input.addEventListener('blur', function() {
                const value = this.value;
                const isValid = validationFunc(value);
               
                if (value && !isValid) {
                    this.classList.add('error');
                } else {
                    this.classList.remove('error');
                }
            });
           
            input.addEventListener('input', function() {
                
                this.classList.remove('error');
                const errorId = id + 'Error';
                const errorElement = document.getElementById(errorId);
                if (errorElement) {
                    errorElement.textContent = '';
                }
            });
        }
    });
   
    
    const terms = document.getElementById('terms');
    if (terms) {
        terms.addEventListener('change', function() {
            const termsGroup = this.closest('.checkbox-group');
            if (this.checked) {
                termsGroup.classList.remove('error');
            }
        });
    }
}


function submitForm() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const formMessage = document.getElementById('formMessage');
   
    if (!form || !submitBtn || !formMessage) return;
   
    
    const formData = new FormData(form);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });
   
    
    formObject.timestamp = new Date().toISOString();
   
    
    const selectedCar = localStorage.getItem('selectedCar');
    if (selectedCar) {
        formObject.carInfo = JSON.parse(selectedCar);
        localStorage.removeItem('selectedCar'); 
    }
   
    console.log('Form data to submit:', formObject);
   
   
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Po dërgohet...';
    submitBtn.disabled = true;
   
    
    setTimeout(() => {
        
        submitBtn.innerHTML = '<i class="fas fa-check"></i> U Dërgua!';
        submitBtn.style.background = '#27ae60';
       
        formMessage.innerHTML = `
            <div class="success-message">
                <i class="fas fa-check-circle"></i>
                <h3>Mesazhi juaj u dërgua me sukses!</h3>
                <p>Do t'ju kontaktojmë brenda 24 orëve. Faleminderit që na kontaktuat.</p>
            </div>
        `;
        formMessage.style.display = 'block';
       
        
        setTimeout(() => {
            form.reset();
            submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Dërgo Mesazhin';
            submitBtn.style.background = '';
            submitBtn.disabled = false;
           
            
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }, 2000);
       
        
        saveToLocalStorage(formObject);
       
    }, 2000); 
}


function saveToLocalStorage(formData) {
    try {
        
        const history = JSON.parse(localStorage.getItem('contactFormHistory')) || [];
       
        
        history.push({
            ...formData,
            id: Date.now() 
        });
       
        
        if (history.length > 50) {
            history.shift(); 
        }
       
        localStorage.setItem('contactFormHistory', JSON.stringify(history));
        console.log('Form data saved to localStorage. Total entries:', history.length);
       
    } catch (error) {
        console.error('Error saving to localStorage:', error);
    }
}


function getFormHistory() {
    try {
        return JSON.parse(localStorage.getItem('contactFormHistory')) || [];
    } catch (error) {
        console.error('Error reading form history:', error);
        return [];
    }
}

function clearFormHistory() {
    localStorage.removeItem('contactFormHistory');
    console.log('Form history cleared');
}


if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validateName,
        validateEmail,
        validatePhone,
        validateMessage,
        validateForm,
        getFormHistory,
        clearFormHistory
    };
}


const validationStyles = `
    .shake {
        animation: shake 0.5s ease-in-out;
    }
   
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
   
    .success-message {
        background: #d4edda;
        color: #155724;
        padding: 15px;
        border-radius: 5px;
        border: 1px solid #c3e6cb;
        margin-top: 20px;
        animation: fadeIn 0.5s ease;
    }
   
    .success-message i {
        color: #28a745;
        font-size: 24px;
        margin-right: 10px;
    }
   
    .success-message h3 {
        margin: 10px 0 5px 0;
        color: #155724;
    }
   
    .char-counter {
        text-align: right;
        font-size: 0.875rem;
        color: #666;
        margin-top: 5px;
    }
   
    .checkbox-group.error {
        background: #ffeaea;
        padding: 10px;
        border-radius: 5px;
        border: 2px solid #e74c3c;
    }
`;


if (!document.querySelector('#validation-styles')) {
    const styleElement = document.createElement('style');
    styleElement.id = 'validation-styles';
    styleElement.textContent = validationStyles;
    document.head.appendChild(styleElement);
}