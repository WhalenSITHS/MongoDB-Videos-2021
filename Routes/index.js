const express = require("express");
const router = new express.Router(); //instantiate express router\
const shopController = require("../Controllers/shopController");

router.get("/", shopController.middlewareSample, shopController.homePage);
router.get("/auth", shopController.authMiddleware, shopController.authPage);
module.exports = router;
