const buttonCopy = document.getElementById("button-copy") ;
buttonCopy.addEventListener("click", function() {
	let t = document.getElementById("copytext");
	t.focus();
	t.select();
	document.execCommand("copy");
	let q = document.getElementById("paste-text");
	q.focus();
	document.execCommand("paste");
	
});
