// Toggle Password Visibility
function togglePassword() {
    const passwordField = document.getElementById("password");
    const toggleIcon = document.querySelector(".toggle-password");
  
    if (passwordField.type === "password") {
      passwordField.type = "text";
      toggleIcon.textContent = "🙈"; // Change icon
    } else {
      passwordField.type = "password";
      toggleIcon.textContent = "👁️"; // Change back
    }
  }
  
  // Form Submit Handler
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevents the form from submitting the traditional way
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Example credentials check
    if (username === "admin" && password === "password123") {
      alert("Login successful!");
      window.location.href = "dashboard.html";  // Redirect to the dashboard page
    } else {
      alert("Invalid username or password!");  // Show error message if credentials are incorrect
    }
  });
  