import { Router } from "express";
import { createChat, sendMessage } from "../controllers/chat.controller.ts";

let chatRoute = Router()

chatRoute.post("/create", createChat)
chatRoute.post("/:chatId/message/send", sendMessage)

export default chatRoute
