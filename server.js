// Initialize the server
const express = require("express");
const app = express();
const PORT = 3000;

// bringing over students file
const students = require("./models/students");

// Set up view engine above all routes, enables rendering from views fldr
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// middleware - should be before your requests, controls the routes and flow of requests and responses
// app.use() - called to every route
app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});

// Viewing the body of the post request by accessing it's data and parsing it to a string (if extended: false) for posting to the req.body
// querystring library (when false) or the qs library (when true) ?
app.use(express.urlencoded({ extended: false }));

// Get
// app.get("/", (req, res) => {
//   res.send("What's good!");
// });

// Routes

// [Students]
app.get("/students", (req, res) => {
  res.render("Students", { students: students });
});

// [NewData]
app.get("/students/new", (req, res) => {
  res.render("NewData");
});

// POST
app.post("/students", (req, res) => {
  students.push(req.body);
  res.redirect("/students");
});

// Listening to PORT 300
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
