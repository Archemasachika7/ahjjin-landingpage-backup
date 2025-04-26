// Landing Page Specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Preview Tabs
    const previewTabs = document.querySelectorAll('.preview-tab');
    const previewPanels = document.querySelectorAll('.preview-panel');
    
    previewTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetPanel = tab.getAttribute('data-tab');
            
            // Update active tab
            previewTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Show corresponding panel
            previewPanels.forEach(panel => panel.classList.remove('active'));
            document.getElementById(`${targetPanel}-panel`).classList.add('active');
        });
    });
    
    // Testimonial Slider
    const testimonialSlider = document.querySelector('.testimonials-slider');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    
    function showSlide(index) {
        if (index < 0) index = testimonialCards.length - 1;
        if (index >= testimonialCards.length) index = 0;
        
        testimonialSlider.style.transform = `translateX(-${index * 100}%)`;
        
        // Update dots
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
        
        currentSlide = index;
    }
    
    // Click on dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });
    
    // Auto slide every 5 seconds
    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);
    
    // Register buttons
    const registerBtns = [
        document.getElementById('register-btn'),
        document.getElementById('leaderboard-signup-btn'),
        document.getElementById('editor-signup-btn'),
        document.getElementById('final-cta-btn')
    ];
    
    registerBtns.forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => {
                // Open modal
                openModal();
                
                // Switch to register tab
                authTabs.forEach(tab => tab.classList.remove('active'));
                authForms.forEach(form => form.classList.remove('active'));
                document.querySelector('[data-tab="register"]').classList.add('active');
                document.getElementById('registerForm').classList.add('active');
            });
        }
    });
    
    // Pricing buttons
    const pricingBtns = document.querySelectorAll('.pricing-btn');
    
    pricingBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Open modal
            openModal();
            
            // Switch to register tab
            authTabs.forEach(tab => tab.classList.remove('active'));
            authForms.forEach(form => form.classList.remove('active'));
            document.querySelector('[data-tab="register"]').classList.add('active');
            document.getElementById('registerForm').classList.add('active');
        });
    });
    
    // GSAP Animation for landing page reveal
    if (typeof gsap !== 'undefined') {
        // Create a timeline
        const tl = gsap.timeline();
        
        // Animate header
        tl.from('header', {
            y: -100,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        });
        
        // Animate hero content
        tl.from('.hero-content h1, .hero-content p', {
            y: 50,
            opacity: 0,
            stagger: 0.2,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.4');
        
        // Animate hero buttons
        tl.from('.hero-buttons button', {
            y: 30,
            opacity: 0,
            stagger: 0.15,
            duration: 0.6,
            ease: 'power3.out'
        }, '-=0.4');
        
        // Animate auth benefits
        tl.from('.benefit-item', {
            x: -30,
            opacity: 0,
            stagger: 0.1,
            duration: 0.6,
            ease: 'power3.out'
        }, '-=0.4');
        
        // Animate hero image
        tl.from('.hero-image', {
            x: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.8');
        
        // Animate company logos
        tl.from('.company-logos img', {
            y: 30,
            opacity: 0,
            stagger: 0.1,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.company-logos',
                start: 'top 80%'
            }
        });
        
        // Animate stats
        tl.from('.stat-item', {
            y: 30,
            opacity: 0,
            stagger: 0.1,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.stats-container',
                start: 'top 80%'
            }
        });
    }
    
    // Form submission animation
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const progressFill = document.querySelector('.progress-fill');
    
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Animate progress
        progressFill.style.width = '100%';
        
        // Simulate login
        setTimeout(() => {
            // Redirect to main app
            window.location.href = 'main-app.html';
        }, 1000);
    });
    
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Animate progress
        progressFill.style.width = '100%';
        
        // Simulate registration
        setTimeout(() => {
            // Redirect to main app
            window.location.href = 'main-app.html';
        }, 1000);
    });
});
