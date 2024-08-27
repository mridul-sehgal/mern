const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");
const { timeStamp } = require("console");

const app = express();
const PORT = 8000;

//CONNECTION
mongoose.connect('mongodb://127.0.0.1:27017/learning-mongoDB')
.then(()=>console.log("MongoDB Connected"))
.catch((err)=>console.log("Mongo Error",err))

//Schema

const userSchema=new mongoose.Schema({
  firstName:{
    type:String,
    required:true
  },
  lastName:{
    type:String
  },
  email:{
    type:String,
    required:true,
    unique:true,
  },
  jobTitle:{
    type:String
  },
  gender:{
    type:String
  }
},{timestamps:true})

//MODEL

const User=mongoose.model("user",userSchema)

//Middlewares

app.use(express.urlencoded({ extended: false }));

//ROUTES

app.get("/users", async(req, res) => {
  const allDBUsers=await User.find({})
  const html = `
    <ul>
    ${allDBUsers.map((user) => `<li>${user.firstName} - ${user.email}</li>`).join("")}
    </ul>
    `;
  res.send(html);
});

// REST API POINTS

app.get("/api/users", async(req, res) => {
  const allDBUsers=await User.find({})
  return res.json(allDBUsers);
});

app.post("/api/users", async(req, res) => {
  const body = req.body;
  const result=await User.create({
    firstName:body.first_name,
    lastName:body.last_name,
    email:body.email,
    jobTitle:body.job_title,
    gender:body.gender
  })
  console.log("result",result);
  res.status(201).json({msg:"Successfully Created"})
});

app
  .route("/api/users/:id")
  .get(async(req, res) => {
    const user=await User.findById(req.params.id)
    if(!user) return res.status(404).json({msg:"User not found"})
    return res.json(user);
  })
  .patch(async(req, res) => {
    const body=req.body
    await User.findByIdAndUpdate(req.params.id,{lastName:body.last_name})   
    return res.json({ status: "request received"});
    
  })
  .delete(async(req, res) => {
    await User.findByIdAndDelete(req.params.id)   
    return res.json({ status: "request received"});
  });

app.listen(PORT, () => console.log(`Server started at PORT : ${PORT}`));
