// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio website loaded successfully');
    
    // Detect device type
    window.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    window.isTablet = /iPad|Android(?!.*Mobile)/i.test(navigator.userAgent);
    
    // Initialize all modules
    initDarkMode();
    initNavbar();
    initAOS();
    initPortfolio();
    initLightbox();
    initScrollAnimations();
    initMobileOptimizations();
    
    // Optimize for mobile
    if (window.isMobile || window.isTablet) {
        optimizeForMobile();
    }
});

// ==================== MOBILE OPTIMIZATIONS ====================
function initMobileOptimizations() {
    // Prevent double-tap zoom on buttons
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function(event) {
        let now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
    
    // Improve touch targets
    const buttons = document.querySelectorAll('button, .btn, a[href^="#"]');
    buttons.forEach(button => {
        const rect = button.getBoundingClientRect();
        if (rect.height < 44) {
            button.style.padding = (button.style.padding || '') + ' !important';
        }
    });
    
    // Handle orientation change
    window.addEventListener('orientationchange', function() {
        setTimeout(() => {
            window.scrollTo(0, 0);
            AOS.refresh();
        }, 500);
    });
}

function optimizeForMobile() {
    // Reduce animation complexity on mobile
    if (window.matchMedia('(max-width: 768px)').matches) {
        // Disable GSAP complex animations
        gsap.globalTimeline.timeScale(0.8);
        
        // Optimize lightbox for mobile
        const lightboxContent = document.querySelector('.lightbox-content');
        if (lightboxContent) {
            lightboxContent.style.maxWidth = '100vw';
        }
    }
}

// ==================== DARK MODE ====================
function initDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const html = document.documentElement;
    const body = document.body;
    
    // Check for saved preference
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'light') {
        body.classList.add('light-mode');
        updateDarkModeIcon(true);
    }
    
    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('light-mode');
        const isLight = body.classList.contains('light-mode');
        localStorage.setItem('darkMode', isLight ? 'light' : 'dark');
        updateDarkModeIcon(isLight);
    });
    
    function updateDarkModeIcon(isLight) {
        const icon = darkModeToggle.querySelector('i');
        if (isLight) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }
}

// ==================== NAVBAR ====================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const navToggler = document.querySelector('.navbar-toggler');
    
    // Sticky navbar on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
                bsCollapse.hide();
            }
        });
    });
    
    // Enhanced mobile menu handling
    if (navToggler) {
        navToggler.addEventListener('click', function() {
            const navbarCollapse = document.querySelector('.navbar-collapse');
            navbarCollapse.classList.toggle('show');
        });
    }
    
    // Smooth scroll
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                const element = document.querySelector(href);
                if (element) {
                    // Add offset for fixed navbar
                    const navHeight = navbar.offsetHeight;
                    const elementPosition = element.offsetTop - navHeight;
                    window.scrollTo({
                        top: elementPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Handle escape key to close mobile menu
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                navToggler.click();
            }
        }
    });
}

// ==================== AOS INITIALIZATION ====================
function initAOS() {
    AOS.init({
        duration: 1000,
        offset: 100,
        once: false,
        mirror: true,
        easing: 'ease-in-out'
    });
}

