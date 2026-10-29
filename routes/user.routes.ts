import { Router } from "express";
import { createUser } from "../controllers/user.controller.ts";

let userRoute = Router()

userRoute.post("/create", createUser)

export default userRoute
