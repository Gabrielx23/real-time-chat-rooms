import {DataTypes, Model} from 'sequelize'
import sequelize from '../helpers/connection'

export class Session extends Model {}

Session.init({
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID
    },
    socketId: {
        allowNull: false,
        type: DataTypes.STRING
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
    modelName: 'sessions',
    paranoid: false,
    updatedAt: false,
    sequelize
})