// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.



var sum = 0;

var MaxNum = 5;



for( var n =1; n<=MaxNum; n++){
    var cifra = parseInt(prompt('inserisci i numeri'));
    sum += cifra;
}


var sum2 = 0;
var x = 1;

while( x <= 5){
    var cifra2 = parseInt(prompt('inserisci i numeri'));
    sum2 += cifra2;
    x++;
}

document.getElementById('snack-10').innerHTML += sum + '<br/>' + sum2;


