let balance = document.getElementById("balanceIcon");
let lock = document.getElementById("lock");
let battery = document.getElementById("battery");
function balanceScale() {
		setTimeout(function(){
			balance.innerHTML = "&#xf515;";
		},1000);
		setTimeout(function(){
			balance.innerHTML = "&#xf24e;";
		},2000);
		setTimeout(function(){
			balance.innerHTML = "&#xf516;";
		},3000);	
		setTimeout(function(){
			balance.innerHTML = "&#xf24e;";	
		},4000);
}
balanceScale();
setInterval(balanceScale, 4000);
locka();
function locka(){
		setTimeout(function(){
			lock.innerHTML = "&#xf3c1;";
		},1000);
		setTimeout(function(){
			lock.innerHTML = "&#xf023;";
		},2000);
}
setInterval(locka,2000);
batter();
function batter(){
		setTimeout(function(){
			battery.innerHTML = "&#xf244;";
		},500);
		setTimeout(function(){
			battery.innerHTML = "&#xf243;";
		},1000);
		setTimeout(function(){
			battery.innerHTML = "&#xf242;";
		},1500);
		setTimeout(function(){
			battery.innerHTML = "&#xf241;";
		},2000);
		setTimeout(function(){
			battery.innerHTML = "&#xf240;";
		},2500);
}
setInterval(batter,2500);