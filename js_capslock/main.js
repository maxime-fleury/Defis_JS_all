let warning = document.getElementById("warning");
let warning2 = document.getElementById("warning2");
warning.style.display = "none";
warning2.style.display = "none";
document.getElementById("input").addEventListener("keyup",
function(event) {
	if(event.getModifierState("CapsLock")){
		warning.style.display = "none";
	}
	else{
		warning.style.display = "block";
	}
	if(event.getModifierState("NumLock")){
		warning2.style.display = "none";
	}
	else{
		warning2.style.display = "block";
	}
});