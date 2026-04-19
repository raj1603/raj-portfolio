// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');

    // Loading animation delay
    setTimeout(function() {
        loadingScreen.style.opacity = '0';
        setTimeout(function() {
            loadingScreen.style.display = 'none';
            mainContent.classList.remove('hidden');
        }, 800);
    }, 2500);

    // Smooth scroll for back to top
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        backToTop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Mouse move parallax effect on interactive section
    const interactiveSection = document.getElementById('interactive');
    if (interactiveSection) {
        document.addEventListener('mousemove', function(e) {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            interactiveSection.style.transform = `translate(${x}px, ${y}px)`;
        });
    }

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });

    // Feature cards hover effect - scale on hover
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(function(card, index) {
        card.style.transitionDelay = (index * 0.1) + 's';
    });

    // Manifesto items staggered animation
    const manifestoItems = document.querySelectorAll('.manifesto-item');
    manifestoItems.forEach(function(item, index) {
        item.style.transitionDelay = (index * 0.15) + 's';
    });

    // Project cards animation
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(function(card, index) {
        card.style.transitionDelay = (index * 0.1) + 's';
    });

    // Gallery items animation
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(function(item, index) {
        item.style.transitionDelay = (index * 0.1) + 's';
    });

    // Console easter egg
    console.log('%c Raj Shekhar Portfolio ', 'background: #bfff00; color: #0a0a0a; font-size: 20px; font-weight: bold; padding: 10px;');
    console.log('Software Developer & AI Engineer | Patna, Bihar');
    console.log('GitHub: https://github.com/raj1603');
    console.log('LinkedIn: https://www.linkedin.com/in/raj-shekhar-63a037403');
});
