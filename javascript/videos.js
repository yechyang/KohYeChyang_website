const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    let hoverTimeout; // Variable to store the hover timeout
    let lastLeaveTime = 0; // Variable to store the last leave time
    const VIDEO_RESTART_DELAY = 3000; // 3 seconds delay

    // Get the video inside the card
    const tabletVideo = card.querySelector('.tablet-video');
    const monitorVideo = card.querySelector('.monitor-video');
    const phoneVideo = card.querySelector('.phone-video');

    // When mouse enters the card, play or resume the video
    card.addEventListener('mouseenter', () => {
        const currentTime = Date.now();

        clearTimeout(hoverTimeout); // Clear the timeout if mouse enters again before 3 seconds

        if (tabletVideo) {
            if (currentTime - lastLeaveTime > VIDEO_RESTART_DELAY) {
                tabletVideo.currentTime = 0; // Restart video if needed
            }
            tabletVideo.playbackRate = 1.25; // Speed up the video (1.25x)
            tabletVideo.play(); // Play video
        }
        if (monitorVideo) {
            if (currentTime - lastLeaveTime > VIDEO_RESTART_DELAY) {
                monitorVideo.currentTime = 0; // Restart video if needed
            }
            monitorVideo.playbackRate = 1.25; // Speed up the video (1.25x)
            monitorVideo.play(); // Play video
        }
        if (phoneVideo) {
            if (currentTime - lastLeaveTime > VIDEO_RESTART_DELAY) {
                phoneVideo.currentTime = 0; // Restart video if needed
            }
            phoneVideo.playbackRate = 1.25; // Speed up the video (1.25x)
            phoneVideo.play(); // Play video
        }
    });

    // When mouse leaves the card, pause the video and set timeout to potentially restart the video
    card.addEventListener('mouseleave', () => {
        const currentTime = Date.now();

        if (tabletVideo) tabletVideo.pause();
        if (monitorVideo) monitorVideo.pause();
        if (phoneVideo) phoneVideo.pause();

        // Store the time when the user leaves the card
        lastLeaveTime = currentTime;
    });
});
