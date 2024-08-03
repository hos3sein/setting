const mongoose = require("mongoose");

const TransactionVolumePointSchema = new mongoose.Schema(
  {
    volume: { from: { type: String }, fromTo: { type: String } },
    point: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "TransactionVolumePoint",
  TransactionVolumePointSchema
);
