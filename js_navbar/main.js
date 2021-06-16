window.onscroll = slideDown;
function slideDown() {
 // Votre code ici
 var navbar = document.getElementById('navbar');
 var nbpixels = document.querySelector("html").scrollTop;

 if(nbpixels >	 150)
 	navbar.style.top = 0;
 else
	navbar.style.top = "-56px";
	
}