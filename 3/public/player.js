const player = document.getElementById('player');
var fireBolt = document.getElementById("fireBolt");
var manabar = document.getElementById("manabar");
const gamecontainer = document.getElementById("players");
var objet = document.getElementById('objet');
fireBolt.style.visibility = "hidden";
objet.style.visibility = "hidden";
const moveSize = 24;
const firespeed = 8;
var playerWalk = 0;
var direction = 0;
var firecooldown =1000;
var firetime = 400;
var firecooldown_value = 0;
var firemanacost = 5;
var id = 0;
const socket = io();

socket.on("newPlayer", function(data){ id = data.id;});
socket.on("AplayerMoved", function(data){
	console.log(data);
	var array = Object.keys(data)
    .map(function(key) {
        return data[key];
    });
	gamecontainer.innerHTML = "";
	array.forEach(el => {showPlayers(el)});
});
socket.on("hbardown", function(data){
	healthbar.value = data;
	console.log(data+"HEALTH");
});

document.addEventListener('keydown', function(event) {
    if (event.code == 'ArrowUp' || event.code == 'KeyW' ) {
        playerWalk = playerWalk + 1;
        // Votre code ici
		direction = 1;
        if (playerWalk % 2 == 0)
            move(player, 5);
        else move(player, 6);
        if (player.style.top.split('px')[0] > 0)
            player.style.top = (player.offsetTop - moveSize) + "px";
    } if (event.code == 'ArrowRight' || event.code == 'KeyD') {
        playerWalk = playerWalk + 1;
        // Votre code ici
		direction = 3;
        if (playerWalk % 2 == 0)
            move(player, 7);
        else move(player, 8);
        if (player.style.left.split("px")[0] < 744)
            player.style.left = (player.offsetLeft + moveSize) + "px";
    } if (event.code == 'ArrowDown' || event.code == 'KeyS') {
        playerWalk = playerWalk + 1;
        // Votre code ici
		direction = 0;
        if (playerWalk % 2 == 0)
            move(player, 1);
        else move(player, 2);
        if (player.style.top.split("px")[0] < 744)
            player.style.top = (player.offsetTop + moveSize) + "px";
    } 	if (event.code == 'ArrowLeft' || event.code == 'KeyA') {
        playerWalk = playerWalk + 1;
        // Votre code ici
		direction = 2;
        if (playerWalk % 2 == 0)
            move(player, 3);
        else move(player, 4);
        if (player.style.left.split("px")[0] > 0)
            player.style.left = (player.offsetLeft - moveSize) + "px";
    }
	if(event.code == 'KeyE') {
		if(manabar.value>=60){
			console.log(manabar.value);
			var x = player.style.left.split("px")[0];
			var y = player.style.top.split("px")[0];
			//x = parseInt(x) + 80;
			objet.style.left = x + "px";
			objet.style.top = y + "px";
			manabar.value = parseInt(manabar.value, 10)-(60);
			objet.style.visibility = "visible";
			let sizeObjet = 1;
			interval = setInterval(function(){
				objet.style.transform = "scale(" + (sizeObjet) + ")";
				 sizeObjet+=0.10;
				 xy = chg_direct(x,y, temp_direction);
				 x = parseInt(xy[0],10);
				 y = parseInt(xy[1],10);
				 objet.style.left = x + "px";
				 objet.style.top = y + "px";
				 temp_direction = xy[2];
				},10);
			var temp_direction = direction;
			setTimeout(() => {
				sizeObjet = 1;
				objet.style.visibility = "hidden";
				objet.style.transform = "scale(" + sizeObjet + ")";

				clearInterval(interval);
			}, 800);
		}
	}
	//move manabar
	manabar.style.top = (parseInt(player.style.top.split('px')[0]) - 18 ) + "px";
	manabar.style.left = (parseInt(player.style.left.split('px')[0]) - 55 ) + "px";

	healthbar.style.top = (parseInt(player.style.top.split('px')[0]) - 35 ) + "px";
	healthbar.style.left = (parseInt(player.style.left.split('px')[0]) - 55 ) + "px";

});
serverLoop = setInterval(function(){
		//update on server
		socket.emit("PlayerMoved", { x:(parseInt(player.style.top.split('px')[0])), y:(parseInt(player.style.left.split('px')[0])), id, direction, mana:manabar.value, health:healthbar.value});
},50);
document.addEventListener('keyup', function(event) {
	 if (event.code == 'Space') {
		var x = player.style.left.split("px")[0];
		var y = player.style.top.split("px")[0];
		throwFireBolt(x,y);
	 }
});

