const form = document.getElementById('contact-Form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Create email body
    const emailBody = `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
    `;

    // Email sending logic (replace with your email service provider's API or library)
    // For example, using a library like EmailJS:
    EmailJS.send('service_6iyq4ub'{
        to_email: 'anshifniju369@gmail.com', // Replace with your email address
        from_name: name,
        from_email: email,
        subject: subject,
        message: message
    })
    .then(() => {
        alert('Message sent successfully!');
        form.reset(); // Clear the form fields
    })
    .catch(error => {
        alert('Error sending message: ' + error);
    });
});