// ==================== PORTFOLIO SYSTEM ====================
// TODO: Update these paths to match your actual image folder structure
const portfolioData = {
    'ad-posts': [
        { title: 'Ad Post 1', image: '../AD\'S POSTS/3.png' },
        { title: 'Ad Post 2', image: '../AD\'S POSTS/WINTER SKINCARE.png' },
        { title: 'Ad Post 3', image: '../AD\'S POSTS/Your paragraph text.png' }
    ],
    'banners': [
        { title: 'Banner 1', image: '../BANNERS/morden furniture.png' },
        { title: 'Banner 2', image: '../BANNERS/Spend Long Holidays in Borcelle Beach.png' },
        { title: 'Banner 3', image: '../BANNERS/THE SWEET HOUSE.png' }
    ],
    'brochures': [
        { title: 'Brochure 1', image: '../BROCHURES/1.png' },
        { title: 'Brochure 2', image: '../BROCHURES/2.png' },
        { title: 'Brochure 3', image: '../BROCHURES/1(1).png' },
        { title: 'Brochure 4', image: '../BROCHURES/Menu.png' }
    ],
    'carousels': [
        { title: 'Carousel 1', image: '../CARSOUAL/1.png' },
        { title: 'Carousel 2', image: '../CARSOUAL/2.png' },
        { title: 'Carousel 3', image: '../CARSOUAL/3.png' },
        { title: 'Carousel 4', image: '../CARSOUAL/Teal and Brown Lifestyle Carousel Scrapbook Instagram Post.png' }
    ],
    'invitation-cards': [
        { title: 'Invitation 1', image: '../INVITATION CARDS/Birthday Party.png' },
        { title: 'Invitation 2', image: '../INVITATION CARDS/prinyanka.png' },
        { title: 'Invitation 3', image: '../INVITATION CARDS/3.png' }
    ],
    'posters': [
        { title: 'Poster 1', image: '../POSTERS/1.png' },
        { title: 'Poster 2', image: '../POSTERS/Ne.png' },
        { title: 'Poster 3', image: '../POSTERS/OPENING.png' }
    ],
    'social-media': [
        { title: 'Social Media 1', image: '../SOCIAL MEDIA POST\'S/sliq studio.png' },
        { title: 'Social Media 2', image: '../SOCIAL MEDIA POST\'S/Special sweet cherry macaroon.png' },
        { title: 'Social Media 3', image: '../SOCIAL MEDIA POST\'S/Super Sale.png' },
        { title: 'Social Media 4', image: '../SOCIAL MEDIA POST\'S/Your paragraph text.png' }
    ],
    'youtube-thumbnails': [
        { title: 'YouTube Thumbnail 4', image: '../YOU TUBE THMUBNAILS/5 tips.png' },
        { title: 'YouTube Thumbnail 5', image: '../YOU TUBE THMUBNAILS/glam.png' },
        { title: 'YouTube Thumbnail 6', image: '../YOU TUBE THMUBNAILS/THE SECRETS.png' }
    ]
};

function initPortfolio() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioGrid = document.getElementById('portfolioGrid');
    let currentFilter = 'all';
    
    // Render all portfolio items
    renderPortfolioItems(portfolioGrid, 'all');
    
    // Filter button click events
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            currentFilter = this.getAttribute('data-filter');
            renderPortfolioItems(portfolioGrid, currentFilter);
            
            // Reinitialize AOS for new items
            AOS.refresh();
        });
    });
}

