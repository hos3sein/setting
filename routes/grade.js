const express = require("express");

const C = require("../controllers/grade");

const { protect } = require("../middleware/auth");

const router = express.Router();

// POST
router.post("/create",protect, C.create);
router.post("/update/:id",protect,C.update);


// GET
router.get("/get",C.all);


// DElETE
router.delete("/remove/:id",protect, C.remove);

module.exports = router;
