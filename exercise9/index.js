const express = require('express');
const app = express();
const PORT = 4000;
const path = require('path');

//require all the routes

const students = require("./routes/students");

const routes = require("./routes/app");
const users = require("./routes/users");

// set up view engine and set path.join
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//use urlencoded

app.use(express.urlencoded({
    extended: true
}));

//use our routes
app.use("/students", students);
app.use("/users", users);
app.use("/", routes);

app.listen(PORT, function(){
    console.log(`Server is listening to port ${PORT} yay`);
})