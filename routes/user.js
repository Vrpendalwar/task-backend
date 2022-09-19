const express = require("express");
const router = express.Router();

// to create new user

router.post("/", require("../controllers/user").createUser);

router.get("/", require("./../controllers/user").getUser);

module.exports = router;