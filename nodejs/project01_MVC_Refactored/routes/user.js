const express = require("express");
const router = express.Router();
const {
  handleGetAllUsers,
  getUserByID,
  UpdateUserById,
  DeleteUserByID,
  HandleCreateNewUser,
} = require("../controllers/user");
// REST API POINTS

router
  .route("/")
  .get(handleGetAllUsers)
  .post(HandleCreateNewUser);

router
  .route("/:id")
  .get(getUserByID)
  .patch(UpdateUserById)
  .delete(DeleteUserByID);

module.exports = router;
