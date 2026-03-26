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

// Countdown Timer
function startCountdown() {
    var endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);

    function updateCountdown() {
        var now = new Date();
        var diff = endDate - now;

        if (diff > 0) {
            var days = Math.floor(diff / (1000 * 60 * 60 * 24));
            var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

            document.querySelectorAll('.countdown-timer').forEach(function(timer) {
                var items = timer.querySelectorAll('.countdown-item');
                if (items[0]) items[0].querySelector('.countdown-number').textContent = String(days).padStart(2, '0');
                if (items[1]) items[1].querySelector('.countdown-number').textContent = String(hours).padStart(2, '0');
                if (items[2]) items[2].querySelector('.countdown-number').textContent = String(minutes).padStart(2, '0');
            });
        }
    }

    updateCountdown();
    setInterval(updateCountdown, 60000);
}

startCountdown();
