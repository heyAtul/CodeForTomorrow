import type { Request, Response } from "express";
import Chat from "../model/chat.model.ts";
import ChatMember from "../model/chatMember.model.ts";

export let createChat = async (req: Request, res: Response) => {
    let { userAId, userBId } = req.body
    let userA = Number(userAId)
    let userB = Number(userBId)

    let chatId = [userA, userB].sort((a, b) => a - b).join("_")

    let chat = await Chat.findOne({ where: { chatId } })
    if (chat) {
        res.status(200).json({ chatId: chat.chatId })
        return
    }

    chat = await Chat.create({ chatId })
    await ChatMember.bulkCreate([
        { chatId: chat.chatId, userId: userA },
        { chatId: chat.chatId, userId: userB }
    ], { ignoreDuplicates: true })
    res.status(201).json({ chatId: chat.chatId })
}