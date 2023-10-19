// JS

// Add a smooth scroll effect to the navigation bar
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    // Get the href attribute of the link
    const href = this.getAttribute('href');

    // Scroll to the element with the specified href attribute
    window.scrollTo({
      top: document.querySelector(href).offsetTop,
      behavior: 'smooth'
    });
  });
});
