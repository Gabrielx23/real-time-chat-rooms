import generateUUID from '#root/helpers/uuidGenerator'
import {Session} from '#root/models/Session'

exports.createSession = async (roomId, socketId) => {
    const sessionId = generateUUID()

    return await Session.create({
        id: sessionId,
        roomId: roomId,
        socketId: socketId,
    })
}

exports.getRoomActiveSessionsAmount = async (roomId) => {
    const sessions = await Session.findAll({
        where: {
            roomId: roomId,
        }
    })

    return sessions.length
}