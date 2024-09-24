const express = require("express");

const C = require("../controllers/point");

const { protect } = require("../middleware/auth");

const router = express.Router();

// POST
router.post("/up",protect,C.updateContentPoint);    

router.post("/createtransactionrange",protect ,C.createTransactionVolumePointRange);
router.post("/updatetransactionrange",protect ,C.updateTransactionVolumePointRange);

router.post("/createtransactionrangecount", protect,C.createTransactionCountPointRange);
router.post("/updatetransactionrangecount",protect ,C.updateTransactionCountPointRange);

router.post("/createcancelpoint",protect ,C.createCancelPoint);
router.post("/updatecancelpoint",protect,C.updateCancelPoint);

// GET
router.get("/all", C.allContentPoint);

router.get("/alltransactionrange",C.getAllTransactionVolumePointRange)
router.get("/removetransactionrange/:id",protect,C.removeTransactionVolumePointRange)

router.get("/alltransactionrangecount",C.getAllTransactionCountPointRange)
router.get("/removetransactionrangecount/:id",protect,C.removeTransactionCountPointRange)


router.get("/allCancelPoint",C.getAllCancelPoint)
router.get("/removecancelpoint/:id",protect,C.removeCancelPoint)
router.get("/getAllVariables" , C.getAllVariables)

module.exports = router;
