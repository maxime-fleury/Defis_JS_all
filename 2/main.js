const convert = document.getElementById('convert');
const ascii = document.getElementById("ascii");
var msgToCode = document.getElementById('msgToCode');
var cryted = document.getElementById('crypted');


convert.addEventListener("click", function(){crypted.innerHTML = toBinary(msgToCode);});
ascii.addEventListener("click", function(){crypted.innerHTML = reverse(msgToCode);});

function toBinary(msgToCode){
	var res = "";
	//créer un tableau pour chaque character, pour chaque, 
	//ajoute à res.
	//le code ascii => binaire + " ". (code ascii (decimal => vers base 2))
	msgToCode.value.split('').forEach(k => res+= (k.charCodeAt(0).toString(2) + " "));
	
	return res;
}

function reverse(msgToCode){
	var res = "";
	var re2 = "";
	//créer un tableau pour chaque character, pour chaque, 
	//ajoute à res.
	//le nombre binaire transformé en int de chaque lettre avec un espace
	//base 2 à base 10
	msgToCode.value.split(' ').forEach(k => res+= (parseInt(k, 2) + " "));
	
	//on transforme le nombre en ascii
	res.split(' ').forEach(k => re2+= String.fromCharCode(k)  );
	return re2;
}