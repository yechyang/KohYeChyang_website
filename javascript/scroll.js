// document.addEventListener('scroll', () => {
//     const section = document.querySelector('#about-us-section');
//     const cards = document.querySelectorAll('.card');
//     const sectionTop = section.offsetTop;
//     const viewportHeight = window.innerHeight;
//     const scrollY = window.scrollY;

//     const extendedHeight = viewportHeight * 3; // Increase the scroll range between cards

//     cards.forEach((card, index) => {
//         const cardStart = sectionTop + index * extendedHeight;
//         const cardEnd = cardStart + extendedHeight;

//         if (index === 0) {
//             // Ensure the first card is always visible and stays in place before scrolling
//             card.style.transform = `translateY(0)`;
//             card.style.zIndex = 10;
//             card.classList.add('active');
//             card.classList.remove('inactive');
//         } else if (scrollY >= cardStart && scrollY <= cardEnd) {
//             // Move the other cards based on a gradual scroll percentage
//             const scrollPercent = (scrollY - cardStart) / extendedHeight;
//             card.style.transform = `translateY(${viewportHeight - scrollPercent * viewportHeight}px)`; // Start from the bottom and move up
//             card.style.zIndex = 10 + index;
//             card.classList.add('active');
//             card.classList.remove('inactive');
//         } else if (scrollY < cardStart) {
//             // Hide cards before they come into view
//             card.style.transform = `translateY(100vh)`; // Place off-screen below
//             card.classList.remove('active');
//             card.classList.add('inactive');
//         } else if (scrollY > cardEnd) {
//             // Fix the card in place once it's fully in view
//             card.style.transform = `translateY(0)`; // Set to final position
//             card.classList.add('active');
//             card.classList.remove('inactive');
//         }
//     });
// });


document.addEventListener('scroll', () => {
    const section = document.querySelector('#about-us-section');
    const cards = document.querySelectorAll('.card');
    const sectionTop = section.offsetTop;
    const viewportHeight = window.innerHeight;
    const scrollY = window.scrollY;

    const extendedHeight = viewportHeight * 3;
    const reducedScrollSpace = viewportHeight * 1.5;
    const extraScrollSpace = viewportHeight * 1;

    cards.forEach((card, index) => {
        let cardStart, cardEnd;

        if (index === 1) {
            cardStart = sectionTop + reducedScrollSpace;
            cardEnd = cardStart + extendedHeight;
        } else if (index > 1) {
            cardStart = sectionTop + reducedScrollSpace + (index - 1) * (extendedHeight + extraScrollSpace);
            cardEnd = cardStart + extendedHeight;
        } else {
            cardStart = sectionTop;
            cardEnd = reducedScrollSpace;
        }

        if (index === 0) {
            card.style.transform = `translateY(0)`;
            card.style.zIndex = 10;
            card.classList.add('active');
            card.classList.remove('inactive');
        } else if (scrollY >= cardStart && scrollY <= cardEnd) {
            const scrollPercent = (scrollY - cardStart) / extendedHeight;
            card.style.transform = `translateY(${viewportHeight - scrollPercent * viewportHeight}px)`;
            card.style.zIndex = 10 + index;
            card.classList.add('active');
            card.classList.remove('inactive');
        } else if (scrollY < cardStart) {
            card.style.transform = `translateY(100vh)`;
            card.classList.remove('active');
            card.classList.add('inactive');
        } else if (scrollY > cardEnd) {
            card.style.transform = `translateY(0)`; 
            card.classList.add('active');
            card.classList.remove('inactive');
        }
    });
});

