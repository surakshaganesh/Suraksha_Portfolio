document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});



document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('data-target'); // Get the target section ID
        const targetSection = document.getElementById(targetId); // Find the target section

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Adjust for fixed nav height
                behavior: 'smooth' // Smooth scroll effect
            });
        }
    });
});

// Get the form and button elements
const form = document.getElementById('contact-form');
const sendButton = form.querySelector('button');

// Event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect the form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const message = form.querySelector('input[type="text"]').value;

    // Create an object to store the form data
    const formData = {
        name: name,
        email: email,
        phone: number,
        message: message
    };

    // Store the form data in localStorage
    localStorage.setItem('contactFormData', JSON.stringify(formData));

    // Optional: Clear the form fields
    form.reset();

    // Optional: Notify the user
    alert('Message sent! Your details have been saved.');
});

// Optional: Retrieve the stored data (for testing or other uses)
function retrieveData() {
    const storedData = localStorage.getItem('contactFormData');
    if (storedData) {
        console.log('Stored Data:', JSON.parse(storedData));
    }
}
