var express = require('express'); // Get the module
var app = express(); // Create express by calling the prototype in var express
var http = require('http').Server(app);
var io = require('socket.io')(http);
var nb_players = -1;
let players = [];
let ids = [];
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.use("/public", express.static(__dirname + '/public'));

http.listen(3000, function(){
  console.log('listening on *:3000');
});
io.on('connection', (socket) => {
    let THid = socket.id;
    console.log('a user connected');
    socket.emit("newPlayer", NewPlayer(socket.id));
    socket.on("fireball", function(data){
        //console.log(data.msg.x);
        console.log({...players});
        ids.forEach(el => {
            detectCollision(players[el].x, players[el].y,  data.msg.x, data.msg.y, el)
        });
        //detectCollision(el.x, el.y,  data.msg.x, data.msg.y)
    });
    socket.on("PlayerMoved", function(msg){
        players[socket.id] = msg;
        socket.broadcast.emit("AplayerMoved", sendCoords(THid));
    });
    socket.on('disconnect', () => {
      console.log('user disconnected');
      socket.broadcast.emit("PlayerDisconnected", DisconnectedPlayer(socket.id) );
    });
  });
  function DisconnectedPlayer(id){
      console.log("OLD IDs " + ids);
      const index = ids.indexOf(id);
      if (index > -1) {
        ids.splice(index, 1);
      }
    console.log("NEW IDs " + ids);
      console.log("OLD PLA " + players);
    players = players.filter(function(item) {
        return item.Id != id;
    });
    console.log("NEW PLA " + players);
  }
  function NewPlayer(id){
      nb_players++;
      ids[nb_players] = id;
      players[id] = nb_players;
      return {id: nb_players};
  }
 function sendCoords(id){
     var copie = Object.assign({}, {...players});
    return copie;

 }
 function detectCollision(ply, plx, firex, firey, id){
      if (plx < firex + 75 &&
        plx + 75 > firex &&
        ply < firey + 75 &&
        75 + ply > firey) {
            players[id].health = players[id].health - 25;
            console.log(id);
            io.to(id).emit("hbardown", players[id].health);
     }
     /*if (rect1.x < rect2.x + rect2.width &&
   rect1.x + rect1.width > rect2.x &&
   rect1.y < rect2.y + rect2.height &&
   rect1.height + rect1.y > rect2.y) {
    // collision détectée !
}
*/
     
 }