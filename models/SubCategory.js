const mongoose = require("mongoose");

const SubCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name subCategory"],
    },

    number: {
      type: Number,
      unique: true,
      required: [true, "Please add a unique number"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SubCategory", SubCategorySchema);
