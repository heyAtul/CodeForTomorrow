import { Router } from "express";

let chatRoute = Router()

chatRoute.post("/create", (req, res)=> {
    res.send("Chat created")
})

export default chatRoute
