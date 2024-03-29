const knex = require("knex")(require("../knexfile"));
const {v4:uuidv4} = require('uuid');
const multer = require('multer');

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
        res.status(500).send(`Unable to fetch posts data: ${error}`);
    }
};


//Store post image
const storage = multer.diskStorage({
    destination: function(req, file, callBackFun){
        return callBackFun(null, "public/images");
    },
    filename: function (req, post_image, callBackFun){
        return callBackFun(null, `${uuidv4()}_${post_image.originalname}`)
    }
});

const upload = multer({storage});

const addNewPost = async (req, res) => {
    const {user_id, post_title, post_content, post_collects, post_image, post_location} = req.body;

    // if(!user_id || !post_title || !post_content || !post_location){
    //     return res.status(400).send("Please provide all required fields");
    // }

    const imageName = req.file.filename;
    req.body.post_image = `http://localhost:8080/images/${imageName}`;

    try {
        const newPost = await knex("posts").insert(req.body);
        const newPostId = newPost[0];
        const createdPost = await knex("posts").where({id: newPostId});
        
        res.status(201).json(createdPost);
    } catch (error) {
        res.status(500).send(`Error in creating new post, ${error}`);
    }
};


//Get all comments for a post
const getPostComments = async (req, res) => {
    const postId = req.params.id;
    try {
        //Check if post exist
        const post = await knex("posts").where("id", postId).first();
        if(!post){
            return res.status(404).json({message: "Post not found"});
        }
        //Retreive all comments for the given post by ID
        const comments = await knex("comments")
        .where("post_id", postId)
        .select(
            "comments.id",
            "comments.user_id",
            "users.user_name",
            "comments.comment",
            "comments.comment_likes",
        )
        .join("users", "comments.user_id", "users.id")

        res.status(200).json(comments);
    } catch (error) {
        res.status(500).send(`Unable to fetch comments data, ${error}`);
    }
};


module.exports ={
    getOnePost,
    getPosts,
    addNewPost,
    getPostComments,
    upload,
};