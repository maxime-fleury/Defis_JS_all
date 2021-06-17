let rotateScreenDiv = document.getElementById("rotateScreen");
let displayContentDiv = document.getElementById('displayContent');
document.addEventListener("DOMContentLoaded", (event) => {
	window.addEventListener("resize", detectOrientation) ;
	detectOrientation() ;
   });
   function detectOrientation(){
	//Votre code ici
	if(screen.width < 700 || screen.height < 500)
	if (screen.width > screen.height) {
		// landscape
		rotateScreenDiv.style.display = "none";
		displayContentDiv.style.display = "block";
		console.log("landscape");
	} else {
		// portrait
		rotateScreenDiv.style.display = "block";
		displayContentDiv.style.display = "none";
		console.log("portrait");
   }
   else{
	rotateScreenDiv.style.display = "none";
	displayContentDiv.style.display = "block";
	console.log("landscape"); 
   }
   }
   