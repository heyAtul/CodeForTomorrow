import type { Request, Response } from "express";
import User from "../model/user.model.ts";
import ChatMember from "../model/chatMember.model.ts";

export let createUser = async (req: Request, res: Response) => {
    let { name } = req.body ?? {}
    let user = await User.create({ name: name.trim() })
    res.status(201).json({ id: user.id })
}
export let getUserChats = async (req: Request, res: Response) => {
    let userId = Number(req.params.userId)

    let user = await User.findOne({ where: { id: userId } })
    if (!user) {
        res.status(404).json({ message: "user not found" })
        return
    }

    let myChats = await ChatMember.findAll({ where: { userId } })
    let chatIds = myChats.map(member => member.chatId)

    let allMembers = await ChatMember.findAll({ where: { chatId: chatIds }, order: [["userId", "ASC"]] })

    let membersByChat: { [chatId: string]: number[] } = {}
    for (let member of allMembers) {
        let members = membersByChat[member.chatId] ?? []
        members.push(member.userId)
        membersByChat[member.chatId] = members
    }

    let chats = Object.entries(membersByChat).map(([chatId, members]) => ({ chatId, members }))

    res.status(200).json(chats)
}
