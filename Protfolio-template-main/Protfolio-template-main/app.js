const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

// Contact Form Submission using EmailJS
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Prepare EmailJS parameters
    const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        to_name: 'Yasika', // Your name or recipient name
    };

    // Send email using EmailJS
    emailjs.send('your_service_id_here', 'your_template_id_here', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById('form-status').innerHTML = '<p style="color: green;">Message sent successfully!</p>';
            document.getElementById('contact-form').reset(); // Reset form
        }, function(error) {
            console.log('FAILED...', error);
            document.getElementById('form-status').innerHTML = '<p style="color: red;">Failed to send message. Please try again.</p>';
        });
});
