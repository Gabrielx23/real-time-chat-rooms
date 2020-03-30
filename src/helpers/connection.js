import {Sequelize} from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

const sequelize = new Sequelize(process.env.DB_URI, {
    dialectOptions: {
        charset: "utf8",
        multipleStatements: true
    },
    logging: false
})

export default sequelize
