module.exports.up = (queryInterface, DataTypes) => {
    return queryInterface.createTable('sessions', {
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
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
    }, {
        charset: 'utf8'
    })
}

module.exports.down = queryInterface => queryInterface.dropTable('sessions')