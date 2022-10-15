const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { name: "Phillip" });
});
router.get("/:attribute", (req, res) => {
  res.render("index", { name: `Phillip ${req.params.attribute}` });
});

//Data for our attributes
//Part of middleware
const attributes = {
  ssn: 12344,
  address: "1800 M st, san jose, ca",
  phone: 4089921243,
};

router.param("attribute", (req, res, next, attribute) => {
  req.params.attribute = attributes[attribute];
  next();
});

module.exports = router;
