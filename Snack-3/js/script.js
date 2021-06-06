// -----------------terzo snack  il software deve chiedere per 10 volte all’utente di inserire un numero.
//                               Il programma stampa la somma di tutti i numeri inseriti.

var result = 0;

for( var x = 1; x <= 10; x++){
    var numero = parseInt(prompt('inserisci numero'));
    result += numero;
    document.getElementById('result').innerHTML = result;    
}