const express = require("express");

const C = require("../controllers/upload");

const { protect } = require("../middleware/auth");

const router = express.Router();

// POST
router.post("/setupload",protect, C.setUploadSetting);
router.get("/get",C.getUploadSetting)

module.exports = router;
