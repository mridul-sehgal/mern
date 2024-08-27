const User = require("../models/user");

async function handleGetAllUsers(req, res) {
  const allDBUsers = await User.find({});
  return res.json(allDBUsers);
}

async function getUserByID(req, res) {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ msg: "User not found" });
  return res.json(user);
}

async function UpdateUserById(req, res) {
  const body = req.body;
  await User.findByIdAndUpdate(req.params.id, { lastName: body.last_name });
  return res.json({ status: "request received" });
}

async function DeleteUserByID(req, res) {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ status: "request received" });
}

async function HandleCreateNewUser(req, res) {
  const body = req.body;
  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    jobTitle: body.job_title,
    gender: body.gender,
  });
  console.log("result", result);
  res.status(201).json({ msg: "Successfully Created" });
}

module.exports = {
  handleGetAllUsers,
  getUserByID,
  UpdateUserById,
  DeleteUserByID,
  HandleCreateNewUser
};
