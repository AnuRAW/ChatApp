import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";
import messageRoute from "./routes/message.route.js";
import userRoute from "./routes/user.route.js";
import connectmongoDB from "./db/connectmongo.js";
const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json());// TO parse the incoming requests with json payload (form req.body).
app.use(cookieParser());
app.use("/api/auth",authRoute);
app.use("/api/messages",messageRoute);
app.use("/api/users",userRoute);


// app.get("/",(req,res)=>{
// //rest rout http://localhost:5000/
// res.send("Ready to work")
// })
app.listen(5000,() =>{
    connectmongoDB();
    console.log(`Server Runing on port ${PORT}`)
})