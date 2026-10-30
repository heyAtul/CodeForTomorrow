import { Router } from "express";
import { createUser, getUserChats } from "../controllers/user.controller.ts";

let userRoute = Router()

userRoute.post("/create", createUser)
userRoute.get("/:userId/chats", getUserChats)

export default userRoute
