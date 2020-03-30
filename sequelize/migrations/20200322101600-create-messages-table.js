module.exports.up = (queryInterface, DataTypes) => {
    return queryInterface.createTable('messages', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED
        },
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
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        deletedAt: {
            allowNull: true,
            type: DataTypes.DATE
        }
    }, {
        charset: 'utf8'
    })
}

module.exports.down = queryInterface => queryInterface.dropTable('messages')