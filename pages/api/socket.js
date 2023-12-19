import { Server } from "socket.io";

const socketHandler = (req, res) => {
    if(res.socket.server.io){
        console.log("server is already connected")
    }else{
        const io = new Server(res.socket.server)
        res.socket.server.io = io
    
        io.on('connection', (socket) => {
            console.log("server is connected")
        })
    }
    res.end();
}

export default socketHandler;