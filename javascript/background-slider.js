const backgroundSection = document.getElementById('background-section');

const images = [
    './images/image.jpg',
    './images/flattop.jpg',
    './images/city.jpg',
];

let currentIndex = 0;

function changeBackgroundImage() {
    backgroundSection.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
}

const preloadImages = images.map(src => {
    const img = new Image();
    img.src = src;
    return img;
});

setInterval(changeBackgroundImage, 10000);

changeBackgroundImage();