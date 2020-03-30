import {Room} from '#root/models/Room'
import {Session} from '#root/models/Session'
import {Message} from '#root/models/Message'
import {createSession, getRoomActiveSessionsAmount} from '#root/services/sessionsService'

const eventUpdateOnlineUsersAmount = 'updateOnlineUsersAmount'
const eventUpdateSessionId = 'updateSessionId'
const eventNewMessage = 'newMessage'

const listen = async (socket) => {
    socket.on('joinRoom', async ({ roomId, sessionId }) => {
        let session = await Session.findByPk(sessionId)
        if (session) {
            await session.destroy()
        }

        session = await createSession(roomId, socket.id)
        socket.join(roomId)

        const roomOnlineAmount = await getRoomActiveSessionsAmount(roomId)

        socket.emit(eventUpdateSessionId, { id: session.id })
        socket.emit(eventUpdateOnlineUsersAmount, {roomOnlineAmount})
        socket.broadcast
            .in(roomId)
            .emit(eventUpdateOnlineUsersAmount, {roomOnlineAmount})
    })

    socket.on('message', async ({ userNickname, message, roomId }) => {
        const room = await Room.findByPk(roomId)
        if (!room) {
            return
        }

        const messageData = await Message.create({
            roomId: roomId,
            author: userNickname,
            content: message
        })

        socket.emit(eventNewMessage, {messageData})
        socket.broadcast
            .in(roomId)
            .emit(eventNewMessage, {messageData})
    });

    socket.on('disconnect', async () => {
        let session = await Session.findOne({
            where: { socketId: socket.id }
        })

        if (!session) {
            return
        }

        const roomOnlineAmount = (await getRoomActiveSessionsAmount(session.roomId)) - 1

        if (roomOnlineAmount === 0) {
            const room = await Room.findByPk(session.roomId)
            await room.destroy()
            return
        }

        socket.broadcast
            .in(session.roomId)
            .emit(eventUpdateOnlineUsersAmount, {roomOnlineAmount})

        await session.destroy()
    })
}

module.exports = listen