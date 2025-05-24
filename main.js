import emailjs from 'emailjs-com';

emailjs.init('your-user-id');

window.sendEmail = function() {
  var templateParams = {
    name: document.querySelector('input[name="name"]').value,
    email: document.querySelector('input[name="email"]').value,
    message: document.querySelector('textarea[name="message"]').value
  };
  emailjs.send('your-service-id', 'your-template-id', templateParams)
    .then(() => {
      document.getElementById('form-message').innerText = 'Message sent successfully!';
      document.getElementById('contact-form').reset();
    }, () => {
      document.getElementById('form-message').innerText = 'Failed to send message. Try again.';
    });
};