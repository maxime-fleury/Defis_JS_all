const loading = document.getElementById("loadingAnimation") ;
const content = document.getElementById("displayContent") ;
window.onload = showContent();
function showContent() {
 setTimeout(function(){
	loading.style.display = "none";
	content.style.display = "block";
	},3000);
}