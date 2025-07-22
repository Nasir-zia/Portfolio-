// contact.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = form.elements['name'].value;
            const email = form.elements['email'].value;
            const message = form.elements['message'].value;
            alert(`Thank you, ${name}!\nYour message has been received.\nEmail: ${email}\nMessage: ${message}`);
            form.reset();
        });
    }
}); 