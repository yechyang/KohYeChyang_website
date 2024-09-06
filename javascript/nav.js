window.addEventListener('scroll', function() {
    var header = document.getElementById('main-header');
    var backgroundSection = document.getElementById('background-section');
    var rect = backgroundSection.getBoundingClientRect();

    if (rect.bottom < 50) {
        header.classList.add('light');
    } else {
        header.classList.remove('light');
    }
});