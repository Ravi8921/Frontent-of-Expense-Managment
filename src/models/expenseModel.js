const mongoose = require("mongoose");
let ObjectId = mongoose.Schema.Types.ObjectId;

const expenseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  Date: {

    type: Date,
    default: Date.now
  }

})



module.exports = mongoose.model("userss", expenseSchema);


