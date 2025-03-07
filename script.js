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
    const cardWidth = cards[0].offsetWidth + 20;

    currentSlide += direction;
    if (currentSlide < 0) currentSlide = 0;
    if (currentSlide > cards.length - 2) currentSlide = cards.length - 2;

    slider.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
}

document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = this.getAttribute('href');
        if (target.startsWith("#")) {
            e.preventDefault();
            const targetId = target.substring(1);
            document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


const slider = document.querySelector(".card-slider");
const prevBtn = document.querySelector(".left-btn");
const nextBtn = document.querySelector(".right-btn");

let scrollAmount = 0;
const cardWidth = 300 + 20; 

nextBtn.addEventListener("click", () => {
    scrollAmount += cardWidth;
    slider.style.transform = `translateX(-${scrollAmount}px)`;
});

prevBtn.addEventListener("click", () => {
    scrollAmount -= cardWidth;
    if (scrollAmount < 0) scrollAmount = 0;
    slider.style.transform = `translateX(-${scrollAmount}px)`;
});