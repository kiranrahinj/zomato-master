import mongoose from "mongoose"

const ImageShema=new mongoose.Schema({
images:[
    {
        location:{type:String,required:true} 
    },
],

});
export const ImageModel=mongoose.model("Image",ImageShema);