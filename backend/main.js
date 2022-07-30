const express = require('express');
var socket = require('socket.io');
const cors = require('cors')
const app = express();
const authRouter = require('./controllers/authController')
const requireJWT = require('./middleware/authMiddleware')
const sendMessage = require('./Routers/sendMessage')
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // For legacy browser support
}

app.use(cors(corsOptions))
app.use(express.json());

// socket setup

var server = app.listen(8000);

var io = socket(server);

app.use('/api/auth', authRouter)
app.use('/api/sendMessage', requireJWT, sendMessage)

io.on('connection', socket => {
    socket.on('send_message', (data)=>{
        socket.broadcast.emit('receive_message', {message: data.message})
    })
})
