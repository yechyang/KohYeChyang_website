function smoothScrollToElement(element, duration) {
    const start = window.scrollY;
    const target = element.getBoundingClientRect().top + window.scrollY;
    const startTime = performance.now();

    function scroll() {
        const currentTime = performance.now();
        const timeElapsed = (currentTime - startTime) / duration;
        const progress = Math.min(timeElapsed, 1);
        const easing = easeInOutQuad(progress);

        window.scrollTo(0, start + (target - start) * easing);

        if (progress < 1) {
            requestAnimationFrame(scroll);
        }
    }

    function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    requestAnimationFrame(scroll);
}

document.addEventListener('DOMContentLoaded', () => {
    const contactLink = document.getElementById('contact-link');
    const targetElement = document.querySelector('#get-in-touch-section');

    contactLink.addEventListener('click', (event) => {
        event.preventDefault(); 
        smoothScrollToElement(targetElement, 5000);
    });
});
