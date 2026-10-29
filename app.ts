import express from "express";
import chatRoute from "./routes/chat.routes.ts";
import userRoute from "./routes/user.routes.ts";
import 'dotenv/config'
import db from "./db.ts";


let PORT = process.env.PORT
let app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Chat APP")
})
app.use("/chat", chatRoute);
app.use("/user", userRoute)

app.listen(PORT, async () => {
    await db.authenticate()
    await db.sync()
    console.log("MySQL connected")
    console.log("Port start - " + PORT)
})