import {Message} from '#root/models/Message'

exports.getMessagesForRoom = async (room) => {
    let messages = await Message.findAll({ where: { roomId: room.id }, order: [['createdAt', 'DESC']] })
    messages.map((message) => {
        message.createdAt = (new Date(message.createdAt)).toUTCString()
        return message
    })

    return messages
}