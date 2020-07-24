const express = require('express');
let app = express();
let serv = require('http').Server(app);
const io = require('socket.io') (serv, {});
const boa = require('@pipcook/pipcook-cli');
const builtins = boa.builtins();
// const keyboard = pynput.controller();

app.get('/',function(req,res){
    res.sendFile(__dirname + "/client/mlProject.html");
});

app.use('/client', express.static(__dirname + '/client'));

serv.listen(2000);
console.log("Server Started");

function execute(command) {
    const exec = require('child_process').exec
  
    exec(command, (err, stdout, stderr) => {
      process.stdout.write(stdout)
    })
  }
  
io.sockets.on('connection', function(socket){
    socket.on('newPrediction', function(data) {
        console.log(data);
        execute("C:/Users/Cameron/AppData/Local/Programs/Python/Python37/python.exe \"d:/School/Computer Science Principles/guitarToKey/test.py\"");
        if(data == 'A'){
            // keyboard.type('w');
            // keyboard.type('w');
            // keyboard.type('w');

        }
        else{
            console.log('not A');
        }
    });
});