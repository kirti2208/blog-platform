const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const User = require("./models/User");
const Blog = require("./models/Blog");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
"mongodb://127.0.0.1:27017/blogplatform"
);

app.post("/register",async(req,res)=>{

    const user =
    new User(req.body);

    await user.save();

    res.json({
        message:"User Registered"
    });

});

app.post("/login",async(req,res)=>{

    const user =
    await User.findOne({
        email:req.body.email,
        password:req.body.password
    });

    if(user){

        res.json({
            message:"Login Success"
        });

    }else{

        res.json({
            message:"Invalid Credentials"
        });

    }

});

app.post("/blogs",async(req,res)=>{

    const blog =
    new Blog(req.body);

    await blog.save();

    res.json({
        message:"Blog Created"
    });

});

app.get("/blogs",async(req,res)=>{

    const blogs =
    await Blog.find();

    res.json(blogs);

});

app.listen(5000,()=>{

    console.log(
    "Server Running on Port 5000"
    );

});