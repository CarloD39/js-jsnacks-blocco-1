// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo


var number = parseInt(prompt('inserisci un numero'));

var ExtraNumber = 1;

if(number % 2 !== 0){
    document.getElementById('output').innerHTML = number + ExtraNumber;
}

else{
    document.getElementById('output').innerHTML = number;
}