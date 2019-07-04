var express = require("express");
var app = express();
const http = require("http");
const server = http.createServer(app);
const socketIo = require("socket.io");
const io = socketIo(server);
const sql = require('mssql');
const bodyParser = require('body-parser')

const getDataRouter = require('./Routes/smileyRoutes');


io.on('connection', (socket)=>{
    console.log('a user is conneted');

    socket.on('disconnect', ()=>{
        console.log('user disconnect');
    })
})

app.use(function(req, res, next){//creating some middleware
    req.io = io;//setting req.io be the same as io
    next();//calling the next request handler ind the middleware stack
})

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
 res.setHeader("Access-Control-Allow-Credentials", "*");

  res.setHeader('access-control-allow-methods', 'GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS')
     res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }))


app.use('/Data/', getDataRouter);


app.listen(9000, () => {
 console.log("Server running on port 9000");
});
