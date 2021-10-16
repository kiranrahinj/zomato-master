import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  food: {
    type: mongoose.Types.ObjectId,
    ref: "Foods",
  },
  Restaurent: {
    type: mongoose.Types.ObjectId,
    ref: "Restaurent",
  },
  User: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  rating: { type: Number, required: true },
  reviewText: { type: String, require: true },
  isRestaurantReview:Boolean,
  isFoodReview:Boolean,
  photos:[ { type: mongoose.Types.ObjectId, ref: "Image" },],
},{
    timestamps:true,
});
export const ReviewModel=mongoose.model("Review",reviewSchema);