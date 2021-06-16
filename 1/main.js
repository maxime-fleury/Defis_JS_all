const btn = document.getElementById('btn');
var result = document.getElementById('result');

btn.addEventListener("click", function(){result.innerHTML = headOrTails();});

function headOrTails(){
	var res = "Head";
	var rnd = Math.floor(Math.random() *2);
	//console.log(rnd);
	if( rnd  == 1 )
		res = "Tail";
	return res;
}
