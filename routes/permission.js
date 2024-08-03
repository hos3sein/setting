const express = require("express");

const C = require("../controllers/permission");

const { protect } = require("../middleware/auth");

const router = express.Router();

// POST
router.post("/create", C.create);
router.post("/up/:id", C.update);

// GET
router.get("/all", C.all);
router.get("/rem/:id", C.remove);

module.exports = router;
