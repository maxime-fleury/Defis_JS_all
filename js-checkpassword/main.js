const password = document.getElementById("password") ;
const checkPassword = document.getElementById("check-password") ;
const alert = document.getElementById("message") ;
const progress = document.getElementById("progress");
document.getElementById("sendbtn").disabled = true;
checkPassword.addEventListener('keyup', function() {
    checkPass();
});
password.addEventListener('keyup', function() {
    checkPass();
});
function checkPass(){
    var p = password.value;
    var checkp = checkPassword.value;
    var i = 0;
    if(p == checkp){
        alert.innerHTML = "Mot de passe identique";
        alert.style.color = "green";
        if(p.length < 8){
            alert.innerHTML += ", <span class='red'>minimum 8 caractères</span>";
            i++;
        }else{
            alert.innerHTML += ", <span class='green'>plus de 8 caractères</span>";
        }
        var numeric = /\d/;
        if(!numeric.test(p)){
            alert.innerHTML += ", <span class='red'>doit contenir un chiffre</span>";
            i++;
        }
        else{
            alert.innerHTML += ", <span class='green'>contiens un chiffre</span>";
        }
        if(p == p.toLowerCase() && p != p.toUpperCase()){
            alert.innerHTML += ", <span class='red'>Une majuscule et une Minuscule</span>";
            i++;
        }
        else{
            alert.innerHTML += ", <span class='green'>Une majuscule et une Minuscule</span>";
        }
        var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if(format.test(p)){
            alert.innerHTML += ", <span class='green'>Caractere spécial</span>";
        }
        else{
            alert.innerHTML += ", <span class='red'>Caractere spécial</span>";
            i++;
        }
    }
    else{
        alert.innerHTML = "Le mot de passe ne correspondant pas.";
        alert.style.color = "red";
        i=-1;
    }
    
    if(p == "" | checkp == ""){
        alert.innerHTML = "";
        alert.style.color = "black";
    }
    if(i != 0){
        document.getElementById("sendbtn").disabled = true;
        progress.value = (1/i) + "";
    }else if(i != -1){
        progress.value = "1";
        document.getElementById("sendbtn").disabled = false;
    }
    else{
        progress.value = "0";
        document.getElementById("sendbtn").disabled = false;
    }
    
}