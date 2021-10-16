import mongoose from "mongoose"

const ImageShema=new mongoose.Schema({
images:[
    {
        location:{type:String,required:true} 
    },
],

},{
    timestamps:true,
});
export const ImageModel=mongoose.model("Image",ImageShema);