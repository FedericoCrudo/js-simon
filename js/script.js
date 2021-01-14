// Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. Dopo che
// sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
$(document).ready(function(){
    //dichiarazione var
    var numIdovinare=[];
    var numUtente=[];
    var numIdovinati=[]; 
    var num=0;
    //caricamento numeri random da indovinare
    while(numIdovinare.length<5){
      num=getRandomIntInclusive(1,50);
       if(!numIdovinare.includes(num)){
         numIdovinare.push(num);
       }
    
    }
   alert("Cerca di memorizzare questi numeri:  "+numIdovinare);
    $("div.timer").css("display","flex");
    var secondi = 30;
    var countdown = setInterval(timer,1000);
    
    
    function timer() {
        if (secondi==0) {
            clearInterval(countdown);
            document.getElementById('esito').innerHTML = 'Hai terminato il tempo, prova a indovinare';
        }
        document.getElementById('time-left').innerHTML= secondi ;
        secondi--;
    }
    setTimeout(function(){
     var input=0;


    while(numUtente.length<5){
      input=parseInt(prompt("Prova a indovinare:  "));
       if(!numUtente.includes(input)){
        numUtente.push(input);
       }
       if(numIdovinare.includes(input)){
         numIdovinati.push(input);
       }
    }

    if(numIdovinati.length==5){
        $("#esito").css("color","green").text("Hai vinto");
    }  
    else{
        $("#esito").text("hai perso, hai indovinato "+numIdovinati.length+" numeri:  "+numIdovinati);
  
  }

 }, 34000);
 //controllo esito



});

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
}
