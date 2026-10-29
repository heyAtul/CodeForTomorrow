import { DataTypes, Model } from "sequelize";
import sequelize from "../db.ts";

class Chat extends Model {
    declare id: number
    declare chatId: string
}

Chat.init({
    chatId: { type: DataTypes.STRING(50), allowNull: false, unique: true }
}, { sequelize, tableName: "chats" })

export default Chat
