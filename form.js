document.getElementById("regForm").addEventListener("submit", function (event) {
  // Stop the form from submitting until all checks pass
  event.preventDefault();

  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var mobile = document.getElementById("mobile").value.trim();
  var username = document.getElementById("username").value.trim();
  var password = document.getElementById("password").value;

  // 1. Name: not empty, only letters and spaces
  if (name === "") {
    alert("Name cannot be empty.");
    return;
  }
  if (!/^[A-Za-z ]+$/.test(name)) {
    alert("Name can contain only letters and spaces.");
    return;
  }

  // 2. Email: basic format check
  if (email === "") {
    alert("Email cannot be empty.");
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // 3. Mobile: exactly 10 digits
  if (!/^[0-9]{10}$/.test(mobile)) {
    alert("Mobile number must contain exactly 10 digits.");
    return;
  }

  // 4. Username: not empty
  if (username === "") {
    alert("Username cannot be empty.");
    return;
  }

  // 5. Password: 8+ chars, uppercase, lowercase, digit, special character
  if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    return;
  }
  if (!/[A-Z]/.test(password)) {
    alert("Password must contain at least one uppercase letter.");
    return;
  }
  if (!/[a-z]/.test(password)) {
    alert("Password must contain at least one lowercase letter.");
    return;
  }
  if (!/[0-9]/.test(password)) {
    alert("Password must contain at least one digit.");
    return;
  }
  if (!/[^A-Za-z0-9]/.test(password)) {
    alert("Password must contain at least one special character.");
    return;
  }

  // All checks passed
  alert("Form submitted successfully!");
  document.getElementById("regForm").reset();
});
