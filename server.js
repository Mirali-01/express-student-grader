// Initialize the server
const express = require("express");
const app = express();
const PORT = 3000;

// bringing over students file
const students = require("./models/students");

// Set up view engine above all routes, enables rendering from views fldr
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

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

// Listening to PORT 300
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
