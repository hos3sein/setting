const express = require("express");


const C = require("../controllers/getAllSetting");



const router = express.Router();

// POST

router.get("/getall",C.getAllSetting)


module.exports = router;
