const mongoose = require("mongoose");

const VariableSchema = new mongoose.Schema(
  {
    commerceBidAmount:{type:Number,default:0},

    commerceDepositeAmount:{type:Number,default:0},

    truckBidAmount:{type:Number,default:0},

    truckDepositeAmount:{type:Number,default:0},

    commerceVipAmount:{type:Number,default:0},

    cancelCommerceSellPenalty:{type:Number,default:0},

    cancelTruckPenalty:{type:Number,default:0},

    cancelLineMakerBookTime:{type:Number,default:0},

    inspectorAmount:{type:Number,default:0},


    appComistionAmountTruck:{type:Number,default:0},
    appComistionAmountCommerce:{type:Number,default:0},
    appComistionAmountTransport:{type:Number,default:0},

    getQuoteAmount:{type:Number,default:0}

  },
  { timestamps: true }
);

module.exports = mongoose.model("Variable", VariableSchema);
