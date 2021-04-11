

var modalbutton=document.getElementById('modalb');
modalbutton.onclick=() => {
    var modals,modale;
    modale=document.getElementById("modale").value;
    modals=document.getElementById("modals").value;
    swal({
        title: "Kayıt BaşarılıBaşarılı",
        text: "Düğmeye tıkladınız!",
        icon: "success",
        button: "Kapar",
      });


    var login=document.getElementById('loginb');
login.onclick=() => {
    var logine,logins;
    logine=document.getElementById("logine").value;
    logins=document.getElementById("logins").value;
   
    if(modale == logine && modals == logins){
        swal({
            title: "Giriş Başarılı",
            text: "Düğmeye tıkladınız!",
            icon: "success",
            button: "Kapar",
          });
   }
    else swal({
        title: "Giriş Başarısız",
        text: "Düğmeye tıkladınız!",
        icon: "warning",
        button: "Kapat",
      });
}




}

