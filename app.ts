import express from "express";
import 'dotenv/config'
import chatRoute from "./routes/chatRoute.routes.ts";
let PORT = process.env.PORT
let app = express()

app.get("/", (req, res)=> {
    res.send("Chat APP")
})
app.use("/chat/create", chatRoute);

app.listen(PORT, ()=>{
    console.log("Port start - " + PORT)
})