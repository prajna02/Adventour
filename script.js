let currentSlide = 0;
let isLoggedIn = false;

function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('main-page').style.display = 'block';
        document.getElementById('login-logout').textContent = 'Logout';
        isLoggedIn = true;
    } else {
        alert('Please enter both email and password!');
    }
}

function logout() {
    if (isLoggedIn) {
        document.getElementById('main-page').style.display = 'none';
        document.getElementById('login-page').style.display = 'flex';
        document.getElementById('login-logout').textContent = 'Login';
        isLoggedIn = false;
    }
}

function flipCard(card) {
    card.classList.toggle('flipped');
}

function moveSlide(direction) {
    const slider = document.querySelector('.card-slider');
    const cards = document.querySelectorAll('.card');
    const cardWidth = cards[0].offsetWidth + 20; // Including gap

    currentSlide += direction;
    if (currentSlide < 0) currentSlide = 0;
    if (currentSlide > cards.length - 2) currentSlide = cards.length - 2;

    slider.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
}