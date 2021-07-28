$(document).ready(function () {
    $(".dropdown-trigger").dropdown();
    $('.modal').modal();

     
    $("#btn_login").click(function () {
        console.log("Login clicked");
         var email=$("#email").val();
         var password=$("#password").val();
         if(email==""){}
         if(password==""){}
         if(email!="" && password!=""){
            const url="http://gotrade.goread.in/loginAPI.php?email="+email+"@gmail.com&password="+password;
            $.ajax({
                type: 'GET',
                url: url,                 
                success: function (json) {
                    console.log("json > ",json);
                    return false;
                    if(json.status=="true"){
                        let uData={
                            "email":email                             
                        };
                       giveAccess(uData);
                     }else{
                        toastMsg("<span class='red-text text-lighten-4'>Sorry! Your are not Registered.</span>");
                     }
                },
                error: function (parsedjson, textStatus, errorThrown) {

                }
            });


             
             
         }
    });

    function toastMsg(msg) {
        M.Toast.dismissAll();
        M.toast({ html: msg, classes: 'rounded' });
    }

function giveAccess(uData){
    setCookie("GTuserEmail", uData.email, 1);
    goToGTDash();    
}

function goToGTDash(){
    let GTuserEmail= getCookie("GTuserEmail");
   if(GTuserEmail!=""){
    window.location.replace("/gtdash.html");
   }else{
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