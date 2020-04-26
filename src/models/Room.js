import {DataTypes, Model} from 'sequelize'
import sequelize from '../helpers/connection'

export class Room extends Model {}

Room.init({
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    category: {
        allowNull: false,
        type: DataTypes.STRING
    },
    description: {
        allowNull: true,
        type: DataTypes.TEXT
    },
}, {
    modelName: 'rooms',
    sequelize
})
