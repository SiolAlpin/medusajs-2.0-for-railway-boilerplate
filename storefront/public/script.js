// Accordion for expanding and collapsing sections
document.querySelectorAll('.accordion-btn').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;

        // Toggle the content visibility
        content.style.display = content.style.display === 'block' ? 'none' : 'block';

        // Change the button text based on the state of the content
        button.innerText = content.style.display === 'block' ? 'Hide Information' : 'Show Information';
    });
});

// Smooth Scroll for Sub-Navbar Links
document.querySelectorAll('.sub-nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        // Scroll to the corresponding section
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 80, // Offset for header/nav height
            behavior: 'smooth',
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const circles = document.querySelectorAll('.notifier-circle');
    const sections = document.querySelectorAll('.product-section');

    // Function to highlight the correct circle based on the scroll position
    function highlightCircleOnScroll() {
        let currentSection = null;

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            // Check if the section is in the viewport
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                currentSection = section;
            }
        });

        circles.forEach(circle => {
            circle.classList.remove('active');
            circle.querySelector('.notifier-label').style.display = 'none'; // Hide label by default
            if (currentSection && circle.dataset.target === `#${currentSection.id}`) {
                circle.classList.add('active');
                circle.querySelector('.notifier-label').style.display = 'inline-block'; // Show label when active
            }
        });
    }

    // Call the highlight function on scroll
    window.addEventListener('scroll', highlightCircleOnScroll);
    
    // Initial call to highlight the correct circle if already scrolled
    highlightCircleOnScroll();
});







