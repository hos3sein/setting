const mongoose = require("mongoose");

const CancelPointSchema = new mongoose.Schema(
  {
    time: {
      type: String,
    },
    count: { from: { type: String }, fromTo: { type: String } },
    point: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CancelPoint", CancelPointSchema);
