const express = require("express");
const router = express.Router();
const { getUsers, getUserById } = require("../controllers/index");

// handle get to / route and send as respone all users
router.get("/", getUsers);
// handle get request to /:id route and send user based on the ID
router.get("/:id", getUserById);

module.exports = router;
