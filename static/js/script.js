// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a nav link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (hamburger && navLinks) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.padding = '0.5rem 0';
            header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.padding = '1rem 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Animate elements on scroll
    const animateElements = document.querySelectorAll('.feature-card, .service-card, .testimonial-card, .about-feature, .contact-detail');
    
    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.8;
        
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                element.classList.add('show');
            }
        });
    }
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .feature-card, .service-card, .testimonial-card, .about-feature, .contact-detail {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .feature-card.show, .service-card.show, .testimonial-card.show, .about-feature.show, .contact-detail.show {
            opacity: 1;
            transform: translateY(0);
        }
        
        .feature-card:nth-child(1), .service-card:nth-child(1), .testimonial-card:nth-child(1) {
            transition-delay: 0.1s;
        }
        
        .feature-card:nth-child(2), .service-card:nth-child(2), .testimonial-card:nth-child(2) {
            transition-delay: 0.2s;
        }
        
        .feature-card:nth-child(3), .service-card:nth-child(3), .testimonial-card:nth-child(3) {
            transition-delay: 0.3s;
        }
        
        .feature-card:nth-child(4), .service-card:nth-child(4) {
            transition-delay: 0.4s;
        }
        
        .feature-card:nth-child(5), .service-card:nth-child(5) {
            transition-delay: 0.5s;
        }
        
        .feature-card:nth-child(6), .service-card:nth-child(6) {
            transition-delay: 0.6s;
        }
    `;
    document.head.appendChild(style);
    
    window.addEventListener('scroll', checkScroll);
    
    // Initial check
    checkScroll();
    
    // Form validation
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            let isValid = true;
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            const privacy = document.getElementById('privacy');
            
            // Reset previous error messages
            const errorMessages = document.querySelectorAll('.error-message');
            errorMessages.forEach(msg => msg.remove());
            
            // Reset input styles
            const inputs = contactForm.querySelectorAll('input, textarea, select');
            inputs.forEach(input => {
                input.style.borderColor = '';
            });
            
            // Validate name
            if (!name.value.trim()) {
                showError(name, 'Por favor, ingresa tu nombre completo');
                isValid = false;
            }
            
            // Validate email
            if (!email.value.trim() || !isValidEmail(email.value)) {
                showError(email, 'Por favor, ingresa un correo electrónico válido');
                isValid = false;
            }
            
            // Validate message
            if (!message.value.trim()) {
                showError(message, 'Por favor, escribe tu mensaje');
                isValid = false;
            }
            
            // Validate privacy policy
            if (!privacy.checked) {
                showError(privacy.parentElement, 'Debes aceptar la política de privacidad');
                isValid = false;
            }
            
            // If form is valid, submit
            if (isValid) {
                // Here you would normally send the data to a server
                // For now, we'll just show a success message
                
                // Create success message
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.innerHTML = `
                    <i class="fas fa-check-circle"></i>
                    <p>¡Gracias por tu mensaje! Te responderemos a la brevedad.</p>
                `;
                
                // Replace form with success message
                contactForm.innerHTML = '';
                contactForm.appendChild(successMessage);
                
                // Add CSS for success message
                const style = document.createElement('style');
                style.textContent = `
                    .success-message {
                        text-align: center;
                        padding: 2rem;
                    }
                    
                    .success-message i {
                        color: var(--accent-color);
                        font-size: 3rem;
                        margin-bottom: 1rem;
                    }
                    
                    .success-message p {
                        font-size: 1.2rem;
                    }
                `;
                document.head.appendChild(style);
                
                console.log('Form submitted successfully');
            }
        });
    }
    
    // Helper function to validate email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Helper function to show error messages
    function showError(element, message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        
        // Add CSS for error message
        errorDiv.style.color = '#e74c3c';
        errorDiv.style.fontSize = '0.9rem';
        errorDiv.style.marginTop = '0.5rem';
        
        // Insert error message after the element
        element.parentNode.insertBefore(errorDiv, element.nextSibling);
        
        // Highlight the input
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA' || element.tagName === 'SELECT') {
            element.style.borderColor = '#e74c3c';
        }
    }
});

const isAboutPage = document.querySelector('.about-hero');

if (isAboutPage) {
    // Animate elements on scroll for about page
    const animateAboutElements = document.querySelectorAll('.timeline-item, .value-card, .team-member, .certification-item');
    
    function checkAboutScroll() {
        const triggerBottom = window.innerHeight * 0.8;
        
        animateAboutElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                element.classList.add('show');
            }
        });
    }
    
    // Add CSS for animations
    const aboutStyle = document.createElement('style');
    aboutStyle.textContent = `
        .timeline-item, .value-card, .team-member, .certification-item {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .timeline-item.show, .value-card.show, .team-member.show, .certification-item.show {
            opacity: 1;
            transform: translateY(0);
        }
        
        .timeline-item:nth-child(1) {
            transition-delay: 0.1s;
        }
        
        .timeline-item:nth-child(2) {
            transition-delay: 0.2s;
        }
        
        .timeline-item:nth-child(3) {
            transition-delay: 0.3s;
        }
        
        .timeline-item:nth-child(4) {
            transition-delay: 0.4s;
        }
        
        .timeline-item:nth-child(5) {
            transition-delay: 0.5s;
        }
        
        .value-card:nth-child(1) {
            transition-delay: 0.1s;
        }
        
        .value-card:nth-child(2) {
            transition-delay: 0.2s;
        }
        
        .value-card:nth-child(3) {
            transition-delay: 0.3s;
        }
        
        .value-card:nth-child(4) {
            transition-delay: 0.4s;
        }
        
        .value-card:nth-child(5) {
            transition-delay: 0.5s;
        }
        
        .value-card:nth-child(6) {
            transition-delay: 0.6s;
        }
        
        .team-member:nth-child(1) {
            transition-delay: 0.1s;
        }
        
        .team-member:nth-child(2) {
            transition-delay: 0.2s;
        }
        
        .team-member:nth-child(3) {
            transition-delay: 0.3s;
        }
        
        .team-member:nth-child(4) {
            transition-delay: 0.4s;
        }
        
        .team-member:nth-child(5) {
            transition-delay: 0.5s;
        }
        
        .team-member:nth-child(6) {
            transition-delay: 0.6s;
        }
        
        .certification-item:nth-child(1) {
            transition-delay: 0.1s;
        }
        
        .certification-item:nth-child(2) {
            transition-delay: 0.2s;
        }
        
        .certification-item:nth-child(3) {
            transition-delay: 0.3s;
        }
        
        .certification-item:nth-child(4) {
            transition-delay: 0.4s;
        }
    `;
    document.head.appendChild(aboutStyle);
    
    window.addEventListener('scroll', checkAboutScroll);
    
    // Initial check
    checkAboutScroll();
    
    console.log('About page script loaded');
}