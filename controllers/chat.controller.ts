import type { Request, Response } from "express";
import Chat from "../model/chat.model.ts";
import ChatMember from "../model/chatMember.model.ts";

import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import firestore from "../firebase.ts";


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

export let sendMessage = async (req: Request<{ chatId: string }>, res: Response) => {
    let { chatId } = req.params
    let { senderId, text } = req.body ?? {}
    let sender = Number(senderId)

    let member = await ChatMember.findOne({ where: { chatId, userId: sender } })
    if (!member) {
        res.status(403).json({ message: "sender is not a member of this chat" })
        return
    }

    let message = await addDoc(collection(firestore, "messages"), {
        chatId,
        text: text.trim(),
        createdAt: serverTimestamp(),
        lastSeen: null,
        senderId: sender
    })

    res.status(201).json({ messageId: message.id })
}
