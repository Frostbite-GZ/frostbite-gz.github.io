document.addEventListener('DOMContentLoaded', () => {

    function showPage(pageId) {
        const currentPage = document.querySelector('.page.active');
        const newPage = document.getElementById(pageId);

        if (currentPage && newPage && currentPage.id !== newPage.id) {
            currentPage.classList.add('page-exit');

            setTimeout(() => {
                currentPage.classList.remove('active', 'page-exit');
                newPage.classList.add('active');
            }, 300);
        }

        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });

        const activeLink = document.querySelector(`.nav-link[onclick="showPage('${pageId}')"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    function createParticles() {
        const particlesContainer = document.querySelector('.particles');
        if (!particlesContainer) return;

        const particleCount = 50;
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            particle.style.left = Math.random() * 100 + '%';

            particle.style.top = Math.random() * 100 + 'vh'; 
            particle.style.animationDelay = Math.random() * 15 + 's';
            particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
            
            particlesContainer.appendChild(particle);
        }
    }
    
    window.showPage = showPage;
    
    createParticles();

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
        });
        card.addEventListener('mouseleave', function() {
        });
    });
});