// Trevia Tour Landing Page - JavaScript

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Preloader
    const preloader = document.querySelector(".preloader")
  
    window.addEventListener("load", () => {
      setTimeout(() => {
        preloader.style.opacity = "0"
        setTimeout(() => {
          preloader.style.display = "none"
        }, 500)
      }, 2000)
    })}) 


document.addEventListener('DOMContentLoaded', function() {
  // Add subtle parallax effect on mouse move
  const decorations = document.querySelector('.background-decorations');
  const airplane = document.querySelector('.airplane');
  
  document.addEventListener('mousemove', function(e) {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    // Subtle parallax for clouds
    const clouds = document.querySelectorAll('.cloud');
    clouds.forEach((cloud, index) => {
      const speed = (index + 1) * 5;
      const x = (mouseX - 0.5) * speed;
      const y = (mouseY - 0.5) * speed;
      cloud.style.transform = `translate(${x}px, ${y}px)`;
    });
    
    // Parallax for stars
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
      const speed = (index + 1) * 3;
      const x = (mouseX - 0.5) * speed;
      const y = (mouseY - 0.5) * speed;
      star.style.transform = `translate(${x}px, ${y}px)`;
    });
  });

  // Add ripple effect to buttons on click
  const buttons = document.querySelectorAll('.social-button');
  
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple-effect 0.6s ease-out;
        pointer-events: none;
      `;
      
      button.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 600);
    });
  });

  // Add ripple animation keyframes dynamically
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ripple-effect {
      to {
        transform: scale(2);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  // Intersection Observer for re-triggering animations (if needed in future)
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe fade-in elements
  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });

  // Touch device detection for hover states
  if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
  }
});
