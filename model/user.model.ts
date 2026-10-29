import { DataTypes, Model } from "sequelize";
import sequelize from "../db.ts";

class User extends Model {
    declare id: number
    declare name: string
}

User.init({
    name: { type: DataTypes.STRING(100), allowNull: false }
}, { sequelize, tableName: "users" })

export default User
