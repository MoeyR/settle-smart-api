const knex = require("knex")(require("./knexfile"));
const express = require("express");
const cors = require('cors');
const app = express();
require("dotenv").config();

app.use(express.static('public'));
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5050;

const postsRoutes = require("./routes/posts-routers");

// all posts routes
app.use("/", postsRoutes);

app.listen(PORT, ()=>{
    console.log(`running at http://localhost:${PORT}`);
});
