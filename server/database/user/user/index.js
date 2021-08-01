import mongoose from "mongoose"

const UserSchema=new mongoose.Schema({
fullname:{type:String ,required:true},
email:{type:String ,required:true},
password:{type:String },
Address:[{detail:{type:String},for:{type:String} }],
PhoneNumber:{type:Number ,required:true},

})
export const UserModel=mongoose.model("User",UserSchema);