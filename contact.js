const form = document.getElementById("contactForm");
const errorBox = document.getElementById("errorBox");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    errorBox.textContent = "";

    try {
        if (!form.checkValidity()) {
            form.reportValidity();
            throw new Error("Please fill out all required fields correctly.");
        }

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            throw new Error("Name, email, and message are required.");
        }

        // Example success action
        alert("Message sent successfully.");
        form.reset();
    } catch (error) {
        errorBox.textContent = error.message || "An unexpected error occurred.";
        errorBox.style.color = "red";
    }
});