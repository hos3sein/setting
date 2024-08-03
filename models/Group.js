const mongoose = require("mongoose");

const GroupSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: [true, "Please add an unique name"],
    },
    number: {
      type: String,
      unique: [true, "Please add an unique number"],
    },

    description: {
      type: String,
    },

    iconName: {
      type: String,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Group", GroupSchema);
