const knex = require("knex")(require("../knexfile"));

const getOnePost = async (req, res) => {
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
            .join("users", "posts.user_id", "users.id")
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

//Get all posts
const getPosts = async (req, res) => {
    try {
        const postsData = await knex
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
            .join("users", "posts.user_id", "users.id")
        
        res.status(200).json(postsData);
    } catch (error) {
        res.status(500).send(`Unable to fetch posts data: ${error}`)
    }
};


const addNewPost = async (req, res) => {
    const {user_name, post_title, post_content, post_collects, post_image, post_location} = req.body;

    if(!post_title || !post_content || !post_collects || !post_image || !post_location){
        return res.status(400).send("Please provide all required fields");
    }

    try {
        const result = await knex("posts").insert(req.body)
        const newPostId = result[0];
        const createdPost = await knex("posts").where({id: newPostId});
        
        res.status(201).json(createdPost);
    } catch (error) {
        res.status(500).send("Error in creating new post");
    }
};

module.exports ={
    getOnePost,
    getPosts,
    addNewPost,
};