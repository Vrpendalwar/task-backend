const mongoose = require("mongoose");

// create formats for db

const userSchema = new mongoose.Schema({
    Name: String,
    Mobnumber: Number,
    Emailid: String
});

module.exports = mongoose.model("user", userSchema);