const mongoose = require("mongoose");

const PermissionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },

    description: {
      type: String,
    },

    iconName: {
      type: String,
    },

    libIconName: {
      type: String,
    },

    serviceName: {
      type: String,
    },

    prefixName: {
      type: String,
    },

    funcName: {
      type: String,
    },

    number: {
      type: Number,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Permission", PermissionSchema);
