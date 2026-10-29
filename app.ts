import express from "express";
import 'dotenv/config'
let PORT = process.env.PORT
let app = express()

app.use("/", (req, res)=> {
    res.send("Chat APP")
})

app.listen(PORT, ()=>{
    console.log("Port start - " + PORT)
})