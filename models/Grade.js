const mongoose = require("mongoose");

const GradeSchema = new mongoose.Schema(
  {
    grade: {
      type: String,
       required: [true, "Please add a name Grade"],
       unique: [true, "Please add an unique grade"],
    },

    price: {
      type: Number,
     
      required: [true, "Please add a Price"],
    },

   
  },
  { timestamps: true }
);

module.exports = mongoose.model("Grade", GradeSchema);
