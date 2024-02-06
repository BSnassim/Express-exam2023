const express = require("express");
const http = require("http");
const app = express();
const userRouter = require("./routes/user");
const mongoose = require("mongoose");
const dbconfig = require("./config/dbconnection.json");
// Routes   
app.use("/", userRouter);

// Mongo connection
mongoose.connect(dbconfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("connected to db"))
.catch(() => console.log("failed connecting to db"));

// Http Server config
const server = http.createServer(app);
server.listen(3000, console.log("server running on http://localhost:3000"));

module.exports = app;