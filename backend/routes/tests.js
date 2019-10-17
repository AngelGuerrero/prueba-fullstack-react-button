const express = require("express");

let router = express.Router();

router.post("/", (req, res) => {
  let value = req.body.value;

  if (!value)
    return res.status(500).send({ message: "Error: No value was given" });

  let newValue = value.toUpperCase();

  console.log(`${value} => ${newValue}`);

  return res.status(200).send({ message: newValue });
});

module.exports = router;
