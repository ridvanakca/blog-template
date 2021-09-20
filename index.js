const toggleButton = document.querySelector('.js-toggle-mobile-menu');
const nav = document.querySelector('.nav');

toggleButton.addEventListener('click', function() {
    nav.classList.toggle('show-nav');
})