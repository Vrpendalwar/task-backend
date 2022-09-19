const express = require('express');
const app = express();
const PORT = 3002;
const conn = require('./db');
const cors = require('cors');


// to  get API

conn.connection.on("connected", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("connected to MongoDB");
    }
});


app.get("/",(req,res) => {
    console.log("we get request");
    res.send("Hello");
})

app.use(cors());
app.use(express.json);
app.use("/user2", require("./routes/user"));


// create express server
app.listen(PORT, () => {
    console.log("Server Connected");
})