import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  desciption: { type: String, required: true },
  isVeg: { type: Boolean, required: true },
  isConatainEgg: { type: Boolean, required: true },
  cateogory: { type: String, required: true },
  photos: {
    type: mongoose.Types.ObjectId,
    ref: "Image",
  },
  price: { type: Number, default: 150, required: true },
  addOns:[{
      type:mongoose.Types.ObjectId,
      ref:"Foods",
  }],
  restaurent:{
      type:mongoose.Types.ObjectId,
      ref:"Restaurent",
      required:true,
  }
},{
  timestamps:true,
});

export const FoodModel = mongoose.model("Foods", FoodSchema);
