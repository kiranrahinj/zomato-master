import mongoose from "mongoose";

const MenuSchema = new mongoose.Schema({
    menus:[{
        name:{type:String},
        items:[{
            type:mongoose.Types.ObjectId,
            ref:"Foods"
        },],
        recommanded:[{
            type:mongoose.Types.ObjectId,
            ref:"Foods",
            unique:true,
        }]
    },]
},{
    timestamps:true,
})
export const MenuModel=mongoose.model("Menu",MenuSchema);