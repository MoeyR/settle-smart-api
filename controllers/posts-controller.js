const knex = require("knex")(require("../knexfile"));

const getOnePost = async (req, res)=>{
    try {
        const postFound = await knex
            .select(
                "posts.id",
                "users.user_name",
                "posts.post_title",
                "posts.post_content",
                "posts.post_collects",
                "posts.post_image",
                "posts.post_location"
            )
            .from("posts")
            .join("users", "posts.user_id", "users.id" )
            .where({"posts.id": req.params.id});

        if(postFound.length === 0){
            return res.status(404).json({
                message: `Post with ID ${req.params.id} not found`,
            });
        }

        res.status(200).json(postFound[0]);
    } catch (error) {
       res.status(500).json({
        message: `Unable to retrieve post data for post with ID ${req.params.id}`,
       }); 
    }
};

module.exports ={
    getOnePost,
};