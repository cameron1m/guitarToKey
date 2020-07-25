const express = require('express');
let app = express();
let serv = require('http').Server(app);
const io = require('socket.io') (serv, {});


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
        if(data == 'W'){
            execute("C:/Users/Cameron/AppData/Local/Programs/Python/Python37/python.exe \"d:/School/Computer Science Principles/guitarToKey/python/w.py\"");
        }
        if(data == 'A'){
            execute("C:/Users/Cameron/AppData/Local/Programs/Python/Python37/python.exe \"d:/School/Computer Science Principles/guitarToKey/python/a.py\"");
        }
        if(data == 'S'){
            execute("C:/Users/Cameron/AppData/Local/Programs/Python/Python37/python.exe \"d:/School/Computer Science Principles/guitarToKey/python/s.py\"");
        }
        if(data == 'D'){
            execute("C:/Users/Cameron/AppData/Local/Programs/Python/Python37/python.exe \"d:/School/Computer Science Principles/guitarToKey/python/d.py\"");
        }

        if(data == 'Up'){
            execute("C:/Users/Camerond/AppData/Local/Programs/Python/Python37/python.exe \"d:/School/Computer Science Principles/guitarToKey/python/mouseUp.py\"");
        }
        if(data == 'Down'){
            execute("C:/Users/Cameron/AppData/Local/Programs/Python/Python37/python.exe \"d:/School/Computer Science Principles/guitarToKey/python/mouseDown.py\"");
        }
        if(data == 'Left'){
            execute("C:/Users/Cameron/AppData/Local/Programs/Python/Python37/python.exe \"d:/School/Computer Science Principles/guitarToKey/python/mouseLeft.py\"");
        }
        if(data == 'Right'){
            execute("C:/Users/Cameron/AppData/Local/Programs/Python/Python37/python.exe \"d:/School/Computer Science Principles/guitarToKey/python/mouseRight.py\"");
        }
        if(data == 'Next Weapon'){
            execute("C:/Users/Cameron/AppData/Local/Programs/Python/Python37/python.exe \"d:/School/Computer Science Principles/guitarToKey/python/nextWeapon.py\"");
        }
        if(data == 'Reload'){
            execute("C:/Users/Cameron/AppData/Local/Programs/Python/Python37/python.exe \"d:/School/Computer Science Principles/guitarToKey/python/reloadWeapon.py\"");
        }
        if(data == 'Sprint'){
            execute("C:/Users/Cameron/AppData/Local/Programs/Python/Python37/python.exe \"d:/School/Computer Science Principles/guitarToKey/python/sprint.py\"");
        }
        if(data == 'Crouch'){
            execute("C:/Users/Cameron/AppData/Local/Programs/Python/Python37/python.exe \"d:/School/Computer Science Principles/guitarToKey/python/crouch.py\"");
        }
        if (data == 'Default'){
            console.log('DEFAULT');
        }
        else{
            // console.log('DEFAULT');
        }
    });
});