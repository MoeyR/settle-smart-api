const router = require("express").Router();
const usersController = require("../controllers/users-controller");

router
	.route("/:id/posts")
	.get(usersController.getUserPosts)

module.exports = router;