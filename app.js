import express from "express";
let PORT = 8000
let app = express()

app.use("/", (req, res)=> {
    res.send("Chat APP")
})

app.listen(PORT, (port)=>{
    console.log("Port start - " + PORT)
})