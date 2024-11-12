// Smooth Scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation (example for a contact form)
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.querySelector('input[name="name"]');
            const email = document.querySelector('input[name="email"]');
            const message = document.querySelector('textarea[name="message"]');
            let valid = true;

            // Simple validation
            if (name.value.trim() === '') {
                alert('Please enter your name.');
                valid = false;
            } else if (!validateEmail(email.value.trim())) {
                alert('Please enter a valid email address.');
                valid = false;
            } else if (message.value.trim() === '') {
                alert('Please enter your message.');
                valid = false;
            }

            if (valid) {
                // Here you can handle the form submission, like sending the data to a server
                alert('Form submitted successfully!');
                // Optionally reset the form
                contactForm.reset();
            }
        });
    }
});

// Email validation function
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}
