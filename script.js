
// mouse scroll
document.querySelector('.scroll-down').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
    });
});


// send message
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contactForm');
    const button = form.querySelector('.send-btn');

    button.addEventListener('click', function(e) {
        e.preventDefault(); // prevent page reload

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        if(!name || !email || !message) {
            alert("Please fill in all required fields!");
            alert("Then submit...");
            return;
        }

        // For now, just log the data
        console.log({
            name: name,
            email: email,
            subject: subject,
            message: message
        });

        alert("Message sent successfully!");

        // Clear the form
        form.querySelectorAll('input, textarea').forEach(input => input.value = '');
    });
});




lucide.createIcons();


// send message activation 

  emailjs.init("0tzDQ_MZDTkBeLum7"); // Replace with your EmailJS User ID

  document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const templateParams = {
      from_name: document.getElementById("name").value,
      from_email: document.getElementById("email").value,
      message: document.getElementById("message").value
    };

    emailjs.send("Service_7xdwaq6", "template_zhn5534", templateParams)
      .then(() => alert("Message sent successfully!"))
      .catch(err => alert("Error sending message: " + err));
  });

