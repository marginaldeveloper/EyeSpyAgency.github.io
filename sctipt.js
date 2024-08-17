let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    items.forEach((item, i) => {
        item.classList.remove('active');
        if (i === index) {
            item.classList.add('active');
        }
    });
}

function prevSlide() {
    currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
}

function nextSlide() {
    currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
}



