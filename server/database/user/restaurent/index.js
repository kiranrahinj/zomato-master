import mongoose from "mongoose";

const RestaurentSchema = new mongoose.Schema({
  name: { type: String, reqiured: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  maplocation: { type: String, required: true },
  cuisine: [String],
  restaurentTiming: String,
  contactNumber: Number,
  website: Number,
  popularDishesh: [String],
  avarageCost: Number,
  amenties: [String],
  menuImages: {
    type: mongoose.Types.ObjectId,
    ref: "Image",
  },
  reviews: { type: mongoose.Types.ObjectId, ref: "Review" },
});
export const RestaurentModel = mongoose.model("Restaurent", RestaurentSchema);
