$(document).ready(function () {
    $(".dropdown-trigger").dropdown();
    $('.modal').modal();
    $('.collapsible').collapsible();
    checkIfUserLogged();
    

    function blinker() {
        $('.blink').fadeOut(200);
        $('.blink').fadeIn(200);
    }
    setInterval(blinker, 700);

 


    $("#log-out-btn").click(function(){
        setCookie("GTuserEmail", "", 1);
        window.location.replace("/login.html"); 
    });

function giveAccess(uData){
    setCookie("GTuserEmail", uData.email, 1);
    goToGTDash(); 
    window.location.replace("/gtdash.html");   
}

 

function checkIfUserLogged(){
    let GTuserEmail= getCookie("GTuserEmail");
    if(GTuserEmail==""){
        window.location.replace("/login.html"); 
    }
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


});