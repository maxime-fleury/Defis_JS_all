const player = document.getElementById('player');
var fireBolt = document.getElementById("fireBolt");
var manabar = document.getElementById("manabar");
fireBolt.style.visibility = "hidden";
const moveSize = 24;
const firespeed = 16;
var playerWalk = 0;
var direction = 0;
var firecooldown = 40;
var firetime = 400;
var firecooldown_value = 0;
var firemanacost = 5;
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
	
	//move manabar
	manabar.style.top = (parseInt(player.style.top.split('px')[0]) - 15 ) + "px";
	manabar.style.left = (parseInt(player.style.left.split('px')[0]) - 55 ) + "px";
});
document.addEventListener('keyup', function(event) {
	 if (event.code == 'Space') {
		var x = player.style.left.split("px")[0];
		var y = player.style.top.split("px")[0];
		throwFireBolt(x,y);
	 }
});

function move(player, how) {
    how = "url('img/" + how + ".png')";
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


firecooldownInterval = setInterval(function(){
	firecooldown_value+=25;
},25);