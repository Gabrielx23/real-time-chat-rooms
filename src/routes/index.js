import express from 'express'
import roomsController from '#root/controllers/roomsController'
import {catchAsync} from '#root/middlewares/errors'
import storeRoomForm from '#root/forms/storeRoomForm'

const router = express.Router()

/** Rooms paths */
router.get('/rooms/create', roomsController.create)
router.get('/rooms', roomsController.index)
router.get('/rooms/:roomId', roomsController.view)
router.post('/rooms',
    storeRoomForm.rules,
    storeRoomForm.validate,
    catchAsync(roomsController.store)
)

module.exports = router
