const mongoose = require("mongoose");

const TransactionCountPointSchema = new mongoose.Schema(
  {
    count: { from: { type: String }, fromTo: { type: String } },
    point: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "TransactionCountPoint",
  TransactionCountPointSchema
);
