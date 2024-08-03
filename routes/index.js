const express = require("express");
const router = express.Router();

//prefix router Group
const group = require("./group");
router.use("/group", group);

const upload = require("./upload");
router.use("/upload",upload );

const grade = require("./grade");
router.use("/grade", grade);

//prefix router Permission
const permission = require("./permission");
router.use("/permission", permission);

//prefix router Category
const category = require("./category");
router.use("/category", category);


//prefix router Variable
const variable = require("./variable");
router.use("/variable", variable);

//prefix router Point
const point = require("./point");
router.use("/point", point);

//prefix router Developer
const dev = require("./dev");
router.use("/dev", dev);

module.exports = router;
