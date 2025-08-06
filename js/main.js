// Navigation functionality
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Determine if it's the homepage to set initial navbar state
  const isHomepage = window.location.pathname === "/" || window.location.pathname.endsWith("index.html");
  if (isHomepage) {
    document.body.classList.add("homepage");
  } else {
    navbar.classList.add("scrolled");
  }

  // Navbar scroll effect
  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else if (isHomepage) {
      navbar.classList.remove("scrolled");
    }
  };

  // Initial check in case the page is loaded with scroll
  handleScroll();
  window.addEventListener("scroll", handleScroll);

  // Mobile menu toggle
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Close mobile menu when clicking on a link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    const isClickInsideNav = navbar.contains(event.target);
    if (!isClickInsideNav && navMenu.classList.contains("active")) {
      navToggle.classList.remove("active");
      navMenu.classList.remove("active");
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Form submission handling for contact form
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(contactForm);
      const name = formData.get("name").trim();
      const email = formData.get("email").trim();
      const message = formData.get("message").trim();

      // Simple validation
      if (!name || !email || !message) {
        alert("Please fill in all required fields!");
        return;
      }

      // Submit the form to Web3Forms
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            showSuccessPopup();
            contactForm.reset();
          } else {
            alert("⚠️ Oops! Something went wrong. Please try again.");
          }
        })
        .catch((error) => {
          console.error("Submission error:", error);
          alert("⚠️ Network error. Please try again later.");
        });
    });
  }

  // Show popup
  window.showSuccessPopup = function () {
    document.getElementById("success-popup").style.display = "flex";
  };

  // Close popup
  window.closePopup = function () {
    document.getElementById("success-popup").style.display = "none";
  };

  // Email validation helper (used for newsletter, if you add it)
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Animate elements on scroll (example elements)
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  const animateElements = document.querySelectorAll(
    ".service-card, .expertise-card, .value-card, .industry-card, .blog-post, .process-card"
  );

  animateElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

  // Add loading animation to buttons
  const buttons = document.querySelectorAll("button, .cta-button, .service-button, .emergency-button");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      this.style.transform = "scale(0.98)";
      setTimeout(() => {
        this.style.transform = "scale(1)";
      }, 150);
    });
  });

  // Parallax effect for hero section (only on homepage)
  if (isHomepage) {
    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset;
      const heroShapes = document.querySelectorAll(".organic-shape");

      heroShapes.forEach((shape, index) => {
        const speed = 0.5 + index * 0.1;
        shape.style.transform = `translateY(${scrolled * speed}px)`;
      });
    });
  }

  // Add hover effects to cards
  const cards = document.querySelectorAll(
    ".service-card, .expertise-card, .value-card, .industry-card, .team-card, .blog-post, .main-service-card"
  );

  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });

  // Dynamic year in footer (replace 2024 with current year)
  const currentYear = new Date().getFullYear();
  const footerText = document.querySelector(".footer-bottom p");
  if (footerText) {
    footerText.innerHTML = footerText.innerHTML.replace("2024", currentYear);
  }

  // Typing effect on hero title (optional)
  const heroTitleSpan = document.querySelector(".hero-title .gradient-text");
  if (heroTitleSpan && window.innerWidth > 768 && isHomepage) {
    const text = heroTitleSpan.textContent;
    heroTitleSpan.textContent = "";
    let i = 0;

    function typeWriter() {
      if (i < text.length) {
        heroTitleSpan.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    }

    setTimeout(typeWriter, 1000);
  }
});
