require('dotenv').config()

module.exports = {
    dialect: process.env.DB_DIALECT,
    seederStorage: 'sequelize',
    url: process.env.DB_URI
}