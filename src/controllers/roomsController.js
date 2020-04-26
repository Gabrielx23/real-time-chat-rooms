import {Room} from '#root/models/Room'
import sessionsServices from '#root/services/sessionsService'
import messagesService from '#root/services/messagesService'

module.exports.index = async (req, res) => {
    const rooms = await Room.findAll()

    res.render('rooms/index', {
        rooms: rooms,
        error: req.flash('error')
    });
}

module.exports.view = async (req, res, next) => {
    const room = await Room.findByPk(req.params.roomId ?? 0)

    if (!room) {
        req.flash('error', 'Room not exist anymore!')
        return res.redirect('/rooms')
    }

    res.render('rooms/view', {
        room: room,
        onlineAmount: await sessionsServices.getRoomActiveSessionsAmount(room.id),
        messages: await messagesService.getMessagesForRoom(room),
        success: req.flash('success')
    })
}

module.exports.create = (req, res) => {
    res.render('rooms/create')
}

module.exports.store = async (req, res, next) => {
    const room = await Room.create({
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
    })

    req.flash('success', room.name + ' created!')
    return res.redirect('/rooms/' + room.id)
}