function renderPortfolioItems(container, filter) {
    container.innerHTML = '';
    let itemsToShow = [];
    
    if (filter === 'all') {
        // Show all items
        Object.values(portfolioData).forEach(categoryItems => {
            itemsToShow = itemsToShow.concat(categoryItems);
        });
    } else {
        itemsToShow = portfolioData[filter] || [];
    }
    
    itemsToShow.forEach((item, index) => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        portfolioItem.setAttribute('data-aos', 'zoom-in');
        portfolioItem.setAttribute('data-aos-delay', `${index * 50}`);
        
        portfolioItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" loading="lazy">
            <div class="portfolio-overlay">
                <h3>${item.title}</h3>
                <button class="portfolio-btn" onclick="openLightbox('${item.image}', '${item.title}')">
                    <i class="fas fa-search-plus"></i>
                </button>
            </div>
        `;
        
        portfolioItem.addEventListener('click', function(e) {
            if (!e.target.closest('.portfolio-btn')) {
                openLightbox(item.image, item.title);
            }
        });
        
        container.appendChild(portfolioItem);
    });
}

// ==================== LIGHTBOX GALLERY ====================
let currentLightboxImage = 0;
let allImages = [];

function initLightbox() {
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    
    // Close lightbox
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxModal.addEventListener('click', function(e) {
        if (e.target === this) closeLightbox();
    });
    
    // Navigation
    lightboxPrev.addEventListener('click', () => navigateLightbox(-1));
    lightboxNext.addEventListener('click', () => navigateLightbox(1));
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (lightboxModal.classList.contains('active')) {
            if (e.key === 'ArrowLeft') navigateLightbox(-1);
            if (e.key === 'ArrowRight') navigateLightbox(1);
            if (e.key === 'Escape') closeLightbox();
        }
    });
}

function openLightbox(imageSrc, title) {
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImage = document.getElementById('lightboxImage');
    
    // Get all portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item img');
    allImages = Array.from(portfolioItems).map(img => ({
        src: img.src,
        alt: img.alt
    }));
    
    // Find current image index
    currentLightboxImage = allImages.findIndex(img => img.src === imageSrc);
    if (currentLightboxImage === -1) currentLightboxImage = 0;
    
    lightboxImage.src = allImages[currentLightboxImage].src;
    lightboxImage.alt = allImages[currentLightboxImage].alt;
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightboxModal = document.getElementById('lightboxModal');
    lightboxModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function navigateLightbox(direction) {
    currentLightboxImage += direction;
    if (currentLightboxImage >= allImages.length) currentLightboxImage = 0;
    if (currentLightboxImage < 0) currentLightboxImage = allImages.length - 1;
    
    const lightboxImage = document.getElementById('lightboxImage');
    lightboxImage.src = allImages[currentLightboxImage].src;
    lightboxImage.alt = allImages[currentLightboxImage].alt;
}

// ==================== CONTACT FORM ====================
// ==================== SCROLL ANIMATIONS ====================
function initScrollAnimations() {
    // GSAP Scroll Trigger for parallax effects
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero section parallax
    gsap.to('.hero-visual', {
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top center',
            end: 'bottom center',
            scrub: 1,
            markers: false
        },
        y: 100,
        opacity: 0
    });
    
    // Floating cards animation
    const cards = document.querySelectorAll('.floating-card');
    cards.forEach((card, index) => {
        gsap.to(card, {
            y: 20,
            duration: 3 + index,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
    });
    
    // Service cards on hover
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            gsap.to(this, {
                y: -10,
                duration: 0.3,
                overwrite: 'auto'
            });
        });
        
        card.addEventListener('mouseleave', function() {
            gsap.to(this, {
                y: 0,
                duration: 0.3,
                overwrite: 'auto'
            });
        });
    });
}

// ==================== UTILITY FUNCTIONS ====================

// Smooth scroll to element
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Get all images from portfolio
function getAllPortfolioImages() {
    let allImages = [];
    Object.values(portfolioData).forEach(categoryImages => {
        allImages = allImages.concat(categoryImages);
    });
    return allImages;
}

// Handle errors gracefully
window.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.style.display = 'none';
        console.warn('Failed to load image:', e.target.src);
    }
});

// Performance monitoring
if (window.performance && window.performance.measure) {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log('Page load time: ' + pageLoadTime + 'ms');
        }, 0);
    });
}

// ==================== ADVANCED INTERACTIONS ====================

// Parallax scroll effect on elements
document.addEventListener('scroll', function() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    parallaxElements.forEach(element => {
        const scrollPosition = window.scrollY;
        const elementPosition = element.offsetTop;
        const windowHeight = window.innerHeight;
        
        if (scrollPosition + windowHeight > elementPosition) {
            const speed = element.getAttribute('data-parallax') || 0.5;
            element.style.transform = `translateY(${scrollPosition * speed}px)`;
        }
    });
});

// Mobile menu optimization
const navbarToggler = document.querySelector('.navbar-toggler');
if (navbarToggler) {
    navbarToggler.addEventListener('click', function() {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        navbarCollapse.classList.toggle('show');
    });
}

// Add loading state to buttons
document.querySelectorAll('.btn-primary-custom, .btn-secondary-custom').forEach(btn => {
    btn.addEventListener('click', function() {
        if (this.id !== 'contactForm') {
            const originalContent = this.innerHTML;
            this.disabled = true;
            
            // Re-enable after navigation
            setTimeout(() => {
                this.disabled = false;
                this.innerHTML = originalContent;
            }, 500);
        }
    });
});

// Export functions for global use
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
window.smoothScroll = smoothScroll;

console.log('All portfolio systems initialized successfully!');
