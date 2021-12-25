
const form = document.getElementById('form');
const form2 = document.getElementById('form-2');
const email = document.getElementById('email');
const ctaError = document.getElementById('cta-error');
const signupError = document.getElementById('signup-error');

form.addEventListener('submit', e => {
	e.preventDefault();
	const emailVal = email.value;

	// check if it is a valid email
	if (!validateEmail(emailVal)) {
		form.classList.add('error');
		ctaError.style.display = 'block'

	} else {
		form.classList.remove('error');
		document.body.innerHTML = `<div style="display:flex; align-items: center; justify-content: center;"><h1>Thank you!</h1></div>`;
	}
});

form2.addEventListener('submit', e => {
	e.preventDefault();
	const emailVal = email.value;

	// check if it is a valid email
	if (!validateEmail(emailVal)) {
		form2.classList.add('error');
		signupError.style.display = 'block'

	} else {
		form2.classList.remove('error');
		document.body.innerHTML = `<div style="display:flex; align-items: center; justify-content: center;"><h1>Thank you!</h1></div>`;
	}
});

function validateEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}