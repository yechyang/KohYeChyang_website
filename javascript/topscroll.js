function smoothScrollToTop(duration) {
    const start = window.scrollY;
    const startTime = performance.now();

    function scroll() {
        const currentTime = performance.now();
        const timeElapsed = (currentTime - startTime) / duration;
        const progress = Math.min(timeElapsed, 1);
        const easing = easeInOutQuad(progress);

        window.scrollTo(0, start * (1 - easing));

        if (progress < 1) {
            requestAnimationFrame(scroll);
        }
    }

    function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    requestAnimationFrame(scroll);
}

document.querySelector('.back-to-top-button').addEventListener('click', () => {
    smoothScrollToTop(3000);
});