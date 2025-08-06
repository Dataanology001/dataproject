// Navigation functionality
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar")
  const navToggle = document.getElementById("nav-toggle")
  const navMenu = document.getElementById("nav-menu")
  const brandText = document.querySelector(".brand-text")
  const navLinks = document.querySelectorAll(".nav-link")
  const navBars = document.querySelectorAll(".bar")

  // Determine if it's the homepage to set initial navbar state
  const isHomepage = window.location.pathname === "/" || window.location.pathname.endsWith("index.html")
  if (isHomepage) {
    document.body.classList.add("homepage")
  } else {
    // For non-homepage, navbar should start with white background and dark text
    navbar.classList.add("scrolled")
  }

  // Navbar scroll effect
  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled")
    } else if (isHomepage) {
      // Only remove scrolled class if it's the homepage and at the top
      navbar.classList.remove("scrolled")
    }
  }

  // Initial check in case the page is loaded with scroll
  handleScroll()
  window.addEventListener("scroll", handleScroll)

  // Mobile menu toggle
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active")
    navMenu.classList.toggle("active")
  })

  // Close mobile menu when clicking on a link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.classList.remove("active")
      navMenu.classList.remove("active")
    })
  })

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    const isClickInsideNav = navbar.contains(event.target)
    if (!isClickInsideNav && navMenu.classList.contains("active")) {
      navToggle.classList.remove("active")
      navMenu.classList.remove("active")
    }
  })

  // Smooth scrolling for anchor links (if any are added later)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Form submission handling (example for contact form)
  const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent page reload

    const formData = new FormData(contactForm);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    })
      .then(async (response) => {
        if (response.ok) {
          // Show success popup
          alert(
            "🎉 Amazing! Your message just flowed into our ecosystem! We'll connect back to you faster than data through fiber optics! ✨"
          );
          // Reset the form
          contactForm.reset();
        } else {
          const resData = await response.json();
          console.error("Error response:", resData);
          alert("❌ Oops! Submission failed. Please try again or check your access key.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("⚠️ There was an error submitting the form. Please try again later.");
      });
  });
}


// Show popup
function showSuccessPopup() {
  document.getElementById("success-popup").style.display = "flex";
}

// Close popup
function closePopup() {
  document.getElementById("success-popup").style.display = "none";
}


  // Newsletter form handling
  const newsletterForm = document.querySelector(".newsletter-form")
  if (newsletterForm) {
    const newsletterButton = newsletterForm.querySelector(".newsletter-button")
    const newsletterInput = newsletterForm.querySelector(".newsletter-input")

    newsletterButton.addEventListener("click", (e) => {
      e.preventDefault()
      const email = newsletterInput.value.trim()

      if (!email) {
        alert("Please enter your email address!")
        return
      }

      if (!isValidEmail(email)) {
        alert("Please enter a valid email address!")
        return
      }

      alert("🎉 Welcome to our data ecosystem! You're now part of our growing community! 🌱")
      newsletterInput.value = ""
    })
  }

  // Email validation helper
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Animate elements on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe elements for animation
  const animateElements = document.querySelectorAll(
    ".service-card, .expertise-card, .value-card, .industry-card, .blog-post, .process-card",
  )
  animateElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })

  // Add loading animation to buttons
  const buttons = document.querySelectorAll("button, .cta-button, .service-button, .emergency-button")
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // Add a subtle loading effect
      this.style.transform = "scale(0.98)"

      setTimeout(() => {
        this.style.transform = "scale(1)"
      }, 150)
    })
  })

  // Parallax effect for hero section (only on homepage)
  if (isHomepage) {
    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset
      const heroShapes = document.querySelectorAll(".organic-shape")

      heroShapes.forEach((shape, index) => {
        const speed = 0.5 + index * 0.1
        shape.style.transform = `translateY(${scrolled * speed}px)`
      })
    })
  }

  // Add hover effects to cards
  const cards = document.querySelectorAll(
    ".service-card, .expertise-card, .value-card, .industry-card, .team-card, .blog-post, .main-service-card",
  )
  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px) scale(1.02)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })
  })

  // Dynamic year in footer
  const currentYear = new Date().getFullYear()
  const footerText = document.querySelector(".footer-bottom p")
  if (footerText) {
    footerText.innerHTML = footerText.innerHTML.replace("2024", currentYear)
  }

  // Add typing effect to hero title (optional enhancement)
  const heroTitleSpan = document.querySelector(".hero-title .gradient-text")
  if (heroTitleSpan && window.innerWidth > 768 && isHomepage) {
    const text = heroTitleSpan.textContent
    heroTitleSpan.textContent = ""
    let i = 0

    function typeWriter() {
      if (i < text.length) {
        heroTitleSpan.textContent += text.charAt(i)
        i++
        setTimeout(typeWriter, 100)
      }
    }

    // Start typing effect after a short delay
    setTimeout(typeWriter, 1000)
  }
})
