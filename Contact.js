document.getElementById("contact-form").addEventListener("submit", function (event) {
    let isValid = true;


    const name = document.getElementById("name").value;
    if (/\d/.test(name)) {
        document.getElementById("name-error").textContent = "Name cannot contain numbers.";
        isValid = false;
    }

    const email = document.getElementById("email").value;
    if (/\d/.test(email)) {
        document.getElementById("email-error").textContent = "Email cannot contain numbers.";
        isValid = false;
    }
});