import app from './src/app'
import dotenv from 'dotenv'
import http from 'http'
import socketio from 'socket.io'
import listen from '#root/helpers/socketListener'

dotenv.config()

const port = process.env.APP_PORT
const server = http.createServer(app)
const io = socketio(server)

io.on('connection', async socket => await listen(socket))

server.listen(port, () => {
    console.log(`Application works on port ${port}`)
})