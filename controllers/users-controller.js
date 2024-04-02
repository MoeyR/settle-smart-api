
const knex = require("knex")(require("../knexfile"));

//Get all posts for a user
const getUserPosts = async (req, res) => {
    const userId = req.params.id;
    try {
        //Check if user exist
        const user = await knex("users").where("id", userId).first();
        if(!user){
            return res.status(404).json({message: "User not found"});
        }
        //Retreive all posts for the given user by ID
        const posts = await knex("posts")
        .where("user_id", userId)
        .select(
            "posts.id",
                "users.user_name",
                "posts.post_title",
                "posts.post_content",
                "posts.post_collects",
                "posts.post_image",
                "posts.post_location"
        )
        .join("users", "posts.user_id", "users.id")

        res.status(200).json(posts);
    } catch (error) {
        res.status(500).send(`Unable to fetch posts data, ${error}`);
    }
};


module.exports ={
    getUserPosts,
};