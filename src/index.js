const DOMSTRINGS = {
	signupmodal_dim: '#signupmodal_dim',
	modal_signup: '#modal_signup',
	sign_upbtn: '#signUp',
};

document.querySelector(DOMSTRINGS.sign_upbtn).addEventListener('click', (e) => {
	console.log('hit');
	document.querySelector(DOMSTRINGS.modal_signup).classList.add('active');
	document
		.querySelector(DOMSTRINGS.signupmodal_dim)
		.classList.toggle('active');
});
