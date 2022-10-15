const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
app.use(logger);
//Set viewing engine
app.set("view engine", "ejs");

// app.use(express.static(public));

//Give app a route
app.get("/", (req, res) => {
     res.render("index");
});

//use Phillip Routes
const phillipRouter = require("./routes/phillip");
app.use("/phillip", phillipRouter);

//use Henry Routes
const henryRouter = require("./routes/henry");
app.use("/henry", henryRouter);

// logger is a middleware
function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

app.listen(PORT);
