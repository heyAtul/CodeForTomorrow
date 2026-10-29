import { Router } from "express";

let chatRoute = Router()

chatRoute.post("/", (req, res)=> {
    res.send("Chat created")
})

export default chatRoute
