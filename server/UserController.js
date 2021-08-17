const userData = require('./userData.db');

let globalUserId = 2;
let globalPostId = 2;

module.exports = {
	getUser: (req,res)=>{
		let {username, avatar} = userData
		let userDisplay={
			userName
		}
		res.status(200).send(userDisplay)
	},
	getPost: (req,res)=>{
		let {post, comment} =userData
		let postObj={
			post,
			comment
		}
		res.status(200).send(post)
	},
	addUser: (req, res) => {
		let {username, password, avatar}=req.body
		let newUser={
			id: ++globalUserId,
			username,
			password,
		}
		userData.push(newUser)
		res.status(200).send("user created")
	},
	addPost: (req, res) => {
		let {post, comment} =userData
		let postObj={
			postID: ++globalPostID,
			post,
			comment
		}
		res.status(200).send(post)
	},
	addComment: (req, res) => {
		let {id, comment_text, comment_Id, post_Id}=req.body
		let newComment ={
			comment_text,
			comment_Id,
			post_Id
		}
		userData.id.comments.push(newComment)

		res.status(200).send("comment created")
	},
	deleteComment: (req, res) => {
	},
	deleteUser: (req, res) => {
	},
	updateUser: (req, res) => {
		let {id} =req.params;
		let index=userData.findIndex(e=>e.id===+id)
		userData.splice(index,1)
	},
	updateComment: (req, res) => {},
	updatePost: (req, res) => {},
};
