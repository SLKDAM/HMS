// Optional: This script can be used to add functionality like tooltips for social icons
document.addEventListener("DOMContentLoaded", function() {
    const socialIcons = document.querySelectorAll(".social-icon");
  
    socialIcons.forEach(icon => {
      icon.addEventListener("mouseenter", function() {
        // Tooltip text could be added or shown on hover
        icon.setAttribute("title", `Follow us on ${icon.textContent.trim()}`);
      });
    });
  });
  