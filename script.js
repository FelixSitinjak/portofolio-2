// Toggle menu mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Tutup menu mobile saat mengklik link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Animasi scroll untuk section
function checkScroll() {
    const sections = document.querySelectorAll('section:not(.hero)');
    const windowHeight = window.innerHeight;
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('visible');
        }
    });
}

// Panggil fungsi saat scroll dan saat load
window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);

// Animasi ketik teks untuk hero section
function typeWriter() {
    const titleElement = document.querySelector('.hero-content h1');
    const originalText = titleElement.textContent;
    const highlightText = "Nama Anda";
    const highlightIndex = originalText.indexOf(highlightText);
    
    if (highlightIndex !== -1) {
        const beforeHighlight = originalText.substring(0, highlightIndex);
        const afterHighlight = originalText.substring(highlightIndex + highlightText.length);
        
        titleElement.innerHTML = beforeHighlight + '<span class="highlight"></span>' + afterHighlight;
        
        const highlightElement = document.querySelector('.highlight');
        let i = 0;
        const speed = 100;
        
        function type() {
            if (i < highlightText.length) {
                highlightElement.innerHTML += highlightText.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        setTimeout(type, 1000);
    }
}

// Jalankan animasi ketik teks
setTimeout(typeWriter, 500);

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Terima kasih! Pesan Anda telah dikirim.');
        contactForm.reset();
    });
}

// Animasi hover untuk skill items
const skillItems = document.querySelectorAll('.skill-item');
skillItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-5px)';
        item.style.boxShadow = '0 10px 20px rgba(230, 126, 34, 0.3)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0)';
        item.style.boxShadow = 'none';
    });
});