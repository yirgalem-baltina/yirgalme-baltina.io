// JavaScript for Yirgalem Baltina Website

// Highlight Active Navigation Link
const navLinks = document.querySelectorAll('header nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Form Validation for Order Page
const orderForm = document.querySelector('form');
if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const quantity = document.getElementById('quantity').value.trim();

        if (!name || !email || !quantity) {
            e.preventDefault();
            alert('Please fill in all the fields.');
        } else if (quantity <= 0) {
            e.preventDefault();
            alert('Quantity must be a positive number.');
        }
    });
}
