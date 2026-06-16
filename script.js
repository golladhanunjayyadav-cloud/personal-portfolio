// ========================
// DHANU PORTFOLIO - script.js
// ========================

let current = 0;
const total = 5;
const slider = document.getElementById('slider');
const dotsContainer = document.getElementById('dots');

// Create navigation dots
for (let i = 0; i < total; i++) {
    const dot = document.createElement('div');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.onclick = () => goTo(i);
    dotsContainer.appendChild(dot);
}

// Go to a specific slide
function goTo(index) {
    current = index;
    slider.style.transform = `translateX(-${current * 100}%)`;
    document.querySelectorAll('.dot').forEach((d, i) => {
        d.classList.toggle('active', i === current);
    });
    return false;
}

// Next slide
function nextSlide() {
    goTo((current + 1) % total);
}

// Previous slide
function prevSlide() {
    goTo((current - 1 + total) % total);
}

// Keyboard arrow navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
});

// Touch / swipe support for mobile
let startX = 0;

slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

slider.addEventListener('touchend', (e) => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
        diff > 0 ? nextSlide() : prevSlide();
    }
});
