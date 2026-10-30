import { Router } from "express";
import { createChat, sendMessage, getMessages, readMessage, deleteMessage } from "../controllers/chat.controller.ts";

let chatRoute = Router()

chatRoute.post("/create", createChat)
chatRoute.post("/:chatId/message/send", sendMessage)
chatRoute.get("/:chatId/messages", getMessages)
chatRoute.post("/:chatId/message/:messageId/read", readMessage)
chatRoute.delete("/:chatId/message/:messageId", deleteMessage)

export default chatRoute
