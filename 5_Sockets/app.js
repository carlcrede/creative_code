const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', (socket) => {
    socket.on("Client mouse moved", (data) => {
        console.log(data);
        io.emit("server sends out the coordinates", data);
    })
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/canvas.html");
});

server.listen(3000);