const mongoose = require("mongoose");

const UploadFile = new mongoose.Schema(
  {
    maxSize: {
      type: Number,
      required: [true, "Please add a maximum size to the upload file"],
    },

    count: {
      type: Number
 
    },

   
  },
  { timestamps: true }
);

module.exports = mongoose.model("UploadFile", UploadFile);
