const router = require("express").Router();
const postsController = require("../controllers/posts-controller");
const commentsController = require("../controllers/comments-controller");


router
    .route("/")
    .get(postsController.getPosts)
    .post(postsController.upload.single('post_image'), postsController.addNewPost);

router
    .route("/:id")
    .get(postsController.getOnePost);

router
    .route("/:id/comments")
    .get(postsController.getPostComments)
    .post(commentsController.addNewComment);

router
    .route("/:id/comments/:commentId")
    .delete(commentsController.removeComment);
    
module.exports = router;
