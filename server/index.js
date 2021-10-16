//env var
require("dotenv").config();
//lib
import express from "express";
import cors from "cors"; //at time deploy it will be use if not present it will reject req
import helmet from "helmet"; // it for security purpose lib.
import passport from "passport";

//config
import googleAuthConfig from "./configue/google.configue"
import routeConfig from "./configue/route.config";

//database connection
import ConnectDB from "./database/connection"

// microservices
import Auth from "./api/Auth";
import Restaurent from "./api/Restaurent"
import Food from "./api/Food";
// import Menu from "./api/Menu";
import Image from "./api/Image";
import Order from "./api/orders";
import Review from "./api/reviews";
import User from "./api/users"; 


//middle ware appcation
const zomato = express();
zomato.use(helmet());
zomato.use(cors());
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(passport.initialize());
zomato.use(passport.session());

//passport config
googleAuthConfig(passport);
routeConfig(passport);

//microservice prefix
zomato.use("/auth",Auth); 
zomato.use("/restaurant",Restaurent);
zomato.use("/food",Food);
// zomato.use("/menu",Menu);
zomato.use("/image",Image);
zomato.use("/order",Order);
zomato.use("/reviews",Review);
zomato.use("/user",User);


zomato.get("/", (req, res) => res.json({ msg: "setup success" }));




zomato.listen(5000, () =>
  ConnectDB()
    .then(() => console.log("Server is running 🚀"))
    .catch(() =>
      console.log("Server is running, but database connection failed... ")
    )
);