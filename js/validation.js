document.getElementById("contactForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
   
    let isValid = true;
    const name = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    
    if(name.length < 3) {
        alert("Emri duhet të jetë më i gjatë se 3 karaktere!");
        isValid = false;
    }

    if(!email.includes("@")) {
        alert("Email nuk është valid!");
        isValid = false;
    }

    if(isValid) {
        
        $(this).slideUp();
        $("#formMessage").html("<h3>Mesazhi u dërgua me sukses!</h3>").fadeIn();
        console.log("Data e dërgimit: " + new Date().toLocaleString()); 
    }
});


document.getElementById("message")?.addEventListener("input", function() {
    document.getElementById("charCount").innerText = this.value.length;
});