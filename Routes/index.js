const express = require("express");
const router = new express.Router(); //instantiate express router

router.get("/", (req, res) => {
  const teacher = { name: "Whalen", age: 31, tenure: true };
  try {
    res.send(req.query);
  } catch (error) {
    console.log(error);
  }
});

router.get("/teacher/:name", async (req, res) => {
  try {
    res.json(req.params.name);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
