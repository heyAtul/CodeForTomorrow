import { DataTypes, Model } from "sequelize";
import sequelize from "../db.ts";

class ChatMember extends Model {
    declare chatId: string
    declare userId: number
}

ChatMember.init({
    chatId: { type: DataTypes.STRING(50) },
    userId: { type: DataTypes.INTEGER }
}, { sequelize, tableName: "chat_members" })

export default ChatMember