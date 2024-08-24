const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

const certifications = document.querySelector('.certifications');

let isPaused = false;

// Pause animation on hover or interaction
certifications.addEventListener('mouseover', () => {
    certifications.style.animationPlayState = 'paused';
    isPaused = true;
});

// Resume animation after interaction
certifications.addEventListener('mouseout', () => {
    certifications.style.animationPlayState = 'running';
    isPaused = false;
});

// Detect manual scroll and stop animation temporarily
certifications.addEventListener('scroll', () => {
    if (!isPaused) {
        certifications.style.animationPlayState = 'paused';
        clearTimeout(isPaused);
        isPaused = setTimeout(() => {
            certifications.style.animationPlayState = 'running';
        }, 2000); // Resume auto-scroll after 2 seconds
    }
});
