const express = require('express');
const cors = require('cors');
const userCtrl = require('./UserController');
const app = express();
app.use(express.json());
app.use(cors());

let baseURL = '/api';

// You will need endpoints  delete a comment, delete a post, delete a user, update a user, post or comment.

// add user
app.post(`${baseURL}/user/`, userCtrl.addUser);

// add post
app.post(`${baseURL}/user/post`, userCtrl.addPost);

// add comment
app.post(`${baseURL}/user/post/comment`, userCtrl.addComment);

// delete comment
app.delete(`{baseURL}/user/post/comment/:commentid`, userCtrl.deleteComment);

// Delete user entirely.
app.delete(`{baseURL}/user/:userid`, userCtrl.deleteUser);

// Update user data
app.put(`{baseURL}/user`, userCtrl.updateUser);

// update post
app.put(`{baseURL}/user/post/:postid`, userCtrl.updatePost);

// update comment
app.put(`{baseURL}/user/post/comment/:commentid`, userCtrl.updateComment);

app.listen(4000, () => {
	console.log(`Server is now lying inside of 4000`);
});
