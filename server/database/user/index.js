import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema(
  {
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String },
    Address: [{ detail: { type: String }, for: { type: String } }],
    PhoneNumber: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);
///signup
//jwt token
UserSchema.methods.generateToken = function () {
  return jwt.sign({ user: this._id.toString() }, "ZomatoAPP");
};

//find is already exist or not
UserSchema.statics.findByEmailAndPhone = async ({ email, PhoneNumber }) => {
  const checkUser = await UserModel.findOne({ email });
  const checkUserPhoneNumber = await UserModel.findOne({ PhoneNumber });

  if (checkUser || checkUserPhoneNumber) {
    throw new Error("Email already exist...");
  }
  return false;
};

//hash password
UserSchema.pre("save", function (next) {
  const user = this;

  if (!user.isModified("password")) return next();
  bcrypt.genSalt(8, (error, salt) => {
    if (error) return next(error);
    bcrypt.hash(user.password, salt, (error, hash) => {
      if (error) return next(error);
      user.password = hash;
      return next();
    });
  });
});

//sign in
//find by mail
UserSchema.statics.findByEmailAndPassword = async ({ email, password }) => {
  const user = await UserModel.findOne({ email });
if(!user) throw new Error("Sorry Email is not exist");
 
const DoesPasswordExist = await bcrypt.compare(password, user.password);
if(!DoesPasswordExist) throw new Error("Invalid Password");
  
};

export const UserModel = mongoose.model("User", UserSchema);
