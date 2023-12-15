function submitForm() {
    // Get form values
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var text = document.getElementById('text').value;
  
    // Perform form validation (you can add more validation as needed)
    if (!name || !phone || !email || !text) {
      alert('Please fill in all fields');
      return;
    }
  
    // Perform form submission (you can replace this with your own logic)
    alert('Form submitted successfully!');
  
    // Reset the form after submission
    document.getElementById('contactForm').reset();
  }
  