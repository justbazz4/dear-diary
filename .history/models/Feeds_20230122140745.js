import mongoose from "mongoose";
const Schema = mongoose.Schema;

const FeedsSchema = new Schema ({
  
   Feedbacks: {
    type: String,
    required: true
   }
});


module.exports = mongoose.models.Feeds || mongoose.model("Feeds", FeedsSchema);