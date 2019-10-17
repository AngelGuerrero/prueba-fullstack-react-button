const express = require('express');

let router = express.Router();

router.get('/:value', (req, res) => {
  let value = req.params.value;

  let newValue = value.toUpperCase();

  return res.status(200).json({ message: newValue });
});

module.exports = router;
