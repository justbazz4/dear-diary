import mongoose from "mongoose";
const Schema = mongoose.Schema;

const DataSchema = new Schema ({
  Topic: {
    type: String,
    required: true
  },
   confess: {
    type: String,
    required: true
   }
});


module.exports = mongoose.models.Data || mongoose.model("Data", DataSchema);