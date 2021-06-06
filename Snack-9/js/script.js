// Calcola la somma e la media dei primi 10 numeri.

var sum = 0;

var MaxNum = 10

for(var i = 1; i <= MaxNum; i++){

    sum += i;
}

var avr = sum/10;

document.getElementById('output').innerHTML += '<li>' + sum + '-----' + avr + '</li>'

