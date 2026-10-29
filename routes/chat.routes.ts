import { Router } from "express";
import { createChat } from "../controllers/chat.controller.ts";

let chatRoute = Router()

chatRoute.post("/create", createChat)

export default chatRoute
