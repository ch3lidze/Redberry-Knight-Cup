const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phoneValue = document.getElementById('phone');
const dateValue = document.getElementById('date');
var letters = /^[A-Za-z]+$/;

form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
});

const element = document.getElementById("successBtn");
element.addEventListener("click", myFunction);
function myFunction() {
	document.getElementById("demo").innerHTML = "Hello World";
  }

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const phoneValue = phone.value.trim();
	const dateValue = date.value.trim();
	

	if(usernameValue === '' || usernameValue.length < 3 ) {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
 
	if(emailValue === '' ) {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
		
	}

	if(phoneValue === '') {
		setErrorFor(phone, 'Username cannot be blank');
	} else {
		setSuccessFor(phone);
		
	}
	if(dateValue === '') {
		setErrorFor(date, 'Username cannot be blank');
	} else {
		setSuccessFor(date);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


