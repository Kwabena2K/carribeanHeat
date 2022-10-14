// Imports
const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const port = process.env.PORT || 4000;

require("dotenv").config();

app.use(express.urlencoded({extended: true}));
// Creating a static folder for files such as images to have a clear path
app.use(express.static("public"));
app.use(expressLayouts);

app.set("layout", "./layouts/main");
app.set("view engine", "ejs");
// Creating our routes
const routes = require("./server/routes/recipeRoutes.js");
app.use("/", routes);

app.listen(port, () => console.log(`Listening to the port ${port}`));
