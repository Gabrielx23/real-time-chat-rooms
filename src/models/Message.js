import {DataTypes, Model} from 'sequelize'
import sequelize from '../helpers/connection'

export class Message extends Model {}

Message.init({
    author: {
        allowNull: false,
        type: DataTypes.STRING
    },
    content: {
        allowNull: true,
        type: DataTypes.TEXT
    },
    roomId: {
        allowNull: false,
        references: {
            key: "id",
            model: "rooms"
        },
        type: DataTypes.INTEGER.UNSIGNED,
        onDelete: 'CASCADE'
    },
}, {
    modelName: 'messages',
    sequelize
})