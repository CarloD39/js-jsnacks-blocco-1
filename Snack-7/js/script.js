// Stampa le potenze di 2 fino a 1000.

for (n = 0; n<= 1000; n++){
    document.getElementById('potenze').innerHTML += '<br/>' + Math.pow(2, n) ;
}