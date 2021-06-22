const input = document.getElementById("input") ;
const display = document.getElementById("display");
document.getElementById('checkbox').addEventListener('click',
function() {
 if(document.getElementById("checkbox").checked){
		input.type = "text";
		display.innerHTML = "Hide";
	}
	else{
		input.type = "password";
		display.innerHTML = "Show";
	}
})