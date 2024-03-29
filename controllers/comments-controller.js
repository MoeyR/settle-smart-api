const knex = require("knex")(require("../knexfile"));

const addNewComment = async (req, res) => {
    const {user_id, post_id, comment, comment_likes} = req.body;
    if(!user_id || !post_id || !comment){
        return res.status(400).send("Please provide all required fields");
    }

    try {
        const newComment = await knex("comments").insert(req.body);
        const newCommentId = newComment[0];
        const createdComment = await knex("comments").where({id: newCommentId});
        res.status(201).json(createdComment);
    } catch (error) {
        res.status(500).send(`Error in adding comment: ${error}`);
    }
};

const removeComment = async (req, res) => {
    try {
        const commentDeleted = await knex("comments")
            .where({id : req.params.commentId})
            .delete();

        if(commentDeleted === 0){
            return res.status(404).json({ message: `comment with ID ${req.params.id} not found` })
        }
        
        //no content response
        res.sendStatus(204);

    } catch (error) {
        res.status(500).json({message: `Unable to delete comment, ${error}`})
    }
};

module.exports = {
    addNewComment,
    removeComment,
}