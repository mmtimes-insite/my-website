// --- Global Variables & Functions ---
let currentMainSlide = 0; // For the main homepage slider

function showMainSlides() {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".slider-dot");

    // Hide all slides and deactivate all dots
    slides.forEach(slide => slide.style.display = 'none');
    dots.forEach(dot => dot.classList.remove('active'));

    // Show the current slide and activate the corresponding dot
    if (slides.length > 0) {
        slides[currentMainSlide].style.display = 'block';
        if (dots.length > 0) {
            dots[currentMainSlide].classList.add('active');
        }
    }
}

function nextMainSlide() {
    const slides = document.querySelectorAll(".slide");
    currentMainSlide = (currentMainSlide + 1) % slides.length;
    showMainSlides();
}

function currentMainSlideIndex(n) {
    currentMainSlide = n;
    showMainSlides();
}

function showToast(message, type) {
    const toast = document.getElementById('toast');
    const toastMessage = toast.querySelector('p');
    const toastIcon = toast.querySelector('.toast-icon');

    // Reset classes and set new message/type
    toast.className = 'toast';
    toastIcon.className = 'toast-icon';

    toastMessage.textContent = message;
    toast.classList.add(type, 'visible');

    // Set icon based on type
    if (type === 'success') {
        toastIcon.innerHTML = '<i class="fas fa-check-circle"></i>';
    } else if (type === 'error') {
        toastIcon.innerHTML = '<i class="fas fa-times-circle"></i>';
    } else if (type === 'warning') {
        toastIcon.innerHTML = '<i class="fas fa-exclamation-triangle"></i>';
    }

    // Hide toast after a few seconds
    setTimeout(() => {
        toast.classList.remove('visible');
    }, 3000);
}

// --- Document Ready Event Listener ---
document.addEventListener("DOMContentLoaded", () => {
    // --- Homepage Slider Logic ---
    const mainSlides = document.querySelectorAll(".slide");
    const sliderDots = document.querySelectorAll(".slider-dot");

    if (mainSlides.length > 0 && sliderDots.length > 0) {
        showMainSlides();
        sliderDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentMainSlideIndex(index);
            });
        });
        setInterval(nextMainSlide, 4000); // Change slide every 4 seconds
    }

    // --- Product Page Thumbnail Slider Logic ---
    const mainProductImage = document.getElementById('mainProductImage');
    const thumbnails = document.querySelectorAll('.thumbnail');

    if (mainProductImage && thumbnails.length > 0) {
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                // Remove active class from all thumbnails
                thumbnails.forEach(t => t.classList.remove('active'));
                
                // Add active class to the clicked thumbnail
                thumbnail.classList.add('active');
                
                // Change the main image source to the clicked thumbnail's source
                mainProductImage.src = thumbnail.src;
            });
        });
    }

    // --- Back to Top Button Logic ---
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // --- Modal Logic (Login & Sign Up) ---
    const loginBtn = document.querySelector('.user-btn:first-of-type');
    const signupBtn = document.querySelector('.user-btn:last-of-type');
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    const closeButtons = document.querySelectorAll('.close-modal');

    if (loginBtn && loginModal) {
        loginBtn.addEventListener('click', () => {
            loginModal.style.display = 'flex';
        });
    }

    if (signupBtn && signupModal) {
        signupBtn.addEventListener('click', () => {
            signupModal.style.display = 'flex';
        });
    }

    closeButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.target.closest('.modal').style.display = 'none';
        });
    });

    // --- Page Loader Logic ---
    const pageLoader = document.querySelector('.page-loader');
    if (pageLoader) {
        window.addEventListener('load', () => {
            pageLoader.classList.add('hidden');
        });
    }

    // --- Add to Cart button Toast ---
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showToast('Product added to cart!', 'success');
        });
    }
});
