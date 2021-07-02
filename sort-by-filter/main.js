all_btn = document.getElementById("all_btn");
summer_btn = document.getElementById("summer_btn");
autumn_btn = document.getElementById("autumn_btn");
winter_btn = document.getElementById("winter_btn");
spring_btn = document.getElementById("spring_btn");
all_btn.style.background = "green";
document.body.style.background = "white";
all_btn.addEventListener("click", function(){
    changeActif("all_btn");
    showAllpics();
    document.body.style.background = "white";

});
summer_btn.addEventListener("click", function(){
    changeActif("summer_btn");
    showAllpics();
    hide("autumn");
    hide("winter");
    hide("spring");
    document.body.style.background = "#FFA500";
});
autumn_btn.addEventListener("click", function(){
    changeActif("autumn_btn");
    showAllpics();
    hide("summer");
    hide("winter");
    hide("spring");
    document.body.style.background = "#A84B28";
});
winter_btn.addEventListener("click", function(){
    changeActif("winter_btn");
    showAllpics();
    hide("summer");
    hide("autumn");
    hide("spring");
    document.body.style.background = "#4A82C0";

});
spring_btn.addEventListener("click", function(){
    changeActif("spring_btn");
    showAllpics();
    hide("summer");
    hide("winter");
    hide("autumn");
    document.body.style.background = "#445415";

});
function showAllpics(){
    all_imgs = document.querySelectorAll("#imgs img");
    nb = all_imgs.length;
    for(i=0;i<nb;i++){
        all_imgs[i].style.display = "block";
    }
}
function hide(tclass){
    all_imgs = document.querySelectorAll("#imgs img."+tclass);
    nb = all_imgs.length;
    for(i=0;i<nb;i++){
        all_imgs[i].style.display = "none";
    }
}
function changeActif(tid){
    btns = document.querySelectorAll("button");
    nb = btns.length;
    for(i=0;i<nb;i++){
        btns[i].style.background = "red";
	if(btns[i].id == tid)
		 btns[i].style.background = "green";
    }
}