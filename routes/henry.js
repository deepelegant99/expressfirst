const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { name: "Henry" });
});
router.get("/:attribute", (req, res) => {
  res.render("index", { name: `Henry ${req.params.attribute}` });
});


//Data for our attributes
//Part of middleware
const attributes = {
  ssn: 5555003,
  address: "1800 M st, Morgan Hill, ca",
  phone: 5109921243,
};

router.param("attribute", (req, res, next, attribute) => {
  req.params.attribute = attributes[attribute];
  next();
});

module.exports = router;
