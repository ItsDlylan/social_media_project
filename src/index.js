const baseURL = 'http://localhost:4000/';
const DOMSTRINGS = {
	signupmodal_dim: '#signupmodal_dim',
	modal_signup: '#modal_signup',
	sign_upbtn: '#signUp',
	createUserForm: '#user_create-form',
	sign_in_form: '#sign_in_form',
	signin_usernamefield: '#signin_username',
	signin_passwordfield: '#signin_password',
};
let user = {
	userid: undefined,
	username: '',
	avatar: '',
	posts: {},
	comments: {}
}

// ERROR CALL BACK
const errCallback = (err) => {
	console.log(err)
	// document.querySelector(
	// 	DOMmodal.modalHeader,
	// ).innerHTML = `Error Code: ${err.response.status}`;
	// document.querySelector(DOMmodal.modalDescriptions).innerHTML =
	// 	err.response.data;
	// document.querySelector(DOMmodal.modal).classList.add('active');
	// TODO CALLBACK for ERRORS
};

// FUNCTIONS
// grabUserData = async function(){
// 	axios.get(`${baseURL}users`)
// }

// EVENT LISTENERS

// Pop up the sign up form
document.querySelector(DOMSTRINGS.sign_upbtn).addEventListener('click', (e) => {
	document.querySelector(DOMSTRINGS.modal_signup).classList.add('active');
	document
		.querySelector(DOMSTRINGS.signupmodal_dim)
		.classList.toggle('active');
});
// Create User Form
document
	.querySelector(DOMSTRINGS.createUserForm)
	.addEventListener('submit', (e) => {
		e.preventDefault();
		document
			.querySelector(DOMSTRINGS.modal_signup)
			.classList.remove('active');
		document
			.querySelector(DOMSTRINGS.signupmodal_dim)
			.classList.toggle('active');

		//  axios post, return modal saying user created.
	});

// Sign In Form
document
	.querySelector(DOMSTRINGS.sign_in_form)
	.addEventListener('submit', (e) => {
		e.preventDefault();
		document
			.querySelector(DOMSTRINGS.sign_in_form)
			.classList.toggle('loading');
		setTimeout(() => {
			document
				.querySelector(DOMSTRINGS.sign_in_form)
				.classList.toggle('loading');
		}, 5000);

		let loginInfo = {
			username: document.querySelector(DOMSTRINGS.signin_usernamefield)
				.value,
			password: document.querySelector(DOMSTRINGS.signin_passwordfield)
				.value,
		};
		
		axios
			.post(`${baseURL}users`, loginInfo)
			.then((res) => {
				let {id, username, avatar, posts, comments } = res.data
				// console.log(id,username,avatar,posts,comments)
				user = {
					id,
					username,
					avatar,
					posts,
					comments
				}
				
				// User the user data to set up the social media site.
				
				


			})
			.catch(errCallback);


		// axios .get user data update HTML to host home of the site.
		// display load sign while it gets all of the html updated.

			
		// Reset Input Fields.
		document.querySelector(DOMSTRINGS.signin_usernamefield).value = '';
		document.querySelector(DOMSTRINGS.signin_passwordfield).value = '';
	});

