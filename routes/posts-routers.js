const router = require("express").Router();
const postsController = require("../controllers/posts-controller");

router.route("/posts").get(postsController.getPosts);
router.route("/posts/:id").get(postsController.getOnePost);


module.exports = router;
