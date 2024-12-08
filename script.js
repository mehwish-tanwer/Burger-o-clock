// Get all nav-links and tab panes
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.tab-pane');

// Listen for the scroll event
window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 60; // Adjusting for sticky navbar
        const sectionHeight = section.clientHeight;

        // If the section is in the viewport
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    // Loop through nav-links and highlight the active one
    navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
});

// Smooth scroll to the section when a tab is clicked
navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor link behavior
        const targetSection = document.querySelector(link.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
