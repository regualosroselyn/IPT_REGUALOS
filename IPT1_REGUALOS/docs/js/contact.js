// Add hover effects for social media links
const socialMediaItems = document.querySelectorAll('#soc-med-links .soc-med-links-item');

socialMediaItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.1)';
    });
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});

// Smooth scrolling to sections
document.querySelectorAll('.button-container button a').forEach(anchor => {
    anchor.addEventListener('click', event => {
        event.preventDefault();
        const section = document.querySelector(anchor.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});


