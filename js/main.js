// Navbar scroll effect
const navbar = document.querySelector('.navbar-custom');
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = navbar.offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission feedback
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const btn = this.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="bi bi-check-circle me-2"></i>Pesan Terkirim!';
        btn.style.background = '#22c55e';
        
        setTimeout(function() {
            btn.innerHTML = originalText;
            btn.style.background = '';
            contactForm.reset();
        }, 3000);
    });
}