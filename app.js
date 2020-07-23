let express = require('express');
let app = express();
let serv = require('http').Server(app);
let io = require('socket.io') (serv, {});

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
        if(data == 'A'){
            execute("C:/Users/Cameron/AppData/Local/Programs/Python/Python37/python.exe \"d:/School/Computer Science Principles/guitarToKey/test.py\"");
        }
        else{
            console.log('not A');
        }
    });
});