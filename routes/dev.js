const express = require("express");

const C = require("../controllers/dev");

const router = express.Router();

// POST
router.post("/createperm", C.createPerm);
router.post("/creategroup", C.createGroup);
router.post("/createpoint", C.createPoint);

// GET
router.get("/allgroup", C.allGroup);
router.get("/allper", C.allPer);
router.get("/allvars", C.allVars);
router.get("/allpoint", C.allPoint);
router.get("/rempoint/:id", C.removePoint);

router.get("/one/:id", C.one);

router.get("/delall", C.delAll);

module.exports = router;
