all_btn = document.getElementById("all_btn");
summer_btn = document.getElementById("summer_btn");
autumn_btn = document.getElementById("autumn_btn");
winter_btn = document.getElementById("winter_btn");
spring_btn = document.getElementById("spring_btn");
all_btn.addEventListener("click", function(){
    showAllpics();
});
summer_btn.addEventListener("click", function(){
    showAllpics();
    hide("autumn");
    hide("winter");
    hide("spring");
});
autumn_btn.addEventListener("click", function(){
    showAllpics();
    hide("summer");
    hide("winter");
    hide("spring");
});
winter_btn.addEventListener("click", function(){
    showAllpics();
    hide("summer");
    hide("autumn");
    hide("spring");
});
spring_btn.addEventListener("click", function(){
    showAllpics();
    hide("summer");
    hide("winter");
    hide("autumn");
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