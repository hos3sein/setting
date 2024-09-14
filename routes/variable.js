const express = require("express");

const C = require("../controllers/variable");

const { protect } = require("../middleware/auth");

const router = express.Router();

// POST
router.post("/createandupdate", protect ,C.createAndUpdate);
// router.post("/up/:id", C.update);

// GET
router.get("/all", C.all);

// REMOVE
router.get("/rem/:id", C.remove);

module.exports = router;
