// Module imports
const express = require("express");
var cookie = require("cookie-parser");
var bodyParser = require("body-parser");

var app = express();

// DB Controler Imports
var db = require("./db/db_controller.js");

// Controler Imports
var landing = require("./controllers/landing");
var signup = require("./controllers/signup");
var login = require("./controllers/login");
var home = require("./controllers/home");
// var complain = require("./controllers/complain");
// var doc_controller = require("./controllers/doc_controller");
// var reset = require("./controllers/reset_controller");
// var set = require("./controllers/set_controller");
// var employee = require("./controllers/employee.js");
// var logout = require("./controllers/logout");
// var verify = require("./controllers/verify");
// var store = require("./controllers/store");
// var inbox = require("./controllers/inbox");
// var appointment = require("./controllers/appointment");
// var receipt = require("./controllers/receipt");
// var add_doc = require("./controllers/add_doctor");
// var chat = require("./controllers/chat");

app.set("view engine", "ejs");

app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookie());
//app.use(expressValidator());

app.use("/", landing);
app.use("/signup", signup);
app.use("/login", login);
app.use("/home", home);
// app.use("/complain", complain);
// app.use("/doctors", doc_controller);
// app.use("/resetpassword", reset);
// app.use("/setpassword", set);
// app.use("/employee", employee);
// app.use("/logout", logout);
// app.use("/verify", verify);
// app.use("/store", store);
// app.use("/inbox", inbox);
// app.use("/appointment", appointment);
// app.use("/receipt", receipt);
// app.use('/doctors/add_doctor',add_doc);


const server = app.listen(3000, function () {
    console.log("server started");
  });
