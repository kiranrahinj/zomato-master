import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  orderDetails: [
    {
      food: { type: mongoose.Types.ObjectId, ref: "Foods" },
      quantity: { type: String, required: true },
      paymode: {
        type: String,
        required: true,
      },
      status: { type: String, default: "placed" },
      paymentDetails: {
        itemTotal: { type: String, required: true },
        promo: { type: String, required: true },
        tax: { type: String, required: true },
      },
    },
  ],
},{
  timestamps:true,
});
export const OrderModel=mongoose.model("Orders",OrderSchema);