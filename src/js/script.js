const profile = document.querySelector('.profile');
const toggleMenu = document.querySelector('.menu');

profile.addEventListener('click', function() {
    toggleMenu.classList.toggle('active');
});