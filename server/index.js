import  express  from "express";
import cors from"cors";//at time deploy it will be use if not present it will reject req  
import helmet from "helmet";// it for security purpose lib.


const zomato=express();
//middle ware appcation
zomato.use(helmet());
zomato.use(cors());
zomato.use(express.json());
zomato.use(express.urlencoded({extended:false}))

zomato.get("/",(req,res)=>
    res.json({msg:"setup success"})

);                                                   

zomato.listen(3000,()=>console.log("server is running"));