function move(player, how) {
    how = "url('/public/img/" + how + ".png')";
    player.style.backgroundImage = how;
}
function throwFireBolt(x,y){
	if((manabar.value >= firemanacost) && (firecooldown_value >= firecooldown)){
		manabar.value = parseInt(manabar.value, 10)-firemanacost;
		fireBolt.style.left = x + "px";
		fireBolt.style.top = y + "px";
		
			fireBolt.style.visibility = "visible";
			var temp_direction = direction;
			var inter = setInterval(function(){
				xy = chg_direct(x,y, temp_direction);
				x = parseInt(xy[0],10);
				y = parseInt(xy[1],10);
				fireBolt.style.left = x + "px";
				fireBolt.style.top = y + "px";
				temp_direction = xy[2];
				msg = {x, y, direction: xy[2]};
				socket.emit("fireball", {msg});
			},7);
		setTimeout(function(){clearInterval(inter);fireBolt.style.visibility = "hidden"; },firetime);
		firecooldown_value = 0;
	}
}
function chg_direct(x,y,temp_direction){
	var xy = [parseInt(x,10),parseInt(y,10), temp_direction];
	switch(temp_direction){
		case 0:
			xy[1]+=firespeed;
			if(xy[1]>768) temp_direction = 1;
		break;
		case 1:
			xy[1]-=firespeed;
			if(xy[1]<0) temp_direction = 0;
		break;
		case 2:
			xy[0]-=firespeed;
			if(xy[0]<0) temp_direction = 3;
		break;
		case 3:
			xy[0]+=firespeed;
			if(xy[0]>768) temp_direction = 2;
		break;
	}
	xy[2] = temp_direction;
	return xy;
}
manaInterval = setInterval(function(){
	if(parseInt(manabar.value) <= 100)manabar.value = parseInt(manabar.value,10)+1;
},50);

healthInterval = setInterval(function(){
	if(parseInt(healthbar.value) <= 100)healthbar.value = parseInt(healthbar.value,10)+1;
},50);
function showPlayers(data){
	if(data.id != id){
		console.log(data.x + " " + data.y  + " " +  data.id);
		let healthbarpla = document.createElement("progress");
			healthbarpla.className = "healthbar";
		let manabarpla = document.createElement("progress");
			manabarpla.className = "manabar";
			manabarpla.value = data.mana;
			healthbarpla.value = data.health;
			healthbarpla.max = 100;
			manabarpla.max = 100;
		let pla = document.createElement("div");
		//pla.id = "pla" + data.id;
		pla.className = "player";
		pla.style.display = "block";
		gamecontainer.appendChild(pla);
		gamecontainer.appendChild(manabarpla);
		gamecontainer.appendChild(healthbarpla);
		pla.style.left = data.y + "px";
		pla.style.top = data.x + "px";
		//move manabar
		manabarpla.style.top = (parseInt(pla.style.top.split('px')[0]) - 18 ) + "px";
		manabarpla.style.left = (parseInt(pla.style.left.split('px')[0]) - 55 ) + "px";

		healthbarpla.style.top = (parseInt(pla.style.top.split('px')[0]) - 35 ) + "px";
		healthbarpla.style.left = (parseInt(pla.style.left.split('px')[0]) - 55 ) + "px";

		how = "url('/public/img/" + parseInt(parseInt(data.direction)+1) + ".png')";
		pla.style.backgroundImage = how;
	}
}

firecooldownInterval = setInterval(function(){
	firecooldown_value+=25;
},25);