import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import passport from "passport";
const Router = express();

//model
import { UserModel } from "../../database/user";
import {ValidateSignup,ValidateSignin} from "../../Validations/auth"

/*
Route    /signup
Des      sign up with email and password
params   none
method   post
acess    public
*/
Router.post("/signup", async (req, res) => {
  try {
    await ValidateSignup(req.body.credentials); 

    await UserModel.findByEmailAndPhone(req.body.credentials);        //email is exist or not
    const newUser = await UserModel.create(req.body.credentials);     //save to db
    const token = newUser.generateToken();                            //generate jwt token
    return res.status(200).json({ token, status: "sucess" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.message, status: "not found" });
  }
});

/*
Route    /signin
Des      sign in with email and password
params   none
method   post
acess    public
*/
Router.post("/signin", async (req, res) => {
  try {
    await ValidateSignin(req.body.credentials);

    const user = await UserModel.findByEmailAndPassword(req.body.credentials);

    const token = user.generateToken();
    return res.status(200).json({ token, status: "success" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route    /google
Des      sign in with google
params   none
method   get
acess    public
*/
Router.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
  })
);

/*
Route     /google/callback
Des       Google Signin Callback
Params    none
Access    Public
Method    GET  
*/
Router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    return res.json({ token: req.session.passport.user.token });
  }
);


export default Router;
