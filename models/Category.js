const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name category"],
    },

    number: {
      type: Number,
      unique: true,
      required: [true, "Please add a unique number"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);
