import type { Request, Response } from "express";
import User from "../model/user.model.ts";

export let createUser = async (req: Request, res: Response) => {
    let { name } = req.body ?? {}
    let user = await User.create({ name: name.trim() })
    res.status(201).json({ id: user.id })
}
