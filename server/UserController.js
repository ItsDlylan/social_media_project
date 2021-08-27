const userData = require('./userData.json');

let globalUserId = 3;
let globalPostId = 3;

module.exports = {
	getUser: (req, res) => {
		// Grabs the data from the form
		let { username, password } = req.body;

		// Finds the index of the object inside of userData.json
		let index = userData.findIndex(
			(x) => x.username.toLowerCase() === username.toLowerCase(),
		);

		// if the index is not -1 meaning it found the index inside of the array. then start matching the password.
		if (index !== -1) {
			if (
				userData[index].password.toLowerCase() ===
				password.toLowerCase()
			) {
				console.log('password was correct and so was the username');
				// send all but the password to the front end.
				const userSentData = {
					id: userData[index].id,
					username: userData[index].username,
					avatar: userData[index].avatar,
					posts: userData[index].posts,
					comments: userData[index].comments,
				};
				res.status(200).send(userSentData);
			} else {
				console.log('username was correct but the password wasnt');
				res.status(400).send('Password is not correct');
			}
		} else {
			res.status(400).send('username is not in the data');
			console.log('username is not in the data.');
		}
	},
	getPost: (req, res) => {
		let { post, comment } = userData;
		let postObj = {
			post,
			comment,
		};
		res.status(200).send(post);
	},
	addUser: (req, res) => {
		let { username, password, avatar } = req.body;
		let newUser = {
			id: ++globalUserId,
			username,
			password,
		};
		userData.push(newUser);
		res.status(200).send('user created');
	},
	addPost: (req, res) => {
		let { post, comment } = userData;
		let postObj = {
			postID: ++globalPostID,
			post,
			comment,
		};
		res.status(200).send(post);
	},
	addComment: (req, res) => {
		let { id, comment_text, comment_Id, post_Id } = req.body;
		let newComment = {
			comment_text,
			comment_Id,
			post_Id,
		};
		userData.id.comments.push(newComment);

		res.status(200).send('comment created');
	},
	deleteComment: (req, res) => {
		console.log(req)
		res.status(200).send('comment deleted')
	},
	deleteUser: (req, res) => {},
	updateUser: (req, res) => {
		let { id } = req.params;
		let index = userData.findIndex((e) => e.id === +id);
		userData.splice(index, 1);
	},
	updateComment: (req, res) => {},
	updatePost: (req, res) => {},
};
