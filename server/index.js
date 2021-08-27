const express = require('express');
const cors = require('cors');
const userCtrl = require('./UserController');
const app = express();
app.use(express.json());
app.use(cors());

let baseURL = '/users';

// You will need endpoints  delete a comment, delete a post, delete a user, update a user, post or comment.

//post users to check
app.post(`${baseURL}`, userCtrl.getUser);

//get posts
app.get(`${baseURL}/post`, userCtrl.getPost);

// add user
app.post(`${baseURL}/add`, userCtrl.addUser);

// add post
app.post(`${baseURL}/post`, userCtrl.addPost);

// add comment
app.post(`${baseURL}/post/comment`, userCtrl.addComment);

// delete comment
app.delete(`${baseURL}/post/comment/:commentid`, userCtrl.deleteComment);

// Delete user entirely.
app.delete(`${baseURL}/:userid`, userCtrl.deleteUser);

// Update user data
app.put(`${baseURL}/:id`, userCtrl.updateUser);

// update post
app.put(`${baseURL}/post/:postid`, userCtrl.updatePost);

// update comment
app.put(`${baseURL}/post/comment/:commentid`, userCtrl.updateComment);

app.listen(3000, () => {
	console.log(`Server is now lying inside of 3000`);
});
