import { Router } from "express";
import { createChat, sendMessage, getMessages } from "../controllers/chat.controller.ts";

let chatRoute = Router()

chatRoute.post("/create", createChat)
chatRoute.post("/:chatId/message/send", sendMessage)
chatRoute.get("/:chatId/messages", getMessages)

export default chatRoute
